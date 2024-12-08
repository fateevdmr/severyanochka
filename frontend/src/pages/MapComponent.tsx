import React, { useEffect, useRef } from 'react';
import style from '../Styles/map.module.css';

declare global {
  interface Window {
    ymaps: any;
  }
}

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const storeLocation = [59.938784, 30.315868];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ymaps.ready(init);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const init = () => {
    const map = new window.ymaps.Map(mapRef.current, {
      center: storeLocation,
      zoom: 15
    });

    const storePlacemark = new window.ymaps.Placemark(storeLocation, {
      balloonContent: 'Магазин Северяночка'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });
    map.geoObjects.add(storePlacemark);

    const routeButton = new window.ymaps.control.Button({
      data: { content: "Построить маршрут" },
      options: { selectOnClick: false }
    });

    routeButton.events.add('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            buildRoute(map, userLocation, storeLocation);
          },
          (error) => {
            console.error('Ошибка получения геолокации:', error);
            alert('Не удалось определить ваше местоположение');
          }
        );
      } else {
        alert('Ваш браузер не поддерживает геолокацию');
      }
    });

    map.controls.add(routeButton);

    const openInYandexButton = new window.ymaps.control.Button({
      data: { content: "Открыть в Яндекс.Картах" },
      options: { selectOnClick: false }
    });

    openInYandexButton.events.add('click', () => {
      const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${storeLocation[0]},${storeLocation[1]}`;
      window.open(yandexMapsUrl, '_blank');
    });

    map.controls.add(openInYandexButton);
  };

  const buildRoute = (map: any, from: number[], to: number[]) => {
    map.geoObjects.each((obj: any) => {
      if (obj instanceof window.ymaps.multiRouter.MultiRoute) {
        map.geoObjects.remove(obj);
      }
    });

    const multiRoute = new window.ymaps.multiRouter.MultiRoute({
      referencePoints: [from, to],
      params: {
        routingMode: 'auto'
      }
    }, {
      boundsAutoApply: true,
      wayPointStartIconColor: "#70C05B",
      wayPointFinishIconColor: "#70C05B",
      routeActiveStrokeColor: "#70C05B",
      routeActiveStrokeWidth: 4
    });

    map.geoObjects.add(multiRoute);
  };

  return (
    <div className={style.mapContainer}>
      <div className={style.mapWrapper}>
        <div ref={mapRef} className={style.map}></div>
      </div>
      <div className={style.mapInfo}>
        <h3>Как добраться</h3>
        <p>Адрес: Санкт-Петербург, Невский проспект, 1</p>
        <p>Режим работы: 10:00 - 22:00</p>
        <div className={style.mapButtons}>
          <button 
            className={style.routeButton}
            onClick={() => {
              const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${storeLocation[0]},${storeLocation[1]}`;
              window.open(yandexMapsUrl, '_blank');
            }}
          >
            Открыть в Яндекс.Картах
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
