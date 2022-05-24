import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./routes/home";
import Logout from "./routes/logout";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Logout }  path="/logout" />
       </BrowserRouter>
   )
}

export default Routes;