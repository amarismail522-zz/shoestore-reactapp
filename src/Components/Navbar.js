import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';



export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo-div">
                <span style={{ fontSize: "30px", fontWeight: "600" }}>Shoe </span> {"   "}
                <span style={{ fontWeight: "700", fontSize: "35px", color: "#D2302C" }}> Box</span>
            </div>
            <ul>
                <li>
                    <Button>
                        <Link to="/" as="li" className="navLink">Home</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to="/Product" as="li" className="navLink">Product</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to="/about" as="li" className="navLink">About</Link>
                    </Button>
                </li>
            </ul>
        </div>
    )
}
