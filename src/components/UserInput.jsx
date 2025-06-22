//UserInput.jsx
import { useState } from "react"
import { useData} from '../contexts/DataContext'
import Form from "./Form";
export default function UserInput () {
const {data, setData} = useData();
const[animatekey, setAnimateKey] =useState(0)
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
        if(userInput.type === "") {console.log("set transaction type")}
        else if(userInput.amount === ""){console.log("Enter the amount")}
        else{
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

        <div>
            <Form submitFunction={handleSubmit} inpvalidationState={userInput} setInpValidationState={setUserInput} />
            <p key={animatekey} className={`text-blue-600 font-bold opacity-0 ${animatekey!==0 ? "animate-fadeinout":""} `}>Account Updated</p>
        </div>
    )
}