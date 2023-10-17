function Card(props){

    // Props and destructuring
    const {ProductTitle,ProductDesc,price,rating,ProductImg}=props


    return <div  className='card'>
     <div className="Phto">
     <img className="ProductImg" src={ProductImg} alt="Product Phto" />
    </div>
     <div className="down">
     <p className='cardTitle'>{ProductTitle}</p> 
     <p className='price'>{price}</p>
     <p className='rating'>{rating}</p>
     <p className='cardDesc'>{ProductDesc}</p> 
     <button className="button">Add to cart</button>
     </div>
    
        </div>
 }



export default Card 
