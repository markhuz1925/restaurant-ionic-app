import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuListDetailPage } from './menu-list-detail.page';

describe('MenuListDetailPage', () => {
  let component: MenuListDetailPage;
  let fixture: ComponentFixture<MenuListDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuListDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
