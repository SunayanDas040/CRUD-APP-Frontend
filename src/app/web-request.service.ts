import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOt_URL: any;

  constructor(private http: HttpClient) {
    this.ROOt_URL = "http://localhost:3000"
  }

  get(uri: string) {
    return this.http.get(`${this.ROOt_URL}/${uri}`)
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOt_URL}/${uri}`, payload)
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOt_URL}/${uri}`, payload)
  }

  delete(uri: string, payload: Object) {
    return this.http.delete(`${this.ROOt_URL}/${uri}`, payload)
  }
}
