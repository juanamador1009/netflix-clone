import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const videoPath = "https://www.youtube.com/embed/";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideoData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        onClick={() => {
          navigate("/");
        }}
        alt=""
      />
      <iframe
        width={"90%"}
        height={"90%"}
        src={videoPath + videoData.key}
        title="trailer"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{videoData.published_at.slice(0, 10)}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </div>
  );
};

export default Player;
