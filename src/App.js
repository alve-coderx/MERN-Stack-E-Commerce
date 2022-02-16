import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/Dashboard-home/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import initfireApp from './Firebase/firebase.init';
import Shop from './Pages/Shop/Shop';
import Foods from './Pages/Foods/Foods';
import Electronics from './Pages/Electronics/Electronics';
import Clothes from './Pages/Clothes/Clothes';
import Recipes from './Pages/Recipes/Recipes';

initfireApp()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/shop" element={<Recipes></Recipes>} /> */}
          <Route exact path="/shop/recipes" element={<Recipes></Recipes>} />
          <Route exact path="/shop/foods" element={<Foods></Foods>} />
          <Route exact path="/shop/electronics" element={<Electronics></Electronics>} />
          <Route exact path="/shop/clothes" element={<Clothes></Clothes>} />

          <Route path='/shop' element={<Shop />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path="/dashboard" element={
            <Dashboard />
          }>
            <Route exact path="/dashboard/dashboardhome" element={
              <DashboardHome>

              </DashboardHome>}>
            </Route>

            <Route path={`/dashboard/makeAdmin`} element={
              <MakeAdmin />
            }>
            </Route>
            <Route path={`/dashboard/addproduct`} element={
              <AddProducts />
            }>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
