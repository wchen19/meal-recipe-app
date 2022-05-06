class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(search){
        this._clickEvent=search;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchInput").value;
    }
    get input(){
        return this.shadowDOM.querySelector("#searchInput")
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
        
        input{
            border: none;
            background-color: inherit;
            padding: 10px;
            flex-grow: 1;
        }
        
        input:focus{
            outline: none;
        }
        
        button{
            border: none;
            background-color: inherit;
            padding: 5px;
            align-content: flex-end;
        }
        
        button:hover{
            background-color: rgba(100,100,100,0.1);
            cursor: pointer;
        }
        
        </style>
        
        <input type="text" id="searchInput" placeholder="Search Meal Name">
        <button type="submit" id="searchButton"><span class="material-icons search">&#xe8b6;</span></button>
        `
        this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar)