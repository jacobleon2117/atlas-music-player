import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';

describe('MusicPlayer', () => {
  beforeEach(() => {
  });

  it('displays first song from playlist as current song by default', async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Song 1')).toBeInTheDocument();
      expect(screen.getByText('Test Artist 1')).toBeInTheDocument();
    });
  });

  it('toggles play/pause when clicking play button', async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.getByLabelText('Play')).toBeInTheDocument();
    });

    const playButton = screen.getByLabelText('Play');
    fireEvent.click(playButton);
    
    expect(screen.getByLabelText('Pause')).toBeInTheDocument();
    
    fireEvent.click(screen.getByLabelText('Pause'));
    expect(screen.getByLabelText('Play')).toBeInTheDocument();
  });

  it('changes to next song when clicking forward button', async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Song 1')).toBeInTheDocument();
    });

    const forwardButton = screen.getByLabelText('Next song');
    fireEvent.click(forwardButton);

    await waitFor(() => {
      expect(screen.getByText('Test Song 2')).toBeInTheDocument();
    });
  });

  it('changes to previous song when clicking back button', async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => {
      const forwardButton = screen.getByLabelText('Next song');
      fireEvent.click(forwardButton);
      expect(screen.getByText('Test Song 2')).toBeInTheDocument();
    });

    const backButton = screen.getByLabelText('Previous song');
    fireEvent.click(backButton);

    await waitFor(() => {
      expect(screen.getByText('Test Song 1')).toBeInTheDocument();
    });
  });

  it('changes speed when clicking speed button', async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
      expect(screen.getByText('1x')).toBeInTheDocument();
    });

    const speedButton = screen.getByText('1x');
    fireEvent.click(speedButton);
    expect(screen.getByText('2x')).toBeInTheDocument();

    fireEvent.click(speedButton);
    expect(screen.getByText('0.5x')).toBeInTheDocument();
  });
});