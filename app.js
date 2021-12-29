import { API_KEY } from "./config.js";

var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
script.async = true;

window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "f5ff370464d68721",
    center: { lat: 40.727939075765676, lng: -73.78924010674592 },
    zoom: 17,
  });

  const locations = [
    [
      "Push Fitness 💪",
      40.729189248028014,
      -73.78063216441802,
      6,
      "https://openmoji.org/data/color/svg/1F4AA.svg",
      "I only work out because I really, really like donuts 🍩",
      "188-10 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "Sup Thai Kitchen",
      40.7267077091399,
      -73.78928373558196,
      5,
      "https://openmoji.org/data/color/svg/1F35C.svg",
      "Out of the frying pan into the fire! -Thai Proverb",
      "178-19 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "Lulu Bakery",
      40.7265252676399,
      -73.78885035092621,
      4,
      "https://openmoji.org/data/color/svg/1F9C1.svg",
      "Cakes make everything better 🍰",
      "179-04/06 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "Fitoor Cafe",
      40.726691040556304,
      -73.7883477951065,
      2,
      "https://openmoji.org/data/color/svg/1F62E-200D-1F4A8.svg",
      "Dubbed the best hookah bar in Queens! 💨",
      "179-22 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "T.J. Maxx",
      40.725915840854306,
      -73.79021303558197,
      3,
      "https://openmoji.org/data/color/svg/1F6CD.svg",
      "Get the max for the minimum! 🎯",
      "176-60 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "Exxon",
      40.72613915408458,
      -73.78972340674592,
      1,
      "https://openmoji.org/data/color/svg/26FD.svg",
      "Put a tiger in your tank 🐅",
      "178-2 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "St John's University",
      40.722044404787646,
      -73.79420583558196,
      7,
      "https://openmoji.org/data/color/svg/1F431-200D-1F4BB.svg",
      "LETS GO RED STORM!!! ☄️",
      "8000 Utopia Pkwy",
      "Fresh Meadows, NY 11439",
    ],
    [
      "Cunningham Park",
      40.72913274143886,
      -73.77422853558197,
      8,
      "https://openmoji.org/data/color/svg/1F3A1.svg",
      "Tree huggers unite! 🌳",
      "196-10 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "US Post Office",
      40.72748069940079,
      -73.7859194509262,
      9,
      "https://openmoji.org/data/color/svg/1F48C.svg",
      "Delivering holiday cheer! 💌",
      "18204 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
  ];

  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];

    const image = {
      url: location[4],
      scaledSize: new google.maps.Size(50, 50),
    };

    const marker = new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      map,
      icon: image,
      title: location[0],
      zIndex: location[3],
      optimized: false,
    });

    const contentString =
      "<div>" +
      `<h1>${location[0]}</h1>` +
      `<h3>${location[5]}</h3>` +
      `<div>${location[6]}</div>` +
      `<div>${location[7]}</div>` +
      "</div>";

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      // infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  }
};

document.head.appendChild(script);
