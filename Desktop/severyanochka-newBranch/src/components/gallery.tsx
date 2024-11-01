import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from '../Styles/gallery.module.css';
import slideOne from '../Images/slideOne.jpg'
import slideTwo from '../Images/SlideTwo.jpeg'
import slideThree from '../Images/slideThree.jpeg'
import slideFour from '../Images/slideFour.jpg'
import slideFive from '../Images/slideFive.png'
import slideSeven from '../Images/slideSeven.webp'


const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const items = [
    <img src={slideOne } onDragStart={handleDragStart} role="presentation" alt="Slide 1" className={style.carouselItem}  />,
    <img src={slideTwo} onDragStart={handleDragStart} role="presentation" alt="Slide 2" className={style.carouselItem} />,
    <img src={slideThree} onDragStart={handleDragStart} role="presentation" alt="Slide 3" className={style.carouselItem}  />,
    <img src={slideFour} onDragStart={handleDragStart} role="presentation" alt="Slide 4" className={style.carouselItem}  />,
    <img src={slideFive} onDragStart={handleDragStart} role="presentation" alt="Slide 5" className={style.carouselItem}  />,
    <img src={slideSeven} onDragStart={handleDragStart} role="presentation" alt="Slide 6" className={style.carouselItem}  />
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },    
};

const Gallery: React.FC = () => (
    <div className={style.galleryWrapper}>
    <div className={style.carouselContainer}>
        <AliceCarousel 
            mouseTracking 
            items={items} 
            responsive={{
                0: { items: 1 },
                1024: { items: 2 }
            }}
            controlsStrategy="responsive"
        />
    </div>
</div>
);

export default Gallery;