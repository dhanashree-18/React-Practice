import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

const [listOfRestaurants , setListofRestaurant] = useState([]);
const [filteredReastaurant, setFilteredRestaurant] = useState([]);

const [searchText, setSearchText] = useState("");

console.log("List of restaurant", listOfRestaurants);

useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
   console.log("data");
   const data = await fetch
   ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6203123&lng=73.785619&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"   
   );
   const json = await data.json();
   
   console.log(json);
   setListofRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

const onlineStatus = useOnlineStatus();

if(onlineStatus === false)
    return (
    <h1>Looks Like you are offline. Please check your internet connection
    </h1>
    )

return(
       <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
               <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
               }}/>
               <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                  onClick={()=>{
                  //filter the restaurants and update the UI
                  console.log(searchText);

                  const filteredReastaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText));

                  setFilteredRestaurant(filteredReastaurant);

               }}> Search </button>
            </div>

            <div>
               
            <button className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
                  // filter logic for top rated restaurant
                 const TopRestList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
                  setFilteredRestaurant(TopRestList);
                }}>
                  Top Rated Restaurant
            </button>
            </div>

          </div>

          <div className="flex flex-wrap">
             {filteredReastaurant.map((restaurant) => (
            <Link key={restaurant.data.id} to={"/restaurants/"+ restaurant.info.id}> <RestaurantCard resData={restaurant}/></Link>
             ))}   
          </div>
       </div>
    );
 };

 export default Body;