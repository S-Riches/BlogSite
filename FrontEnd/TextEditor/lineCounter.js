// TODO tidy this up as there is no need for array and string conversion, could just do one function that does both things at the same time
// reads the value of the text editor, splits at new line and then gets the length
function getNumberOfLines() {
    let textBox = document.getElementById("textEditor");
    let numberOfLines = textBox.value.split("\n").length;
    return numberOfLines;
}
// create an array of lines from 1 to number of lines
function convertToArray(numberOfLines) {
    let listOfLines = [];
    for (let i = 1; i <= numberOfLines; i++) {
        listOfLines.push(i);
    }
    return listOfLines;
}
// format this to a string to put into the text editor
function convertArrayIntoString(listOfLines) {
    let stringForTextArea = "";
    for (let i = 0; i < listOfLines.length; i++) {
        stringForTextArea += listOfLines[i];
        stringForTextArea += "\r\n";
    }
    return stringForTextArea;
}

// run this function whenever the text editor is written in
document.getElementById("textEditor").addEventListener("input", () => {
    let lines = getNumberOfLines();
    let listOfLines = convertToArray(lines);
    let listCounter = document.getElementById("lineCounter");
    listCounter.value = convertArrayIntoString(listOfLines);
});
