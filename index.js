function updatemap() {
  console.log("Updating map with realtime data");
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      // console.log(rsp.data)
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        if (cases > 255) {
          color = "white";
        } else {
          color = "blue";
        }

        // Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 2000;
setInterval(updatemap, interval);
