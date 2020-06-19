var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "A", "B", "C", "D", "E", "F"];



function byteToHex(b) {

 return hexChar[(b >> 4) & 0x0f] + hexChar[b & 0x0f];

}

function pad16(b) {
  var h = b.toString(16);
  return (h + "").length < 2 ? "0" + h : h;
}

function hexToInt(hex) {

 var num=hex;

 if (num>0x7F) {

   num=num-0x100;

 }

 return num;

}






function Decoder(bytes) {



if(String.fromCharCode(hexToInt(bytes[4]))=='-'){
var a;
var c = 0;
var time= "";
for (a = 0; String.fromCharCode(hexToInt(bytes[a])) != ',' ; a++) {
   time+= String.fromCharCode(hexToInt(bytes[a]));
   c++;
}
var lat= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ',' ; a++) {
   lat+= String.fromCharCode(hexToInt(bytes[a]));
   c++;
}
var lon= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   lon+= String.fromCharCode(hexToInt(bytes[a]));
   c++;
}
var alt= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   alt+= String.fromCharCode(hexToInt(bytes[a]));
   c++;

}

var hdop= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ',' ; a++) {
   hdop+= String.fromCharCode(hexToInt(bytes[a]));
   c++;
}
var vdop= "";
for (a = ++c;String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   vdop+= String.fromCharCode(hexToInt(bytes[a]));
   c++;
}
var pdop= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   pdop+= String.fromCharCode(hexToInt(bytes[a]));
   c++;


}
var bl= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   bl+= String.fromCharCode(hexToInt(bytes[a]));
   c++;


}
var accx= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   accx+= String.fromCharCode(hexToInt(bytes[a]));
   c++;


}
var accy= "";
for (a = ++c; String.fromCharCode(hexToInt(bytes[a])) != ','  ; a++) {
   accy+= String.fromCharCode(hexToInt(bytes[a]));
   c++;


}
var accz= "";
for (a = ++c; a <bytes.length ; a++) {
   accz+= String.fromCharCode(hexToInt(bytes[a]));
   c++;


}

return {
   wifiAPs:null ,
   timestamp:time,
   location:{
    lat:lat,
    lon:lon,
    alt:alt,
    hdop:hdop,
    vdop:vdop,
    pdop:pdop,
  },

  batteryLevel:bl,
  sensor:{

    accelerometer:{
      
      x:accx,
      y:accy,
      z:accz
    }

  }

  };



}else{

 var mac1="";
 var i;
 for (i = 0; i < 6; i++) {

   mac1 += byteToHex(bytes[i]);

   if (i<5) { mac1+=':';}

}

var rssi1=-hexToInt(bytes[6]);

 var mac2="";

 for (i = 0; i < 6; i++) {

   mac2 += byteToHex(bytes[i+7]);

   if (i<5) { mac2+=':';}

}

var rssi2=-hexToInt(bytes[13]);


 var mac3="";

 for (i = 0; i < 6; i++) {

   mac3 += byteToHex(bytes[i+14]);

   if (i<5) { mac3+=':';}

}

var rssi3=-hexToInt(bytes[20]);

var time1= "";
var b;
var d=22;
for (b = d; String.fromCharCode(hexToInt(bytes[b])) != ',' ; b++) {
   time1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;
}
var lat1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ',' ; b++) {
   lat1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;
}
var lon1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   lon1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;
}
var alt1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   alt1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;

}

var hdop1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ',' ; b++) {
   hdop1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;
}
var vdop1= "";
for (b = ++d;String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   vdop1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;
}
var pdop1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   pdop1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;


}
var bl1= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   bl1+= String.fromCharCode(hexToInt(bytes[b]));
   d++;


}
var acc1x= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   acc1x+= String.fromCharCode(hexToInt(bytes[b]));
   d++;


}
var acc1y= "";
for (b = ++d; String.fromCharCode(hexToInt(bytes[b])) != ','  ; b++) {
   acc1y+= String.fromCharCode(hexToInt(bytes[b]));
   d++;


}
var acc1z= "";
for (b = ++d; b <bytes.length ; b++) {
   acc1z+= String.fromCharCode(hexToInt(bytes[b]));
   d++;


}

return {
   wifiAPs: {
     mac_1: mac1,
     rssi_1:rssi1,
     mac_2: mac2,
     rssi_2:rssi2,
     mac_3: mac3,
     rssi_3:rssi3,
   },
   timestamp:time1,
   location:{
    lat:lat1,
    lon:lon1,
    alt:alt1,
    hdop:hdop1,
    vdop:vdop1,
    pdop:pdop1,
  },
  batteryLevel:bl1,
  sensor:{
    accelerometer:{
      
      x:acc1x,
      y:acc1y,
      z:acc1z
    }
  }
};
}
}
