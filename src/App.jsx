import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GloablStyles from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GloablStyles>
        <BrowserRouter>
          <Routes>
            <Route element={AppLayout}>
              <Route
                index
                path="dashboard"
                element={<Navigate replace to="dashboard" />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GloablStyles>
    </>
  );
}

export default App;
