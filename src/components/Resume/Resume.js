import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={require('../../assets/oli_profile.JPG')}
                                alt='avatar'
                                style={{ height: '300px', borderRadius: '50%' }} />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Oli Imonugo</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            My name is Oli Imonugo. I am new to the coding world but I am
                            enjoying every minute of learning new things. My background is in
                            sales and I am looking to become a full-stack developer upon
                            graduation. On the personal side, I am a tech nerd and love all
                            things automation. I am a huge football and basketball fanatic. I
                            have a beautiful 7 month old baby girl named Lulu. She is amazing. I
                            love watching movies and learning new things. As I continue on my
                            web developer journey, I will be updating this site with more
                            content so stay tuned...
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>2580 Norwich Trce, Snellville GA 30078</p>
                        <h5>Phone</h5>
                        <p>770-539-5150</p>
                        <h5>Email</h5>
                        <p>ollimmo@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2011}
                            endYear={2013}
                            schoolName='Georgia Perimeter College Clarkston, GA'
                            schoolDescription='Communication Associates Degree'
                        />

                        <Education
                            startYear={2007}
                            endYear={2010}
                            schoolName='Georgia State University Atlanta, GA'
                            schoolDescription='Communication'
                        />

                        <Education
                            startYear={2003}
                            endYear={2007}
                            schoolName='Brookwood High School Snellville, GA'
                            schoolDescription='Pre-College Education with High School Diploma'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2021}
                            endYear={'Present'}
                            jobName='Airgas Duluth, Georgia'
                            jobDescription='Total Access Specialist' />

                        <Experience
                            startYear={2020}
                            endYear={2021}
                            jobName='Sequim Asset Solutions, Marietta, Georgia'
                            jobDescription='Debt Counselor' />

                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName='ARS Heating and Cooling, Norcross, Georgia'
                            jobDescription='Customer Representative' />

                        <Experience
                            startYear={2016}
                            endYear={2019}
                            jobName='Ackerman Security Systems, Norcross, Georgia'
                            jobDescription='Sales Coordinator' />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>

                        <Skills
                            skill='HTML/CSS'
                            progress={80} />

                        <Skills
                            skill='JavaScript'
                            progress={60} />

                        <Skills
                            skill='React'
                            progress={30} />

                        <Skills
                            skill='NodeJS'
                            progress={50} />

                        <Skills
                            skill='MySQL'
                            progress={25} />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;