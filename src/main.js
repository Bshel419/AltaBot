require("dotenv").config();

const { Client, Intents } = require("discord.js");

const deployCommands = require("./deploy-commands");

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

if (!DISCORD_TOKEN || !CLIENT_ID || !GUILD_ID) {
  throw new Error("Required variables not supplied in .env");
}

const main = async () => {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  await deployCommands();

  client.once("ready", () => {
    console.log("Altabot reporting for duty!");
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    console.log(`Handling command: ${commandName}`);

    if (commandName === "ping") {
      await interaction.reply("Pong!");
    } else if (commandName === "server") {
      await interaction.reply("Server info.");
    } else if (commandName === "user") {
      await interaction.reply("User info.");
    } else if (commandName === "points") {
      await interaction.reply("New command yay!!!");
    } else if (commandName === "newcommand") {
      await interaction.reply(
        "Yes?"
      );
    }
  });

  client.login(DISCORD_TOKEN);
};

main();
