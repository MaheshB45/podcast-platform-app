import { useSelector } from "react-redux";
import NavBar from "../Components/Common Components/Navbar/NavBar";


const Profile = () => {
    const user = useSelector((state) => state.user.user);

    console.log("My profile", user);

  return (
    <>
        <NavBar />
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
    </>
  );
}

export default Profile;