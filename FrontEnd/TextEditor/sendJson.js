// convert the data within the elements into a blob, then send to the api via a post request
async function sendData() {
    let markDownContent = document.getElementById("textEditor").value;
    let fileName = document.getElementById("textEditorTitle").value;
    // convert data to json
    let data = new Blob([JSON.stringify(fileName, markDownContent)], {
        type: "application/json",
    });
    // POST request to the django backend
    const send = await fetch("http://127.0.0.1:8000/createFile/markDownSend/", {
        method: "POST",
        mode: "no-cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "text/html",
        },
        body: data,
        keepalive: true,
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

document.getElementById("sendData").addEventListener("click", () => {
    sendData();
});
