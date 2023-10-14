import React from "react";
import Card from "./Components/Card";

function App(){
    return <div className="fullBody">
        <h1 className="headingCss">BD Store</h1>
        {/* use of props for Card.js file */}

        <div className="parant">

        <div className="first">
    <Card  todoTitle="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="Price : $109.95" rating="Rating : 3.9/5" todoDesc="Description : Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" />

        <Card todoTitle="Mens Casual Premium Slim Fit T-Shirts " price="Price : $22.3" rating="Rating : 4.1/5" todoDesc="Description : Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." />

        <Card todoTitle="Mens Cotton Jacket" price="Price : $55.99" rating="Rating : 4.7/5" todoDesc="Description : great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." />
        </div>

        <div className="second">
    <Card todoTitle="Mens Casual Slim Fit" price="Price : $15.99" rating="Rating : 2.1/5" todoDesc="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description." />

        <Card todoTitle="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" price="Price : $695" rating="Rating : 4.6/5" todoDesc="Description : From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection." />

        <Card todoTitle="Solid Gold Petite Micropave " price="Price : $168" rating="Rating : 3.9/5" todoDesc="Description :  Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days." />
        </div>
        
        </div>


    </div>
}



export default App