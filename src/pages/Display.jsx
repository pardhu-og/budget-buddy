//Display.jsx
import { useData } from "../contexts/DataContext"
import { useState } from "react";
import Form from "../components/Form";

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
                <tr>
                    <td>Total</td>
                    <td>Pardhu add totaling function</td>
                </tr>
            </tbody>
        </table>

                {console.log(editdata)}

                {editdata !== null &&
                <div>
                   <div>
                     <Form submitFunction={handleEditSubmit} inpvalidationState={editdata} setInpValidationState={setEditData} />
                   </div>
                   <button onClick={()=>setEditData(null)}>Close </button>
                </div>
                
                }
            </div>
        </div>
    )
}