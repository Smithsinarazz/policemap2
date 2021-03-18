var wms_layers = [];


        var lyr_TransportDark_0 = new ol.layer.Tile({
            'title': 'Transport Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png'
            })
        });
var format_allpoliceareassimplewgs84_1 = new ol.format.GeoJSON();
var features_allpoliceareassimplewgs84_1 = format_allpoliceareassimplewgs84_1.readFeatures(json_allpoliceareassimplewgs84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allpoliceareassimplewgs84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allpoliceareassimplewgs84_1.addFeatures(features_allpoliceareassimplewgs84_1);
var lyr_allpoliceareassimplewgs84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_allpoliceareassimplewgs84_1, 
                style: style_allpoliceareassimplewgs84_1,
                interactive: true,
                title: '<img src="styles/legend/allpoliceareassimplewgs84_1.png" /> allpoliceareassimplewgs84'
            });
var format_Policestations2010_2 = new ol.format.GeoJSON();
var features_Policestations2010_2 = format_Policestations2010_2.readFeatures(json_Policestations2010_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policestations2010_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policestations2010_2.addFeatures(features_Policestations2010_2);
var lyr_Policestations2010_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Policestations2010_2, 
                style: style_Policestations2010_2,
                interactive: true,
                title: '<img src="styles/legend/Policestations2010_2.png" /> Police stations 2010'
            });
var format_Policestations2020_3 = new ol.format.GeoJSON();
var features_Policestations2020_3 = format_Policestations2020_3.readFeatures(json_Policestations2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policestations2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policestations2020_3.addFeatures(features_Policestations2020_3);
var lyr_Policestations2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Policestations2020_3, 
                style: style_Policestations2020_3,
                interactive: true,
    title: 'Police stations 2020<br />\
    <img src="styles/legend/Policestations2020_3_0.png" /> Rural town and fringe<br />\
    <img src="styles/legend/Policestations2020_3_1.png" /> Rural town and fringe in a sparse setting<br />\
    <img src="styles/legend/Policestations2020_3_2.png" /> Rural village and dispersed<br />\
    <img src="styles/legend/Policestations2020_3_3.png" /> Rural village and dispersed in a sparse setting<br />\
    <img src="styles/legend/Policestations2020_3_4.png" /> Urban city and town<br />\
    <img src="styles/legend/Policestations2020_3_5.png" /> Urban city and town in a sparse setting<br />\
    <img src="styles/legend/Policestations2020_3_6.png" /> Urban major conurbation<br />\
    <img src="styles/legend/Policestations2020_3_7.png" /> Urban minor conurbation<br />\
    <img src="styles/legend/Policestations2020_3_8.png" /> <br />'
        });

lyr_TransportDark_0.setVisible(true);lyr_allpoliceareassimplewgs84_1.setVisible(true);lyr_Policestations2010_2.setVisible(true);lyr_Policestations2020_3.setVisible(true);
var layersList = [lyr_TransportDark_0,lyr_allpoliceareassimplewgs84_1,lyr_Policestations2010_2,lyr_Policestations2020_3];
lyr_allpoliceareassimplewgs84_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_Policestations2010_2.set('fieldAliases', {'fid': 'fid', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Postcode': 'Postcode', 'RV': 'RV', 'Easting': 'Easting', 'Northing': 'Northing', 'Rural_Ur_1': 'Rural_Ur_1', });
lyr_Policestations2020_3.set('fieldAliases', {'fid': 'fid', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Postcode': 'Postcode', 'RV': 'RV', 'Easting': 'Easting', 'Northing': 'Northing', 'Rural_Ur_1': 'Rural_Ur_1', });
lyr_allpoliceareassimplewgs84_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Policestations2010_2.set('fieldImages', {'fid': 'Hidden', 'UARN': 'Hidden', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Postcode': 'TextEdit', 'RV': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Rural_Ur_1': 'TextEdit', });
lyr_Policestations2020_3.set('fieldImages', {'fid': 'TextEdit', 'UARN': 'Hidden', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Postcode': 'TextEdit', 'RV': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Rural_Ur_1': 'TextEdit', });
lyr_allpoliceareassimplewgs84_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Policestations2010_2.set('fieldLabels', {'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', 'Rural_Ur_1': 'no label', });
lyr_Policestations2020_3.set('fieldLabels', {'fid': 'no label', 'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', 'Rural_Ur_1': 'no label', });
lyr_Policestations2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});