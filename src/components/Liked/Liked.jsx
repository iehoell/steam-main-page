import React from "react";
import likedStyles from './likedStyles.css'
import gridGame1 from "../../assets/gridGame1.jpg";
import gridGame2 from "../../assets/gridGame2.jpg";
import gridGame3 from "../../assets/gridGame3.jpg";
function Liked(){
    return(
        <div className='likePlayersLikeYou'>
            <div className='likePlayersLikeYou__block1'>
                <p>Нравится игрокам, похожим на вас</p>
                <p>основано на вашей истории игр</p>
            </div>
            <div className='likePlayersLikeYou__block2'>
                <div className='likePlayersLikeYou__block2__block1'>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame1} className='imgInLike'/>
                        625 руб.
                    </div>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame2} className='imgInLike'/>
                        625 руб.
                    </div>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame3} className='imgInLike'/>
                        625 руб.
                    </div>
                </div>
                <div className='likePlayersLikeYou__block2__block2'>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame1} className='imgInLike'/>
                        625 руб.
                    </div>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame2} className='imgInLike'/>
                        625 руб.
                    </div>
                    <div className='likePlayersLikeYou__block2__block1__cart'>
                        <img src={gridGame3} className='imgInLike'/>
                        625 руб.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Liked;