import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem', () => {
  const mockSong = {
    id: 'test-id',
    title: 'Test Song',
    artist: 'Test Artist',
    duration: 180
  };

  it('renders selected state', () => {
    const { container } = render(
      <PlayListItem
        song={mockSong}
        isSelected={true}
        onSelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders unselected state', () => {
    const { container } = render(
      <PlayListItem
        song={mockSong}
        isSelected={false}
        onSelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with different duration formats', () => {
    const songWithLongDuration = {
      ...mockSong,
      duration: 3600
    };
    const { container } = render(
      <PlayListItem
        song={songWithLongDuration}
        isSelected={false}
        onSelect={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});