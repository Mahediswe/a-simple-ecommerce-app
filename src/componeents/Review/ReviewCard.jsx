import React from 'react'
import Review from './Review';

const ReviewCard = () => {
  

  return (

       <div>
            {Review.map((id,value)=>{
                   return(
                    <section key={id}>
                      <div>
                        <h1>{value.name}</h1>
                        <p>{value.desc}</p>
                        </div>
                    </section>
                   )
             })}
       </div>

  )
}

export default ReviewCard