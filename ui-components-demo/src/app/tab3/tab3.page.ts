import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, 
         IonButtons, IonItem, IonLabel, IonInput, AlertController, 
         ToastController } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal,
           IonButtons, IonItem, IonLabel, IonInput, FormsModule, ExploreContainerComponent],
})
export class Tab3Page {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Confirm',
          cssClass: 'primary',
          handler: () => this.showToast()
        }
      ]
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Action completed successfully!',
      duration: 2000,
      position: 'bottom',
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
