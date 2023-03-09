import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import BlogCatlist from './pages/BlogCatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}> 
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='add-blog' element={<Addblog />} />
          <Route path='blog-category' element={<Addblogcat />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog-category-list' element={<BlogCatlist />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color' element={<Addcolor />} />
          <Route path='color-list' element={<Colorlist />} />
          <Route path='category' element={<Addcat />} />
          <Route path='category-list' element={<Categorylist />} />
          <Route path='brand' element={<Addbrand />} />
          <Route path='brand-list' element={<Brandlist />} />
          <Route path='product' element={<Addproduct />} />
          <Route path='product-list' element={<Productlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
