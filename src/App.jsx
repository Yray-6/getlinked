import "./App.css";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Sections from "./components/sections";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Sections/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="register" element={<Register/>}/>
      </Route>
  )
)

function App() {
  // const handleNavLinkClick = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   section.scrollIntoView({ behavior: "smooth" });
  // };

  // return (
  //   <div>
  //     <Navbar handleNavLinkClick={handleNavLinkClick} />
  //     <Sections />
  //   </div>
  // );
  return(
    <RouterProvider router={router}/>
  )
  
}

export default App;
