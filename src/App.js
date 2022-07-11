import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Feedback from "./Pages/Home/Feedback";

function App() {
  return (
    <div class="px-12 max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={<RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}
        ></Route>
        <Route
          path="/dashboard"
          element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
          }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<Feedback></Feedback>}></Route>
          <Route path="feedback" element={<AddAReview></AddAReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}>
          </Route>
          <Route path="addDoctor" element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}>
          </Route>
          <Route path="manageDoctor" element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}>
          </Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
