import React, {useState, useEffect} from 'react';
import MapView, { Marker,Polyline } from 'react-native-maps';

function decode(t,e){
    for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})
} 

export default function Directions (from,to) {

    const mode = 'driving'; // 'walking';
    const origin = from.latitude + ',' + from.longitude;
    const destination = to.latitude + ',' + to.longitude;

    const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

    const [coords, setcoords] = useState();

     fetch(url).then(response => response.json())
               .then(responseJson => {
                             if (responseJson.routes.length) {
                                    setcoords(decode(responseJson.routes[0].overview_polyline.points));
                                }
              }).catch(e => {console.warn(e)});
    
    return(
        <MapView.Polyline
                coordinates={coords}
            />
    );
  }

  

