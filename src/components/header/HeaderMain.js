import React from 'react'
import Navbar from './navbar/Navbar'
import backImage from "./images/headerimg2.jpeg"
import "./HeaderMain.css"


// light-blue darken-1
function HeaderMain() {
    return (
        <React.Fragment>
            <Navbar />
            <div
                id="index-banner" className="parallax-container headermain">
                <div className="section no-pad-bot">
                    <div class="container">
                        <br></br>
                        <h3 class="header center white-text text-darken-1">David Livingstone Memorial High School</h3>
                        <div class="row center">
                            <h5 class="header col s12 light white-text">We can do it</h5>
                        </div>
                        <div class="row center">
                            <a href="#" id="download-button" class="btn-large waves-effect waves-light light-blue darken-1">Learn more</a>
                        </div>
                        <br></br>
                    </div>
                </div>
                {/* <div className="parallax"><img src={backImage} alt="Unsplashed background img 1" /></div> */}
            </div>
        </React.Fragment>
    )
}

export default HeaderMain
