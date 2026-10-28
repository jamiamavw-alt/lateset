// lateset-tracks.js — one song per DJ.
//
// Paste a public SoundCloud or Spotify link for each DJ:
//   SoundCloud: "https://soundcloud.com/artist/track-name"
//   Spotify:    "https://open.spotify.com/track/..."  (full song if you're logged in to Spotify
//               in this browser; a 30-second preview if you're not)
// No API key needed. Keep this file in the same folder as index.html.
//
// SAMPLE plays for every DJ who doesn't have their own song yet: "Girls Just Want to Have Fun" by Cyndi Lauper.
// Set a DJ to "" to use the simulated timer.

const SAMPLE = "https://open.spotify.com/track/4y1LsJpmMti1PfRQV9AWWe";

window.LATESET_TRACKS = {
  zb: "https://open.spotify.com/track/7JN46TALgEcGMhA83mWupQ", // Zara Bloom · Late Bloom (House) — "Lush Life (Alex Adair Remix)" by Zara Larsson
  dg: "https://open.spotify.com/track/22c6Yop5YVEAhw8UG6O1W1", // Deia Green · Dark and Stormy (R&B) — "My Muse" by Leon Thomas
  ml: "https://open.spotify.com/track/4Ev2R78P8cMZcdmv3RCUlI", // DJ MarBear · Adivas (Techno)
  jr: "https://open.spotify.com/track/3T5X9UDD29mFzJeRQtUfst", // Jamie Rose · Diva Down (Disco House) — "The Winner Takes It All" by Cher
  ms: SAMPLE, // Mirae Song     · Soft Static (Ambient)
  jl: SAMPLE, // Juniper Lake   · Rose Hour Sessions (Jazz)
  tv: SAMPLE, // Theo Vance     · Night Shift (Techno)
  eb: SAMPLE, // Ezra Bloom     · Pillow Tapes (Lo-fi)
  cr: "https://open.spotify.com/track/27QvYgBk0CHOVHthWnkuWt", // Cerulean · That's All (Pop) — "Vogue" by Madonna
};
