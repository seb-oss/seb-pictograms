import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictogramListComponent } from './pictogram-list.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PictogramsService } from 'src/app/services/pictograms.service';

const pictogramsServiceMock = {
  pictogram: [],
};

describe('IconsComponent', () => {
  let component: PictogramListComponent;
  let fixture: ComponentFixture<PictogramListComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [PictogramListComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [ { provide: PictogramsService, useValue: pictogramsServiceMock } ],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictogramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
