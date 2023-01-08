'use strict';

const addQuestion1 = document.querySelector('.add__questions__1');
const addQuestion2 = document.querySelector('.add__questions__2');
const addQuestion3 = document.querySelector('.add__questions__3');

const listElement = document.querySelector('.hidden_section')

const questionsSection = document.querySelector('.questions_section');

const questionsList = document.querySelector('.add_question_here');

let current_question_type = 0;
let emptyList = [];
let current_id = 0;
localStorage.setItem("current_id", current_id.toString());
localStorage.setItem("survies", JSON.stringify(emptyList));

const getNewId = function() {
    let id = Number(localStorage.getItem("current_id"));
    id += 1;
    localStorage.setItem("current_id", id.toString());
    return id;
}

const storeSurvey = function(survey) {
    if (survey.num_questions === 0){
        return;
    }
    let id = getNewId();
    let survies = JSON.parse(localStorage.getItem("survies"));
    survies.push(id);
    console.log(survies);
    localStorage.setItem("survies", JSON.stringify(survies));
    localStorage.setItem(id, JSON.stringify(survey));
    let new_survey = new Survey();
    localStorage.setItem("current_survey", JSON.stringify(new_survey));
    console.log("stored");
}


class Question {
    constructor(question_type, question){
        this.question_type = question_type;
        this.question = question;
    }
}

class QuestionData {
    question_type;
    answers = {};
    options = {};
}

class SurveyData {
    survey = null;
    data = {};

}

class Survey {
    num_questions = 0;
    name = "";
    //Date
    //Author
    questions = [];
}

let survey = new Survey();
//survey.questions = [];
localStorage.setItem("current_survey", JSON.stringify(survey));

//add a button here for deleting the the question
const display_question = function(text){
    let list_value = '<li class="added_questions_list"><h2> open question:  ' + text.slice(0, 20) + '...</h2></li>';
    questionsList.innerHTML += list_value;
    listElement.style.display = "block";
}

const add_queston_to_current_survey = function(question_text, question_type, options){
    let newQuestion = new Question(question_type, question_text);
    let current_survey = JSON.parse(localStorage.getItem("current_survey"));
    current_survey.questions.push(newQuestion);
    current_survey.num_questions += 1;
    if(question_type > 1){
        newQuestion.Option1 = options[0];
        newQuestion.Option2 = options[1];
        newQuestion.Option3 = options[2];
        newQuestion.Option4 = options[3];
    }
    console.log(current_survey);
    localStorage.setItem("current_survey", JSON.stringify(current_survey));
}


const add_open_question = async function(e){
    console.log("Button clicked! 1");
    let Q = await fetch('open_question.html');
    let doc = await Q.text();
    questionsSection.innerHTML = doc;
};


const add_closed_question = async function(e){
    console.log("Button clicked! 2");
    let Q = await fetch('closed_question.html');
    let doc = await Q.text();
    questionsSection.innerHTML = doc;
};


const add_multi_choice_question = async function(e){
    console.log("Button clicked! 3");
    let Q = await fetch('multi-choice_question.html');
    let doc = await Q.text();
    questionsSection.innerHTML = doc;
};


addQuestion1.addEventListener('click', add_open_question);
addQuestion2.addEventListener('click', add_closed_question);
addQuestion3.addEventListener('click', add_multi_choice_question);

document.getElementById("parent").addEventListener("click", function(event) {
    if ( event.target.className === 'btn submit_question_1 btn__question') {
        current_question_type = 1;
        let question_value = document.getElementById("question_text").value;
        document.getElementById("question_text").value = '';

        if (question_value === ''){
            questionsSection.innerHTML += '<p class="invalid_input">Please provide a question!</p>'
            return
        }
        display_question(question_value);
        add_queston_to_current_survey(question_value, 1, []);
    }


    if ( event.target.className === 'btn submit_question_2 btn__question') {
        current_question_type = 2;
        let question_value = document.getElementById("question_text").value;
        document.getElementById("question_text").value = '';
        if (question_value === ''){
            questionsSection.innerHTML += '<p class="invalid_input">Please provide a question!</p>'
            return
        }
        let Option1 = document.getElementById("question_radio_text_1").value;
        let Option2 = document.getElementById("question_radio_text_2").value;
        let Option3 = document.getElementById("question_radio_text_3").value;
        let Option4 = document.getElementById("question_radio_text_4").value;
        for (let element of document.querySelectorAll('[id^="question_radio_text_"]')){
            element.value = "";
        }
        display_question(question_value);

        add_queston_to_current_survey(question_value, 1, [Option1, Option2, Option3, Option4]);

        console.log("submitted");
    }



    if ( event.target.className === 'btn submit_question_3 btn__question') {
        current_question_type = 3;
        let question_value = document.getElementById("question_text").value;
        document.getElementById("question_text").value = '';
        if (question_value === ''){
            questionsSection.innerHTML += '<p class="invalid_input">Please provide a question!</p>'
            return;
        }
        let Option1 = document.getElementById("question_checkbox_text_1").value;
        let Option2 = document.getElementById("question_checkbox_text_2").value;
        let Option3 = document.getElementById("question_checkbox_text_3").value;
        let Option4 = document.getElementById("question_checkbox_text_4").value;
        
        display_question(question_value);

        add_queston_to_current_survey(question_value, 1, [Option1, Option2, Option3, Option4]);

        console.log("submitted");
    }


    if ( event.target.className === 'btn submit_survey'){
        storeSurvey(JSON.parse(localStorage.getItem("current_survey")));
    }


});



