// Forum.jsx
export default function Form ({submitFunction, inpvalidationState, setInpValidationState, Title}){
     
    
    function handleChange(e){
     e.target.name === "type" ? setInpValidationState(p=>({...p,[e.target.name]:e.target.value, tag:""})): setInpValidationState(p=>({...p,[e.target.name]:e.target.value}))
    }

    return (
        <div className=" flex flex-col  m-1 p-1  shadow-xl gap-2  border border-gray-400 shadow rounded-lg
                           md:gap-3 md:w-lg  md:m-auto md:mt-4
                           lg:gap-1 lg:w-xl lg:m-auto lg:mt-5 lg:pb-8">
            <h2 className="text-center text-base p-1 italic font-semibold
                            md:p-3 md:text-lg 
                            lg:p-4 lg:text-2xl">{Title}</h2>
            <form onSubmit={submitFunction} className=" flex flex-col flex-wrap gap-2.5 justify-center p-1 text-sm 
                                                        md:gap-4 md:p-2 md:text-base
                                                        lg:gap-5 lg:p-3 lg:text-lg">
              <div className="flex gap-6 justify-center ">
                <label htmlFor="date" className="p-1 hover:cursor-pointer">Date:</label>
                <input type="date" id="date" name="date" value={inpvalidationState.date} onChange={handleChange}
                        className="border border-gray-400 rounded-lg px-2 py-1 hover:cursor-pointer"/>
              </div>
            <div className="flex gap-6 justify-center">
                <div>
                <input type="radio" name="type" value="income" id="income" checked={inpvalidationState.type === "income"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="income" className=" py-1 px-2  rounded-lg peer-checked:bg-red-400 peer-checked:text-white peer-checked:font-semibold border shadow-sm hover:cursor-pointer hover:scale-105 transition-transform duration-200 hover:shadow-xl inline-block" >Income</label>
               </div>
              <div>
                 <input type="radio" id="expenditure" name="type" value="expenditure" checked={inpvalidationState.type === "expenditure"} onChange={handleChange} className="peer hidden"/>
               <label htmlFor="expenditure" className="px-2 py-1 rounded-lg peer-checked:bg-red-400 peer-checked:text-white peer-checked:font-bold border shadow-sm hover:cursor-pointer hover:scale-105 transition-transform duration-200 inline-block">Expenditure</label>
              </div>
            </div>
              <div className="flex gap-6 justify-center">
              <label htmlFor="amount" className="p-1 ">Amount:</label>
               <input type="number" min={0} id="amount" name="amount" value={inpvalidationState.amount} onChange={handleChange}
                      className="border border-gray-400 rounded-lg w-40 p-1
                                  "/>  
              </div> 
               
               <div className="flex gap-6 justify-center">
                 <label htmlFor="tag" className="p-1">Tag</label>
                 <select name="tag" id="tag" value={inpvalidationState.tag} onChange={handleChange} 
                          className="border border-gray-400 rounded-lg p-1 hover:cursor-pointer">
                   <option value="" >Choose a tag</option>
                   {inpvalidationState.type === "expenditure" && 
                   ["food", "rent payment", "cloths", "entertainment", "investment", "health"].map(p=><option key={p} value={p}>{p.toUpperCase()}</option>)}
                   {inpvalidationState.type === "income" && 
                   ["salary", "interest", "rental income"].map(p=><option key={p} value={p}>{p.toUpperCase()}</option>)}
                 </select>
               </div>

               <textarea name="note" placeholder="Note" onChange={handleChange} value={inpvalidationState.note}
               className="border border-gray-400 rounded-lg p-1 md:mx-6 md:p-2 lg:mx-10 lg:p-3  "></textarea>
               <button type="submit" className="border border-blue-300 font-semibold rounded-lg md:mx-6 py-1.5 md:py-2 lg:mx-10 lg:py-3 bg-blue-200 hover:cursor-pointer hover:bg-blue-600 hover:text-gray-200 active:bg-gray-400 ">Submit</button>
            </form>
            </div>
    )

}