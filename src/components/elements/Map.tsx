// src/components/modules/GoogleMapEmbed.tsx
"use client";

import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface MapMarkerProps {
  id: string;
  position: google.maps.LatLngLiteral;
  label?: string;
  infoContent?: string;
}

interface GoogleMapEmbedProps {
  mapContainerStyle?: React.CSSProperties;
  center: google.maps.LatLngLiteral;
  zoom?: number;
  mapId?: string;
  markers?: MapMarkerProps[];
  options?: google.maps.MapOptions;
  apiKey: string;
  showDefaultUI?: boolean;
  showZoomControl?: boolean;
}

const DEFAULT_MAP_CONTAINER_STYLE: React.CSSProperties = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
};

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  mapContainerStyle = DEFAULT_MAP_CONTAINER_STYLE,
  center,
  zoom = 15,
  mapId,
  markers,
  options,
  apiKey,
  showDefaultUI = false,
  showZoomControl = true,
}) => {
  if (!apiKey) {
    console.error("Google Maps API Key is not provided via props.");
    return (
      <div style={mapContainerStyle} className="bg-gray-200 flex items-center justify-center text-gray-500 p-4 text-center">
        マップの読み込みに失敗しました。<br />APIキーが提供されていません。
      </div>
    );
  }

  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: !showDefaultUI,
    zoomControl: showZoomControl,
    ...options,
  };

  const [selectedMarker, setSelectedMarker] = React.useState<MapMarkerProps | null>(null);

  return (
    <LoadScript googleMapsApiKey={apiKey} loadingElement={<div>マップを読み込んでいます...</div>}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            label={marker.label}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>{selectedMarker.infoContent}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapEmbed;