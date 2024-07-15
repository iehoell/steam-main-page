import React from "react";
import slider1Styles from './slider1Styles.css'
import game1 from "../../assets/game1.jpg";
import game2 from "../../assets/game2.jpg";
import game3 from "../../assets/game3.jpg";
import game4 from "../../assets/game4.jpg";
import game5 from "../../assets/game5.jpg";
import game6 from "../../assets/game6.jpg";
import Flickity from "react-flickity-component";
function Slider1(){
    const flickityOptions = {
        initialIndex: 2,
        wrapAround: 1
    }

    const items = {
        id: [1, 2, 3, 4, 5, 6],
        title: ['game1', 'game2','game3','game4','game5','game6'],
        image: [game1, game2, game3, game4, game5, game6]
    }
    return(
        <Flickity
            className='Slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
        >
            {items['id'].map((index) => {
                return(
                    <div key={index} className='Plate'>
                        <>
                            <div style={{
                                backgroundImage: `url(${items['image'][index-1]})`,
                                width: 356,
                                height: 427,
                                backgroundSize: "cover",
                            }} className='plateImage'></div>
                        </>
                    </div>
                )
            })}
        </Flickity>
    );
}
export default Slider1;