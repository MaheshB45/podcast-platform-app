import NavBar from "../Components/Common Components/Navbar/NavBar";
import CreatePodcastForm from "../Components/StartAPodcast/CreatePodcastForm";


const CreateAPodcast = () => {
  return (
    <>
        <NavBar />
        <div className="input-wrapper">
            <h1>Create A Podcast</h1>
            <CreatePodcastForm />
        </div>
    </>
  )
}

export default CreateAPodcast;