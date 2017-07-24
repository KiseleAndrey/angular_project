import { WebUiPage } from './app.po';

describe('web-ui App', () => {
  let page: WebUiPage;

  beforeEach(() => {
    page = new WebUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
