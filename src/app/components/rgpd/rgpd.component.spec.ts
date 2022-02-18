import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgpdComponent } from './rgpd.component';

describe('RgpdComponent', () => {
  let component: RgpdComponent;
  let fixture: ComponentFixture<RgpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Sert à vérifier s'il existe un composant RGPD
   * @return boolean:true
   */
  it('should have had an rgpd component', (() => {
    const fixture = TestBed.createComponent(RgpdComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /**
   * Sert à vérifier le titre, ayant pour id 'title'
   * @return string:'Mentions Légales'
   */
  it('should have had the title ...', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#title');
    expect(btn.innerHTML).toBe('Mentions Légales');
  });

  /**
   * Sert à vérifier si la feuille de style, à b
   */
  it('should have had no padding', () => {
    const fixture = TestBed.createComponent(RgpdComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('div');
    expect(btn.style.padding).toBeFalsy;
  });
});
