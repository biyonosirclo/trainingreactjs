import React from 'react'
import { Link } from 'react-router-dom'
import style from './StyleCard.module.css'
const CardKategori = ({ url, imageSource, title }) => {
    return (
        <div>

            <div className={style.card}>
                <Link to={url}>
                    <img src={imageSource} className="card-img-top" alt={title} />
                </Link>
                <div className={style.cardbody}>
                    <Link to={url}>
                        <h5 className={style.cardtitle}>{title}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardKategori