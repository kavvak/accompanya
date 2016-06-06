export class AccompanyaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('accompanya-app h1')).getText();
  }
}
