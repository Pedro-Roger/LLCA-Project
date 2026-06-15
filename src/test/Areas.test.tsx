import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Areas from '../pages/Areas';
import { LangContext, ThemeContext } from '../App';
import { translations } from '../translations';

const renderAreas = (lang: 'pt' | 'en' = 'pt') =>
  render(
    <MemoryRouter>
      <LangContext.Provider value={{ lang, setLang: () => {} }}>
        <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
          <Areas />
        </ThemeContext.Provider>
      </LangContext.Provider>
    </MemoryRouter>
  );

describe('Areas page', () => {
  it('renders all 6 area titles', () => {
    renderAreas();
    translations.pt.areas.forEach(area => {
      expect(screen.getByText(area.title)).toBeInTheDocument();
    });
  });

  it('renders all 6 area taglines', () => {
    renderAreas();
    translations.pt.areas.forEach(area => {
      expect(screen.getByText(area.tagline)).toBeInTheDocument();
    });
  });

  it('renders status badges for each area', () => {
    renderAreas();
    translations.pt.areas.forEach(area => {
      expect(screen.getByText(area.status)).toBeInTheDocument();
    });
  });

  it('renders EN area titles when lang=en', () => {
    renderAreas('en');
    expect(screen.getByText('Agriculture')).toBeInTheDocument();
    expect(screen.getByText('Human Health')).toBeInTheDocument();
    expect(screen.getByText('Environment')).toBeInTheDocument();
  });
});
