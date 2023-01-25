export class Question {
    constructor(question_type, question, Qid){
        this.question_type = question_type;
        this.question = question;
        this.Qid = Qid;
    }
}

export class QuestionMulti extends Question {
    constructor(question_type, question, Qid, options){
        super(question_type, question, Qid);
        this.options = options
    }
}

export class QuestionData {
    question_type;
    answers = [];
}

export class SurveyData {
    QuestionsData = [];
}

export class Questions {
    Questions = [];
}

export class Survey {
    id = 1;
    num_questions = 0;
    name = "";
    Date = 0;
    Author = "";
}


