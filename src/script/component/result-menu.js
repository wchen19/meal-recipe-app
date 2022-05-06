import "./menu-item.js"

class ResultMenu extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }

    set meals(meals){
        this._meals=meals;
        this.render();
    }

    set clickEvent(open){
        this._clickEvent=open;
        this.click()
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

        menu-item{
            padding: 10px;
            flex-basis:20%;
        }

        @media screen and (max-width: 1200px) {
            menu-item{
                flex-basis: 25%;
            }
        }
        
        @media screen and (max-width: 800px) {
            menu-item{
                flex-basis: 50%;
            }
        }
        </style>`
        this._meals.forEach(meal => {
            const menuItem= document.createElement("menu-item");
            menuItem.meal=meal;
            this.shadowDOM.appendChild(menuItem);
        });
        
    }

    renderError(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Nunito Sans', sans-serif;
        }
            
        .placeholder {
            font-weight: lighter;
            color: white;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> Menu Not Found </h2>`;
    }

    click(){
        this.shadowDOM.querySelectorAll("menu-item").forEach(item=>{
            item.addEventListener("click", this._clickEvent);
        })
    }
}

customElements.define("result-menu", ResultMenu);