import React from 'react';
import './css/header.css'

function Header(){
    return(
    <header>
        <ul>
            <a href="home.html"><li>HOME</li></a>
            <a href="portfolio.html"><li>PORTFOLIO</li></a>
            <a href="orcamento.html"><li>ORÇAMENTO</li></a>
            <a href="sobre.html"><li>SOBRE MIM</li></a>
        </ul>
    </header>
)
}
export default Header