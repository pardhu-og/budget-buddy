import { useData } from "../contexts/DataContext"
import { useState } from "react";

export default function Display (){
const {data, setData} =useData();
const income = data.filter(p=>p.type === "income")
              .reduce((acc,cur)=>{
                acc = acc + Number(cur.amount);
                return acc
              },0)
const expenditure = data.filter(p=>p.type === "expenditure")
              .reduce((acc,cur)=>{
                acc = acc + Number(cur.amount);
                return acc
              },0)
const balance = income - expenditure

        function deleteData (id){
            
            const dataAftDel = data.filter(p=>p.Id !== id)
            setData(dataAftDel)
        }
const [editdata, setEditData] =useState(null)
function editdatafunc(p){
    setEditData(p)
}
function handleEditChange(e){
        e.target.name === "type" ? setEditData(p=>({...p,[e.target.name]:e.target.value, tag:""})): setEditData(p=>({...p,[e.target.name]:e.target.value}))
        
    }
function handleEditSubmit(e){
    e.preventDefault()
    const tempeditData = data.map(p=>{
        if (p.Id === editdata.Id) {
            return editdata
        } else {return p}
    })
    setData(tempeditData)
    setEditData(null)
    
}
    return (
        <div >
            <p>Income is {income} and total expenditure is {expenditure} total balance is {balance}</p>
            {console.log(data)}
            <div >
                <table >
            <thead >
                <tr>
                    <th>S.no</th>
                    <th>Date</th>
                    <th>Type of transaction</th>
                    <th>Tags</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Edit / Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((p,i)=>(
                    <tr key={p.Id}>
                        <td>{i+1}</td>
                        <td>{p.date}</td>
                        <td>{p.type.toUpperCase()}</td>
                        <td>{p.tag}</td>
                        <td>{p.note}</td>
                        <td className={`${p.type === "income"? "text-green-400":"text-red-400"}`}>{p.amount}</td>
                        <td><button onClick={()=>(editdatafunc(p))}>Edit</button><button  onClick={()=>deleteData(p.Id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

                {console.log(editdata)}

                {editdata !== null &&
                <div>
                   <div>
                     <form onSubmit={handleEditSubmit} className="flex flex-col">
              <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={editdata.date} onChange={handleEditChange}/>
              </div>
            <div className="flex justify-evenly">
                <div>
                <input type="radio" name="type" value="income" id="incomeedit" checked={editdata.type === "income"} onChange={handleEditChange} className="peer hidden"/>
               <label htmlFor="incomeedit" className="peer-checked:bg-red-200">Income</label>
               </div>
              <div>
                 <input type="radio" id="expenditureedit" name="type" value="expenditure" checked={editdata.type === "expenditure"} onChange={handleEditChange} className="peer hidden"/>
               <label htmlFor="expenditureedit" className="peer-checked:bg-red-200">Expenditure</label>
              </div>
            </div>
              <div className="flex justify-evenly">
              <label htmlFor="amount">Amount</label>
               <input type="number" id="amount" name="amount" value={editdata.amount} onChange={handleEditChange}/>  
              </div> 
               
               <div className="flex justify-evenly">
                 <label htmlFor="tag">Tag</label>
                 <select name="tag" id="tag" value={editdata.tag} onChange={handleEditChange} >
                   <option value="" defaultChecked >Choose a tag</option>
                   {editdata.type === "expenditure" && 
                   ["food", "rent payment", "cloths", "entertainment", "investment", "health"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                   {editdata.type === "income" && 
                   ["salary", "interest", "rental income"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                 </select>
               </div>
               <textarea name="note" placeholder="Note" onChange={handleEditChange} value={editdata.note}></textarea>
               <button type="submit">Submit</button>
            </form>
                   </div>
                   <button onClick={()=>setEditData(null)}>Close </button>
                </div>
                
                }
            </div>
        </div>
    )
}