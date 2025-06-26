//UserInput.jsx
import { useState } from "react"
import { useData} from '../contexts/DataContext'
import Form from "./Form";
import Summary from "./Summary";
export default function UserInput () {
const {data, setData} = useData();
const[animatekey, setAnimateKey] =useState(0)
const[notxnalert, setNoTxnalert] =useState(0)
const[noamtalert, setNoAmountAlert] =useState(0)
 const [userInput, setUserInput] = useState({
        Id:1,
        date:new Date().toISOString().split("T")[0],
        type:"",
        amount:"",
        tag:"",
        note:""
    })

   
    function handleSubmit(e){
        e.preventDefault();
        if(userInput.type === "") {
            setNoTxnalert(notxnalert + 1)
        }   else if(userInput.amount === ""){
            setNoAmountAlert(noamtalert + 1)
        }   else{
            const newEntry ={...userInput, Id:Date.now(),};
            setData(p=>[...p, newEntry]);

            setUserInput(p=>({
                 Id:1,
                 date:new Date().toISOString().split("T")[0],
                 type:"",
                 amount:"",
                 tag:"",
                 note:""
            }))
            setAnimateKey(animatekey +1)
            
        }
    }

    

    return (

        <div className="flex flex-col pb-2 relative">
            <Summary incview="false" expview="false"/>
            <Form submitFunction={handleSubmit} inpvalidationState={userInput} setInpValidationState={setUserInput} Title={"Transaction Details"}/>
            
            <p key={`cnf${animatekey}`} className={`text-blue-600 text-base text-center font-bold opacity-0 absolute bottom-0 translate-y-[100%] left-1/2 translate-x-[-50%] ${animatekey!==0 ? "animate-fadeinout":""} 
                                                    md:text-lg
                                                    lg:text-xl lg:translate-y-[-75%]`}>Account Updated</p>
            <p key={`alerttrx${notxnalert}`} className={`text-red-600 text-base text-center font-bold opacity-0 absolute bottom-0 translate-y-[100%] left-1/2 translate-x-[-50%]  ${notxnalert!==0 ? "animate-fadeinout":""} 
                                                        md:text-lg
                                                        lg:text-xl lg:translate-y-[-75%]`}> Select Transaction Type</p>
            <p key={`alertamt${noamtalert}`} className={`text-red-600 text-base text-center font-bold opacity-0 absolute bottom-0 translate-y-[100%] left-1/2 translate-x-[-50%]  ${noamtalert!==0 ? "animate-fadeinout":""} 
                                                        md:text-lg
                                                        lg:text-xl lg:translate-y-[-75%]`}> Enter Amount</p>

        </div>
    )
}