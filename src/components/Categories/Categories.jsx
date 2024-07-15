import React from "react";
import categoriesStyles from './categoriesStyles.css'
import Flickity from "react-flickity-component";
import categories1 from "../../assets/categories1.png";
import categories2 from "../../assets/categories2.png";
import categories3 from "../../assets/categories3.png";
import categories4 from "../../assets/categories4.png";
import categories5 from "../../assets/categories5.png";
import categories6 from "../../assets/categories6.png";
function Footer(){
    const flickityOptions = {
        initialIndex: 2,
        wrapAround: 1
    }
    const items2 = {
        id: [1, 2, 3, 4, 5, 6],
        title: ['categories1', 'categories2','categories3','categories4','categories5','categories6'],
        image: [categories1, categories2, categories3, categories4, categories5, categories6]
    }
    return(
        <div>
            <div className='categories__title'>
                <h1>КАТЕГОРИИ</h1>
                <p className='categories__title__text'>ЗАГЛЯНИТЕ В ЛЮБУЮ КАТЕГОРИЮ И ПОЛУЧИТЕ БЕСПЛАТНЫЙ ЕЖЕДНЕВНЫЙ СТИКЕР</p>
            </div>
            <Flickity
                className='SliderCategories'
                elementType='div'
                disableImagesLoaded={false}
                options={flickityOptions}
                reloadOnUpdate
                static
            >
                {items2['id'].map((index) => {
                    return(
                        <div key={index} className='Plate'>
                            <>
                                <div style={{
                                    backgroundImage: `url(${items2['image'][index-1]})`,
                                    width: 358,
                                    height: 354,
                                    backgroundSize: "cover",
                                }} className='plateImage1'></div>
                            </>
                        </div>
                    )
                })}
            </Flickity>
        </div>
    );
}
export default Footer;