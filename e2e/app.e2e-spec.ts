import { YoutubeApplicationNgPage } from './app.po';

describe('youtube-application-ng App', function() {
  let page: YoutubeApplicationNgPage;

  beforeEach(() => {
    page = new YoutubeApplicationNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
