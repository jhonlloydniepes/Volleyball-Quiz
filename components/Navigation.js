import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Fragment } from "react";

function Navigation() {
  let Home = () => {
    let StatsTwo = useSelector((Stat) => {
      return Stat.ReducerTwo;
    });
  };

  const ProfileClickHandler = () => {
    auth.signOut();
    toast.success("You are logged out!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  };
  return (
  
    <button > 

    </button>
  );
}
export default Navigation;