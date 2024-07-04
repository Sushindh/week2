import React, { useState } from "react"
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
import Pho from "./assets/Phon.jsx"
import Loc from "./assets/Lock.jsx"
import { HiEye } from "react-icons/hi"
import { HiEyeOff } from "react-icons/hi"



function SignUp() {

  const [fnm,setFnm]=useState("");

  const newFnm=(event)=>{
    setFnm(event.target.value);
  }

  function Firstname(){
    console.log("First Name: "+ fnm);
    console.log("Second Name: "+snm);
    console.log("Phone Number: "+num);
    console.log("Email Id: "+mail);
  }

  const [snm,setSnm]=useState("");

  const newSnm=(event)=>{
    setSnm(event.target.value);
  }

  const [mail, setMail] = useState("");

  const newMail = (event) => {
    setMail(event.target.value);
  }

  const [num,setNum]=useState("");
  const newNum=(event)=>{
    setNum(event.target.value);
  }

  const [see, setSee] = useState(false);
  const newSee = () => {
    setSee(!see);
  }

  const [con, setCon] = useState(false);
  const newCon = () => {
    setCon(!con);
  }

  return (
    <div className="h-screen md:bg-gradient-to-b md:from-sky-300 md:via-sky-100 md:to-white">
      <img src={Brg} className="absolute z-[-1] h-screen w-fit" />
      <div className="flex justify-center items-center h-screen">
        <div className="max-md:hidden grid gap-2">
          <img src={Node} alt="Node" className="h-40 w-40 blur-[1px] -rotate-45" />
          <img src={grp} alt="Boywatch" className="h-40 w-40 blur-[1px] -rotate-45 shadow-md focus:outline-none" />
          <Ra />
        </div>
        <div className="flex justify-center items-end pt-[115px]  ">
          <div className=" h-[620px] w-[414px] rounded-tl-[150px] md:h-[650px] md:w-[500px] bg-white border-2 md:rounded-[50px] md:bg-white">
            <div className="max-md:pl-4">
              <div className="pt-3 flex justify-center">
                <img src={Codech} alt="codechef" className="w-28 h-28" />
              </div>
              <div className="pt-2">
                <h3 className="text-sky-500 font-roboto text-2xl font-bold leading-tight text-center">SIGN UP</h3>
              </div>
              <div className="pl-8 md:pl-14"> 
                <p className="font-roboto font-bold">Name</p>
              </div>
              <div className="flex ">
                <div className="pl-8 pt-0.5 md:pl-14"> 
                  <input type="text" className="max-md:w-40 h-8 pl-1 pb-1 rounded-lg border-black border-2" placeholder="First name" value={fnm} onChange={newFnm} />
                </div>
                <div className="pl-3 pt-0.5">
                  <input type="text" className="max-md:w-40 h-8 pl-1 pb-1 rounded-lg border-black border-2" placeholder="Second name" value={snm} onChange={newSnm} />
                </div>
              </div>
              <div className="pt-2 pl-8 md:pl-14"> 
                <p className="font-roboto font-bold">Email ID</p>
              </div>
              <div className="pt-1 pl-8 md:pl-14"> 
                <div className="flex border-2 w-[330px] md:w-96 h-8 border-black rounded-lg"> 
                  <Pro />
                  <input type="email" className="w-[calc(100%-40px)] pl-3 pb-1 rounded-md border-black focus:outline-none" value={mail} onChange={newMail} placeholder="some.mail@university.com" />
                </div>
              </div>
              <div className="pt-2 pl-8 md:pl-14"> 
                <p className="font-roboto font-bold">Phone Number</p>
              </div>
              <div className="pt-1 pl-8 md:pl-14"> 
                <div className="flex border-2 w-[330px] md:w-96 h-8 border-black rounded-lg"> 
                  <Pho />
                  <input type="number" className="w-64 pl-4 focus:outline-none overflow-hidden" placeholder="+91 **********" value={num} onChange={newNum} />
                </div>
              </div>
              <div className="pt-2 pl-8 md:pl-14"> 
                <p className="font-roboto font-bold">Password</p>
              </div>
              <div className="pt-1 pl-8 md:pl-14"> 
                <div className="flex border-2 w-[330px] md:w-96 h-8 border-black rounded-lg"> 
                  <Loc />
                  <input type={see ? "text" : "password"} className="w-[calc(100%-40px)] pl-4 pt-0.5 rounded-md border-black focus:outline-none" placeholder="********" />
                  <p className="h-4 w-4 pt-1 pr-6" onClick={newSee}>{see?<HiEyeOff/>:<HiEye/>}</p>
                </div>
              </div>
              <div className="pt-2 pl-8 md:pl-14"> 
                <p className="font-roboto font-bold">Confirm Password</p>
              </div>
              
              <div className="pt-1 pl-8 md:pl-14"> 
                <div className="flex border-2 w-[330px] md:w-96 h-8 border-black rounded-lg"> 
                  <Loc />
                  <input type={con ? "text" : "password"} className="w-[calc(100%-40px)] pl-4 pt-0.5 rounded-md border-black focus:outline-none" placeholder="********" />
                  <p className="h-4 w-4 pt-1 pr-6" onClick={newCon}>{con?<HiEyeOff/>:<HiEye/>}</p>
                </div>
              </div>
              
              <div className="pt-8 pl-[50px] md:pl-14"> 
                <button className="h-10  w-72 md:w-96 pb-2 rounded-3xl bg-blue-400 border-blue-400 border-2" onClick={Firstname()}> 
                  <h3 className="text-white font-roboto text-2xl font-bold leading-tight text-center">Sign Up</h3>
                </button>
              </div>
              <div className="pt-2 pl-8 md:pl-14 flex justify-between"> 
                <p className="font-roboto font-light text-lg">Already have an account?</p>
                <Link to="/Body" className="pr-4 md:pl-40 font-roboto font-medium md:text-xl text-blue-600">Log In</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-md:hidden grid gap-2">
          <Ht />
          <img src={Boyw} alt="Boywatch" className="h-40 w-40 blur-[1px] rotate-45 shadow-md focus:outline-none" />
          <img src={compb} alt="Boywatch" className="h-40 w-40 blur-[1px] rotate-45" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
