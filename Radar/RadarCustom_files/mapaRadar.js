$(document).ready(function () {

    //var layerOSM = L.tileLayer('https://mt.google.com/vt/lyrs=r&f=q&x={x}&y={y}&z={z}&s=Gal&apistyle=s.t%3A3|s.e%3Ag|p.v%3Aoff,s.t%3A3|s.e%3Al|p.v%3Aoff,s.t%3A2|s.e%3Al|p.v%3Aoff', {
    var layerOSM = L.tileLayer('https://mt.google.com/vt/lyrs=r,traffic&f=q&x={x}&y={y}&z={z}&s=Gal&apistyle=s.t%3A3|s.e%3Al|p.v%3Aoff,s.t%3A2|s.e%3Al|p.v%3Aoff', {
        attribution: '',
        minZoom: 8,
        maxZoom: 16,
    });

    let defaultZoom = 8;

    if (window.matchMedia("(min-width:1024px)").matches) {
        defaultZoom = 10;
    }

    var mymap = L.map('mapid',
        {
            zoomControl: false,
            layers: [layerOSM,],
        }
    ).setView([-22.7499, -43.3099], defaultZoom);

    //Plota o controle de zoom canto inferior direito
    L.control.zoom().setPosition('bottomright').addTo(mymap)

});
