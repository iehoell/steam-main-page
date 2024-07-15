import React from "react";
import footerStyles from './footerStyles.css'
import valve from "../../assets/valve.png";
import steam from "../../assets/steam.png";
function Footer(){
    return(
        <footer>
            <div className='logos'>
                <img src={valve} className='logos__valve'></img>
                <img src={steam} className='logos__steam'></img>
            </div>
            <div className='footer__textBlack'>
                <p className='footer__textBlock__text'>
                    © 2024 Valve Corporation. Все права сохранены. Все торговые марки являются собственностью соответствующих владельцев в США и других странах.
                    НДС включён во все цены, где он применим.
                </p>
                <p className='footer__textBlock__textLinked'>
                    Политика конфиденциальности   |   Правовая информация   |   Соглашение подписчика Steam   |   Возвраты   |   Файлы cookie
                </p>
                <div className='footer__textBlock__Links'>
                    <div className='footer__textBlock__Links__link1'>О Valve</div>
                    <div className='footer__textBlock__Links__link2'>Вакансии</div>
                    <div className='footer__textBlock__Links__link3'>Steamworks</div>
                    <div className='footer__textBlock__Links__link4'>Дистрибуция Steam</div>
                    <div className='footer__textBlock__Links__link5'>Служба поддержки</div>
                    <div className='footer__textBlock__Links__link6'>Подарочные карты</div>
                    <div className='footer__textBlock__Links__link7'>Steam</div>
                    <div className='footer__textBlock__Links__link8'>@steam</div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;