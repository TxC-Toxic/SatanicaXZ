const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `
${a}❏ ABOUT USER${a}
 ${a}│ Nama : ${pushname}${a}
 ${a}│ Nomer : wa.me/${sender.split("@")[0]}${a}
 ${a}│ owmer bot : ${owner}${a}
 ${a}│ Uang mu : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ User register : ${_registered.length}${a}
 
${a}❏ABOUT BOT${a}
 ${a}│ Name : ${client.user.name}${a}
 ${a}│ browser : ${client.browserDescription[1]}${a}
 ${a}│ server : ${client.browserDescription[0]}${a}
 ${a}│ version : ${client.browserDescription[2]}${a}
 ${a}│ speed : ${process.uptime()}${a}
 ${a}│ handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ versi wa : ${client.user.phone.wa_version}${a}
 
ㅤ𝐇𝐈𝚵͢𝐙𝐈.𝐁𝐎𝐓..𝐌𝐀𝐗
・✦▭▭▭✧◦✦◦✧▭▭▭✦

⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Nombre:𝐇𝐈𝐄𝐙𝐀𝐋.𝐇𝐎𝐏𝐄
⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Prefijo:「  」
⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Navegador: Chrome
⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Servidor: Baileys
⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Versión: 2.0
⃣⃝⃘⃕ ҉📲ᩭ𝆄⸙꯭Creadora: wa.me/7907466806
・✦▭▭▭✧◦✦◦✧▭▭▭✦・
━━━━━━━━━━━━━━━━━━
・✦▭▭▭✧◦✦◦✧▭▭▭✦・
¡ʜᴏʟᴀ! ʏᴏ sᴏʏ ᴄʜɪᴋᴀ ғᴜᴊɪᴡᴀʀᴀ ʙᴏᴛ, sɪ ᴇs ʀᴀʀᴏ ᴘᴇʀᴏ ¿ʏᴀ ϙᴜᴇ? ᴀᴄᴀ ᴛᴇ ᴅᴇᴊᴏ ᴍɪs ᴄᴏᴍᴀɴᴅᴏs
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ sticker Responde a img
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ rsticker Responde a img
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ stickergif Responde a vid
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ stickerwa Consulta
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ stickerwm Nombre|Autor
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ attp Texto
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ take Nombre|Autor
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ exif Nombre|Autor
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ togif Responde a stickergif
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ tovideo Responde a sticker
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ toimg Responde a sticker
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ self
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ public
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ mute
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ unmute
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ encendido
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ ping
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ term
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ blocklist
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ run
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ chatlist
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ owner
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ join Linkgroup
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ getpic @tag
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ getbio @tag
❖ ── ✦ ──『✙』── ✦ ── ❖
        𒀭𖤩 ˖˚ 𖠿 ⁿˢᶠʷ 𖠿˖˚𖤩𒀭      
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwfeets
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ hentai       
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ blowjob
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ boobs
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ les
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ futanari
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ femdom 
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ oppai
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nekopoi
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ erokemo
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwahegao
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwthighs
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ holoero
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwboobs
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwblowjob
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ randomhentai
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ nsfwneko
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ ranklindo
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ rate .(texto)
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ archive
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ unarchiveall
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ readall
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ delthischat
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ shutdown
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ hidetag Text
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ tagall
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ stctag Tag Stc
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ imgtag Tag Img
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ kontag Text
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ kontak 6281xxx Nama
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setthumb
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setreply
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setbodymenu
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setwelcome
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setleave
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setpromote
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ setdemote
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ upswtext
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ upswimg
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ upswvideo
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ welcome 1/0
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ linkgroup
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ group cerrar/abrir
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ add 6281xxx
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ kick @tag
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ promote @tag
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ demote @tagadmin
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ demoteall
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ listadmin
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ online
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ infoall
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ notif
❖ ── ✦ ──『✙』── ✦ ── ❖
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ play2
⁃▢ꦿ̤ٔ᪴꧇🌸ᩭ✎̤᪴ ytmp4 Url
 ── ✦ ──『✙』── ✦ ── ❖
𝐇𝐈𝐄𝐙𝐀𝐋.𝐇𝐎𝐏𝐄.2.0
═════✮❁•°♛°•❁✮═════
🇧 🇴 🇹 🇸

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.left = (num) => {
	return`akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
}

exports.welcome = ( mdata , num ) => {
	return`Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini`
}
