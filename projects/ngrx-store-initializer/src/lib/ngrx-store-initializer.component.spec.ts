import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreInitializerComponent } from './ngrx-store-initializer.component';

describe('NgrxStoreInitializerComponent', () => {
  let component: NgrxStoreInitializerComponent;
  let fixture: ComponentFixture<NgrxStoreInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxStoreInitializerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStoreInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
