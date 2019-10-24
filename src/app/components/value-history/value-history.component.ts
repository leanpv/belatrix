import { Component, OnInit } from '@angular/core';
import { ExchangeRestService } from '../../services/exchange-rest-service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-value-history',
  templateUrl: './value-history.component.html',
  styleUrls: ['./value-history.component.css']
})
export class ValueHistoryComponent implements OnInit {

  fullDate = new Date();
  date;
  actualDay;
  dateOb;
  arr: any [] = [];

  constructor(private exRest: ExchangeRestService, private datePipe: DatePipe) {}

  ngOnInit() {

    // Formatea la fecha para que la API pueda recibirla
    this.date = this.datePipe.transform(this.fullDate, 'yyyy-MM-dd');
    this.actualDay = this.fullDate.getDate();
    this.repeatRequest();
  }

// Trae el objeto del servicio rest
  async getEuVal() {
    try {
      // Formatea la fecha para que la API pueda recibirla
      this.date = this.datePipe.transform(this.fullDate, 'yyyy-MM-dd');

      this.dateOb = await this.exRest
        .getExchangeHistory(this.date)
        .toPromise();
      this.arr.push(this.dateOb);
    } catch (error) {}
  }

  repeatRequest() {
    for (let i = 0; i < 3; i++) {
      this.fullDate.setDate(this.actualDay - i);
      this.getEuVal();
    }
  }

}
