import { router } from "./../../router2.js";

export function pagination(){
    let nav = document.createElement('nav');
    nav.className = "pagination-container";
    //left button
    let left_btn = document.createElement('button');
    left_btn.id = "prev-button";
    left_btn.className = "pagination-button";
    left_btn.textContent = "<";
    left_btn.addEventListener('click', router);
    //right button
    let right_btn = document.createElement('button');
    right_btn.id = "next-button";
    right_btn.className = "pagination-button";
    right_btn.textContent = ">";
    left_btn.addEventListener('click', router);
    //number
    let div = document.createElement('div');
    div.id = "pagination-numbers";


    nav.appendChild(left_btn);
    nav.appendChild(div);
    nav.appendChild(right_btn);

    document.getElementById("section--1").appendChild(nav);
    return div;

}