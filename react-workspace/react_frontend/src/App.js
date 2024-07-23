import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponents';
import FooterComponent from './components/FooterComponents';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponets';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponents';

function App() {
  return (
    <div>
     <Router>
      <HeaderComponent/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
        </Routes>
      </div>

      <FooterComponent/>
    
    </Router> 

    </div>
  );
}

export default App;