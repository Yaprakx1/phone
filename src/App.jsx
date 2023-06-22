import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.scss'
import AddJob from './pages/AddJob'
import JobList from './pages/JobList'
function App() {


  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element ={<JobList/>}/>

     <Route path='/' element ={<AddJob/>}/>
    </Routes>
       
    </BrowserRouter>
  )
}

export default App
