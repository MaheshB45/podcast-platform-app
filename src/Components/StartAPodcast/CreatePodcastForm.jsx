import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import InputComponent from "../Common Components/Input/Input";
import FileInput from "../Common Components/Input/FileInput";
import Button from "../Common Components/Button/Button";
import { toast } from "react-toastify";

const CreatePodcastForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [displayImg, setDisplayImg] = useState();
  const [bannerImg, setBannerImg] = useState();

 // const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();
  //const dispatch = useDispatch();

  const handleSubmit = () => {
    toast.success("Handling Form");
    if (title && desc && displayImg && bannerImg) {
        // 1. Upload files -> get downloadable links

    } else {
        toast.error("Please Enter All values")
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
        
        onClick={handleSubmit}
      />
    </>
  );
};

export default CreatePodcastForm;
