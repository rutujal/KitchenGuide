import React from 'react'        //rafce
import {v4 as uuidv4} from "uuid";
import Axios from "axios";
import { useState } from 'react';
import Recipe from "../Recipe"
import Alert from '../Alert';
import "./App1.css"
import "../../components/all_css.css"

const App1 = () => {
   const [query,setQuery]=useState("");
   const [recipes,setRecipes]=useState([]);
   const [alert,setAlert]=useState("");

    const APP_ID = "2d091ce3";
    const APP_KEY = "121931877052ac93b07b7ec4fff73fae";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData=async()=>{
        if(query!==""){
            const result=await Axios.get(url);
            if(!result.data.more){
               setRecipes(result.data.hits);
            //console.log(result);
            setQuery("");
            setAlert("");
                return setAlert("No item with such name...")
            }
            else{
                setRecipes(result.data.hits);
                console.log(result);
                setQuery("");
                setAlert("")
            }
           
        }else{
            setAlert("Please Enter Item Name...");
        }
        
    };

  const onChange=(e)=>{
      setQuery(e.target.value);
  }

    const onSubmit=(e)=>{
       e.preventDefault();
       getData();
    }
    return (
    
        <div style={{textAlign:"center"}} className="menu-item">
            <h2 className="searchhead">Search The Recipe You want to cook......</h2>
            <form onSubmit={onSubmit}  className="search-form">
            {alert !=="" &&  <Alert alert={alert}/>}
            <input type="text" placeholder="Enter item name..." autoComplete="off" onChange={onChange} value={query}/>
            <input type="submit" placeholder="Search"/>
            </form>
            
            
            <div className="recipes" >
            {recipes!==[] && 
            recipes.map(recipe=><Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
            
        </div>
        
    )
}

export default App1
