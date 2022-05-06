class RecommendationMenu extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }
    
    set menu(menu){
        this._menu=menu;
        this.render();
    }

    set clickEvent(open){
        this._clickEvent=open;
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
    
        .menu-card {
            background: white;
            box-sizing: border-box;
            border-radius: 5px;
            text-align: center;
            padding: 15px;
            cursor: pointer;
        }
        
        .recom-card{
            padding: 20px;
            flex-basis: 40%;
            background-color: #d4af37;
        }
        
        .menu-card figure {
            width: 100%;
            height: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
        }
        
        .menu-card img {
            justify-content: center;
            display: block;
            width: 100%;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
        }
        
        .menu-card figcaption {
            text-align: center;
            padding-top: 15px;
        }
        
        </style>

        <div class="menu-card recom-card" id="${this._menu.idMeal}">
            <figure id="${this._menu.idMeal}">
                <img src="${this._menu.strMealThumb}" alt="Menu" id="${this._menu.idMeal}">
                <figcaption id="${this._menu.idMeal}">${this._menu.strMeal}</figcaption>
            </figure>
        </div>
        `
    }

    click(){
        this.shadowDOM.querySelector(".menu-card").addEventListener("click", this._clickEvent);
    }
}

customElements.define("recommendation-menu",RecommendationMenu)