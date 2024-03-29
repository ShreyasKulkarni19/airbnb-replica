import './App.css'
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Layout from "./Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
