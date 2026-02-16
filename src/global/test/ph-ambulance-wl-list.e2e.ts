import { newE2EPage } from '@stencil/core/testing';

describe('ph-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ph-ambulance-wl-list></ph-ambulance-wl-list>');

    const element = await page.find('ph-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
