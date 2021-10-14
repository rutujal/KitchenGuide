import React from 'react'
import "../../components/all_css.css"
import "./Menu.css"
import Item from '../Item/Item'
import {v4 as uuidv4} from "uuid";

let myArray = [{
    item_name: "Pizza",
    item_url: "https://www.latimes.com/food/la-fo-homepizzarec25b-2009mar25-story.html",
    item_img: "Images/pizza.jpg"
},
{
    item_name: "Samosa",
    item_url: "https://food52.com/recipes/16248-samosa",
    item_img: "Images/samosa.jpg"
},
{
    item_name: "Aloo Pakoda",
    item_url: "https://www.betterbutter.in/recipe/1316/under-5-minutes-aloo-pakodas",
    item_img: "Images/aloo_pakoda.jpg"
},
{
    item_name: "Oats Upma",
    item_url: "https://recipes.sparkpeople.com/recipe-detail.asp?recipe=1581011",
    item_img: "Images/upma.jpg"
},
{
    item_name: "Burger",
    item_url: "https://www.epicurious.com/recipes/food/views/the-ultimate-burger-353654",
    item_img: "Images/burger.jpg"
},
{
    item_name: "Rasgulla",
    item_url: "https://www.spiceupthecurry.com/rasgulla-recipe/",
    item_img: "Images/Rasgulla.jpg"
},
{
    item_name: "Modak",
    item_url: "https://www.foodista.com/recipe/WZYNKQZ7/modak",
    item_img: "Images/modak.jpg"
},
{
    item_name: "Pohe",
    item_url: "https://www.indiansimmer.com/2010/07/vegetable-poha-simple-yet-tasteful-way.html",
    item_img: "Images/poha.jpg"
},

]

function Menu() {
    return (
        <div>
            <section className="menu-section sec-padding" id="our-menu">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-title="dishes" className="pophead" style={{textAlign:'center',paddingBottom:"0px",padddingTop:"50px"}}>Suggestions</h2>
                        </div>
                        <h4 className="tagline">Confused about what to cook?????</h4>
                        <h4 className="tagline" style={{paddingBottom:"70px"}}>Here are some Suggestions.....</h4>
                    </div>

                    <div style={{ overflow: "hidden",marginLeft:"100px" }}>
                        {myArray.map(it => <Item key={uuidv4()} it={it} />)}
                    </div>
                </div>
                <div className="lastdiv">
                  <h1 className="lastheading">Made by Rutuja</h1>
               </div>
                
            </section>
            
        </div>
        
        
    )
    
}


export default Menu
