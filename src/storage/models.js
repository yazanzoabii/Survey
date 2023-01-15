export class Question {
    constructor(question_type, question, Qid){
        this.question_type = question_type;
        this.question = question;
        this.Qid = Qid;
    }
}

export class QuestionData {
    question_type;
    answers = [];
}

export class SurveyData {
    QuestionsData = [];
}

export class Survey {
    num_questions = 0;
    name = "";
    //Date
    Author = "";
    questions = [];
    answers = -1;
}