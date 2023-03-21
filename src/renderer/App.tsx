import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import HoursPanel from './HoursPanel/HoursPanel'
import TimecardPreview from './TimecardPreview/TimecardPreview';
import './App.css';

function Landing() {
  return (
    <div className='landing'>
      <HoursPanel />
      <TimecardPreview />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
