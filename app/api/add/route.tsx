import connectToMongoDB from "../../../libs/mongodb";
import collections from "../../../models/model";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  
  
  try {
    const { title, note } = await request.json();
    await connectToMongoDB();
    await collections.create({ title, note });
    return NextResponse.json({ message: "Data added successfully" }, { status: 201 });

  } catch(error) {
    console.error(error);
    throw new Error("Failed to add data to MongoDB");
  }
}
