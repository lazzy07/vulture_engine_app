import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import AvailableEngine from "../components/AvailableEngine";
import { VULTURE2_RELEASES_URL } from "../constants/urls";
import Ripple from "../svg/ripple.svg";

export default function DownloadScreen() {
  const [engineVersions, setEngineVersions] = useState<EngineItem[]>([]);
  const [loading, setLoading] = useState<string>("loading");

  useEffect(() => {
    Axios.get(VULTURE2_RELEASES_URL)
      .then((response) => {
        setLoading("done");
        const data = response.data;

        let versions: EngineItem[] = [];
        data.forEach((element: any) => {
          versions.push({
            version: element.tag_name,
            isInstalled: false,
          });
        });
        setEngineVersions(versions);
      })
      .catch((err) => {
        setLoading("error");
        console.log(err);
      });
  }, []);

  const renderLoading = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img width="10%" src={Ripple} alt="" />
        <p>Loading data... please wait...</p>
      </div>
    );
  };

  const renderError = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon style={{ fontSize: 55 }} icon={faExclamation} />
        <p style={{ padding: 50 }}>
          An error occured while fetching data, please check your internet
          connection and try again!
        </p>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div style={{ overflowY: "auto", height: "100%" }}>
        {engineVersions.map((ele, index) => {
          return <AvailableEngine item={ele} key={index} />;
        })}
      </div>
    );
  };

  const renderSwitch = (): JSX.Element => {
    switch (loading) {
      case "loading":
        return renderLoading();
      case "error":
        return renderError();
      default:
        return renderContent();
    }
  };

  return <div style={{ width: "100%", height: "100%" }}>{renderSwitch()}</div>;
}
