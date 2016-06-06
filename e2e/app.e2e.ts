import { AccompanyaPage } from './app.po';

describe('accompanya App', function() {
  let page: AccompanyaPage;

  beforeEach(() => {
    page = new AccompanyaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('accompanya works!');
  });
});
