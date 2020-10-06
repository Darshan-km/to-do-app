import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('executes httpget', fakeAsync(()=>{
    let response = {
      key:"value"
    };

    service.getUsers().subscribe(data => {
      expect(data).toBeTruthy()
    });

    let request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(request.request.method).toBe('GET');

    request.flush(response);
    
  }))
});
