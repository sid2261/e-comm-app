import './App.css';
import Button from "@mui/material/Button";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<h1>This is index route</h1>}></Route>

  )
)

function App() {
    return <RouterProvider router={router} />;
}


export default App
