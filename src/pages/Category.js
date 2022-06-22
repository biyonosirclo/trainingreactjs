import React, { useEffect, useState } from 'react'
import CardKategori from '../components/data/CardKategori';
const Category = () => {
  const [kategori, setKategori] = useState(null);

  const fetchData = async () => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const result = await data.json();
    setKategori(result.categories);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4 className='mb-5'>Kategori Makanan</h4>
      {
        kategori && kategori.length > 0 ? (
          <div className="row">
            {
              kategori.map(kat => (
                <div className="col-6 col-md-3" key={kat.idCategory}>
                  <CardKategori url={'/category_meal/'+kat.strCategory}  imageSource={kat.strCategoryThumb} title={kat.strCategory} />
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

export default Category