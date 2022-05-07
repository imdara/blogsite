import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Addblog from "./components/Addblog";
import Bloglist from "./components/Bloglist";

const App = () => {
  return (
    <div className="App">
      <NavigationDrawer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/createblog" element={<Addblog />} />
        <Route path="/blogs" element={<Bloglist />} />
      </Routes>
    </div>
  );
};

export default App;
