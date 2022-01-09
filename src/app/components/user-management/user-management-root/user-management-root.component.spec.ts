import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementRootComponent } from './user-management-root.component';

describe('UserManagementRootComponent', () => {
  let component: UserManagementRootComponent;
  let fixture: ComponentFixture<UserManagementRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
