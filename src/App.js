import Link from "./components/Link";
import Route from './components/Route'
import Sidebar from "./components/Sidebar";
import AccordionPage from './page/AccordionPage';
import DropdownPage from './page/DropdownPage'
import ButtonPage from './page/ButtonPage'
import ModalPage from './page/ModalPage'
import TablePage from "./page/TablePage";
import CounterPage from "./page/CounterPage";
function App(){
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div className="col-span-5">
            <Route path = '/Accordion'><AccordionPage/></Route>
            <Route path = '/Dropdown'><DropdownPage/></Route>
            <Route path = '/Button'><ButtonPage/></Route>
            <Route path = '/Modal'><ModalPage/></Route>
            <Route path = '/Table'><TablePage/></Route>
            <Route path = '/Counter' ><CounterPage initialCount={10}/></Route>
        </div>
    </div>
}

export default App
