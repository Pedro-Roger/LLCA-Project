import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Historia from '../pages/Historia';
import { LangContext } from '../App';
import { translations } from '../translations';

const renderHistoria = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
          <Historia />
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Historia page', () => {
  it('renders block1 headline', () => {
    renderHistoria();
    expect(screen.getByText(translations.pt.historia.block1.headline)).toBeInTheDocument();
  });

  it('renders all 4 origin paragraphs', () => {
    renderHistoria();
    translations.pt.historia.block1.paragraphs.forEach(p => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });

  it('renders founder name', () => {
    renderHistoria();
    expect(screen.getByText(translations.pt.historia.block2.name)).toBeInTheDocument();
  });

  it('renders all 4 credentials', () => {
    renderHistoria();
    translations.pt.historia.block2.credentials.forEach(c => {
      expect(screen.getByText(c)).toBeInTheDocument();
    });
  });

  it('renders block3 headline', () => {
    renderHistoria();
    expect(screen.getByText(translations.pt.historia.block3.headline)).toBeInTheDocument();
  });

  it('renders EN block1 headline when lang=en', () => {
    renderHistoria('en');
    expect(screen.getByText(translations.en.historia.block1.headline)).toBeInTheDocument();
  });
});
