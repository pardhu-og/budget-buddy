// Forum.jsx
export default function Form ({submitFunction, inpvalidationState, setInpValidationState}){
     
    
    function handleChange(e){
     e.target.name === "type" ? setInpValidationState(p=>({...p,[e.target.name]:e.target.value, tag:""})): setInpValidationState(p=>({...p,[e.target.name]:e.target.value}))
    }

    return (
        <div className=" flex flex-col  m-4 p-4  shadow-xl gap-4  border border-gray-400 shadow rounded-lg">
            <h2 className="text-center text-2xl px-2 py-1 italic">Transaction details</h2>
            <form onSubmit={submitFunction} className=" flex flex-col gap-4 px-2 py-4  text-lg ">
              <div className="flex justify-evenly">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={inpvalidationState.date} onChange={handleChange}
                        className="border border-gray-400 rounded-lg px-2 py-1 "/>
              </div>
            <div className="flex justify-evenly">
                <div>
                <input type="radio" name="type" value="income" id="income" checked={inpvalidationState.type === "income"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="income" className="px-2 py-1 rounded-lg peer-checked:bg-red-400 peer-checked:text-white peer-checked:font-bold border shadow-sm">Income</label>
               </div>
              <div>
                 <input type="radio" id="expenditure" name="type" value="expenditure" checked={inpvalidationState.type === "expenditure"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="expenditure" className="px-2 py-1 rounded-lg peer-checked:bg-red-400 peer-checked:text-white peer-checked:font-bold border shadow-sm">Expenditure</label>
              </div>
            </div>
              <div className="flex justify-evenly">
              <label htmlFor="amount">Amount:</label>
               <input type="number" id="amount" name="amount" value={inpvalidationState.amount} onChange={handleChange}
                      className="border border-gray-400 rounded-lg w-40 text-right px-4"/>  
              </div> 
               
               <div className="flex justify-evenly">
                 <label htmlFor="tag">Tag</label>
                 <select name="tag" id="tag" value={inpvalidationState.tag} onChange={handleChange} 
                          className="border border-gray-400 rounded-lg px-1">
                   <option value="" >Choose a tag</option>
                   {inpvalidationState.type === "expenditure" && 
                   ["food", "rent payment", "cloths", "entertainment", "investment", "health"].map(p=><option key={p} value={p}>{p.toUpperCase()}</option>)}
                   {inpvalidationState.type === "income" && 
                   ["salary", "interest", "rental income"].map(p=><option key={p} value={p}>{p.toUpperCase()}</option>)}
                 </select>
               </div>

               <textarea name="note" placeholder="Note" onChange={handleChange} value={inpvalidationState.note}
               className="border border-gray-400 rounded-lg px-2 py-1 "></textarea>
               <button type="submit" className="border border-gray-400 rounded-lg p-2 bg-blue-200 active:bg-gray-400">Submit</button>
            </form>
            </div>
    )

}