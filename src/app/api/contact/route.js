import { Contact } from "@/utils/models/Schema";
import dbConnect from "@/lib/mongo-connect";
import { redirect } from 'next/navigation'

import { NextRequest, NextResponse } from 'next/server';
export async function GET(request) {
    await dbConnect()
    try{
    const contact = await Contact.find({})
    return NextResponse.json({ data: contact });
    }catch(error){
        console.log('ERROR OCCURED',error)
        return NextResponse.status(500).json({ error: error.message });
    }
}
export async function POST(request) {
    try {
        const body = await request.json();
        const { message, email } = body;
        await dbConnect();
        const contact = await Contact.create({ message, email });
        console.log("Saved contact:", contact);
        return NextResponse.json({ data: contact });
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.status(500).json({ error: error.message });
    }
}    
