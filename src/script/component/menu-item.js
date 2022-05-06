class MenuItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }

    set meal(meal){
        this._meal=meal;
        this.render();
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
        .menu-item{
            height:100%;
        }
        
        .menu-card {
            background: white;
            box-sizing: border-box;
            border-radius: 5px;
            text-align: center;
            padding: 15px;
            cursor: pointer;
            height:100%;
        }
        
        figure {
            width: 100%;
            height: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content:space-between;
        }
        
        img {
            justify-content: center;
            display: block;
            width: 100%;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
        }
        
        figcaption {
            text-align: center;
            padding-top: 15px;
        }
        
        </style>

        <div class="menu-item">
            <div class="menu-card" id="${this._meal.idMeal}">
                <figure id="${this._meal.idMeal}">
                    <img src="${this._meal.strMealThumb}" alt="Menu" id="${this._meal.idMeal}">
                    <figcaption id="${this._meal.idMeal}">${this._meal.strMeal}</figcaption>
                </figure>
            </div>
        </div>`
    }
}

customElements.define("menu-item", MenuItem);