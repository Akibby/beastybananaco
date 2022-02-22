import react from "react";
import Card from "./Card";
import styles from "../styles/Home.module.css";

const CardContainer = (props) => {
  const noAuthDestinations = [
    {
      id: 1,
      localLink: "http://192.168.1.184:9091/",
      link: "https://plex.beastybanana.co",
      title: "Plex",
      description: "Stream a wide variety of media",
    },
    {
      id: 2,
      localLink: "http://192.168.1.184:9091/",
      link: "https://request.beastybanana.co",
      title: "Request",
      description: "Request a movie or TV show",
    },
  ];

  const authDestinations = [
    {
      id: 1,
      localLink: "http://192.168.1.184:9091/",
      link: "https://plex.beastybanana.co",
      title: "Plex",
      description: "Stream a wide variety of media",
    },
    {
      id: 2,
      localLink: "http://192.168.1.184:9091/",
      link: "https://request.beastybanana.co",
      title: "Request",
      description: "Request a movie or TV show",
    },
    {
      id: 3,
      localLink: "http://192.168.1.184:9091/",
      link: "https://manage.beastybanana.co",
      title: "Manage",
      description: "Manage containers with Portainer",
    },
    {
      id: 4,
      localLink: "http://192.168.1.184:9091/",
      link: "https://sonarr.beastybanana.co",
      title: "Sonarr",
      description: "Manage TV requests with Sonarr",
    },
    {
      id: 5,
      localLink: "http://192.168.1.184:9091/",
      link: "https://radarr.beastybanana.co",
      title: "Radarr",
      description: "Manage movie requests with Radarr",
    },
    {
      id: 6,
      localLink: "http://192.168.1.184:9091/",
      link: "http://192.168.1.184:9091/",
      title: "Transmission",
      description: "Check the status of your downloads",
    },
  ];
  if (props.content === "auth") {
    return (
      <div className={styles.grid}>
        {authDestinations.map((dest) => (
          <Card key={dest.id} cardList={dest} />
        ))}
      </div>
    );
  }
  return (
    <div className={styles.grid}>
      {noAuthDestinations.map((dest) => (
        <Card key={dest.id} cardList={dest} />
      ))}
    </div>
  );
};

export default CardContainer;
