import { useState } from "react";
import { useData } from "../contexts/DataContext"

const sample = [{
    Id: 101,
    date: "2025-04-03",
    type: "income",
    amount: "50000",
    tag: "salary",
    note: "Survived another month. HR actually paid!"
  },
  {
    Id: 102,
    date: "2025-04-04",
    type: "expenditure",
    amount: "8000",
    tag: "rent payment",
    note: "Shelter achieved. Landlord happy, I'm broke."
  },
  {
    Id: 103,
    date: "2025-04-07",
    type: "expenditure",
    amount: "1500",
    tag: "food",
    note: "Swiggy and Zomato tag-teamed my wallet."
  },
  {
    Id: 104,
    date: "2025-04-12",
    type: "income",
    amount: "2000",
    tag: "interest",
    note: "Bank said hello with a tiny interest kiss."
  },
  {
    Id: 105,
    date: "2025-04-15",
    type: "expenditure",
    amount: "3000",
    tag: "cloths",
    note: "New look, same broke person."
  },
  {
    Id: 106,
    date: "2025-04-21",
    type: "expenditure",
    amount: "1000",
    tag: "entertainment",
    note: "Netflix: where my money disappears one month at a time."
  },

  
  {
    Id: 201,
    date: "2025-05-01",
    type: "income",
    amount: "50000",
    tag: "salary",
    note: "May-day! Salary landed safely."
  },
  {
    Id: 202,
    date: "2025-05-03",
    type: "expenditure",
    amount: "8500",
    tag: "rent payment",
    note: "Paid rent again. Still not owning a villa."
  },
  {
    Id: 203,
    date: "2025-05-06",
    type: "expenditure",
    amount: "1700",
    tag: "food",
    note: "Tried cooking. Ordered pizza instead."
  },
  {
    Id: 204,
    date: "2025-05-10",
    type: "expenditure",
    amount: "2500",
    tag: "investment",
    note: "Invested in stocks. Checked 15 times already."
  },
  {
    Id: 205,
    date: "2025-05-16",
    type: "income",
    amount: "3000",
    tag: "rental income",
    note: "Tenant paid rent. Feels like being a boss."
  },
  {
    Id: 206,
    date: "2025-05-20",
    type: "expenditure",
    amount: "1200",
    tag: "health",
    note: "Doctor said I’m fine. Wallet disagrees."
  },

  
  {
    Id: 301,
    date: "2025-06-01",
    type: "income",
    amount: "52000",
    tag: "salary",
    note: "Raise! Time to buy one extra biryani."
  },
  {
    Id: 302,
    date: "2025-06-03",
    type: "expenditure",
    amount: "8700",
    tag: "rent payment",
    note: "If I pay rent forever, do I win something?"
  },
  {
    Id: 303,
    date: "2025-06-06",
    type: "expenditure",
    amount: "1600",
    tag: "food",
    note: "Living that Maggi-for-dinner life again."
  },
  {
    Id: 304,
    date: "2025-06-09",
    type: "income",
    amount: "1800",
    tag: "interest",
    note: "My savings gave birth to interest twins."
  },
  {
    Id: 305,
    date: "2025-06-14",
    type: "expenditure",
    amount: "4000",
    tag: "cloths",
    note: "New shoes: look rich, still poor."
  },
  {
    Id: 306,
    date: "2025-06-18",
    type: "expenditure",
    amount: "900",
    tag: "entertainment",
    note: "Binge-watched stress. Totally worth it."
  },
];


export default function SampleData(){
    const {data, setData} =useData();
    const [samplestatus, setSampleStatus] = useState(JSON.parse(localStorage.getItem("samplestatus")) || "display")
    const [sampleanimation, setSampleAnimation] =useState(0)
    function inject(){
        setData(p=>[...p,...sample])
        setSampleStatus("nodisplay")
        setSampleAnimation(1)
        localStorage.setItem("samplestatus",JSON.stringify("nodisplay"))
    }

return (
    <div>
        <button title="Adds sample transactions to demonstrate the app" className={` animate-bounce hover:cursor-pointer ${samplestatus==="display"?"":"hidden"}`} onClick={inject}>Sample data</button>
        <div className={`fixed top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-40 h-10 md:h-15 bg-gray-200 flex justify-center items-center border rounded-xl text-green-700 text-sm md:text-base lg:text-lg font-bold opacity-0  ${sampleanimation!== 0?"animate-slidein":""} caret-transparent
                            `} >
                <p>Sample Data Injected</p>
            </div>
    </div>
)
}

