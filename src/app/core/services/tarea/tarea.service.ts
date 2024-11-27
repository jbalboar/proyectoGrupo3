import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  getData() {
    return [
      {
        id: 1000,
        responsable: 'James Butt',
        titulo: 'Algeria',
        descripcion: 'Benton, John B Jr',
        date: '2015-09-13',
        estado: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          responsable: 'Ioni Bowcher',
          image: 'ionibowcher.png',
        },
        balance: 70663,
      },
      {
        id: 1001,
        responsable: 'Josephine Darakjy',
        titulo: 'Egypt',
        descripcion: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        estado: 'proposal',
        verified: true,
        activity: 0,
        representative: {
          responsable: 'Amy Elsner',
          image: 'amyelsner.png',
        },
        balance: 82429,
      },
      {
        id: 1002,
        responsable: 'Art Venere',
        titulo: 'Panama',
        descripcion: 'Chemel, James L Cpa',
        date: '2017-05-13',
        estado: 'qualified',
        verified: false,
        activity: 63,
        representative: {
          responsable: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 28334,
      },
      {
        id: 1003,
        responsable: 'Lenna Paprocki',
        titulo: 'Slovenia',
        descripcion: 'Feltz Printing Service',
        date: '2020-09-15',
        estado: 'new',
        verified: false,
        activity: 37,
        representative: {
          responsable: 'Xuxue Feng',
          image: 'xuxuefeng.png',
        },
        balance: 88521,
      },
      {
        id: 1004,
        responsable: 'Donette Foller',
        titulo: 'South Africa',
        descripcion: 'Printing Dimensions',
        date: '2016-05-20',
        estado: 'proposal',
        verified: true,
        activity: 33,
        representative: {
          responsable: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 93905,
      },
      {
        id: 1005,
        responsable: 'Simona Morasca',
        titulo: 'Egypt',
        descripcion: 'Chapman, Ross E Esq',
        date: '2018-02-16',
        estado: 'qualified',
        verified: false,
        activity: 68,
        representative: {
          responsable: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 50041,
      },
      {
        id: 1006,
        responsable: 'Mitsue Tollner',
        titulo: 'Paraguay',
        descripcion: 'Morlong Associates',
        date: '2018-02-19',
        estado: 'renewal',
        verified: true,
        activity: 54,
        representative: {
          responsable: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 58706,
      },
      {
        id: 1007,
        responsable: 'Leota Dilliard',
        titulo: 'Serbia',
        descripcion: 'Commercial Press',
        date: '2019-08-13',
        estado: 'renewal',
        verified: true,
        activity: 69,
        representative: {
          responsable: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 26640,
      },
      {
        id: 1008,
        responsable: 'Sage Wieser',
        titulo: 'Egypt',
        descripcion: 'Truhlar And Truhlar Attys',
        date: '2018-11-21',
        estado: 'unqualified',
        verified: true,
        activity: 76,
        representative: {
          responsable: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 65369,
      },
      {
        id: 1009,
        responsable: 'Kris Marrier',
        titulo: 'Mexico',
        descripcion: 'King, Christopher A Esq',
        date: '2015-07-07',
        estado: 'proposal',
        verified: false,
        activity: 3,
        representative: {
          responsable: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 63451,
      },
      {
        id: 1010,
        responsable: 'Minna Amigon',
        titulo: 'Romania',
        descripcion: 'Dorl, James J Esq',
        date: '2018-11-07',
        estado: 'qualified',
        verified: false,
        activity: 38,
        representative: {
          responsable: 'Anna Fali',
          image: 'annafali.png',
        },
        balance: 71169,
      },
      {
        id: 1011,
        responsable: 'Abel Maclead',
        titulo: 'Singapore',
        descripcion: 'Rangoni Of Florence',
        date: '2017-03-11',
        estado: 'qualified',
        verified: true,
        activity: 87,
        representative: {
          responsable: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
        balance: 96842,
      },
      {
        id: 1012,
        responsable: 'Kiley Caldarera',
        titulo: 'Serbia',
        descripcion: 'Feiner Bros',
        date: '2015-10-20',
        estado: 'unqualified',
        verified: false,
        activity: 80,
        representative: {
          responsable: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 92734,
      },
      {
        id: 1013,
        responsable: 'Graciela Ruta',
        titulo: 'Chile',
        descripcion: 'Buckley Miller & Wright',
        date: '2016-07-25',
        estado: 'negotiation',
        verified: false,
        activity: 59,
        representative: {
          responsable: 'Amy Elsner',
          image: 'amyelsner.png',
        },
        balance: 45250,
      },
      {
        id: 1014,
        responsable: 'Cammy Albares',
        titulo: 'Philippines',
        descripcion: 'Rousseaux, Michael Esq',
        date: '2019-06-25',
        estado: 'new',
        verified: true,
        activity: 90,
        representative: {
          responsable: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 30236,
      },
      {
        id: 1015,
        responsable: 'Mattie Poquette',
        titulo: 'Venezuela',
        descripcion: 'Century Communications',
        date: '2017-12-12',
        estado: 'negotiation',
        verified: false,
        activity: 52,
        representative: {
          responsable: 'Anna Fali',
          image: 'annafali.png',
        },
        balance: 64533,
      },
      {
        id: 1016,
        responsable: 'Meaghan Garufi',
        titulo: 'Malaysia',
        descripcion: 'Bolton, Wilbur Esq',
        date: '2018-07-04',
        estado: 'unqualified',
        verified: false,
        activity: 31,
        representative: {
          responsable: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 37279,
      },
      {
        id: 1017,
        responsable: 'Gladys Rim',
        titulo: 'Netherlands',
        descripcion: 'T M Byxbee Company Pc',
        date: '2020-02-27',
        estado: 'renewal',
        verified: true,
        activity: 48,
        representative: {
          responsable: 'Stephen Shaw',
          image: 'stephenshaw.png',
        },
        balance: 27381,
      },
      {
        id: 1018,
        responsable: 'Yuki Whobrey',
        titulo: 'Israel',
        descripcion: 'Farmers Insurance Group',
        date: '2017-12-21',
        estado: 'negotiation',
        verified: true,
        activity: 16,
        representative: {
          responsable: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
        balance: 9257,
      },
      {
        id: 1019,
        responsable: 'Fletcher Flosi',
        titulo: 'Argentina',
        descripcion: 'Post Box Services Plus',
        date: '2016-01-04',
        estado: 'renewal',
        verified: true,
        activity: 19,
        representative: {
          responsable: 'Xuxue Feng',
          image: 'xuxuefeng.png',
        },
        balance: 67783,
      },
      {
        id: 1020,
        responsable: 'Bette Nicka',
        titulo: 'Paraguay',
        descripcion: 'Sport En Art',
        date: '2016-10-21',
        estado: 'renewal',
        verified: false,
        activity: 100,
        representative: {
          responsable: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 4609,
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
