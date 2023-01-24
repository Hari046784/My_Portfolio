import React from "react";
import '../Styles/Projects.css';

function Projects () {
    return (
        <div className="projects" id="project">
            <div className="title">
              <h1>My Personal Projects</h1>
            </div>

            <div className="projects-cards">
              <div className="card">
                <h3 className="card-head">Chat Application</h3>
                <p className="card-body">This is Real-time chating web appcation like what's app build with MERN Stack
                It's include feature ke one-on-one chat and Group chat.
               <span> Using Socket.io</span> for the Real Time experience</p>
               <span className="tech">React js Node js Express js MongoDB</span>
               <div className="card-footer">
                  <a href="!#" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="!#" target="_blank"rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                  <a href="!#" target="_blank"rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div> 
              </div>

              <div className="card">
                <h3 className="card-head">Web Scraping App</h3>
                <p className="card-body">This Project is a Web Scraping web appcation Like cashKaro,etc. Build with MERN Stack,
                  Datas are Scraping from other website like <span>Amazon </span> showing there Products in the website.
                </p>
                <span className="tech">React js Node js Express js MongoDB</span>
                <div className="card-footer">
               
                  <a href="!#" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                  <a href="!#" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                 
                  <a href="!#" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>

                <div className="card">
                    <h3 className="card-head">E-commerce Website</h3>
                    <p className="card-body">This is e-commersce website developed with ReactJs,
                    MongoDB NodeJs, Express Js and Frameworks like
                    Boostrap Js.
                    <br/> 
                    </p>
                    <span className="tech">React js Node js Express js MongoDB </span>
                    <div className="card-footer">
                
                        <a href="!#" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                        <a href="!#" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                        
                        <a href="!#" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <h3 className="card-head">E-commerce Website</h3>
                    <p className="card-body">This is e-commersce website developed with ReactJs,
                    MongoDB NodeJs, Express Js and Frameworks like
                    Boostrap Js. This website have two users admin/customers
                    and JWT Integration.
                    </p>
                    <span className="tech">React js Node js Express js MongoDB </span>
                    <div className="card-footer">
                
                        <a href="!#" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                        <a href="!#" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                        
                        <a href="!#" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="card">
                    <h3 className="card-head">E-commerce Website</h3>
                    <p className="card-body">This is e-commersce website developed with ReactJs,
                    MongoDB NodeJs, Express Js and Frameworks like
                    Boostrap Js. This website have two users admin/customers
                    and JWT Integration.
                    </p>
                    <span className="tech">React js Node js Express js MongoDB </span>
                    <div className="card-footer">
                
                        <a href="!#" target="_blank" rel="noreferrer">Front-end <i class="fa-brands fa-github"></i></a>
                        <a href="!#" target="_blank" rel="noreferrer">back-end <i class="fa-brands fa-github"></i></a>
                        
                        <a href="!#" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;