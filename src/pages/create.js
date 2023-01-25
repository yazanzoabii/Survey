import {savequestion, savesurvey} from '../../src/storage/storage.js';
import {ThankYou} from '../components/ThankYou.js';
import {removeMissingField, missingField } from '../components/missingField.js';
import { Question } from '../storage/models.js';
import {QiestionTemplateOpen, QiestionTemplateMulti, QiestionTemplateClosed} from './createModels.js';
let type = 0;


export async function load_create(){
    
    const doc = await fetch('./../templates/create.html');
    const html = await doc.text();
    document.getElementById("section--1").innerHTML = html;

    document.querySelectorAll('[id^="add__questions__"]').forEach(item => {
        item.addEventListener('click', function(event){
            const section = document.getElementById("question_section");
            let QuestionTemplate = null;
            if (event.target.className == 'btn add__questions__1 btn__question'){
                QuestionTemplate = new QiestionTemplateOpen(section, submit_question);
                type = 1;
            }
            else if (event.target.className == 'btn add__questions__2 btn__question'){
                QuestionTemplate = new QiestionTemplateClosed(section, submit_question);
                type = 2;
            }
            else {
                QuestionTemplate = new QiestionTemplateMulti(section, submit_question);
                type = 3;
            }
            console.log(QuestionTemplate);
            QuestionTemplate.render();
        })
    });
    document.getElementById('submit_survey').addEventListener('click', submit_survey);
};


const submit_question = function() {
    let list = [];
    let text = document.getElementById('question_text').value;
    if (text == ""){
        missingField();
        return;
    }
    else{
        removeMissingField();
    }
    if (type > 1){
        for (let op of document.querySelectorAll('[id^="question_radio_text_"]')){
            list.push(op.value);
            op.value = "";
        }

    }
    savequestion(type, text, list);
    document.getElementById('question_text').value = "";
    console.log('submit question');
};


const submit_survey = function() {
    let survey_name = document.getElementById("survey_name").value;
    let Author_name = document.getElementById("Author_name").value;

    savesurvey(survey_name, Author_name);
    console.log('submit survey');
};


