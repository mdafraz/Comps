import Link from "./Link";

function Sidebar(){
    const Lists = [ 
        {label:'Accordion' , path:'/Accordion'},
        {label:'Dropdown' , path:'/Dropdown'},
        {label:'Button' , path:'/Button'},
        {label:'Modal' , path:'/Modal'},
        {label:'Table' , path:'/Table'},
        {label:'Counter' , path:'/Counter'}
    ]

    const renderList = Lists.map((List) => {
        return <Link key={List.label} 
        to = {List.path} 
        className='mb-3' 
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >{List.label}</Link>
    }) 
    return <div className="sticky top-0  flex flex-col item-start" >
        {renderList}
    </div>
}

export default Sidebar;