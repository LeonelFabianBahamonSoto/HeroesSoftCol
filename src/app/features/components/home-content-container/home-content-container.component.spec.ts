import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentContainerComponent } from './home-content-container.component';

describe('HomeContentContainerComponent', () => {
  let component: HomeContentContainerComponent;
  let fixture: ComponentFixture<HomeContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContentContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
