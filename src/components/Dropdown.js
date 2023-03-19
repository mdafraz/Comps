import { useState , useEffect , useRef} from "react"
import {  GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options , value , onChange}){
    const [isOpen ,setIsopen] = useState(false)
    
            const divEl = useRef()
   

    useEffect(() => {
        const handle = (event) =>{
            if(!divEl.current){
                return;
            }
           if(!divEl.current.contains(event.target)){
                setIsopen(false);
           }
        }
         
        document.addEventListener('click' , handle , true );
        // there is a huge reason behind writing true
         
        return () => {document.removeEventListener('click' ,handle)};
    } , []);

    const handleClick = () => {
        setIsopen(!isOpen);
    }

    const handleSelection = (option) =>{
        setIsopen(false);
        onChange(option);
    }

    const renderoptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key = {options.value} onClick = {() => handleSelection(option) }>{option.label}</div>
    })
    //let content = 'select...';
    //if(selection){
    //  content = selection.label;
    //}  
    return <div ref = {divEl} className="w-48 relative">
        <Panel className = "flex justify-between items-center cursor-pointer" onClick={handleClick}>
            {value?.label || 'select...'}
            <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderoptions}</Panel>}
        </div>
}
export default Dropdown