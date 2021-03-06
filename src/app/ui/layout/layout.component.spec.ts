import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DropdownModule, MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MDBBootstrapModulesPro,
        DropdownModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [

      ],
      declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
