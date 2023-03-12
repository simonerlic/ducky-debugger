// Grab text from monaco and the text from the input box, then send it to the AI
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api.js';
import { Configuration, OpenAIApi } from "openai";
import node from '@astrojs/node';

var messages = [
    {role: "System", content: "You are an AI rubber duck debugger. You listen to a user's expanation of their code, and point out the lines where a flaw is found."}
];

async function callAI() {
    const monacoText = monacoEditor.editor.getModels()[0].getValue();
    // print out the text in the monaco editor
    console.log(monacoText);

    const inputText = document.getElementById("inputText") as HTMLInputElement;
    const text = inputText.value;

    console.log(text);

    // Use the text from the input box to create a new <p> element in the output div
    const outputDiv = document.getElementById("output") as HTMLDivElement;
    const newP = document.createElement("p");
    newP.innerHTML = "User: " + text;
    outputDiv.appendChild(newP);

    newP.scrollIntoView()

    const configuration = new Configuration({
        apiKey: 'YOUR_API_KEY',
    });
    const openai = new OpenAIApi(configuration);
      
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages as any,
    });
    console.log(completion.data.choices[0].message);
}

export default callAI;
export { messages };