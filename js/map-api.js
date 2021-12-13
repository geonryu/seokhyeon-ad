// var mapOptions = {
//     center: new naver.maps.LatLng(129.048436, 35.1682553),
//     zoom: 15
// };


var marker = new naver.maps.Marker({
    center: new naver.maps.LatLng(129.048436, 35.1682553),
    map: map,
    zoom: 15
});
var map = new naver.maps.Map('map', marker);