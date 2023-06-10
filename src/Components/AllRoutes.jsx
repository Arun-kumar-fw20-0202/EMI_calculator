import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";
import { Deshboard } from "../Page/Deshboard";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <PrivateRoute>
                <Deshboard />
              </PrivateRoute>
            </>
          }
        />
      </Routes>
    </>
  );
};
