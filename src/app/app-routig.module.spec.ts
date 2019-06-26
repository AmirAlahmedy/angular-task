import { AppRoutigModule } from './app-routig.module';

describe('AppRoutigModule', () => {
  let appRoutigModule: AppRoutigModule;

  beforeEach(() => {
    appRoutigModule = new AppRoutigModule();
  });

  it('should create an instance', () => {
    expect(appRoutigModule).toBeTruthy();
  });
});
