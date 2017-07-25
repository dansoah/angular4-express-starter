import { YohPage } from './app.po';

describe('yoh App', () => {
  let page: YohPage;

  beforeEach(() => {
    page = new YohPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
