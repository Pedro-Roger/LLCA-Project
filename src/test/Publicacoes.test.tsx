import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Publicacoes from '../pages/Publicacoes';
import { LangContext } from '../App';
import { translations } from '../translations';

const renderPublicacoes = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
          <Publicacoes />
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Publicacoes page', () => {
  it('renders 3 block titles', () => {
    renderPublicacoes();
    const blocks = translations.pt.publicacoes.blocks;
    expect(screen.getByText(blocks.noticias.title)).toBeInTheDocument();
    expect(screen.getByText(blocks.informativos.title)).toBeInTheDocument();
    expect(screen.getByText(blocks.blog.title)).toBeInTheDocument();
  });

  it('renders newsletter headline', () => {
    renderPublicacoes();
    expect(screen.getByText(translations.pt.publicacoes.newsletter.headline)).toBeInTheDocument();
  });

  it('renders newsletter CTA button', () => {
    renderPublicacoes();
    expect(screen.getByText(translations.pt.publicacoes.newsletter.cta)).toBeInTheDocument();
  });

  it('renders EN content when lang=en', () => {
    renderPublicacoes('en');
    expect(screen.getByText(translations.en.publicacoes.blocks.noticias.title)).toBeInTheDocument();
    expect(screen.getByText(translations.en.publicacoes.newsletter.cta)).toBeInTheDocument();
  });
});
