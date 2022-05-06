import main from "./script/main.js"
import {category, country, recom} from "./script/fetch.js";
import "./style/style.css";

document.addEventListener("DOMContentLoaded", ()=>{
    main();
    country();
    category();
    recom();
});
