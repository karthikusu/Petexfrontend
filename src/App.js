// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import UserHomepage from './UserHomePage'; 
import Home from './components/Home'; 
import ContactUs from './Contactus';
import AboutUs from './Aboutus';

//User Module
import Register from './components/UserRegistration.jsx';
import UserProfileLogin from './UserProfileLogin.js';
import UserProfilePage from './UserProfilePage.js';
import Login from './components/UserLogin.jsx';
import UpdateUser from './components/UpdateUser2';
import ForgetPassword from './components/UserForgetPassword.jsx';
import ConfirmPassword from './components/UserConfirmPassword.jsx';
import ValidateOTP from './components/UserValidateOTP.jsx';
import UserNavbar from './UserNavbar.js';
import ReportLostForm from './UserReportLostFormNavbar.js';
import Lost from './UserReportLostNavbar.js';
import Adoption from './UserAdoptionNavbar.js';
import Payment from './UserPaymentNavbar.js';
import Address from './UserAddressNavbar.js';
import UserAssistance from './UserAssistance.js';
import Sales from './UserSalesNavbar.js';
import Purchase from './UserPurchaseNavbar.js';
import Funding from './Funding.js';
import Shows from './UserShowsNavbar.js';
import Exibutor from './UserExibutorNavbar.js';
import Exihibutionform from './UserExibitionFormNavbar.js';
import History from './History.js';
import UserCart from './UserCartNavbar.js';
import UserPets from './UserPets.js';
import Modal from './Model.js';
import UserItems from './UserItems.js';
import Daycare from "./UserDayCareNav.js";
import UserBookforDaycareNavbar from "./UserBookforDaycareNavbar.js";
import Parrot from './ParrotParrot.js';
import Training22 from './UserTrainingNavbar.js';
import Elephant2 from './UserElephantTrainingNavbar.js';
import DogDog from './UserDogTrainingNavbar.js';
import CatCat from './UserCatTrainingNavbar.js';
import RabbitRabbit from './UserRabbitTrainingNavbar.js';
import Monkey from './UserMonkeyTrainingNavbar.js';
import BookNow from './BookNow.js';
import Services from './UserServices.js';
import UserBreeding from './UserBreeding.js';
import UserBoarding from './UserBoardingPage.js';
import UserGrooming from './UserGroomingPage.js';
import VaccinationForm from './VaccinationForm.js';
import Homevisitform from './HomeVisitForm.js';
import Hospitalizationform from './HospitalizationForm.js';
import SlotAppointmentTable from './SlotAppointmentTable.js';
import DoctorDetailsBooking from './UserDoctorDetailsBooking.js';
import DoctorSlotBooking from './DoctorSlotBooking.js';
import Location from "./Location.js";
import Location1 from "./Location1.js";
import Location2 from "./Location2.js";
import Location3 from "./Location3.js";
import Location4 from "./Location4.js";
import Location5 from "./Location5.js";
import UserPetsNavbar from './UserPetsNavbar.js';
import UserProfilePageNavbar from './UserProfilePageNavbar.js';
import UserAssistanceNavbar from './UserAssistanceNavbar.js'
import UserDoctorDetailsBookingNavbar from './UserDoctorDetailsBookingNavbar.js';
import UserHistoryNavbar from './UserHistoryNavbar.js';
import UserHomeVisitFormNavbar from './UserHomeVisitFormNavbar.js';
import UserHospitalizationFormNavbar from './UserHospitalizationFormNavbar.js';
import UserItemsNavbar from './UserItemsNavbar.js';
import UserServicesNavbar from './UserServicesNavbar.js';
import UserVaccinationFormNavbar from './UserVaccinationFormNavbar.js';
import FundingDetailsPage from './FundingDetailsPage.jsx';
import FundingDetails from './FundingDetails.jsx';
import RequestFundingForm from './RequestFundingForm.jsx';
import UserTrainingNavbar from './UserTrainingNavbar.js';
import OrderPDFGen from './OrderPdfGenerator.js';

import Accessories from './Accessories';
// import Items from './Items';
import Navbar from './Navbar';
import Signout from './Signout';

//Vendor Module
import VendorRegister from "./components/VendorRegistration";
import VendorProfileLogin from './VendorProfileLogin';
import VendorProfilePage from './VendorProfilePage.js';
import VendorLogin from './components/VendorLogin';
import ForgetVendor from './components/Foregetvendor';
import ValidateVendor from './components/ValidateVendor';
import ConfirmVendor from './components/ConfirmVendor'; 
import Vendornavbar from './Vendornavbar.js';
import VendorDashBoard from './Vendordashboard';
import ReportLost from './Reportlost.js';
import VendorItemsForm from './VendorItemsForm.js';
import PetTypesForm from './PetTypesForm.js';
import Grooming from './Grooming.js';
import GroomingForm from './GroomingForm.js';
import HousingBourding from './HousingBourding.js';
import HouseBourdForm from './HouseBourdForm.js';
import VendorDaycareForm from './Vendordaycareform.js';
import VendorTrainingForm from './VendorTrainingForm.js';
import VendorServicesList from './VendorServicesList.js';


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
import ForgetAdmin from './ForgetAdmin';
import Cameladoption from './CamelAdoption';
import ElephantAdoption from './ElephantAdoption';
import CowAdoption from './CowAdoption';
import GoatSheapAdoption from './GoatSheapAdoption';
import Horseadoption from './HorseAdoption';
import OrdersReceived from './OrdersReceived';
import DoctorHome from './DoctorHome';
import Homevisit  from './HomeVisit';
import Hospitalize from './Hospitalize';
import Vaccination from './Vaccination';
import DoctorRegistration from './DoctorRegistration';
import DoctorsTable from './DoctorsTable';
import DoctorLogin from './DoctorLogin';
import AdminForget from './AdminForget';
import AdminValidate from './ValidateAdmin';
import confirmAdmin from './ConfirmAdmin';
import DoctorForget from './DoctorForget';
import ConfirmDoctor from './DoctorConfirm';
import ValidateDoctor from './DoctorValidate';
import Doctorprofile from './DoctorProfile';
import Orders from './Orders';
import { SignUpOptions } from './components/SignUpOptions';
// import GetProducts from './components/GetCat';

import UserDashBoard from './components/UserDashboard';
import Items from './Items';

import Toys from './Toys.js';
import Clothing from './Clothing';
import Clothingform from './ClothingForm';
import BreedPage from './BreedPage.js';
import AllServices from './AllServices.js';
import ItemsForm from './ItemsForm.js';
import ToysForm from './ToysForm.js';


import ConfirmAdmin from './ConfirmAdmin';
import Footer2 from './Footer';
import AdminProfile from './AdminProfile.js';
import AdminAdaption from './AdminAdaption.js';
import AdminFunding from './AdminFunding.js';
import AdminServices from './AdminServices.js';
import AdminPetShow from './Adminpetshow.js';
import Profile from './Profile';
// import CartItems from './CartItems';

// import PageContent from './PageContent';
// import SideMenu from './SideMenu'
// import AppRoutes from './AppRoutes';

import Horseservices from './Horseservices.js';
import Birdservices from './Birdservices.js';
import CowServices from './Cowservices.js';
import Sheepservices from './Sheepservices.js';
import CatSerVices from './CatServices';
import ElephantServices from './Elephantservices';
import CamelServices from './Camelservices';
import DrAppointment from './DrAppointment';
import Doctorreport from './DoctorReport';


import SellingReport from './SellingReport.js';
import AppointmentForm from './AppointmentForm.js';


import Pets from './components/PetItems.js';
import DrList from './DrList.js';
import DrPriya from './DrPriya.js';
import DrMadhu from './DrMadhu.js';
import DrMishra from './DrMishra.js';
import DrNandan from './DrNandan.js';
import DrArjun from './DrArjun.js';
import Drrohan from './DrRohan.js';
import DrMahesh from './DrMahesh.js';
import DrYogitha from './DrYogitha.js';


import DoctorNavbar from './DoctorNavbar.js';


import Products from './ProductDetails.js';
import TermsAndConditions from './components/TermsAndConditions.js';
import PrivacyPolicy from './components/PrivacyAndPolicy.js';
import ExperienceCenter from './components/ExperienceCenter.js';
import KnowledgeCenter from './components/KnowledgeCenter.js';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/terms' element={<TermsAndConditions/>}/>
          <Route path='/privacyandpolicy' element={<PrivacyPolicy/>}/>
          <Route path='/experiencecenter' element={<ExperienceCenter/>}/>
          <Route path='/knowledgecenter' element={<KnowledgeCenter/>}/>
          {/* <Route path="/cart" element={<CartItems/>}/> */}
          {/* <Route path="/getproducts" element={<GetProducts/>}/> */}

          <Route path="/userprofilelogin" element={<UserProfileLogin/>}/>
          <Route path="/userprofilepage" element={<UserProfilePage/>}/>
          <Route path="/userpets" element={<UserPetsNavbar/>}/>
          <Route path='/userprofilepagenav' element={<UserProfilePageNavbar/>}/>
          <Route path='/userassistancenav' element={<UserAssistanceNavbar/>}/>
          <Route path="/usertrainingnavbar" element={<UserTrainingNavbar/>}/>
          <Route path='/userdoctordetailsbookingnav' element={<UserDoctorDetailsBookingNavbar/>}/>
          <Route path='/userhistorynav' element={<UserHistoryNavbar/>}/>
          <Route path='/userhomevisitformnav' element={<UserHomeVisitFormNavbar/>}/>
          <Route path='/userhospitalizationformnav' element={<UserHospitalizationFormNavbar/>}/>
          <Route path="/useritemsnav" element={<UserItemsNavbar/>}/>
          <Route path="/userservicesnav" element={<UserServicesNavbar/>}/>
          <Route path="/uservaccinationformnav" element={<UserVaccinationFormNavbar/>}/>
          <Route path="/usernavbar" element={<UserNavbar/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/reportlostform" element={<ReportLostForm/>}/>
          <Route path="/lostpet" element={<Lost/>}/>
          <Route path="/assistance" element={<UserAssistance/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/purchase" element={<Purchase/>}/>
          <Route path="/funding" element={<Funding/>}/>
          <Route path="/shows" element={<Shows/>}/>
          <Route path="/exibutor" element={<Exibutor/>}/>
          <Route path="/exibitionform" element={<Exihibutionform/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/Cart" element={<UserCart/>}/>
          <Route path="/userpets" element={<UserPets/>}/>
          <Route path="/Modal" elementr={<Modal/>}/>
          <Route path="/useritems" element={<UserItems/>}/>
          <Route path="/vaccinationform" element={<VaccinationForm/>}/>
          <Route path="/homevisitform" element={<Homevisitform/>}/>
          <Route path="/hospitalizationform" element={<Hospitalizationform/>}/>
          <Route path='/requestfundingform' element={<RequestFundingForm/>}/>
          <Route path='/fundingdetails' element={<FundingDetails/>}/>
          <Route path='/fundingdetailspage' element={<FundingDetailsPage/>}/>
          <Route path='/paynow' element={<OrderPDFGen/>}/>

          <Route path="/signupoptions" element={<SignUpOptions/>}/>
          {/* <Route path="/products" element={<Product/>}/> */}
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/userlogin" element={<UserHomepage />} />
          <Route path="/loginuser" element={<Login/>}/>


          <Route path="/vendorprofilelogin" element={<VendorProfileLogin/>}/>
          <Route path="/vendorprofilepage" element={<VendorProfilePage/>}/>
          <Route path="/doctornavbar" element={<DoctorNavbar/>}/>

          {/* <Route path="/vendorlogin" element={<VendorLogin/>}/> */}
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

          <Route path="/vendordashboard" element={<Vendornavbar/>}/>
          <Route path="/vendoritemsform" element={<VendorItemsForm/>}/>
          <Route path="/pettypesform" element={<PetTypesForm/>}/>
          <Route path="/vendordaycareform" element={<VendorDaycareForm/>}/>
          <Route path="/vendortrainingform" element={<VendorTrainingForm/>}/>
          <Route path="/vendorserviceslist" element={<VendorServicesList/>}/>


          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/AdminProfile" element={<AdminProfile/>}/> 
          <Route path="/forgetadmin" element={<AdminForget/>}/>
          <Route path="/confirmadmin" element={<ConfirmAdmin/>}/>
          <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="/adminadoption" element={<AdminAdaption/>}/>
          <Route path="/adminfunding" element={<AdminFunding/>}/>
          <Route path="/adminservices" element={<AdminServices/>}/>
          <Route path="/adminpetshow" element={<AdminPetShow/>}/>

          {/* <Route path="/Orders/Admindashboard" element={<Admindashboard/>}/> */}
          <Route path="/vendor" element={<Vendor/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/appointmentlist" element={<CustomerList/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctorprofile" element={<Doctorprofile/>}/>
          <Route path="/doctorreport" element={<Doctorreport/>}/>
          <Route path="/userdoctordetails" element={<DoctorDetailsBooking/>}/>
          {/* <Route path="/rabithome" element={<Homerabit/>}/>
          <Route path="/birdhome" element={<Birdhome/>}/> */}
          {/* <Route path="/userdashboard" element={<UserDashBoard/>}/> */}
          <Route path="/items" element={<Items/>}/>
          <Route path="/vendoritemsform" element={<ItemsForm/>}/>
          <Route path="/toysvendor" element={<Toys/>}/>
          <Route path="/toysvendorform" element={<ToysForm/>}/>
          <Route path="/cloths" element={<Clothing/>}/>
          <Route path="/clothingform" element={<Clothingform/>}/>
          <Route path="/BreedPage" element={<BreedPage/>} />
          <Route path="/allservices" element={<AllServices/>}/>
          <Route path="/grooming" element={<Grooming/>}/>
          <Route path="/groomingform" element={<GroomingForm/>}/>
          <Route path="/houseboarding" element={<HousingBourding/>}/>
          <Route path="/houseboardform" element={<HouseBourdForm/>}/>
          <Route path="/reportlost" element={<ReportLost/>}/>
          <Route path="/userbreeding" element={<UserBreeding/>}/>
          <Route path="/userboarding" element={<UserBoarding/>}/>
          <Route path="/usergrooming" element={<UserGrooming/>}/>
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/useraddress" element={<Address/>}/>
          <Route path="/Adoption" element={<Adoption/>} />
          <Route path="/doctorslotbooking" element={<DoctorSlotBooking/>}/>
          <Route path="/training" element={<Training22/>} />
          <Route path="/DogDogData" element={<DogDog/>} />
          <Route path='/CatCatData' element={<CatCat/>} />
          <Route path='/RabbitRabbitData' element={<RabbitRabbit/>} />
          <Route path='/ParrotData' element={<Parrot/>} />
          <Route path='/Elephant2Data' element={<Elephant2/>} />
          <Route path='/MonkeyData' element={<Monkey/>} />
          <Route path='/BookNow' element={<BookNow/>} />
          <Route path ="/daycare" element ={<Daycare/>}/>
          <Route path="/Bookfordaycare" element = {<UserBookforDaycareNavbar/>}/>
          <Route path="/Location" element = {<Location/>}/>
          <Route path="/Location1" element ={<Location1/>}/>
          <Route path="/Location2" element ={<Location2/>}/>
          <Route path="/Location3" element ={<Location3/>}/>
          <Route path="/Location4" element = {<Location4/>}/>
          <Route path="/Location5" element ={<Location5/>}/>


          <Route path="/appointmentslots" element={<SlotAppointmentTable/>}/>
          

          <Route path="/horseservices" element={<Horseservices/>}/>
          <Route path="/birdservices" element={<Birdservices/>}/>
          <Route path="/elephantservices" element={<ElephantServices/>}/>
          <Route path="/camelservices" element={<CamelServices/>}/>
          <Route path="/cowservices" element={<CowServices/>}/>
          <Route path="/sheepservices" element={<Sheepservices/>}/>
          <Route path="/catservices" element={<CatSerVices/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/elephantservices" element={<ElephantServices/>}/>
          <Route path="/camelservices" element={<CamelServices/>}/>
          {/* <Route path="/drappointment" element={<DrAppointment/>}/> */}
          <Route path="/drlist" element={<DrList/>}/>
          
          <Route path="/forgetadmin" element={<ForgetAdmin/>}/>
          <Route path="/cameladoption" element={<Cameladoption/>}/>
          <Route path="/elephantadoption" element={<ElephantAdoption/>}/>
          <Route path="/cowadoption" element={<CowAdoption/>}/>
          <Route path="/goatsheapadoption" element={<GoatSheapAdoption/>}/>
          <Route path="/horseadoption" element={<Horseadoption/>}/>
          {/* <Route path="/services" element={<Services1/>}/> */}
          {/* <Route path="/order" element={<OrdersReceived/>}/> */}
          <Route path="/validateadmin" element={<AdminValidate/>}/>
          <Route path="/confirmadmin" element={<confirmAdmin/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/sellingreport" element={<SellingReport/>}/>
          
          <Route path="/chickenadoption" element={<CA/>}/>
          <Route path="/catadoption" element={<CatAdoption/>}/>
          <Route path="/dogadoption" element={<DogAdoption/>}/>
             <Route path="/Items" element={<Items/>} />
             <Route path="/Adoption" element={<Adoption/>} />
             <Route path="/Items/Home" element={<Home/>} />
             <Route path="/Accessories" element={<Accessories/>} />
             <Route path="/Accessories/Home" element={<Home/>} />
              <Route path="/Navbar" element={<Navbar/>}/> 

              <Route path="/Signout" element={<Signout/>} />
          {/* Uncomment the line below if you have a component for UserList */}
          {/* <Route path="/listuser" element={<UserList />} /> */}


              {/* <Route path="/userhome" element={<UserHome/>} /> */}
              {/* <Route path="/doctordashboard" element={<DoctorHome/>}/> */}
              {/* <Route path='/doctorprofile' element={<DoctorProfile/>}/> */}
              {/* <Route path='/profile' emenet={<Profile/>}/> */}
              <Route path="/homevisit" element={<Homevisit/>}/>
              <Route path="/hospitalization" element={<Hospitalize/>}/>
              <Route path="/vaccination" element={<Vaccination/>}/>
              <Route path="/doctorregistration" element={<DoctorRegistration/>}/>
              <Route path="/doctors" element={<DoctorsTable/>}/>
              <Route path="/doctorlogin" element={<DoctorLogin/>}/>
              <Route path="/forgetdoctor" element={<DoctorForget/>}/>
              <Route path="/confirmdoctor" element={<ConfirmDoctor/>}/>
              <Route path="/doctorvalidate" element={<ValidateDoctor/>}/>
              {/* <Route path="/profile" element={<DoctorProfile/>}/> */}
              <Route path="/appointmentform" element={<AppointmentForm/>}/>
              {/* <Route path="/drpriya" element={<DrPriya/>}/>
              <Route path="/drmadhu" element={<DrMadhu/>}/>
              <Route path="/drmishra" element={<DrMishra/>}/>
              <Route path="/drnandan" element={<DrNandan/>}/>
              <Route path="/drarjun" element={<DrArjun/>}/>
              <Route path="/drrohan" element={<Drrohan/>}/>
              <Route path="/drmahesh" element={<DrMahesh/>}/>
              <Route path="/dryogitha" element={<DrYogitha/>}/> */}


        </Routes>
      </Router>
    </div>
  );
}

export default App;

