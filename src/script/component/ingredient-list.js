class IngredientList extends HTMLElement {
    
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }
    
    set ingredient(ingredient) {
        this._ingredient = ingredient;
        this.render();
    }
    
    render() {
        this.shadowDOM.innerHTML=`
        <style>
        
        th{
            text-align: left;
            padding: 5px 10px 5px 0;
            font-weight: bold;
        }
        
        td{
            text-align: left;
            padding: 5px;
        }
        </style>`
        for (let i = 0; i < 20; i++) {
            if (this._ingredient[`strIngredient${i + 1}`] == "" || this._ingredient[`strIngredient${i + 1}`] == null) {
                return;
            } else {
                const tr = document.createElement("tr");
                const th = document.createElement("th");
                const td = document.createElement("td");
                th.innerText = `${i+1}. ${this._ingredient[`strIngredient${i + 1}`]}`;
                td.innerText = this._ingredient[`strMeasure${i + 1}`];
                tr.append(th,td);
                this.shadowDOM.appendChild(tr);
            }
        }
    }
}

customElements.define("ingredient-list", IngredientList);
