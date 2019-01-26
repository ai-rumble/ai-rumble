import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StrapiService } from './strapi.service';

describe('Strapi Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should create', () => {
    const service: StrapiService = TestBed.get(StrapiService);
    expect(service).toBeTruthy();
  });
});
