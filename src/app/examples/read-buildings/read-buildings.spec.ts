import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBuildings } from './read-buildings';

describe('ReadBuildings', () => {
  let component: ReadBuildings;
  let fixture: ComponentFixture<ReadBuildings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadBuildings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadBuildings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
