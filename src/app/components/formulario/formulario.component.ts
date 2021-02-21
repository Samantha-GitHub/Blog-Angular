import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(private postService: PostService) {



    this.formulario = new FormGroup({

      titulo: new FormControl('', [

        Validators.required

      ]),

      texto: new FormControl('', [

        Validators.required,
        Validators.minLength(20),


      ]),

      autor: new FormControl('', [

        Validators.required,


      ]),

      imagen: new FormControl('', [

        Validators.required,

      ]),
      fecha: new FormControl('', [

        Validators.required,
        Validators.pattern(/^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-./])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/),

      ]),
      categoria: new FormControl('', [

        Validators.required,


      ]),


    });

  };


  ngOnInit(): void {
  }

  onSubmit() {

    this.postService.agregarPost(this.formulario.value);
    console.log(this.formulario.value);

    this.formulario.reset();

  }

}
