const { Telegraf } = require('telegraf');
const fs = require('fs');

// Chargez les mixnodes et les liens depuis le fichier JSON
const loadMixnodes = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erreur lors du chargement des mixnodes:', err);
    return { links: [], mixnodes: [] };
  }
};

// Formatez les mixnodes en un message
const formatMixnodes = (links, mixnodes) => {
  let message = "";

  // Ajoutez les liens au message
  if (links && links.length > 0) {
    message += "🔗 *Liens utiles* 🔗\n";
    links.forEach((link) => {
      message += `\n*Description*: ${link.description}`;
      message += `\n*Lien*: [Cliquez ici](${link.link})\n`;
    });
    message += "\n";
  } else {
    message += "🔗 *Liens utiles* 🔗\nAucun lien disponible.\n\n";
  }

  // Ajoutez les mixnodes au message
  if (mixnodes && mixnodes.length > 0) {
    message += "🪢 *Liste des Mixnodes* 🪢\n";
    mixnodes.forEach((mixnode) => {
      const explorerUrl = `https://explorer.nymtech.net/network-components/nodes/${mixnode['node id']}`;
     const users = mixnode.user 
        ? mixnode.user.map((user) => `[${user.replace(/^@/, '')}](https://t.me/${user.replace(/^@/, '')})`).join(', ') 
        : "Aucun utilisateur";

      message += `\n${users} - *${mixnode.name}*`; // Format : USER - NOM
      message += `\n*ID Key*: \`${mixnode.idkey}\``;
      message += `\n*Explorer*: [Cliquez ici](${explorerUrl})`;
      message += `\n`;
    });
  } else {
    message += "\nAucun mixnode disponible.\n";
  }

  return message;
};

// Initialisation du bot
const TELEGRAM_TOKEN = 'xxxxx'; // Remplacez par votre token
const bot = new Telegraf(TELEGRAM_TOKEN);

// Commande /m pour afficher les mixnodes
bot.command('m', (ctx) => {
  const data = loadMixnodes('./nodes.json');
  const message = formatMixnodes(data.links, data.mixnodes);
  ctx.replyWithMarkdown(message, { disable_web_page_preview: true });
});

// Message de bienvenue avec /start
bot.start((ctx) => {
  ctx.reply('Bienvenue ! Utilisez la commande /m pour afficher les mixnodes.');
});

// Démarrer le bot
bot.launch().then(() => {
  console.log('Bot démarré !');
});

// Gestion des erreurs
bot.catch((err) => {
  console.error('Erreur dans le bot:', err);
});
