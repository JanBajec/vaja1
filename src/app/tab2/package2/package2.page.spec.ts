import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Package2Page } from './package2.page';

describe('Package2Page', () => {
  let component: Package2Page;
  let fixture: ComponentFixture<Package2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Package2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
