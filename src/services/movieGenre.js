export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Sci-fi" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Romantic" }
];

export function getGenres() {
  return genres.filter(g => g);
}
