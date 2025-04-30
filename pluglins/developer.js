const { cmd } = require('../command');

cmd({
    pattern: "developer",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply 
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const steps = [
            '*QUEEN-DINU-MD 👸*',
            
            
            '*SIR LANKA POWER FULL WHATSAPP BOT 💀💥*'                                            ,
            '*QUEEN-DINU-MD DEVELOPER 🫩*'                                   ,
            'DINU ID 94727163302'                               ,
            'RED SAMURAYI 94721207559'                            ,
            'CYBER SPACE OWNER 923209758769'                       ,
            '```[█████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████] 70%``` ⏳'            ,
            '```[██████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[████████████████████████████████████████████████████] 100%``` ✅',
            
            'THANK YOU ALL 😩💗',
            'SRI LANKA NUMBER ONE WHATSAPP BOT 👑💗',
            
            '> *QUEEN-DINU-MD-COMPLETE ☣*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
