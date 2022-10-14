// convert the data within the elements into a FormData, then send to the api via a post request
async function sendData() {
    let markDownContent = document.getElementById("textEditor").value;
    let fileName = document.getElementById("textEditorTitle").value;
    // convert data to FormData Obj
    let data = new FormData();
    data.append("Title", fileName);
    data.append("Content", markDownContent);
    // POST request to the django backend
    const send = await fetch("http://127.0.0.1:8000/createFile/markDownSend/", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        },
        keepalive: "true",
        body: JSON.stringify(data),
    });
    const responseJson = await send.json();
    console.log(responseJson);
}

document.getElementById("sendData").addEventListener("click", () => {
    sendData();
});
