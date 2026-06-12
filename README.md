# Pokémon Memory Card Game

A fun and interactive memory card game built with React and Vite. Test your memory by clicking on Pokémon cards, but be careful not to click on the same card twice!

## Features

- **Dynamic Pokémon Cards**: Features 15 randomly selected Pokémon fetched from the [PokéAPI](https://pokeapi.co/)
- **Card Shuffling**: After each click, cards are automatically shuffled to increase difficulty
- **Score Tracking**: Keep track of your current score and personal best score
- **Game Reset**: Clicking a card twice resets your score to 0 and keeps your best score
- **Responsive Design**: Clean and modern UI with styled card components
- **Fast Development**: Built with Vite for instant HMR (Hot Module Replacement) during development

## How to Play

1. Start the game and see 15 Pokémon cards displayed on the screen
2. Click on a card to earn a point
3. Each time you click, the cards shuffle to a new position
4. Try to click as many unique cards as possible without clicking the same card twice
5. If you click a card you've already clicked, the game resets and your score goes back to 0
6. Your best score is saved and displayed at the top

## Project Structure

```
src/
├── components/
│   ├── Card.jsx           # Individual card component
│   ├── CardsSection.jsx   # Container for all cards
│   └── Header.jsx         # Game title and scoreboard
├── styles/
│   ├── card.css           # Card styling
│   ├── cardSection.css    # Cards grid styling
│   └── header.css         # Header styling
├── App.jsx                # Main application component
├── App.css                # Application styles
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Technologies Used

- **React 19**: Modern JavaScript library for building user interfaces
- **Vite 8**: Next-generation frontend build tool
- **JavaScript ES6+**: Modern JavaScript features
- **CSS3**: Styling and responsive design
- **PokéAPI**: External API for Pokémon data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd Memory-Card-
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or the next available port)

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Key Learning Points

This project demonstrates:

- **React Hooks**: Using `useState` for state management and `useEffect` for side effects
- **Component Composition**: Breaking down the UI into reusable components
- **API Integration**: Fetching data from external APIs and handling asynchronous operations
- **State Management**: Managing game score, best score, and card click tracking
- **Event Handling**: Responding to user clicks and updating the UI accordingly
- **Array Manipulation**: Shuffling arrays and finding elements by ID
- **Modern Build Tools**: Using Vite for fast development and optimized production builds

## Game Logic

The core game logic includes:

1. **Data Fetching**: On mount, the app fetches data for 15 Pokémon from PokéAPI
2. **Shuffling Algorithm**: Fisher-Yates shuffle algorithm is used to randomize card positions
3. **Click Tracking**: Each card tracks whether it has been clicked
4. **Score Management**: Points increment on new card clicks, reset on duplicate clicks
5. **Best Score**: The highest score achieved is stored and displayed

## Future Enhancements

- Difficulty levels with different numbers of cards
- Multiplayer mode
- Timer-based challenges
- Sound effects and animations
- Leaderboard with local storage
- Different themes or Pokémon generations

## License

This project is part of The Odin Project curriculum.
