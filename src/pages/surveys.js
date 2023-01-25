'use strict';

import {router} from './../../router2.js';
import { pagination } from '../components/pagination.js';

let pages = [];

export function display_surveys(page = 1, sortBy = null){


    let section = document.createElement('section');
    section.className = 'scroll';
    section.id = ""
    let ul = document.createElement('ul');
    ul.className = 'saved_survies';
    ul.id = 'saved_survies';
    ul.innerHTML += "<li class='list_headers flex-container'>" +
    "<div page=" + page + " id='sortbyname' class='column survey_name'>Survey Name</div>" + 
    "<div page=" + page + " id='sortbyAuthor' class='column author_name'>Author Name</div>" + 
    "<div page=" + page + " id='sortbyDate' class='column date'>Date</div>" + 
    "<div class='column survey_buttons'>Actions</div></li>";


    let survies = getPage(page, sortBy);
    const surviesList = document.querySelector('.saved_survies');


    if (survies !== null){
        for (let id of survies){
            let survey = JSON.parse(localStorage.getItem(id));
            let sid = id.toString();
            let li = document.createElement('li');
            li.className = 'display_survey';
            li.id = sid;


            let text1 = "";
            let text2 = "";
            if (survey.name == ""){
                text1 = "no name";
            }
            else{
                text1 = survey.name;
            }
            if (survey.Author == ""){
                text2 += "unkown";
            }
            else{
                text2 += survey.Author;
            }
            let div1 = document.createElement('div');
            div1.className = "column survey_name";
            div1.textContent = text1;
            li.appendChild(div1);
            let div2 = document.createElement('div');
            div2.className = "column author_name";
            div2.textContent = text2;
            li.appendChild(div2);
            
            let div3 = document.createElement("div");
            div3.className = "column Date"
            div3.textContent = survey.Date;
            li.appendChild(div3);
            let div4 = document.createElement('div');

            let res_btn = document.createElement('button');
            res_btn.className = 'results';
            res_btn.textContent = 'Results';
            res_btn.id = sid;
            res_btn.addEventListener("click", router);

            let clo_btn = document.createElement('button');
            clo_btn.className = 'close';
            clo_btn.textContent = 'Close';
            clo_btn.id = sid;
            clo_btn.addEventListener("click", router);

            let ans_btn = document.createElement('button');
            ans_btn.className = 'answer';
            ans_btn.textContent = 'Answer';
            ans_btn.id = sid;
            ans_btn.addEventListener("click", router);


            div4.appendChild(res_btn);
            div4.appendChild(clo_btn);
            div4.appendChild(ans_btn);
            div4.className = "column survey_buttons";
            li.appendChild(div4);
            li.className = "flex-container";

            ul.appendChild(li);
        }
    }

    
    section.appendChild(ul);
    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
    document.getElementById("sortbyAuthor").addEventListener('click', router);
    document.getElementById("sortbyname").addEventListener('click', router);
    document.getElementById("sortbyDate").addEventListener('click', router);
    pagination(page, sortBy);


    const paginationNumbers = document.getElementById("pagination-numbers");
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = page;
    paginationNumbers.appendChild(pageNumber);
    displaySortType(sortBy);
    console.log("display");
}



const getPage = function(page = 1, sortBy = null){
    
    let survies = JSON.parse(localStorage.getItem('survies'));
    if( sortBy == "sortbyAuthor"){
        survies = survies.sort(function(a, b) {
            return (JSON.parse(localStorage.getItem(a)).Author).localeCompare(JSON.parse(localStorage.getItem(b)).Author, undefined, {numeric: true, sensitivity: 'base'});
        });
    }    
    if( sortBy == "sortbyname"){
        survies = survies.sort(function(a, b) {
            return (JSON.parse(localStorage.getItem(a)).name).localeCompare(JSON.parse(localStorage.getItem(b)).name, undefined, {numeric: true, sensitivity: 'base'});
        });
    }    
    if( sortBy == "sortbyDate"){
        survies = survies.sort(function(a, b) {
            return (JSON.parse(localStorage.getItem(a)).Date).localeCompare(JSON.parse(localStorage.getItem(b)).Date, undefined, {numeric: true, sensitivity: 'base'});
        });
    }    
    
    survies = survies.slice(10 * (page - 1), 10 * page)

    return survies
}


const displaySortType = function(sortby){
    document.getElementById(sortby).style.fontWeight = "bold";
}

