import classNames from "classnames";
import useNavigationContext from "../Hooks/use-navigation";

function Link({ to , children , className , activeClassName}){
    const {navigate , currentPath} = useNavigationContext();
    
    const classes = classNames('text-blue-500' , className, currentPath == to && activeClassName );

    const  handleclick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to)
    };


    return <a className = {classes} href = {to} onClick={handleclick}>{children}</a>
}

export default Link ;