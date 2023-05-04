import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Home } from "./Home.jsx";
import { Page1 } from "./Page1.jsx";
import { Page2 } from "./Page2.jsx";
import { Page3 } from "./Page3.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Test App
          </Typography>
          <Button color="inherit" component={Link} to="/Home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Page1">
            Page1
          </Button>
          <Button color="inherit" component={Link} to="/Page2">
            Page2
          </Button>
          <Button color="inherit" component={Link} to="/Page3">
            Page3
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}
