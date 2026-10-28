// lateset-tracks.js — one song per DJ.
//
// Paste a public SoundCloud or Spotify link for each DJ:
//   SoundCloud: "https://soundcloud.com/artist/track-name"
//   Spotify:    "https://open.spotify.com/track/..."  (full song if you're logged in to Spotify
//               in this browser; a 30-second preview if you're not)
// No API key needed. Keep this file in the same folder as index.html.
//
// SAMPLE is SoundCloud's own example track (Forss, "Flickermood") from its Widget API docs,
// so every DJ plays something until you add your own. Set a DJ to "" to use the simulated timer.

const SAMPLE = "https://api.soundcloud.com/tracks/293";

window.LATESET_TRACKS = {
  zb: "https://open.spotify.com/track/1LFBygPkUZyFE0U7hJDWOb", // Zara Bloom · Late Bloom (House)
  dg: "https://open.spotify.com/track/22c6Yop5YVEAhw8UG6O1W1", // Deia Green · Dark and Stormy (R&B) — "My Muse" by Leon Thomas
  ml: "https://open.spotify.com/track/4Ev2R78P8cMZcdmv3RCUlI", // DJ MarBear · Concrete Sun (Techno)
  jr: "https://open.spotify.com/track/7GjZZf77XJYaa5W4S2NbpB", // Jamie Rose · Low Tide Hours (Disco House)
  ms: SAMPLE, // Mirae Song     · Soft Static (Ambient)
  jl: SAMPLE, // Juniper Lake   · Rose Hour Sessions (Jazz)
  tv: SAMPLE, // Theo Vance     · Night Shift (Techno)
  eb: SAMPLE, // Ezra Bloom     · Pillow Tapes (Lo-fi)
};
