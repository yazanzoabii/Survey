

export function ThankYou(){
    let section = document.createElement("section");
    let h1 = document.createElement('h1');
    h1.textContent = "Thank you for participating in the survey";
    section.appendChild(h1);
    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
}