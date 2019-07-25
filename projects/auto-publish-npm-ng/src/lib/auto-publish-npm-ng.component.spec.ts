import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPublishNpmNgComponent } from './auto-publish-npm-ng.component';

describe('AutoPublishNpmNgComponent', () => {
  let component: AutoPublishNpmNgComponent;
  let fixture: ComponentFixture<AutoPublishNpmNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPublishNpmNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPublishNpmNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
