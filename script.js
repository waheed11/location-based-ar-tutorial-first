window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
};

function staticLoadPlaces() {
   return [
       {
           name: 'edge1',
           location: {
               lat: 21.360474,
               lng: 39.663316,
           }
       },
       {
        name: 'edge2',
        location: {
            lat: 21.361217,
            lng: 39.663846,
        }
    },
    {
        name: 'edge3',
        location: {
            lat: 21.361996,
            lng: 39.664339,
        }
    },
    {
        name: 'edge4',
        location: {
            lat: 21.362836,
            lng: 39.665026,
        }
    },
    {
        name: 'edge5',
        location: {
            lat: 21.363515,
            lng: 39.665884,
        }
    },
    {
     name: 'edge6',
     location: {
         lat: 21.363927,
         lng: 39.666657,
     }
 },
 {
     name: 'edge7',
     location: {
         lat: 21.364266,
         lng: 39.667600,
     }
 },
 {
     name: 'edge8',
     location: {
         lat: 21.364606,
         lng: 39.669767,
     }
 },
 {
    name: 'testSound',
    location: {
        lat: 21.376414,
        lng: 39.788172,
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
