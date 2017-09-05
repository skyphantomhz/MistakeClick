import { MistakeClickPage } from './app.po';

describe('mistake-click App', () => {
  let page: MistakeClickPage;

  beforeEach(() => {
    page = new MistakeClickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
