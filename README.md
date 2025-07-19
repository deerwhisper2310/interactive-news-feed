# Post-Game Press Conference Prompt Generator

This is a React application designed to help users generate detailed prompts for an AI chatbot to simulate a post-game press conference. Users can input various game details, team and opponent statistics, and coach's notes, which are then compiled into a comprehensive prompt for an AI to role-play as a group of sports journalists.

## Features

*   **Comprehensive Game Data Input:** Enter details such as team names, ranks, records, opponent information, game outcome, and final score.
*   **Detailed Statistical Input:** Provide in-depth statistics for both your team and the opponent, including total yards, passing yards, rushing yards, completions, attempts, third-down conversions, turnovers, and more.
*   **Coach's Notes:** Add specific notes or themes for the AI journalists to focus on during the press conference.
*   **Configurable Questions:** Choose the desired number of questions for the AI to ask during the simulated press conference.
*   **AI Journalist Personas:** The generated prompt instructs the AI to adopt various journalist personas (Beat Reporter, Local Broadcast Reporter, National Correspondent, etc.) for a dynamic and realistic interaction.
*   **Copy to Clipboard:** Easily copy the generated prompt to your clipboard for use with your preferred AI chatbot.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **gh-pages:** A tool to publish content to GitHub Pages.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/deerwhisper2310/post-game-press-conference.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd post-game-press-conference
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

1.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the application in your browser (usually at `http://localhost:3000`).

2.  **Fill in the form:** Enter all the relevant game details, statistics, and coach's notes into the provided fields.

3.  **Generate Prompt:** Click the "Generate Press Conference Prompt" button. The generated prompt will appear in a text area.

4.  **Copy and Use:** Copy the prompt to your clipboard and paste it into your AI chatbot of choice to begin your simulated post-game press conference.

## Deployment

This project is configured for deployment to GitHub Pages using `gh-pages`.

To deploy your changes:

1.  **Ensure your `homepage` field in `package.json` is correct:**
    ```json
    "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/",
    ```
    (It should already be set to `https://deerwhisper2310.github.io/post-game-press-conference/` based on recent updates.)

2.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    This command will build the application and push it to the `gh-pages` branch of your repository.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.