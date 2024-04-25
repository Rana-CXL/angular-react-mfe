import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDemoComponent } from './ang-demo.component';

describe('AngDemoComponent', () => {
  let component: AngDemoComponent;
  let fixture: ComponentFixture<AngDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
