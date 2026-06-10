// Grab text from monaco and the text from the input box, then send it to the AI
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

let messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    {role: "system", content: "You are an AI rubber duck debugger. You listen to a user's explanation of their code, and point out the lines where a flaw is found. Do not give them the answer immediately."}
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
            {role: "system", content: "You are an AI rubber duck debugger. You listen to a user's explanation of their code, and point out the lines where a flaw is found. Do not give them the answer immediately."}
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
    const responseMessage = getResponseMessage(resp);

    // Add the AI's response to the messages array
    messages.push({role: "system", content: responseMessage});

    // Return the AI's response
    return {
        status: 200,
        body: JSON.stringify({
            message: responseMessage,
        }),
    };
}

async function callAI() {
    const openai = new OpenAI({
        organization: process.env.OPENAI_ORG,
        apiKey: process.env.OPENAI_API,
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    });

    return completion;
}

function getResponseMessage(resp: OpenAI.Chat.Completions.ChatCompletion): string {
    const firstChoice = resp.choices[0];
    if (!firstChoice?.message) {
        throw new Error("OpenAI response did not include a message choice.");
    }

    const content = firstChoice.message.content;

    if (typeof content === "string") {
        return content;
    }

    if (Array.isArray(content)) {
        const mergedContent = content
            .map((part) => (isTextContentPart(part) ? part.text : ""))
            .join("")
            .trim();

        if (mergedContent) {
            return mergedContent;
        }

        throw new Error("OpenAI response message content array was present but had no text parts.");
    }

    throw new Error("OpenAI response message content type was unsupported.");
}

function isTextContentPart(part: unknown): part is { type: "text"; text: string } {
    return Boolean(
        part
        && typeof part === "object"
        && "type" in part
        && part.type === "text"
        && "text" in part
        && typeof part.text === "string"
    );
}
