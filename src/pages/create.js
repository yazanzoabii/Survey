import {savequestion, savesurvey} from '../../src/storage/storage.js';

let type = 0;


export async function load_create(){
    
    

    const doc = await fetch('./../templates/create.html');
    const html = await doc.text();

    document.getElementById("section--1").innerHTML = html;




    document.querySelectorAll('[id^="add__questions__"]').forEach(item => {
        item.addEventListener('click', function(event){
            const section = document.getElementById("question_section");
            add_question(event, section);
        })

    });

    document.getElementById('submit_survey').addEventListener('click', submit_survey);
};


const add_question = function(event, section){
    if (event.target.className == 'btn add__questions__1 btn__question'){
        section.innerHTML = "<h1 class='header__title'>Open Question</h1>";
        add_question_box(section);
        add_button(section, 1);
        type = 1;            
    }
    if (event.target.className == 'btn add__questions__2 btn__question'){
        section.innerHTML = "<h1 class='header__title'>Closed Question</h1>";
        add_question_box(section);
        add_question_choices(section);
        add_button(section, 2);
        type = 2;
    }
    if (event.target.className == 'btn add__questions__3 btn__question'){
        section.innerHTML = "<h1 class='header__title'>Multi-choice Question</h1>";
        add_question_box(section);
        add_question_choices(section);
        add_button(section, 3);
        type = 3;
    }
};


const add_question_box = function(section){
    let element = document.createElement("TEXTAREA");
    element.className = "queston_textbox";
    element.id = "question_text";
    section.appendChild(element);
};


const add_question_choices = function(section){
    let div = document.createElement("div");
    div.className = "radio_options";

    for (let i = 1; i < 5; i += 1){
        let element = document.createElement("TEXTAREA");
        element.className = "queston_textbox";
        element.id = "question_radio_text_" + String(i);
        element.className = "queston_radio_textbox";
        div.appendChild(element);
        
    }
    section.appendChild(div);
};


const add_button = function(section, btn_id){
    let element = document.createElement("button");
    let div = document.createElement("div");
    element.className = "btn submit_question_" + String(btn_id) + " btn__question";
    element.innerHTML = "Submit Question!";
    element.id = "submit_question";
    div.appendChild(element);
    section.appendChild(div);
    element.addEventListener('click', submit_question)
}


const submit_question = function() {
    let list = [];
    let text = document.getElementById('question_text').value;
    if (type > 1){
        for (let op of document.querySelectorAll('[id^="question_radio_text_"]')){
            list.push(op.value)
        }

    }
    savequestion(type, text, list);
    console.log('submit question');
};


const submit_survey = function() {
    savesurvey();
    console.log('submit survey');
};


