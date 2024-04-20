import React from 'react';
// const API_KEY = "AIzaSyDUFgczxfvvxR2-Bgqk0wPhWt51p_mtKEA";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Location_Lat = 40.7565;
const Location_Lng = -102.9716;
const StoreLocationMarker = ({ text }) => <div>{text}</div>;

const MapGoogleApi = ({ lat, lng }) => {
  const mapOptions = {
    center: { lat :Location_Lat, lng:Location_Lng },
    zoom: 15
  };

  return (
    <MapContainer className='mapContainer' center={[Location_Lat, Location_Lng]} zoom={15} style={{ height: '', width: '100%' }}>
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[Location_Lat, Location_Lng]}>
      <Popup>
        My Store
      </Popup>
    </Marker>
  </MapContainer>
  );
  
}

export default MapGoogleApi;
