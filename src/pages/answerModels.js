class AnswerTemplate{
    constructor(section, fieldset, question){
        this.section = section;
        this.fieldset = fieldset;
        this.question = question;
    }

    render(){
        this.fieldset = document.createElement('fieldset');
        this.fieldset.className = "radio_options";
        let h2 = document.createElement('h2');
        h2.textContent = this.question.question;
        this.fieldset.appendChild(h2);
    }
}

export class AnswerTemplateOpen extends AnswerTemplate{
    render(){
        super.render();
        let element = document.createElement("TEXTAREA");
        element.id = this.question.Qid;
        element.className = "queston_textbox";
        this.fieldset.appendChild(element);
        this.section.appendChild(this.fieldset);
    }
}
export class AnswerTemplateClosed extends AnswerTemplate{
    render(){
        super.render();
        let i = 1;
        for (let option of this.question.options){
            
            let div = document.createElement('div');
            let op = document.createElement('input');
            let lb = document.createElement('label');

            op.type = "radio";
            op.id = this.question.Qid;
            op.opt = i;
            i += 1;
            op.name = this.question.question;
            op.value = option;
            lb.for = option;
            lb.textContent = option;    

            div.appendChild(op);
            div.appendChild(lb);
            this.fieldset.appendChild(div);
        }
        this.section.appendChild(this.fieldset);
    }
    
}

export class AnswerTemplateMulti extends AnswerTemplate{
    render(){
        super.render();
        let i = 1;
        for (let option of this.question.options){
            
            let div = document.createElement('div');
            let op = document.createElement('input');
            let lb = document.createElement('label');

            op.type = "checkbox";
            op.id = this.question.Qid;
            op.opt = i;
            i += 1;
            op.name = this.question.question;
            op.value = option;
            lb.for = option;
            lb.textContent = option;    

            div.appendChild(op);
            div.appendChild(lb);
            this.fieldset.appendChild(div);
        }
        this.section.appendChild(this.fieldset);
    }
}