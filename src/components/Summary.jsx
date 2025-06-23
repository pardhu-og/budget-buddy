//Summary.jsx
import { useData } from "../contexts/DataContext"

export default function Summary ({incview="true", expview="true", balview="true"}){
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
    return (
        <div className="flex flex-col items-center ">
            <p className={`text-xl font-semibold ${incview === "true" ? "flex":"hidden"}`}>Total Income - {income} </p>
            <p className={`text-xl font-semibold ${expview === "true" ? "flex":"hidden"}`}>Total Expenditure - {expenditure}</p> 
            <p className={`text-xl font-semibold ${balview === "true" ? "flex":"hidden"}`}>Total Balance - <span className={`${balance <=0 ? "text-red-500": "text-green-600"} font-bold text-2xl`}> {balance}</span></p>
        </div>
    )
}