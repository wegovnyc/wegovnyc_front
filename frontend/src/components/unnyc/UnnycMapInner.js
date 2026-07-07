'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mapMarkers, mapLegend } from '@/data/unnyc';

/**
 * Inner Leaflet map component for the UNNYC locations map.
 *
 * Renders a CARTO Light tile layer with coloured circle markers for
 * UN (blue), NYC (gold), and NYS (navy) locations. The map is
 * wrapped by UnnycMap.js which handles dynamic import (SSR: false).
 */

const COLORS = {
  un: '#4B92DB',
  nyc: '#D4A843',
  nys: '#2A3D63',
};

export default function UnnycMapInner() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      center: [40.73, -73.99],
      zoom: 13,
    });

    mapRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds();

    mapMarkers.forEach((m) => {
      const color = COLORS[m.type] || COLORS.un;

      const icon = L.divIcon({
        className: 'unnyc-map-marker',
        html: `<span style="
          display:block;
          width:14px;
          height:14px;
          border-radius:50%;
          background:${color};
          border:2px solid #fff;
          box-shadow:0 1px 4px rgba(0,0,0,0.3);
        "></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      const marker = L.marker([m.lat, m.lng], { icon }).addTo(map);

      marker.bindPopup(
        `<div class="unnyc-map-popup">
          <strong>${m.label}</strong>
          ${m.desc ? `<p>${m.desc}</p>` : ''}
        </div>`
      );

      bounds.extend([m.lat, m.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.3));
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="unnyc-map-wrapper">
      <div ref={containerRef} className="unnyc-map-container" style={{ height: 480 }} />

      {mapLegend && mapLegend.length > 0 && (
        <div className="unnyc-map-legend">
          {mapLegend.map((item) => (
            <div key={item.key} className="unnyc-map-legend-item">
              <span
                className="unnyc-map-legend-swatch"
                style={{ backgroundColor: COLORS[item.key] || '#888' }}
              />
              <span className="unnyc-map-legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
