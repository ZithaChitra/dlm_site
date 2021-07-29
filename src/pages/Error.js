import React from 'react'
import Navbar from '../components/header/navbar/Navbar'
import { Link} from "react-router-dom"

function Error() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h3>Oops !</h3>
                <p>This page does not exit <br></br>
                    <Link to="*">Lets get you back home</Link>
                </p>
            </div>
        </div>
    )
}

export default Error
