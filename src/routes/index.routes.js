import {
  HomePage,
  LoginPage,
  NotFoundPage,
  UserProfilePage,
  UserExitPage,
} from "pages";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./private.routes";
import { ProtectedRoutes } from "./protected.routes";
import { PublicRoutes } from "./public.routes";

export function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<UserProfilePage />} />
          <Route path="/dashboard/profile" element={<UserProfilePage />} />
          <Route path="/dashboard/logout" element={<UserExitPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
