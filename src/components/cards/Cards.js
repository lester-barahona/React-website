import React from 'react'
import CardItem from './../card/CardItem';
import './Cards.css'
//rafce

const Cards = () => {
    return (
        <div className="cards">
            <h1>Viajes baratos y experiencias <strong>ÚNICAS!</strong></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                   
                    <ul className="cards__items">
                        <CardItem src="images/img3.jpg"
                                  text="Tour en bote con hospedaje en hermoso Hotel."
                                  label="Tour - Hospedaje"
                                  path="/services"/>
                        <CardItem src="images/img4.jpg"
                                  text="Explora este hermoso lugar en Costa Rica y observa la variedad de aves."
                                  label="Avistamiento"
                                  path="/services"/>
                        <CardItem src="images/img5.jpg"
                                  text="Una gran viaje a Ferrocarril con hermosos paisajes."
                                  label="Aventura"
                                  path="/services"/>                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img-1.jpg"
                                  text="Llega hasta la cima, explora y conoce con guías expertos."
                                  label="Tour Completo"
                                  path="/services"/>
                        <CardItem src="images/img-2.jpg"
                                  text="Bellas playas de arena blanca para vacacionar con la familia."
                                  label="Aventura"
                                  path="/services"/>
                                         
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default Cards

