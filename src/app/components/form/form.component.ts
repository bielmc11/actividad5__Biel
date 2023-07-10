import { Component, EventEmitter, Output } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  newNoticia: Noticia = { title: '', img: '', texto: '', date: '' };
  @Output() noticiaEmitida: EventEmitter<Noticia>;

  constructor() {
    this.noticiaEmitida = new EventEmitter();
  }

  getDataForm() {
    if (
      this.newNoticia.title === '' ||
      this.newNoticia.img === '' ||
      this.newNoticia.texto === '' ||
      this.newNoticia.date === ''
    ) {
      alert('Queda algun campo por completar');
    } else {
      this.noticiaEmitida.emit(this.newNoticia);
      this.newNoticia = { title: '', img: '', texto: '', date: '' };
    }
  }
}
