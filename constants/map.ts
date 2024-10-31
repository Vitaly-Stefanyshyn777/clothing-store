export const mapOptions = {
  searchOptions: {
    key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY,
    language: 'uk-UA', // Змінюємо мову на українську
    limit: 5,
  },
  autocompleteOptions: {
    key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY,
    language: 'uk-UA', // Змінюємо мову на українську
  },
}
