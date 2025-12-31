import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNested } from './tabs-nested';

describe('TabsNested', () => {
  let component: TabsNested;
  let fixture: ComponentFixture<TabsNested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsNested]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsNested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
