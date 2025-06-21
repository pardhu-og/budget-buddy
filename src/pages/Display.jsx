import { useData } from "../contexts/DataContext"

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
                        <td><button>Edit</button><button  onClick={()=>deleteData(p.Id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
        </div>
    )
}