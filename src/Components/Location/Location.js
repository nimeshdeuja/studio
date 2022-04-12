import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { LocationStyle } from "./LocationStyle";
import { useWindowSize } from "../Shared/WindowSize";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 51.51233,
  lng: -0.12711,
};

export const Location = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "Use API KEY",
  });

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
              {
                lightness: "-100",
              },
              {
                color: "#ffdac9",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#ffcab1",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffcab1",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                lightness: 100,
              },
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                visibility: "on",
              },
              {
                lightness: 700,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#92e1dd",
              },
            ],
          },
        ],
      }}
    ></GoogleMap>
  );
  const { width } = useWindowSize();
  return (
    <LocationStyle titlePos={width}>
      <h2>
        <b>Location</b>
        <span>12 Upper st. Martin’s Lane WC2H 9FB, London</span>
      </h2>
      {isLoaded ? renderMap() : null}
    </LocationStyle>
  );
};
