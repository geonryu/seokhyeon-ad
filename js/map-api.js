// // var mapOptions = {
// //     center: new naver.maps.LatLng(129.048436, 35.1682553),
// //     zoom: 15
// // };


// var mapOptions = new naver.maps.Marker({
//     center: new naver.maps.LatLng(129.048436, 35.1682553),
//     zoom: 15
// });
// var map = new naver.maps.Map('map', mapOptions);

const locations = [{
    place: "애드강츠비",
    lat: 129.048436,
    lng: 35.1682553
}, ];

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(129.048436, 35.1682553),
    zoom: 14
});

// for (var i = 0; i < locations.length; i++) {
//     var marker = new naver.maps.Marker({
//         map: map,
//         title: locations[i].place,
//         position: new naver.maps.LatLng(locations[i].lat, locations[i].lng),
//     });
// }