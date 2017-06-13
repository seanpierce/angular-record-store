import { OnlineStorePage } from './app.po';

describe('online-store App', () => {
  let page: OnlineStorePage;

  beforeEach(() => {
    page = new OnlineStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
