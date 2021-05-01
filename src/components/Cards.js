import React, { forwardRef } from 'react'
import Card from './Card'
import "./Cards.css"

const Cards = forwardRef((props, ref) => 
{
    const { title, cardsMain, cardsRest } = props;

    return (
        <div className="cards" ref={ref}>
            <h1>{title}</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_entries">
                        {/* Main entries: 2 */}
                        {cardsMain.map((cardEntry, i) => <Card 
                            key={i}
                            src={cardEntry.src}
                            desc={cardEntry.desc}
                            label={cardEntry.label}
                            linkTo={cardEntry.linkTo}
                        />)}
                    </ul>
                    <ul className="cards_entries">
                        {/* Rest of the entries */}
                        {cardsRest.map((cardEntry, i) => <Card 
                            key={cardEntry.id}
                            src={cardEntry.src}
                            desc={cardEntry.desc}
                            label={cardEntry.label}
                            linkTo={cardEntry.linkTo}
                        />)}
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default Cards
