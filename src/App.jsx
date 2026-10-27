import './App.css'
import Maas from './componentss/Maas'
import Suretzaman from './componentss/Suretzaman'

function App() {
 

  return (
    <>
     <h1>Suret Zaman Hesablanmasi</h1>
     <Suretzaman suret={60} mesafe={180}/>
     <Maas mebleg={1000} vergiFaizi={20}/>
     

    </>
  )
}

export default App
