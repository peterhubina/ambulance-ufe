import { newE2EPage } from '@stencil/core/testing';

describe('ph-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ph120805-ambulance-wl-list></ph120805-ambulance-wl-list>');

    const element = await page.find('ph120805-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
