import { Resolve } from '@angular/router';
import { delay, Observable, of, timer } from 'rxjs';

export class RouteResolver implements Resolve<any> {
  resolve(): Observable<any> {
    return of(true).pipe(delay(5000));
  }
}
