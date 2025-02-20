import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonContent } from "@ionic/angular/standalone";
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, RouterModule],
  standalone: true,
})
export class HomePage implements OnInit {
  
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {
    
  }
  
  masculino() {
    this._router.navigate(['/masculino'])
    console.log('masculino')
  }

  feminino() {
    this._router.navigate(['/feminino'])
    console.log('feminino')

  }
}