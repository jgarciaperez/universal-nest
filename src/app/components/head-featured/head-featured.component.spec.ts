import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFeaturedComponent } from './head-featured.component';

describe('HeadFeaturedComponent', () => {
  let component: HeadFeaturedComponent;
  let fixture: ComponentFixture<HeadFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
