import React from "react";
import "./landing-page.css";
import {Link} from "react-router-dom";
import Footer from "./Footer"

class Landing extends React.Component {
 
  render() {
    return (
      <div>
        <section className="flex-container">
          <header>
            <h1 className="title">Habitual Habits</h1>
          </header>
          <p className="description">create the habits you need to succeed</p>
          <section className="actions">
             <Link to='/login' className="login">Login</Link>
             <Link to='/signup' className="sign-up">Sign Up</Link>
          </section>
          <Footer/>
        </section>
       </div>
    );
  }
}

export default Landing;   