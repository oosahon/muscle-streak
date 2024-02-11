import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeList } from "./route-lits";

const Login = lazy(() => import("./login/Login.route"));
const Workouts = lazy(() => import("./workouts/Workouts.route"));

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path={routeList.login} Component={Login} />
          <Route path={routeList.workouts} Component={Workouts} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
