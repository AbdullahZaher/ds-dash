import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalPage } from './artical';

describe('ArticalPage', () => {
  let component: ArticalPage;
  let fixture: ComponentFixture<ArticalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
