import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocComponent } from './poc.component';

describe('PocComponent', () => {
  let component: PocComponent;
  let fixture: ComponentFixture<PocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
