var wms_layers = [];


        var lyr_Pioneermap_0 = new ol.layer.Tile({
            'title': 'Pioneer map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=6a53e8b25d114a5e9216df5bf9b5e9c8'
            })
        });
var format_TreatyOfFtStanwixOverlayV2_1 = new ol.format.GeoJSON();
var features_TreatyOfFtStanwixOverlayV2_1 = format_TreatyOfFtStanwixOverlayV2_1.readFeatures(json_TreatyOfFtStanwixOverlayV2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatyOfFtStanwixOverlayV2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatyOfFtStanwixOverlayV2_1.addFeatures(features_TreatyOfFtStanwixOverlayV2_1);
var lyr_TreatyOfFtStanwixOverlayV2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreatyOfFtStanwixOverlayV2_1, 
                style: style_TreatyOfFtStanwixOverlayV2_1,
                popuplayertitle: 'Treaty Of Ft. Stanwix Overlay V2',
                interactive: false,
                title: '<img src="styles/legend/TreatyOfFtStanwixOverlayV2_1.png" /> Treaty Of Ft. Stanwix Overlay V2'
            });
var format_TreatyofLogstownOverlayV2_2 = new ol.format.GeoJSON();
var features_TreatyofLogstownOverlayV2_2 = format_TreatyofLogstownOverlayV2_2.readFeatures(json_TreatyofLogstownOverlayV2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatyofLogstownOverlayV2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatyofLogstownOverlayV2_2.addFeatures(features_TreatyofLogstownOverlayV2_2);
var lyr_TreatyofLogstownOverlayV2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreatyofLogstownOverlayV2_2, 
                style: style_TreatyofLogstownOverlayV2_2,
                popuplayertitle: 'Treaty of Logstown Overlay V2',
                interactive: false,
                title: '<img src="styles/legend/TreatyofLogstownOverlayV2_2.png" /> Treaty of Logstown Overlay V2'
            });
var format_RoyalProclamationof1763OverlayV2_3 = new ol.format.GeoJSON();
var features_RoyalProclamationof1763OverlayV2_3 = format_RoyalProclamationof1763OverlayV2_3.readFeatures(json_RoyalProclamationof1763OverlayV2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoyalProclamationof1763OverlayV2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoyalProclamationof1763OverlayV2_3.addFeatures(features_RoyalProclamationof1763OverlayV2_3);
var lyr_RoyalProclamationof1763OverlayV2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoyalProclamationof1763OverlayV2_3, 
                style: style_RoyalProclamationof1763OverlayV2_3,
                popuplayertitle: 'Royal Proclamation of 1763-Overlay V2',
                interactive: false,
                title: '<img src="styles/legend/RoyalProclamationof1763OverlayV2_3.png" /> Royal Proclamation of 1763-Overlay V2'
            });
var format_TreatyOfLancasterOverlayV2_4 = new ol.format.GeoJSON();
var features_TreatyOfLancasterOverlayV2_4 = format_TreatyOfLancasterOverlayV2_4.readFeatures(json_TreatyOfLancasterOverlayV2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatyOfLancasterOverlayV2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatyOfLancasterOverlayV2_4.addFeatures(features_TreatyOfLancasterOverlayV2_4);
var lyr_TreatyOfLancasterOverlayV2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreatyOfLancasterOverlayV2_4, 
                style: style_TreatyOfLancasterOverlayV2_4,
                popuplayertitle: 'Treaty Of Lancaster Overlay V2',
                interactive: false,
                title: '<img src="styles/legend/TreatyOfLancasterOverlayV2_4.png" /> Treaty Of Lancaster Overlay V2'
            });

lyr_Pioneermap_0.setVisible(true);lyr_TreatyOfFtStanwixOverlayV2_1.setVisible(true);lyr_TreatyofLogstownOverlayV2_2.setVisible(true);lyr_RoyalProclamationof1763OverlayV2_3.setVisible(true);lyr_TreatyOfLancasterOverlayV2_4.setVisible(true);
var layersList = [lyr_Pioneermap_0,lyr_TreatyOfFtStanwixOverlayV2_1,lyr_TreatyofLogstownOverlayV2_2,lyr_RoyalProclamationof1763OverlayV2_3,lyr_TreatyOfLancasterOverlayV2_4];
lyr_TreatyOfFtStanwixOverlayV2_1.set('fieldAliases', {'fid': 'fid', 'Year': 'Year', 'id': 'id', 'Excerpt': 'Excerpt', });
lyr_TreatyofLogstownOverlayV2_2.set('fieldAliases', {'fid': 'fid', 'Year': 'Year', 'id': 'id', 'Excerpt': 'Excerpt', });
lyr_RoyalProclamationof1763OverlayV2_3.set('fieldAliases', {'fid': 'fid', 'Year': 'Year', 'id': 'id', 'Excerpt': 'Excerpt', });
lyr_TreatyOfLancasterOverlayV2_4.set('fieldAliases', {'id': 'id', });
lyr_TreatyOfFtStanwixOverlayV2_1.set('fieldImages', {'fid': 'TextEdit', 'Year': 'TextEdit', 'id': 'TextEdit', 'Excerpt': 'TextEdit', });
lyr_TreatyofLogstownOverlayV2_2.set('fieldImages', {'fid': 'TextEdit', 'Year': 'TextEdit', 'id': 'TextEdit', 'Excerpt': 'TextEdit', });
lyr_RoyalProclamationof1763OverlayV2_3.set('fieldImages', {'fid': '', 'Year': 'TextEdit', 'id': 'TextEdit', 'Excerpt': 'TextEdit', });
lyr_TreatyOfLancasterOverlayV2_4.set('fieldImages', {'id': 'TextEdit', });
lyr_TreatyOfFtStanwixOverlayV2_1.set('fieldLabels', {'fid': 'no label', 'Year': 'no label', 'id': 'no label', 'Excerpt': 'no label', });
lyr_TreatyofLogstownOverlayV2_2.set('fieldLabels', {'fid': 'no label', 'Year': 'no label', 'id': 'no label', 'Excerpt': 'no label', });
lyr_RoyalProclamationof1763OverlayV2_3.set('fieldLabels', {'fid': 'no label', 'Year': 'no label', 'id': 'no label', 'Excerpt': 'no label', });
lyr_TreatyOfLancasterOverlayV2_4.set('fieldLabels', {'id': 'no label', });
lyr_TreatyOfLancasterOverlayV2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});