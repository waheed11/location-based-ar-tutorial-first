window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'edge1',
           location: {
               lat: 21.376923,
               lng: 39.788834,
           }
       },
       {
        name: 'edge2',
        location: {
            lat: 21.376911,
            lng: 39.788599,
        }
    },
    {
        name: 'edge3',
        location: {
            lat: 21.376402,
            lng: 39.788674,
        }
    },
    {
        name: 'edge4',
        location: {
            lat: 21.376412,
            lng: 39.788910,
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
      model.setAttribute('width', '30');
      model.setAttribute('height', '30');
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}
