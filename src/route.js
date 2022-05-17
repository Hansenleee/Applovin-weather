import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './home';
import Detail from './detail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}