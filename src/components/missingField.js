

export function missingField(){
    document.getElementById("messagetouser").innerText = "missing field!";
    console.log('Missing Field!');
}

export function removeMissingField(){
    document.getElementById("messagetouser").innerText = "";
}