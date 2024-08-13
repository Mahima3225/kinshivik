
import Experimental from './components/Experimental';
import Componenta from './components/Componenta';
import Componentb from './components/Componentb';
import Componentc from './components/Componentc';
import { Route, Routes, Link } from "react-router-dom"


export default function App() {
  return (
    <>

      {/* <div>Hello</div>
      <Experimental props={{name: "Kingkaushik"}}/> */}
      <nav>
        <ul>
          <li>
            <Link to="/componenta">componenta</Link>
          </li>
          <li>
            <Link to="/componentb">componentb</Link>
          </li>
          <li>
            <Link to="/componentc">componentc</Link>
          </li>
        </ul>
      </nav>

      
      <Routes>
        <Route path="/componenta" element={<Componenta name="passed prop for a" />} />
        <Route path="/componentb" element={<Componentb name="passed prop for b" />} />
        <Route path="/componentc" element={<Componentc name="passed prop for c" />} />
      </Routes>
    </>
  )
}
