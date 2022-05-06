import './ingredient-list.js'

class ExpandedCard extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }
    
    set meals(meals){
        this._meals=meals;
        this.render();
    }
    
    set clickEvent(close){
        this._clickEvent=close;
        this.click();
    }
    
    render(){
        this.shadowDOM.innerHTML=`
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Nunito Sans', sans-serif;
        }
        
        h3{
            font-size: 28px;
            padding-bottom: 5px;
        }
        
        h4{
            margin-top: 5px;
            font-size: 15px;
            line-height: 25px;
        }
        
        @font-face {
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/materialicons/v103/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
        }
        
        .material-icons {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        
        h3{
            font-family: 'Dancing Script', cursive;
        }
        
        .close{
            position: absolute;
            right: 1%;
            padding: 5px;
        }
        
        .close:hover{
            cursor: pointer;
        }
        
        figure {
            width: 70%;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }
        
        img {
            justify-content: center;
            display: block;
            width: 300px;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        
        figcaption {
            text-align: center;
            padding-top: 15px;
        }
        
        section{
            margin: 10px 0;
        }

        .recipe-section h4{
            text-align: justify;
        }
        
        </style>
        
        <span class="material-icons close" id="close">&#xe5cd;</span>
        <figure>
            <img src="${this._meals.strMealThumb}" alt="Menu">
            <figcaption>${this._meals.strMeal}</figcaption>
        </figure>
        <section class="category-section">
            <h3>Category</h3>
            <h4>${this._meals.strCategory}</h4>
        </section>
        <section class="country-section">
            <h3>Country</h3>
            <h4>${this._meals.strArea}</h4>
        </section>
        <section class="ingredient-section">
            <h3>Ingredient</h3>
            </section>
        <section class="recipe-section">
            <h3>Instruction</h3>
            <h4>${this._meals.strInstructions}</h4>
        </section>
        `;
        const ingredientList=document.createElement("ingredient-list");
        ingredientList.ingredient=this._meals;
        this.shadowDOM.querySelector(".ingredient-section").appendChild(ingredientList);
    }
    
    click(){
        this.shadowDOM.querySelector("#close").addEventListener("click",this._clickEvent);
    }
}

customElements.define("expanded-card",ExpandedCard);