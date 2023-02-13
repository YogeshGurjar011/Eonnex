import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreesixtyComponent } from './threesixty.component';

describe('ThreesixtyComponent', () => {
  let component: ThreesixtyComponent;
  let fixture: ComponentFixture<ThreesixtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreesixtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreesixtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
