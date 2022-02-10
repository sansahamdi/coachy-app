import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';

const accessToken =
  'pk.eyJ1IjoiZG91cmJpYSIsImEiOiJja3pmZHd2NXYwdDd0Mm9wZGpwaHQ1dDJnIn0.qLUVXV51FryYrc4a2iWcLA';

MapboxGL.setAccessToken(accessToken);

const directionsClient = MapboxDirectionsFactory({accessToken});

export default App = () => {
  const startingPoint = [10.323889, 36.853056];
  const destinationPoint = [10.323056, 36.841389];

  const [route, setRoute] = useState(null);

  const startDestinationPoints = [startingPoint, destinationPoint];

  useEffect(() => {
    fetchRoute();
  });

  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [
        {coordinates: startingPoint},
        {coordinates: destinationPoint},
      ],
      profile: 'driving-traffic',
      geometries: 'geojson',
    };

    const res = await directionsClient.getDirections(reqOptions).send();

    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(newRoute);
  };

  const renderAnnotations = () => {
    return startDestinationPoints.map((point, index) => (
      <MapboxGL.PointAnnotation
        key={`${index}-PointAnnotation`}
        id={`${index}-PointAnnotation`}
        coordinate={point}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: '#00cccc',
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    ));
  };

  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={11}
        centerCoordinate={startingPoint}
        style={{flex: 1}}>
        <MapboxGL.Camera
          zoomLevel={11}
          centerCoordinate={startingPoint}
          animationMode={'flyTo'}
          animationDuration={0}></MapboxGL.Camera>
        {renderAnnotations()}
        {route && (
          <MapboxGL.ShapeSource id="shapeSource" shape={route}>
            <MapboxGL.LineLayer
              id="lineLayer"
              style={{lineWidth: 5, lineJoin: 'bevel', lineColor: 'blue'}}
            />
          </MapboxGL.ShapeSource>
        )}
      </MapboxGL.MapView>
    </View>
  );
};
