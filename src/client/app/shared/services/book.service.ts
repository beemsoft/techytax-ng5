import {Http} from "@angular/http";
import {contentHeaders} from "../../common/headers";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Config} from "../config/env.config";
import Collection = _.Collection;

export enum BookType {
  MACHINERY = 1,
  CAR = 2,
  CURRENT_ASSETS = 3,
  NON_CURRENT_ASSETS = 4,
  PENSION = 5,
  STOCK = 6,
  OFFICE = 7,
  VAT_TO_BE_PAID = 8,
  INVOICES_TO_BE_PAID = 9
}

export class BookValue {
  balanceType: BookType;
  balanceTypeDescription: string;
  bookYear: number;
  saldo: number;
}

@Injectable()
export class BookService {
  private baseURL: string = Config.API;

  constructor(private http: Http) {}

  addBookValue(bookValue: BookValue) {
    let body = JSON.stringify(bookValue);
    contentHeaders.set('Authorization', localStorage.getItem('jwt'));

    this.http.post(this.baseURL+'/auth/book', body, { headers: contentHeaders })
      .subscribe(
        response => {
          // localStorage.setItem('jwt', response.json().id_token);
          // this.router.parent.navigateByUrl('/vat');
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
  }

  updateBookValue(bookValue: BookValue) {
    let body = JSON.stringify(bookValue);
    contentHeaders.set('Authorization', localStorage.getItem('jwt'));
    let url = this.baseURL+'/auth/book';
    this.http.put(url, body, { headers: contentHeaders })
        .subscribe(
            response => {
              // localStorage.setItem('jwt', response.json().id_token);
              // this.router.parent.navigateByUrl('/vat');
            },
            error => {
              alert(error);
              console.log(error);
            }
        );
  }

  deleteBookValue(bookValue: BookValue) {
    contentHeaders.set('Authorization', localStorage.getItem('jwt'));

    this.http.delete(this.baseURL+'/auth/book/'+bookValue.id, { headers: contentHeaders })
      .subscribe(
        response => {
          // localStorage.setItem('jwt', response.json().id_token);
          // this.router.parent.navigateByUrl('/vat');
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
  }

  getBookValues(): Observable<BookValue> {
    contentHeaders.set('Authorization', localStorage.getItem('jwt'));
    return this.http.get(this.baseURL+'/auth/book', { headers: contentHeaders })
      .map(res => <BookValue> res.json())
      .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
