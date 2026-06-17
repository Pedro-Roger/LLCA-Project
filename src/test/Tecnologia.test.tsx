import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Tecnologia from '../pages/Tecnologia';
import { LangContext } from '../App';
import { translations } from '../translations';

const renderTecnologia = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
          <Tecnologia />
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Tecnologia page', () => {
  it('renders block1 headline', () => {
    renderTecnologia();
    expect(screen.getByText(translations.pt.tecnologia.block1.headline)).toBeInTheDocument();
  });

  it('renders TMP subtitle', () => {
    renderTecnologia();
    expect(screen.getByText(translations.pt.tecnologia.tmp.subtitle)).toBeInTheDocument();
  });

  it('renders 3 etapa titles', () => {
    renderTecnologia();
    translations.pt.tecnologia.etapas.forEach(e => {
      expect(screen.getByText(e.title)).toBeInTheDocument();
    });
  });

  it('renders diferente headline', () => {
    renderTecnologia();
    expect(screen.getByText(translations.pt.tecnologia.diferente.headline)).toBeInTheDocument();
  });

  it('renders 5 comparison rows', () => {
    renderTecnologia();
    translations.pt.tecnologia.diferente.rows.forEach(row => {
      expect(screen.getByText(row.traditional)).toBeInTheDocument();
      expect(screen.getByText(row.tmp)).toBeInTheDocument();
    });
  });

  it('renders 3 modelo pilares', () => {
    renderTecnologia();
    translations.pt.tecnologia.modelo.pilares.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('renders EN block1 headline when lang=en', () => {
    renderTecnologia('en');
    expect(screen.getByText(translations.en.tecnologia.block1.headline)).toBeInTheDocument();
  });
});
