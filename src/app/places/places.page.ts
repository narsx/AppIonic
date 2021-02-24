import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {PlacesService} from './places.service';
import { Place } from './place.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []  
  place: Place;
  constructor(private placeService: PlacesService,private alertController : AlertController,private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces() //Obtiene los datos para cargar el listado de lugares
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces(); //Refresca los datos
  }
  addNewPlace(){
    this.router.navigate(['/new-place']); //redireccion al formulario de añadido
  }

  async deletePlace(placeId: string){
    console.log(placeId)
    const alertElement = await this.alertController.create({ //Mensaje de Alerta de borrado
      header: 'Are your sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler:() => { //accion de borrado metido en la alerta
            this.placeService.deletePlace(placeId);
            this.router.navigate(['/places'])
            this.ionViewWillEnter();
          }
        }
      ]
    });
    alertElement.present(); //Inicia la alerta (Lo presenta)
  }
}
