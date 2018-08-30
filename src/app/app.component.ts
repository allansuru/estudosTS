import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Comments } from './Comments';

// //json-server --watch db.json
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Allan Passos';
  comentarios: any = [];
  postA: any = [];
  postB: any = [];
  

  constructor(private _http: Http) {

  
    this.getDados();
  }

  getDados() {
    this._http.get('http://localhost:3000/comments')
    .map(res => res.json())
    .subscribe(itens => {
      this.comentarios = itens;
      console.log('Comentarios: ', this.comentarios);
      const teste = new Comments(this.comentarios);

      this.postA = teste.filtraPostA;
      this.postB = teste.filtraPostB;
      console.log('Comentarios Post A: ', this.postA);
      console.log('Comentarios Post b: ', this.postB);
    });
  }
}
