import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoProgressoComponent } from './cartao-progresso.component';

describe('CartaoProgressoComponent', () => {
  let component: CartaoProgressoComponent;
  let fixture: ComponentFixture<CartaoProgressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoProgressoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
