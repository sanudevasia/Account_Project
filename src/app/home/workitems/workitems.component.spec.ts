import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitemsComponent } from './workitems.component';

describe('WorkitemsComponent', () => {
  let component: WorkitemsComponent;
  let fixture: ComponentFixture<WorkitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
