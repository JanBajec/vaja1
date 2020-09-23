import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Package3Page } from './package3.page';

describe('Package3Page', () => {
  let component: Package3Page;
  let fixture: ComponentFixture<Package3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Package3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
