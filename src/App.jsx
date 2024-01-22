import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react'
import Sidebar, {SideItem} from './component/Sidebar'




const App = () => {
 
  
  return (
<main className="App">
  <Sidebar>
 <SideItem icon={<LayoutDashboard size={20}/>} text='Dashboard' alert/>
 <SideItem icon={<BarChart3 size={20}/>} text='Statistics' active/>
 <SideItem icon={<UserCircle size={20}/>} text='Users'/>
 <SideItem icon={<Boxes size={20}/>} text='Inventory'/>
 <SideItem icon={<Package size={20}/>} text='Orders' alert/>
 <SideItem icon={<Receipt size={20}/>} text= 'Billings'></SideItem>
 <hr className='my-3'/>
 <SideItem icon={<Settings size={20}/>} text='Settings'/>
 <SideItem icon={<LifeBuoy size={20}/>} text='Help'/>

  </Sidebar>
</main>
  )
}

export default App