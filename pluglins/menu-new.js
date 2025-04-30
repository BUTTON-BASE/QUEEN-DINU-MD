const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "Show interactive menu system with buttons",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const menuCaption = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ 👑 Owner : *${config.OWNER_NAME}*
┃★│ 🤖 Baileys : *Multi Device*
┃★│ 💻 Type : *NodeJs*
┃★│ 🚀 Platform : *Heroku*
┃★│ ⚙️ Mode : *[${config.MODE}]*
┃★│ 🔣 Prefix : *[${config.PREFIX}]*
┃★│ 🏷️ Version : *4.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

┏━━━━❮QUEEN DINU MINE COMMAND ❯━━━━
┃
┃ 🎧  *මෙම කමාන්ඩ් දිනෙන් දින වෙනස් වන අතර අලුත් කමාන්ඩ් ඇතුලත් වෙනවා*
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 LOD TEM DETAILS 📝❯━━━
┃
┃🗣️ *BOT OWNER = OWNER DINU ID*
┃📝 *CODER & TEM RUKSHAN*
┗━━━━━━━━━━━━━━━

┏━━━━❮QUEEN DINU MINE COMMAND ❯━━━━
┃ 
┃ ⛩️  *මෙම කමාන්ඩ් ලිස්ටෙක දිනෙන් දින අලුත් වෙන බැවින් චැනල් එකත් සමග සම්බන්ධව සිටින්න*
┃
┃  ⛩️ _Follow Channel :- https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38_
┃
┗━━━━━━━━━━━━━━━

> *Select a menu using the button below!* 🎯
> ${config.DESCRIPTION}`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363401755639074@newsletter',
                newsletterName: config.OWNER_NAME,
                serverMessageId: 143
            },
            externalAdReply: {
                title: `${config.BOT_NAME} Menu`,
                body: "Explore all features!",
                thumbnailUrl: config.MENU_IMAGE_URL || 'https://i.ibb.co/YFxFYmvC/5579.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38'
            }
        };

        // Send menu with "SELECT MENU" button
        const sentMsg = await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/YFxFYmvC/5579.jpg' },
            caption: menuCaption,
            footer: "QUEEN-DINU-MD | Powered by LOD TEM 💖",
            templateButtons: [
                {
                    index: 1,
                    quickReplyButton: {
                        displayText: "📋 SELECT MENU",
                        id: "select_menu"
                    }
                },
                {
                    index: 2,
                    quickReplyButton: {
                        displayText: "🏓 BOT PING",
                        id: "bot_ping"
                    }
                },
                {
                    index: 3,
                    quickReplyButton: {
                        displayText: "⚙️ BOT SYSTEM",
                        id: "bot_system"
                    }
                },
                {
                    index: 4,
                    quickReplyButton: {
                        displayText: "🌟 BOT ALIVE",
                        id: "bot_alive"
                    }
                }
            ],
            contextInfo: contextInfo
        }, { quoted: mek });

        const messageID = sentMsg.key.id;

        // Menu data (same as your original, shortened for brevity)
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `╭━━━〔 *Download Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🌐 *Social Media*
┃★│ • facebook [url]
┃★│ • mediafire [url]
┃★│ • tiktok [url]
┃★│ • twitter [url]
┃★│ • Insta [url]
┃★│ • apk [app]
┃★│ • img [query]
┃★│ • tt2 [url]
┃★│ • pins [url]
┃★│ • apk2 [app]
┃★│ • fb2 [url]
┃★│ • pinterest [url]
┃★╰──────────────
┃★╭──────────────
┃★│ 🎵 *Music/Video*
┃★│ • spotify [query]
┃★│ • play [song]
┃★│ • play2-10 [song]
┃★│ • audio [url]
┃★│ • video [url]
┃★│ • video2-10 [url]
┃★│ • ytmp3 [url]
┃★│ • ytmp4 [url]
┃★│ • song [name]
┃★│ • darama [name]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `╭━━━〔 *Group Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🛠️ *Management*
┃★│ • grouplink
┃★│ • kickall
┃★│ • kickall2
┃★│ • kickall3
┃★│ • add @user
┃★│ • remove @user
┃★│ • kick @user
┃★╰──────────────
┃★╭──────────────
┃★│ ⚡ *Admin Tools*
┃★│ • promote @user
┃★│ • demote @user
┃★│ • dismiss 
┃★│ • revoke
┃★│ • mute [time]
┃★│ • unmute
┃★│ • lockgc
┃★│ • unlockgc
┃★╰──────────────
┃★╭──────────────
┃★│ 🏷️ *Tagging*
┃★│ • tag @user
┃★│ • hidetag [msg]
┃★│ • tagall
┃★│ • tagadmins
┃★│ • invite
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: `╭━━━〔 *Fun Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🎭 *Interactive*
┃★│ • shapar
┃★│ • rate @user
┃★│ • insult @user
┃★│ • hack @user
┃★│ • ship @user1 @user2
┃★│ • character
┃★│ • pickup
┃★│ • joke
┃★╰──────────────
┃★╭──────────────
┃★│ 😂 *Reactions*
┃★│ • hrt
┃★│ • hpy
┃★│ • syd
┃★│ • anger
┃★│ • shy
┃★│ • kiss
┃★│ • mon
┃★│ • cunfuzed
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '4': {
                title: "💀 *Owner Menu* 💀",
                content: `╭━━━〔 *Owner Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ ⚠️ *Restricted*
┃★│ • block @user
┃★│ • unblock @user
┃★│ • fullpp [img]
┃★│ • setpp [img]
┃★│ • restart
┃★│ • shutdown
┃★│ • updatecmd
┃★╰──────────────
┃★╭──────────────
┃★│ ℹ️ *Info Tools*
┃★│ • gjid
┃★│ • jid @user
┃★│ • listcmd
┃★│ • allmenu
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `╭━━━〔 *AI Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 💬 *Chat AI*
┃★│ • ai [query]
┃★│ • gpt3 [query]
┃★│ • gpt2 [query]
┃★│ • gptmini [query]
┃★│ • gpt [query]
┃★│ • meta [query]
┃★╰──────────────
┃★╭──────────────
┃★│ 🖼️ *Image AI*
┃★│ • imagine [text]
┃★│ • imagine2 [text]
┃★╰──────────────
┃★╭──────────────
┃★│ 🔍 *Specialized*
┃★│ • blackbox [query]
┃★│ • luma [query]
┃★│ • dj [query]
┃★│ • khan [query]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `╭━━━〔 *Anime Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🖼️ *Images*
┃★│ • fack
┃★│ • dog
┃★│ • awoo
┃★│ • garl
┃★│ • waifu
┃★│ • neko
┃★│ • megnumin
┃★│ • maid
┃★│ • loli
┃★╰──────────────
┃★╭──────────────
┃★│ 🎭 *Characters*
┃★│ • animegirl
┃★│ • animegirl1-5
┃★│ • anime1-5
┃★│ • foxgirl
┃★│ • naruto
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `╭━━━〔 *Convert Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🖼️ *Media*
┃★│ • sticker [img]
┃★│ • sticker2 [img]
┃★│ • emojimix 😎+😂
┃★│ • take [name,text]
┃★│ • tomp3 [video]
┃★╰──────────────
┃★╭──────────────
┃★│ 📝 *Text*
┃★│ • fancy [text]
┃★│ • tts [text]
┃★│ • trt [text]
┃★│ • base64 [text]
┃★│ • unbase64 [text]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `╭━━━〔 *Other Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🕒 *Utilities*
┃★│ • timenow
┃★│ • date
┃★│ • count [num]
┃★│ • calculate [expr]
┃★│ • countx
┃★╰──────────────
┃★╭──────────────
┃★│ 🎲 *Random*
┃★│ • flip
┃★│ • coinflip
┃★│ • rcolor
┃★│ • roll
┃★│ • fact
┃★╰──────────────
┃★╭──────────────
┃★│ 🔍 *Search*
┃★│ • define [word]
┃★│ • news [query]
┃★│ • movie [name]
┃★│ • weather [loc]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '9': {
                title: "⛩️ *Reactions Menu* ⛩️",
                content: `╭━━━〔 *Reactions Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ ❤️ *Affection*
┃★│ • cuddle @user
┃★│ • hug @user
┃★│ • kiss @user
┃★│ • lick @user
┃★│ • pat @user
┃★╰──────────────
┃★╭──────────────
┃★│ 😂 *Funny*
┃★│ • bully @user
┃★│ • bonk @user
┃★│ • yeet @user
┃★│ • slap @user
┃★│ • kill @user
┃★╰──────────────
┃★╭──────────────
┃★│ 😊 *Expressions*
┃★│ • blush @user
┃★│ • smile @user
┃★│ • happy @user
┃★│ • wink @user
┃★│ • poke @user
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '10': {
                title: "🙌 *Main Menu* 🙌",
                content: `╭━━━〔 *Main Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ ℹ️ *Bot Info*
┃★│ • ping
┃★│ • live
┃★│ • alive
┃★│ • runtime
┃★│ • uptime
┃★│ • repo
┃★│ • owner
┃★╰──────────────
┃★╭──────────────
┃★│ 🛠️ *Controls*
┃★│ • menu
┃★│ • menu2
┃★│ • restart
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                image: true
            },
            '11': {
                title: "⛩️ *MINE COMMAND* ⛩️",
                content: `┏━━━━❮SOLO LEVELING MINE COMMAND ❯━━━━
┃
┃ 🎧  *මෙම කමාන්ඩ් දිනෙන් දින වෙනස් වන අතර අලුත් කමාන්ඩ් ඇතුලත් වෙනවා*
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 COMMAND DETAILS 📝❯━━━
┃🗣️ .alive2
┃🤖  .song4
┃📜 .video4
┃📚  .aiimg
┃📝 .cmd
┃📟  .menu2
┃⚙️  .menu
┃✨  .mn
┗━━━━━━━━━━━━━━━

┏━━━━❮SOLO LEVELING MINE COMMAND ❯━━━━
┃ 
┃ ⛩️  *මෙම කමාන්ඩ් ලිස්ටෙක දිනෙන් දින අලුත් වෙන බැවින් චැනල්     එකත් සමග සම්බන්ධව සිටින්න⚠*
┃
┃  ⛩️ _Follow Channel :- https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38_
┃
┗━━━━━━━━━━━━━━━`,
                image: true
            }
        };

        // Button handler for "SELECT MENU", "BOT PING", "BOT SYSTEM", "BOT ALIVE"
        const buttonHandler = async (msgData) => {
            try {
                const receivedMsg = msgData.messages[0];
                if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

                const isReplyToMenu = receivedMsg.message?.extendedTextMessage?.contextInfo?.stanzaId === messageID;
                const buttonId = receivedMsg.message?.buttonsResponseMessage?.selectedButtonId;

                if (isReplyToMenu || buttonId) {
                    const senderID = receivedMsg.key.remoteJid;

                    if (buttonId === "select_menu") {
                        // Show menu selection buttons
                        await conn.sendMessage(senderID, {
                            text: `📋 *SELECT MENU* 📋\n\n` +
                                  `┃◈│1️⃣  ⛩️ *Download Menu*\n` +
                                  `┃◈│2️⃣  ⛩️ *Group Menu*\n` +
                                  `┃◈│3️⃣  ⛩️ *Fun Menu*\n` +
                                  `┃◈│4️⃣  ⛩️ *Owner Menu*\n` +
                                  `┃◈│5️⃣  ⛩️ *AI Menu*\n` +
                                  `┃◈│6️⃣  ⛩️ *Anime Menu*\n` +
                                  `┃◈│7️⃣  ⛩️ *Convert Menu*\n` +
                                  `┃◈│8️⃣  ⛩️ *Other Menu*\n` +
                                  `┃◈│9️⃣  ⛩️ *Reactions Menu*\n` +
                                  `┃◈│🔟  ⛩️ *Main Menu*\n` +
                                  `┃◈│11   ⛩️ *MINE COMMAND*\n\n` +
                                  `> *Tap a button to explore!* 🎯`,
                            footer: "QUEEN-DINU-MD | Powered by DNX-MD 💖",
                            templateButtons: [
                                { index: 1, quickReplyButton: { displayText: "1️⃣ Download", id: "menu_1" } },
                                { index: 2, quickReplyButton: { displayText: "2️⃣ Group", id: "menu_2" } },
                                { index: 3, quickReplyButton: { displayText: "3️⃣ Fun", id: "menu_3" } },
                                { index: 4, quickReplyButton: { displayText: "4️⃣ Owner", id: "menu_4" } },
                                { index: 5, quickReplyButton: { displayText: "5️⃣ AI", id: "menu_5" } },
                                { index: 6, quickReplyButton: { displayText: "6️⃣ Anime", id: "menu_6" } },
                                { index: 7, quickReplyButton: { displayText: "7️⃣ Convert", id: "menu_7" } },
                                { index: 8, quickReplyButton: { displayText: "8️⃣ Other", id: "menu_8" } },
                                { index: 9, quickReplyButton: { displayText: "9️⃣ Reactions", id: "menu_9" } },
                                { index: 10, quickReplyButton: { displayText: "🔟 Main", id: "menu_10" } },
                                { index: 11, quickReplyButton: { displayText: "11 MINE", id: "menu_11" } }
                            ],
                            contextInfo: contextInfo
                        }, { quoted: receivedMsg });
                    } else if (buttonId === "bot_ping") {
                        await conn.sendMessage(senderID, { text: `*🏓 Triggering BOT PING...*` }, { quoted: receivedMsg });
                        await conn.invoke('ping', mek, m, { from, reply });
                    } else if (buttonId === "bot_system") {
                        await conn.sendMessage(senderID, { text: `*⚙️ Triggering BOT SYSTEM...*` }, { quoted: receivedMsg });
                        await conn.invoke('system', mek, m, { from, reply });
                    } else if (buttonId === "bot_alive") {
                        await conn.sendMessage(senderID, { text: `*🌟 Triggering BOT ALIVE...*` }, { quoted: receivedMsg });
                        await conn.invoke('alive', mek, m, { from, reply });
                    } else if (buttonId?.startsWith("menu_")) {
                        const menuNumber = buttonId.replace("menu_", "");
                        const selectedMenu = menuData[menuNumber];
                        if (selectedMenu) {
                            await conn.sendMessage(senderID, {
                                image: selectedMenu.image ? { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/YFxFYmvC/5579.jpg' } : undefined,
                                caption: selectedMenu.content,
                                contextInfo: contextInfo
                            }, { quoted: receivedMsg });
                        }
                    }
                }
            } catch (e) {
                console.log('Button handler error:', e);
            }
        };

        // Add listener for button responses
        conn.ev.on("messages.upsert", buttonHandler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", buttonHandler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        await conn.sendMessage(from, { text: `❌ Menu system is currently busy. Please try again later.\n\n> ${config.DESCRIPTION}` }, { quoted: mek });
    }
});
