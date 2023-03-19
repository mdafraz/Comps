import Accordion from "../components/Accordion"

function AccordionPage(){
    const items = [
        {
            id:'adjnadn',
            label:'can i use react in project?',
            content: 'you can us react on any project.you can us react on any project.you can us react on any project.you can us react on any project.you can us react on any project.you can us react on any project.'
        },
        {
            id:'afjandaofoi',
            label:'can i use js in project?',
            content: 'you can us js on any project.you can us react on any project.you can us react on any project.you can us js on any project.you can us react on any project.you can us react on any project.'
        },
        {
            id:'213131',
            label:'can i use html in project?',
            content: 'you can us html on any project.you can us react on any project.you can us react on any project.you can us js on any project.you can us react on any project.you can us react on any project.'
        }
    ]
    return <Accordion items={items}/>
}
export default AccordionPage;
