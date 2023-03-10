// Grab text from monaco and the text from the input box, then send it to the AI
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api.js';

function callAI() {
    const monacoText = monacoEditor.editor.getModels()[0].getValue();
    // print out the text in the monaco editor
    console.log(monacoText);

    const inputText = document.getElementById("inputText") as HTMLInputElement;
    const text = inputText.value;

    console.log(text);

    // const fullText = monacoText + " " + text;
    // const aiText = document.getElementById("aiText") as HTMLInputElement;
    // aiText.value = "Thinking...";
    // const url = "http://localhost:5000/api/ai";
    // const data = { text: fullText, };
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log("Success:", data);
    //         aiText.value = data.text;
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     });
}

export default callAI;