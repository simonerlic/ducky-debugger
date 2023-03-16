// Grab text from monaco and the text from the input box, then send it to the AI
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

let messages = [
    {role: "System", content: "You are an AI rubber duck debugger. You listen to a user's expanation of their code, and point out the lines where a flaw is found."}
];

// Path: src/pages/api/completion.ts
export async function post({ request }: { request: any }) {
    // Take data from the request, add it to the messages array, and send it to the AI
    const body = await request.json();

    // messages.push({role: "User", content: body.text});

    // Call the AI
    let resp = await callAI();

    console.log(resp.data.choices[0].message?.content!)

    // Add the AI's response to the messages array
    // messages.push({role: "System", content: resp.data.choices[0].message?.content!});

    console.log(messages);
    return {
        body: JSON.stringify({
          message: 'Hello from Astro!',
        }),
    };
}

async function callAI() {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
      
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages as any,
    });

    return completion;

    // return "This is a test response";
}
