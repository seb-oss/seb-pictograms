import { TestBed, inject } from '@angular/core/testing';
import { DocumentService } from './document.service';
import { DOCUMENT } from '@angular/common';

describe('DocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentService]
    });
  });

  it('should be created', inject([DocumentService], (service: DocumentService) => {
    expect(service).toBeTruthy();
  }));

  it('should reolve copy method', (done) => {
    inject([DocumentService], (service: DocumentService) => {
      service.copy('test').then(value => {
        expect(value).toBe('test');
        done();
      });
    })();
  });
  it('should reject copy method (execCommand)', (done) => {
    inject([DocumentService, DOCUMENT], (service: DocumentService, dom: any) => {
      dom.execCommand = () => { throw Error('no command'); };
      service.copy('test')
        .catch(reason => {
          expect(reason).not.toBeUndefined();
          done();
        });
    })();
  });
  it('should reject copy method (createElement)', (done) => {
    inject([DocumentService, DOCUMENT], (service: DocumentService, dom: any) => {
      const createElement = dom.createElement;
      dom.createElement = () => undefined;
      service.copy('test')
        .catch(reason => {
          dom.createElement = createElement;
          expect(reason).toBeDefined();
          done();
        });
    })();
  });
  it('should trigger click', (done) => {
    inject([DocumentService, DOCUMENT], (service: DocumentService, dom: any) => {
      const sub = service.clickObservable.subscribe((event) => {
        expect(event).toBeDefined();
        sub.unsubscribe();
        done();
      });
      dom.body.click();
    })();
  });
});
