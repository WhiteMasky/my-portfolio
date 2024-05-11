import React from 'react'
import photo1 from "../assets/img/photo1.png";
import photo2 from "../assets/img/photo2.png";
import photo3 from "../assets/img/photo3.png";
import photo4 from "../assets/img/photo4.png";
import photo5 from "../assets/img/photo5.png";
import photo6 from "../assets/img/photo6.png";
import photo7 from "../assets/img/photo7.png";
import photo8 from "../assets/img/photo8.png";
import photo9 from "../assets/img/photo9.png";
import photo10 from "../assets/img/photo10.png";
import photo11 from "../assets/img/photo11.png";
import photo12 from "../assets/img/photo12.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // The Gallery component is a functional React component that renders a responsive image carousel.
    // At the start of the component, a responsive object is defined. 
    // This object specifies how many items to show in the carousel based on the current screen size. 
    // For example, on a super large desktop screen (between 3000 and 4000 pixels), it will show 5 items, 
    // while on a mobile screen (up to 464 pixels), it will show only 1 item.

    return (
        <section className="gallery-image" id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Me, Myself & I</h2>
                            <p>"No one has ever lived in the past, and no one will ever live in the future; the present is the form in which all life exists. "
                                <br>
                                </br>
                                - Arthur Schopenhauer, The Wisdom of Life</p>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__flipOutX"}>
                                        {/* Inside this div, there is a Carousel component that renders the image carousel. 
                                        The Carousel component receives several props, including the responsive object defined earlier, 
                                        and several boolean props that control its behavior, such as infinite, swipeable, draggable, 
                                        centerMode, and autoPlay. It also receives a className prop that applies some CSS classes to it. */}
                                        <Carousel
                                            responsive={responsive}
                                            infinite={true}
                                            swipeable={true}
                                            draggable={true}
                                            centerMode={true}
                                            autoPlay={true}
                                            autoPlaySpeed={3000}
                                            showDots={true}
                                            renderDotsOutside={true}
                                            className="owl-carousel owl-theme image-slider">
                                                {/* Inside the Carousel component, there are several divs, each representing an item in the carousel. 
                                                Each item contains an image and a heading. The images are sourced from variables photo1 through photo12, 
                                                which are not defined in the provided code but are presumably imported from elsewhere. 
                                                The alt attribute for each image is set to "Image", and the text content of the heading is a location name. */}
                                            <div className="item">
                                                <img src={photo1} alt="Image in Hangzhou" />
                                                <h5>Hangzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo2} alt="Image in Wuhan" />
                                                <h5>Wuhan, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo3} alt="Image in Hangzhou" />
                                                <h5>Hangzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo4} alt="Image in Los Angeles" />
                                                <h5>Los Angeles, US</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo5} alt="Image in Wenzhou" />
                                                <h5>Wenzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo6} alt="Image in Wenzhou" />
                                                <h5>Wenzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo7} alt="Image in Canberra" />
                                                <h5>Canberra, AU</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo8} alt="Image in Hangzhou" />
                                                <h5>Hangzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo9} alt="Image in Hangzhou" />
                                                <h5>Hangzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo10} alt="Image in Wenzhou" />
                                                <h5>Wenzhou, CN</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo11} alt="Image in Canberra" />
                                                <h5>Canberra, AU</h5>
                                            </div>
                                            <div className="item">
                                                <img src={photo12} alt="Image in San Diego" />
                                                <h5>San Diego, US</h5>
                                            </div>
                                        </Carousel>
                                    </div>}
                            </TrackVisibility>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
