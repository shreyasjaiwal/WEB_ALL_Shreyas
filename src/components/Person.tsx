import React,{useState} from 'react'

interface Props {
    name:string;
    age:number;
    email:string; //? for options//
    // getName:(name:string)=>string;
    hairColor:hairColor;
}
export enum hairColor{
    Blonde="Your hair is blonde",
    Pink="Cool hair color"
}

export const Person= (props: Props)=> {
    const [country,setCountry]=useState<string| null>("");
    type NameType="Shreyas"|"Rahul";
    const nameForType:NameType="Shreyas"
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h2>{props.age}</h2>
      <input placeholder='write down the name of your country' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setCountry(event.target.value)}}></input>
      {country}
      {props.hairColor}
    </div>
  );
}


