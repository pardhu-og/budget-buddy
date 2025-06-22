// filter.jsx
import { useEffect, useState } from "react"
export default function Filter({dataTobeFiltered, filteredDatastate}){
const [fltdatavar, setFltDatavar] =useState({
    type:"",
    tag:"",
})
function handleChange(e){
    setFltDatavar({...fltdatavar, [e.target.name]:e.target.value})
}
console.log(dataTobeFiltered)
useEffect(()=>{
  const tempfiltereddata = dataTobeFiltered.filter(p=> fltdatavar.type !==""? p.type===fltdatavar.type:p).filter(p=> fltdatavar.tag !==""? p.tag===fltdatavar.tag:p)
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

               {console.log(fltdatavar)}

            </form>
        </div>
    )
}