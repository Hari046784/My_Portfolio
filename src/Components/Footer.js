import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../Styles/Footer.css';


function Footer () {
    return(
        <>
            <footer className="text-center " >
                <div className="container pt-4">
                    <section className="mb-4 ">
                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="https://github.com/HaridassMurugan"
                            role="button"
                        ><GitHub/></a>

                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="https://www.linkedin.com/in/haridass-m-a7010a156/"
                            role="button"
                        ><LinkedIn/></a>

                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="#."
                            role="button"
                        ><Facebook/></a>

                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="#."
                            role="button"
                        ><Instagram/></a>

                    </section>
                </div>
                <div className="build text-center p-3" >
                Design & Built by Haridass &copy; 2023 
                </div>

            </footer>
        </>
    );
};

export default Footer;



                    
