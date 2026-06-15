import { describe, it, expect } from 'vitest';
import { translations } from '../translations';

describe('translations', () => {
  it('has PT and EN nav with 6 items', () => {
    expect(translations.pt.nav.items).toHaveLength(6);
    expect(translations.en.nav.items).toHaveLength(6);
  });

  it('has historia page in PT and EN', () => {
    expect(translations.pt.historia.block1.headline).toBeTruthy();
    expect(translations.en.historia.block1.headline).toBeTruthy();
  });

  it('has tecnologia page in PT and EN', () => {
    expect(translations.pt.tecnologia.tmp.subtitle).toBeTruthy();
    expect(translations.en.tecnologia.tmp.subtitle).toBeTruthy();
  });

  it('has 6 areas in PT and EN', () => {
    expect(translations.pt.areas).toHaveLength(6);
    expect(translations.en.areas).toHaveLength(6);
  });

  it('has publicacoes page in PT and EN', () => {
    expect(translations.pt.publicacoes.newsletter.cta).toBeTruthy();
    expect(translations.en.publicacoes.newsletter.cta).toBeTruthy();
  });

  it('has contato page with 3 cards', () => {
    expect(translations.pt.contato.cards).toHaveLength(3);
    expect(translations.en.contato.cards).toHaveLength(3);
  });

  it('has home tese with 3 columns', () => {
    expect(translations.pt.home.tese).toHaveLength(3);
    expect(translations.en.home.tese).toHaveLength(3);
  });

  it('has home respalda with 3 groups', () => {
    expect(translations.pt.home.respalda.groups).toHaveLength(3);
    expect(translations.en.home.respalda.groups).toHaveLength(3);
  });

  it('has home areas preview with 5 items', () => {
    expect(translations.pt.home.areasPreview).toHaveLength(5);
    expect(translations.en.home.areasPreview).toHaveLength(5);
  });
});
