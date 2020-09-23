import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Package1Page } from './package1.page';

describe('Package1Page', () => {
  let component: Package1Page;
  let fixture: ComponentFixture<Package1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Package1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
