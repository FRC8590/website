import { NextResponse } from "next/server";

const webhook_url = process.env.WEBHOOK_URL;

const validateEmail = (email: string) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

export async function POST(req: Request) {
    const email: string | undefined = (await req.json()).email;
    if (email === undefined) {
        return NextResponse.json(
            {
                message: "Missing data (stop trying to break the API!)",
            },
            { status: 400 },
        );
    }
    if (!validateEmail(email)) {
        return NextResponse.json(
            { message: "Not a valid email address." },
            { status: 400 },
        );
    }
    if (email.endsWith("@fcpsschools.net")) {
        return NextResponse.json(
            {
                message:
                    "Don't use a school email! We can't send emails to them.",
            },
            { status: 400 },
        );
    }
    if (email.length > 300) {
        return NextResponse.json(
            { message: "Email is too long." },
            { status: 400 },
        );
    }

    if (webhook_url) {
        await fetch(webhook_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: email }),
        });
    }
    return NextResponse.json(
        { message: "Successfully added email!" },
        { status: 200 },
    );
}
