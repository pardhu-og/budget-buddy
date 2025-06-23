import {createContext, useContext, useEffect, useState} from "react";

const DataContext =createContext();

export function DataProvider ({children}) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("savedData")) || []);

    useEffect(()=>{
        localStorage.setItem("savedData", JSON.stringify(data))
    },[data])

    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    );
}

export function useData(){
    return useContext(DataContext);
}