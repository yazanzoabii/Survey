import { router } from "./../../router2.js";

export function pagination(page, sortBy){
    let nav = document.createElement('nav');
    nav.className = "pagination-container";
    //left button
    let left_btn = document.createElement('button');
    left_btn.className = "pagination-button";
    left_btn.textContent = "<";
    if (page == 1){
        left_btn.setAttribute("page", page);
    }
    else {
        left_btn.setAttribute("page", String(Number(page) - 1));
    }
    left_btn.setAttribute("sortBy", sortBy);
    left_btn.addEventListener('click', router);
    //right button
    let right_btn = document.createElement('button');
    right_btn.className = "pagination-button";
    right_btn.textContent = ">";
    right_btn.setAttribute("page", String(Number(page) + 1));
    right_btn.setAttribute("sortBy", sortBy);
    right_btn.addEventListener('click', router);
    //number
    let div = document.createElement('div');
    div.id = "pagination-numbers";



    nav.appendChild(left_btn);
    nav.appendChild(div);
    nav.appendChild(right_btn);

    document.getElementById("section--1").appendChild(nav);
    return div;

}