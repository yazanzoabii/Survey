
class QuestionTemplate {
    constructor(section, submit_question) {
        this.section = section;
        this.submit_question = submit_question;
    }

    render() {
        this.section.innerHTML = '<div></div>';
        let element = document.createElement("TEXTAREA");
        element.className = "queston_textbox";
        element.id = "question_text";
        this.section.appendChild(element);
    }

    renderButton(btn_id) {
        let element = document.createElement("button");
        let div = document.createElement("div");
        element.className = "btn submit_question_" + String(btn_id) + " btn__question";
        element.innerHTML = "Submit Question!";
        element.id = "submit_question";
        div.innerHTML += "<p1 id='messagetouser'></p1>";
        div.appendChild(element);
        this.section.appendChild(div);
        element.addEventListener('click', this.submit_question)
    }
}

class QuestionTemplateOptions extends QuestionTemplate {
    render() {
        super.render()
        let div = document.createElement("div");
        div.className = "radio_options";
    
        for (let i = 1; i < 5; i += 1){
            let element = document.createElement("TEXTAREA");
            element.className = "queston_textbox";
            element.id = "question_radio_text_" + String(i);
            element.className = "queston_radio_textbox";
            element.placeholder = "option " + i;
            div.appendChild(element);
            
        }
        this.section.appendChild(div);
    }
}

export class QiestionTemplateOpen extends QuestionTemplate {
    render() {
        super.render();
        super.renderButton(1);
    }
}

export class QiestionTemplateMulti extends QuestionTemplateOptions {
    render() {
        super.render()
        super.renderButton(2);
    }
}

export class QiestionTemplateClosed extends QuestionTemplateOptions {
    render() {
        super.render()
        super.renderButton(3);
    }
}