import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { IoMdClose } from 'react-icons/io'

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_TOKEN

interface MapPopupProps {
  onClose: () => void
  latitude: number
  longitude: number
  userImage: string
}

export const MapPopup = ({
  onClose,
  latitude,
  longitude,
  userImage,
}: MapPopupProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 5,
    })

    const markerContainer = document.createElement('div')
    markerContainer.className = 'flex flex-col items-center'
    const imageElement = document.createElement('div')
    imageElement.className = 'w-12 h-12 rounded-full bg-cover bg-no-repeat'
    imageElement.style.backgroundImage = `url(${userImage})`
    const arrowElement = document.createElement('div')
    arrowElement.className =
      'w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black mt-1 transform rotate-180'
    markerContainer.appendChild(imageElement)
    markerContainer.appendChild(arrowElement)

    new mapboxgl.Marker({ element: markerContainer })
      .setLngLat([longitude, latitude])
      .addTo(mapRef.current)

    return () => mapRef.current?.remove()
  }, [latitude, longitude, userImage])

  return (
    <div className="fixed inset-0 z-50 w-full">
      <div
        className="absolute inset-0 bg-black opacity-40 z-60 "
        onClick={onClose}
      />
      <div className="w-full h-full sm:w-120 sm:h-120 p-5.5 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-70  shadow-md absolute bg-white">
        <IoMdClose
          className="absolute top-1 right-1 hover:text-gray-800 cursor-pointer w-6 h-6 z-80"
          onClick={onClose}
        />
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>
    </div>
  )
}
