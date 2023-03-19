import className from "classnames"
 
 function Button({
     children,
     primary,
     secondary ,
     success ,
     warning,
     danger,
     outline,
     rounded , ...rest 
}){
    const classes = className('flex item-center px-3 py-1.5 border' , {
        ' border-blue-600 bg-blue-500 text-white ' : primary , 
        ' border-gray-900 bg-gray-900 text-white ' : secondary ,  
        ' border-green-600 bg-green-600 text-white ' : success , 
        ' border-red-500 bg-red-500 text-white ' : danger , 
        ' border-yellow-400 bg-yellow-400 text-white ' : warning , 
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-600' : outline && primary,
        'text-gray-500' : outline && secondary,
        'text-green-500' : outline && success,
        'text-red-700' : outline && danger,
        'text-yellow-500' : outline && warning
    }
    )
    return <button className={classes} {...rest}>{children}</button>
}

Button.propTypes = {
checkVariationValue : ({primary ,secondary ,success , warning, danger, })=>{
    //value of primary secondary... willl be  either true or undefined(false)
    const count = Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger)
    if(count>1){
        return new Error('only one of primary secondary danger warning succes can be true')
    }
}
}

export default Button;