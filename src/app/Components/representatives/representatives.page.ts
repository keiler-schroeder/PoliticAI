import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CivicInfoService } from 'src/app/Services/civicInfo/civic-info.service';

@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.page.html',
  styleUrls: ['./representatives.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RepresentativesPage implements OnInit {

  private civicInfoService = inject(CivicInfoService);

  constructor() { }

  async ngOnInit() {
    // let data = await this.civicInfoService.getElections();
    // console.log("in component ", data);
  }

}
