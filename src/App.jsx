import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Apply from './Pages/Apply/Apply';
import Faculties from './Pages/Faculties/Faculties';
import Courses from './Pages/Courses/Courses';
import ScrollToTop from './components/ScrollToTop';
import ChairPerson1 from './Pages/ChairPersons/ChairPerson1';
import ChairPerson2 from './Pages/ChairPersons/ChairPerson2';
import ChairPerson3 from './Pages/ChairPersons/ChairPerson3';
import ChairPerson4 from './Pages/ChairPersons/ChairPerson4';
import Director_2 from './Pages/Directors/Director_2';
import Director_1 from './Pages/Directors/Director_1';
import Director_3 from './Pages/Directors/Director_3';
import Controller from './Pages/Chancellor/Controller';


function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/faculties' element={<Faculties />}/>
          <Route path='/chairperson1' element={<ChairPerson1 />} />
          <Route path='/chairperson2' element={<ChairPerson2 />} />
          <Route path='/chairperson3' element={<ChairPerson3 />} />
          <Route path='/chairperson4' element={<ChairPerson4 />} />
          <Route path='/director1' element={<Director_1 />} />
          <Route path='/director2' element={<Director_2 />} />
          <Route path='/director3' element={<Director_3 />} />
          <Route path='/controller' element={<Controller />} />
        </Routes>
    </>
  )
}

export default App
