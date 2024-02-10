import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Login.route"));

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
