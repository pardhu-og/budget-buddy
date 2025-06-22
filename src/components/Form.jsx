// Forum.jsx
export default function Form ({submitFunction, inpvalidationState, setInpValidationState}){
     
    
    function handleChange(e){
     e.target.name === "type" ? setInpValidationState(p=>({...p,[e.target.name]:e.target.value, tag:""})): setInpValidationState(p=>({...p,[e.target.name]:e.target.value}))
    }

    return (
        <div className="w-md">
            <form onSubmit={submitFunction} className="flex flex-col">
              <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={inpvalidationState.date} onChange={handleChange}/>
              </div>
            <div className="flex justify-evenly">
                <div>
                <input type="radio" name="type" value="income" id="income" checked={inpvalidationState.type === "income"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="income" className="peer-checked:bg-red-200">Income</label>
               </div>
              <div>
                 <input type="radio" id="expenditure" name="type" value="expenditure" checked={inpvalidationState.type === "expenditure"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="expenditure" className="peer-checked:bg-red-200">Expenditure</label>
              </div>
            </div>
              <div className="flex justify-evenly">
              <label htmlFor="amount">Amount</label>
               <input type="number" id="amount" name="amount" value={inpvalidationState.amount} onChange={handleChange}/>  
              </div> 
               
               <div className="flex justify-evenly">
                 <label htmlFor="tag">Tag</label>
                 <select name="tag" id="tag" value={inpvalidationState.tag} onChange={handleChange} >
                   <option value="" >Choose a tag</option>
                   {inpvalidationState.type === "expenditure" && 
                   ["food", "rent payment", "cloths", "entertainment", "investment", "health"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                   {inpvalidationState.type === "income" && 
                   ["salary", "interest", "rental income"].map(p=><option key={p}>{p.toUpperCase()}</option>)}
                 </select>
               </div>

               <textarea name="note" placeholder="Note" onChange={handleChange} value={inpvalidationState.note}></textarea>
               <button type="submit">Submit</button>
            </form>
            </div>
    )

}