import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from './BusinessProject/Navbar/Navbar';
// import Pagentaion from './Pagenation/pagentaion';
import Home from './BusinessProject/Home/Home';
import Service from './BusinessProject/Service/Service';
import About from './BusinessProject/About/About';
import Contact from './BusinessProject/Contact/Contact';
import Error from './Error';
import Terms from './BusinessProject/Terms';
import SingleService from './BusinessProject/SingleService/singleService';

function App() {
  return (
   <>
   {/* <Pagentaion/> */}
<BrowserRouter>
<Navbar/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/terms' element={<Terms/>}/>
  <Route path='/service/:id' element={<SingleService/>}/>
  <Route path='*' element={<Error/>}/>
  </Routes>

</BrowserRouter>

   </>
  );
}

export default App;
