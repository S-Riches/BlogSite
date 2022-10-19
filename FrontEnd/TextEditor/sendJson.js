// convert the data within the elements into a FormData, then send to the api via a post request
async function sendData() {
    let data = {
        Title: document.getElementById("textEditorTitle").value,
        Content: document.getElementById("textEditor").value,
    };
    data = JSON.stringify(data);
    // POST request to the django backend, sending the JSON object
    const send = await fetch("http://127.0.0.1:8000/createFile/markDownSend/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        // changes the response object to json object
        .then((res) => res.json())
        .then((data) => console.table(data));
}

document.getElementById("sendData").addEventListener("click", () => {
    sendData();
});
