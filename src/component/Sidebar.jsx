import { ChevronFirst, ChevronLast, MoreVerticalIcon } from "lucide-react"
import { createContext, useContext, useState } from 'react'

const sidebarContext=createContext()
// eslint-disable-next-line react/prop-types
const Sidebar = ({children}) => {

    const[expanded,setExpanded]=useState(true)

  return (
        <aside className={`h-screen float-left`}>
        
        <nav className={`h-full flex flex-col border-r shadow-sm`}>
            <div className={`p-4 pb-2 flex justify-between items center`}>
                <img src="https://clipground.com/images/sample-logo-design-png.png" 
                className={` rounded-lg 
                overflow-hidden transition-all ${
                    expanded?
                    "w-28"
                    :
                    "w-0"
                }`}/>
                <button onClick={()=>{
                    setExpanded(curr=>!curr)
                     console.log(expanded)}
                 } className={`p-2 rounded-lg bg-gray-200 hover:bg-gray-300`}>
                {expanded?<ChevronFirst/>:<ChevronLast/>} 
                </button>
            </div>
            
            <sidebarContext.Provider value={{expanded}}>
            <ul className={`flex-1 px-3`}>{children}</ul>
            </sidebarContext.Provider>
            
            
            
            <div className={`border-t flex p-3`}>
                <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Sailesh+Maharjan"
                 className={`rounded w-10 h-10 `}/>
                
                
                 <div className={`flex justify-between items-center
                 overflow-hidden transition-all ${
                    expanded?
                    "w-60 ml-3"
                    :
                    "w-0"
                }`}>
                    <div className={`leading-4`}>
                    <h4 className={`font-semibold`}>Sailesh Maharjan</h4>
                    <span className={`text-xs text-gray-600`}>uxdsaileshmaharjan@gmail.com</span>
                    </div>
                    <button>

                    <MoreVerticalIcon size={20}/>

                 </button>                
                 </div>
                 
            </div>
        </nav>
    </aside>
  )
}





export const SideItem=({icon,text,active,alert})=>
{
    const{expanded}=useContext(sidebarContext)
    return(
        <li className={`relative flex items-center py-2 px-3 my-1 
        font-medium rounded-md
        cursor-pointer
        transition-colors
        group
        ${
            active?
            "bg-gradient-to-tr from-indigo-200 to bg-indigo-100 text-indigo-800"
            :
            "hover:bg-indigo-50 text-gray-600"
        }
        
            }
        `}>
            {icon}
        
            <span className={` overflow-hidden transition-all ${
                expanded?
                "w-52 ml-3"
                :
                "w-0"
            }`}>{text}</span>
            {alert &&
            (
                <div className={`absolute right-2 w-2 h-2 bg-indigo-800 rounded ${
                    expanded?
                    ""
                    :
                    "top-2"
                }`}>

                </div>
            )}
            {
                !expanded && <div className={`absolute left-full rounded-md 
                px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>
            }
        </li>
        
    )
}

export default Sidebar