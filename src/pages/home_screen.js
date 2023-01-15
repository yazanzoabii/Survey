
export function home_screen(){
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = "Build your custom survey";
    let h4 = document.createElement('h4');
    h4.textContent = "We provide the best platform for building a survey";
    div.appendChild(h1);
    div.appendChild(h4);
    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(div);
}