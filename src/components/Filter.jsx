// Filter.jsx
import { useEffect, useState } from "react"
export default function Filter({dataTobeFiltered, filteredDatastate}){
const [fltdatavar, setFltDatavar] =useState({
    type:"",
    tag:"",
    month:"",
    sorttype:"",
    sortorder:"ascending"
})
function handleChange(e){
    setFltDatavar({...fltdatavar, [e.target.name]:e.target.value})
}
useEffect(()=>{
  const tempfiltereddata = dataTobeFiltered.slice()
  .filter(p=> fltdatavar.type !==""? p.type===fltdatavar.type:p)
  .filter(p=> fltdatavar.tag !==""? p.tag===fltdatavar.tag:p).filter(p=> fltdatavar.month !==""? p.date.slice(0,7) === fltdatavar.month:p)
  if (fltdatavar.sorttype === "amount") {
    if (fltdatavar.sortorder === "ascending") {
       tempfiltereddata.sort((a,b)=>a.amount-b.amount)
    } else {tempfiltereddata.sort((a,b)=>b.amount-a.amount)}
  }
  if (fltdatavar.sorttype === "date") {
    if (fltdatavar.sortorder === "ascending") {
       tempfiltereddata.sort((a,b)=>new Date(a.date)-new Date(b.date))
    } else {tempfiltereddata.sort((a,b)=>new Date(b.date)-new Date(a.date))}
  }
  filteredDatastate(tempfiltereddata)
},[fltdatavar, dataTobeFiltered])

    return (
        <div className=" w-full">
            <h3 className="text-center text-base font-semibold bg-gray-700 text-white
                            md:text-lg md:p-1 caret-transparent">Filter</h3>
            <form>
                <div className="flex flex-wrap text-sm gap-2 border border-gray-400 rounded p-2  bg-gray-200
                                md:text-base md:justify-evenly md:gap-4 md:p-3">
                    
                <div className="flex justify-center gap-4">
                    <label htmlFor="type" className="md:py-1 hover:cursor-pointer caret-transparent">Transaction Type</label>
                    <select name="type" id="type" value={fltdatavar.type} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1 md:py-1 hover:cursor-pointer hover:scale-105 transition-transform duration-100">
                        <option value="">All</option>
                        <option value="income">Income</option>
                        <option value="expenditure">Expenditure</option>
                    </select>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="tag" className="md:py-1 hover:cursor-pointer caret-transparent">Tag</label>
                    <select name="tag" id="tag" value={fltdatavar.tag} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1 md:py-1 hover:cursor-pointer hover:scale-105 transition-transform duration-100 caret-transparent">
                        {["", "food", "rent payment", "cloths", "entertainment", "investment", "health", "salary", "interest", "rental income"].map(p=><option key={p} value={p}>{p===""?"ALL":p.toUpperCase()}</option>)}   
                    </select>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="month" className="md:py-1 hover:cursor-pointer caret-transparent">Month</label>
                    <input type="month" name="month" id="month" value={fltdatavar.month} onChange={handleChange} className="border border-gray-400 rounded-lg px-1 md:py-1 hover:cursor-pointer hover:scale-105 transition-transform duration-100 caret-transparent"/>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="sorttype" className="md:py-1 hover:cursor-pointer caret-transparent">Sort</label>
                    <select name="sorttype" id="sorttype" value={fltdatavar.sorttype} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1 md:py-1 hover:cursor-pointer hover:scale-105 transition-transform duration-100 caret-transparent">
                        <option value="">None</option>
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <div >
                 
                  <div className={`flex justify-center gap-4 ${fltdatavar.sorttype !== ""?"visible":"invisible"}`}>
                    <label htmlFor="sortorder" className="md:py-1 hover:cursor-pointer caret-transparent">Order</label>
                    <select name="sortorder" id="sortorder" value={fltdatavar.sortorder} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1 md:py-1 hover:cursor-pointer hover:scale-105 transition-transform duration-100 caret-transparent">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                  </div>
                </div>
                </div>
            </form>
        </div>
    )
}