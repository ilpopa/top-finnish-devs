import { TopFinnishDevsPage } from './app.po';

describe('top-finnish-devs App', function() {
  let page: TopFinnishDevsPage;

  beforeEach(() => {
    page = new TopFinnishDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
