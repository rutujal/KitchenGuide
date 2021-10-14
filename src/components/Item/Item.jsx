import React from 'react'
import "./Item.css"
import "../../components/all_css.css"


function Item({it}) {
  const {item_name,item_url,item_img}=it;
    return (
        <div>
           
                        <div className="image_div">
                          <img src={item_img} alt="burger" className="item-img"/>
                          <h3>{item_name}</h3>
                          <button className="mybtn item-btn">
                          <a className="link" href={item_url} target="_blank" rel="noopener noreferrer">See Recipe</a>
                          </button>

                        </div>
                    
        </div>
    )
}

export default Item
