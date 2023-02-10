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
                        src="/Images/profile picture.jpg"
                        alt="Profile_Picture"
                    />
                </div>
                
                <div className="profile-info aboutRight col-md-8" id="home">
                    <p>Hai, My name is</p>
                    <h1><strong>HARIDASS.</strong></h1>
                    <h2>I build things for the web</h2>
                    <div className="role">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'Full-Stack Developer', 'JavaScript Developer'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <div className="button">
                        <a
                            href="Resume/HARIDASS's Resume.pdf"
                            download="resume"
                            className="resume btn btn-primary text-center"
                        >Get Resume<DownloadIcon/></a>
                    </div>
                </div>
                

                
            </div>

        </div>
    );
};

export default Home;