import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-feminino',
  templateUrl: './feminino.page.html',
  styleUrls: ['./feminino.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonInput, CommonModule, FormsModule,
    ReactiveFormsModule
  ]
})
export class FemininoPage implements OnInit {
  formulario!: FormGroup;
  
  // Resultados
  d: number = 0;
  gPercent: number = 0;
  massaMagra: number = 0;
  imc: number = 0;
  ircq: number = 0;
  ger: number = 0;
  gepe: number = 0;
  net: number = 0;
  calculo: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(0)]],
      dcAxilar: ['', Validators.required],
      dcSupraIlíaca: ['', Validators.required],
      dcCoxa: ['', Validators.required],
      dcPanturrilhaMedial: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      altura: ['', [Validators.required, Validators.min(0)]],
      fa: ['', [Validators.required, Validators.min(1)]],
      tempo: ['', [Validators.required, Validators.min(0)]],
      cCintura: ['', Validators.required],
      cQuadril: ['', Validators.required],
      mets: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.calculo = true;
      const values = this.formulario.value;
      
      // Conversão para números
      const peso = Number(values.peso);
      const dcAxilar = Number(values.dcAxilar);
      const dcSupraIlíaca = Number(values.dcSupraIlíaca);
      const dcCoxa = Number(values.dcCoxa);
      const dcPanturrilhaMedial = Number(values.dcPanturrilhaMedial);
      const idade = Number(values.idade);
      const altura = Number(values.altura);
      const fa = Number(values.fa);
      const tempo = Number(values.tempo);
      const cCintura = Number(values.cCintura);
      const cQuadril = Number(values.cQuadril);
      const mets = Number(values.mets);

      // Cálculo da Densidade Corporal (D)
      const somaDobras = dcAxilar + dcSupraIlíaca + dcCoxa + dcPanturrilhaMedial;
      this.d = 1.1954713 - (0.07513507 * Math.log10(somaDobras)) - (0.00041072 * idade);

      // Cálculo do Percentual de Gordura (G%)
      this.gPercent = somaDobras > 0 ? (503 / this.d) - 459 : 0;

      // Massa Magra
      this.massaMagra = peso - (peso * (this.gPercent / 100));

      // IMC
      this.imc = altura > 0 ? peso / Math.pow(altura, 2) : 0;

      // IRCQ
      this.ircq = cQuadril > 0 ? cCintura / cQuadril : 0;

      // GER (incluindo fator atividade)
      this.ger = (370 + (21.6 * this.massaMagra)) * fa;

      // GEPE
      this.gepe = mets * peso * tempo;

      // NET
      this.net = this.ger + this.gepe;

      // Formatando os resultados:
    // Valores com duas casas decimais:
    this.d = parseFloat(this.d.toFixed(2));
    this.gPercent = parseFloat(this.gPercent.toFixed(2));
    this.massaMagra = parseFloat(this.massaMagra.toFixed(2));
    this.imc = parseFloat(this.imc.toFixed(2));
    this.ircq = parseFloat(this.ircq.toFixed(2));
    this.ger = parseFloat(this.ger.toFixed(2));

    // Valores inteiros:
    this.gepe = Math.round(this.gepe);
    this.net = Math.round(this.net);
    }
  }
}