import React from "react";
import BigSaleStyles from './bigSaleStyles.css'
import Flickity from "react-flickity-component";
import slider2game1 from "../../assets/slider2game1.jpg";
import slider2game2 from "../../assets/slider2game2.jpg";
import slider2game3 from "../../assets/slider2game3.jpg";
import slider2game4 from "../../assets/slider2game4.jpg";
import slider2game5 from "../../assets/slider2game5.jpg";
import slider2game6 from "../../assets/slider2game6.jpg";
function BigSale(){
    const flickityOptions = {
        initialIndex: 2,
        wrapAround: 1
    }

    const items1 = {
        id: [1, 2, 3, 4, 5, 6],
        title: ['slider2game1', 'slider2game2','slider2game3', 'slider2game4','slider2game5','slider2game6'],
        image: [slider2game1, slider2game2, slider2game3, slider2game4, slider2game5, slider2game6]
    }
    return(
        <div className='BigSale'>
            <p className='BigSale__title'>
                Крупные скидки
            </p>
            <p className='BigSale__MiniTitle'>
                Особенно крупные скидки на некоторые из лучших игр всех времён
            </p>
            <Flickity
                className='Slider2'
                elementType='div'
                disableImagesLoaded={false}
                options={flickityOptions}
                reloadOnUpdate
                static
            >
                {items1['id'].map((index) => {
                    return(
                        <div key={index} className='Plate2'>
                            <>
                                <div style={{
                                    backgroundImage: `url(${items1['image'][index-1]})`,
                                    width: 334,
                                    height: 191,
                                    backgroundSize: "cover",
                                }} className='plateImage2'></div>
                            </>
                        </div>
                    )
                })}
            </Flickity>
        </div>
    );
}
export default BigSale;