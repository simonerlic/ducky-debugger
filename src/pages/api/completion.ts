// Grab text from monaco and the text from the input box, then send it to the AI
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

let messages = [
    {role: "system", content: "You are an AI rubber duck debugger. You listen to a user's expanation of their code, and point out the lines where a flaw is found. Do not give them the answer immediately."}
];

let firstMessage = true;

// Path: src/pages/api/completion.ts
export async function post({ request }: { request: any }) {
    // Take data from the request, add it to the messages array, and send it to the AI
    const body = await request.json();

    if (firstMessage) {
        messages.push({role: "user", content: body.code});
        firstMessage = false;
    }

    // Check if the request is to clear the chat history
    if (body.action === 'clear') {
        messages = [
            {role: "system", content: "You are an AI rubber duck debugger. You listen to a user's expanation of their code, and point out the lines where a flaw is found. Do not give them the answer immediately."}
        ];

        firstMessage = true;

        return {
            status: 200,
            body: JSON.stringify({
                message: 'Chat history cleared',
            }),
        };
    }

    messages.push({role: "user", content: body.text});

    // Call the AI
    let resp = await callAI();

    // Add the AI's response to the messages array
    messages.push({role: "system", content: resp.data.choices[0].message?.content as string});

    // Return the AI's response
    return {
        status: 200,
        body: JSON.stringify({
            message: resp.data.choices[0].message?.content as string,
        }),
    };
}

async function callAI() {
    const configuration = new Configuration({
        organization: process.env.OPENAI_ORG,
        apiKey: process.env.OPENAI_API,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages as any,
    });

    return completion;
}
