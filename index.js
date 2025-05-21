let count = document.getElementById("charCount");

function track(){
    let input = document.getElementById("textInput").value;

    let result = input.replace(/\s+/g, '').length;
    count.textContent = result;
}