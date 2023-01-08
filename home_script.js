'use strict';

let survies = JSON.parse(localStorage.getItem('survies'));
const surviesList = document.querySelector('.saved_survies');
console.log("started home");


if (survies !== null){
    for (let id of survies){
        let survey = JSON.parse(localStorage.getItem(id));
        let sid = id.toString();
        console.log(sid);
        surviesList.innerHTML += "<li calss='display_survey'id="+sid+">" + sid + "<button class='results' id=" + sid + ">Results</button><button class='close' id=" + sid + ">delete</button><button class='answer' id="+ sid +">Answer</button></li>";
    }
}


document.getElementById("saved_survies").addEventListener("click", function(event) {
    if ( event.target.className === 'answer') {        
        window.location.href = event.target.id + '/';
    }
    
    if ( event.target.className === 'results') {        
        window.location.href = 'results/' + event.target.id + '/';
    }

    if ( event.target.className === 'close') {   
        let survies = JSON.parse(localStorage.getItem("survies"));     

        var index = survies.indexOf(Number(event.target.id));
        if (index !== -1) {
            survies.splice(index, 1);
        }

        console.log(survies);
        localStorage.setItem("survies", JSON.stringify(survies));
        localStorage.removeItem(event.target.id);
        document.getElementById(event.target.id).remove();
    }
});
