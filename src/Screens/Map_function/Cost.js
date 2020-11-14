import React, {useState, useEffect} from 'react';
import MapView, { Marker,Polyline } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {Text, View} from 'react-native';

function decode(t,e){
    for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})
} 

export default function cost (from,to) {

    // export default function Code () {

    const [coords, setcoords] = useState();
    const [Cust, setCust] =  useState();
    const [origin, setorigin] = useState();
    const [destination, setdestination] = useState();
    const mode = 'driving'; // 'walking';
    const APIKEY = 'AIzaSyBGWLWDLiIhZm7kshUzjdk0z-GKV3rhF6U';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

    // const from= "Amman, Jordan";
    // const to= "Irbid, Jordan";

    const Get_length = () => {
        Geocoder.init(APIKEY); // use a valid API key
         Geocoder.from(from)
      .then(json => {
        var location = json.results[0].geometry.location;
        setorigin(location.lat + ',' + location.lng);
      })
      .catch(error => console.warn(error));
    
    Geocoder.from(to)
      .then(json => {
        var location = json.results[0].geometry.location;
        setdestination(location.lat + ',' + location.lng);
      })
      .catch(error => console.warn(error));
    
     fetch(url).then(response => response.json())
               .then(responseJson => {
                             if (responseJson.routes.length) {
                                 setcoords(responseJson.routes[0].legs[0].distance.value);
                                 var val =  responseJson.routes[0].legs[0].distance.value;
                                 if (val < 1000) { setCust("30 QAR"); } else
                                 if (val > 11000 && val < 25000) { setCust("30 QAR"); } else
                                 if (val > 24000 && val < 56000) { setCust("30 QAR"); } else
                                 if (val > 55000) { setCust("100 QAR"); }

                                }
              }).catch(e => {console.warn(e)});
    
            }
            
     Get_length();

    return(
        <View>
            {Cust && <Text>{Cust}</Text>}
        </View>
    );
  }


  

