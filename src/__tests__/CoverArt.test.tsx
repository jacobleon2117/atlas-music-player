import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt', () => {
  it('renders with all props', () => {
    const { container } = render(
      <CoverArt
        songId="test-id"
        coverUrl="test-cover.jpg"
        title="Test Song"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with minimal props', () => {
    const { container } = render(
      <CoverArt
        songId="test-id"
        coverUrl=""
        title=""
      />
    );
    expect(container).toMatchSnapshot();
  });
});