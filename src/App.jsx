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
import Director1 from './Pages/Directors/Director_1';
// import Director1 from './Pages/Directors/Director1';


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
          <Route path='/director1' element={<Director1 />} />
        </Routes>
    </>
  )
}

export default App
