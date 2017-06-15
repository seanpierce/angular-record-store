import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumToEditComponent } from './album-to-edit.component';

describe('AlbumToEditComponent', () => {
  let component: AlbumToEditComponent;
  let fixture: ComponentFixture<AlbumToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
