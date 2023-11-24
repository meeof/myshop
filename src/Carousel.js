import './carousel.css';
import imageChevron from './images/chevron.svg';
import {useEffect, useRef, useState} from "react";
let docWidth = document.documentElement.scrollWidth - 20;
let docHeight = document.documentElement.scrollHeight - 20;
export default function Carousel({children, imagesUrlArr, mainImage}) {
    let useUrlsArr = imagesUrlArr;
    if (mainImage.length > 1) {
        useUrlsArr = [mainImage, ...imagesUrlArr];
    }
    let [activeImageIndex, setActiveImageIndex] = useState(0);
    let [animation, setAnimation] = useState('');
    let showImageIndex = 0;
    let prevImageIndex = 0;
    let nextImageIndex = 0;
    let imgRef = useRef();
    let carouselRef = useRef();
    if (useUrlsArr.length > 0) {
        showImageIndex = activeImageIndex;
        if (activeImageIndex === 0) {
            prevImageIndex = useUrlsArr.length - 1;
        }
        else {
            prevImageIndex = activeImageIndex - 1;
        }
        if (activeImageIndex === useUrlsArr.length - 1) {
            nextImageIndex = 0;
        }
        else {
            nextImageIndex = activeImageIndex + 1;
        }
    }
    let imgWidth;
    useEffect(() => {
        if (useUrlsArr.length > 0) {
            imgWidth = imgRef.current.clientWidth;
            carouselRef.current.style.width = imgWidth - 1 + 'px';
        }
    }, []);
    let imgBlockOut = <img alt={'#'} src={"#"}/>;
    if (useUrlsArr.length > 0) {
        imgBlockOut = <div className={`imgBlock ${(animation === 'left') ? 'animBlock-left': ''} 
            ${(animation === 'right') ? 'animBlock-right': ''}`}>
            <img alt={'#'} src={useUrlsArr[prevImageIndex]}/>
            <img alt={'#'} src={useUrlsArr[showImageIndex]} ref={imgRef}/>
            <img alt={'#'} src={useUrlsArr[nextImageIndex]}/>
        </div>
    }
    let carouselHeightForStyle;
    if (docWidth < 410) {
        carouselHeightForStyle = docHeight/3 + 'px';
    }
    else {
        carouselHeightForStyle = docHeight/2 + 'px';
    }
    return <div className="carousel" ref={carouselRef} style={{height: carouselHeightForStyle}}>
        <div className="imageCard" style={{transform: 'rotate(270deg)'}}
             onClick={() => {
                 setAnimation('left');
                 setTimeout(()=> {
                     if (activeImageIndex === 0) {
                         setActiveImageIndex(useUrlsArr.length - 1)
                     }
                     else {
                         setActiveImageIndex(activeImageIndex - 1);
                     }
                     setAnimation('');
                 }, 820);
             }}>
            <img alt={'#'} src={imageChevron}/>
        </div>
        {imgBlockOut}
        <>{children}</>
        <div className="imageCard"  style={{transform: 'rotate(90deg)'}}
             onClick={() => {
                 setAnimation('right');
                 setTimeout(()=> {
                     if (activeImageIndex === useUrlsArr.length - 1) {
                         setActiveImageIndex(0)
                     }
                     else {
                         setActiveImageIndex(activeImageIndex + 1);
                     }
                     setAnimation('');
                 }, 820)
             }}>
            <img alt={'#'} src={imageChevron}/>
        </div>
    </div>
}