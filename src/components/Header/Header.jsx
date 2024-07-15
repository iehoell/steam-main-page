import React from "react";
import headerStyles from './headerStyles.css'
function Header(){
    return(
        <header>
            <div className={'header__blockShop'}>Магазин</div>
            <div className={'header__blockNewAndInteresting'}>Новое и интересное</div>
            <div className={'header__blockCategories'}>Категории</div>
            <div className={'header__blockItemsForPoints'}>Предметы за очки</div>
            <div className={'header__blockNews'}>Новости</div>
            <div className={'header__blockLabs'}>Лаборатории</div>
            <div className={'header__blockSearch'}><input id='search' type='search'/></div>
        </header>
    );
}
export default Header;