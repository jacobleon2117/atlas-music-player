import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

describe('SongTitle', () => {
  it('renders with title and artist', () => {
    const { container } = render(
      <SongTitle
        title="Test Song"
        artist="Test Artist"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders loading state when props are empty', () => {
    const { container } = render(
      <SongTitle
        title=""
        artist=""
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders loading state when props are undefined', () => {
    const { container } = render(
      <SongTitle
        title={undefined}
        artist={undefined}
      />
    );
    expect(container).toMatchSnapshot();
  });
});