import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Awards from "./components/mains/Awards.tsx";
import Leadership from "./components/mains/Leadership.tsx";
import Projects from "./components/mains/Projects.tsx";

function Root(){
  return(
      <>
        <Header/>
        <Nav/>
        <Routes>
          <Route
            path = {"/"}
            element = {<Home/>}
          />
          <Route
              path = {"/experiences.html"}
              element = {<Experiences/>}
          />
          <Route
              path = {"/education.html"}
              element = {<Education/>}
          />
          <Route
              path = {"/projects.html"}
              element = {<Projects/>}
          />
          <Route
              path = {"/awards.html"}
              element = {<Awards/>}
          />
          <Route
              path = {"/leadership.html"}
              element = {<Leadership/>}
          />
        </Routes>
        <Footer/>
      </>
  );
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}]
)

export default function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
