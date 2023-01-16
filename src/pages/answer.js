import {saveanswers} from '../storage/storage.js';
import {ThankYou} from '../components/ThankYou.js';
import { missingField } from '../components/missingField.js';


export function load_answer_survey(id){
    
    let section = document.createElement('section');

    let survey = JSON.parse(localStorage.getItem(id));
    
    let num = survey.num_questions;
    
    let questions = survey.questions;
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    h1.textContent = survey.name;
    h3.textContent = "by: " + survey.Author;
    section.appendChild(h1);
    section.appendChild(h3);
    console.log(questions); 

    for (let question of questions){
        let fieldset = document.createElement('fieldset');
        fieldset.className = "radio_options";
        let h2 = document.createElement('h2');
        h2.textContent = question.question;
        fieldset.appendChild(h2);

        //open Question
        if (question.question_type == 1){
            let element = document.createElement("TEXTAREA");
            element.id = question.Qid;
            element.className = "queston_textbox";
            fieldset.appendChild(element);
        }
        
        //closed question
        if (question.question_type == 2){

            let i = 1;
            for (let option of question.options){
                
                let div = document.createElement('div');
                let op = document.createElement('input');
                let lb = document.createElement('label');

                op.type = "radio";
                op.id = question.Qid;
                op.opt = i;
                i += 1;
                op.name = question.question;
                op.value = option;
                lb.for = option;
                lb.textContent = option;    

                div.appendChild(op);
                div.appendChild(lb);
                fieldset.appendChild(div);
            }
        }

        if (question.question_type == 3){

            let i = 1;
            for (let option of question.options){
                
                let div = document.createElement('div');
                let op = document.createElement('input');
                let lb = document.createElement('label');

                op.type = "checkbox";
                op.id = question.Qid;
                op.opt = i;
                i += 1;
                op.name = question.question;
                op.value = option;
                lb.for = option;
                lb.textContent = option;    

                div.appendChild(op);
                div.appendChild(lb);
                fieldset.appendChild(div);
            }
        }



        section.appendChild(fieldset);
    }

    let ans_btn = document.createElement('button');
    ans_btn.className = 'btn btn_submit_answer';
    ans_btn.textContent = 'Submit!';
    ans_btn.id = survey.name;

    ans_btn.addEventListener('click', () => {
        submit_answer(id);
    });

    section.appendChild(ans_btn);

    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
}




export function submit_answer(id) {

    let survey = JSON.parse(localStorage.getItem(id));
    let answers = [];
    for( let question of survey.questions){
        if (question.question_type == 1){
            let answer = document.getElementById(question.Qid);
            console.log(answer.value);
            if (answer.value == ''){
                missingField();
                return;
            }
            answers.push(answer.value);
        }
        if (question.question_type == 2){
            let choices = document.getElementsByName(question.question);
            let radio_answer = '';
            for (let choice of choices){
                if (choice.checked){
                    radio_answer = choice.opt;
                    //answers[Number(choice.opt) - 1] += 1
                    console.log(choice.value);
                    break;
                }
            }
            if (radio_answer == ''){
                missingField();
                return;
            }
            else {
                console.log(radio_answer);
                answers.push(radio_answer);
            }
        }

        if (question.question_type == 3){
            let choices = document.getElementsByName(question.question);
            let radio_answer = [0, 0, 0, 0];
            for (let choice of choices){
                if (choice.checked){
                    //radio_answer.push(choice.opt);
                    radio_answer[Number(choice.opt) - 1] += 1;
                    //answers.push(choice.opt)
                    console.log(choice.value);
                }
            }
            if (radio_answer == []){
                missingField();
                return;
            }
            else {
                console.log(radio_answer);
                answers.push(radio_answer);
            }
        }
    }
    console.log(answers);
    saveanswers(id, answers);
    ThankYou();
}
