import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Home } from "../../../pages/Home/Home";
import { AboutMe } from "../../../pages/AboutMe/AboutMe";
import { Resume } from "../../../pages/Resume/Resume";
import { MyProjects } from "../../../pages/MyProjects/MyProjects";
import { Contacts } from "../../../pages/Contacts/Contacts";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}
