import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage.js';

function initializeTimes() {
  return [
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}


function App() {
  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.updatedTimes;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
