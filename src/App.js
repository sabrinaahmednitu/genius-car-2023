import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import Order from './Pages/Order/Order';
import Registration from './Pages/Registration/Registration';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/manageservices"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>
        <Route path="/addservice" element={<AddService></AddService>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
