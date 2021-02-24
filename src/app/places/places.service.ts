import { Injectable } from '@angular/core';
import { Place }from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService { //Clase padre con la información

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      country: 'France,Paris',
      imageURL: 'assets/images/Eiffel.jpg',
      description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed 'La dame de fer' (French for 'Iron Lady'), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.",
      comments: ['Aswesome place','wonderful place']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      country: 'EEUU,New York',
      imageURL: 'assets/images/Libertad.jpeg',
      description: "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.",
      comments: ['Aswesome place','wonderful place']
    }
  ]

  constructor() { }
  //Metodos de utilización de la información
  getPlaces() {
    return [...this.places] 
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id == placeId
      })
    }
  }

  addPlace(title: string,imageURL: string,country:string,description:string) {
    this.places.push({
      title,
      country,
      imageURL,
      description,
      comments: [],
      id: this.places.length + 1 + "" //Pones comillas para convertirlo a string
    })
  }

  deletePlace(placeID: string) {
    this.places = this.places.filter(place => {
      return place.id != placeID
    })
  }

}
