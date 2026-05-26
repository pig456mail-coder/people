var wms_layers = [];

var format_cb_2018_us_state_500k_0 = new ol.format.GeoJSON();
var features_cb_2018_us_state_500k_0 = format_cb_2018_us_state_500k_0.readFeatures(json_cb_2018_us_state_500k_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cb_2018_us_state_500k_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cb_2018_us_state_500k_0.addFeatures(features_cb_2018_us_state_500k_0);
var lyr_cb_2018_us_state_500k_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cb_2018_us_state_500k_0, 
                style: style_cb_2018_us_state_500k_0,
                popuplayertitle: 'cb_2018_us_state_500k',
                interactive: true,
                title: '<img src="styles/legend/cb_2018_us_state_500k_0.png" /> cb_2018_us_state_500k'
            });
var format_cb_2018_us_aiannh_500k_1 = new ol.format.GeoJSON();
var features_cb_2018_us_aiannh_500k_1 = format_cb_2018_us_aiannh_500k_1.readFeatures(json_cb_2018_us_aiannh_500k_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cb_2018_us_aiannh_500k_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cb_2018_us_aiannh_500k_1.addFeatures(features_cb_2018_us_aiannh_500k_1);
var lyr_cb_2018_us_aiannh_500k_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cb_2018_us_aiannh_500k_1, 
                style: style_cb_2018_us_aiannh_500k_1,
                popuplayertitle: 'cb_2018_us_aiannh_500k',
                interactive: true,
                title: '<img src="styles/legend/cb_2018_us_aiannh_500k_1.png" /> cb_2018_us_aiannh_500k'
            });

lyr_cb_2018_us_state_500k_0.setVisible(true);lyr_cb_2018_us_aiannh_500k_1.setVisible(true);
var layersList = [lyr_cb_2018_us_state_500k_0,lyr_cb_2018_us_aiannh_500k_1];
lyr_cb_2018_us_state_500k_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_cb_2018_us_aiannh_500k_1.set('fieldAliases', {'AIANNHCE': 'AIANNHCE', 'AIANNHNS': 'AIANNHNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_cb_2018_us_state_500k_0.set('fieldImages', {'STATEFP': '', 'STATENS': '', 'AFFGEOID': '', 'GEOID': '', 'STUSPS': '', 'NAME': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_cb_2018_us_aiannh_500k_1.set('fieldImages', {'AIANNHCE': '', 'AIANNHNS': '', 'AFFGEOID': '', 'GEOID': '', 'NAME': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_cb_2018_us_state_500k_0.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_cb_2018_us_aiannh_500k_1.set('fieldLabels', {'AIANNHCE': 'no label', 'AIANNHNS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_cb_2018_us_aiannh_500k_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});