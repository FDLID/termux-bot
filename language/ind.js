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
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar fdl|22*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
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
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting!`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
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

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *BOT WHATSAPP* 」
  
❏ *YOUR INFO*
  ◪ Prefix: 「  ${prefix}  」
  ◪ Nama: ${pushname}
  ◪ Uang mu : Rp${uangku}
  ◪ Nomer: ${sender.split("@")[0]}
  ◪ XP: ${getLevelingXp(sender)}/${reqXp}
  ◪ Level: ${getLevelingLevel(sender)}
  ◪ User register : ${_registered.length}
  
❏ *ABOUT*
  │
  ├─ ◪ ${prefix}info
  ├─ ◪ ${prefix}snk
  ├─ ◪ ${prefix}lpr 
  ├─ ◪ ${prefix}request
  ├─ ◪ ${prefix}blocklist
  ├─ ◪ ${prefix}ping
  ├─ ◪ ${prefix}buypremium
  ├─ ◪ ${prefix}hargaprem
  ├─ ◪ ${prefix}menupict
  └─ ◪ ${prefix}menuowner
  
❏ *MAKER*
  │
  ├─ ◪ ${prefix}nulis
  ├─ ◪ ${prefix}sticker
  ├─ ◪ ${prefix}stickergif
  ├─ ◪ ${prefix}toimg
  ├─ ◪ ${prefix}hartatata
  ├─ ◪ ${prefix}quotemaker
  ├─ ◪ ${prefix}imgmaker
  └─ ◪ ${prefix}calendermaker
  
❏ *MEDIA*
  │
  └─ ◪ ${prefix}tribunews
  
❏ *OTHER FITUR*
  │
  ├─ ◪ ${prefix}ssweb
  ├─ ◪ ${prefix}hilih [teks]
  ├─ ◪ ${prefix}alay [teks]
  ├─ ◪ ${prefix}say [teks]
  ├─ ◪ ${prefix}wiki [teks]
  ├─ ◪ ${prefix}kbbi [teks]
  ├─ ◪ ${prefix}map [teks]
  ├─ ◪ ${prefix}kalkulator
  ├─ ◪ ${prefix}lirik [teks]
  ├─ ◪ ${prefix}brainly [teks]
  ├─ ◪ ${prefix}bitly
  ├─ ◪ ${prefix}chord [teks]
  ├─ ◪ ${prefix}katabijak 
  ├─ ◪ ${prefix}faktaunik 
  ├─ ◪ ${prefix}pantun
  └─ ◪ ${prefix}artinama [teks]
  
❏ *KERANG AJAIB*
  │
  ├─ ◪ ${prefix}gantengcek
  ├─ ◪ ${prefix}cantikcek
  ├─ ◪ ${prefix}sangecek
  ├─ ◪ ${prefix}gaycek
  ├─ ◪ ${prefix}lesbicek
  ├─ ◪ ${prefix}watak
  ├─ ◪ ${prefix}hobby
  ├─ ◪ ${prefix}apakah
  ├─ ◪ ${prefix}kapankah
  ├─ ◪ ${prefix}bisakah
  ├─ ◪ ${prefix}bagaimanakah
  └─ ◪ ${prefix}rate
  
❏ *DOWNLOADER*
  │
  ├─ ◪ ${prefix}1cak
  ├─ ◪ ${prefix}pinterest [teks]
  ├─ ◪ ${prefix}ytmp3 [link]
  ├─ ◪ ${prefix}ytmp4 [link]
  ├─ ◪ ${prefix}play [teks]
  ├─ ◪ ${prefix}fototiktok
  └─ ◪ ${prefix}joox [teks]
  
❏ *MEME*
  │
  ├─ ◪ ${prefix}meme ❌
  └─ ◪ ${prefix}memeindo ❌
  
❏ *FIND TARGET*
  │
  ├─ ◪ ${prefix}mutual
  └─ ◪ ${prefix}next
  
❏ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ◪ ${prefix}loli
  ├─ ◪ ${prefix}neko
  ├─ ◪ ${prefix}waifu
  ├─ ◪ ${prefix}animecry
  ├─ ◪ ${prefix}animehug
  ├─ ◪ ${prefix}osakana
  ├─ ◪ ${prefix}naruto
  ├─ ◪ ${prefix}anime
  ├─ ◪ ${prefix}husbu
  ├─ ◪ ${prefix}animegirl
  ├─ ◪ ${prefix}animeboy
  ├─ ◪ ${prefix}nekonime
  │
  │ *RANDOM KPOP*
  ├─ ◪ ${prefix}randomkpop
  │
  │ *CARTOON*
  ├─ ◪ ${prefix}doraemon
  ├─ ◪ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ◪ ${prefix}anjing
  ├─ ◪ ${prefix}kucing
  ├─ ◪ ${prefix}hamster
  ├─ ◪ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ◪ ${prefix}mobil
  ├─ ◪ ${prefix}motor
  ├─ ◪ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ◪ ${prefix}aesthetic
  ├─ ◪ ${prefix}bluesky
  ├─ ◪ ${prefix}flower
  ├─ ◪ ${prefix}icecream
  ├─ ◪ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ◪ ${prefix}quotes
  ├─ ◪ ${prefix}quoteskehidupan
  ├─ ◪ ${prefix}quotesislami
  ├─ ◪ ${prefix}quotesnasehat
  ├─ ◪ ${prefix}quotescinta ❌
  ├─ ◪ ${prefix}quotesmotivasi
  ├─ ◪ ${prefix}animequotes ❌
  └─ ◪ ${prefix}twichquotes ❌
  

❏ *LIMIT & UANG & LB*
  │
  ├─ ◪ ${prefix}limit
  ├─ ◪ ${prefix}buylimit
  ├─ ◪ ${prefix}buypremiumlimit
  ├─ ◪ ${prefix}transfer
  └─ ◪ ${prefix}leaderboard
  
❏ *GROUP*
  │
  ├─ ◪ ${prefix}promote [@tag]
  ├─ ◪ ${prefix}demote [@tag]
  ├─ ◪ ${prefix}tagall
  ├─ ◪ ${prefix}listadmin
  ├─ ◪ ${prefix}wakillist
  ├─ ◪ ${prefix}premiumlist
  ├─ ◪ ${prefix}banlist
  ├─ ◪ ${prefix}blocklist
  ├─ ◪ ${prefix}linkgc
  ├─ ◪ ${prefix}mining
  ├─ ◪ ${prefix}hidetag
  ├─ ◪ ${prefix}grouplist
  ├─ ◪ ${prefix}add [62]
  ├─ ◪ ${prefix}kick [@tag]
  ├─ ◪ ${prefix}setname
  ├─ ◪ ${prefix}setdesc
  ├─ ◪ ${prefix}setpp
  ├─ ◪ ${prefix}listadmin
  ├─ ◪ ${prefix}linkgc
  ├─ ◪ ${prefix}leave
  ├─ ◪ ${prefix}mining
  ├─ ◪ ${prefix}level
  ├─ ◪ ${prefix}grup [buka/tutup)
  ├─ ◪ ${prefix}welcome [1/0]
  ├─ ◪ ${prefix}nsfw [1/0]
  ├─ ◪ ${prefix}antilink [1/0]
  ├─ ◪ ${prefix}leveling [1/0]
  └─ ◪ ${prefix}simih [1/0]
  
❏ *SOUND*
  │
  ├─ ◪ ${prefix}hai
  ├─ ◪ ${prefix}hallo [only computer]
  ├─ ◪ ${prefix}aine
  ├─ ◪ ${prefix}soundplaydate [only computer]
  ├─ ◪ ${prefix}soundbakahentai [only computer]
  ├─ ◪ ${prefix}sayonichan [only computer]
  └─ ◪ ${prefix}gtts
  
❏ *ISLAM*
  │
  └─ ◪ ${prefix}quran
  
❏ *STALK*
  │
  ├─ ◪ ${prefix}tiktokstalk
  └─ ◪ ${prefix}igstalk
  
❏ *WIBU*
  │
  ├─ ◪ ${prefix}neonime
  └─ ◪ ${prefix}wait
  
❏ *APK*
  ├─ ◪ ${prefix}apkpure [teks]
  ├─ ◪ ${prefix}happymod [teks]
  ├─ ◪ ${prefix}moddroid [teks]
  
❏ *18+ Nsfw*
  |
  ├─ ◪ ${prefix}blowjob
  ├─ ◪ ${prefix}randomhentai
  └─ ◪ ${prefix}nsfwneko
  
❏ *FUN MENU*
  │
  ├─ ◪ ${prefix}truth
  ├─ ◪ ${prefix}dare
  ├─ ◪ ${prefix}slap
  ├─ ◪ ${prefix}tampar
  ├─ ◪ ${prefix}nangis
  ├─ ◪ ${prefix}cium
  └─ ◪ ${prefix}simi
  
❏ *INFORMATION*
  │
  ├─ ◪ ${prefix}bahasa
  ├─ ◪ ${prefix}kodenegara
  ├─ ◪ ${prefix}infogempa
  ├─ ◪ ${prefix}infocuaca
  ├─ ◪ ${prefix}infonomor
  └─ ◪ ${prefix}covid ❌
  
❏ *OWNER*
  │
  ├─ ◪ ${prefix}setprefix
  ├─ ◪ ${prefix}setreply
  ├─ ◪ ${prefix}setppbot
  ├─ ◪ ${prefix}block
  ├─ ◪ ${prefix}unblock
  ├─ ◪ ${prefix}setprefix
  ├─ ◪ ${prefix}leave
  ├─ ◪ ${prefix}kickall
  ├─ ◪ ${prefix}event [1/0]
  ├─ ◪ ${prefix}bc
  ├─ ◪ ${prefix}bcgc
  ├─ ◪ ${prefix}clone
  └─ ◪ ${prefix}clearall
  
❏ *OTHER*
  │
  ├─ ◪ ${prefix}wame
  ├─ ◪ ${prefix}qrcode
  └─ ◪ ${prefix}afk
  
❏ *POWERED BY FDL*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/628990542731\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
