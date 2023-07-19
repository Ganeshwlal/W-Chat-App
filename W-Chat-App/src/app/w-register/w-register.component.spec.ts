import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WRegisterComponent } from './w-register.component';

describe('WRegisterComponent', () => {
  let component: WRegisterComponent;
  let fixture: ComponentFixture<WRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
