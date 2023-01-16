//import { Chart } from "chart.js";

export function displyQuestionResult(type, my_data, i, question){
    console.log(my_data);
    console.log(question);
    let h2 = document.createElement('h2');
    h2.textContent = i + ') ' + question.question;

    document.getElementById("section--1").appendChild(h2);
    let overlay = document.createElement('div');
    overlay.className = 'overlay hidden';
    document.getElementById("section--1").appendChild(overlay);

    if (type == 1){

        let section = document.createElement('section');
        section.className = 'modal hidden';


        let btn_close = document.createElement('button');
        btn_close.className = 'close';
        btn_close.textContent = 'X';
        btn_close.addEventListener('click', () => {
            section.classList.add('hidden');
            overlay.classList.add('hidden');
        });
        section.appendChild(btn_close);


        let btn_open = document.createElement('button');
        btn_open.className = 'btn';
        btn_open.textContent = 'View Answers!';
        btn_open.addEventListener('click', () => {
            section.classList.remove('hidden');
            overlay.classList.remove('hidden');

        });


        document.getElementById("section--1").appendChild(btn_open);
        
        console.log(my_data);
        let i = 0;
        for (let answer of my_data){
            i += 1;
            let h3 = document.createElement('h3');
            h3.textContent = '[' + i + '] ' + answer;
            section.appendChild(h3);
        }
        document.getElementById("section--1").appendChild(section);
    }


    if (type > 1){
        let canvas = document.createElement('canvas');
        canvas.id = "chart_" + i;
        canvas.width = 400;
        canvas.height = 100;
        canvas.ariaLabel = "canvas_" + i;
        canvas.role = 'img';
        
        document.getElementById("section--1").appendChild(canvas);
        const ctx = document.getElementById('chart_' + i).getContext('2d');



        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: question.options,
                datasets: [
                  {
                    label: 'Dataset ' + i,
                    data: my_data,
                    borderColor: '#36A2EB',
                    backgroundColor: '#9BD0F5',
                  }
                ]
              },
            scales: {
                myScale: {
                    suggestedMin: 0
                }
            }
        });
    }
    console.log("display question result");
}


