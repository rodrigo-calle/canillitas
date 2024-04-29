import { GoogleMap, Marker } from "@react-google-maps/api";
import { plusCodes } from "../data/plusCodes";
import { useEffect, useState } from "react";

const MapWithPlusCodes = () => {
  const [markers, setMarkers] = useState([]);

  // Array con los Plus Codes

  useEffect(() => {
    // Función para obtener la ubicación de un Plus Code y agregar un marcador
    const obtenerUbicacionYAgregarMarcador = (plusCode) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: plusCode }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          const location = results[0].geometry.location;
          setMarkers((prevMarkers) => [
            ...prevMarkers,
            { position: location, title: plusCode },
          ]);
        } else {
          console.error(
            "Error al obtener la ubicación para el Plus Code:",
            plusCode
          );
        }
      });
    };

    // Iterar sobre los Plus Codes y obtener la ubicación para cada uno
    plusCodes.forEach(obtenerUbicacionYAgregarMarcador);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{ height: "400px", width: "100%" }}
      zoom={12}
      center={{ lat: -12.0561, lng: -77.0802 }}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} title={marker.title} />
      ))}
    </GoogleMap>
  );
};

export default MapWithPlusCodes;
