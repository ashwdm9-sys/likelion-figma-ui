import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ScriptPracticePage from './pages/ScriptPracticePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/script" element={<ScriptPracticePage />} />
      </Routes>
    </BrowserRouter>
  );
}
