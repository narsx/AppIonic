import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private activatedroute: ActivatedRoute, private placesService: PlacesService,private router: Router,private alertController: AlertController) { }

  ngOnInit() { //Cargado de vector de información para poder printearlo a la pagina places
    this.activatedroute.paramMap.subscribe(params => {
      const id = params.get('placeId'); //Carga los datos por id
      this.place = this.placesService.getPlace(id);
      console.log(this.place); //Se muestra en consola el vector del id
    })
    
  }

   async deletePlace(){
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
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    alertElement.present(); //Inicia la alerta (Lo presenta)
  }
}
