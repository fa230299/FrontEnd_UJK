import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

function App() {
  const token = localStorage.getItem("token");
  if (token == null || token == "") {
     
    return (
      <BrowserRouter basename="/">
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

    )
  }

}

export default App;