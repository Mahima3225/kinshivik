
import Experimental from './components/Experimental';
import Componenta from './components/Componenta';
import Componentb from './components/Componentb';
import Componentc from './components/Componentc';
import { Route, Routes, Link } from "react-router-dom";


import Login from './components/Login/Login';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Login/SignupForm';
import Home from './components/home/Home';
import CategoryPrincipal from './components/categories/CategoryPrincipal';
import AuthorTools from './components/authortable/AuthorTools';
import SubscriptionsPage from './components/subscriptions/SubscriptionsPage';
import Library from './components/library/Library';

export default function App() {
  return (


    // <>
    //   {/* <div>Hello</div>
    //   <Experimental props={{name: "Kingkaushik"}}/> */}
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/componenta">componenta</Link>
    //       </li>
    //       <li>
    //         <Link to="/componentb">componentb</Link>
    //       </li>
    //       <li>
    //         <Link to="/componentc">componentc</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/componenta" element={<Componenta name="passed prop for a" />} />
    //     <Route path="/componentb" element={<Componentb name="passed prop for b" />} />
    //     <Route path="/componentc" element={<Componentc name="passed prop for c" />} />
    //   </Routes>
    // </>


    <>

      

      <Routes>

        <Route path="/" element={< Home/>} />
        <Route path="/home" element={< Home/>} />


        <Route path="/login" element={<Login showLogin={1} />} />

        <Route path="/signup" element={<Login showLogin={0} />} />
        <Route path="/categories" element={<CategoryPrincipal/>}/>
        
        {/* <Route path="/category/:id" element={< />} /> */}

        <Route path="/subscriptions" element={<SubscriptionsPage/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/profile/:id" element={<SubscriptionsPage/>}/>
        <Route path="/author/compose" element={<AuthorTools/>}/>

        <Route path="/author/myarticles" element={<AuthorTools/>}/>
        <Route path="/myprofile" element={<AuthorTools/>}/>

        



        
        
         
        
         
      </Routes>


      


    
    
    </>
  )
}
