//BWANG NGAPAIN
//NYOLONG YA
//SUBCRIBE DULU DONG
//SC ORI FDL
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:BOT WA\n' 
            + 'ORG: SUBSCRIBE BWANG;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=628990542731:+62 899-0542-731\n' 
            + 'END:VCARD'
prefix = '#'
blocked = []   
limitawal = 99999
memberlimit = 0
cr = '*BOT WHATSAPP*'

/******** OWNER NUMBER**********/
const ownerNumber = ["628990542731@s.whatsapp.net"] 
const pacarNumber = ["628990542731@s.whatsapp.net"]
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const fdl = new WAConnection()
   fdl.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('fdl','red'),color('','lime'))
})

fdl.on('credentials-updated', () => {
	const authInfo = fdl.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && fdl.loadAuthInfo('./session.json')
fdl.connect();


fdl.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await fdl.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await fdl.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* 👋 @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nSemoga betah ya di sini 😅\nJangan lupa intro @${num.split('@')[0]} 😅`
				let buff = await getBuffer(ppimg)
				fdl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await fdl.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Titip salam yah kak* @${num.split('@')[0]}\n*I will miss you* 🤭`
				let buff = await getBuffer(ppimg)
				fdl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	fdl.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	fdl.on('message-new', async (iky) => {
		try {
			if (!iky.message) return
			if (iky.key && iky.key.remoteJid == 'status@broadcast') return
			if (iky.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(iky.message)
			const from = iky.key.remoteJid
			const type = Object.keys(iky.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && iky.message.conversation.startsWith(prefix)) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption.startsWith(prefix) ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption.startsWith(prefix) ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text.startsWith(prefix) ? iky.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? iky.message.conversation : (type === 'extendedTextMessage') ? iky.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && iky.message.conversation) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text ? iky.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = fdl.user.jid
			const sender = isGroup ? iky.participant : iky.key.remoteJid
			pushname = fdl.contacts[sender] != undefined ? fdl.contacts[sender].vname || fdl.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await fdl.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				fdl.sendMessage(from, teks, text, {quoted:iky})
			}
			const sendMess = (hehe, teks) => {
				fdl.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? fdl.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    fdl.sendMessage(from, teks, image, {quoted:iky})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			fdl.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    fdl.sendMessage(from, audio, mp3, {quoted:iky})
		    }
	        /*****************END SCURITY FEATURE ********/
			
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
	}
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return fdl.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: iky})
                            fdl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : iky})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        fdl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : iky})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    fdl.sendMessage(from, ind.limitend(pushname), text, {quoted: iky})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		fdl.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			fdl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			fdl.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 4000)
		setTimeout( () => {
			fdl.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			fdl.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			fdl.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			fdl.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
		case 'mutual': // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next': // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6281281872699@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
              case 'hai':
              case 'hi':
              case 'hei':
              case 'hey':
              case 'hii':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let ainecs = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-02-10-at-02.16.542.opus')
				fdl.sendMessage(from, ainecs, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'bot':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let ainezz = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-02-10-at-02.39.39.opus')
				fdl.sendMessage(from, ainezz, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'soundbakahentai':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineess = fs.readFileSync('./mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus')
				fdl.sendMessage(from, aineess, audio, {mimetype: 'audio/mp4', filename: `bakahentai.mp3`, quoted: iky})
				await limitAdd(sender)
				break
              case 'sayonichan':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesi = fs.readFileSync('./mp3/Loli-Saying-Onii-Chan-Sound.opus')
				fdl.sendMessage(from, aineesi, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'soundplaydate':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesiie = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				fdl.sendMessage(from, aineesiie, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'hallo':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesii = fs.readFileSync('./mp3/little-girl-sayingtalking-hello-sound-effectcute-sound-effectsadorable.opus')
				fdl.sendMessage(from, aineesii, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				fdl.updatePresence(from, Presence.composing) 
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				fdl.updatePresence(from, Presence.composing) 
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				fdl.updatePresence(from, Presence.composing) 
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isAdmin) return reply('*Only Admin & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
                case 'moddroid':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'happymod':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
				hupo = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'apkpure':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': // Update By RzkyO & fdl			
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'shortlink':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				fdl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'nangis':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'rdmhentai':
		case 'randomhentai':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(12)
					reply(ind.wait())
                                        anu = await fetchJson(`https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        fdl.sendMessage(from, buffer, image, {quoted: iky})
					await limitAdd(sender)
                                        break
		case 'cium':
                                         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'peluk':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'nulis':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis2':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=benbenz`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis3':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                ll3 = ct.split("|")[2];
                ll4 = ct.split("|")[3];
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis4':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'galaxtext':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'pupycut':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(8)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'galaxstyle':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hologram':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'textbyname':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'herrypoter':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'greanneon':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'metallogo':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${ct}`)
				fdl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		/*case 'nulis2':
				const textnulis = body.slice(7)
				let inputPath ='./lib/magernulis1.jpg'
 			   let outputPath = './tmp/hasil.jpg'
			    let d = new Date
			    let tgl = d.toLocaleDateString('id-Id')
			    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 			 //  reply('p\n' + util.format({fontPath, inputPath, outputPath, tgl, hari, textnulis}))
				  spawn('convert', [
				    inputPath,
				    '-font',
				    fontPath,
				    '-size',
				    '1024x784',
				    '-pointsize',
				    '20',
 				   '-interline-spacing',
				    '1',
				    '-annotate',
 				   '+806+78',
				    hari,
  				  '-font',
  				  fontPath,
  				  '-size',
  				  '1024x784',
  				  '-pointsize',
  				  '18',
  				  '-interline-spacing',
  				  '1',
  				  '-annotate',
   				 '+806+102',
 				   tgl,
 				   '-font',
  				  fontPath,
   				 '-size',
				    '1024x784',
 				   '-pointsize',
 				   '20',
  				  '-interline-spacing',
  				  '-7.5',
  				  '-annotate',
 				   '+344+142',
 				   textnulis,
    				outputPath
				  ])
 				 .on('error', e => reply(util.format(e))
 				 .on('exit', () => {
  			  fdl.sendMessage(from, outputPath, image, {quoted: iky, caption : ' nih sayang, jangan mager ya sayang'})
  			}))
  			  break*/
		case 'bplogo':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`https://mhankbarbar.tech/api/htahta?apiKey=Q7MLdUnVSkXgLmQE9liX&text=${bh}`)
				fdl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata2':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=benbenz`)
				fdl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata3':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				fdl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'text2gif':
				 // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				fdl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'attp':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(ind.wrongf())
					teks = body.slice(5)
					atytyd = await getBuffer(`https://api.vhtear.com/textxgif?text=${teks}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					fdl.sendMessage(from, atytyd, sticker, {quoted: iky})
					await limitAdd(sender) 
					break
		case 'cblackpink':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=WEMPYGANSS&text=${bh}`)
				fdl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'thunder':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'imgmaker':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=WEMPYGANSS&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'calendermaker':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez2 = body.slice(15)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nekonime':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(8)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        fdl.sendMessage(from, buffer, image, {quoted: iky})
					await limitAdd(sender)
                                        break
		case 'husbu':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(13)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
		case 'shota':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'jokerlogo':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana kak?')
				tels = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
                case 'anime':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(5)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
                case 'neko':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'tolol': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=WEMPYGANSS&name=${gatauda}`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'emoji2img': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('emoji nya mana ? titit ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=benbenz&emoji=${gatauda}`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
                case 'memeindo':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'meme': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/meme?apikey=7201f836013adbe80a4d4182`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'darkjoke': // Update By RzkyO & fdl
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=WEMPYGANSS`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
		case 'randomkpop':
				gatauda = body.slice(10)
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih kpopnya kak...'})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep': // Update By RzkyO & fdl 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep2': // Update By RzkyO & fdl 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep3': // Update By RzkyO & fdl 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep4': // Update By RzkyO & fdl 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep5': // Update By RzkyO & fdl 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case '8bit': // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(5)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev13?text=${ll1}&text2=${ll2}&theme=8bit&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'googlesearch': // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'glitch': // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&theme=glitch&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pubglogo': // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(5)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'battlefield': // Update By RzkyO & fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(12)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'gamelogo': // Update By RzkyO & fdl 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pornlogo': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
                case 'joox':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
				buffer = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: infomp3})
				fdl.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break
		case 'play':   
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				fdl.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break
		/*case 'play2':   
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				played = body.slice(6)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (anu.error) return reply(anu.error)
				iinfomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.id}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				fdl.sendMessage(from, buffer, image, {quoted: iky, caption: iinfomp3})
				laguu = await getBuffer(anu.result.url)
				fdl.sendMessage(from, laguu , audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break*/
		case 'limit':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'vinta':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				reply(ind.wait())
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				fdl.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: iky})
				await limitAdd(sender)
				break
		case 'avengers':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				if (!q.includes('|')) return  reply(ind.wrongf())
				const aruga1 = q.substring(0, q.indexOf('|') - 0)
				const aruga2 = q.substring(q.lastIndexOf('|') + 1)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'summer':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(8)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'sandwrite':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'metaldark':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'dropwater':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'grenneon':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(10)
				reply(ind.wait())
				aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=WEMPYGANSS&text=LoLHuman${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'neontext':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(10)
				reply(ind.wait())
				aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/neon?apikey=WEMPYGANSS&text=LoLHuman${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'toxic13':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(7)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'sumery':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(8)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'blood':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(7)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'firework':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				arugazzz = body.slice(10)
				reply(ind.wait())
				arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
				fdl.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'lava':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(6)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
				fdl.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
					     // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						fdl.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'animequotes':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.shizukaa.xyz/api/randomquote?apikey=itsmeiky633`)
					cop = `Quotes : _${data.quotes}_\n\nAuthor : _${data.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		case 'covidindo': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'covidglobal': // Update By fdl & RzkyO   
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				fdl.updatePresence(from, Presence.composing) 
			    tels = body.slice(12)
				asu = await fetchJson(`http://lolhuman.herokuapp.com/api/corona/global?apikey=WEMPYGANSS`)
				ez = `*╠➥  Positif :* ${asu.result.positif}\n*╠➥  Sembuh :* ${asu.result.sembuh}\n*╠➥  Di Rawat :* ${asu.result.dirawat}\n*╠➥  Meninggal :* ${asu.result.meninggal}\n`
				reply(ez)
				await limitAdd(sender)
					break
		case 'ceknamaff': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/freefire/${gatauda}?apikey=WEMPYGANSS`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'ceknamaml': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/mobilelegend/${gatauda}?apikey=WEMPYGANSS`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'namaninja': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=WEMPYGANSS&nama=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'infonomor':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer= await getBuffer(anu.map)
					hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
					fdl.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break
		case 'infocuaca':
					tels = body.slice(11)
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
					fdl.sendMessage(from, hasil, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'kurs': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.vhtear.com/kurs&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `\n*==========*\n*USD Jual* : ${anu.result.Data.USD.Jual}\n*USD Beli* : ${anu.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${anu.result.Data.SGD.Jual}\n*SGD Beli* : ${anu.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${anu.result.Data.EUR.Jual}\n*EUR Beli* : ${anu.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${anu.result.Data.AUD.Jual}\n*AUD Beli* : ${anu.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${anu.result.Data.DKK.Jual}\n*DKK Beli* : ${anu.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${anu.result.Data.SEK.Jual}\n*SEK Beli* : ${anu.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${anu.result.Data.CAD.Jual}\n*CAD Beli* : ${anu.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${anu.result.Data.CHF.Jual}\n*CHF Beli* : ${anu.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${anu.result.Data.NZD.Jual}\n*NZD Beli* : ${anu.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${anu.result.Data.GBP.Jual}\n*GBP Beli* : ${anu.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${anu.result.Data.HKD.Jual}\n*HKD Beli* : ${anu.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${anu.result.Data.JPY.Jual}\n*JPY Beli* : ${anu.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${anu.result.Data.SAR.Jual}\n*SAR Beli* : ${anu.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${anu.result.Data.CNH.Jual}\n*CNH Beli* : ${anu.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${anu.result.Data.MYR.Jual}\n*MYR Beli* : ${anu.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${anu.result.Data.THB.Jual}\n*THB Beli* : ${anu.result.Data.THB.Beli}\n*==========*\n`
					fdl.sendMessage(from, hasil, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'github': // Update By RzkyO & fdl
					tels = body.slice(8) 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/stalkgithub?apikey=itsmeiky633&user=${tels}`, {method: 'get'})
					buffer7 = await getBuffer(anu.avatar_url)
					if (anu.error) return reply(anu.error)
					capt = `*HASIL*\n\n*id* : ${anu.id}\n*node_id* : ${anu.node_id}\n*gravatar_id* : ${anu.gravatar_id}\n*html_url* : ${anu.html_url}\n*type* : ${anu.type}\n*site_admin* : ${anu.site_admin}\n*name* : ${anu.name}\n*company* : ${anu.company}\n*blog* : ${anu.blog}\n*location* : ${anu.location}\n*email* : ${anu.email}\n*bio* : ${anu.bio}\n*twitter_username* : ${anu.twitter_username}\n*public_repos* : ${anu.public_repos}\n*public_gists* : ${anu.public_gists}\n*followers* : ${anu.followers}\n*following* : ${anu.following}\n*created_at* : ${anu.created_at}\n*updated_at* : ${anu.updated_at}`
					fdl.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					fdl.sendMessage(from, pod, image, { quoted: iky, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=WEMPYGANSS`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': // Update By RzkyO & fdl	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'asmaulhusna': // Update By RzkyO & fdl	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/asmaulhusna?apikey=onlyonedeveloper`, {method: 'get'})
					teks = '=================\n'
					for (let i of asu.result.data) {
						teks += `*Nomor:* : ${i.index}\n*Latin* : ${i.latin}\n*Arab* : ${i.arabic}\n*Translate Indo* : ${i.translation_id}\n*Translate English* : ${i.translation_en}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': // Update By RzkyO & fdl	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
                case 'beritahoax':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					fdl.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await fdl.downloadAndSaveMediaMessage(enmedia)
					await fdl.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					fdl.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await fdl.downloadAndSaveMediaMessage(enmedia)
					await fdl.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brainly':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					fdl.sendMessage(from, teks, text, {quoted: iky, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = iky.participant
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buffer = await fdl.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							fdl.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
		case 'pinterest':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
           
           case 'waifu':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/waifu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'randombts':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'randomexo':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'blackpink':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imageislamic':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpislamic?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagecyberspace':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpcyberspace?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagegame':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpgame?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'loli':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomloli?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagemountain':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpmountain?apikey=tsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'husbu':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/husbu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
		   case 'mimpi':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			        reply(mess.wait)
			        anu = await fetchJson(`https://api.shizukaa.xyz/api/artimimpi?apikey=itsmeiky633&q=belanja`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result}`
			        fdl.sendMessage(from, mimpi, text, {quoted: iky })
			        await limitAdd(sender) 
			    	break
		     case 'fakta':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/fakta?apikey=itsmeiky633`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					fdl.sendMessage(from, fakta, text, {quoted: iky })
					await limitAdd(sender) 
					break 
				case 'katabijak':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bijak?apikey=itsmeiky633`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					fdl.sendMessage(from, katabijak, text, {quoted: iky })
					await limitAdd(sender) 
					break
			case 'katailham':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
				kata = anu.result
				fdl.sendMessage(from, kata, text, {quoted: iky })
				await limitAdd(sender)
				break
				case 'caklontong':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/caklontong?apikey=itsmeiky633`, {method: 'get'})
					caklontong = `*${anu.pertanyaan}*`
					setTimeout( () => {
					fdl.sendMessage(from, '*тЮ╕ Jawaban :* '+anu.jawaban+ '\n\nтАв Penjelasan: *'+ anu.keterangan+'*', text, {quoted: iky }) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, caklontong, text, {quoted: iky }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		         case 'babi':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await fdl.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 fdl.sendTextWithMentions(dari, mmkk, id)
                 break
				case 'tebakgambar':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/tebakgambar?apikey=itsmeiky633`, {method: 'get'})
					bufferkkk = await getBuffer(anu.img_url)
					setTimeout( () => {
					fdl.sendMessage(from, '*тЮ╕ Jawaban :* '+anu.jawaban, text, {quoted: iky }) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_10 Detik lagiтАж_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_20 Detik lagi_тАж', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, '_30 Detik lagi_тАж', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					fdl.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: iky }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
		case 'spamcall':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://api.shizukaa.xyz/api/spamcall?apikey=itsmeiky633&nohp=${call}`, {method: 'get'})
			fdl.sendMessage(from, `${anu.result.logs}`, text, {quoted: iky })
			await limitAdd(sender) 
			break  
				case 'wiki':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('teks nya mana om?')
                reply(mess.wait)
                wiki = `${body.slice(6)}`
                anu = await fetchJson(`https://api.shizukaa.xyz/api/wiki?apikey=itsmeiky633&q=${wiki}`, {method: 'get'})
                if (anu.error) return reply(anu.error)
                wikii = `${anu.result}`
                fdl.sendMessage(from, wikii, text, {quoted: iky })
                await limitAdd(sender) 
                break
               case 'asupan':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(mess.wait)
                anu = await fetchJson(`https://api.shizukaa.xyz/api/asupan?apikey=itsmeiky633`)
                asup = await getBuffer(anu.result)
                fdl.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: iky, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break
               case 'ytmp4':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/ytmp4?apikey=itsmeiky633&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `уАМ *YOUTUBE MP4 DOWNLOADER* уАН\n\nтАв Title : *${anu.title}*\nтАв *Size:* ${anu.filesize}\nтАв *Deskripsi:* ${anu.desc}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buff, image, {quoted: shizuka, caption: ytt})
					fdl.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: shizuka, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
			case 'ytmp3':
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/ytmp3?apikey=itsmeiky633&url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `уАМ *YOUTUBE MP3 DOWNLOADER* уАН\n\nтАв Title : *${anu.title}*\nтАв *Size:* ${anu.filesize}\n*тАв Deskripsi:* ${anu.desc}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buff, image, {quoted: shizuka, caption: teks})
					fdl.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: iky })
					await limitAdd(sender) 
					break
			 case 'nsfwloli':
				    try {
			         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.shizukaa.xyz/api/neko?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						fdl.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break
		case 'hilih': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'holoh': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'halah': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'huluh': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'heleh': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'hurufterbalik': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': // Update By fdl & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					teks = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}&apikey=BotWeA`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender)
					break
		case 'alay':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'alay2': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=WEMPYGANSS&text=${body.slice(6)}`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'fml':	// Fixed By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'chord':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					reply(anu.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=benbenz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katadilan': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'cerpen': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'resepmasakan':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.thumb_item)
					hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
					fdl.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break 
		case 'igstalk':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=apivinz`)
					buffer = await getBuffer(hmm.profile_pic)
					hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
					fdl.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break
		case 'infofilm': // Update By fdl & RzkyO
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=BotWeA`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Judul : ${anu.result.judul}\n*➸ Bahasa :* ${anu.result.bahasa}\n*➸ Negara :* ${anu.result.negara}\n*➸ Aktor :* ${anu.result.aktor}\n*➸ Boxoffice :* ${anu.result.boxoffice}\n*➸ Dirilis :* ${anu.result.dirilis}\n*➸ Durasi :* ${anu.result.durasi}\n*➸ Katagori :* ${anu.result.kategori}\n*➸ Metascore :* ${anu.result.metascore}\n*➸ Vote :* ${anu.result.voting_imdb}\n*➸ Negara :* ${anu.result.negara}\n*➸ Sinopsis :* ${anu.result.sinopsis}\n*➸ Penghargaan :* ${anu.result.penghargaan}`
					fdl.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/lk21?apikey=WEMPYGANSS&query=${ige}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Nama Film : ${anu.result.title}\n*➸ Link :* ${anu.result.link}\n*➸ Genre :* ${anu.result.genre}\n*➸ Views :* ${anu.result.views}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Dirilis :* ${anu.result.tahun}\n*➸ Rating :* ${anu.result.rating}\n*➸ Description :* ${anu.result.desc}\n*➸ Aktor :* ${anu.result.actors}\n*➸ Location :* ${anu.result.location}\n*➸ Date Release :* ${anu.result.date_release}\n*➸ Language :* ${anu.result.language}\n*➸ Link Download :* ${anu.result.link_dl}`
					fdl.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
		case 'fakeaddress': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					reply(`[❕] Loading`)
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=onlyonedeveloper`)
					teks = `➸ *Nama* : ${anu.result.name}\n*➸ Birthday :* ${anu.result.birthday}\n*➸ Address :* ${anu.result.address}\n*➸ City :* ${anu.result.city}\n*➸ Region :* ${anu.result.region}\n*➸ Country :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Phone Number :* ${anu.result.phone_number}\n*➸ Username :* ${anu.result.username}\n*➸ Password :* ${anu.result.password}\n*➸ Email :* ${anu.result.email}`
					fdl.sendMessage(from, teks, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'heroml':  // Update By RzkyO & fdl
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(`[❕] Loading`)
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Role*: ${anu.result.role}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				fdl.sendMessage(from, buffer7, image, {quoted: iky, caption: teks})
				await limitAdd(sender)
				break
				case 'igvideo': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    fdl.sendMessage(from, buffer, video, )
				    break
				case 'igpost': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    fdl.sendMessage(from, buffer, image, )
				    break
				case 'igtv': // Update By fdl & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    fdl.sendMessage(from, buffer, video, )
				    break
				case 'tiktoknowm': // Update By RzkyO & fdl
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    fdl.sendMessage(from, buffer, video, )
				    break
				 case 'ccgenerator': // Update By RzkyO & fdl
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   fdl.sendMessage(from, teks, text, {quoted: iky})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': // Update By RzkyO & fdl
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
				   fdl.sendMessage(from, teks, text, {quoted: iky})
				   await limitAdd(sender)
				   break
					/*
                case 'kickall':
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					fdl.groupRemove(from, members_id)
					break*/
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					fdl.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					fdl.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					fdl.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group SHIZUKA BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky})
					break
		//daftar 
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await fdl.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await fdl.sendMessage(from, ppimg, image, {quoted: iky, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await fdl.sendMessage(from, ppimg, image, {quoted: iky, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kapankah':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'apakah':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'rate':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'sangecek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'gaycek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'lesbicek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'gantengcek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'cantikcek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'watak':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: iky })
					await limitAdd(sender)
				        break
		case 'hobby':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					fdl.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					await fdl.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
		case 'help': 
		case 'menu':
//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    wew = fs.readFileSync(`./src/logo.jpg`)
                    shiz = ` 「 *BOT WHATSAPP* 」
  
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
  
❏ *POWERED BY FDL*`
                    fdl.sendMessage(from, wew, image, { quoted: iky, caption: shiz })
					break
		case 'donasi':
		case 'donate':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					fdl.sendMessage(from, donasi(), text)
					break
		case 'menupicture':
		case 'menupict':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					buffer = await getBuffer(`https://i.ibb.co/tqf0P7q/Whats-App-Image-2021-02-22-at-01-46-22.png`)
					fdl.sendMessage(from, buffer, image, { quoted: iky, caption: randompict(prefix)})
					break
		case 'menuowner':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					buffer = await getBuffer(`https://i.ibb.co/5nBhggv/2b84cc9cb84d76bc5c2b27e81d6aecfd.png`)
					fdl.sendMessage(from, buffer, image, { quoted: iky, caption: developer(prefix)})
					break
		case 'bahasa':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.deleteMessage(from, { id: iky.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					fdl.sendMessage(from, resul, text, { quoted: iky})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        fdl.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
		case 'info':
					me = fdl.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : fdl\n*No Owner* : wa.me/6281281872699\n*Ig owner* : www.instagram.com/fdl\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Fans page FB* : https://www.facebook.com/ainneboot\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(`https://i.ibb.co/LZNvTC1/36d5d64d9774.jpg`)
					fdl.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'snk':
					me = fdl.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan Shizuka BOT*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(`https://i.ibb.co/LZNvTC1/36d5d64d9774.jpg`)
					fdl.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
					const bug = body.slice(5)
					if (pesan.length > 300) return fdl.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: iky})
					var nomor = iky.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					fdl.sendMessage('6281281872699@s.whatsapp.net', options, text, {quoted: iky})
					reply('Masalah telah di laporkan ke owner Shizuka BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return fdl.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: iky})
					var nomor = iky.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					fdl.sendMessage('628990542731@s.whatsapp.net', options, text, {quoted: iky})
					fdl.sendMessage('628990542731@s.whatsapp.net', options, text, {quoted: iky})
					fdl.sendMessage('628990542731@s.whatsapp.net', options, text, {quoted: iky})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					fdl.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await fdl.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: iky
					}
					fdl.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'afk':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = iky.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        fdl.sendMessage(from, tagzz, text, {quoted: iky})
					await limitAdd(sender)
                                        break
                case 'quotemaker':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					fdl.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: iky})
					await limitAdd(sender)
					break
                case 'truth':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					fdl.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: iky })
					await limitAdd(sender)
					break
		case 'dare':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					fdl.sendMessage(from, tod, image, { quoted: iky, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
		case 'quoteskehidupan':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					fdl.sendMessage(from, crot, image, { quoted: iky, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					fdl.sendMessage(from, islam, image, { quoted: iky, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					fdl.sendMessage(from, nase, image, { quoted: iky, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					fdl.sendMessage(from, cta, image, { quoted: iky, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					fdl.sendMessage(from, vass, image, { quoted: iky, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'fotocewek':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        fdl.sendMessage(from, cangtip, image, {quote: iky})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        fdl.sendMessage(from, kucigz, image, {quote: iky})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					fdl.sendMessage(from, buffer, image, {quoted: iky})
					await limitAdd(sender)
					break
		case 'loli':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(6)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        fdl.sendMessage(from, buffer, image, {quoted: iky})
					await limitAdd(sender)
                                        break
		case 'waifu':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					fdl.sendMessage(from, hasil, image, {quoted: iky})
					await limitAdd(sender)
					break
		case 'loli2':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					fdl.sendMessage(from, hasil, image, {quoted: iky})
					await limitAdd(sender)
					break
		case 'hentai2':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					fdl.sendMessage(from, hasil, image, {quoted: iky})
					await limitAdd(sender)
					break
		case 'animecry':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						fdl.sendMessage(from, buffer, sticker, {quoted: iky})
						fs.unlinkSync(rano)
					})
					break
		case 'pokemon':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
                case 'anjing':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break

                case 'kucing':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'doraemon':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'hamster':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kelinci':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'mobil':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'motor':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'sepeda':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'bluesky':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'flower':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'icecream':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'pemandangan':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'osakana':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'menherachan':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'naruto':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'animegirl':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'animeboy':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'quotesid':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'quotesen':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'katakata':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kehidupan':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'islami':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					fdl.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'fototiktok':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(12)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(anu.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					fdl.sendMessage(from, buffer, image, {quoted: iky, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'quran':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					fdl.sendMessage(from, quran, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('kota nya mana kak?')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${body.slice(14)}&apikey=BotWeA`, {method: 'get'})
					sholat = `Ashar : ${anu.result.ashar}\nDzuhur : ${anu.result.dzuhur}\nMagrib : ${anu.result.maghrib}\nIsha : ${anu.result.isha}\nSubuh : ${anu.result.subuh}`
					fdl.sendMessage(from, sholat, text, {quoted: iky})
					await limitAdd(sender)
					break
                case 'neonime':
				         // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					fdl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'ocr': 
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await fdl.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await fdl.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								fdl.sendMessage(from, buffer, sticker, {quoted: iky})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && iky.message.videoMessage.seconds < 11 || isQuotedVideo && iky.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await fdl.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								fdl.sendMessage(from, buffer, sticker, {quoted: iky})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
		case 'gtts':
		case 'tts':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return fdl.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: iky})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return fdl.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: iky})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							fdl.sendMessage(from, buffer, audio, {quoted: iky, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'tiktokstalk':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				try {
						if (args.length < 1) return fdl.sendMessage(from, '*Username mana kak?', text, {quoted: iky})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						fdl.sendMessage(from, buffer, image, {quoted: iky, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await fdl.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				fdl.sendMessage(from, yeh, text, {quoted: iky})
				await limitAdd(sender)
				break
		case 'sayang':
					fdl.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: iky} )
					break
		case 'gelud':
					fdl.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: iky} )
					break
		case 'bot':
					fdl.sendMessage(from, 'Iya kak? \nJangan lupa daftar iya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: iky} )
					break
		case 'hargaprem':
		case 'hargapremium':
					fdl.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 7day (premium)\n25k = bulan (premium)',MessageType.text, { quoted: iky} )
					break
		case 'buypremium':
					fdl.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break
		case 'buypremunlimited':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					fdl.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: iky} )
					break
		case 'buyprem30day':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					fdl.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: iky} )
					break
		case 'buyprem7day':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					fdl.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: iky} )
					break
		case 'test':
					fdl.sendMessage(from, 'Active',MessageType.text, { quoted: iky} )
					break
		case 'ping':
					fdl.sendMessage(from, 'Active',MessageType.text, { quoted: iky} )
					break
		case 'assalamualaikum':
					fdl.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: iky} )
					break
		case 'kontol':
					fdl.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/628990542731',MessageType.text, { quoted: iky} )
					break
		case 'FDL':
					fdl.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/628990542731',MessageType.text, { quoted: iky} )
					break
		case 'jembut':
					fdl.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/628990542731',MessageType.text, { quoted: iky} )
					break
		case 'ngentod':
					fdl.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/628990542731',MessageType.text, { quoted: iky} )
					break
		case 'kntl':
					fdl.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/628990542731',MessageType.text, { quoted: iky} )
					break

		case 'wa.me':
		case 'wame':
  					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					fdl.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					fdl.sendMessage(from, options, text, { quoted: iky } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await fdl.chats.all()
					fdl.setMaxListeners(25)
					for (let _ of anu) {
						fdl.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 fdl.updatePresence(from, Presence.composing) 
				 fdl.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					fdl.blockUser (`${body.slice(8)}@c.us`, "add")
					fdl.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    fdl.blockUser (`${body.slice(10)}@c.us`, "remove")
					fdl.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 fdl.updatePresence(from, Presence.composing) 
				 fdl.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					fdl.blockUser (`${body.slice(7)}@c.us`, "add")
					fdl.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    fdl.blockUser (`${body.slice(9)}@c.us`, "remove")
					fdl.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					fdl.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					fdl.updatePresence(from, Presence.composing) 
					fdl.sendMessage(from, 'Sampai jumpa 👋', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await fdl.chats.all()
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buff = await fdl.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							fdl.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await fdl.chats.all()
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buff = await fdl.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							fdl.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await fdl.downloadAndSaveMediaMessage(iky)
					await fdl.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						fdl.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						fdl.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						fdl.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  fdl.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: iky})
                  fdl.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: iky} )
					break    
           /*case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					fdl.groupUpdateSubject(from, `${body.slice(9)}`)
					fdl.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: iky})
					break*/
                /*case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					fdl.groupUpdateDescription(from, `${body.slice(9)}`)
					fdl.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: iky})
					break*/
           /*case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						fdl.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						fdl.groupDemoteAdmin(from, mentioned)
					}
					break*/
			/*case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						fdl.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						fdl.groupMakeAdmin(from, mentioned)
					}
					break*/
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Asek jatah kick, otw kick* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						fdl.groupRemove(from, mentioned)
					} else {
						mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						fdl.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		case 'toimg':
				 // Fix Bug By fdl				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await fdl.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						fdl.sendMessage(from, buffer, image, {quoted: iky, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana kak?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						fdl.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Admin & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await fdl.getProfilePicture(id)
						buffer = await getBuffer(pp)
						fdl.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						media = await fdl.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							fdl.sendMessage(from, res.video, video, {quoted: iky, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
