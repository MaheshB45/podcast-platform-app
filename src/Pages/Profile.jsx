import { useSelector } from "react-redux";
import NavBar from "../Components/Common Components/Navbar/NavBar";


const Profile = () => {
    const user = useSelector((state) => state.user.user);
    console.log("My profile", user);

  return (
    <>
        <NavBar />
    </>
  );
}

export default Profile;