import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import { LangContext } from '../App';
import { translations } from '../translations';

const renderHome = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
          <Home />
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Home page', () => {
  it('renders hero subtitle', () => {
    renderHome();
    expect(screen.getByText(translations.pt.hero.subtitle)).toBeInTheDocument();
  });

  it('renders 3 tese column titles', () => {
    renderHome();
    translations.pt.home.tese.forEach(col => {
      expect(screen.getByText(col.title)).toBeInTheDocument();
    });
  });

  it('renders respalda intro text', () => {
    renderHome();
    expect(screen.getByText(translations.pt.home.respalda.intro)).toBeInTheDocument();
  });

  it('renders 5 area preview card titles', () => {
    renderHome();
    translations.pt.home.areasPreview.forEach(area => {
      expect(screen.getByText(area.title)).toBeInTheDocument();
    });
  });

  it('renders EN hero subtitle when lang=en', () => {
    renderHome('en');
    expect(screen.getByText(translations.en.hero.subtitle)).toBeInTheDocument();
  });
});
