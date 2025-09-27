import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Start from './Pages/Start';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import PageNotFound from "./Pages/PageNotFound";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/Birthday/wish" element={<Home/>}/>
          <Route path="/Birthday/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/Birthday/Admin" element={<Admin/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
