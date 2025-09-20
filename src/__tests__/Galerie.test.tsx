import { render, screen, fireEvent } from '@testing-library/react';
import { Gallery } from '../components/gallery';
import { galleryImages } from '../../data/galleryImages'; // Galerie-Daten importieren

const mockImages: typeof galleryImages = galleryImages.slice(0, 3); // Kleine Test-Subset mit Type

describe('Gallery Component', () => {
  it('renders gallery with images', () => {
    render(<Gallery images={mockImages} categories={['Alle', 'Dachreinigung']} />);
    expect(screen.getAllByRole('button')).toHaveLength(mockImages.length);
    expect(screen.getByText('Alle')).toBeInTheDocument();
  });

  it('filters images by category', () => {
    render(<Gallery images={mockImages} categories={['Alle', 'Dachreinigung']} />);
    fireEvent.click(screen.getByText('Dachreinigung'));
    // Nur Dachreinigung-Bilder sichtbar
    const dachImages = mockImages.filter((img: any) => img.category === 'Dachreinigung');
    expect(screen.getAllByRole('button')).toHaveLength(dachImages.length);
  });

  it('shows no images message for empty category', () => {
    render(<Gallery images={[]} categories={['Alle']} />);
    expect(screen.getByText('Keine Bilder in dieser Kategorie gefunden.')).toBeInTheDocument();
  });

  it('has accessibility for buttons', () => {
    render(<Gallery images={mockImages} categories={['Alle']} />);
    const filterButton = screen.getByRole('button', { name: /Filter nach Alle/i });
    expect(filterButton).toBeInTheDocument();
    expect(filterButton).toHaveAttribute('aria-pressed', 'true');
  });
});