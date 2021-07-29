import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav class="light-blue darken-1" role="navigation">
                <div class="nav-wrapper container">
                    <Link to="/" id="logo-container" class="brand-logo">DLM</Link>
                    <ul class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/enrollments">Enrollments</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
                <ul id="nav-mobile" class="sidenav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <Link to="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>
            </nav>
        </div>
    )
}


