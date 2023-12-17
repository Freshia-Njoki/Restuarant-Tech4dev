let restaurants = [];
let restaurantTemplate = {
    featuredPhoto:null,
    restaurantName:null,
    description:null,
    featuredPrice:null
};


//collecting and validating (ie. check if empty)restaurant details
let getRestaurantDetails = () => {
    const featuredPhoto = document.getElementById("featuredPhoto");
    const restaurantName = document.getElementById("restaurantName");
    const description = document.getElementById("description");
    const featuredPrice = document.getElementById("featuredPrice");

    if(featuredPhoto.value == ""){
        return false
    }

    if(restaurantName.value == ""){
        return false
    }

    if(description.value == ""){
        return false
    }

    if(featuredPrice.value == ""){
        return false
    }
    addRestaurant(featuredPhoto.value, restaurantName.value, description.value, featuredPrice.value)
}

let addRestaurant = (fP, fN, des, fPr) => {
    let restaurant = Object.create(restaurantTemplate)
    restaurant.featuredPhoto = fP;    
    restaurant.restaurantName = fN;    
    restaurant.description = des;    
    restaurant.featuredPrice = fPr;
    restaurants.push(restaurant);
    console.log(restaurants)


}

removeRestaurant = () => {

}

showRestaurant = () => {

}

const addRestaurantBtn = document.getElementById("addRestaurantBtn");
addRestaurantBtn.addEventListener("click", getRestaurantDetails)