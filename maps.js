// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 40.7128, lng: -74.0060 },
//       zoom: 13,
//     });
  
//     // ... rest of your map initialization code
//   }
  
//   function handleUserInput() {
//     // ... code to handle user input
//   }
  
//   function geocodeLocation(location) {
//     // ... code to geocode the location
//   }
  
//   function addMarkerToMap(lat, lng) {
//     // ... code to add a marker to the map
//   }



// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 40.7128, lng: -74.0060 },
//       zoom: 13,
//     });
  
//     const geocoder = new google.maps.Geocoder();
  
//     document.getElementById("location-input").addEventListener("input", (event) => {
//       geocodeLocation(event.target.value);
//     });
  
//     function geocodeLocation(location) {
//       if (location.trim() === "") {
//         return; // Prevent geocoding empty input
//       }
  
//       geocoder.geocode({ address: location }, (results, status) => {
//         if (status === "OK") {
//           const lat = results[0].geometry.location.lat();
//           const lng = results[0].geometry.location.lng();
//           const marker = new google.maps.Marker({
//             position: { lat, lng },
//             map: map,
//           });
//           map.setCenter({ lat, lng });
//         } else {
//           alert("Geocoding failed: " + status);
//         }
//       });
//     }
//   }


// let map;

// async function initMap() {

//     // const map = ''

//     const displayDiv = document.getElementById('display');
//     displayDiv.innerHTML ='<gmp-map center="37.4220656,-122.0840897" zoom="10" map-id="DEMO_MAP_ID" style="height: 400px"></gmp-map>'
//   // The location of Uluru
// //   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
// //   const { Map } = await google.maps.importLibrary("maps");
// //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
// //   map = new Map(document.getElementById("map"), {
// //     zoom: 4,
// //     center: position,
// //     mapId: "DEMO_MAP_ID",
// //   });

// //   // The marker, positioned at Uluru
// //   const marker = new AdvancedMarkerElement({
// //     map: map,
// //     position: position,
// //     title: "Uluru",
// //   });
// }

// initMap();


function createMap() {
    const mapDiv = document.createElement('div');
    mapDiv.id ='map'
}


let map;

async function initMap() {
  const displayDiv = document.getElementById('display');
  const mapDiv = document.getElementById('none');
  if (mapDiv) {
    mapDiv.id = 'map';
  }
//   mapDiv.innerHTML=""
 
//   const mapDiv = document.create
    // displayDiv.innerHTML ='<gmp-map id="map" center="37.4220656,-122.0840897" zoom="10" map-id="DEMO_MAP_ID" style="height: 400px"></gmp-map>'

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { PlacesService } = await google.maps.importLibrary("places");

//   Create the map
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 37.4220656, lng: -122.0840897 },
  });
  map.setMapId("finder")

  // Create search bar elements
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter city name';

  const typeSelect = document.createElement('select')
  let options = ['restaurants','malls','parks', 'National Parks', 'Museums', 'Aquariums']

  typeSelect.placeholder = 'type'
  for (let option of options ){
    const op = document.createElement('option')
    op.value=`${option}`
    op.innerText =`${option}`
    typeSelect.appendChild(op)
  }
  typeSelect.id='select'


  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';

  // Add search bar elements to options div
  const optionsDiv = document.getElementById('options');
  optionsDiv.appendChild(searchInput);
  optionsDiv.appendChild(searchButton);
  optionsDiv.appendChild(typeSelect)
  findPlaces()

  
  //* For City
  // Handle search button click
  searchButton.addEventListener('click', async () => {
    const cityName = searchInput.value.trim();
    if (!cityName) return; // Handle empty search

    const placeService = new PlacesService(map);
    const request = {
      query: cityName,
    };

    try {
      const response = await placeService.textSearch(request);
      console.log(response)
      const place = response.results[0]; // Get first result
      if (!place) {
        alert('City not found!');
        return;
      }

      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
      });

      map.setCenter(place.geometry.location); // Center map on marker
      console.log(map)
      // Append the map element to the display div
      displayDiv.appendChild(map);

    

    } catch (error) {
      console.error('Error searching for city:', error);
    }
  });
}

function removeMap() {
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      mapDiv.remove();
    }
}



async function findPlaces() {
    const { Place } = await google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const request = {
      textQuery: "Tacos in Mountain View",
      fields: ["displayName", "location", "businessStatus"],
      includedType: "restaurant",
      locationBias: { lat: 37.4161493, lng: -122.0812166 },
      isOpenNow: true,
      language: "en-US",
      maxResultCount: 8,
      minRating: 3.2,
      region: "us",
      useStrictTypeFiltering: false,
    };
    //@ts-ignore
    const { places } = await Place.searchByText(request);
  
    if (places.length) {
      console.log(places);
  
      const { LatLngBounds } = await google.maps.importLibrary("core");
      const bounds = new LatLngBounds();
  
      // Loop through and get all the results.
      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });
  
        bounds.extend(place.location);
        console.log(place);
      });
      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  }
  
  