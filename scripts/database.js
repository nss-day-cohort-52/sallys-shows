const database = {
  artists: [
    {
      id: 1,
      name: "Billy Joel",
      website: "billy.joel.com",
      genre: "Great"
    },
    {
      id: 2,
      name: "Beyonce The Great",
      website: "beyonce.com",
      genre: "Beyonce"
    },
    {
      id: 3,
      name: "Spice Girls",
      website: "nothingwithoutbeyonce.com",
      genre: "Spicy"
    }
  ],
  shows: [
    {
      id: 1,
      artistId: 2,
      city: "New York"
    },
    {
      id: 2,
      artistId: 1,
      city: "Paris"
    },
    {
      id: 3,
      artistId: 3,
      city: "Costa Rica"
    },
    {
      id: 4,
      artistId: 2,
      city: "London"
    },
    {
      id: 5,
      artistId: 3,
      city: "Costa Rica"
    },
    {
      id: 6,
      artistId: 2,
      city: "Costa Rica"
    }
  ]
}

export const getArtists = () => {
  return database.artists.map(artist => ({...artist}))
}
