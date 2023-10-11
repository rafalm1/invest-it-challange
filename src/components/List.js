import React, { useEffect, useState } from 'react'
import { fetchPhotos } from '../api.js'

const List = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchPhotos({ perPage: 30, page: 1}).then(result => setData(result))
  }, [])

  return (
    <div style={{ minHeight: '90vh', width: '100%', paddingBottom: '100px' }}>
      <div className="grid">
        {data.images ? (
          data.images.map((img) => {
            return (
              <figure className="image-container" key={img.id}>
                <img className="image" src={img.urls.small} />
                <figcaption>{img.user.name}</figcaption>
              </figure>
            )
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
};

export default List;
