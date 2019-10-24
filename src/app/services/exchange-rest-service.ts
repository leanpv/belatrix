import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRestService {

  private httpOptionsGeneral = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }

  getCodes() {
    return this.http.get('http://data.fixer.io/api/latest?access_key=d3baf86a6459a916a5709426ec2d1808')
      .pipe(map(this.extractData));
  }

  getExchange(code) {
    return this.http.get('http://data.fixer.io/api/latest?access_key=d3baf86a6459a916a5709426ec2d1808&symbols=' + code)
      .pipe(map(this.extractData));
  }

  getExchangeHistory(fecha) {
    return this.http.get('http://data.fixer.io/api/' + fecha + '?access_key=d3baf86a6459a916a5709426ec2d1808')
      .pipe(map(this.extractData));
  }
}
