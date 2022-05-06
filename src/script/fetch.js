const country=()=>{
    const dropdownCountry=document.querySelector("dropdown-country");

    return fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        dropdownCountry.countries=responseJson.meals;
    })
    .catch(error=>{
        console.log(error);
    })
}

const countryFilter=(country)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        result(responseJson.meals); 
    })
    .catch(error=>{
        console.log(error);
    })
}

const category=()=>{
    const dropdownCategory=document.querySelector("dropdown-category");

    return fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        dropdownCategory.categories=responseJson.meals;
    })
    .catch(error=>{
        console.log(error);
    })
}

const categoryFilter=(category)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        result(responseJson.meals); 
    })
    .catch(error=>{
        console.log(error);
    })
}

const recom=()=>{
    const menuRecom = document.querySelector("recommendation-menu");
    const card = document.querySelector(".modal");
    
    const openExpandedCard=()=>{
        card.removeAttribute("hidden");
    }
    
    
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response=>{
        return response.json()
    })
    .then(responseJson=>{
        menuRecom.menu=responseJson.meals[0];        
        menuRecom.clickEvent=openExpandedCard;
    })
    .catch(error=>{
        console.log(error)
    })
    
}

const result=(meals)=>{
    const menuResult=document.querySelector("result-menu");
    const card = document.querySelector(".modal");
    
    const openExpandedCard=()=>{
        card.removeAttribute("hidden");
    }

    menuResult.meals=meals;
    menuResult.clickEvent=openExpandedCard;    
}

const search=(name)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        result(responseJson.meals);
    })
    .catch(error=>{
        console.log(error);
    })
}

const expand=(id)=>{
    const expandedCardElement = document.querySelector("expanded-card");
    const card = document.querySelector(".modal");
    const closeExpandedCard = () => {
        card.setAttribute("hidden", "hidden");
    };
    
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response=>{
        return response.json();
    })
    .then(responseJson=>{
        expandedCardElement.meals=responseJson.meals[0];
        expandedCardElement.clickEvent = closeExpandedCard;
    })
    .catch(error=>{
        console.log(error);
    })
}

export {country, category, categoryFilter, countryFilter, recom, search, expand}