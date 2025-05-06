import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonLoading, LoadingController } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';
import { SessionService } from 'src/app/Services/session/session.service';
import { GeocodingService } from 'src/app/Services/geocoding/geocoding.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonLoading]
})
export class DashboardPage implements OnInit {

  public environmentInjector = inject(EnvironmentInjector);
  loadingController = inject(LoadingController);
  sessionService = inject(SessionService);
  geoCodingService = inject(GeocodingService)

  loading: boolean = false;

  constructor() {
    addIcons({ triangle, square, ellipse });
  }

  async ngOnInit() {
    const loadingIndicator = await this.loadingController.create({
      message: 'test msg',
    }); 
    loadingIndicator.present();

    const geolocation = await Geolocation.getCurrentPosition();
    this.sessionService.locationLatitude = geolocation.coords.latitude;
    this.sessionService.locationLongitude = geolocation.coords.longitude;
    const geoCodingRes = await this.geoCodingService.getAddressFromCoordinates(this.sessionService.locationLatitude, this.sessionService.locationLongitude);
    console.log("GeoCoding Res: ", geoCodingRes);

    loadingIndicator.dismiss();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
