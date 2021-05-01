import React from 'react'
import { Link } from "react-router-dom"

function Card(props) {
    return (
        <React.Fragment>
            <li className="cards_entry">
                <Link className="cards_entry_link" to={props.linkTo}>
                    <figure className="cards_entry_pic-wrap" content-label={props.label}>
                        <img className="cards_entry_img" src={props.src} alt="Card" />
                    </figure>
                    <div className="cards_entry_info">
                        <h5 className="cards_entry_text">
                            {props.desc}
                        </h5>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    )
}

export default Card
