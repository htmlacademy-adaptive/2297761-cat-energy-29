ymaps.ready(init);
const geoObjects = [];
let MAP_COORDS_CENTER;
const marks = [
  {
    latitude: 59.93855,
    longitude: 30.3225,
    hintContent: '<div class="map__hint">Театр</div>'
  }
]
let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (mobile) {
  MAP_COORDS_CENTER = [59.93855, 30.3225];
} else {
  MAP_COORDS_CENTER = [59.93855, 30.3225]
};


function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    center: MAP_COORDS_CENTER,
    zoom: 16
  });

  // window.addEventListener('resize', function () {
  //   console.log('RESIZE');
  //   // myMap.container.fitToViewport([false])
  // })

  marks.forEach(function (mark, i) {
    geoObjects.push(new ymaps.Placemark([mark.latitude, mark.longitude], {
      hintContent: mark.hintContent
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-logo.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-56, -106]

    }))
  })

  const clusterer = new ymaps.Clusterer()

  myMap.geoObjects.add(clusterer)
  clusterer.add(geoObjects)
}
