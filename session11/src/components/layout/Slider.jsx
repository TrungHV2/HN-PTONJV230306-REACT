import React, { useEffect } from 'react';
import { Image, Link, Swiper } from 'react-nivo-slider';
import 'react-nivo-slider/es/style';
import 'react-nivo-slider/es/style/default';

import Loadable from 'react-loadable';

// const loadableComponent = Loadable({
//     loader: () => import('js/main.js'),
//     load
// })

export default function Slider() {
    useEffect(() => {
        import('js/main.js');
        return () => {

        }
    }, [])
    return (
        <>
            {/* Start slider area */}
            <div className="slider-area">
                {/* <Swiper id="slider">
                    <Image src="img/slider/1.jpg" />
                    <Image src="img/slider/2.jpg" />
                </Swiper> */}
                <div id="slider" className="nivoSlider">
                    <img
                        style={{ display: "none" }}
                        src="img/slider/1.jpg"
                        data-thumb="img/slider/1.jpg"
                        alt=""
                        title="#htmlcaption1"
                    />
                    <img
                        style={{ display: "none" }}
                        src="img/slider/2.jpg"
                        data-thumb="img/slider/2.jpg"
                        alt=""
                        title="#htmlcaption2"
                    />
                </div>
                <div
                    id="htmlcaption1"
                    className="pos-slideshow-caption nivo-html-caption nivo-caption"
                >
                    <div className="timing-bar" />
                    <div className="pos-slideshow-info pos-slideshow-info1">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1">
                                    <span className="txt">Camera Digital</span>
                                </div>
                                <div className="title2">
                                    <span className="txt">Brand D5500</span>
                                </div>
                                <div className="pos-slideshow-readmore">
                                    <a href="http://bootexperts.com/" title="Shop now">
                                        Shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="htmlcaption2"
                    className="pos-slideshow-caption nivo-html-caption nivo-caption"
                >
                    <div className="timing-bar" />
                    <div className="pos-slideshow-info pos-slideshow-info2">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1">
                                    <span className="txt">Tivi Brand Name</span>
                                </div>
                                <div className="title2">
                                    <span className="txt">48" Full HD Flat TV</span>
                                </div>
                                <div className="pos-slideshow-readmore">
                                    <a href="#" title="Shop now">
                                        Shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End slider area */}
        </>
    )
}
