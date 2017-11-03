import { by, browser, element } from 'protractor';

import { Utils } from './pages/app.utils';

describe('Zonemaster test GR20 - [Capable to select one of the drop down menu in the advanced option]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    utils.activeAdvancedOptions();
  });

  it('should be able to select Default profile', () => {
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('default_profile');
  });
  it('should be able to select IANA profile', () => {
    element(by.cssContainingText('option', 'IANA profile')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('test_profile_1');
  });
  it('should be able to select Test profile 2', () => {
    element(by.cssContainingText('option', 'Test profile 2')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('test_profile_2');
  });


  it('should not have default for algorithm', () => {
    expect(element(by.css('select[name="form.algorithm"]')).getAttribute('ng-reflect-model')).toEqual('');
  });
  it('should be able to select Test profile 2', () => {
    element(by.cssContainingText('option', 'DSA/SHA1')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('3');
  });
  it('should be able to select Test profile 2', () => {
    element(by.cssContainingText('option', 'ECDSAP256SHA256')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('13');
  });


  it('should not have default for digtype', () => {
    expect(element(by.css('select[name="form.digtype"]')).getAttribute('ng-reflect-model')).toEqual('');
  });
  it('should be able to select Test profile 2', () => {
    element(by.cssContainingText('option', 'SHA-1')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('1');
  });
  it('should be able to select Test profile 2', () => {
    element(by.cssContainingText('option', 'SHA-384')).click();
    expect(element(by.css('select[name="form.profile"]')).getAttribute('ng-reflect-model')).toEqual('4');
  });
});
