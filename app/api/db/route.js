import connectMongoDB from "@/libs/mongodb";
import Task  from "@/models/task";
const { NextResponse } = require("next/server");
// import nextUrl from 

export async function GET(request){
// console.log(request);
    await connectMongoDB(); 
    const data = await Task.find();
    console.log(data);
    return NextResponse.json(data);

}
export async function POST(request){
    // console.log(request.json());
    const {title , description , status} =  await request.json();
    await connectMongoDB(); 
    await Task.create({title , description , status});
    console.log("Data Created");
    return NextResponse.json({message : "Done posted" },{status : 201});
}

export async function DELETE(request){
    // console.log(request.json());
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB(); 
    await Task.findByIdAndDelete(id);
    console.log("Data deleted that was given in ID");
    return NextResponse.json({message : "Done posted" },{status : 201});
}


