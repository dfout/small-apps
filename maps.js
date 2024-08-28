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
//   const { PlacesService } = await google.maps.importLibrary("places");

//   Create the map
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 37.4220656, lng: -122.0840897 },
  });
  map.setMapId("finder")

//   function removeMarkers() {
//     if (map.getMarkers()) {
//       // Clear existing markers from the map
//       for (const marker of map.getMarkers()) {
//         marker.setMap(null);
//       }
//     }
//   }

  // Create search bar elements
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter city name';

//   const typeSelect = document.createElement('select')
//   let options = ['restaurants','malls','parks', 'National Parks', 'Museums', 'Aquariums', 'tacos']

//   typeSelect.placeholder = 'type'
//   for (let option of options ){
//     const op = document.createElement('option')
//     op.value=`${option}`
//     op.innerText =`${option}`
//     typeSelect.appendChild(op)
//   }
//   typeSelect.id='select'
  

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.type = 'submit'

  // Add search bar elements to options div
  const optionsDiv = document.getElementById('options');
  optionsDiv.appendChild(searchInput);
  optionsDiv.appendChild(searchButton);
//   optionsDiv.appendChild(typeSelect)
//   let selectedType;
  
//   typeSelect.addEventListener('change', (event) => {
//     selectedType = event.target.value;
//     // Store the selected type in a variable or object for later use
//     console.log(`Selected type: ${selectedType}`);
//   });
  
  //* For City
  // Handle search button click
  searchButton.addEventListener('click', async () => {
    const cityName = searchInput.value.trim();
    if (!cityName) return; // Handle empty search

    // const placeService = new PlacesService(map);
    // const request = {
    //   query: cityName,
    // };
    

    try {
       

       var address = cityName;

       var geocoder = new google.maps.Geocoder();
       geocoder.geocode({
         'address': address
       }, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
            console.log(results)
           var Lat = results[0].geometry.location.lat();
           var Lng = results[0].geometry.location.lng();
           findPlaces(cityName, Lat, Lng)
         }
        })


        
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



async function findPlaces(cityName, Lat, Lng) {
    console.log(Lat, Lng)
    const { Place } = await google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const { LatLngBounds } = await google.maps.importLibrary("core");

    // removeMarkers()
    
    map.setCenter({ lat: 37.7749, lng: -122.4194 });
    const request = {
      textQuery: `Tacos in ${cityName}`,
      fields: ["displayName", "location", "businessStatus",],
      includedType: "restaurant",
      locationBias: { lat: Lat, lng: Lng },
      isOpenNow: true,
      language: "en-US",
      maxResultCount: 8,
      minRating: 3.2,
      region: "us",
      useStrictTypeFiltering: false,
    };
    //@ts-ignore
    const { places } = await Place.searchByText(request);
    const contDiv = document.getElementById('container')

    let placesCont;

    if(document.getElementById('places-cont')){
        placesCont = document.getElementById('places-cont')
        placesCont.innerHTML=""

    }else{
        placesCont = document.createElement('ul')
        placesCont.id='places-cont'
    }

    if (places.length) {
      
  
      
      const bounds = new LatLngBounds();
  
      // Loop through and get all the results.
      places.forEach((place) => {
        
        getPlaceDetails(Place,place,placesCont)
        bounds.extend(place.location);

        

        
        });
        contDiv.appendChild(placesCont)
      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  }
  
  


async function getPlaceDetails(Place,place,placesCont) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // Use place ID to create a new Place instance.
    const placeInstance = new Place({
      id: place.id,
      requestedLanguage: "en", // optional
    });
  
    // Call fetchFields, passing the desired data fields.
    await placeInstance.fetchFields({
      fields: ["displayName", "formattedAddress", "location"],
    });
    // Log the result
    console.log(placeInstance.displayName);
    console.log(placeInstance.formattedAddress);
  
    // Add an Advanced Marker
    const marker = new AdvancedMarkerElement({
      map,
      position: placeInstance.location,
      title: placeInstance.displayName,
    });
    
    let listItem = document.createElement('li')
    listItem.innerText=`${placeInstance.displayName}, ${placeInstance.formattedAddress}`
    placesCont.appendChild(listItem)
  }