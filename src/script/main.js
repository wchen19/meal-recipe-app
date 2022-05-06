import { categoryFilter, countryFilter, search, expand } from "./fetch.js";
import "./component/expanded-card.js";
import "./component/dropdown-country.js";
import "./component/dropdown-category.js";
import "./component/search-bar.js";
import "./component/recommendation-menu.js";
import "./component/result-menu.js";
import $ from "jquery";

const main = () => {
    //search
    //insert data to result menus
    
    const searchBar = document.querySelector("search-bar");
    const resultMenu = document.querySelector(".result");
    const recomMenu = document.querySelector(".recommendation");
    
    const searchName = () => {
        search(searchBar.value);
        resultMenu.removeAttribute("hidden");
        recomMenu.setAttribute("hidden", "hidden");
    };
    
    searchBar.clickEvent = searchName;
    
    $(searchBar.input).on("input", () => {
        if (searchBar.value == "" || searchBar.value == null) {
            resultMenu.setAttribute("hidden", "hidden");
            recomMenu.removeAttribute("hidden");
        }
    });
    
    //change from recommendation to result
    
    const change = () => {
        resultMenu.removeAttribute("hidden");
        recomMenu.setAttribute("hidden", "hidden");
    };
    
    // dropdown
    
    const dropdownCategory = document.getElementById("dropdown-category");
    const dropdownCountry = document.getElementById("dropdown-country");
    
    $(".filter-category").on("click", () => {
        dropdownCategory.classList.toggle("show");
    });
    
    $(".filter-country").on("click", () => {
        dropdownCountry.classList.toggle("show");
    });
    window.addEventListener("click", (event) => {
        if (!event.target.matches(".filter-country")) {
            if (dropdownCountry.classList.contains("show")) {
                dropdownCountry.classList.remove("show");
            }
        }
        if (!event.target.matches(".filter-category")) {
            if (dropdownCategory.classList.contains("show")) {
                dropdownCategory.classList.remove("show");
            }
        }
        
        //insert data to expanded card
        
        if (event.target.matches("recommendation-menu")) {
            expand(event.path[0].id);
        }
        if (event.target.matches("result-menu")) {
            expand(event.path[0].id);
        }
        
        //dropdown filter
        
        if (event.target.matches("dropdown-category")) {
            console.log(event);
            categoryFilter(event.path[0].innerText);
            change();
        }
        if (event.target.matches("dropdown-country")) {
            countryFilter(event.path[0].innerText);
            change();
        }
    });
};

export default main;
