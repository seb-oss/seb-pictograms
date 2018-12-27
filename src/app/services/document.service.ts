import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentClickSubject: Subject<MouseEvent>;

  constructor(
    @Inject(DOCUMENT) private dom: Document
  ) {
    this.documentClickSubject = new Subject<MouseEvent>();
    dom.addEventListener('click', (event) => {
      this.documentClickSubject.next(event);
    });
  }

  get clickObservable(): Observable<MouseEvent> {
    return this.documentClickSubject;
  }

  public copy(value: string): Promise<string> {
    return new Promise<string>(
      (resolve, reject): void => {
        let textarea = null;
        try {
          textarea = this.dom.createElement('textarea');
          textarea.style.height = '0px';
          textarea.style.left = '-100px';
          textarea.style.opacity = '0';
          textarea.style.position = 'fixed';
          textarea.style.top = '-100px';
          textarea.style.width = '0px';
          this.dom.body.appendChild(textarea);
          textarea.value = value;
          textarea.select();
          this.dom.execCommand('copy');
          resolve(value);
        } catch (ex) {
          reject(ex);
        } finally {
          if (textarea && textarea.parentNode) {
            textarea.parentNode.removeChild(textarea);
          }
        }
      }
    );
  }
}
