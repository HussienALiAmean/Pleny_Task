import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private stateSubject = new BehaviorSubject<boolean>(false); 
  state$: Observable<boolean> = this.stateSubject.asObservable();


  changecart(newState: boolean) {
    this.stateSubject.next(newState);
  }
}
