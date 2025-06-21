import { useState } from "react"
import { useData} from '../contexts/DataContext'
export default function UserInput () {
const {data, setData} = useData();
const[animatekey, setAnimateKey] =useState(0)
 const [userInput, setUserInput] = useState({
        Id:1,
        type:"",
        amount:"",
        tag:"",
        note:""
    })

   function handleChange(e){
        setUserInput(p=>({...p,[e.target.name]:e.target.value}))
    }
   
    function handleSubmit(e){
        e.preventDefault();
        if(userInput.type === "") {console.log("set transaction type")}
        else if(userInput.amount === ""){console.log("Enter the amount")}
        else{
            const newEntry ={...userInput, Id:Date.now(),};
            setData(p=>[...p, newEntry]);
            setUserInput(p=>({
                 Id:1,
                 type:"",
                 amount:"",
                 tag:"",
                 note:""
            }))
            setAnimateKey(animatekey +1)
            
        }
    }

    return (

        <div className="w-md">
            <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex justify-evenly">
                <div>
                <input type="radio" name="type" value="income" id="income" checked={userInput.type === "income"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="income" className="peer-checked:bg-red-200">Income</label>
               </div>
              <div>
                 <input type="radio" id="expenditure" name="type" value="expenditure" checked={userInput.type === "expenditure"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="expenditure" className="peer-checked:bg-red-200">Expenditure</label>
              </div>
            </div>
              <div className="flex justify-evenly">
              <label htmlFor="amount">Amount</label>
               <input type="number" id="amount" name="amount" value={userInput.amount} onChange={handleChange}/>  
              </div> 
               
               <div className="flex justify-evenly">
                 <label htmlFor="tag">Tag</label>
                 <select name="tag" id="tag" onChange={handleChange} >
                   <option value="" defaultChecked >Choose a tag</option>
                   {userInput.type === "expenditure" && 
                   ["food", "rent payment", "cloths", "entertainment", "investment", "health"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                   {userInput.type === "income" && 
                   ["salary", "interest", "rental income"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                 </select>
               </div>

               <textarea name="note" placeholder="Note" onChange={handleChange} value={userInput.note}></textarea>
               <button type="submit">Submit</button>
            </form>
            <p key={animatekey} className={`text-blue-600 font-bold opacity-0 ${animatekey!==0 ? "animate-fadeinout":""} `}>Account Updated</p>
        </div>
    )
}