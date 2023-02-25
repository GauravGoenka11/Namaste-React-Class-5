import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body =()=>{
    //Javascript variable dec
    // let searchText="KFC";

    const [searchText,setSearchText]=useState("");

    // const [searchClicked,setSearchClicked]=useState("false");

    const [restaurants,setRestaurants]=useState(restaurantList);

    function filterData(searchText,restaurants){
    return restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText))
    }

    

    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input"
             placeholder="Search" value={searchText}
                onChange={
                    (e)=>{setSearchText(e.target.value)}
                }
             />

             
             {/* Toggle Button */}
            
            {/* <h1>{searchClicked}</h1> */}

            {/* <button className="search-btn" onClick={()=>{
                if(searchClicked==="true"){
                setSearchClicked("false")
                }
                else{
                    setSearchClicked("true");
                }
            }}>Search</button>{searchText} */}

            {/* On click we need to filter the data so we have created filterData  */}

            <button className="search-btn" onClick={
                ()=>{
                    //need to filter the data
                    const data=filterData(searchText,restaurants);
                    //update the state -restaurant
                    setRestaurants(data);
                }
            }>Search</button>

        </div>

      <div className="restaurant-list">
      {
        restaurants.map(restaurant =>{
           return <RestaurantCard {...restaurant.data}/>
        })
      }
    
      </div>
      </>
      )
  }

 
 export default Body; 