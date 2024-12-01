import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import style from "../Styles/MapComponent.module.css";

interface Point {
  id: number;
  title: string;
  description: string;
  coordinates: [number, number];
}

const MapComponent: React.FC = () => {
  const points: Point[] = [
    {
      id: 1,
      title: "Жми!",
      description:
        "Мы находимся в поселке п.Щельяюр рядом со строительным магазином у памятника Ленина",
      coordinates: [55.7558, 37.6173],
    },
    {
      id: 2,
      title: "Жми!",
      description:
        "Мы находимся в поселке д.Вертеп рядом с озером у Лебяжего гнезда",
      coordinates: [59.9343, 30.3351],
    },
    {
      id: 3,
      title: "Жми!",
      description: "Мы находимся в поселке с.Краснобор",
      coordinates: [56.8389, 60.6057],
    },
    {
      id: 4,
      title: "Жми!",
      description: "Мы находимся в поселке д.Диюр",
      coordinates: [48.8566, 2.3522],
    },
  ];

  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  return (
    <div>
      <div className={style.mapContainer}>
        <MapContainer
          center={[55.7558, 37.6173]}
          zoom={4}
          className={style.mapContainer}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {points.map((point) => (
            <Marker key={point.id} position={point.coordinates}>
              <Popup>
                <strong>{point.title}</strong>
                <p>{point.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className={style.buttonContainer}>
        {points.map((point) => (
          <button
            key={point.id}
            className={style.button}
            onClick={() => setSelectedPoint(point)}
          >
            {point.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
