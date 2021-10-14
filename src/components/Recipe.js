import React from 'react'
import RecipeDetails from "./RecipeDetails";
import { useState } from 'react';

const Recipe = ({recipe}) => {
    const [show,setShow]=useState(false);
    const {label,image,url,ingredients}=recipe.recipe;
    
   
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopener noreferrer" > See Recipe</a>
            <button  onClick={()=>setShow(!show)}>Show Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe;
