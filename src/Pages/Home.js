import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import '../Styles/Home.css';
import Typewriter from 'typewriter-effect';

function Home () {
    return (
        <div className="home">
            <div className="about">
                <div className="aboutLeft col-md-4">
                    <img
                        className="img-fluid"
                        src="/Images/Haridass profile picture.jpg"
                        alt="Profile_Picture"
                    />
                </div>
                
                <div className="profile-info aboutRight col-md-8" id="home">
                    <p>Hai, My name is</p>
                    <h1><strong>HARIDASS.</strong></h1>
                    <div className="role">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'Full-Stack Developer', 'NodeJS Developer'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <h5>I have completed my MERN stack development course, and have hands-on experience with web applications for creating a full-stack projects. I want to explore my knowledge in the web development field. I am currently looking for a job that will provide me with training in technologies such as React JS, Node JS, Express JS and MongoDB.</h5>
                    <br/>
                    <div className="button">
                        <a
                            href="https://drive.google.com/file/d/1-7rQqZtcs07Oi0XV7e24C0l8fl8n4eU6/view?usp=sharing"
                            download="resume"
                            target="_blank"
                            rel="noreferrer" 
                            className="resume btn btn-primary text-center"
                        >Get Resume<DownloadIcon/></a>
                    </div>
                </div>
                

                
            </div>

        </div>
    );
};

export default Home;