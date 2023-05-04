import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Home } from "../../../pages/Home/Home";
import { AboutMe } from "../../../pages/AboutMe/AboutMe";
import { Skills } from "../../../pages/Skills/Skills";
import { MyProjects } from "../../../pages/MyProjects/MyProjects";
import { Contacts } from "../../../pages/Contacts/Contacts";

export const App = () => {
  return (
    <div className="flex flex-col bg-gray-800">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}
