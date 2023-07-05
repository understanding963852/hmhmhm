import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

// 컴퍼넌트중에서 특정페이지로 강제로 방향을 설정하는
// 컴커넌트 {Navigate}

const PrivateRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
