import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Applovin-weather">
          <Route path="" element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}