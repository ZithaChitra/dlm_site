import React from 'react'
import Navbar from './navbar/Navbar'
import headerImg from "./images/headerimg2.jpeg"


function HeaderMain() {
    return (
        <React.Fragment>
            <Navbar />
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br></br>
                        <h3 class="header center teal-text text-lighten-2">David Livingstone Memorial High School</h3>
                        <div class="row center">
                            <h5 class="header col s12 light">We can do it</h5>
                        </div>
                        <div class="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div class="parallax"><img src={headerImg} alt="Unsplashed background img 1" /></div>
            </div>
        </React.Fragment>
    )
}

export default HeaderMain
