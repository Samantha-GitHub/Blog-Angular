import { Injectable } from '@angular/core';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  articulos: Post[];

  constructor() {

    this.articulos = [

      {
        titulo: 'España tiene un problema para cubrir vacantes de trabajo: estos son los puestos más demandados',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'Lola Martínez',
        imagen: 'http://www.laborsord.org/images/blog/El-empleo-en-personas-con-discapacidad-auditiva.jpg',
        fecha: '13 de Febrero de 2021',
        categoria: 'empleo',
      },

      {
        titulo: 'Sanidad notifica 530 muertos por Coronavirus ',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'Pablo García',
        imagen: 'https://img2.rtve.es/v/5530085?w=1600&preview=1583356362400.jpg',
        fecha: '31 de Diciembre de 2020',
        categoria: 'medicina',
      },

      {
        titulo: '¡Descubre la mejor película del mundo!',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'string',
        imagen: 'https://www.elcineenlasombra.com/wp-content/uploads/2018/10/pelicula-rodar-FB.jpg',
        fecha: '3 de Enero de 2021',
        categoria: 'Cine',
      },

      {
        titulo: '¡No te lo pierdes : las nuevas peículas ahora en Cine!',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'string',
        imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/10/30/16040711338465.jpg',
        fecha: '19 de Noviembre de 2020',
        categoria: 'Cine',
      },


    ]
  }
}
