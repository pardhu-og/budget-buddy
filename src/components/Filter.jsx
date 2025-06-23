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
        console.log(new Date("2025-11-30"))
       tempfiltereddata.sort((a,b)=>new Date(a.date)-new Date(b.date))
    } else {tempfiltereddata.sort((a,b)=>new Date(b.date)-new Date(a.date))}
  }
  filteredDatastate(tempfiltereddata)
},[fltdatavar, dataTobeFiltered])

    return (
        <div>
            <form>
                <h3>Filter</h3>
                <label htmlFor="type">Transaction Type</label>
                <select name="type" id="type" value={fltdatavar.type} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="income">Income</option>
                    <option value="expenditure">Expenditure</option>
                </select>
                <label htmlFor="tag">Tag</label>
                <select name="tag" id="tag" value={fltdatavar.tag} onChange={handleChange}>
                   { ["", "food", "rent payment", "cloths", "entertainment", "investment", "health", "salary", "interest", "rental income"].map(p=><option key={p} value={p}>{p===""?"ALL":p.toUpperCase()}</option>)}   
                </select>
                <input type="month" name="month" value={fltdatavar.month} onChange={handleChange} />
                <label htmlFor="sorttype">Sort</label>
                <select name="sorttype" id="sorttype" value={fltdatavar.sorttype} onChange={handleChange}>
                    <option value="">None</option>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                {fltdatavar.sorttype !== "" && <div>
                    <label htmlFor="sortorder">Order</label>
                <select name="sortorder" id="sortorder" value={fltdatavar.sortorder} onChange={handleChange}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                </select>
                    </div>}
                {console.log(fltdatavar)}
            </form>
        </div>
    )
}