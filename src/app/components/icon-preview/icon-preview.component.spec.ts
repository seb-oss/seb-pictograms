import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPreviewComponent } from './icon-preview.component';

describe('IconPreviewComponent', () => {
  let component: IconPreviewComponent;
  let fixture: ComponentFixture<IconPreviewComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [IconPreviewComponent]
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
