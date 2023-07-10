import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  newNoticia: Noticia = {title:'', img:'', texto: '', date:'' }
  arrNoticias: Noticia[] = []

  constructor(){
    this.arrNoticias = [
      {
        title: 'La selección entrena por segunda vez bajo la intensa lluvia de Auckland',
        img: '/assets/F0pesRbaYAAMXOR.jpg',
        texto: 'La roja realizó este lunes su segundo entrenamiento en Oceania con un objetivo: adaptarse cuanto antes al clima y horario de Nueva Zelanda, tras la llegada el sábado para disputar el Mundial femenino de fútbol a partir del próximo 20 de julio. "Combatiendo el jet lag de la mejor forma que sabemos: ¡Entrenando!", dice un mensaje del conjunto español en sus redes sociales.',
        
        date: '9/07/23'
      },
      {
        title: 'Sergi Enrich más cerca de Andora que nunca',
        img: 'https://www.diariodesevilla.es/2019/12/03/deportes/Luna-Enrich_1415569267_113537889_667x375.jpg',
        texto: 'La salida de Bakis al Zaragoza obliga al Andorra a buscar un nueve. Un nombre que ha empezado a sonar con fuerza para ocupar ese puesto es Sergi Enrich (34). Los andorranos buscan gol en una persona con sobrada experiencia en la segunda división  española y eso describe a la perfección al ex del Eibar. La temporada pasada el conjunto de andorrano estuvo muy interesado en ficharle. La presencia de Bolo fue clave para que aterrizase en el Principado, aunque no la del andorrano.',
        date: '12/06/23'
      }
    ]
  }

  getNoticia($event: Noticia){
    this.arrNoticias.push($event)
  }

}
