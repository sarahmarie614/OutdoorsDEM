//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1Ijoic2FyYWhtYXJpZTYxNCIsImEiOiJja2hvOWZxYXQwM3J4MnlwNWY4MGk5NzQ3In0.lZfdrMvCfugjFeMw7L_0Og' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'sarahmarie614/ckho9ulwb1mfi19luj4dengz8', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [29.59, -82.08],//Coordinated to center the map
        zoom: 12, //zoom level
        layers:customeBasemap //basemap
    });
    
};

//calling the funcation
$(document).ready(createMap);