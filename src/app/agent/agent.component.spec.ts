import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentComponent } from './agent.component';

describe('AgentComponent', () => {
  let component: AgentComponent;
  let fixture: ComponentFixture<AgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Agent Component');
  });

  // Add more test cases as needed
  
});
