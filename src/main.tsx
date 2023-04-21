import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router/index";
import { Grid } from "@mui/material";
import './assets/css/index.less'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <Grid container className="grid">
    <Grid xs={2}>
    </Grid>
    <Grid xs={10}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>

    </Grid>
  </Grid>

)