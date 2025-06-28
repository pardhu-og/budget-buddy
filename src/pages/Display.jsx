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
const [filteredTotal, setFilteredTotal] = useState(0)
const [noamtalert, setNoAmountAlert] = useState(0)
const [edtsucc, setEditsuc] = useState(0)

function deleteData (id){
    if(confirm("Do you want to delete the entry")){
        const dataAftDel = data.filter(p=>p.Id !== id)
        setData(dataAftDel)
    }
}

const [editdata, setEditData] =useState(null)
function editdatafunc(p){
    setEditsuc(0)
    setEditData(p)
}

function handleEditSubmit(e){
    e.preventDefault()
    if(editdata.amount === ""){
            setNoAmountAlert(noamtalert + 1)
    } else {
        const tempeditData = data.map(p=>{
        if (p.Id === editdata.Id) {
            return editdata
        } else {return p}
    })
    setData(tempeditData)
    setEditData(null)
    setNoAmountAlert(0)
    setEditsuc(edtsucc+1)
    }
    
    
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
        <div className="p- flex flex-col gap-4
                        md:gap-6">
            <Summary/>
            <Filter dataTobeFiltered={data} filteredDatastate={setFiltereddata} />
            <div className="overflow-x-auto overflow-y-auto h-screen rounded">
            <table className="min-w-full text-sm border-separate caret-transparent
                              md:text-base
                              lg:text-lg">
                <caption className="text-base font-semibold mb-2 text-left pl-2
                                    md:text-lg md:text-center md:mb-3
                                    lg:text-2xl ">Transactions</caption>
            <thead className="bg-gray-700 text-white sticky top-0">
                <tr className="[&>th]:p-1 md:[&>th]:p-2 ">
                    <th>S.no</th>
                    <th className="!px-8 md:!px-10">Date</th>
                    <th>Type of transaction</th>
                    <th>Tags</th>
                    <th className="!px-16 md:!px-18">Notes</th>
                    <th>Amount</th>
                    <th>Edit / Delete</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((p,i)=>(
                    <tr key={p.Id} className="[&>td]:p-1 md:[&>td]:p-2 odd:bg-white even:bg-gray-300">
                        <td className="text-center">{i+1}</td>
                        <td className="text-center" >{p.date}</td>
                        <td className="text-center">{p.type.toUpperCase()}</td>
                        <td className="text-center">{p.tag.toUpperCase()}</td>
                        <td>{p.note}</td>
                        <td className= {`font-semibold text-right ${p.type === "income"? "text-green-500":"text-red-500"}`}>{`${p.amount}`}</td>
                        <td className="flex justify-center gap-2 md:gap-3 lg:gap-8">
                          <button onClick={()=>(editdatafunc(p))} title="Edit"><Pencil className="w-3.5 h-3.5 md:w-6 md:h-6 stroke-blue-700 hover:cursor-pointer hover:fill-blue-700 hover:scale-120"/></button>
                          <button  onClick={()=>deleteData(p.Id)} title="Delete"><Trash2 className="w-3.5 h-3.5 md:w-6 md:h-6 stroke-red-700 hover:cursor-pointer hover:fill-red-700 hover:scale-120"/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot >
                <tr className="bg-gray-700">
                    <td colSpan={5} className="text-right text-sm text-gray-200 md:text-base lg:text-lg font-semibold px-2 py-1">TOTAL:</td>
                    <td colSpan={3} className={`font-bold text-base text-center md:text-lg lg:text-xl ${filteredTotal < 0? "text-red-400":"text-green-500"}`}>{filteredTotal>0?filteredTotal:0-filteredTotal}</td>
                </tr>
            </tfoot>
        </table>
    </div>
         {editdata !== null &&
            <div className="fixed w-screen h-screen bg-gray-200 top-0 left-0 flex flex col items-center justify-center ">
                <div className="relative ">
                    <div>
                        <Form submitFunction={handleEditSubmit} inpvalidationState={editdata} setInpValidationState={setEditData} Title={"Edit Transaction"} />
                    </div>
                    <div>
                    <button onClick={()=>{
                        setEditData(null)
                        setNoAmountAlert(0)
                    }} className="absolute top-2 right-3 md:top-6 rounded"> <SquareX className="text-gray-700 md:w-6 md:h-6 hover:text-gray-700 hover:cursor-pointer hover:scale-105"/> </button>
                    </div>
                    <p key={`alertamt${noamtalert}`} className={`text-red-600 text-sm md:text-base lg:text-lg text-center font-bold opacity-0 absolute bottom-0 translate-y-[100%] md:translate-y-[150%] lg:translate-y-[-60%] left-1/2 translate-x-[-50%]  ${noamtalert!==0 ? "animate-fadeinout":""} 
                                                                 `}> Enter Amount</p>
                </div>
            </div>
             }
            <div className={`fixed top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-40 h-10 md:h-15 bg-gray-200 flex justify-center items-center border rounded-xl text-green-700 text-sm md:text-base lg:text-lg font-bold opacity-0  ${edtsucc !== 0?"animate-slidein":""} caret-transparent
                            `} >
                <p>Edit Successfull!</p>
            </div>
        </div>
    )
}