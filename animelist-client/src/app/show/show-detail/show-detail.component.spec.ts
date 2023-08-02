import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailComponent } from './show-detail.component';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDetailComponent],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{slug: 'test'}])
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
