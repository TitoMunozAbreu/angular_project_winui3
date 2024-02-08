import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //alamcenar datos del formulario
  @ViewChild('registerForm') registerForm!: NgForm 
  //comprobar si se ha enviado el formualario
  isSubmitted = false
  generos = ['Hombre','Mujer']
  defaultGenero = 'Mujer'  
  //formulario object
 contacto = {
    nombre: '',
    apellido: '',
    email: '',
    comentario: ''
  }

  submit(){
    this.isSubmitted = true
    //rellenar los datos del formulario
    console.log(this.registerForm.value)
    this.contacto.nombre = this.registerForm.value.formularioData.nombre
    this.contacto.email = this.registerForm.value.formularioData.email
    this.contacto.apellido = this.registerForm.value.formularioData.apellido
    this.contacto.comentario = this.registerForm.value.comentario
    //resetear datos del formulario
    this.registerForm.reset()

  }
}
