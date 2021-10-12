# AltaBot

Discord bot for Alta company in New World.

## Setup

1. Install all required dependencies

2. Create a `.env` file with the correct variables populated

```txt
DISCORD_TOKEN=botDiscordToken
CLIENT_ID=botClientId
GUILD_ID=discordServerId
```

3. Initialize repository

```bash
node --version
npm --version

# Install node dependencies
npm install

# Start a bot server
npm run start
```

### Requirements

#### Required

- [Node.js](https://nodejs.org/en/)
    - Check `.nvmrc` for the correct version to install

#### Optional

- nvm
    - [Linux](https://github.com/nvm-sh/nvm)
    - [Windows](https://github.com/coreybutler/nvm-windows)

## Contributing

### Adding new commands to the bot

```bash
npm run deploy-commands
```
