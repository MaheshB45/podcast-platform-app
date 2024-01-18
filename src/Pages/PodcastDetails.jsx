import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/Common Components/Navbar/NavBar";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import Button from "../Components/Common Components/Button/Button";

const PodcastDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [podcast, setPodcast] = useState({});

  console.log("ID", id);
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    try {
      const docRef = doc(db, "podcasts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPodcast({ id: id, ...docSnap.data() });
        toast.success("Podcast Found!");
      } else {
        console.log("No such Podcast!");
        toast.error("No such Podcast!");
        navigate("/pdcasts");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="input-wrapper" style={{ marginTop: "0rem" }}>
        {podcast.id && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: "1rem",
              }}
            >
              <h1 className="podcast-title-heading">{podcast.title}</h1>
              {podcast.createdBy == auth.currentUser.uid && (
                <Button
                  style={{ margin: 0, width: "200px !important" }}
                  text={"Create Episode"}
                  onClick={() => {
                    navigate(`/podcast/${id}/create-episode`);
                  }}
                />
              )}
            </div>

            <div className="banner-wrapper">
              <img src={podcast.bannerImg} />
            </div>
            <p className="podcast-desc">{podcast.description}</p>
            <h1 className="podcast-title-heading">Episodes</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default PodcastDetailsPage;
