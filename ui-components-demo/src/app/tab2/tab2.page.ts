import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, 
         IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, 
         IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, trash, share, heart } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
    IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonAvatar
  ]
})
export class Tab2Page {
  constructor() {
    addIcons({ star, trash, share, heart });
  }
}
