import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Implement the class component
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    nextSlide = () => {
        this.setState((prevState) => ({
            index: prevState.index === images.length - 1 ? 0 : prevState.index + 1
        }));
    };

    prevSlide = () => {
        this.setState((prevState) => ({
            index: prevState.index === 0 ? images.length - 1 : prevState.index - 1
        }));
    };

    render() {
        const { index } = this.state;
        return (
            <div className="carousel">
                <div className='arrow' onClick={this.prevSlide}>
                    <ArrowBackIosIcon />
                </div>
                <div className="face-container" style={{ backgroundImage: `url(${images[index].img})` }}>
                    <h1>{images[index].title}</h1>
                    <p>{images[index].subtitle}</p>
                </div>
                <div className='arrow' onClick={this.nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        );
    }
}

export default Carousel;
