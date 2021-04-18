import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlbumComponent } from './detail-album.component';

describe('DetailAlbumComponent', () => {
  let component: DetailAlbumComponent;
  let fixture: ComponentFixture<DetailAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
