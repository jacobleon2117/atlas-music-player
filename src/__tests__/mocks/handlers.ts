import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/v1/playlist', () => {
    return HttpResponse.json([
      {
        id: "test-1",
        title: "Test Song 1",
        artist: "Test Artist 1",
        genre: "Test Genre",
        duration: 180
      },
      {
        id: "test-2",
        title: "Test Song 2",
        artist: "Test Artist 2",
        genre: "Test Genre",
        duration: 200
      }
    ])
  }),

  http.get('/api/v1/songs/:songId', ({ params }) => {
    const { songId } = params
    return HttpResponse.json({
      id: songId,
      title: "Test Song",
      artist: "Test Artist",
      genre: "Test Genre",
      duration: 180,
      cover: "test-cover-url",
      song: "test-song-url"
    })
  }),

  http.get('/api/v1/lyrics/:songId', () => {
    return HttpResponse.json({
      lyrics: "Test lyrics content"
    })
  })
]