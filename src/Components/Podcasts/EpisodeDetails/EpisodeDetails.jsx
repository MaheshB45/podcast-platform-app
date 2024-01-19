import Button from "../../Common Components/Button/Button";


// eslint-disable-next-line react/prop-types
const EpisodeDetails = ({ index, title, description, audioFile, onClick }) => {
  return (
    <div style={{width: "100%"}}>
        <h1 style={{textAlign: "left", marginBottom: 0}}>{index}. {title}</h1>
        <p style={{marginLeft: "1.5rem"}} className="podcast-desc">{description}</p>
        <Button text={"Play"} onClick={() => onClick(audioFile)} width={"200px"}/>
    </div>
  )
}

export default EpisodeDetails;