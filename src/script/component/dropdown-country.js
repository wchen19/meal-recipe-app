class DropdownCountry extends HTMLElement{
    constructor(){
        super()
        this.shadowDOM=this.attachShadow({mode:"open"});
    }

    set countries(countries){
        this._countries=countries;
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
        
        .drop-item{
            display: block;
            padding: 5px 0;
        }
        
        .drop-item:hover{
            font-weight: bold;
        }
        
        </style>`
        this._countries.forEach(country => {
            const list= document.createElement("li");
            list.classList.toggle("drop-item");
            list.innerText=country["strArea"];
            this.shadowDOM.appendChild(list)
        });
    }
}

customElements.define("dropdown-country", DropdownCountry)