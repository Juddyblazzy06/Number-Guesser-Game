# 🎯 Number Guesser Game

A fun and interactive Number Guesser Game built with React.js and Vite for the Web3Bridge Cohort XIV Pre-Qualification Exercise.

## 🎮 How to Play

1. Select your difficulty level:
   - **Easy**: 15 guesses
   - **Medium**: 10 guesses (default)
   - **Hard**: 5 guesses

2. Enter a number between 1 and 100 in the input field
3. Click "Guess" or press Enter to submit your guess
4. Receive feedback:
   - 🟢 **Green**: Correct guess! You win!
   - 🔴 **Red**: Too high!
   - 🟠 **Orange**: Too low!
5. Try to guess the secret number within your allocated attempts
6. Click "Play Again" to start a new game

## ✨ Features Implemented

### Core Features
- ✅ Random secret number generation (1-100)
- ✅ Graphical input interface
- ✅ Real-time feedback after each guess (too high, too low, correct)
- ✅ Limited attempts based on difficulty level
- ✅ Remaining guesses counter
- ✅ Win/loss messages
- ✅ Input validation (numbers between 1-100 only)
- ✅ Error handling for invalid inputs

### Optional Enhancements
- ✅ **Difficulty levels** with different guess limits:
  - Easy: 15 guesses
  - Medium: 10 guesses
  - Hard: 5 guesses
- ✅ **Restart functionality** without page refresh
- ✅ **Animations and transitions**:
  - Fade-in animations for components
  - Shake animations for incorrect guesses
  - Bounce animations for winning
  - Smooth hover effects on buttons
  - Transition effects for all interactive elements

### Additional Features
- 🎨 Modern, beautiful UI with gradient backgrounds
- 📱 Fully responsive design for mobile and desktop
- 📜 Guess history display with color-coded badges
- ⌨️ Keyboard support (Enter key to submit)
- 🎯 Visual feedback with color-coded messages
- 🚫 Duplicate guess prevention

## 🛠️ Technical Implementation

### Built With
- **React.js** - UI framework
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **CSS3** - Modern styling with animations

### Project Structure
```
src/
├── components/
│   ├── Game.jsx              # Main game component with state management
│   ├── InputField.jsx        # Input field component
│   ├── Message.jsx           # Message and feedback display
│   └── DifficultySelector.jsx # Difficulty selection buttons
├── utils/
│   └── gameLogic.js          # Core game logic functions
├── utils/__tests__/
│   └── gameLogic.test.js     # Unit tests
├── App.jsx                    # Root component
├── index.jsx                  # Entry point
└── styles.css                 # Global styles and animations
```

### Key React Hooks Used
- `useState` - Manage game state, guesses, messages
- `useEffect` - Initialize game and handle difficulty changes

### Core Logic Functions
- `generateSecretNumber()` - Generate random number in range
- `evaluateGuess()` - Compare guess with secret number
- `validateInput()` - Validate user input
- `getGuessLimit()` - Get attempts based on difficulty

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Web3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Running Tests

```bash
npm test
```

## 📦 Deployment

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your repository directly on [Vercel.com](https://vercel.com)

## 📝 Git Workflow

This project follows a feature branch workflow:

1. **feature/setup** - Initial project setup with Vite and React
2. **feature/game-logic** - Core game logic implementation
3. **feature/styling** - UI design and animations
4. **feature/tests** - Unit tests for game logic

All features were developed in separate branches and merged into `main` using merge commits.

## 🧪 Testing

Unit tests are included for all core game logic functions:
- Number generation
- Guess evaluation
- Input validation
- Difficulty settings

Run tests with:
```bash
npm test
```

## 📄 License

This project is created for the Web3Bridge Cohort XIV Pre-Qualification Exercise.

## 👨‍💻 Author

Created with ❤️ for Web3Bridge

---

**Happy Guessing! 🎲**
