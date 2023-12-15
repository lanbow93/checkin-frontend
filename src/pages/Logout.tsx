import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import url from "../router/url";
import LoadingScreen from "../components/LoadingScreen";

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutAction = async () => {
      try {
        const response = await fetch(url + "/user/logout", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.status === 400) {
          alert("Failed To Logout");
          navigate('/home');
          return;
        }

        sessionStorage.removeItem("account");
        navigate('/confirmation', {
          state: {
            header: 'Logout Successful',
            navStatus: 'public',
            message: 'Account has logged out. Return to the main menu',
            link: '/',
            state: '',
          },
        });
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logoutAction();
  }, [navigate]);

  return <LoadingScreen />;
}
