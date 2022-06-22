import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardKategori from '../components/data/CardKategori';
const CategoryMeals = () => {
    const params = useParams();
    const [makanan,setMakanan] = useState(null);

    const ambilData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+params.category);
        const result = await data.json();
        setMakanan(result.meals);
    }

    useEffect(() => {
        ambilData();
    }, []);
    
  return (
    <div>
        <h4 className='mb-3'>Makanan Berdasar kategori {params.category}</h4>
        {
            makanan && makanan.length > 0 ? (
                <div className='row'>
                    {
                        makanan.map(makan => (
                            <div className='col-6 col-md-3' key={makan.idMeal}>
                                <CardKategori url={'/meal/'+makan.idMeal} imageSource={makan.strMealThumb} title={makan.strMeal} />
                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>Loading</p>
            )
        }
    </div>
    
  )
}

export default CategoryMeals