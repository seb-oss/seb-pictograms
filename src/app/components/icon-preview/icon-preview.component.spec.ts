import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPreviewComponent } from './icon-preview.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DocumentService } from 'src/app/services/document.service';

const docServiceMock = {

};

describe('IconPreviewComponent', () => {
  let component: IconPreviewComponent;
  let fixture: ComponentFixture<IconPreviewComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [IconPreviewComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [ { provide: DocumentService, useValue: docServiceMock } ],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
