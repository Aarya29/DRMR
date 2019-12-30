import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBreakComponent } from './knowledge-break.component';

describe('KnowledgeBreakComponent', () => {
  let component: KnowledgeBreakComponent;
  let fixture: ComponentFixture<KnowledgeBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
