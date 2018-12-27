import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsComponent } from './icons.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IconsService } from 'src/app/services/icons.service';

const iconsServiceMock = {
  icons: [],
};

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [IconsComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [ { provide: IconsService, useValue: iconsServiceMock } ],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
