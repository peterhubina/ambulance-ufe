import { newE2EPage } from '@stencil/core/testing';

describe('ph120805-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ph120805-ambulance-wl-app></ph120805-ambulance-wl-app>');

    const element = await page.find('ph120805-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
