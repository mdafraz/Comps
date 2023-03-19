import { useState } from "react"
import Dropdown from "../components/Dropdown"
function DropdownPage(){
    const [selection , setSelection] = useState(null);
    const handleSlection = (option)=>{
        setSelection(option)
    }
    const options = [
        {label:'Red' , value: 'red'},
        {label:'Green' , value: 'green'},
        {label:'Blue' , value: 'blue'}
    ]
return <div className="flex"><Dropdown options = {options} value={selection} onChange={ handleSlection }/></div>
}
export default DropdownPage;
