window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'edge1',
           location: {
               lat: 21.376566,
               lng: 39.788325,
           }
       },
       {
        name: 'edge2',
        location: {
            lat: 21.376366,
            lng: 39.788368,
        }
    },
    {
        name: 'edge3',
        location: {
            lat: 21.376381,
            lng: 39.788485,
        }
    },
    {
        name: 'edge4',
        location: {
            lat: 21.376561,
            lng: 39.788437,
        }
    }
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-image');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('src', './assets/map-marker.png');
      // model.setAttribute('name', place.name);
      // model.setAttribute('rotation', '0 180 0');
     //  model.setAttribute('animation-mixer', '');
      // model.setAttribute('scale', '200, 200');
      model.setAttribute('width', '10');
      model.setAttribute('height', '10');
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}
