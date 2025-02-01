import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import VolumeControls from '../components/VolumeControls';

describe('VolumeControls', () => {
  it('renders with default volume', () => {
    const { container } = render(
      <VolumeControls
        volume={50}
        setVolume={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with zero volume', () => {
    const { container } = render(
      <VolumeControls
        volume={0}
        setVolume={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with max volume', () => {
    const { container } = render(
      <VolumeControls
        volume={100}
        setVolume={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});