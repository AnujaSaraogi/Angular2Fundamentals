import { NgFundamentalsPage } from './app.po';

describe('ng-fundamentals App', () => {
  let page: NgFundamentalsPage;

  beforeEach(() => {
    page = new NgFundamentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
