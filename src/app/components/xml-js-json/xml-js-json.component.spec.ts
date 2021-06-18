import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlJsJsonComponent } from './xml-js-json.component';

describe('XmlJsJsonComponent', () => {
  let component: XmlJsJsonComponent;
  let fixture: ComponentFixture<XmlJsJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlJsJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlJsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
