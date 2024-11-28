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
        titulo: 'Tarea 1',
        descripcion: 'Descripcion de Tarea 1',
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
        titulo: 'Tarea 2',
        descripcion: 'Descripcion de Tarea 2',
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
        titulo: 'Tarea 3',
        descripcion: 'Descripcion de Tarea 3',
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
        titulo: 'Tarea 4',
        descripcion: 'Descripcion de Tarea 4',
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
        titulo: 'Tarea 5',
        descripcion: 'Descripcion de Tarea 5',
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
        titulo: 'Tarea 6',
        descripcion: 'Descripcion de Tarea 6',
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
        titulo: 'Tarea 7',
        descripcion: 'Descripcion de Tarea 7',
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
        titulo: 'Tarea 8',
        descripcion: 'Descripcion de Tarea 8',
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
        titulo: 'Tarea 9',
        descripcion: 'Descripcion de Tarea 9',
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
        titulo: 'Tarea 10',
        descripcion: 'Descripcion de Tarea 10',
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
        titulo: 'Tarea 11',
        descripcion: 'Descripcion de Tarea 11',
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
        titulo: 'Tarea 12',
        descripcion: 'Descripcion de Tarea 12',
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
        titulo: 'Tarea 13',
        descripcion: 'Descripcion de Tarea 13',
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
        titulo: 'Tarea 14',
        descripcion: 'Descripcion de Tarea 14',
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
        titulo: 'Tarea 15',
        descripcion: 'Descripcion de Tarea 15',
        date: '2019-06-25',
        estado: 'new',
        verified: true,
        activity: 90,
        representative: {
          responsable: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 30236,
      }
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
