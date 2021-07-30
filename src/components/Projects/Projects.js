import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import js_quiz from "../../assets/JavascriptQuiz.png"
import refactoHomework from "../../assets/RefactorHomework.png"
import TheWatchSensor from "../../assets/TheWatchSensor.png"
import jogjotter from "../../assets/jogjotter.png"
import TechBlog from "../../assets/TechBlog.png"
import WorkoutTracker from "../../assets/WorkoutTracker.png"
import NoteTaker from "../../assets/NoteTaker.png"
import ComingSoon from "../../assets/Project3ComingSoon.png"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${js_quiz}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Take The Quiz
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='#' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${refactoHomework}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Code Refactor
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='https://github.com/oimonugo23/RefactorHomework01' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${TheWatchSensor}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            The Watch Sensor
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='https://ashak90.github.io/project-01' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${jogjotter}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Jog Jotter
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='https://l-e-g-2.herokuapp.com' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${TechBlog}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Tech Blog
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='#' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${WorkoutTracker}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Workout Tracker
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='#' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${NoteTaker}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Note Taker
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='#' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={8} className="job_card" >
                        <CardTitle style={{ color: 'black', height: '176px', background: `url(${ComingSoon}) center / cover` }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Coming Soon..
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <a href='#' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Homework</Tab>
                    <Tab>Group Projects</Tab>
                </Tabs> */}

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;