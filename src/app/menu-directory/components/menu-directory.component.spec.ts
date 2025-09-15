import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDirectoryComponent } from './menu-directory.component';

describe('MenuDirectoryComponent', () => {
  let component: MenuDirectoryComponent;
  let fixture: ComponentFixture<MenuDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDirectoryComponent]
    });
    fixture = TestBed.createComponent(MenuDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
