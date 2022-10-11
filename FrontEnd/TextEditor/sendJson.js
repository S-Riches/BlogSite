// get all data from the text area
// put it into a blob format
function sendData() {
    let markDownContent = document.getElementById("textEditor").value;
    let fileName = document.getElementById("textEditorTitle").value;
    console.log(markDownContent);
    // convert data to json
    let data = new Blob([JSON.stringify(fileName, markDownContent)], {
        type: "application/json",
    });
    console.log(data);
}

document.getElementById("sendData").addEventListener("click", () => {
    sendData();
});
