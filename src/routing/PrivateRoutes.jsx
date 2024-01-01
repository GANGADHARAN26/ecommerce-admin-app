import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  return getTokenFromLocalStorage?.token !== undefined ? children : ( <Navigate to="/" replace={true} /> );
};
