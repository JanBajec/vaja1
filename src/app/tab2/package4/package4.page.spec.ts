import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Package4Page } from './package4.page';

describe('Package4Page', () => {
  let component: Package4Page;
  let fixture: ComponentFixture<Package4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Package4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
