import { useSelector } from "react-redux";
import NavBar from "../Components/Common Components/Navbar/NavBar";
import Button from "../Components/Common Components/Button/Button";
import Loader from "../Components/Common Components/Loader/Loader";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  console.log("My profile", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <NavBar />
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
      <Button text={"Logout"} onClick={handleLogout} />
    </>
  );
};

export default Profile;
