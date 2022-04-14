import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OverviewPage from "../pages/OverviewPage/OverviewPage";

// eslint-disable-next-line max-lines-per-function
const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
