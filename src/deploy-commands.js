require("dotenv").config();

const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const deployCommands = async () => {
  const commands = [
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Replies with pong!"),
    new SlashCommandBuilder()
      .setName("server")
      .setDescription("Replies with server info!"),
    new SlashCommandBuilder()
      .setName("user")
      .setDescription("Replies with user info!"),
    new SlashCommandBuilder()
      .setName("newcommand")
      .setDescription("Another new command!"),
  ].map((command) => command.toJSON());

  const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    console.log("Successfully registered application commands.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = deployCommands;
