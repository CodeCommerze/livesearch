import { createContext,useState } from "react";

export const MianContext = createContext();

const ContextProvider = ({children})=>{
    const [recipi , setrecipi] = useState([])
    const [search , setSearch] = useState('')
    return(
        <MianContext.Provider value={{recipi,setrecipi,search , setSearch}}>
            {children}
        </MianContext.Provider>
    )
}

export default ContextProvider