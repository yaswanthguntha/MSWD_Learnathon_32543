import React from 'react'

export default function Explore() 
{

  const arts = [
    {"source":"./image1.jpg","artName":"Blooming Flowers","artist":"V V L Sitaram","price":4899},
    {"source":"./image2.jpg","artName":"Man of Kind","artist":"S Leela","price":5499},
    {"source":"./image3.jpg","artName":"Cherry Blossom","artist":"B Pavan","price":7999},
    {"source":"./image4.jpg","artName":"Magical Animal","artist":"S John","price":6399},
    {"source":"./image5.jpg","artName":"Nature","artist":"MD Asif","price":8199}
  ]

  return (
    <div className="explore">
        <div className="display">
          {
            arts.map( (art) => (
              <div className='artwork' key={art.id}>
                <div className='imgtag' style={{justifyContent:"center"}} ><img className="artimg" src={art.source} alt='img_here'/></div>
                <p style={{color:"#00A09A",fontSize:"20px",fontWeight:"600"}}>{art.artName}</p>
                <p>{art.artist}</p>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>₹ {art.price}</p>
              </div>
            ) )
          }
        </div>
    </div>
  )
}