import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Components/Card";
import Data from "./Data.json";

function App(){
    let items=[]
    items= Data.map((item)=>{
        console.log(uuidv4())
        const {id,ProductPic,Title,Price,Rating,Desc}=item
       return <Card key={id} ProductImg={ProductPic} ProductTitle={Title} price={Price}  rating={Rating}  ProductDesc={Desc}/>
    })
    return <div className="fullBody">
        <h1 className="headingCss">BD Store</h1>
        {items}
       
    </div>
}



export default App