import {load_create} from './src/pages/create.js';
import {display_surveys} from './src/pages/surveys.js';
import {savequestion, savesurvey, saveanswers} from './src/storage/storage.js';
import {answer_survey} from './src/pages/answer.js';
import {home_screen} from './src/pages/home_screen.js';
import {survey_result} from './src/pages/results.js';

window.addEventListener('click', (e) => {
    const {target} = e;
    if(!target.matches("nav a")) {
        return;
    }
    e.preventDefault;
    urlRoute();
});


savequestion(1, "what is the weather?", []);
savequestion(1, "what is the day?", []);
savequestion(1, "what is the year?", []);
savequestion(2, "what is the capital city of germany?", ['berlin', 'dresden', 'basel', 'sulam']);
savequestion(2, "what is the capital city of France?", ['berlin', 'Paris', 'basel', 'sulam']);
savequestion(2, "what is the capital city of Egypt?", ['berlin', 'Cairo', 'basel', 'sulam']);
savesurvey('basic survey', 'Yazan');


savequestion(1, "explain what is energy?", []);
savequestion(2, "What is the boiling point of water?", ['0', '10', '100', '-100']);
savesurvey('physics survey', 'Yazan');


savequestion(1, "what do you think about cars?", []);
savequestion(3, "which is your favorite brand?", ['BMW', 'Mercedes', 'Volvo', 'Tesla']);
savequestion(2, "chose one model", ['EV', 'Combustion engine', 'hybrid', 'Horse back riding']);
savesurvey('Cars survey', 'Yazan');


saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [2, 4], 2]);
saveanswers(28, ['whatever', [2, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [2, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem delectus eos eligendi fugiat modi doloremque consequatur possimus quam quaerat!', [1, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos officiis quas sequi exercitationem similique ut voluptas, laboriosam dignissimos obcaecati sed at fugiat illum soluta dolor repudiandae, maxime omnis distinctio veniam. Deserunt tenetur ratione laudantium dolor eligendi est totam explicabo nesciunt.', [3], 3]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [3], 3]);





const urlRoutes = {
    404: {
        template: "templates/404.html",
        title: "404",
        description: ""
    },

    "/": {
        template: "templates/index.html",
        title: "Survey | Home",
        description: "",
        function: home_screen

    },
    
    "/index.html": {
        template: "templates/index.html",
        title: "Survey | Home",
        description: "",
        function: home_screen
    },
    "/surveys": {
        template: "templates/surveys.html",
        title: "Survey | Home",
        description: "",
        function: display_surveys
    },

    "/create": {
        template: "templates/create.html",
        title: "Create",
        description: "Create your own survey",
        function: load_create
    },
    
    "/answer": {
        template: "templates/answer.html",
        title: "Answer",
        description: "Answer a survey",
        function: answer_survey
    },

    "/results": {
        template: "templates/results.html",
        title: "Results",
        description: "see the Results of a survey",
        function: survey_result
    },

    "/answer/1": {
        template: "templates/answer.html",
        title: "Answer",
        description: "Answer a survey",
        function: answer_survey
    },

};

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();

};


const urlLocationHandler = async () => {
    const location = window.location.pathname;

    if (location.length == 0) {
        location = "/";
    }
    console.log(location);

    const route = urlRoutes[location] || urlRoutes['/'];

    console.log(route);

    //const doc = await fetch(route.template);
    //const html = await doc.text();

    //console.log(html);
    //document.getElementById("section--1").innerHTML = html;

    document.title = route.title;
    
    const f = route.function;

    if (f != null){
        console.log("excuted");
        f();
    }
    else{
        console.log("function was null");
    }

    //document.querySelector('meta[name="description"]').setAttribute('content', route.description);
};

window.onpopstate = urlLocationHandler;

//window.addEventListener("popstate", urlLocationHandler);

window.route = urlRoute;

urlLocationHandler();
