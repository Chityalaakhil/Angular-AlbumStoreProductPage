import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  _albumUrl = '../assets/album.json';

  constructor( private _http:Http ) { }

  getAlbum( id:number ) {
    return this._http.get(this._albumUrl).map( res => res.json());
  }
}
