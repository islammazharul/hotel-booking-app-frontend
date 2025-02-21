import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateHotel from "./pages/CreateHotel";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import DetailsPage from "./pages/DetailsPage";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import NotFound from "./pages/NotFound";
import SearchHotel from "./pages/SearchHotel";
import AdminPage from "./adminPage/AdminPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <SearchHotel />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/details/:hotelId"
          element={
            <Layout>
              <DetailsPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/create-hotel"
          element={
            <Layout>
              <CreateHotel />
            </Layout>
          }
        />
        <Route
          path="/edit-hotel/:hotelId"
          element={
            <Layout>
              <EditHotel />
            </Layout>
          }
        />
        <Route
          path="/my-hotels"
          element={
            <Layout>
              <MyHotels />
            </Layout>
          }
        />
        <Route
          path="/hotel/:hotelId/booking"
          element={
            <Layout>
              <BookingPage />
            </Layout>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <Layout>
              <MyBookings />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
