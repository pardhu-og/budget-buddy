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
        <div className="flex flex-col items-center text-sm font-semibold m-1 caret-transparent
                        md:text-base md:m-2
                        lg:text-xl lg:m-1">
            <p className={`${incview === "true" ? "flex":"hidden"}`}>Total Income : {income} </p>
            <p className={`${expview === "true" ? "flex":"hidden"}`}>Total Expenditure : {expenditure}</p> 
            <p className={`${balview === "true" ? "flex":"hidden"}`}>Total Balance : <span className={`${balance <=0 ? "text-red-500": "text-green-600"} font-bold ml-1`}>{balance}</span></p>
        </div>
    )
}