import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukterComponent } from './produkter.component';

describe('ProdukterComponent', () => {
  let component: ProdukterComponent;
  let fixture: ComponentFixture<ProdukterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdukterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdukterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
