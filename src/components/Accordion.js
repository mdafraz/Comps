import { useState } from "react"
import { GoChevronDown , GoChevronLeft } from "react-icons/go";


function Accordion({items}){
    const [expandedIndex , setexpandedIndex] = useState(-1)
    const handleClick = (newindex) => {
        if(newindex == expandedIndex){
            setexpandedIndex(-1)
        }
        else{
            setexpandedIndex(newindex);    
        }
        
    }
    const renderItems = items.map((item , index ) => {
        const isexpanded = index === expandedIndex;
          
        //let content = <div></div>
        //if(isexpanded){
         //   content = <div>{item.content}</div>    
         //  }
         const content = isexpanded && <div>{item.content}</div>
         const icon = <span>{isexpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>


        return (<div key = {item.id}>
            <div className = "flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => { handleClick(index)}}>
                {item.label}
                {icon}
                </div>
            <div className="border-b p-0">{content}</div>
            
        </div>)
    })

    return <div className=" rounded">{renderItems}</div>
}
export default Accordion;       