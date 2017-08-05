import { HorseNotesPage } from './app.po';

describe('horse-notes App', () => {
  let page: HorseNotesPage;

  beforeEach(() => {
    page = new HorseNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
