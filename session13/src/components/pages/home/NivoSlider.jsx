import React from 'react'
import { Image, Swiper } from 'react-nivo-slider';

export default function NivoSlider() {
    return (
        <>
            {/* Start slider area */}
            <div class="slider-area">
                <Swiper>
                    <Image src={'img/slider/1.jpg'} thumb={'img/slider/1.jpg'} />
                    <Image src={'img/slider/2.jpg'} thumb={'img/slider/2.jpg'} />
                </Swiper>
            </div>
            {/* End slider area */}
        </>
    )
}
