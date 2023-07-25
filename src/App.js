import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
