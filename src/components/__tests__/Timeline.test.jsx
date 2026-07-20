import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import { LanguageProvider } from '../../hooks/useTranslation';

const renderApp = () => {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

describe('ChronosLang Application Integration Tests', () => {
  it('renders application title and initial languages', () => {
    renderApp();
    // Verify title exists in the header or hero
    const titles = screen.getAllByText(/Programming Languages Timeline|Línea de Tiempo de Lenguajes/i);
    expect(titles.length).toBeGreaterThan(0);

    // Verify some of our language cards are rendered initially
    expect(screen.getByText('Fortran')).toBeInTheDocument();
    expect(screen.getByText('Lisp')).toBeInTheDocument();
    expect(screen.getByText('COBOL')).toBeInTheDocument();
  });

  it('filters languages by search query', async () => {
    renderApp();
    
    // Find search input
    const searchInput = screen.getByPlaceholderText(/Search by name|Buscar por nombre/i);
    
    // Search for "Rust"
    fireEvent.change(searchInput, { target: { value: 'Rust' } });
    
    // Verify "Rust" is visible and others are filtered out
    expect(screen.getByText('Rust')).toBeInTheDocument();
    expect(screen.queryByText('COBOL')).not.toBeInTheDocument();
    expect(screen.queryByText('Lisp')).not.toBeInTheDocument();
  });

  it('switches application language/locale', () => {
    renderApp();
    
    // Find the locale switcher button (EN/ES)
    const localeBtn = screen.getByRole('button', { name: /Toggle language/i });
    expect(localeBtn).toBeInTheDocument();
    
    // Click to toggle language to Spanish (or English depending on default)
    fireEvent.click(localeBtn);
    
    // Verify subtitle or headers changed to Spanish
    expect(screen.getByText(/Línea de Tiempo de Lenguajes/i)).toBeInTheDocument();
    
    // Toggle back
    fireEvent.click(localeBtn);
    expect(screen.getByText(/Programming Languages Timeline/i)).toBeInTheDocument();
  });

  it('opens details modal when clicking a language card, and closes it', () => {
    renderApp();
    
    // Find Fortran card and click it
    const fortranCard = screen.getByText('Fortran').closest('[role="button"]');
    expect(fortranCard).toBeInTheDocument();
    
    fireEvent.click(fortranCard);
    
    // Verify the modal details are shown
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Aerospace & Military Impact|Impacto Aeroespacial/i)).toBeInTheDocument();
    expect(screen.getByText(/Key Milestones|Hitos Clave/i)).toBeInTheDocument();
    
    // Find and click the close button
    const closeBtn = screen.getByLabelText(/Close|Cerrar/i);
    fireEvent.click(closeBtn);
    
    // Verify modal is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
