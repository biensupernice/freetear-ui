import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Home = () => {

    return (
        <div className="styles">
            <div className="elevation">
                <div className="topnav">
                    <div>
                        <img class="titleicon" src={require('../assets/logo1.png')} />
                    </div>
                    <div className="nav">
                        <a class="active" href="#home"><b>Home</b></a>
                        <a href="#feature">Features</a>
                    </div>
                </div>
                <div className="content">
                    <div className="title">
                        <div className="p1">
                            Free-Tear
                        </div>
                        <div className="p2">
                            Never pay to deploy your side projects again.                        
                        </div>
                    </div>
                    <aside class="jsx-541854853 demo">
                        <div class="jsx-3555686659 window white">
                            <div class="jsx-3555686659 header" id="head">
                                <div class="jsx-3555686659 title "></div>
                                <div className="fa-circle">
                                    <FontAwesomeIcon color="red" icon={faCircle} />
                                </div>
                                <div className="fa-circle1">
                                    <FontAwesomeIcon color="yellow" icon={faCircle} />
                                </div>
                                <div className="fa-circle2">
                                    <FontAwesomeIcon color="green" icon={faCircle} />
                                </div>
                                <br />
                                <span class="jsx-3555686659 icon close"></span>
                                <span class="jsx-3555686659 icon minimize"></span>
                                <span class="jsx-3555686659 icon fullScreen"></span>
                            </div>
                            <div class="jsx-3555686659 body ">
                                <div class="jsx-755189093 console white" id="head1">
                                    <pre>
                                        <span class="jsx-4004342434 prompt white">
                                            <span class="jsx-4004342434 triangle">▲</span> my-site/ </span>tear init<br />
                                        <span class="dim">?</span> What type of app will be deploy? <strong>Python App</strong>
                                        <br /><span class="dim">?</span> What type of resources does your project need
                                        <br /><span class="dim">&gt;</span> Message Broker Service
                                        <br /><span class="dim">&gt;</span> Data Store Service
                                        <br /><span><span class="jsx-4004342434 triangle">▲</span> my-site/ </span>tear deploy<br />
                                        <br /><span class="jsx-4004342434 prompt white"><span class="jsx-4004342434 triangle">▲</span> my-site/ </span><span class="jsx-2460122015 caret"></span>
                                    </pre>
              </div></div></div></aside>
                </div>
            </div>
       
        </div>
    )
}
export default Home;