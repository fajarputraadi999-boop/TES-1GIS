var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_clipsemar_1 = new ol.format.GeoJSON();
var features_clipsemar_1 = format_clipsemar_1.readFeatures(json_clipsemar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipsemar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipsemar_1.addFeatures(features_clipsemar_1);
var lyr_clipsemar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clipsemar_1, 
                style: style_clipsemar_1,
                popuplayertitle: 'clipsemar',
                interactive: true,
                title: '<img src="styles/legend/clipsemar_1.png" /> clipsemar'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_clipsemar_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_clipsemar_1];
lyr_clipsemar_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_clipsemar_1.set('fieldImages', {'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_clipsemar_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_clipsemar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});