import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-purple-500">My Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          
          <li>
            <Link to="/dashboard/feedback">Patient Feedback</Link>
          </li>
          {admin && <>
          <li> <Link to="/dashboard/users">All Users</Link></li>
          <li> <Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
          <li> <Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
          </>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
