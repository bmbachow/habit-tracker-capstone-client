import React from 'react';
import './App.css';


function Footer() {
    return (
        <ul className="Footer">
            <li>
                <a className="contact-icon" href="mailto:bmbachow@gmail.com?" title="email" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope clickables"></i>
                </a>
            </li>
            <li>
                <a className="contact-icon" href="https://github.com/bmbachow?tab=repositories" title="github"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github clickables"></i>
                </a>
            </li>
            <li>
                <a className="contact-icon" href="https://www.linkedin.com/in/brian-bachow/" title="linkedin"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square clickables"></i>
                </a>
            </li>
        </ul>

    );
}

export default Footer;