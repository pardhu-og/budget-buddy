//Display.jsx
import { useData } from "../contexts/DataContext"
import { useEffect, useState } from "react";
import Form from "../components/Form";
import Filter from "../components/Filter";
import Summary from "../components/Summary";
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { SquareX } from 'lucide-react';

export default function Display (){
const {data, setData} =useData();
const [filteredData, setFiltereddata] = useState(data)
const [filteredTotal, setFilteredTotal] =useState(0)

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

useEffect(()=>{
        const tempdataincome = filteredData.filter(p=> p.type === "income").reduce((acc,cur)=>{
                acc = acc + Number(cur.amount);
                return acc
              },0);
        const tempdataexpenditure = filteredData.filter(p=> p.type === "expenditure").reduce((acc,cur)=>{
                acc = acc + Number(cur.amount);
                return acc
              },0);
        setFilteredTotal(tempdataincome - tempdataexpenditure)
},[filteredData])
    return (
        <div className="p-2  flex flex-col gap-4">
            <Summary/>
            <Filter dataTobeFiltered={data} filteredDatastate={setFiltereddata} />
            <div className="overflow-x-auto overflow-y-auto h-screen rounded">
            <table className="min-w-full relative">
                <caption className="text-center text-2xl font-semibold mb-2 text-left pl-2">Transactions</caption>
            <thead className="bg-gray-700 text-white sticky top-0">
                <tr className="[&>th]:p-6">
                    <th>S.no</th>
                    <th className="!p-8">Date</th>
                    <th>Type of transaction</th>
                    <th>Tags</th>
                    <th className="!p-16">Notes</th>
                    <th>Amount</th>
                    <th>Edit / Delete</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((p,i)=>(
                    <tr key={p.Id} className="[&>td]:p-2 odd:bg-white even:bg-gray-300">
                        <td className="text-center">{i+1}</td>
                        <td className="" >{p.date}</td>
                        <td className="text-center">{p.type.toUpperCase()}</td>
                        <td className="text-center">{p.tag.toUpperCase()}</td>
                        <td>{p.note}</td>
                        <td className= {`font-semibold text-right ${p.type === "income"? "text-green-500":"text-red-500"}`}>{`${p.amount}`}</td>
                        <td className="flex justify-evenly"><button onClick={()=>(editdatafunc(p))} title="Edit"><Pencil/></button>
                        <button  onClick={()=>deleteData(p.Id)} title="Delete"><Trash2 /></button></td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={5} className="text-right text-xl font-semibold px-8 py-4">Total</td>
                    <td className={`font-bold text-xl text-right ${filteredTotal < 0? "text-red-400":"text-green-500"}`}>{filteredTotal}</td>
                </tr>
            </tfoot>
        </table>
    </div>
         {editdata !== null &&
            <div className="fixed w-screen h-screen bg-white top-0 left-0 flex flex col items-center justify-center">
                <div className="relative bg-white">
                    <div>
                        <Form submitFunction={handleEditSubmit} inpvalidationState={editdata} setInpValidationState={setEditData} />
                    </div>
                    <div>
                    <button onClick={()=>setEditData(null)} className="absolute top-6 right-6 rounded"> <SquareX /> </button>
                    </div>
                </div>
            </div>
             }

        </div>
    )
}