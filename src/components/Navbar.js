import React, { Component} from "react";
import logo from "./images/logo/logo.png";

 class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
    
    return(

        <nav className="navbar, navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
        <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html"><img src={logo} alt="logo"/></a>
                        </div>
                        <ul className="menu ml-lg-auto">
                            <li>
                                <a href="#0" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="/">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="/second">Home 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Blog</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html">Blog Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="award.html">awards</a>
                            </li>
                            <li>
                                <a href="contact.html">contact</a>7
                            </li>
                            <li>
                                <a href="#0" className="custom-button">Follow Me</a>
                            </li>
                        </ul>
                        <div className="header-bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    </nav>
   )
}