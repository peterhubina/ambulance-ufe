import { newE2EPage } from '@stencil/core/testing';

describe('ph120805-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ph120805-ambulance-wl-editor></ph120805-ambulance-wl-editor>');

    const element = await page.find('ph120805-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
