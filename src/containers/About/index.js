import React from 'react';
import './style.css';
import $ from "jquery";import autoBind from "react-autobind";

class About extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    intervalId;
    componentDidMount() {
        // window.
        $("#slideshow > div:gt(0)").hide();

        this.intervalId = setInterval(function () {
            $('#slideshow > div:first')
                .fadeOut(5000)
                .next()
                .fadeIn(5000)
                .end()
                .appendTo('#slideshow');
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div id="slideshow" className='AboutContainer'>
                <div className='try'>
                    <div className='textBox'>
                    <h1 className="H1Title">About Us</h1>
                    <p className="AboutDescription">We are on a mission to make this site the best one we can.</p>
                    </div>
                </div>
                <div className='try'>
                    <div className='textBox'>
                    <h2 className="H2Title">Our Story</h2>
                    <p className="PTag">Luxury Motors was founded by Tehila Amram and Lital Maudah as part of software engineering to the internet course at thier fourth and last year of thier graduation.<br/>
                        This project was built by using a wide range of technologies as: <br/>
                        For client side: React  <br/>
                        For server side: Node.js  <br/>
                        For users authentication: Passport  <br/>
                        For database: MongoDB  <br/>
                        For chat: Socket.io  <br/>
                        For PWA: Media query  <br/>
                        and others like: JQuery, Axios  <br/>
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
