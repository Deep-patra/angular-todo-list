import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  print() {
    console.log("sevice is called with provided in root")
  }
}
