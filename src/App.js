import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'; 
import SignUp from './Components/SignUp'; 
import Dashboard from './Components/Dashboard'; 
import Home from './Components/Tabs/Home'; 
import Data from './Components/Tabs/Data'; 
import Quiz from './Components/Tabs/Quiz'; 
import AddAndDelete from './Components/Tabs/AddAndDelete'; 
import QA from './Components/Tabs/QA'; 
import Profile from './Components/Tabs/Profile'; 

function App() {
  const DashboardWithHome = Dashboard(Home);
  const DashboardWithData = Dashboard(Data);
  const DashboardWithQuiz = Dashboard(Quiz);
  const DashboardWithAddAndDelete = Dashboard(AddAndDelete);
  const DashboardWithQA = Dashboard(QA);
  const DashboardWithProfile = Dashboard(Profile);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/home" element={<DashboardWithHome />} />
          <Route path="/dashboard/data" element={<DashboardWithData />} />
          <Route path="/dashboard/quiz" element={<DashboardWithQuiz Page={Quiz} />} />
          <Route path="/dashboard/add-delete-data" element={<DashboardWithAddAndDelete Home={AddAndDelete} />} />
          <Route path="/dashboard/qa" element={<DashboardWithQA Home={QA} />} />
          <Route path="/dashboard/profile" element={<DashboardWithProfile Home={Profile} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
