import { Component, OnInit } from '@angular/core';
import { ExchangeRestService } from '../../services/exchange-rest-service';

@Component({
  selector: 'app-new-value',
  templateUrl: './new-value.component.html',
  styleUrls: ['./new-value.component.css']
})
export class NewValueComponent implements OnInit {

  codesObject;
  valueObject;
  euInput;
  codes: any [] = [];
  newVal;
  codeSelected;

  constructor(private exRest: ExchangeRestService) { }

  ngOnInit() {
    this.getCodes();
  }

  updateDollarVal() {
    this.getEuExchange();
  }

  getInputValue(event) {
    this.euInput = event.target.value;
  }

  async getEuExchange() {
    try {
      this.valueObject = await this.exRest
        .getExchange( this.codeSelected || 'USD' )
        .toPromise();
      this.valueObject = await Object.values(this.valueObject.rates);
      this.newVal =  this.valueObject * this.euInput;
    } catch (error) {}
  }

  async getCodes() {
    try {
      this.codesObject = await this.exRest
        .getCodes()
        .toPromise();
      this.codes = Object.keys(this.codesObject.rates);
    } catch (error) {}
  }

  getCode(event) {
    this.codeSelected = event.target.text;
    this.getEuExchange();
  }
}
