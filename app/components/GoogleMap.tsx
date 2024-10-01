"use client"

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps"

export default function GoogleMap({ apiKey }: { apiKey: string }) {
  const position = { lat: 52.14101898225981, lng: -10.267886566957094 }

  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={position} defaultZoom={12} mapId="MAP">
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  )
}