import React, { Component } from 'react'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import { Container } from 'react-bootstrap'
class Resume extends Component {
    render() {
        const education = [
                {
                    title:'B.Tech in Computer Science Engineering',
                    name:'Maharishi Markandeshwar Engineering College, Ambala',
                    interval:'July 2017 - Present',
                    percentage:'Current CGPA: 8.5/10'
                },
                {
                    title:'Higher Secondary, Central Board of Secondary Education',
                    name:'Maharaja Agrasen Public School, Fatehabad',
                    interval:'April 2015 - April 2016',
                    percentage:'Overall Percentage: 90.02 %'
                },
                {
                    title:'High School, Central Board of Secondary Education',
                    name:'D.A.V. Centenary Public School, Panipat',
                    interval:'April 2013 - April 2014',
                    percentage:'Overall CGPA: 9.8/10'
                }
        ]
        const languages = [
            {type: "Python", level: 75},
            {type: "Javascript", level: 75},
            {type: "HTML,CSS", level: 75},
            {type: "C/CPP", level: 60},
            {type: "JAVA(Core)", level: 60},
            ];
        const techs = ['Git/Github','Django','React','Redux','NodeJS','Native Android']
  
        const projects = [
            {
                title:'PACKAGING DESIGN OPTIMIZER AND SIMULATOR (SIH 2019-20)',
                interval:'Mar 2019-April 2019',
                desc:'Developed an algorithm called pure-fit algorithm which tells optimal dimensions of packaging boxes using a single commodity dimensions.',
                techUsed:'Three.js and Cannon.js for designing and simulation respectively',
                link:'https://github.com/chakshujain/Packaging_optimizer',
                image:process.env.PUBLIC_URL + '/files/pkgOptm.png'
            },
            {
                title:'SMART FOOD ORDERING SYSTEM ',
                interval:'Sep 2019-Nov 2019',
                desc:'A responsive web app for ordering food via tablets in fancy restaurants.',
                techUsed:'Backend- Django FrontEnd- HTML,CSS,JS,Bootstrap.',
                link:'https://github.com/chakshujain/FoodWorld',
                image:process.env.PUBLIC_URL + '/files/foodWorld.png'
            },
            {
                title:'FARMVISION (National Hackathon 2019-20 )',
                interval:'Dec 2019',
                desc:'Translated weather information for farmers using weather apis and machine learning.',
                techUsed:'Django, Python , Javascript',
                link:'https://github.com/chakshujain/FarmVision',
                image:process.env.PUBLIC_URL + '/files/foodWorld.png'
            },
            {
                title:'SOCIAL MEDIA APPLICATION',
                interval:'May 2019-July 2019',
                desc:'A Social media apk covering all the essential features of Facebook, Whatsapp and Instagram.',
                techUsed:'Native Android with Java and Firebase',
                link:'https://github.com/chakshujain/SocialMedia',
                image:process.env.PUBLIC_URL + '/files/socialMedia.jpg'
            }
        ]


        return (
            <Container className="container resume-container" id = "resume">
            <h3><strong>Resume..</strong></h3>
                <h6>Energetic Fresher holding Bachelor degree in Computer Science and Engineering from MM University,
                     good knowledge in computer subjects and ability to update and learn new concepts quickly and strong 
                     desire to work in software field. Motivated, Self Starter and want to excel in everything 
                    I do through passion towards work. Troubleshooter, ability to work in any environment and 
                    possessing  good analytical skills.
                </h6>
                <Education education = {education}/>
                <Skills languages = {languages} techs = {techs}  />
                <Projects projects = {projects}/>
            </Container>
        )
    }
}

export default Resume
