import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.page.html',
  styleUrls: ['./masculino.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    ReactiveFormsModule,
    NgIf
  ],
})
export class MasculinoPage implements OnInit {
 formulario!: FormGroup;

  // Propriedades para os resultados
  d: number = 0;
  gPercent: number = 0;
  massaMagra: number = 0;
  imc: number = 0;
  ircq: number = 0;
  ger: number = 0;
  gepe: number = 0;
  net: number = 0;
  calculo: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      altura: ['', [Validators.required, Validators.min(0)]],
      idade: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(0)]],
      dcSubscapular: ['', Validators.required],
      dcTriceps: ['', Validators.required],
      dcSupraIlíaca: ['', Validators.required],
      dcPanturrilhaMedial: ['', Validators.required],
      fa: ['', Validators.required], // Renomeado de 'fs' para 'fa'
      tempo: ['', Validators.required],
      cCintura: ['', Validators.required],
      cQuadril: ['', Validators.required], // Renomeado de 'sQuadril' para 'cQuadril'
      mets: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.calculo = true;
      const valores = this.formulario.value;
  
      // Converter valores
      const {
        peso,
        altura,
        idade,
        dcSubscapular,
        dcTriceps,
        dcSupraIlíaca,
        dcPanturrilhaMedial,
        fa,
        tempo,
        cCintura,
        cQuadril,
        mets,
      } = valores;
  
      const somaDobras = 
        Number(dcSubscapular) +
        Number(dcTriceps) +
        Number(dcSupraIlíaca) +
        Number(dcPanturrilhaMedial);
  
      // Cálculo de D (CORRIGIDO)
      this.d = 1.10726863 
        - 0.00081201 * somaDobras 
        + (0.00000212 * 2 * somaDobras) 
        - 0.00041761 * Number(idade);
  
      // Cálculo de G%
      this.gPercent = (495 / this.d) - 450;
  
      // Massa Magra
      this.massaMagra = Number(peso) - (Number(peso) * (this.gPercent / 100));
  
      // IMC
      this.imc = altura > 0 
        ? Number(peso) / Math.pow(Number(altura) / 100, 2) 
        : 0;
  
      // IRCQ (CORREÇÃO: cintura / quadril)
      this.ircq = Number(cQuadril) !== 0 
        ? Number(cCintura) / Number(cQuadril) 
        : 0;
  
      // GER (incluindo FA)
      this.ger = (370 + 21.6 * this.massaMagra) * Number(fa);
  
      // GEPE
      this.gepe = Number(tempo) * Number(peso) * Number(mets);
  
      // NET
      this.net = this.ger + this.gepe;
  
      console.log('Resultados:', { 
        d: this.d,
        gPercent: this.gPercent,
        massaMagra: this.massaMagra,
        imc: this.imc,
        ircq: this.ircq,
        ger: this.ger,
        gepe: this.gepe,
        net: this.net,
      });
    } else {
      console.log('Formulário inválido!');
    }
  }  

}
