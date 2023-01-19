'use strict';

import {router} from './../../router2.js';
import { pagination } from '../components/pagination.js';

let pages = [];

export function display_surveys(page = 1){


    let section = document.createElement('section');
    section.className = 'scroll';
    section.id = ""
    let ul = document.createElement('ul');
    ul.className = 'saved_survies';
    ul.id = 'saved_survies';


    let survies = getPage(page);
    const surviesList = document.querySelector('.saved_survies');


    if (survies !== null){
        for (let id of survies){
            let survey = JSON.parse(localStorage.getItem(id));
            let sid = id.toString();
            let li = document.createElement('li');
            li.className = 'display_survey';
            li.id = sid;
            if (survey.name == ""){
                li.textContent = "no name";
            }
            else{
                li.textContent = survey.name;
            }
            if (survey.Author == ""){
                li.textContent += "  by: unkown";
            }
            else{
                li.textContent += '  by: ' + survey.Author;
            }


            let res_btn = document.createElement('button');
            res_btn.className = 'results';
            res_btn.textContent = 'Results';
            res_btn.id = sid;

            let clo_btn = document.createElement('button');
            clo_btn.className = 'close';
            clo_btn.textContent = 'Close';
            clo_btn.id = sid;

            let ans_btn = document.createElement('button');
            ans_btn.className = 'answer';
            ans_btn.textContent = 'Answer';
            ans_btn.id = sid;


            li.appendChild(res_btn);
            li.appendChild(clo_btn);
            li.appendChild(ans_btn);

            ul.appendChild(li);
            ul.addEventListener("click", router);
        }
    }

    section.appendChild(ul);

    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);

    pagination();


    const paginationNumbers = document.getElementById("pagination-numbers");
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = 1;
    paginationNumbers.appendChild(pageNumber);
    
    console.log("display");
}



const getPage = function(page = 1){
    let survies = JSON.parse(localStorage.getItem('survies'));
    calPages();
    survies = survies.splice(10 * (page - 1), 10 * page)

    return survies
}


const calPages = function(n){
    let i = 1;
    while(n > 0){
        pages.push(i)
        n = Math.floor(n/10);
        i += 1;
    }
}

