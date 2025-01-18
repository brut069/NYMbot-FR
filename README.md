# Telegram Bot for Nym Mixnodes and Links

This Telegram bot is designed to provide information about Nym mixnodes and useful links, leveraging the [Telegraf](https://telegraf.js.org/) framework. The bot fetches data from a `nodes.json` file and displays details such as mixnode names, associated users, and an explorer link for each node.

## Features

- **Dynamic Commands:**
  - `/m`: Displays a list of mixnodes, including their names, ID keys, users, and clickable explorer links.
  - Presents helpful links defined in the JSON file.
- Reads and processes data dynamically from `nodes.json`.
- Uses Markdown for message formatting to enhance readability and usability.

## Prerequisites

- **Node.js** (version 16.x or later)
- A Telegram bot token from [BotFather](https://core.telegram.org/bots#botfather).
- **Telegraf**: Install using the following command:

  ```bash
  npm install telegraf
  ```

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/brut069/NYMbot-FR.git
   cd NYMbot-FR
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Prepare the JSON Data File:**

   Create or update the `nodes.json` file with your mixnode and link data:

   ```json
   {
     "links": [
       {
         "description": "Comment déléguer",
         "link": "https://medium.com/notrustverify/vous-voulez-d%C3%A9l%C3%A9guer-sur-nym-voici-comment-choisir-un-mixnode-pour-d%C3%A9l%C3%A9guer-ses-nym-96c3b2b31de0"
       }
     ],
     "mixnodes": [
       {
         "idkey": "2uU2uYg37PVwSDWTJFR537bwnystTyJUy3BjuXHkc4GR",
         "user": ["zBlaxx"],
         "name": "node4u | 🇫🇷 Lyon",
         "node id": "33"
       }
     ]
   }
   ```

4. **Configure the Bot:**

   Replace the placeholder `TELEGRAM_TOKEN` in `bot-nym-nodes.js` with your actual bot token:

   ```javascript
   const TELEGRAM_TOKEN = 'your-telegram-bot-token';
   ```

5. **Launch the Bot:**

   ```bash
   node NYMbot-FR.js
   ```

## Updating nodes.json

To apply updates when a new version of `nodes.json` is merged into the repository:

1. Pull the latest changes from the repository:

   ```bash
   git pull origin main
   ```

2. Ensure the updated `nodes.json` file is present in the project directory.

3. Restart the bot to load the new data:

   ```bash
   node NYMbot-FR.js
   ```

## Usage

- **Command** `/start`: Displays a welcome message.
- **Command** `/m`: Outputs a list of mixnodes and useful links in Markdown format.

## File Structure

```
.
├── NYMbot-FR.js  # Main bot logic
├── nodes.json        # JSON data for mixnodes and links
├── package.json      # Project dependencies
├── README.md         # Documentation
```

## Example Output

Here is an example of what the bot displays when the `/m` command is used:

```
🔗 Liens utiles 🔗

Description: Comment déléguer
Lien: [Cliquez ici](https://medium.com/notrustverify/vous-voulez-d%C3%A9l%C3%A9guer-sur-nym-voici-comment-choisir-un-mixnode-pour-d%C3%A9l%C3%A9guer-ses-nym-96c3b2b31de0)

🪢 Liste des Mixnodes 🪢

Nom: node4u | 🇫🇷 Lyon
Explorer: [Cliquez ici](https://explorer.nymtech.net/network-components/nodes/33)
ID Key: `2uU2uYg37PVwSDWTJFR537bwnystTyJUy3BjuXHkc4GR`
Utilisateurs: @zBlaxx
```

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests for enhancements or fixes.

If you find this bot useful, delegations of NYM tokens are greatly appreciated on these nodes:

`2uU2uYg37PVwSDWTJFR537bwnystTyJUy3BjuXHkc4GR`

or, if it's full, this one:

`6rC5rmY3bUi5djsuK9LEDTgYZKmxVZ2vkvGox2H77pq2`.

## Acknowledgments

- [Telegraf.js](https://telegraf.js.org/): For the bot framework.
- [Nym Project](https://nymtech.net/): For the mixnode infrastructure.
- This project is a fork of [notrustverify/nymfrench-bot](https://github.com/notrustverify/nymfrench-bot).

