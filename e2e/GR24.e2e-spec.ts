import { by, browser, element } from 'protractor';

import { Utils } from './pages/app.utils';

describe('Zonemaster test GR24 - [Able to specify delegation parameters]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    utils.activeAdvancedOptions();
  });

  it('should be able to select Default profile', () => {
    expect(element(by.css('div[formarrayname="itemRows"]')).getSize()).toEqual(1);
  });

  // TODO !!!
});
