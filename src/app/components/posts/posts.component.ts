import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() miArrNoticias:Noticia[] = []
  
  constructor(){

  }

  cargarNoticias():string{
    let html:string = ''
    this.miArrNoticias.forEach(noticias =>{
      html+= `<article class='noticias'>
      <div class='imagen__wraper'>
      <img src="${noticias.img}">
      </div>
      <div class= 'text__wraper'>
      <h3 class='titulo'>${noticias.title}</h3>
      <p>${noticias.texto}</p>
      <div class='date__wraper'>
      <p >${noticias.date}</p>
      </div>
      </div>
      </article>`
    })
    return html
}
}

