//google maps
const data = [
  {
    name: "Stará pošta",
    content: "Masarykovo Náměstí 87 <br>Bělá pod Bezdězem <br> 29421",
    placeId: "ChIJM_nqbExRCUcRDH3qpQT_YCk",
    position: {
      lat: 50.501834,
      lng: 14.80141,
    },
  },
  {
    name: "Vostrov",
    content: "295 01 Mnichovo Hradiště",
    placeId: "ChIJdWGOSw1SCUcRBDNIGlsb21s",
    position: {
      lat: 50.536739,
      lng: 14.964506,
    },
  },
  {
    name: "TURN OFF CLUB",
    content: "Jiráskova 97<br>Turnov",
    placeId: "ChIJKVOe9JizDkcRwIz23y-psmo",
    position: {
      lat: 50.588135,
      lng: 15.156378,
    },
  },
  {
    name: "AZYL pivní bar",
    content: "Široká 302<br>Liberec",
    placeId: "ChIJ6_CcFpg2CUcRAQHkg7v9C2M",
    position: {
      lat: 50.769485,
      lng: 15.050407,
    },
  },
  {
    name: "Hospoda U Sedláka",
    content: "Ledce 130<br>294 47 Ledce",
    placeId: "ChIJvxa5ZDEDDEcRXkBNPxokyGE",
    position: {
      lat: 50.353337,
      lng: 15.080516,
    },
  },
  {
    name: "Pivní sen",
    content: "náměstí Republiky 465<br>Mladá Boleslav",
    placeId: "ChIJlVPZsbRVCUcRy2FbjH2EMtY",
    position: {
      lat: 50.411334,
      lng: 14.916385,
    },
  },
  {
    name: "Gurmán MB",
    content: "Staroměstské náměstí 13<br>Mladá Boleslav",
    placeId: "ChIJJ5acNb5VCUcRdBURvRx9lT0",
    position: {
      lat: 50.409875,
      lng: 14.902007,
    },
  },
  {
    name: "Altán café-grill-bar",
    content: "Na výstavišti 115/1,<br> Mladá Boleslav",
    placeId: "ChIJ59PteLlVCUcRGNmA6fcm3Po",
    position: {
      lat: 50.41563,
      lng: 14.907986,
    },
  },
  {
    name: "Clock café",
    content: "Českobratrské nám. 57/3<br>Mladá Boleslav",
    placeId: "ChIJs5rKL7lVCUcRJ7IIEhIOrBY",
    position: {
      lat: 50.414015,
      lng: 14.904826,
    },
  },
  {
    name: "Zahrada Hradiště",
    content: "Palackého 236<br>Mnichovo Hradiště",
    placeId: "ChIJvTZm2UJSCUcRb313YSt9XXQ",
    position: {
      lat: 50.523752,
      lng: 14.973604,
    },
  },
  {
    name: "Hostinec Malý Růžek",
    content: "Škroupova ulice 726<br>Hradec Králové",
    placeId: "ChIJM_Ey-CUrDEcRQ2GojdMP2Iw",
    position: {
      lat: 50.214883,
      lng: 15.824403,
    },
  },
  {
    name: "BARVÍRNA BAR",
    content: "Barvířská ulice 33/4<br>Liberec",
    placeId: "ChIJkc_U2Zg2CUcROD6TKSVbWOM",
    position: {
      lat: 50.214883,
      lng: 15.824403,
    },
  },
]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 50.463051,
      lng: 15.309961,
    },
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,

    zoom: window.innerWidth < 1000? 8: 10,
    styles: [
      {
        featureType: "landscape",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 60,
          },
        ],
      },
      {
        featureType: "road.local",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 40,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.province",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            visibility: "on",
          },
          {
            lightness: 30,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ef8c25",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b6c54c",
          },
          {
            lightness: 40,
          },
          {
            saturation: -40,
          },
        ],
      },
      {},
    ],
  })
  const infowindow = new google.maps.InfoWindow()
  let markers = data.map((item) => {
    const marker = new google.maps.Marker({
      map,
      name: item.name,
      content: item.content,
      position: item.position,
      icon: "layout/beericon.png",
      placeId: item.placeId,
      loc: item.position,
    })
    google.maps.event.addListener(marker, "click", () => {
      let link = `<br><a target=”_blank” href=https://www.google.com/maps/search/?api=1&query=${marker.loc.lat},${marker.loc.lng}&query_place_id=${marker.placeId}><img class='navigate' src="layout/navigation.png" /></a>`
      infowindow.setContent(
        "<div><strong>" +
          marker.name +
          "</strong><br>" +
          marker.content +
          "<br>" +
          link +
          "</div>"
      )

      infowindow.open(map, marker)
      console.log(infowindow)
    })
    return marker
  })
}
