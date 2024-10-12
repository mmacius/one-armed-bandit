# Casino Game - One Armed Bandit

This is a simple casino game built with React. The game allows users to place bets and spin a slot machine. The balance and bet amounts are managed using React state, and the balance is persisted using `localStorage`.

## Features

- **Balance Management**: The user's balance is stored in `localStorage` and updated after each game.
- **Bet Management**: Users can increase or decrease their bet amount.
- **Slot Machine**: The slot machine spins and displays random fruits.
- **Winning Conditions**: Users can win different amounts based on the results of the spin.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/mmacius/casino-game.git
    cd casino-game
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the development server:
    ```
    npm start
    ```

## Usage

1. **Start the Game**: Click the "Spin!" button to start the game.
2. **Adjust Bet**: Use the "+" and "-" buttons to increase or decrease your bet amount.
3. **Check Balance**: Your current balance is displayed at the top.

## Code Overview

### State Variables

- `balance`: The user's current balance, initialized from `localStorage`.
- `bet`: The current bet amount.
- `message`: The message displayed to the user.
- `result`: The result of the slot machine spin.
- `drawtab`: Temporary state for the spinning animation.
- `start`: Indicates if the game has started.
- `startDraw`: Indicates if the draw animation is running.
- `draw`: Indicates if the draw is in progress.

### Functions

- `playGame`: Handles the game logic, including updating the balance and setting the result.
- `changeBet`: Adjusts the bet amount based on user input.
- `useEffect`: Several `useEffect` hooks are used to manage side effects, such as updating `localStorage` and handling the game logic after a spin.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
