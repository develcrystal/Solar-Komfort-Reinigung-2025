import { render, screen } from '@testing-library/react';
import { Hero } from '../components/Hero';

describe('Hero Component', () => {
  it('renders title and subtitle', () => {
    render(<Hero />);
    expect(screen.getByText('PROFESSIONELLE GEBÄUDEREINIGUNG')).toBeInTheDocument();
    expect(screen.getByText(/Solar Komfort Tochterfirma/)).toBeInTheDocument();
  });

  it('renders custom title and subtitle', () => {
    const customTitle = 'Custom Title';
    const customSubtitle = 'Custom Subtitle';
    render(<Hero title={customTitle} subtitle={customSubtitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Kostenlos anfragen/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Leistungen ansehen/ })).toBeInTheDocument();
  });

  it('has accessibility for links', () => {
    render(<Hero />);
    const contactLink = screen.getByRole('link', { name: /Kostenlos anfragen/ });
    expect(contactLink).toHaveAttribute('href', '/kontakt');
  });
});