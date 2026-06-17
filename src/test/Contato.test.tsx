import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Contato from '../pages/Contato';
import { LangContext } from '../App';
import { translations } from '../translations';

const renderContato = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
          <Contato />
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Contato page', () => {
  it('renders headline', () => {
    renderContato();
    expect(screen.getByText(translations.pt.contato.headline)).toBeInTheDocument();
  });

  it('renders 3 contact card titles', () => {
    renderContato();
    translations.pt.contato.cards.forEach(card => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });

  it('renders institutional CNPJ', () => {
    renderContato();
    expect(screen.getByText(translations.pt.contato.info.cnpj)).toBeInTheDocument();
  });

  it('renders form submit button', () => {
    renderContato();
    expect(screen.getByText(translations.pt.contato.form.submit)).toBeInTheDocument();
  });

  it('renders all 4 subject options', () => {
    renderContato();
    const subjects = translations.pt.contato.form.subjects;
    expect(screen.getByText(subjects.producer)).toBeInTheDocument();
    expect(screen.getByText(subjects.partner)).toBeInTheDocument();
    expect(screen.getByText(subjects.researcher)).toBeInTheDocument();
    expect(screen.getByText(subjects.other)).toBeInTheDocument();
  });

  it('renders EN content when lang=en', () => {
    renderContato('en');
    expect(screen.getByText(translations.en.contato.headline)).toBeInTheDocument();
    expect(screen.getByText(translations.en.contato.cards[0].title)).toBeInTheDocument();
  });
});
