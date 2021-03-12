const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
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
exports.help = help



  
