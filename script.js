
let availablekeywords = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'PYTHON',
    'JAVA',
    'C++',
    'C#',
    'HOW TO CREATE A WEBSITE',
    'HOW TO LEARN CODING WITH P-HUB',
    'HOW TO LEARN WEB DESIGN',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availablekeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }
    display(result);
}


function display(result) {
    const content = result.map((item)=>{
        return "<li>" + item + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}