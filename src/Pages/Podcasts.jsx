import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Common Components/Navbar/NavBar";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { setPodcasts } from "../Slices/podcastSlice";
import PodcastsCard from "../Components/Podcasts/PodcastsCard/PodcastsCard";
import InputComponent from "../Components/Common Components/Input/Input";

const PodcastsPage = () => {
  const dispatch = useDispatch();
  // podcasts Array
  const podcasts = useSelector((state) => state.podcasts.podcasts);

  const [search, setSearch] = useState("");

  // Getting the list of podcasts that are currently available
  useEffect(() => {
    // Adding podcast to podcastSlice
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(podcasts);
  var filteredPodcasts = podcasts.filter((item) =>
    item.title.trim().toLowercase().includes(search.trim().toLowerCase())
  );
  return (
    <>
      <NavBar />
      <div className="input-wrapper" style={{ marginTop: "2rem" }}>
        <h1>Discover Podcasts</h1>
        <InputComponent
          state={search}
          setState={setSearch}
          placeholder="Search By Title"
          type="text"
        />

        {filteredPodcasts.length > 0 ? (
          <div className="podcasts-flex" style={{marginTop: "2rem"}}>
            {filteredPodcasts.map((item) => {
              return (
                <PodcastsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  displayImg={item.displayImg}
                />
              );
            })}
          </div>
        ) : (
          <p>{search ? "Podcast Not Found" :"No Podcasts On The Platform"}</p>
        )}
      </div>
    </>
  );
};

export default PodcastsPage;
