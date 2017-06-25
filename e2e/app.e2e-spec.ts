import { NgxKitWebsitePage } from './app.po';

describe('ngx-kit-website App', () => {
  let page: NgxKitWebsitePage;

  beforeEach(() => {
    page = new NgxKitWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
