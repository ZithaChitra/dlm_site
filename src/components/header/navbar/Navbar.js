import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="light-blue darken-1" role="navigation">
                <div class="nav-wrapper container">
                <a id="logo-container" href="#" class="brand-logo">DLM</a>
                    <ul class="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>    
                        <li><a href="#">Enrollments</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                </ul>
                
                <ul id="nav-mobile" class="sidenav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
    )
}


