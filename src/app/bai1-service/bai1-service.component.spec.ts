import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1ServiceComponent } from './bai1-service.component';

describe('Bai1ServiceComponent', () => {
  let component: Bai1ServiceComponent;
  let fixture: ComponentFixture<Bai1ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai1ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
