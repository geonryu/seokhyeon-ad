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
    lat: 35.1682419,
    lng: 129.0484250
}, ];

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.1682419, 129.0484250),
    zoom: 15,
    title: "애드강츠비"
});

for (var i = 0; i < locations.length; i++) {
    var marker = new naver.maps.Marker({
        map: map,
        title: locations[i].place,
        position: new naver.maps.LatLng(locations[i].lat, locations[i].lng),
    });
}