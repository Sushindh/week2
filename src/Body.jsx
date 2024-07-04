import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

import Codech from "./assets/images/codechef.png"
import Boyw from "./assets/images/boywork.png"
import grp from "./assets/images/group.png"
import compb from "./assets/images/compboy.png"
import Ht from "./assets/Html.jsx"
import Ra from "./assets/React.jsx"
import Node from "./assets/images/node.png"
import Brg from "./assets/images/bgd.png"

import Pro from "./assets/Profile.jsx"
import Loc from "./assets/Lock.jsx"
import { HiEye } from "react-icons/hi"
import { HiEyeOff } from "react-icons/hi"

function Body(){
    const [mail,setMail]=useState("");

    const newMail=(event)=>{
        setMail(event.target.value);
    }

    function Final(){
        console.log("Email Id: "+mail);
        console.log("Password: "+pass);
    }

    const [pass,setPass]=useState("");
    const newpass=(event)=>{
        setPass(event.target.value);
    }

    const [see,setSee]=useState(false);
    const newSee=()=>{
        setSee(!see);
    }

    return(
        
        
        
        <div className=" h-screen md:bg-gradient-to-b from-sky-300 via-sky-100 to-white">
            <img src={Brg} className="absolute h-screen z-[-1]" />
            <div className="flex justify-center items-center h-screen">
                <div className="max-md:hidden grid gap-2">
                    <img src={Node} alt="Node" className="h-40 w-40 blur-[1px] -rotate-45"/>
                    <img src={grp} alt="Boywatch" className="h-40 w-40 blur-[1px] -rotate-45 shadow-md focus:outline-none"></img>
                    <Ra/>
                </div>
                <div className="flex justify-center items-end pt-[115px]">
                    <div className="rounded-tl-[150px] md:h-[560px] md:w-[90%] max-w-[490px] bg-white border-2 md:rounded-[50px]">
                        <div className="pt-3 flex justify-center">
                            <img src={Codech} alt="codechef" className="w-28 h-28"/>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-sky-500 font-roboto text-2xl font-bold leading-tight text-center">LOGIN</h3>
                        </div>
                        <div className="pt-6 px-6 md:pl-14">
                            <p className="font-roboto font-bold">Email ID</p>
                        </div>
                        
                        <div className="pt-1 px-6 md:pl-14">
                            <div className="flex border-2 w-96 h-8 border-black rounded-lg">
                                <Pro/>
                                <input type="email"  className="w-96 pl-3 pb-1 rounded-md border-black focus:outline-none" value={mail} onChange={newMail} placeholder="some.mail@university.com"/>
                            </div>
                        </div>
                        <div className="pt-3 px-6 md:pl-14">
                            <p className="font-roboto font-bold">Password</p>
                        </div>
                        <div className="pt-1 px-6 md:pl-14">
                            <div className="flex border-2 w-96 h-8 border-black rounded-lg">
                                <Loc/>
                                <input type={see ? "text" : "password"} className="w-[calc(100%-40px)] pl-4 pt-0.5 rounded-md border-black focus:outline-none" placeholder="********" value={pass} onChange={newpass}/>
                                <p className="h-4 w-4 pt-1 pr-6" onClick={newSee}>{see?<HiEyeOff/>:<HiEye/>}</p>
                            </div>
                        </div>
                        <div className="pt-3 px-6 md:pl-14 flex justify-between">
                            <div className="flex">
                                <input type="checkbox" />
                                <p className=" pl-1 font-roboto font-medium text-blue-600">Remember me</p>
                            </div>
                            <p className=" pl-28 font-roboto font-medium text-blue-600">Forget Password?</p>
                        </div>
                        <div className="pt-12 pl-20 md:pl-14">
                            <button className="h-10 w-72  md:h-12 md:w-96 md:pb-2 rounded-3xl bg-blue-400 border-blue-400 border-2" onClick={Final()} >
                                <h3 className="text-white  font-roboto text-2xl font-bold leading-tight text-center">Log In</h3>
                            </button>
                        </div>
                        <div className="pt-8 pl-14 flex justify-between">
                            <p className="font-roboto font-light text-base">Don't you have an account</p>
                            <Link to="/SignUp" className=" pr-3 pb-4 md:pl-40 font-roboto font-medium md:text-xl text-blue-600">Sign Up</Link>
                        </div>
                    </div>
                    <div className=" max-md:hidden grid gap-2">
                        <Ht/>
                        <img src={Boyw} alt="Boywatch" className="h-40 w-40 blur-[1px] rotate-45 shadow-md focus:outline-none"></img>
                        <img src={compb} alt="Boywatch" className="h-40 w-40 blur-[1px] rotate-45"></img>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Body