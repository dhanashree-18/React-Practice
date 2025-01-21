import { useParams } from "react-router-dom";
import useReastaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useReastaurantMenu(resId);

    const {name, cuisines,costForTwoMessage } = resInfo?.data.cards[2]?.card?.card;

    const {itemCards} = resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
            {itemCards.map((item) => ( 
                <li key={item.card.info.id}> {item.card.info.name} 
                    {"Rs."} - {item.card.info.price}</li>))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;