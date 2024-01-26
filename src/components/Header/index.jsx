import React from "react";
import styles from './style.module.css';
import imgPatas from '../../assets/img/patas.png';

function Header (){
    return(
        <header>
            <div className={styles.containerLogo}>
                <div className={styles.logo}>
                    <img src={imgPatas} alt="" />
                    <h1>Pet Boutique</h1>
                </div>
                <p>Estilo e Elegância para Cães e Gatos</p>
            </div>
        </header>
    )
}

export default Header;