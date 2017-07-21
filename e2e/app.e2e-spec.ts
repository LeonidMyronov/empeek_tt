import { EmpeekPage } from './app.po';

describe('empeek App', () => {
  let page: EmpeekPage;

  beforeEach(() => {
    page = new EmpeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
