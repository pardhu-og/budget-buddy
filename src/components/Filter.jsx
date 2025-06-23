// filter.jsx
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
            <form>
                <div className="flex flex-col text-lg gap-2 border border-gray-400 rounded py-6  bg-gray-200">
                    <h3 className="text-center text-2xl font-semibold">Filter</h3>
                <div className="flex justify-center gap-4">
                    <label htmlFor="type">Transaction Type</label>
                    <select name="type" id="type" value={fltdatavar.type} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1">
                        <option value="">All</option>
                        <option value="income">Income</option>
                        <option value="expenditure">Expenditure</option>
                    </select>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="tag">Tag</label>
                    <select name="tag" id="tag" value={fltdatavar.tag} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1">
                        {["", "food", "rent payment", "cloths", "entertainment", "investment", "health", "salary", "interest", "rental income"].map(p=><option key={p} value={p}>{p===""?"ALL":p.toUpperCase()}</option>)}   
                    </select>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="month">Month</label>
                    <input type="month" name="month" id="month" value={fltdatavar.month} onChange={handleChange} />
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="sorttype">Sort</label>
                    <select name="sorttype" id="sorttype" value={fltdatavar.sorttype} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1">
                        <option value="">None</option>
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <div >
                {fltdatavar.sorttype !== "" && 
                  <div className="flex justify-center gap-4">
                    <label htmlFor="sortorder">Order</label>
                    <select name="sortorder" id="sortorder" value={fltdatavar.sortorder} onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-1">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                  </div>}
                </div>
                </div>
            </form>
        </div>
    )
}