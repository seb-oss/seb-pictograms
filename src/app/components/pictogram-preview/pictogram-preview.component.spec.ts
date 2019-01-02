import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictogramPreviewComponent } from './pictogram-preview.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DocumentService } from 'src/app/services/document.service';

const docServiceMock = {

};

describe('IconPreviewComponent', () => {
  let component: PictogramPreviewComponent;
  let fixture: ComponentFixture<PictogramPreviewComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [PictogramPreviewComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [ { provide: DocumentService, useValue: docServiceMock } ],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictogramPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
