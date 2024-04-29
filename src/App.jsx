// import "./App.css";
import { LoadScript } from "@react-google-maps/api";
import MapWithPlusCodes from "./components/maps";

function App() {
  // eslint-disable-next-line no-undef
  const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        Mapa Canillita
      </h1>
      <div style={{ height: "900px", width: "100%" }}>
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
          <MapWithPlusCodes />
        </LoadScript>
      </div>
    </>
  );
}

export default App;
