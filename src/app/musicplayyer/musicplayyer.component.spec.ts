import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplayyerComponent } from './musicplayyer.component';

describe('MusicplayyerComponent', () => {
  let component: MusicplayyerComponent;
  let fixture: ComponentFixture<MusicplayyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicplayyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicplayyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
