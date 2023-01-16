'use strict';

import {router} from './../../router2.js';

export function display_surveys(){



    let section = document.createElement('section');
    section.className = 'scroll';
    section.id = ""
    let ul = document.createElement('ul');
    ul.className = 'saved_survies';
    ul.id = 'saved_survies';


    let survies = JSON.parse(localStorage.getItem('survies'));
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
            res_btn.addEventListener('click', router);

            let clo_btn = document.createElement('button');
            clo_btn.className = 'close';
            clo_btn.textContent = 'Close';
            clo_btn.id = sid;
            clo_btn.addEventListener('click', router);

            let ans_btn = document.createElement('button');
            ans_btn.className = 'answer';
            ans_btn.textContent = 'Answer';
            ans_btn.id = sid;
            ans_btn.addEventListener('click', router);


            li.appendChild(res_btn);
            li.appendChild(clo_btn);
            li.appendChild(ans_btn);

            ul.appendChild(li);
        }
    }

    section.appendChild(ul);
    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
    
    
    /*document.getElementById("saved_survies").addEventListener("click", function(event) {
        if ( event.target.className === 'answer') {
            console.log(event.target.id)     
            //window.location.href = '/create';
            window.location.href = '/answer/' + event.target.id;
            //window.location.pathname = '/answer/' + event.target.id;
        }
        
        if ( event.target.className === 'results') {        
            window.location.href = 'results/' + event.target.id;
            //window.location.pathname = '/results/' + event.target.id;
        }

        if ( event.target.className === 'close') {   
            let survies = JSON.parse(localStorage.getItem("survies"));     

            var index = survies.indexOf(Number(event.target.id));
            if (index !== -1) {
                survies.slice(index, 1);
            }

            console.log(survies);
            localStorage.setItem("survies", JSON.stringify(survies));
            localStorage.removeItem(event.target.id);
            document.getElementById(event.target.id).remove();
        }
    });*/
    console.log("display");
}