
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
import NewArticleView from './components/articles/NewArticleView';
import ArticleRead from './components/articles/ArticleRead';
// import Userprofile from './components/userprofile/Userprofile';
import Userprofile from './components/userprofile/Userprofile';
import Myprofile from './components/userprofile/Myprofile';
// import IndividualCategory from './components/categories/IndividualCategory';
import CategoryMainView from './components/categories/CategoryMainView';
import CategoryArticles from './components/categories/CategoryArticles';
import Commentbox from './components/commentbox/Commentbox';
import SetMycookie from './components/cookies/SetMycookie';
import Showmycookie from './components/cookies/Showmycookie';
import ArticleShare from './components/articles/ArticleShare';
import Advertisement from './components/adSales/Advertisement';
import CreateCategory from './components/categories/CreateCategory';

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

        {/* <Route path="/" element={< Home/>} /> */}
        <Route path="/" element={<Login showLogin={1} />} />


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
        {/* <Route path="/myprofile" element={<AuthorTools/>}/> */}


        <Route path="/post/:id" element={<ArticleRead/>}/>

        {/* <Route path='/post/:id' element={<ArticleRead/>}>
            <Route path='commentbox' element={<Commentbox/>}></Route>
                
        </Route> */}
        {/* <Route path='/post/:id/commentbox' element={<><ArticleRead/><Commentbox/></>}></Route> */}

        <Route path='/newview' element={<NewArticleView/>}/>

        <Route path='/myprofile' element={<Myprofile/>}/>


        <Route path='/categories' element={<CategoryPrincipal/>}/>


        {/* <Route path='/category/:id/posts' element={<CategoryMainView/>}/> */}

        <Route path='/category/:id/posts' element = {<CategoryArticles/>}/>


        <Route path = '/setmycookies' element = {<SetMycookie/>}/>
        <Route path= '/showmycookies' element={<Showmycookie/>}/>

        <Route path= '/articleshare' element={<ArticleShare/>}/>
        <Route path = '/createcategory' element={<CreateCategory/>}/>

        <Route path= '/adkinshivik' element = {<Advertisement/>}/>


        

        



        
        
         
        
         
      </Routes>


      


    
    
    </>
  )
}
