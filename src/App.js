// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login'; 
import Register from './components/Registration';
import Home from './components/Home'; 
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser2';
import ForgetPassword from './components/ForgetPassword';
import ConfirmPassword from './components/ConfirmPassword';
import ValidateOTP from './components/ValidateOTP';

import Navpet from './Navpet';
import Profiledog from './Profiledog';
import DrAppointment from './DrAppointment';
import Adoption from './Adoption';
import Accessories from './Accessories';
import Items from './Items';
import Services from './Services';
import Profilecat from './Profilecat';
import Readmoreb from './Readmoreb';
import Readmoreg from './Readmoreg';
import Readmorem from './Readmorem';
import Readmoret from './Readmoret';
import Readmores from './Readmores';
import Booklogin from './Booklogin';
import Navbar from './Navbar';
import Signout from './Signout';
import Payment from './Payment';
// import Home1 from "./Home1";
import PetProfile from './PetProfile';
import Sales from './Sales';
import Readmoreh from './Readmoreh';
import Readmorer from './Readmorer';
import Shows from './Shows';
import Reportlost from './Reportlost';
import Funding from './Funding';
import Purchases from './Purchases';
import Profilesheep from './Profilesheep';
import Profileelephant from './Profileelephant';
import Profilehorse from './Profilehorse';
import Profilebird from './Profilebird';
import Profilechicken from './Profilechicken';
import Profilebunny from './Profilebunny';
import Profilecamel from './Profilecamel';
import Profilecow from './Profilecow';
import Profilegoat from './Prifilegoat';
import Profilebufflo from './Profilebufflo';
import UserHome from "./UserHome";
import VendorRegister from "./components/VendorRegistration";
import VendorLogin from './components/VendorLogin';
import ForgetVendor from './components/Foregetvendor';
import ValidateVendor from './components/ValidateVendor';
import ConfirmVendor from './components/ConfirmVendor'; 
import VendorDashBoard from './Vendordashboard';
import ContactUs from './Contactus';
import AboutUs from './Aboutus';
import CA from './ChickenAdoption';
import CatAdoption from './CatAdoption';
import DogAdoption from './DogAdoption';
import Admindashboard from './Admindashboard';
import AdminLogin from './Adminlogin';
import Vendor from './Vendor';
import User from './User';
// import DRAppointment from './AppointmentForm';
import CustomerList from './CustomerList';
import Doctors from './Doctor';
import Homerabit from './Homerabit';
import Birdhome from './birdhome';
import Doghome from './Doghome';
import Cathome from './Cathome';
import ChickenHome from './Chickenhome';
import Horsehome from './Horsehome';
import GoatSheaphome from './GoatSheephome';
import Elephanthome from './Elephanthome';
import Cowhome from './Cowhome';
import ForgetAdmin from './ForgetAdmin';
import CamelHome from './CamelHome';
import Cameladoption from './CamelAdoption';
import ElephantAdoption from './ElephantAdoption';
import CowAdoption from './CowAdoption';
import GoatSheapAdoption from './GoatSheapAdoption';
import Horseadoption from './HorseAdoption';
import Services1 from './Services1';
import OrdersReceived from './OrdersReceived';
import Doctordashboard from './DoctorDashBoard';
import Homevisit  from './HomeVisit';
import Hospitalize from './Hospitalize';
import Vaccination from './Vaccination';
import DoctorRegistration from './DoctorRegistration';
import DoctorsTable from './DoctorsTable';
import DoctorLogin from './DoctorLogin';
import AdminForget from './AdminForget';
import AdminValidate from './ValidateAdmin';
import confirmAdmin from './ConfirmAdmin';
import Madhu from './Drmadhu';
import Mishra from './Drmishra'
import Nandan from './Drnandhan';
import DoctorForget from './DoctorForget';
import ConfirmDoctor from './DoctorConfirm';
import ValidateDoctor from './DoctorValidate';
import Product from './Products';
import Orders from './Orders';
// import PageContent from './PageContent';
// import SideMenu from './SideMenu'
// import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product/>}/>
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/userlogin" element={<Login />} />
          <Route path="/vendorlogin" element={<VendorLogin/>}/>
          <Route path="/userregister" element={<Register />} />
          <Route path="/vendorregister" element={<VendorRegister/>}/>
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/confirmpassword" element={<ConfirmPassword/>}/>
          <Route path="/validateotp" element={<ValidateOTP/>}/>
          <Route path="/forgetvendor" element={<ForgetVendor/>}/>
          <Route path="/confirmvendor" element={<ConfirmVendor/>}/>
          <Route path="/validatevendor" element={<ValidateVendor/>}/>
          <Route path="/vendorhome" element={<VendorDashBoard/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/forgetadmin" element={<AdminForget/>}/>
          <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="/vendor" element={<Vendor/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/appointmentlist" element={<CustomerList/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/rabithome" element={<Homerabit/>}/>
          <Route path="/birdhome" element={<Birdhome/>}/>
          <Route path="/doghome" element={<Doghome/>}/>
          <Route path="/cathome" element={<Cathome/>}/>
          <Route path="/chickenhome" element={<ChickenHome/>}/>
          <Route path="/horsehome" element={<Horsehome/>}/>
          <Route path="/goatsheapgoat" element={<GoatSheaphome/>}/>
          <Route path="/elephanthome" element={<Elephanthome/>}/>
          <Route path="/cowhome" element={<Cowhome/>}/>
          <Route path="/camelhome" element={<CamelHome/>}/>
          <Route path="/forgetadmin" element={<ForgetAdmin/>}/>
          <Route path="/cameladoption" element={<Cameladoption/>}/>
          <Route path="/elephantadoption" element={<ElephantAdoption/>}/>
          <Route path="/cowadoption" element={<CowAdoption/>}/>
          <Route path="/goatsheapadoption" element={<GoatSheapAdoption/>}/>
          <Route path="/horseadoption" element={<Horseadoption/>}/>
          <Route path="/services" element={<Services1/>}/>
          {/* <Route path="/order" element={<OrdersReceived/>}/> */}
          <Route path="/validateadmin" element={<AdminValidate/>}/>
          <Route path="/confirmadmin" element={<confirmAdmin/>}/>
          <Route path="/orders" element={<Orders/>}/>
          
          <Route path="/chickenadoption" element={<CA/>}/>
          <Route path="/catadoption" element={<CatAdoption/>}/>
          <Route path="/dogadoption" element={<DogAdoption/>}/>
          <Route path="/Services" element={<Services/>} />
             <Route path="/Items" element={<Items/>} />
             <Route path="/Profilecat" element={<Profilecat/>} />
             <Route path="/Adoption" element={<Adoption/>} />
             <Route path="/DrAppointment" element={<DrAppointment/>} />
             <Route path="/Navpet" element={<Navpet/>} />
             <Route path="/Profiledog" element={<Profiledog/>} />
             <Route path="/Items/Home" element={<Home/>} />
             <Route path="/Accessories" element={<Accessories/>} />
             <Route path="/Accessories/Home" element={<Home/>} />
             <Route path="/Readmoreb" element={<Readmoreb/>} />
             <Route path="/Readmoreg" element={<Readmoreg/>} />
             <Route path="/Readmorem" element={<Readmorem/>} />
             <Route path="/Readmoret" element={<Readmoret/>} />
             <Route path="/Readmores" element={<Readmores/>} />
             <Route path="/Readmoreh" element={<Readmoreh/>} />
             <Route path="/Readmorer" element={<Readmorer/>} />
             <Route path="/Adoption" element={<Adoption/>} />
             <Route path="DrAppointment/Booklogin" element={<Booklogin/>} /> 
              <Route path="/Navbar" element={<Navbar/>}/> 
              <Route path="/Payment" element={<Payment/>} />
              <Route path="/Signout" element={<Signout/>} />
          {/* Uncomment the line below if you have a component for UserList */}
          {/* <Route path="/listuser" element={<UserList />} /> */}


              <Route path="/userhome" element={<UserHome/>} />
              <Route path="/PetProfile" element={<PetProfile/>} />
              <Route path="/Sales" element={<Sales/>} />
              <Route path="/Shows" element={<Shows/>} />
              <Route path="/Reportlost" element={<Reportlost/>} />
              <Route path="/Funding" element={<Funding/>} />
              <Route path="/Purchases" element={<Purchases/>} />
              <Route path="/Profilesheep" element={<Profilesheep/>} />
              <Route path="/Profileelephant" element={<Profileelephant/>} />
              <Route path="/Profilehorse" element={<Profilehorse/>} />
              <Route path="/Profilebird" element={<Profilebird/>} />
              <Route path="/Profilechicken" element={<Profilechicken/>} />
              <Route path="/Profilebunny" element={<Profilebunny/>} />
              <Route path="/Profilecow" element={<Profilecow/>} />
              <Route path="/Profilecamel" element={<Profilecamel/>} />
              <Route path="/Profilegoat" element={<Profilegoat/>} />
              <Route path="/Profilebufflo" element={<Profilebufflo/>} />

              <Route path="/doctordashboard" element={<Doctordashboard/>}/>
              <Route path="/homevisit" element={<Homevisit/>}/>
              <Route path="/hospitalization" element={<Hospitalize/>}/>
              <Route path="/vaccination" element={<Vaccination/>}/>
              <Route path="/doctorregistration" element={<DoctorRegistration/>}/>
              <Route path="/doctors" element={<DoctorsTable/>}/>
              <Route path="/doctorlogin" element={<DoctorLogin/>}/>
              <Route path="/madhu" element={<Madhu/>}/>
              <Route path="/mishra" element={<Mishra/>}/>
              <Route path="/nandan" element={<Nandan/>}/>
              <Route path="/forgetdoctor" element={<DoctorForget/>}/>
              <Route path="/confirmdoctor" element={<ConfirmDoctor/>}/>
              <Route path="/doctorvalidate" element={<ValidateDoctor/>}/>
              

        </Routes>
      </Router>
    </div>
  );
}

export default App;

