import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelByNameComponent } from './duel-by-name.component';

describe('DuelByNameComponent', () => {
  let component: DuelByNameComponent;
  let fixture: ComponentFixture<DuelByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuelByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
