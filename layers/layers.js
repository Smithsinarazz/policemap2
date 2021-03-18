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
var format_Policeareas_1 = new ol.format.GeoJSON();
var features_Policeareas_1 = format_Policeareas_1.readFeatures(json_Policeareas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Policeareas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policeareas_1.addFeatures(features_Policeareas_1);
var lyr_Policeareas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Policeareas_1, 
                style: style_Policeareas_1,
                interactive: true,
                title: '<img src="styles/legend/Policeareas_1.png" /> Police areas'
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
    title: 'Police stations 2010<br />\
    <img src="styles/legend/Policestations2010_2_0.png" /> Rural town and fringe<br />\
    <img src="styles/legend/Policestations2010_2_1.png" /> Rural town and fringe in a sparse setting<br />\
    <img src="styles/legend/Policestations2010_2_2.png" /> Rural village and dispersed<br />\
    <img src="styles/legend/Policestations2010_2_3.png" /> Rural village and dispersed in a sparse setting<br />\
    <img src="styles/legend/Policestations2010_2_4.png" /> Urban city and town<br />\
    <img src="styles/legend/Policestations2010_2_5.png" /> Urban city and town in a sparse setting<br />\
    <img src="styles/legend/Policestations2010_2_6.png" /> Urban major conurbation<br />\
    <img src="styles/legend/Policestations2010_2_7.png" /> Urban minor conurbation<br />\
    <img src="styles/legend/Policestations2010_2_8.png" /> <br />'
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

lyr_TransportDark_0.setVisible(true);lyr_Policeareas_1.setVisible(true);lyr_Policestations2010_2.setVisible(true);lyr_Policestations2020_3.setVisible(true);
var layersList = [lyr_TransportDark_0,lyr_Policeareas_1,lyr_Policestations2010_2,lyr_Policestations2020_3];
lyr_Policeareas_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_Policestations2010_2.set('fieldAliases', {'fid': 'fid', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Postcode': 'Postcode', 'RV': 'RV', 'Easting': 'Easting', 'Northing': 'Northing', 'Rural_Ur_1': 'Rural_Ur_1', });
lyr_Policestations2020_3.set('fieldAliases', {'fid': 'fid', 'UARN': 'UARN', 'Add1': 'Add1', 'St': 'St', 'Postcode': 'Postcode', 'RV': 'RV', 'Easting': 'Easting', 'Northing': 'Northing', 'Rural_Ur_1': 'Rural_Ur_1', });
lyr_Policeareas_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Policestations2010_2.set('fieldImages', {'fid': 'TextEdit', 'UARN': 'TextEdit', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Postcode': 'TextEdit', 'RV': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Rural_Ur_1': 'TextEdit', });
lyr_Policestations2020_3.set('fieldImages', {'fid': 'TextEdit', 'UARN': 'Hidden', 'Add1': 'TextEdit', 'St': 'TextEdit', 'Postcode': 'TextEdit', 'RV': 'TextEdit', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Rural_Ur_1': 'TextEdit', });
lyr_Policeareas_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Policestations2010_2.set('fieldLabels', {'fid': 'no label', 'UARN': 'no label', 'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Rural_Ur_1': 'no label', });
lyr_Policestations2020_3.set('fieldLabels', {'fid': 'no label', 'Add1': 'no label', 'St': 'no label', 'Postcode': 'no label', 'RV': 'no label', 'Rural_Ur_1': 'no label', });
lyr_Policestations2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});