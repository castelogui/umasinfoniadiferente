import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent {
  zoom = 15;
  center: google.maps.LatLngLiteral = { lat: -9.9148826, lng: -63.042374 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 40,
    minZoom: 2,
  };
 
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      position.coords.latitude;
      position.coords.longitude;
    });
  }
}
