import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MealDetail = () => {
    const params = useParams();
    const [makanan, setMakanan] = useState(null);

    const getData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + params.idmeal);
        const result = await data.json();
        setMakanan(result.meals);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {
                makanan && makanan.length > 0 ? (
                    <div>
                        {
                            makanan.map(makan => (
                                <div className="card" >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                        <img src={makan.strMealThumb} className="img-fluid rounded-start" alt="{makan.strMeal}" />
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{makan.strMeal}</h5>
                                            <p className="card-text">{makan.strInstructions}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                ) : (
                    <p>Makanan yang anda cari tidak ditemukan</p>
                )
            }
        </div>
    )
}

export default MealDetail