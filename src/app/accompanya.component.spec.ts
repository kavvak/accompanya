import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AccompanyaAppComponent } from '../app/accompanya.component';

beforeEachProviders(() => [AccompanyaAppComponent]);

describe('App: Accompanya', () => {
  it('should create the app',
      inject([AccompanyaAppComponent], (app: AccompanyaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'accompanya works!\'',
      inject([AccompanyaAppComponent], (app: AccompanyaAppComponent) => {
    expect(app.title).toEqual('accompanya works!');
  }));
});
