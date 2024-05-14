// useAuthentication.js
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function AdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isTokenValid = (token) => {
      if (!token) return false;
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    };

    const checkTokenValidity = () => {
      const token = localStorage.getItem("token");
      if (token && isTokenValid(token)) {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken && decodedToken.isAdmin);
      } else {
        setIsAdmin(false);
      }
    };

    checkTokenValidity();

    const tokenCheckInterval = setInterval(checkTokenValidity, 1000);

    return () => clearInterval(tokenCheckInterval);
  }, []);

  return isAdmin;
}

export default AdminAuth;
