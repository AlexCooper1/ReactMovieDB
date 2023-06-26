import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    return (
        <Carousel className="align-items-center text-center">
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src='https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheIsland/e3c7ba70-35eb-42c8-8dc5-6417e7033dd3._UR3000,600_SX3000_FMwebp_.jpeg'
                    alt="The Island"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_Elvis_PVOD/d0b01735-8798-429c-b25e-36d44b03d23d._UR3000,600_SX3000_FMwebp_.jpeg"
                    alt="Elvis"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_ItalianJobThe2003/7adc9e93-7983-4530-90a6-e6e4193bf4cb._UR3000,600_SX3000_FMwebp_.jpeg"
                    alt="The Italian Job"
                />

            </Carousel.Item>

        </Carousel>
    );
}


export default Banner;
