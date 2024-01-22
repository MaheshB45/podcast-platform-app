import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import InputComponent from "../Common Components/Input/Input";
import FileInput from "../Common Components/Input/FileInput";
import Button from "../Common Components/Button/Button";
import Loader from "../Common Components/Loader/Loader";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const CreatePodcastForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [displayImg, setDisplayImg] = useState();
  const [bannerImg, setBannerImg] = useState();

  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();
  //const dispatch = useDispatch();

  const handleSubmit = async () => {
    
    if (title && desc && displayImg && bannerImg) {
        setLoading(true);
        // 1. Upload files -> get downloadable links
        try {
            const bannerImageRef = ref(
                storage,
                `podcasts/${auth.currentUser.uid}/${Date.now()}`
            );
            await uploadBytes(bannerImageRef, bannerImg);
    
            const bannerImageUrl = await getDownloadURL(bannerImageRef);

            const displayImageRef = ref(
                storage,
                `podcasts/${auth.currentUser.uid}/${Date.now()}`
            );
            await uploadBytes(displayImageRef, displayImg);
    
            const displayImageUrl = await getDownloadURL(displayImageRef);

            const podcastData = {
                title: title,
                description: desc,
                bannerImg: bannerImageUrl,
                displayImg: displayImageUrl,
                createdBy: auth.currentUser.uid,
            };

            await addDoc(collection(db, "podcasts"), podcastData);
            setTitle("");
            setDesc("");
            setBannerImg(null);
            setDisplayImg(null);

            toast.success("Podcast Created!");
            setLoading(false);
        } catch (e){
            toast.error(e.message);
            console.log(e);
            setLoading(false);
        }

    } else {
        toast.error("Please Enter All values");
        setLoading(false);
    }
  };

  const displayImgHandle = (file) => {
    setDisplayImg(file);
  };

  const bannerImgHandle = (file) => {
    setBannerImg(file);
  };

  return (
    <>
      <InputComponent
        state={title}
        setState={setTitle}
        placeholder="Title"
        type="text"
        required={true}
      />

      <InputComponent
        state={desc}
        setState={setDesc}
        placeholder="Description"
        type="text"
        required={true}
      />
      <FileInput
        accept={"image/*"}
        id="display-image-input"
        fileHandleFnc={displayImgHandle}
        text={"Display Image Upload"}
      />

      <FileInput
        accept={"image/*"}
        id="banner-image-input"
        fileHandleFnc={bannerImgHandle}
        text={"Banner Image Upload"}
      />

      <Button
        text={loading ? <Loader /> : "Create Podcast"}
        disabled={loading}
        onClick={handleSubmit}
      />
    </>
  );
};

export default CreatePodcastForm;
