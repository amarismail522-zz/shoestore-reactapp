import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo-div">
                <span style={{ fontSize: "30px", fontWeight: "500" }}>Shoe </span> {"   "}
                <span style={{ fontWeight: "700", fontSize: "35px", color: "red" }}> Box</span>
            </div>
            <ul>
                <li>
                    <Link to="/" as="li" className="navLink">Home</Link>
                </li>
                <li>
                    <Link to="/Product" as="li" className="navLink">Product</Link>
                </li>



            </ul>
        </div>
    )
}
