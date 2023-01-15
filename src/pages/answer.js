import {submit_answer} from '../../js/submit_answer.js';

export function answer_survey(){
    let id = 28;
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

    ans_btn.addEventListener('click', submit_answer);

    section.appendChild(ans_btn);

    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
}