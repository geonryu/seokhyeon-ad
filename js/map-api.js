var mapOptions = {
    center: new naver.maps.LatLng(35.1578510, 129.0498801),
    zoom: 50
};

var marker = new naver.maps.Marker({
    center: new naver.maps.LatLng(35.1578510, 129.0498801),
    map: map
});

var map = new naver.maps.Map('map', mapOptions);
