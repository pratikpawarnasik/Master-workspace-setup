import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  languageChange: EventEmitter<string> = new EventEmitter<string>();
}
