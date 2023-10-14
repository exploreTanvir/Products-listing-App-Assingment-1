function Card(props){

    // Props and destructuring
    const {todoTitle,todoDesc,price,rating,image}=props


    return <div className="main" >
     
    <div className='card'>
    <img src={image} />
     <p className='cardTitle'>{todoTitle}</p> {/*Using props from app.js file*/}
     <p className='price'>{price}</p>
     <p className='rating'>{rating}</p>
     <p className='cardDesc'>{todoDesc}</p> {/*Using props from app.js file*/}
    <button className="button">Add to cart</button>
        </div>
    </div>


 }



export default Card 
