import logo from './logo.svg';
import './App.css';
import EmployeeTable from "./components/EmployeeTable";
import employeeData from "./employess.json";



function App() {
  return (
     <EmployeeTable anyone="david" employees={employeeData.results}/> 
  );
}

export default App;
