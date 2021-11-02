/*
--> INFO MITSUHA BOT <--
______________________________
SC ORI : MHANKBARBAR
RECODE : MITSUHA
_______________________________

--> SPECIAL THANKS TO <--
________________________________
MHANKBARBAR
DIMAS_SATRIA
ZAKY06CHEAT
RURICHAN
RIDWAN
HAFIDZ
AINE TEAM
ALLAH SWT
ORANG TUA
CHACHA LORD HEKER JOKER ( MITSUHA )
________________________________
*/

//NOTE : JIKA INGIN NYOLONG PASTIIN KASIH WM "BY MITSUHA" HARGAIN DIKIT LAH YANG BUAT :)
//NOTE : DILARANG DI PERJUAL BELIKAN BUAT UMUM - KETAUAN DI JUAL DENDA 300K ( AKAN SAYA TAGIH SAMPAI LUNAS )
//NOTE : JANGAN HAPUS NAMA YANG ADA DI TQTO - KETAUAN HAPUS AUTO BERHENTI UPDATE BOT
//NOTE : DILARANG UPLOAD KE YOUTUBE TANPA SEIJIN DEVELOPER BOT DULU
//NOTE : HAVE FUN ><

//OWNER : 085731261728
//DEVELOPER : 085731261728
//JANGAN DIUBAH! UBAH AUTO REPORT
//LU CUMAN RECODE YA! BUKAN CREATOR SC INI

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    relayWAMessage,
    prepareMessageFromContent,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { ind } = require('./bahasa')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const axios = require('axios')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
/*const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()*/

/*_________________
CONST JSON & JS
___________________*/

const tebak = JSON.parse(fs.readFileSync('./lib/tebakgambar.js'))
const ban = JSON.parse(fs.readFileSync('./src/ban.json'))
const rabsen = JSON.parse(fs.readFileSync('./src/rabsen.json'))
const vote = JSON.parse(fs.readFileSync('./src/vote.json'))
const clem = JSON.parse(fs.readFileSync('./src/clem.json'))
const tingkatan = JSON.parse(fs.readFileSync('./src/tingkatan.json'))
const hadist = JSON.parse(fs.readFileSync('./lib/hadist.js'))
const bacaharian = JSON.parse(fs.readFileSync('./lib/bacasehari.js'))
const bacasholat = JSON.parse(fs.readFileSync('./lib/bacasholat.json'))
const usercmd = JSON.parse(fs.readFileSync('./src/usercmd.json'))
const cmd = JSON.parse(fs.readFileSync('./src/cmd.json'))
const req = JSON.parse(fs.readFileSync('./src/req.json'))
const benar = JSON.parse(fs.readFileSync('./src/benar.json'))
const salah = JSON.parse(fs.readFileSync('./src/salah.json'))
const berbintang = JSON.parse(fs.readFileSync('./src/berbintang.json'))
const kasar = JSON.parse(fs.readFileSync('./src/kasar.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const no = JSON.parse(fs.readFileSync('./src/no.json'))
const yes = JSON.parse(fs.readFileSync('./src/yes.json'))
const save = JSON.parse(fs.readFileSync('./lib/sv.js'))
const produk = JSON.parse(fs.readFileSync('./lib/produk.js'))
const _komentar = JSON.parse(fs.readFileSync('./lib/komentar.js'))
const like = JSON.parse(fs.readFileSync('./src/Star1.json'))
const dislike = JSON.parse(fs.readFileSync('./src/Star2.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const _registered = JSON.parse(fs.readFileSync('./src/pengguna.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antitoxic = JSON.parse(fs.readFileSync('./src/antitoxic.json'))
const premium = JSON.parse(fs.readFileSync('./src/premium.json'))

              vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN: OWNER MITSUHA ツ\n' 
              + 'ORG: CREATOR/OWNER BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285731261728:+62 85731261728\n'  
              + 'END:VCARD'
             
/*_________________
CONST SETTINGS
___________________*/

         lotre1 = "1⃣"
		 lotre2 = "2⃣"
		 lotre3 = "3⃣"
		 lotre4 = "4⃣"
		 lotre5 = "5⃣"
	     lotre6 = "6⃣"
	     lotre7 = "7⃣"
	     lotre8 = "8⃣"
	     lotre9 = "9⃣"
	
prefix = setting.prefix
prefix2 = `#`
owner = setting.ownerNumber
namaowner = setting.nama
namabot = setting.bot
nobot = setting.nobot
thumb = fs.readFileSync(`./lib/odc.jpeg`)
thumb2 = fs.readFileSync(`./lib/odc.jpeg`)
fakeimage = fs.readFileSync(`./lib/Img.jpg`)
namo = ``
ator = ``
numbernye = '0'
kunci = setting.kunci
respon = setting.respon
blocked = []
hit_today = []
perintah_help = `help`
perintah_info = `info`
perintah_owner = `owner`

/*_________________
BAGIAN FUNCTION
___________________*/

function kyun(seconds){ 
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}

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

const getRegisteredRandomId = () => {
 return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
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
fs.writeFileSync('./src/level.json', JSON.stringify(_level))
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
fs.writeFileSync('./src/level.json', JSON.stringify(_level))
}
}
        
const addLevelingId = (sender) => {
const obj = {id: sender, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./src/level.json', JSON.stringify(_level))
}

async function starts() {
const client = new WAConnection()
//WWEB 
client.version = [2, 2140, 12] /*[2, 2119, 6]*/
client.logger.level = 'warn'
console.log(banner.string)
client.on('qr', () => {
console.log(color('[','red'), color('!','red'), color(']','red'), color(' Scan the qr code above'))
})

fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
client.on('connecting', () => {
start('2', 'ㅤ')
})
	
client.on('open', () => {
success('2', `success conect...`, 'yellow')
})
await client.connect({timeoutMs: 1000*1000})
fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

data = fs.readFileSync('./lib/quiz.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
Soalnya = jsonData[randIndex];
hour_now = moment().format('HH')
var materi = `${Soalnya.soal}`
if (hour_now >= '21:25' && hour_now <= '21:25') {
materi = `${Soalnya.soal}`
}

sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
 buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const date = new Date().toLocaleDateString()      
const fkatalok =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2007, status: 200, thumbnail: thumb2, surface: 200, message: `MITSUHA BOT | 2.0\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog1 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `📢 PROMOTE DETEKSI`, orderTitle: 'Welcome', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog2 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `📢 DEMOTE DETEKSI`, orderTitle: 'Welcome', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog3 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `*_© Mitsuha Official_*\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const faketag3 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb2, surface: 200, message: `☕ TAG ALL ☕\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const tokyo = moment.tz('Asia/Tokyo').format('HH:mm:ss')
const kuwait = moment.tz('Asia/Kuwait').format('HH:mm:ss')
const hong_kong = moment.tz('Asia/Hong_Kong').format('HH:mm:ss')
const brunei = moment.tz('Asia/Brunei').format('HH:mm:ss')
const bangkok = moment.tz('Asia/Bangkok').format('HH:mm:ss')
const qatar = moment.tz('Asia/Qatar').format('HH:mm:ss')
const singap = moment.tz('Asia/Singapore').format('HH:mm:ss')
const kuala_l = moment.tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
const falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Mitsuhabot", 
"caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
}}}
const fgclinkk = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `MITSUHA BOT`, 
"caption": `*_© Mitsuha Official_*\nTANGGAL : ${date} - ${jam}\nDONT CALL ME PLEASE`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
}
}
}
const fgclinkkk = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `MITSUHA BOT`, 
"caption": `*_© Mitsuha Official_*\nTANGGAL : ${date} - ${jam}\nDONT CALL ME PLEASE`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
}
}
}
const fakeitem = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key:{
fromMe: false,
participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./lib/odc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`*_© Mitsuha Official_*`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
const fakestatus = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": cr,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./lib/odc.jpeg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}
const acaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = acaBulan[moment().format('MM') - 1]        
const { text, extendedText, contact, location, liveLocation, image, video, gif, sticker, document, audio, product } = MessageType

client.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await client.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
dev = "6285731261728"
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(mdata.id, kma, location)
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
creator = "6285731261728@s.whatsapp.net"
teks =`🍃 *WELCOME MESSAGES* 🍃`
sendButLocation(mdata.id, `${teks}`, `Hello ${num.split("@")[0]} selamat datang di group ini semoga kamu betah dan tenang ya. Patuhi rules yang berlaku di grup ya 😊 nomor pemilik bot ini wa.me/6285731261728 jangan spam ya`, {jpegThumbnail:buffer}, [{buttonId:`OWNER BOT`,buttonText:{displayText:'OWNER BOT'},type:1},{buttonId:`HELLO 👋`,buttonText:{displayText:'HELLO 👋'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator]}})

/*num = `${num.split("@")[0]}@s.whatsapp.net`
hai = `WELCOME @${num.split('@')[0]}`
client.sendMessage(mdata.id, `Selamat Datang @${num.split('@')[0]}`, text, {
thumbnail: fs.readFileSync('./lib/Kucing.jpg'),
caption: `WELCOME @${num.split('@')[0]}`,
"contextInfo": {
mentionedJid: [hai, num, mdata.id],
"externalAdReply": {
"title": `HELLO SAYA BOT WHANGSAFF`,
"body": `Selamat Datang @${num.split('@')[0]}`,
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/Kucing.jpg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}}, quoted: falfa })*/

} else if (anu.action == 'remove') {
num = anu.participants[0]
dev = "6285731261728"
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(mdata.id, kma, location)
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
creator = "6285731261728@s.whatsapp.net"
teks =`🍃 *LEAVE MESSAGES* 🍃`
sendButLocation(mdata.id, `${teks}`, `Selamat tinggal ${num.split("@")[0]} dari group ini semoga kamu sehat dan tetap bernafas ya. Jangan balik lagi ke group ini yo 😊 nomor pemilik bot ini wa.me/6285731261728 jangan spam ya`, {jpegThumbnail:buffer}, [{buttonId:`OWNER BOT`,buttonText:{displayText:'OWNER BOT'},type:1},{buttonId:`BYE 👋`,buttonText:{displayText:'BYE 👋'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator]}})

/*num = `${num.split("@")[0]}@s.whatsapp.net`
hai = `BYE @${num.split('@')[0]}`
client.sendMessage(mdata.id, `Selamat Tinggal @${num.split('@')[0]}`, text, {
thumbnail: fs.readFileSync('./lib/Kucing.jpg'),
caption: `BYE @${num.split('@')[0]}`,
"contextInfo": {
mentionedJid: [hai, num, mdata.id],
"externalAdReply": {
"title": `HELLO SAYA BOT WHANGSAFF`,
"body": `Selamat Tinggal @${num.split('@')[0]}`,
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/Kucing.jpg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}}, quoted: falfa })*/
		
} else if (anu.action == 'promote') {
const mdata = await client.groupMetadata(anu.jid)
num = anu.participants[0]
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)           
teks = `*PROMOTE TERDETEKSI*
❏ *NOMOR* = ${num.replace('@s.whatsapp.net', '')}
❏ *USER* = @${num.split('@')[0]}
❏ *TANGGAL* = ${date}
`
client.sendMessage(mdata.id, teks, MessageType.text, {quoted: fkatalog1, contextInfo: {mentionedJid: [num]}})

} else if (anu.action == 'demote') {
num = anu.participants[0]
const mdata = await client.groupMetadata(anu.jid)
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg) 
teks = `*DEMOTE TERDETEKSI*
❏ *NOMOR* = ${num.replace('@s.whatsapp.net', '')}
❏ *USER* = @${num.split('@')[0]}
❏ *TANGGAL* = ${date}
`
client.sendMessage(mdata.id, teks, MessageType.text, {quoted: fkatalog2, contextInfo: {mentionedJid: [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}) ,
client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})

	        client.on('chat-update', async (mek) => {
		    try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            if (mek.key.fromMe) return 
			global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const tescuk = ["0@s.whatsapp.net"]
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
    		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const hoour_now = moment().format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			resbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
			buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const mitsuha = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': '', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 353, 'width': 353, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)} } }
			const isCmd = body.startsWith(prefix)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
		    mess = {
		    wait: '_﹝⌬﹞wait proses_',
			success: '_﹝⌬﹞success bro_',
			error: {
			stick: '_﹝⌬﹞system error_',
			Iv: '_﹝⌬﹞url tidak valid_'
			},
			only: {
			group: '_﹝⌬﹞hanya bisa di grup_',
			ownerG: '_﹝⌬﹞hanya untuk owner grup_',
			ownerB: '_﹝⌬﹞hanya untuk owner_',
		    admin: '_﹝⌬﹞hanya untuk admin grup_',
			Badmin: '_﹝⌬﹞error, jadikan bot admin_'
			}
			}
            hit_today.push(command)
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const totalchat = await client.chats.all()
			const isPrem = premium.includes(sender)
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '' 
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiToxic = isGroup ? antitoxic.includes(from) : false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isRegistered = checkRegisteredUser(sender)
			const isPote = isGroup ? yes.includes(sender) : false
			const isDepot = isGroup ? no.includes(sender) : false
			const isLek = isGroup ? like.includes(sender) : false
			const isDislek = isGroup ? dislike.includes(sender) : false
			const isBenar = isGroup ? benar.includes(sender) : false
			const isSalah = isGroup ? salah.includes(sender) : false
			const isCar = isGroup ? tingkatan.includes(sender) : false
			const isCemd = isGroup ? cmd.includes(from) : false
			const isClem = isGroup ? clem.includes(sender) : false
			const isAbsen = isGroup ? absen.includes(sender) : false
			const isVote = isGroup ? vote.includes(from) : false
			const isRabsen = isGroup ? rabsen.includes(from) : false
			const isBan = isGroup ? ban.includes(sender) : false
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined

const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "1.000.00",
"ptt": "true"
}
} 
}
                     
const ftoko2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./lib/odc.jpeg`) 
},
"title": '*_© Mitsuha Official_*', 
"description": "*_© Mitsuha Official_*", 
"currencyCode": "IDR",
"priceAmount1000": "20000000",
"retailerId": 'Whatsapp bot',
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const floc2 = {
key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`❬⸼۬࣪ꪶ M I T S U H A - O F C ˚᮪๑՞`,}}}
                  
const fakebc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `💬 *BROADCAST BOT* 💬`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
            
const reply = (teks) => {
client.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
}
		
const tchat = `${totalchat.length}`   
            
const ucapanFakereply = `「 MITSUHA BOT 」\nBOT CREATED BY MITSUHA`
            
const ucapanFakereply2 = `${pushname}\nCommand: ${command}`
                        
const fakereply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*_© Mitsuha Official_*\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
          
const faketag = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `「  *CIEE KENA TAG BOT*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
			
const faketag2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `📢 *NOTICE* 📢`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
			
/*const faketag3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `💕 HELLO BABY 💞`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }*/
			
const faketag4 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*_© Mitsuha Official_*\nTANGGAL : ${date} - ${jam}\n_*DONT CALL ME PLEASE*_`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
          
const faketag5 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `📩 PESAN INGFO MEMBER 📩`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
 
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg') }, 'title': `Mitsuha Bot Whatsapp\n▢ Rp. 10.000,00\nㅤㅤㅤㅤ\nㅤㅤㅤㅤ`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg')}}}
			
const fkontak2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply2}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply2},;;;\nFN:${ucapanFakereply2},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg')}}}
			
/*const freply = {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `${pushname}\n〓 ${command}`} } }*/
		    
const freply =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `TOTAL PENGGUNA: ${_registered.length}`, orderTitle: 'HALLO BANTU DONASI YA!', sellerJid: '0@s.whatsapp.net'} } } 
                     
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `${groupName}`, 
"caption": `TANGGAL : ${date}\n~> YOUR NAME : ${pushname}`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
}
}
}

const fakeitem = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key:{
fromMe: false,
participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./lib/odc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`*_© Mitsuha Official_*`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
const sendlist = async (tekss, tekstombol, baris) => {
if (!tekstombol) {tekstombol = 'klik disini'}
if (!baris) {baris = [{"title": "kok bisa","rowId": `hmm`}]}
let po = client.prepareMessageFromContent(from, {
"listMessage":{
"title": "",
"description": tekss,
"buttonText": tekstombol,
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": baris
}]}}, {}) 
client.relayWAMessage(po, {waitForAck: true})
}
			
const fgithub =
{
"key": {
"remoteJid": "6285731261728@s.whatsapp.net",
"fromMe": true,
"id": "CC57AC2D101A643CE4D78CBEBE45CCE2"
},
"message": {
"extendedTextMessage": {
"text": "*HELLO IM MITSUHA*",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "D7AA558334F612C8E5D68A75C92C7D2D",
"participant": "6285731261728@s.whatsapp.net",
"quotedMessage": {
"extendedTextMessage": {
"text": "https://www.github.com/ITSMITSUHA\n\nnah ada fake kan",
"matchedText": "https://www.github.com/ITSMITSUHA",
"canonicalUrl": "https://github.com/ITSMITSUHA",
"description": "Contact me. it has one repository available. Follow their code on GitHub.",
"title": "it - Overview",
"previewType": "NONE",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADmAOYDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkBAwUEAv/EAEwQAAEDAwIDAwQMDAQFBQAAAAEAAgMEBREGBxIhMQgTQRciUZQUMjZSVmF1kZKy0dMVIzU3QlNxc3Shs8MWM3KBJDSxwfAlRGLC4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC1KIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICLz7xe7VZYhLeLnQ0ER6PqqhkQ+dxCx07o6EBIOsLBy9FdGf+6DMkWG+VLQnwwsPr0f2p5UtCfDCw+vR/agzJFhvlS0J8MLD69H9qeVLQnwwsPr0f2oMyRYb5UtCfDCw+vR/anlS0J8MLD69H9qDMkWG+VLQnwwsPr0f2p5UtCfDCw+vR/agzJFhvlS0J8MLD69H9qeVLQnwwsPr0f2oMyRYb5UtCfDCw+vR/anlS0J8MLD69H9qDMkWG+VHQnhrCw+vR/avdsuo7JfATZbxbbiAMn2JVMlx9ElB6qIiAiIgIiICIiAiIgIiIBOFWbfjtCPtFZU6e0JLE6uiJjqbkQHticOrIgeRd4FxyBzAGeYzztO63rNF7cuNpkEVxuc3sKOQHDomFri97fjAAAPgXA+CobTwTVU7IaeJ800hw1jGlznH0ADqg7K+tqrjWTVdfUTVNXM4ukmmeXvefSXHmSvnX0W6rloK+nq6cRmWCRsjO9jbI3IORlrgQ4fEQQrw7Abw2/X1I61XGno7bf6duRBDhsVQzn50TScgjHNvPHUEjOAoqi2pd2z3o+ZO7Z70fMg1WotqXds96PmTu2e9HzINVqLal3bPej5k7tnvR8yDVai2pd2z3o+ZO7Z70fMg1WotqXds96PmTu2e9HzINVqLal3bPej5k7tnvR8yDVcu2mqJ6WohqKaWSGeF4fHJG4tcxwOQ5pHMEEZyr974brWrbe0iExRVt8q4yaWiPTh6d5J6GZ8OriCB0JFEdR3iov8Afa66VcdPFPVymV8dNEI42k+DWjoP5nqSTkoLE7G9omppamGybg1LqikfhkF0cMviPIATH9JuP0/bA9c5y220b2yMa5jmua4ZBacghasp4JqZzRPFJE5zGvaHtIy1wyCM+BBBBV0+yHraXUOip7DcJTJW2VzWROccl1O7PAPj4SHN+IcKCfEREBERAREQEREBERBUPtvVsjtS6aoS49zHSSTAeHE5+P8AowLwextaae4bn1VZUMa91voHyxZHtXuc1mfoud869Ptt+7qwfJp/qvXHYl93l++Tf7rEGbdoLYSK8MqdR6IphFdOclVb424bU+l8Y8JPEjo7w8721R2uq7ZXgtM9JWU0vUExyRPaf9iCCP2hbSjzChDfrY+m14HXiwugodQsYePLMMrcAYa8j2rh4PwfQfAgPH7P+/FJf6Sk09rKrbBfWkRQVkxAZWZPmgno2Tw5+29OThWHWrm72yusl0qLfc6aWkrqZ/BLDI3DmOH/AJnPQjmFZzYLtBvfLRab15M3n+Lp7vK/Bzy4WTZ/3HeZ9HF4uQWqRcNcCOo5rlAREQEREBEQlAUKb873W/RFvqbTp+pgq9Uu8wMA7xlJ6XSeHFjOG+nBIx1x/f3f5umqir03o4xT3dreCor+IOZSO8WtHMOeB18GnlzOQKfxMqrjWtjjZNU1dRJhrWgvfI9x6DxJJP8AvlB2XW5V15uM9ddKqasrZ3cUk0zi5zz8ZKsx2fNgXyyUuptd0rmRNIlo7XK3BceofMD4ehh6/pcuRyXYDYSPTjqfUOtIo57xgSU1EfOZSHrxO8HSejwb8ZwRYpBUrtuWanguOl7tDG1s88U1LIQMZbGWFvzcbliPY9rpKbd0U7CRHVUE0bx6ccLx9VSF24/ybpD99VfViUY9kn89FB/C1H1CgveiIgIiICIiAiIgIiIKcdtv3dWD5NP9V647Evu8v3yb/dYue237urB8mn+q9cdiX3eX75N/usQXIQoiCK95tnbLuHRTVLI2UWomR4grmZHGQOTJR0c3wzjiHLBxyNFNS6fummLxPa77RTUVbCcOjlHUekHo5p8CORWz9YNu1txatx9Nvt9xxBWRZfSVrWBz4H/92nxbnn8RAICtOwG/M+mXU2n9YzyVFj5RwVbsukox4A+Lo/5t8MjAVyaOqgraSGppJop6eZgkjlicHNe0jIc0jkQR4rW1uHoa9aAv5tV/gY2Qt7yKaN3FHMzJHE0/tHQ4I8Qs82H3prtAVsdtu75avTMr/Pi9s+lJ6vj+LPMt6HmRz6he9F59gvNvv9pprnZ6uKsoahvFHNEeTh/1BHQg8weRXoICIuivrKe30c9XWzxU9NAwySyyvDWsaOZJJ5AAIOyWRkUb3ve1rWDLnOOAB6Sqo9oLf+SaSTT+39eWQt4mVlzhx+MyMcELvAel45k44Tjmcb3933n1aamw6TllptPnMc1RjhkrfT8bYz6Op8cdFDujdK3nWV8itOnqJ9VWPBcQOTY2jq97jya0ZHM+kDqQEHnWy31t3uMNFbaWerrZ3cMcMLC97z8QCu9sbsdbdCR012vIbXan4SRMCe7peJuC2MeJwSC4j9mPH29kdp7ftvZPP7qrv1Q3/i60N6ePdx55hg+dx5nwAk9AAwEREFXu3H+TdIfvqr6sSjHsk/nooP4Wo+oVJ3bj/JukP31V9WJRj2Sfz0UH8LUfUKC96IiAiIgIiICIiAiIgpx22/d1YPk0/wBV647Evu8v3yb/AHWLntt+7qwfJp/qvXHYl93l++Tf7rEFyEREBeDrnVVu0Zpmtvd4k4aWmbnhb7aRx5NY0eJJ5fzPLJXq3SvpbXbqmuuE8dPSU0bpZZZDhrGgZJKoJvpupXbj6ie2B80GnqZ2KOkJIDsZHevHvzk/6QcDxJDHNzdc3TcHVMt5u3dscWCKCCLPBBGMkNGeZ5kknxJPTovFq7HdKK0UN1qqCpht1aXCmqXsIjlLTghp+Ig/MpF2C2mqtxb62prWSQ6bo5MVc45d64YPcsPviCMn9EHPUjN37tpSx3bTB0/XW2nktHciBtNwANjaBhvB70t5YI5jHJBRHZzdm8baXGT2MxtZaKlzTU0MjiAcY89h/RfjlnmCOoOBi9OhdZ2PXFkiuenq2OoicB3kRIEsDufmyM6tPI/EeoJGCqW7x7HXzQtZPWWyGouunTl7KqNnE+BvomaOmPf+1PxE4ES01TPSzNlpZpIZW9HxuLXD/cINm+qdSWjStnlud/r4KGij6vkPNx68LQObncjyAJVId8d6LjuJUuoKBr6HTkT+KOnzh9QRjD5cHBxjIaOQ+M81FNbW1dfN3tdUz1Mvv5pC93zlSDtTs/qPcKrhlp6aSisnF+NuU7MMDfHuwcd47kRy5A9SEGD2yyXO7QV09uoKmpioYTUVT4mEiGMdXOPgPs+JfbonVV10XqOlvNjmEVXAT5rxlkjT1Y8eLT/+jBAK2JaQ0ZY9J6aZZbRQQspO7DJ+KNpdUnhwXSnHnEjrnl4DlyVQO0rtGdE3f8OWGA/4drX82MHKjlP6H+g/o+jmPAZC2e1euKHcHR1JeqAd2934qpgJyYZgBxN/ZzBB8QQsvWuTaTcW6bc6mir6F8ktBIQ2souMhk7P2dA4ZyHeH7CQdhWn71btQ2elulmq4quhqW8cUsfQjxGDzBByCDzBBBQeiiIgq924/wAm6Q/fVX1YlGPZJ/PRQfwtR9QqTu3H+TdIfvqr6sSjHsk/nooP4Wo+oUF70REBERAREQEREBERBTjtt+7qwfJp/qvXHYl93l++Tf7rFz22/d1YPk0/1XrjsS+7y/fJv91iC5C4ccDqAuT0VYu1Tu7Lbg7R2mK7gqntcLpNEObGkcoWu8CQSXY5gYGeZCDB+01u87Vdym0xYJx+AaOXE00bjiskH/0aengSOLnyxGe1OgrhuJqyGz29wgjDTLU1TmlzYIx1cR4k5AA8SfAZI8DTNjuGpb9Q2i0wOnrauURRtA+cn0ADJJ8ACVsN2s29tG3enGW61x8dS8NdV1bh59RIBjiPob1w3oP2kkh7GjdMWzSGnaOzWWDuaOmbgZ5ue7xe4+LieZK9tEQcY55WD6i2l0JqKrfVXbTVDJUvOXyxcUDnn0kxluT8ZWcogj+ybNbe2WpbUUOlqEyt5tNSX1OD6QJHOAPxrPmMaxrWsAa1owAOgC/SIC+G+Wmhvlpq7bdadlTRVUZilieOTmn/AKH0HqDzX3Ig14b2ba1e22qTSF0lRaqoGWiqnNxxNzzY7w428s465B5ZwMg7Om7Emgb+LddpnHTVc/8AHDr7GkPIStHo5AOHo58yAFczX2jbRrnTk9nv1P3sD/OjkacPhkwQJGHwIyfiPQgg4Wu3W+lbnozU1ZZb1D3dVTu5OHNsjD7V7T4tI+zkQUGzGnmjqIY5YJGSxSND2PYctc0jIII6jC7FUjsrbu+wp4dGamqz7FlIZbJ5CMROJ/ySfQSfN9B5eIxbcdEFXu3H+TdIfvqr6sSjHsk/nooP4Wo+oVJ3bj/JukP31V9WJRj2Sfz0UH8LUfUKC96IiAiIgIiICIiAiIgpx22/d1YPk0/1Xr89iX3d375N/usX19t6jkbqjTVYQe6ko5IQf/k1+T9cKNtjNxoNtbnfbnJSuq6iot5gpos4aZe8YRxHwbgOJ/ZjxQWc7R27lPoixz2Wz1BOpq2HEZj/APaMdyMjj4OxnhHp59Bzo/S09Tca6KCnjlqauokDGMYC58j3HkB4kklfRfbtW3681l1uk7p62rldLNI7xcT/ACA6AdAMBW17Lm0BsNLHq7UlOPwpUszQ08jedNGRze7PR7geXi0fGSAGZ9nrauPbzTYqblDGdSVzc1bw4P7lmfNiafQORdjq7xIAUtoOSICIiAiIgIiICIiAo33z22g3G0hLSxNhjvVL+NoKiTlwu5cTCRz4XAYPoOD4KSEPNBq5vVrrbJdqu23SmfTVtLIYponjm1w/86jqridmPeCDUdppNKagqC2/UsfBTSyH/m4mjkM/rGgcweoGeZyvq7S+0DtaW86hsEf/AK/RRcL4Wj/nIxz4f9Y549PT0Yphbq2rs91pq6ilfTVtHM2WKQDzmPacg4PoI8UFpu3H+TdIfvar6sSjHsk/nooP4Wo+oV0b17rx7l6Y0q2am9jXahdP7NY0HuyXCMNcw+g8J5HmDy58ifS7H1HJUbvsnYPMpaGeR5/bwtH83ILyIiICIiAiIgIiICIiCGe1Vo6q1XtuJ7XTme4WqcVbWMZxPfFgtka3x8Wux48CoktqZHzqqm/PZ7q6m5VWodBU8T2SjvKi1tPC7jz5zofAg9eDlzBxnIACP+zDpzTF11f+EtV3e2wige00tuqpWsNTKfauw7k5rfQMnOM8ut6xjHLoVqxqqeekqJaeqikhnicWSRSNLXMcOoIPMH4l+RLK0ACR4HoDkG1BFqw7+b9a/wCkU7+b9a/6RQbT0WrDv5v1r/pFO/m/Wv8ApFBtPRasO/m/Wv8ApFO/m/Wv+kUG09Fqw7+b9a/6RTv5v1r/AKRQbT0WrDv5v1r/AKRTv5v1r/pFBtPRasO/m/Wv+kU7+b9a/wCkUG084PVUu7WOldM0N/dfdPXa2C4VM3d3C1QzMMrZMZ77gbzbnHnZxzIPPJUAd9KRgyPI/wBRSKOSaRkcTHPkeQ1rGjJcT0AHiUH4AyrndjrRj7NpCs1FXQOjq7s8Ng424Ip2dCPic4k/GGtKjzZHs83K7VtLeddUr6G0sPeMt8mWz1BGCA9v6DPTnzjjGBnKuLBFHBEyKJjWRsaGtY0YDQOQAHgEH7REQEREBERAREQEREBMIiDHdUaI0xqppGobHQV78cIlliHegegSDzh/sViB2B2yJydMM9dqfvFKKIIt8gG2XwYb67U/eJ5ANsvgw312p+8UpIgi3yAbZfBhvrtT94nkA2y+DDfXan7xSkiCLfIBtl8GG+u1P3ieQDbL4MN9dqfvFKSIIt8gG2XwYb67U/eJ5ANsvgw312p+8UpIgi3yAbZfBhvrtT94nkA2y+DDfXan7xSkiCLfIBtl8GG+u1P3ieQDbL4MN9dqfvFKSIIt8gO2XwYb67U/eLKNL7d6R0s9slh09b6SdvScRcco/ZI7Lv5rKkQAMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAoT393Hv+iNVaPoLG+mbT3SVzKgSxcZID428j4cnFTYqtdsVs79YaAbRvbHUl8oie4ZDX95Fgn4s4QWlRVB3worxs3q7TGorJqu+3OurxL7K/CVR3jZe6MZLCBgd27jxwfo8IwemMq3t1HfLd2ktA2y33m5UltqfYHf0kFU+OGXirJGu4mA4dloAORzAwgsooh1fr292vtCaV0fSPpxZrjRCedrosvLsz9HeA/Ft/msT3y1Derbv7tzbrdd7jSW+qmpBUU0FS+OKYOquEh7AcOyORyOnJeZvXQXa6dqPRtFp2ubb7lNamtZVuYH9y3jqjI8NPIuDA8geJx06oLOrGdxdbWjQGmpL3fnTexhI2FkUDQ6SV7s4a0EgZwHHmRyaVWrdKgvOyG4emrvY9U3y4UN0lc+phuFUZnzmMtEjZOQa8ObIMEjIOSCCAVJGtKduou1HpG1XP8ZbrTan3OCCRoDXTl7xxA9TgsjP7Y/25DIbdqTc7UdOK60aTstjoST3cN+rJfZMzfB3BGz8Xy/RdzB9IX703utx6zi0frSx1OndRzgmmzK2elqm4yDHKMc3edgEYy3hzxeaoY0pQR7l7fa73P1PU1rtT281Qtr4Kh0UdC2CnEsbYmjw4nkHOc9fbFxP5uNsmoNgNnZ7eyOW+x3+J9FIGgvBmkmlDBnwLhFnwJaEE8btbp2rbSK3C50Nwraq5d6KWGkY08TmcPJxLhgEvaOQcevJeR2f9zLluZbb5XXKio6OOlrBFTxU/ESIy3ID3E+c4dMgNB9AUnzUFHPW01ZPS08lZTB7YJ3xgyRB4AcGuIy3OBnHXAVdOxD7ktSfxzP6aCRN292ItEXO32G0WipvuqLizjp6KHLWtaSWhzjgk5IdgAdGnJbyJ/e2WodyLhfKii3D0nRWqldA+amq6Odr28TXMHduAkfzIeSDlvtTgHniAqqbVF67VeozpSOggvzDLBT1FcCYqVkcTY+9xg8ywYHIjMnTHNSLtpr7XVo3kO3249VSXSaphMlPV0sLWBrhF3owQ1mWcLXg5bniA54QetrHcDdSlqbrU6c2+pxY7ZPOySprakGSpiic7MkcfExwDmtyMNfnPLiWU7K7p0G6Flq6imo5KC4UT2sqqRz+8DA7i4HNfgcQIafAEEEYxgnGd7Llu3FVXKk0NZKWosDqPJq2FjqkOLTxhjTJkn0AMJJ6ZK8nsdzaWfo25RWCOsZe2PiN2NVglzi13dmMgY7vlJgHzgeLPUEhYFFgu9urqnQ+2d4vdv7r8IRhkVMJBkcb3tbnHiWgl2DyPCol0Fs1ddW6Rt+qdS661LHqOvgFZRy09WSyla8cUec+c7kQ4hrmYzwjpkhZRFWvcq8ag132gabbigvFwsljpY2urJKGThfMDB3ziSMHBDmxgHIB87B6LzLxb77sjuto6iseo7nW6VvtQ2nfSXCbvuH8ZG2bzQA0Ow9jmvaAeoORniC06KsGtLhqW69qmHS1s1XeLTbqmFoeynqHFjGexXPfwxk8AeQHYdg8LiHdQsduFs1VpDtAN0ZpbWF5FLfGRmWorpxPLwPbmWQ5GDKOB5a4AO6DPMkhcFFVyyWu57a9p6zafo9Q3a42e9U7qqaOtqDI6TiZMMyHGHOEkZcHAA4OPTm0aAiIgIiICIiAoI7ROgtS6v1doqt07bfZlNbpXOqn9/FH3YMkZ6PcCeTT0z0U7oggDtW7fan13/hb/AApbPZ/sL2V7I/4iKLg4+54fbubnPA7pnourtFbZ6uv2t9Pax0M2Grr7cyKIUznxxujfFK+VkoMhDXDLsFp5jA6gnFhEQVavGgd1dTbq6K1Xqi20Dm0tTSSTw0M8bY6GKOcOc0hzy5zvbOJaXdQATgAZJvPt9rfUO9Wn9RaODaOKht7WNuL5mBkUzXzuDHM4uMtdxNacNIw88jzCsCiCrw253N3L3Is943NpKG1We2Pjf7FimbJG5jXcTmRsZI88Ty0BznOHLpnhDVJG7+k723Vmndf6KpG199s3FT1NA6Tg9mUjuLLWuJwHN4345EnjzzLQ0yyiCqdNLtBR1lQ3UdZq/TUFZMaqp0fXxVEVJxkDDjDFGcty0Ob536I5ADhUhbQbZaVa216hpH6srILc+Vlqp9RPwynBP+dDDwtwHe2aSPQcBwBE1IgKEeyzobUWhtO3ul1TbvYM9TVMkib38cvE0MwTljnAc/SpuRBAu6e3mrrbuhTbibZR01Zc5GCGtt9TIGNeQzg4suc0FpaGgty0gtBGcnhbTbdaurNza3cTc5sFNdg10VFQwSBwiy3g4hwOLQwMLmhuXElxccEZdPSIIG1Ldd+6W6X2isVhtFbbX1M/sC4PkgE0cLnHu8AytblrSPbMPMc+Lx+rZHai+bb6I1G9lZSv1Xdaf8S0edBTyMY/ugSRk+c/LjjHIAZxkzeiCHNP6Q1jrrZ+96e3aqDT3esqT7HnjbA50MbRG6NxEXmn8Y12RkEgkZGcjA9KW7tAaSsX+FbZbbXUUMLzBS3OeeGR1PGTgOZmQEsHMgPjcQOWMANFn0QQHu/trquLcug3E2zbSzXiNrWVVHM9rTKQ3u+IcZDS0xngIy0jhBaSTkeVZNvNxde7nWjVe5zaSz0lmkilpqGlla8OcxweAxrXPABcAXOc7iPIDljhsiiCCarQWpZO1VR6wZbc6cjiLXVffxcj7EfH7Ti4/bED2v8AJdmpdCajre01YdWU1u49P0tO1k1V38Y4SI5RjgLuM83N6DxU5IghjWeitQXHtI6R1TRUHeWGgoBDU1XfRjgfmo5cBdxH/MZ0B6/EVM6IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k="
}
}
}
}
},
"messageTimestamp": "1627739664",
"status": "ERROR"
}

const fgerub= (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": '',
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync(`./lib/odc.jpeg`),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
})
}
        
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text, {quoted: falfa})
}
			
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": memberr}})
}
			
const costum = (pesan, tipe, target, target2) => {
client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
}
			
const sendButton = (teks) => {
client.sendMessage(from, teks, MessageType.buttonsMessage, {quoted: floc2})
}
           
const keranjang = (teks) => {
res = client.sendMessage(from,{ "orderMessage": { "itemCount": 321, "message": cap, "footerText": "*_© Mitsuha Official_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:fkatalok})
}       
        
/*const listmsg = (from, title, desc, list) => { //List Buttonnya ~Riu
let pio = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
return client.relayWAMessage(pio, {waitForAck: true})
}*/
        
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Choose in Here","listType": "SINGLE_SELECT","sections": list}}, {})
return client.relayWAMessage(po, {waitForAck: true})
}
			colors = ['red','gray','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log(`{\n`, color(` from: "${sender.split('@')[0]}"\n  time: "${hoour_now}"\n  command: "${command}"`,'yellow'), color(`\n}`,`white`))
			if (!isGroup && !isCmd) console.log(`{\n`, color(` from: "${sender.split('@')[0]}"\n  time: "${hoour_now}"\n  command: "${command}"`,'yellow'), color(`\n}`,`white`))
			if (isCmd && isGroup) console.log(`{\n`, color(` from: "${sender.split('@')[0]} - ${groupName}"\n  time: "${hoour_now}"\n  command: "${command}"`,'yellow'), color(`\n}`,`white`))
			if (!isCmd && isGroup) console.log(`{\n`, color(` from: "${sender.split('@')[0]} - ${groupName}"\n  time: "${hoour_now}"\n  command: "${command}"`,'yellow'), color(`\n}`,`white`))
			
            let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			   
hour_now = moment().format('HH')
var ucapanWaktu = 'Selamat Pagi'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = 'Selamat Pagi'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = 'Selamat Siang'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = 'Selamat Sore'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = 'Selamat Malam'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = 'Selamat Tengah Malam'
} else {
ucapanWaktu = 'Selamat Malam!'
}   

                function addMetadata(packname, author) {	
				if (!packname) packname = ' '; if (!author) author = ' ';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
		
const pencapaian = tingkatan.length
var tingkat ='🏚️           🌳              🚗'
if (pencapaian <= 1) {
tingkat ='🏚️           🌳            🚗'
} else if (pencapaian <= 2) {
tingkat ='🏚️           🌳          🚗'
} else if (pencapaian <= 3) {
tingkat ='🏚️           🌳        🚗'
} else if (pencapaian <= 4) {
tingkat ='🏚️           🌳     🚗'
} else if (pencapaian <= 5) {
tingkat ='🏚️           🌳  🚗'
} else if (pencapaian <= 6) {
tingkat ='🏚️               🚗'
} else if (pencapaian <= 7) {
tingkat ='🏚️             🚗'
} else if (pencapaian <= 8) {
tingkat ='🏚️          🚗'
} else if (pencapaian <= 9) {
tingkat ='🏚️       🚗'
} else if (pencapaian <= 10) {
tingkat ='🏚️    🚗  🌳'
} else if (pencapaian <= 11) {
tingkat ='🏚️  🚗    🌳'
} else if (pencapaian <= 12) {
tingkat ='🏚️ 🚗     🌳'
} else if (pencapaian <= 13) {
tingkat ='*PENCAPAIAN SELESAI 🌳'
}
        
const levelRole = getLevelingLevel(sender)
var role ='Newbie'
if (levelRole <= 2) {
role ='Newbie'
} else if (levelRole <= 4) {
role ='Beginner Grade 1'
} else if (levelRole <= 6) {
role ='Beginner Grade 2'
} else if (levelRole <= 8) {
role ='Beginner Grade 3'
} else if (levelRole <= 10) {
role ='Beginner Grade 4'
} else if (levelRole <= 12) {
role ='Private Grade 1'
} else if (levelRole <= 14) {
role ='Private Grade 2'
} else if (levelRole <= 16) {
role ='Private Grade 3'
} else if (levelRole <= 18) {
role ='Private Grade 4'
} else if (levelRole <= 20) {
role ='Private Grade 5'
} else if (levelRole <= 22) {
role ='Corporal Grade 1'
} else if (levelRole <= 24) {
role ='Corporal Grade 2'
} else if (levelRole <= 26) {
role ='Corporal Grade 3'
} else if (levelRole <= 28) {
role ='Corporal Grade 4'
} else if (levelRole <= 30) {
role ='Corporal Grade 5'
} else if (levelRole <= 32) {
role ='Sergeant Grade 1'
} else if (levelRole <= 34) {
role ='Sergeant Grade 2'
} else if (levelRole <= 36) {
role ='Sergeant Grade 3'
} else if (levelRole <= 38) {
role ='Sergeant Grade 4'
} else if (levelRole <= 40) {
role ='Sergeant Grade 5'
} else if (levelRole <= 42) {
role ='Staff Grade 1'
} else if (levelRole <= 44) {
role ='Staff Grade 2'
} else if (levelRole <= 46) {
role ='Staff Grade 3'
} else if (levelRole <= 48) {
role ='Staff Grade 4'
} else if (levelRole <= 50) {
role ='Staff Grade 5'
} else if (levelRole <= 52) {
role ='Sergeant Grade 1'
} else if (levelRole <= 54) {
role ='Sergeant Grade 2'
} else if (levelRole <= 56) {
role ='Sergeant Grade 3'
} else if (levelRole <= 58) {
role ='Sergeant Grade 4'
} else if (levelRole <= 60) {
role ='Sergeant Grade 5'
} else if (levelRole <= 62) {
role ='2nd Lt. Grade 1 '
} else if (levelRole <= 64) {
role ='2nd Lt. Grade 2'
} else if (levelRole <= 66) {
role ='2nd Lt. Grade 3'
} else if (levelRole <= 68) {
role ='2nd Lt. Grade 4'
} else if (levelRole <= 70) {
role ='2nd Lt. Grade 5'
} else if (levelRole <= 72) {
role ='1st Lt. Grade 1'
} else if (levelRole <= 74) {
role ='1st Lt. Grade 2'
} else if (levelRole <= 76) {
role ='1st Lt. Grade 3'
} else if (levelRole <= 78) {
role ='1st Lt. Grade 4'
} else if (levelRole <= 80) {
role ='1st Lt. Grade 5'
} else if (levelRole <= 82) {
role ='Major Grade 1'
} else if (levelRole <= 84) {
role ='Major Grade 2'
} else if (levelRole <= 86) {
role ='Major Grade 3'
} else if (levelRole <= 88) {
role ='Major Grade 4'
} else if (levelRole <= 90) {
role ='Major Grade 5'
} else if (levelRole <= 92) {
role ='Colonel Grade 1'
} else if (levelRole <= 94) {
role ='Colonel Grade 2'
} else if (levelRole <= 96) {
role ='Colonel Grade 3'
} else if (levelRole <= 98) {
role ='Colonel Grade 4'
} else if (levelRole <= 100) {
role ='Colonel Grade 5'
} else if (levelRole <= 102) {
role ='Brigadier Early'
} else if (levelRole <= 104) {
role ='Brigadier Silver'
} else if (levelRole <= 106) {
role ='Brigadier gold'
} else if (levelRole <= 108) {
role ='Brigadier Platinum'
} else if (levelRole <= 110) {
role ='Brigadier Diamond'
} else if (levelRole <= 112) {
role ='Major General Early'
} else if (levelRole <= 114) {
role ='Major General Silver'
} else if (levelRole <= 116) {
role ='Major General gold'
} else if (levelRole <= 118) {
role ='Major General Platinum'
} else if (levelRole <= 120) {
role ='Major General Diamond'
} else if (levelRole <= 122) {
role ='Lt. General Early'
} else if (levelRole <= 124) {
role ='Lt. General Silver'
} else if (levelRole <= 126) {
role ='Lt. General gold'
} else if (levelRole <= 128) {
role ='Lt. General Platinum'
} else if (levelRole <= 130) {
role ='Lt. General Diamond'
} else if (levelRole <= 132) {
role ='General Early'
} else if (levelRole <= 134) {
role ='General Silver'
} else if (levelRole <= 136) {
role ='General gold'
} else if (levelRole <= 138) {
role ='General Platinum'
} else if (levelRole <= 140) {
role ='General Diamond'
} else if (levelRole <= 142) {
role ='Commander Early'
} else if (levelRole <= 144) {
role ='Commander Intermediate'
} else if (levelRole <= 146) {
role ='Commander Elite'
} else if (levelRole <= 148) {
role ='The Commander Hero'
} else if (levelRole <= 152) {
role ='Legends'
} else if (levelRole <= 154) {
role ='Legends'
} else if (levelRole <= 156) {
role ='Legends'
} else if (levelRole <= 158) {
role ='Legends'
} else if (levelRole <= 160) {
role ='Legends'
} else if (levelRole <= 162) {
role ='Legends'
} else if (levelRole <= 164) {
role ='Legends'
} else if (levelRole <= 166) {
role ='Legends'
} else if (levelRole <= 168) {
role ='Legends'
} else if (levelRole <= 170) {
role ='Legends'
} else if (levelRole <= 172) {
role ='Legends'
} else if (levelRole <= 174) {
role ='Legends'
} else if (levelRole <= 176) {
role ='Legends'
} else if (levelRole <= 178) {
role ='Legends'
} else if (levelRole <= 180) {
role ='Legends'
} else if (levelRole <= 182) {
role ='Legends'
} else if (levelRole <= 184) {
role ='Legends'
} else if (levelRole <= 186) {
role ='Legends'
} else if (levelRole <= 188) {
role ='Legends'
} else if (levelRole <= 190) {
role ='Legends'
} else if (levelRole <= 192) {
role ='Legends'
} else if (levelRole <= 194) {
role ='Legends'
} else if (levelRole <= 196) {
role ='Legends'
} else if (levelRole <= 198) {
role ='Legends'
} else if (levelRole <= 200) {
role ='Legends'
} else if (levelRole <= 210) {
role ='Legends'
} else if (levelRole <= 220) {
role ='Legends'
} else if (levelRole <= 230) {
role ='Legends'
} else if (levelRole <= 240) {
role ='Legends'
} else if (levelRole <= 250) {
role ='Legends'
} else if (levelRole <= 260) {
role ='Legends'
} else if (levelRole <= 270) {
role ='Legends'
} else if (levelRole <= 280) {
role ='Legends'
} else if (levelRole <= 290) {
role ='Legends'
} else if (levelRole <= 300) {
role ='Legends'
} else if (levelRole <= 310) {
role ='Legends'
} else if (levelRole <= 320) {
role ='Legends'
} else if (levelRole <= 330) {
role ='Legends'
} else if (levelRole <= 340) {
role ='Legends'
} else if (levelRole <= 350) {
role ='Legends'
} else if (levelRole <= 360) {
role ='Legends'
} else if (levelRole <= 370) {
role ='Legends'
} else if (levelRole <= 380) {
role ='Legends'
} else if (levelRole <= 390) {
role ='Legends'
} else if (levelRole <= 400) {
role ='Legends'
} else if (levelRole <= 410) {
role ='Legends'
} else if (levelRole <= 420) {
role ='Legends'
} else if (levelRole <= 430) {
role ='Legends'
} else if (levelRole <= 440) {
role ='Legends'
} else if (levelRole <= 450) {
role ='Legends'
} else if (levelRole <= 460) {
role ='Legends'
} else if (levelRole <= 470) {
role ='Legends'
} else if (levelRole <= 480) {
role ='Legends'
} else if (levelRole <= 490) {
role ='Legends'
} else if (levelRole <= 500) {
role ='Legends'
} else if (levelRole <= 600) {
role ='Legends'
} else if (levelRole <= 700) {
role ='Legends'
} else if (levelRole <= 800) {
role ='Legends'
} else if (levelRole <= 900) {
role ='Legends'
} else if (levelRole <= 1000) {
role ='Legends'
} else if (levelRole <= 2000) {
role ='Legends'
} else if (levelRole <= 3000) {
role ='Legends'
} else if (levelRole <= 4000) {
role ='Legends'
} else if (levelRole <= 5000) {
role ='Legends'
} else if (levelRole <= 6000) {
role ='Legends'
} else if (levelRole <= 7000) {
role ='Legends'
} else if (levelRole <= 8000) {
role ='Legends'
} else if (levelRole <= 9000) {
role ='Legends'
} else if (levelRole <= 10000) {
role ='Legends'
}
	
    const hewan = [
	'🐡 : 🐬 : 🐋',
	'🐋 : 🐋 : ??',
    '🐬 : 🐬 : 🐬',
	'🐟 : 🦐 : 🦈',
    '🦑 : 🐟 : 🐲',
    '🐡 : 🐠 : 🐡',
    '🐡 : 🦐 : 🐋',
    '🦐 : 🐬 : 🐟',
    '🐡 : ?? : 🐠',
    '🦀 : 🦀 : 🦀',
    '🦀 : 🐬 : 🐠',
    '?? : 🐡 : 🐋',
    '🐃 : 🦔 : 🐏',
	'🐏 : 🐏 : 🐏',
	'🦔 : 🦔 : 🦔',
    '🐂 : 🦐 : 🐎',
    '🕊 : 🕊 : 🐃',
    '🐃 : 🐃 : 🐃',
    '🐃 : 🦔 : 🐏',
    '🦔 : ?? : 🐂',
    '🐃 : 🐎 : 🐎',
    '🐕 : 🐕 : ??',
    '🐕 : 🦔 : 🐎',
    '🐂 : 🐃 : 🐏'
  ]
 
             var premi = 'GERATISAN'
			 if (isPrem) {
				premi = 'PREMIUM'
			 } 
			 var sim = 'Off'
			 if (isSimi) {
				sim = 'AKTIF'
			 } 
             var anlink = 'Off'
             if (isAntiLink) {
             anlink = 'On'
}
             var anto = 'Off'
             if (isAntiToxic) {
             anto = 'On'
}
             var lepel = 'Off'
             if (isLevelingOn) {
             lepel = 'On'
}
             
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`「 _*SELAMAT*_ 」
❏ Nama : ${pushname}
❏ Nomer : ${sender.split("@")[0]}
❏ Xp : ${getLevelingXp(sender)}
❏ Pangkat : ${role}
❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰┈─────────────────➣
`)
}
} catch (err) {
                console.error(err)
}
}

                    
		async function sendFileFromUrl(from, url, caption, miku, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
}
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
}
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
}
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: floc2, thumbnail: miku, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
}
        
/*_________________
BAGIAN FUNC GRUP
___________________*/
              
sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
 buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

if (budy.includes(`${prefix2}join`)){
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`) 
await client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
reply(`_succes join_`)
}

if (budy.includes("https://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
}

/*if (budy == '.kick'
|| (budy == '#kick')) {
if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
if (!isGroupAdmins) return reply(`khusus admin`)
if (!isBotGroupAdmins) return reply(`bot harus jadi admin`)	
quotedis = mek.message.extendedTextMessage.contextInfo.participant
await client.groupRemove(from, [quotedis])
console.log(color('[COMMAND]', 'blue'), color('Kick', 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
}*/

/*if (budy == '.add'
|| (budy == '#add')) {
try {
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
quotedis = mek.message.extendedTextMessage.contextInfo.participant
await client.groupAdd(from, [quotedis])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
}*/

switch(command) {

/*_________________
FITUR MENU BOT
___________________*/

/*case 'menu':
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`Hai ${pushname} ${ucapanWaktu} saya mitsuha bot whatsapp akan membantu untuk membuat sticker dll`
sendButLocation(from, `${teks}`, `*_© Mitsuha Official_* Whatsapp`, {jpegThumbnail:fakeimage}, [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1},{buttonId:`LIST MENU`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`PLAY GAME`,buttonText:{displayText:'PLAY GAME'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break*/

/*case 'yonima':
getLevel3 = getLevelingLevel(sender)
mani = fs.readFileSync('./lib/luffy.jpeg')
num = `${sender.split("@")[0]}@s.whatsapp.net`
creator = "6285731261728@s.whatsapp.net"
hai = `Hai ${pushname} ${ucapanWaktu} saya mitsuha bot whatsapp akan membantu untuk membuat sticker dll`
gbutsanguy = [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1},{buttonId:`LIST MENU`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`PLAY GAME`,buttonText:{displayText:'PLAY GAME'},type:1}]
mhan1 = await client.prepareMessage(from, mani, image)
gbuttonan = {
imageMessage: mhan1.message.imageMessage,
contentText: `${hai}`,
footerText: "Mitsuha",
buttons: gbutsanguy,
headerType: 4
}             
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./lib/Gwar.jpg'),
caption: `${hai}`,
"contextInfo": {
mentionedJid: [hai, num],
"externalAdReply": {
"title": `BOT BY MITSUHA`,
"body": `Time: ${time}`,
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/Gwar.jpg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}},
quoted: 
fkatalok})
break*/

/*case perintah_help:
case 'menu':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
uptime = process.uptime()
menu2 = fs.readFileSync('./lib/odc.jpeg') 
menu3 = await client.prepareMessage(from, menu2, MessageType.image, {thumbnile: fakeimage}) 
menu4 = [{buttonId:`MENU`,buttonText:{displayText:'MENU'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}] 
menu5 = {
contentText: `*hello saya mitsuha akan membantumu dalam membuat sticker dan lain lain*\n\n*runtime : ${kyun(uptime)}*\n*chats : ${tchat}*\n*hit : ${hit_today.length}*\n\n「 *THANKS TO* 」\n• mitsuha\n• mhankbarbar\n• nayla\n• zaky\n• all creator`,
footerText: `_jika tidak muncul tombol silahkan ketik manual #allmenu untuk memunculkan list menu_`,
buttons: menu4,
headerType: 4,
imageMessage: menu3.message.imageMessage
}
client.sendMessage(from, menu5, MessageType.buttonsMessage, {thumbnile: thumb2, quoted: floc2, contextInfo: {forwardingScore: 508, isForwarded: true}})
break*/
 
case perintah_help:
case 'menu':
uptime = process.uptime()
getLevel3 = getLevelingLevel(sender)
b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, fs.readFileSync('./lib/odc.jpeg'))
buttons = [{buttonId:`MENU`,buttonText:{displayText:'MENU'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}] 
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'_jika tidak muncul tombol silahkan ketik manual #allmenu untuk memunculkan list menu_', imageMessage: imageMsg,
contentText:`*hello saya mitsuha akan membantumu dalam membuat sticker dan lain lain*\n\n*runtime : ${kyun(uptime)}*\n*chats : ${tchat}*\n*hit : ${hit_today.length}*\n\n「 *THANKS TO* 」\n*• mhankbarbar*\n*• mitsuhabotz*\n*• rimurubotz*\n*• dimxbotz*\n*• rurichan*\n*• zak06cheat*\n*• ridwan*\n*• hafizh*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'allmenu':
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`「 *PROFILE KAMU* 」
• nama ${pushname}
• setatus ${premi}
• pangkat ${role}
• level ${getLevel3}
• xp ${getLevelingXp(sender)}


「 *INFORMASI MENU* 」
• ${prefix2}info
• ${prefix2}iklan
• ${prefix2}donasi
• ${prefix2}request


「 *EVENT GAMES BOT* 」
• ${prefix2}carspeed
• ${prefix2}lotre


「 *URL TO MEDIA TYPE* 」
• ${prefix2}urltoimg


「 *PRODUK & VOTING* 」
• ${prefix2}produk
• ${prefix2}tambah
• ${prefix2}votting
• ${prefix2}vote
• ${prefix2}dellvote


「 *ULASAN & MUTUAL* 」
• ${prefix2}ulasan
• ${prefix2}komentar
• ${prefix2}mutual
• ${prefix2}save


「 *ABSEN & MESSAGES* 」
• ${prefix2}absen
• ${prefix2}absensi
• ${prefix2}svmess
• ${prefix2}listmess


「 *GROUP MENU* 」
• ${prefix2}enable
• ${prefix2}disable
• ${prefix2}ban
• ${prefix2}dellban
• ${prefix2}cmd
• ${prefix2}sider
• ${prefix2}hidetag
• ${prefix2}fitnah
• ${prefix2}settings
• ${prefix2}revoke
• ${prefix2}add
• ${prefix2}kick
• ${prefix2}promote
• ${prefix2}demote
• ${prefix2}tagall
• ${prefix2}antilink
• ${prefix2}antitoxic
• ${prefix2}leveling
• ${prefix2}welcome


「 *ANIME MENU* 」
• ${prefix2}neko
• ${prefix2}waifu


「 *GAMES MENU* 」
• ${prefix2}dungeon
• ${prefix2}slot
• ${prefix2}truth
• ${prefix2}dare
• ${prefix2}tebakgambar


「 *IMAGE MENU* 」
• ${prefix2}cogan
• ${prefix2}cecan
• ${prefix2}pinterest
• ${prefix2}ocr


「 *RANDOM MENU* 」
• ${prefix2}cerpen
• ${prefix2}ceritahoror
• ${prefix2}film
• ${prefix2}fakedata
• ${prefix2}news
• ${prefix2}beasiswa
• ${prefix2}ppcouple


「 *STICKER MENU* 」
• ${prefix2}sticker
• ${prefix2}ttp
• ${prefix2}attp
• ${prefix2}wasted
• ${prefix2}comrade
• ${prefix2}jail
• ${prefix2}passed
• ${prefix2}trigger
• ${prefix2}toimg


「 *EDUCATION MENU* 」
• ${prefix2}quiz
• ${prefix2}nulis
• ${prefix2}niatsholat
• ${prefix2}niatsehari2
• ${prefix2}hadist


「 *AUDIO/VN MENU* 」
• ${prefix2}fast
• ${prefix2}tupai
• ${prefix2}gemuk
• ${prefix2}slow
• ${prefix2}tomp3


「 *PREMIUM MENU* 」
• ${prefix2}asupan
• ${prefix2}upswtext
• ${prefix2}upswimg
• ${prefix2}upswvideo


「 *OTHER MENU* 」
• ${prefix2}sharelock
• ${prefix2}delete
• ${prefix2}pesan
• ${prefix2}owner
• ${prefix2}report
• ${prefix2}timer
• ${prefix2}setperintah


「 *OWNER MENU* 」
• $
• >
• =>
• ${prefix2}makegroup
• ${prefix2}join
• ${prefix2}kudet
• ${prefix2}leave
• ${prefix2}clone
• ${prefix2}bc
• ${prefix2}addprem
• ${prefix2}dellprem
• ${prefix2}setbudy
• ${prefix2}bug


「 *THANKS TO* 」
• mhankbarbar
• mitsuhabotz
• rimurubotz
• dimxbotz
• rurichan
• zak06cheat
• ridwan
• hafizh`
sendButLocation(from, `${teks}`, `*_© Mitsuha Official_*`,{jpegThumbnail:fakeimage}, [{buttonId:`IKLAN`,buttonText:{displayText:'IKLAN'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break

/*_________________
ALL FEATURE BOT
___________________*/

case 'lotre':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
reply(`${lotre1}${lotre2}${lotre3}\n${lotre4}${lotre5}${lotre6}\n${lotre7}${lotre8}${lotre9}\n\n_jika ingin mengambil undian silahkan ketik -LOTRE(angka)- contoh :_\n\n*-LOTRE1-*`)
break

case 'kudet':
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if(!q) return reply(`teksnya mana kak? contoh:\n\n#kudet nama|desc`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
client.groupUpdateDescription(from, `${lok}`)
client.groupUpdateSubject(from, `${send}`)
client.revokeInvite(from)
var value = `Terkudet Slord :v`
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: floc2
}
client.sendMessage(from, options, text, {quoted: faketag})
break

case 'revoke':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
client.revokeInvite(from)
break

case 'produk':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
break

case '+tambah':
case 'tambah':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isQuotedImage) return reply('tag foto yang sudah dikirim sebelumnya lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas')
if(!q) return reply(`tag foto yang sudah dikirim sebelumnya lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas`)
nmapro = q.split('|')[0]
nmorpro = q.split('|')[1]
biopro = q.split('|')[2]
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
if(!nmorpro) return reply('Format salah!')
if(!biopro) return reply('Format salah!')
H1 = {
nama : nmapro,
nomor : nmorpro,
deskripsi : biopro
}
produk.push(H1)
fs.writeFileSync(`./lib/${nmorpro}.jpeg`, delb)
fs.writeFileSync('./lib/produk.js', JSON.stringify(produk))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: floc2})		     	 
break

case 'fitnah':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var ainegs = body.slice(8)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = ainegs.split("|")[0];
var target = ainegs.split("|")[1];
var bot = ainegs.split("|")[2];
client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
break

case 'quiz':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(Soalnya.gambar))
buttons = [{buttonId:`BENAR`,buttonText:{displayText:`BENAR`},type:1},{buttonId:`SALAH`,buttonText:{displayText:`SALAH`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`JAWABAN BENAR ${benar.length}\nJAWABAN SALAH ${salah.length}\n\n${materi}`, imageMessage: imageMsg,
contentText:`*QUIZ HARIAN BERHADIAH*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
					
case 'hidetag':                 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: floc2
}
client.sendMessage(from, options, text, {quoted: faketag})
break
					
/*case 'close-grup':
case 'close-grub':      
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𝓗𝓪𝓲 𝓘𝓶 𝓜𝓲𝓽𝓼𝓾𝓱?? 👋`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
var nomor = mek.participant
const close = {
text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break

case 'open-grup':
case 'open-grub':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
open = {
text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,             
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
break*/

case 'grub':
case 'grup':
case 'group':
case 'change':
case 'settings':
case 'setting':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
let gwekke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'Buka', buttonText: {displayText: 'Buka'}, type: 1},
{buttonId: 'Tutup', buttonText: {displayText: 'Tutup'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekke)
break

case 'timer':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply(`_pilih waktu : detik/menit/jam_\n_ex : #timer 1 menit_`)}
creator = "6285731261728@s.whatsapp.net"
setTimeout( () => {
sendButLocation(from, `JEDA ALARM ⏰`, `TIMER - BOTZ`, {jpegThumbnail:fakeimage}, [{buttonId:`JEDA 1 MENIT`,buttonText:{displayText:'JEDA 1 MENIT'},type:1},{buttonId:`MATIKAN`,buttonText:{displayText:'MATIKAN'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
}, timer)
setTimeout( () => {
reply(`_﹝⌬﹞berhasil di aktifkan_`)
}, 0)
break
      
/*case 'welcome-enable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (isWelkom) return reply('_﹝⌬﹞berhasil di aktifkan_')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('_﹝⌬﹞berhasil di aktifkan_')
break
						
case 'welcome-disable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)    
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
var ini = welkom.indexOf(from)
welkom.splice(ini, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('_﹝⌬﹞berhasil di matikan_')
break*/

case 'welcome':
case 'welcome 1':
case 'welcome 0':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
let gwekkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'Enable W1', buttonText: {displayText: 'Enable W1'}, type: 1},
{buttonId: 'Disable W0', buttonText: {displayText: 'Disable W0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(gwekkje)
break

case 'antilink':
case 'antilink 1':
case 'antilink 0':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
let gwekkkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'Enable A1', buttonText: {displayText: 'Enable A1'}, type: 1},
{buttonId: 'Disable A0', buttonText: {displayText: 'Disable A0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkkje)
break

case 'cmd':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
let gwekkhkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `CMD IS COMMAND PROMPT`,
"buttons": [
{buttonId: 'Enable C1', buttonText: {displayText: 'Enable C1'}, type: 1},
{buttonId: 'Disable C0', buttonText: {displayText: 'Disable C0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkje)
break

case 'antitoxic':
case 'antitoxic 1':
case 'antitoxic 0':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
let gwekkkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkkj1e)
break

case 'leveling':
case 'leveling 1':
case 'leveling 0':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
let gwekkkjiie = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'Enable L1', buttonText: {displayText: 'Enable L1'}, type: 1},
{buttonId: 'Disable L0', buttonText: {displayText: 'Disable L0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkkjiie)
break

case 'tagall':
case 'tagall1':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*-->* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
          
/*case 'antilink-enable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `*_© Mitsuha Official_*`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://f.top4top.io/p_21083n2ea0.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: floc2})     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (isAntiLink) return reply('_﹝⌬﹞berhasil di aktifkan_')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('_﹝⌬﹞berhasil di aktifkan_')
break
					
case 'antilink-disable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)    
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('_﹝⌬﹞berhasil di matikan_')
break

case 'antitoxic-disable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
var ini = antitoxic.indexOf(from)
antitoxic.splice(ini, 1)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
reply('_﹝⌬﹞berhasil di matikan_')
break
						
case 'antitoxic-enable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (isAntiToxic) return reply('「 SUDAH AKTIF 」')
antitoxic.push(from)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
reply('_﹝⌬﹞berhasil di aktifkan_')
break

case 'leveling-enable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (isLevelingOn) return reply('fitur level sudah aktif sebelum nya')
_leveling.push(from)
fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
reply('_﹝⌬﹞berhasil di aktifkan_')
break

case 'leveling-disable':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
var ini = _leveling.indexOf(from)
_leveling.splice(ini, 1)
fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
('_﹝⌬﹞berhasil di matikan_')
break*/
        
case 'sider':
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
                                
case 'promote':                                   
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break

case 'demote':   
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
				
/*case 'add':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break*/

case 'add':
reply(`_maaf fitur ini tidak bisa di akses sementara_`)
/*try {
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
quotedis = mek.message.extendedTextMessage.contextInfo.participant
await client.groupAdd(from, [quotedis])
} catch (e) {
console.log('Error :', e)
reply('_reply pesan chat member yang keluar lalu ketik #add_')
}*/
break

case 'kick':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
mem = body.slice(6)
if (mem.length > 15) return ('Hanya Bisa Ngekick 1 Nomor') 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`*Format Salah*\n\n*Tag target yang ingin di Kick*\n*Ex : #kick @tag*`) 
if (mek.message.extendedTextMessage.contextInfo.participant) return reply(`*Format Salah*\n\n*Tag target yang ingin di Kick*\n*Ex : #kick @tag*`) 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
for (let _ of mentioned) {
teks = `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
client.groupRemove(from, mentioned)
}
break
            
/*case 'join':
await client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
reply(`_succes join_`)
break*/

/*case 'simih':
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𝓗𝓪𝓲 𝓘𝓶 ??𝓲𝓽𝓼𝓾𝓱𝓪 👋`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})     
if (args.length < 1) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
if (Number(args[0]) === 1) {
if (isSimi) return reply('Mode simi sudah aktif')
samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukses mengaktifkan mode simi di group ini ✔️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukes menonaktifkan mode simi di group ini ✔️')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break*/
		
case 'addprem':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)    
if (args.length < 1) return reply(`contoh ${prefix + command} 6285298595430\n\natau bisa juga dengan ${prefix + command} tag target`)
adpr = body.slice(10)
premium.push(`${adpr}@s.whatsapp.net`)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply(`Berhasil Menambahkan ${adpr} Ke Daftar Premium`)
break
					
case 'dellprem':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isOwner) return reply(ind.ownerB())
din02 = body.slice(11)
premium.splice(`${din02}@s.whatsapp.net`, 1)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply(`Berhasil Menghapus ${din02} Dari Daftar Premium`)
break

case 'ban':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (args.length < 1) return reply(`*Format Salah*\n\n*Tag target yang ingin di Ban*\n*Ex : #ban @tag*`)
adpr = body.slice(6)
ban.push(`${adpr}@s.whatsapp.net`)
fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
reply(`Berhasil Menambahkan ${adpr} Ke Daftar Banned`)
break
					
case 'dellban':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (args.length < 1) return reply(`*Format Salah*\n\n*Tag target yang ingin di Dellban*\n*Ex : #dellban @tag*`)
din02 = body.slice(10)
ban.splice(`${din02}@s.whatsapp.net`, 1)
fs.writeFileSync('./src/ban.json', JSON.stringify(ban))
reply(`Berhasil Menghapus ${din02} Dari Daftar Banned`)
break
				
case 'leave':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
gwetkkkke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: 'LEAVE NOW', buttonText: {displayText: 'LEAVE NOW'}, type: 1},
{buttonId: 'LEAVE TIME', buttonText: {displayText: 'LEAVE TIME'}, type: 1}
],
headerType: 1
},
}, {quoted:mek})
await client.relayWAMessage(gwetkkkke)
break
                    
case 'clone':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await client.getProfilePicture(id)
buffer = await getBuffer(pp)
client.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Gagal om')
}
break

case 'attp':
				if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${body.slice(5)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
			break
			
case 'ttp':
				if (!isRegistered) return reply( ind.noregis())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://salism3api.pythonanywhere.com/text2img/?text=${body.slice(4)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
			break
			
/*case 'bc':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, MessageType.image, {caption: `${body.slice(4)}\n\n_*BROADCAST*_`})
}
reply('Suksess broadcast ')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}\n\n_*BROADCAST*_`)
}
reply('Suksess broadcast ')
}
break*/

case 'bc':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
bc = body.slice(3)
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, MessageType.image, {caption: `${body.slice(4)}\n\n_*BROADCAST*_`})
}
reply('Suksess broadcast ')
} else {
for (let _ of anu) {
creator = "6285731261728@s.whatsapp.net"
teks =`☁ *BROADCAST ALL CHAT* ☁`
sendButLocation(_.jid, `${teks}`, `${bc}`, {jpegThumbnail:fakeimage}, [{buttonId:`OWNER BOT`,buttonText:{displayText:'OWNER BOT'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
}
reply('Suksess broadcast ')
}
break

case 'setbudy':   
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
if (args.length < 1) return
kunci = args[0]
respon = args[1]
setting.kunci = kunci
setting.respon = respon
fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
reply(`SUKSES KAYAK MIE SUKSES`)
break

case 'ppcouple':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
data = fs.readFileSync('./lib/couple.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.male))
buttons = [{buttonId:`NIH COWOK`,buttonText:{displayText:`NIH COWOK`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'*_© Mitsuha Official_*', imageMessage: imageMsg,
contentText:`NI BRO PP COPLE BUAT SEPASANG BEKATAN PEBUCIN HAMDAL V:`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.female))
buttons = [{buttonId:`NIH CEWEK`,buttonText:{displayText:`NIH CEWEK`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'*_© Mitsuha Official_*', imageMessage: imageMsg,
contentText:`NI BRO PP COPLE BUAT SEPASANG BEKATAN PEBUCIN HAMDAL V:`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'cerpen':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/cerpen.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
reply(`*Tittle*: ${randKey.result.title}\n\n*Creator*: ${randKey.result.creator}\n\n*Cerpen*: ${randKey.result.cerpen}`)
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'fake_data':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/fdata.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let o = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*KUMPULAN FAKE DATA ( PALSU )*\n\n*NAMA*: ${randKey.result.name}\n*BIRTHDAY*: ${randKey.result.birthday}\n*ADDRESS*: ${randKey.result.address}\n*CITY*: ${randKey.result.city}\n*REGION*: ${randKey.result.region}\n*COUNTRY*: ${randKey.result.country}\n*ZIP*: ${randKey.result.zip}\n*PHONE NUMBER*: ${randKey.result.phone_number}\n*USERNAME*: ${randKey.result.username}\n*PASSWORD*: ${randKey.result.password}\n*EMAIL*: ${randKey.result.email}`,
"description": `.`,
"footerText": "Ingat, Jangan Menyalah gunakan Data",
"buttons": [
{buttonId: 'SELANJUTNYA', buttonText: {displayText: 'SELANJUTNYA'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(o)
break

case 'beasiswa':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/beasiswa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let ok = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*INFORMASI BEASISWA*`,
"description": `.`,
"footerText": `${randKey.title}\n${randKey.link}\n\n${randKey2.title}\n${randKey2.link}\n\n${randKey3.title}\n${randKey3.link}`,
"buttons": [
{buttonId: 'CARI LAGI', buttonText: {displayText: 'CARI LAGI'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(ok)
break

case 'news':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/berita.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
oo = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*TITLE*: ${randKey.result.title}\n\n*AUTHOR*: ${randKey.result.author}\n\n*PUBLIS*: ${randKey.result.publishedAt}\n\n*CONTENT*: ${randKey.result.content}\n\n*DESKRIPSI*: ${randKey.result.description}\n\n*LINK*: ${randKey.result.url}`,
"description": `.`,
"footerText": "BREAKING NEWS",
"buttons": [
{buttonId: 'NEWS', buttonText: {displayText: 'NEWS'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(oo)
break

case 'save':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if(!q) return reply(`Ingin Menemui Seseorang Diluar Sana? Yuk Ketik\n\n${prefix}.save nama|nomor\n\nGunakan Tanda | Sebagai Pembatas, Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor,
snder : sender
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: floc2})		     	 
break

case 'mutual':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
oo = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`,
"description": `.`,
"footerText": "TEMAN TEMAN BOT",
"buttons": [
{buttonId: 'MUTUAL', buttonText: {displayText: 'MUTUAL'}, type: 1}, 
{buttonId: 'SAVE', buttonText: {displayText: 'SAVE'}, type: 1}, 
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(oo)
break

case 'cerita_horor':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/horor.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`么 ${command} 么`,buttonText:{displayText:`么 ${command} 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'CERITA - HOROR', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Story*: ${randKey.result.story}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cecan':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
buttons = [{buttonId:`么 ${command} 么`,buttonText:{displayText:`么 ${command} 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'CEWEK CANTIK', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cogan':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
buttons = [{buttonId:`么 ${command} 么`,buttonText:{displayText:`么 ${command} 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'COWOK GANTENG', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'asupan':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isPrem) return reply(`_perintah ini hanya bisa digunakan oleh pengguna premium saja_`)
reply(`_Butuh Beberapa Menit Untuk Mengirim, Harap Menunggu_`)
data = fs.readFileSync('./lib/asupan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buff = await getBuffer(randKey.result)
client.sendMessage(from, buff, video, {quoted: floc2, caption: `Farming Dosa?:v`})
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'film':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/film.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`SEARCHING`,buttonText:{displayText:`SEARCHING`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'RANDOM - FILM', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Views*: ${randKey.result.views}\n\n*Duration*: ${randKey.result.duration}\n\n*Genre*: ${randKey.result.genre}\n\n*Tahun*: ${randKey.result.tahun}\n\n*Ratting*: ${randKey.result.rating}\n\n*Link*: ${randKey.result.link}\n\n*Actors*: ${randKey.result.actors}\n\n*Location*: ${randKey.result.location}\n\n*Release*: ${randKey.result.date_release}\n\n*Language*: ${randKey.result.language}\n\n*Link Download*: ${randKey.result.link_dl}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'sharelock':
if (args.length < 1) return reply(`Contoh : ${prefix2}sharelock Mitsuha|Mitsuha`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
client.sendMessage(from, {degreesLatitude: 24.121231, degreesngitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
			
case  'trigger':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(`_﹝⌬﹞wait proses_`)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: floc2})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break
		
case  'passed':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(`_﹝⌬﹞wait proses_`)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: floc2})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break

case  'jail':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(`_﹝⌬﹞wait proses_`)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: floc2})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break

case  'comrade':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(`_﹝⌬﹞wait proses_`)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: floc2})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break

case  'wasted':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
reply(`_﹝⌬﹞wait proses_`)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: floc2})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(rano)
})
} else {
reply('Gunakan foto!')
}
break 
		
case 'makegroup':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (args.length < 1) return reply(`Beri Tag + Teks Pada Perintah =>\n\n.makegroup @member|nameGroup`)
const aineloh = body.slice(11)
const ainenihh = aineloh.split("|")[0]
const okelahh = aineloh.split("|")[1].replace("@","")
client.groupCreate(`${ainenihh}`, [`62858266304780@s.whatsapp.net`,`${okelahh}@s.whatsapp.net`])
reply('_Sucses creategroup_')
break

case 'pesan':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (args.length < 1) return reply(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix2}${command} +codenegara|halo kak\n\nEx :\n${prefix2}${command} +6289654360447|halo kak\nError :\n${prefix2}${command} +62 8xx-xxx-xxx|halo kak\nError Auto Banned!`)
var FG = body.slice(8)
var F1 = FG.split("|")[0];
var F2 = FG.split("|")[1];
client.sendMessage(`${F1}@s.whatsapp.net`, `Pengirim : ${pushname}\nPesan : ${F2}`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
reply('Berhasil mengirim pesan...')
break
				
case 'iklan':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
let gwmkkee = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*OPEN JASA SEWA BOT*`,
"description": `.`,
"footerText": `
🛑 *FEATURE FEATURE BOT*:
- ANTILINK . KICK SEND LINK
- WELCOME . SAMBUT MEMBER
- SETTING . PENGATURAN GC
- PRODUK . PROMOSI BARANG
- GROUP WA . BANTU CARI GRUP
- PLAY GAME . GAMES BOT

🛑 *LIST HARGA SEWA BOT*:
- SEWA DUA MINGGU - 5.000
- SEWA SATU BULAN - 10.000
- SEWA PERMANENT - 15.000

🛑 *CONTACT PERSON*:
- owner - wa.me/6285731261728
- bot - wa.me/62857312617283
- payment - qris - gopay - dana
- note - script bot tidak pasaran
- dan tidak ada di bot lain.
- note - script bot full fitur tanpa
- apikey jadi kemungkinan eror 
- sangatlah rendah!`,
"buttons": [
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwmkkee)
break
            
case 'dungeon':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId:`START`,buttonText:{displayText:'START'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/dg.png`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Menyambungkan Server...`, imageMessage: imageMsg,
contentText:`*DUNGEON ISEKAI*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
break

case 'slot':  
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
youke = fs.readFileSync('./lib/odc.jpeg')
const p = hewan[Math.floor(Math.random() * hewan.length)]
const p2 = hewan[Math.floor(Math.random() * hewan.length)]
const p3 = hewan[Math.floor(Math.random() * hewan.length)]
buttons = [{buttonId:`SPIN`,buttonText:{displayText:'SPIN'},type:1},{buttonId:`GET`,buttonText:{displayText:'GET'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Tanggal ${date}\n*_© Mitsuha Official_*`, imageMessage: imageMsg,
contentText:`[  🎰 | SLOTS ]\n-----------------\n${p}\n${p2}<=====\n${p3}\n[  ?? | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : ??<=====`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
break
              
case 'author':
case perintah_owner:
case 'creator':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)    
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: floc2})
let hot = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Apakah Kamu Butuh Info Dari Owner Ku?`,
"description": `.`,
"footerText": "Jangan Spam Kontak Ownerku",
"buttons": [
{buttonId: 'MY INFO', buttonText: {displayText: 'MY INFO'}, type: 1},
{buttonId: 'IKLAN BOT', buttonText: {displayText: 'IKLAN BOT'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage}) 
await client.relayWAMessage(hot)
break
                 
case 'toimg':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, MessageType.image)
fs.unlinkSync(ran)
})
break

case 'donasi':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId: `Pulsa`,buttonText:{displayText: `Pulsa`},type:1},{buttonId:`Dana`,buttonText:{displayText:'Dana'},type:1},{buttonId:`Gopay`,buttonText:{displayText:'Gopay'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`*_© Mitsuha Official_*`, imageMessage: imageMsg,
contentText:`INGIN DONASI MELALUI SAWERIA? LANGSUNG CEK WEBSITE INI YUK!! https://www.saweria.co/MitsuhaBot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
break

/*case 'daftar':
case 'regist':
case 'verify':
case 'erify':
if (isRegistered) return  reply(`「 SUDAH DAFTAR SEBELUMNYA」`)
const seriTod = createSerial(15)
veri = sender
_registered.push(sender)
fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
addRegisteredUser(sender, seriTod)
getLevel3 = getLevelingLevel(sender)    
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId:`⋮☰ PANDUAN`,buttonText:{displayText:'⋮☰ PANDUAN'},type:1},{buttonId:`HOME BACK`,buttonText:{displayText:'HOME BACK'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Peringatan : Silahkan Gunakan Bot Sebaik Mungkin Dan Jangan Spam Command Ke Bot.`, imageMessage: imageMsg,
contentText:`「 \`\`\`SUKSES REGISTRASI\`\`\` 」\n\n
\`\`\`❏ Nama: ${pushname}\`\`\`
\`\`\`❏ No: wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`❏ Ns: ${seriTod}\`\`\`
\`\`\`❏ Total Pengguna: ${_registered.length}\`\`\`
`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𝓗𝓪𝓲 ??𝓶 𝓜𝓲𝓽𝓼𝓾𝓱𝓪 👋`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
break*/

case 'login':
case 'daftar':
case 'regist':
case 'verify':
case 'erify':
case 'ogin':
if (isRegistered) return reply(`_kamu telah verify sebelumnya_`) 
serinya = createSerial(15)
_registered.push(serinya)
fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
getLevel3 = getLevelingLevel(sender)
addLevelingLevel(sender, 5)
addLevelingXp(sender, 5)
addRegisteredUser(sender, serinya)
uptime = process.uptime()
creator = "6285731261728@s.whatsapp.net"
teks =`🐧 *SUCCESS VERIFY* 🐧`
sendButLocation(from, `${teks}`, `_kamu telah terverifikasi √_\n_runtime : ${kyun(uptime)}_`,{jpegThumbnail:fakeimage}, [{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`MENU`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
await addLevelingId(sender)
break

/*case 'wait':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
reply(mess.wait)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia)
await wait(media).then(res => {
client.sendMessage(from, res.video, video, {quoted: freply, caption: res.teks.trim()})
}).catch(err => {
reply(err)
})
} else {
reply('Foto aja mas')
}
break*/
					
case perintah_info:
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
linkgc = await client.groupInviteCode (from)
ppimg = await client.getProfilePicture(from)
ppnya = await getBuffer(ppimg)
me = client.user
uptime = process.uptime()
var G1 = await client.groupMetadata(from)
creator = "6285731261728@s.whatsapp.net"
teks =`*( INFO MITSUHA WHATSAPP )*\n
\`\`\`nama : ${me.name}\`\`\`
\`\`\`nomor : ${me.jid.split('@')[0]}\`\`\`
\`\`\`prefix : MULTI PREFIX\`\`\`
\`\`\`runtime : ${kyun(uptime)}\`\`\`
\`\`\`total hit : ${hit_today.length}\`\`\`
\`\`\`user premium : ${premium.length}\`\`\`
\`\`\`total pengguna : ${_registered.length}\`\`\`
\`\`\`total chat : ${tchat}\`\`\`
\`\`\`block kontak : ${blocked.length}\`\`\`

*( INFO GROUP WHATSAPP )*\n
\`\`\`status antilink : ${anlink}\`\`\`
\`\`\`status antitoxic : ${anto}\`\`\`
\`\`\`status leveling : ${lepel}\`\`\`
\`\`\`status simisimi : ${sim}\`\`\`
\`\`\`user antilink : ${antilink.length}\`\`\`
\`\`\`user antitoxic : ${antitoxic.length}\`\`\`
\`\`\`user leveling : ${_leveling.length}\`\`\`
\`\`\`user simisimi : ${samih.length}\`\`\`
\`\`\`member grup : ${groupMembers.length}\`\`\`
\`\`\`admin grup : ${groupAdmins.length}\`\`\`
\`\`\`group id : ${G1.id}\`\`\`
\`\`\`link grup : https://chat.whatsapp.com/${linkgc}\`\`\``
sendButLocation(from, `${teks}`, `INFO BOT - INFO GROUP`,{jpegThumbnail:ppnya}, [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break

case 'ocr':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
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
reply('Foto aja mas')
}
break

case 'del':
case 'hapus':
case 'delete':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
client.deleteMessage(from, { id: fvn.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
				
case 'neko':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
E2 = E1[Math.floor(Math.random() * E1.length)]
reply(`_﹝⌬﹞wait proses_`)
B10 = (await fetchJson(`https://nekos.life/api/v2/img/neko`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(B10.url))
buttons = [{buttonId:`么 ${command} 么`,buttonText:{displayText:`么 ${command} 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`*_© Mitsuha Official_*`, imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2, thumbnail: thumb})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
				
case 'truth':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: floc2 })
break

case 'dare':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
client.sendMessage(from, tod, image, { quoted: floc2, caption: '*Dare*\n\n' + der })
break
			
case 'waifu':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
buttons = [{buttonId:`么 ${command} 么`,buttonText:{displayText:`么 ${command} 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'*_© Mitsuha Official_*', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'nulis':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(`https://api.zeks.xyz/api/nulis?text=${body.slice(7)}&apikey=apikeyaine`))
buttons = [{buttonId:`么`,buttonText:{displayText:`么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'*_© Mitsuha Official_*', imageMessage: imageMsg,
contentText:`_Dah Jadi Stah_`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
           
case 'pinterest':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
client.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`_tambahkan teks pada perintah_`)
data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&q=${body.slice(10)}`, { method: 'get' })
ahu = data.data
reply(`_﹝⌬﹞wait proses_`)
n = JSON.parse(JSON.stringify(ahu));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, { quoted: floc2, caption: `*PINTEREST*` })
break

/*case 'pinterest':
            
                if (args.length < 1) return reply(`_tambahkan teks pada perintah_`)

                async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {*/
                                //"accept": "application/json, text/javascript, */*, q=0.01",//
                                /*"accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
},
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
}).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
 })
                                resolve(result)
}).catch(reject)
})
}

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
})
}).catch(reject)
})

                pinterest(q).then(async(res) => {
                    await reply(mess.wait)
                    await sendFileFromUrl(from, res.image, `Hasil Pencarian: ${q}`, mek)
}).catch(async(err) => {
                    sendMess(ownerNumber, 'Pinterest Error : ' + err)
                    console.log(color('[Pinterest]', 'red'), err)
                    reply(mess.error.api)
})
                break*/
					
case 'slow':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: floc2})
fs.unlinkSync(ran)
})
break
				
case 'gemuk':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: floc2})
fs.unlinkSync(ran)
})
break
				
case 'tomp3':              
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)              
if (isQuotedVideo || isQuotedAudio){
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: floc2 })
fs.unlinkSync(ran)
})
} else {
reply(mess.wrongFormat)
}
break

case 'tupai':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: floc2})
fs.unlinkSync(ran)
})
break

case 'fast':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: floc2})
fs.unlinkSync(ran)
})
break
				
case 'stiker':
case 'sticker':
case 'stikergif':
case 'stickergif':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(`_﹝⌬﹞system error_`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`,`BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(ind.stikga())
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
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
reply(`_﹝⌬﹞system error_`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(ind.stikga())
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix2}sticker atau tag gambar yang sudah dikirim`)
}
break
				
case 'report':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
const pesan = body.slice(8)
if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text)
var nomor = mek.participant
const teks1 = `*REPORT*\nUser : @${nomor.split("@s.whatsapp.net")[0]}\nNomor : ${sender.split("@")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage('6285731261728@s.whatsapp.net', options, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `*_© Mitsuha Official_*`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://f.top4top.io/p_21083n2ea0.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: floc2})
reply('Maaf ketidak nyamanan nya, kami akan memperbaikin nya secepatnya.\n\n-> Laporan main main akan dibanned dan ditegur Owner bot')
break 
                  
case 'ulasan':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/komentar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId: `👍`,buttonText:{displayText: `👍`},type:1},{buttonId: `👎`,buttonText:{displayText: `👎`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
contentText:`            *TENTANG BOT INI*\n\n📋 Beri Nilai Pada Kualitas Bot Ini\n📑 Dukung Bot Agar Update Ya\n\n               *TOTAL RATING*\n\n❤ Jumlah Suka ${like.length}\n🖤 Jumlah Tidak Suka ${dislike.length}\n\n                  *KOMENTAR*\n\n👤 ${randKey.Pengguna}\n⌚ ${randKey.Time}\n💌 ${randKey.Komen}\n\n👤 ${randKey2.Pengguna}\n⌚ ${randKey2.Time}\n💌 ${randKey2.Komen}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
break
         
case 'komentar':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
if (args.length < 1) return reply('TEKS NYA MANA?')
bodi = body.slice(9)
user = pushname
tem = date
teks = {
Pengguna : user,
Komen : bodi,
Time : tem
}
_komentar.push(teks)
fs.writeFileSync('./lib/komentar.js', JSON.stringify(_komentar))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: floc2})
break

case 'bug':
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`_jumlahnya?_`)
for (let i = 0; i < args[0]; i++) {
client.relayWAMessage(global.mm=client.
prepareMessageFromContent(from, client.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
}
break

case 'voting':
case 'votting':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)  
/*if (args.length < 1) return reply(`Cara Memulai Voting Silahkan Ketik\n\n.voting menit|alasan\n\nlist menit yang tersedia.\n\n600000 | 1200000 | 1800000\n\njadi .voting 600000|ahok wibu`)*/
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var waktu = args[0]+"000"
} else if (args[1]=="menit") {var waktu = args[0]+"0000"
} else if (args[1]=="jam") {var waktu = args[0]+"00000"
} else {return reply(`_pilih waktu : detik/menit/jam_\n_ex : #votting 1 menit alasan_\n_note : alasan gunakan "." sebagai pengganti sepasi_`)}
/*ppp = `${args.join(' ')}`*/
/*waktu = ppp.split("|")[0];*/
votenya= args[2]
ini = yes.indexOf(from)
ini2 = no.indexOf(from)
ini3 = vote.indexOf(from)
yes.splice(ini, 1)
no.splice(ini2, 1)
vote.splice(ini3, 1)
fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
fs.writeFileSync('./src/no.json', JSON.stringify(no))
fs.writeFileSync('./src/vote.json', JSON.stringify(vote))
vote.push(votenya)
fs.writeFileSync('./src/vote.json', JSON.stringify(vote))
for (let i of vote) {
reply(`${i}\n\n✅ ${yes.length}\n❎ ${no.length}\n\nKetik perintah ${prefix2}vote untuk me votting dan ${prefix2}delvote untuk menghapus vote kamu`)
setTimeout( () => {
reply(`*VOTING TELAH BERAKHIR*\n\n${votenya}\n\n✅ ${yes.length}\n❎ ${no.length}`)
}, waktu)
setTimeout( () => {
ini3 = vote.indexOf(from)
vote.splice(ini3, 1)
fs.writeFileSync('./src/vote.json', JSON.stringify(vote))
vote.push(`_saat ini sedang tidak ada votting silahkan ketik #votting untuk memulai votting_`)
fs.writeFileSync('./src/vote.json', JSON.stringify(vote))
}, waktu)
}
setTimeout( () => {
ini = yes.indexOf(from)
ini2 = no.indexOf(from)
yes.splice(ini, 1)
no.splice(ini2, 1)
fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
fs.writeFileSync('./src/no.json', JSON.stringify(no))
}, waktu) 
break
					
case 'vote':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
for (let i of vote) {
gwekkhhhkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*VOTE - BOT*\n\n${i}`,
"footerText": `Tanda Centang Berarti Setuju, Tanda Silang Artinya Tidak Setuju`,
"buttons": [
{buttonId: '❎', buttonText: {displayText: '❎'}, type: 1},
{buttonId: '✅', buttonText: {displayText: '✅'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhhhkje)
}
break

case 'dellvote':
case 'delvote':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
ini = yes.indexOf(from)
ini2 = no.indexOf(from)
yes.splice(ini, 1)
no.splice(ini2, 1)
fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
fs.writeFileSync('./src/no.json', JSON.stringify(no))
reply(`${vote}\n\n✅ ${yes.length}\n❎ ${no.length}\n\nKetik perintah ${prefix2}vote untuk memvoting dan ${prefix2}delvote untuk menghapus vote kamu`)
break

case 'absensi':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)  
if (isAbsen) return reply(`_kamu sudah absensi tadi_`)
if (!isRabsen) return reply(`_belum buat daftar absen, silahkan ketik #absen terlebih dahulu_`)
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:\n`
for (let sensi of absen) {
teks += `=-> @${sensi.split('@')[0]} ✅\n`
}
teks += `TOTAL PENGGUNA YG ABSEN : ${absen.length}\n\nKetik #absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
client.sendMessage(from, teks.trim(), extendedText, {quoted: floc2, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var tem = args[0]+"000"
} else if (args[1]=="menit") {var tem = args[0]+"0000"
} else if (args[1]=="jam") {var tem = args[0]+"00000"
} else {return reply(`_pilih waktu : detik/menit/jam_\n_ex : #absen 1 menit_`)}
rabsen.push(from)
fs.writeFileSync('./src/rabsen.json', JSON.stringify(rabsen))
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:\n`
for (let sensi of absen) {
teks += `=-> @${sensi.split('@')[0]} ✅\n`
}
teks += `TOTAL PENGGUNA YG ABSEN : ${absen.length}\n\nKetik #absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap\n\nKetik #absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
client.sendMessage(from, teks.trim(), extendedText, {quoted: floc2, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

case 'svmess':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
if (args.length < 1) return reply(`_tambahkan teks pada perintah_`)
tem = args.join(" ")
st = { 
target : sender,
name : pushname,
teks : tem,
waktu : date
}
berbintang.push(st)
fs.writeFileSync('./src/berbintang.json', JSON.stringify(berbintang))
reply(`Woke, Sudah Di Bintangin Bot!`)
break

case 'gtts':
if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: floc2})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: floc2})
dtt = body.slice(9)
ranm = getRandom('.mp3')
dtt.length > 600
? reply('Textnya kebanyakan om')
: gtts.save(ranm, dtt, function() {
client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: floc2, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break
					
case 'listmess':
case 'listmess':
teks = 'LIST PESAN YANG DIBINTANGIN:\n\n'
for (let i of berbintang) {
teks += `⬡ *Pesan : ${i.name} > ${i.waktu}*\n${i.teks}\n\n---------------------------\n\n`
}
teks += `Total : ${berbintang.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: floc2})
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
break
			
case 'request':
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)   
teks = 'LIST REQUETS BOT:\n\n'
for (let i of req) {
teks += `⬡ *${i.name} > ${i.waktu}*\nPesan : ${i.teks}\n\n---------------------------\n\n`
}
teks += `Total : ${req.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: floc2})
if (args.length < 1) return reply(`_tambahkan teks pada perintah_`)
tem = args.join(" ")
st = { 
name : pushname,
teks : tem,
waktu : date
}
req.push(st)
fs.writeFileSync('./src/req.json', JSON.stringify(req))
reply(`_request anda telah tersampaikan_`)
var nomor2 = mek.participant
const teks2 = `*REQUEST*\nUser : @${nomor2.split("@s.whatsapp.net")[0]}\nNomor : ${sender.split("@")[0]}\nPesan : ${tem}`
var options = {
text: teks2,
contextInfo: {mentionedJid: [nomor2]},
}
client.sendMessage('6285731261728@s.whatsapp.net', options, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `*_© Mitsuha Official_*`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://f.top4top.io/p_21083n2ea0.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: floc2})
break

case 'tebakgambar':
data = fs.readFileSync('./lib/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
gambar = await getBuffer(randKey.result.soal)
setTimeout( () => {
client.sendMessage(from, gambar, image, { caption: `Jawablah pertanyaan dengan waktu yang sudah di tentukan _Waktu + 30 second_\n\n*TebakGambar*`})
}, 0)
setTimeout( () => {
client.sendMessage(from, `_Waktu habis jawaban : ${randKey.result.jawaban}_`, text, { quoted: floc2 })
}, 30000)
break

case 'carspeed':
reply(`${tingkat}\n\nyuk bantu mobil ini menuju rumahnya dengan cara ketik *-CRSP-* dan dapatkan tiket event lain!!! event terbatas\n\n${tingkatan.length} | 13`)
break

case 'niatsholat':
 reply(`_hi kaka silahkan pilih query yang telah di sediakan_\n\n1. Bacaan Iftitah\n2. Al Fatihah\n3. Bacaan Ruku\n4. Bacaan Sujud\n5. Bacaan Duduk Diantara Dua Sujud\n6. Duduk Tasyahud Awal\n7. Duduk Tasyahud Akhir\n8. Salam\n\n_silahkan ketik simbol dan angkanya saja ya contoh_ *-NIAT1-*`)
break

case 'niatsehari2':
reply(`_hi kaka silahkan pilih query yang telah di sediakan_\n\n1. Doa Sebelum Makan\n2. Doa Sesudah Makan\n3. Doa Sesudah  Minum\n4. Doa Ketika Makan Lupa Membaca Doa\n5. Doa Sebelum Tidur\n6. Doa Ketika Mimpi Buruk\n7. Doa Ketika Mendapat Mimpi Baik\n8. Doa Bangun Tidur\n9. Doa Masuk Kamar Mandi Atau Toilet\n\n10. Doa Istinja\n11. Doa Keluar Kamar Mandi Atau Toilet\n12. Doa Menjelang Sholat Shubuh\n13. Doa Menyambut Pagi Hari\n14. Doa Menyambut Sore Hari\n15. Doa Ketika Bercermin\n16. Doa Masuk Rumah\n17. Doa Keluar Rumah / Doa Bepergian\n18. Doa Memakai Pakaian\n19. Doa Memakai Pakaian Baru\n20. Doa Melepas Pakaian\n21. Doa Memohon Ilmu Yang Bermanfaat\n22. Doa Sebelum Belajar\n23. Doa Sesudah Belajar\n24. Doa Berpergian\n25. Doa Naik Kendaraan\n26. Doa Naik Kapal\n27. Doa Ketika Sampai di Tempat Tujuan\n28. Doa Ketika Menuju Masjid\n29. Doa Masuk Masjid\n30. Doa Keluar Masjid\n31. Doa Akan Membaca Al-Qur'an\n32. Doa Setelah Membaca Al-Qur'an\n33. Doa Niat Wudhu\n34. Doa Setelah Wudhu\n35. Doa Akan Mandi\n\n_silahkan ketik simbol dan angkanya saja ya contoh_ *-DOA1-*`)
break

case 'hadist':
reply(`_hi kaka silahkan pilih query yang telah di sediakan_\n\n1. Hr. Bukahri (1)\n2. Hr. Bukahri (2)\n3. Hr. Bukahri (3)\n4. Hr. Bukahri (4)\n5. Hr. Bukahri (5)\n6. Hr. Bukahri (6)\n7. Hr. Bukahri (7)\n8. Hr. Bukahri (8)\n9. Hr. Bukahri (9)\n10. Hr Bukhari (10)\n11. Hr. Bukahri (11)\n12. Hr. Bukahri (12)\n13. Hr. Bukahri (13)\n14. Hr. Bukahri (14)\n15. Hr. Bukahri (15)\n16. Hr. Bukahri (16)\n17. Hr. Bukahri (17)\n18. Hr. Bukahri (18)\n19. Hr. Bukahri (19)\n20. Hr. Bukahri (20)\n\n_silahkan ketik simbol dan angkanya saja ya contoh_ *-HADIST1-*`)
break

case 'set-help':
if(!q) return reply(`teksnya mana kak? contoh:\n\n#set-help ayonima`)
perintah_help = args.join(" ")
perintah_help = perintah_help
reply(`Perintah Help Berhasil Di Ubah Menjadi = ${perintah_help}\n\nSilahkan Kakak Bisa Ketik #${perintah_help}`)
break

case 'set-info':
if(!q) return reply(`teksnya mana kak? contoh:\n\n#set-info ayonima`)
perintah_info = args.join(" ")
perintah_info = perintah_info
reply(`Perintah Info Berhasil Di Ubah Menjadi = ${perintah_info}\n\nSilahkan Kakak Bisa Ketik #${perintah_info}`)
break

case 'set-owner':
if(!q) return reply(`teksnya mana kak? contoh:\n\n#set-owner ayonima`)
perintah_owner = args.join(" ")
perintah_owner = perintah_owner
reply(`Perintah Owner Berhasil Di Ubah Menjadi = ${perintah_owner}\n\nSilahkan Kakak Bisa Ketik #${perintah_owner}`)
break

case 'setperintah':
if(!q) return reply(`pilih query nya kak 😃\n\nketik *#set-help* untuk mengubah nama fitur help\n\nketik *#set-info* untuk mengubah nama fitur info\n\nketik *#set-owner* untuk mengubah nama fitur owner`)
break

case 'urltoimg':
if (args.length < 1) return reply(`_tambahkan link pada perintah_`)
linknya = await getBuffer(`${args.join(" ")}`)
client.sendMessage(from, linknya, image)
break

case 'upswtext':
if (!isPrem) return reply(`_perintah ini hanya bisa digunakan oleh pengguna premium saja_`)
if (args.length < 1) return reply(`_tambahkan teks pada perintah_`)
client.updatePresence(from, Presence.composing)
client.sendMessage('status@broadcast', `*UPDATE STATUS*\n\n${args.join(" ")}`, extendedText)
reply(`Berhasil Membuat Status`)
break

case 'upswimg':
if (!isPrem) return reply(`_perintah ini hanya bisa digunakan oleh pengguna premium saja_`)
if (!isQuotedImage) return reply(`_tag foto yang sudah dikirim sebelumnya lalu ketik #${command} dengan caption_`)
client.updatePresence(from, Presence.composing)
if (isQuotedImage) {
swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
sweb = await client.downloadMediaMessage(swew)
client.sendMessage('status@broadcast', sweb, image, {caption: `*UPDATE STATUS*: ${args.join(" ")}`})
}
reply(`Berhasil Membuat Status`)
break

case 'upswvideo':
if (!isPrem) return reply(`_perintah ini hanya bisa digunakan oleh pengguna premium saja_`)
if (!isQuotedVideo) return reply(`_tag foto yang sudah dikirim sebelumnya lalu ketik #${command} dengan caption_`)
client.updatePresence(from, Presence.composing)
if (isQuotedVideo) {
swew = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
sweb = await client.downloadMediaMessage(swew)
client.sendMessage('status@broadcast', sweb, video, {caption: `*UPDATE STATUS*: ${args.join(" ")}`})
}
reply(`Berhasil Membuat Status`)
break

case 'enable':
if (args[0]=="antilink") {antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('_﹝⌬﹞berhasil di aktifkan_')
} else if (args[0]=="welcome") {welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('_﹝⌬﹞berhasil di aktifkan_')
} else if (args[0]=="antitoxic") {antitoxic.push(from)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
reply('_﹝⌬﹞berhasil di aktifkan_')
} else if (args[0]=="leveling") {_leveling.push(from)
fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
reply('_﹝⌬﹞berhasil di aktifkan_')
} else if (args[0]=="cmd") {cmd.push(from)
usercmd.push(sender)
fs.writeFileSync('./src/cmd.json', JSON.stringify(cmd))
fs.writeFileSync('./src/usercmd.json', JSON.stringify(usercmd))
reply('_﹝⌬﹞berhasil di aktifkan_')
reply(`_fitur cmd aktif, bot akan mengirimkan setiap pesan ke chat kamu. jika ingin berhenti silahkan ketik #cmd lalu pilih tombol disable_`)
} else if (args[0]=="grup") {client.groupSettingChange (from, GroupSettingChange.messageSend, false)
reply('_﹝⌬﹞berhasil di aktifkan_')
} else {return reply(`_pilihan enable :_\n\n_• .enable antilink_\n_• .enable welcome_\n_• .enable antitoxic_\n_• .enable leveling_\n_• .enable cmd_\n_• .enable grup_`)}
break

case 'disable':
if (args[0]=="antilink") {antilink.splice(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('_﹝⌬﹞berhasil di matikan_')
} else if (args[0]=="welcome") {welkom.splice(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('_﹝⌬﹞berhasil di matikan_')
} else if (args[0]=="antitoxic") {antitoxic.splice(from)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
reply('_﹝⌬﹞berhasil di matikan_')
} else if (args[0]=="leveling") {_leveling.splice(from)
fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
reply('_﹝⌬﹞berhasil di matikan_')
} else if (args[0]=="cmd") {cmd.splice(from)
usercmd.splice(sender)
fs.writeFileSync('./src/cmd.json', JSON.stringify(cmd))
fs.writeFileSync('./src/usercmd.json', JSON.stringify(usercmd))
reply('_﹝⌬﹞berhasil di matikan_')
} else if (args[0]=="grup") {client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply('_﹝⌬﹞berhasil di matikan_')
} else {return reply(`_pilihan disable :_\n\n_• .disable antilink_\n_• .disable welcome_\n_• .disable antitoxic_\n_• .disable leveling_\n_• .disable cmd_\n_• .disable grup_`)}
break

/*_________________
BATAS DEFAULT
___________________*/

default:             
	
if (buttonsR === 'Pulsa') {
reply(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285731261728_`)
break
}

if (buttonsR === 'Gopay') {
reply(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285826630478_`)
break
}

if (buttonsR === 'Dana') {
reply(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285731261728_`)
break
}

if (buttonsR === 'DONASI') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
uptime = process.uptime()
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId: `Pulsa`,buttonText:{displayText: `Pulsa`},type:1},{buttonId:`Dana`,buttonText:{displayText:'Dana'},type:1},{buttonId:`Gopay`,buttonText:{displayText:'Gopay'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`*_© Mitsuha Official_*`, imageMessage: imageMsg,
contentText:`INGIN DONASI MELALUI SAWERIA? LANGSUNG CEK WEBSITE INI YUK!! https://www.saweria.co/MitsuhaBot`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
break
}
	
if (buttonsR === 'OWNER') {
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: floc2})
let hot = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Apakah Kamu Butuh Info Dari Owner Ku?`,
"description": `.`,
"footerText": "Jangan Spam Kontak Ownerku",
"buttons": [
{buttonId: 'MY INFO', buttonText: {displayText: 'MY INFO'}, type: 1},
{buttonId: 'IKLAN BOT', buttonText: {displayText: 'IKLAN BOT'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(hot)
break
}

if (buttonsR === 'OWNER BOT') {
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: floc2})
break
}

if (budy.includes(`-LOTRE1-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre1 = ini
reply(`_slot nomor 1 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE2-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre2 = ini
reply(`_slot nomor 2 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE3-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre3 = ini
reply(`_slot nomor 3 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE4-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre4 = ini
reply(`_slot nomor 4 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE5-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
tingkatan.splice(sender)
fs.writeFileSync('./src/tingkatan.json', JSON.stringify(tingkatan))
reply(`_yah ticket kamu hangus, mainkan carspeed untuk memperoleh ticket!_`)
ini = `❌`
lotre5 = ini
break
}

if (budy.includes(`-LOTRE6-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
premium.push(sender)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply(`_horeee! kamu mendapatkan akses fitur premiums_`)
ini = `❌`
lotre6 = ini
break
}

if (budy.includes(`-LOTRE7-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre7 = ini
reply(`_slot nomor 7 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE8-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre8 = ini
reply(`_slot nomor 8 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
}

if (budy.includes(`-LOTRE9-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
if (isClem) return reply(`_kamu sudah pernah membuka slot ini sebelum nya, silahkan kembali lagi besok ya_`)
clem.push(sender)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
vs = ["1","10","100"]
mk = vs[Math.floor(Math.random() * vs.length)]
addLevelingLevel(sender, mk)
addLevelingXp(sender, mk)
ini = `❌`
lotre9 = ini
reply(`_slot nomor 9 terbuka_\n_kamu mendapatkan xp & level sebanyak ${mk}_`)
break
} 

if (budy.includes(`-CRSP-`)) {
if (isCar) return reply(`_kamu telah meng claim daily ini mohon untuk menyelasaikan event lain dahulu dan dapatkan hadiah_`)
tingkatan.push(sender)
fs.writeFileSync('./src/tingkatan.json', JSON.stringify(tingkatan))
reply(`_berhasil claim ticket!_`)
}
	
if (budy.includes(`-EVENT 1-`)) {
reply(`${tingkat}\n\nyuk bantu mobil ini menuju rumahnya dengan cara ketik *-CRSP-* dan dapatkan tiket event lain!!! event terbatas\n\n${tingkatan.length} | 13`)
}

if (budy.includes(`-EVENT 2-`)) {
if (!isCar) return reply(`_kamu belum mendapatkan ticket silahkan mainkan event carspeed terlebih dahulu_`)
reply(`${lotre1}${lotre2}${lotre3}\n${lotre4}${lotre5}${lotre6}\n${lotre7}${lotre8}${lotre9}\n\n_jika ingin mengambil undian silahkan ketik -LOTRE(angka)- contoh :_\n\n*-LOTRE1-*`)
}

if (budy.includes(`BOT`)) {      	
let gwkee = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Ya saya bot ada yang bisa dibantu?`,
"buttons": [
{buttonId: 'HOME BACK', buttonText: {displayText: 'HOME BACK'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
client.relayWAMessage(gwkee)
break
}

if (buttonsR === 'Masalah Pendaftaran') {
let gwee = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Apakah Kakak Mengalami Pendaftaran Ke Bot Gagal Terus? Pastikan Format Yang Kamu Gunakan Benar\n\n*FORMAT*: .daftar atau .regist atau .verify\n\nMemalsukan Data Diri Akan Di Kenai Sanksi`,
"footerText": "ㅤㅤㅤㅤ",
"footerText": `APAKAH PANDUAN INI MEMBANTU?`,
"buttons": [
{buttonId: 'Ya', buttonText: {displayText: 'Ya'}, type: 1},
{buttonId: 'Tidak', buttonText: {displayText: 'Tidak'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwee)
break
}
						
if (buttonsR === 'Perintah Tidak Ditemukan') {
let gwee = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Sepertinya Kamu Mengalami Masalah Pada Fitur Perintah, Sebaiknya Kakak Menggunakan Command/Perintah Yang Terdaftar Di Menu Bot Ya Karna Setiap Bot Memiliki Fitur Yang Berbeda Beda`,
"footerText": "ㅤㅤㅤㅤ",
"footerText": `APAKAH PANDUAN INI MEMBANTU?`,
"buttons": [
{buttonId: 'Ya', buttonText: {displayText: 'Ya'}, type: 1},
{buttonId: 'Tidak', buttonText: {displayText: 'Tidak'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwee)
break
}
							
if (buttonsR === '⋮☰ PANDUAN') {
let gwkee = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `Hai Saya Mitsuha Akan Membantu Memecahkan Masalah Anda Silahkan Pilih Salah Satu Di Dibawah ⬇ `,
"buttons": [
{buttonId: 'Masalah Pendaftaran', buttonText: {displayText: 'Masalah Pendaftaran'}, type: 1},
{buttonId: 'Perintah Tidak Ditemukan', buttonText: {displayText: 'Perintah Tidak Ditemukan'}, type: 1},
{buttonId: 'Hubungi Pusat', buttonText: {displayText: 'Hubungi Pusat'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
client.relayWAMessage(gwkee)
break
}

if (buttonsR === 'Hubungi Pusat') {
client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: floc2})
reply(`punya masalah dengan bot? silahkan hubungi saya`)
break
}
  
if (buttonsR === 'HOME BACK') {
uptime = process.uptime()
getLevel3 = getLevelingLevel(sender)
b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, fs.readFileSync('./lib/odc.jpeg'))
buttons = [{buttonId:`MENU`,buttonText:{displayText:'MENU'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}] 
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'_jika tidak muncul tombol silahkan ketik manual #allmenu untuk memunculkan list menu_', imageMessage: imageMsg,
contentText:`*hello saya mitsuha akan membantumu dalam membuat sticker dan lain lain*\n\n*runtime : ${kyun(uptime)}*\n*chats : ${tchat}*\n*hit : ${hit_today.length}*\n\n「 *THANKS TO* 」\n*• mhankbarbar*\n*• mitsuhabotz*\n*• rimurubotz*\n*• dimxbotz*\n*• rurichan*\n*• zak06cheat*\n*• ridwan*\n*• hafizh*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)

/*getLevel3 = getLevelingLevel(sender)
uptime = process.uptime()
jo = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `𝙈𝙄𝙏𝙎𝙐𝙃?? 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏\n\n𝙍𝙐𝙉𝙏𝙄𝙈𝙀 : ${kyun(uptime)}\n𝙃𝙄𝙏 𝙏𝙊𝘿𝘼𝙔 : ${hit_today.length}\n\n「 *PROFILE KAMU* 」
• nama ${pushname}
• setatus ${premi}
• pangkat ${role}
• level ${getLevel3}
• xp ${getLevelingXp(sender)}


「 *INFORMASI MENU* 」
• ${prefix2}info
• ${prefix2}iklan
• ${prefix2}donasi
• ${prefix2}request


「 *EVENT GAMES BOT* 」
• ${prefix2}carspeed
• ${prefix2}lotre


「 *URL TO MEDIA TYPE* 」
• ${prefix2}urltoimg


「 *PRODUK & VOTING* 」
• ${prefix2}produk
• ${prefix2}tambah
• ${prefix2}votting
• ${prefix2}vote
• ${prefix2}dellvote


「 *ULASAN & MUTUAL* 」
• ${prefix2}ulasan
• ${prefix2}komentar
• ${prefix2}mutual
• ${prefix2}save


「 *ABSEN & MESSAGES* 」
• ${prefix2}absen
• ${prefix2}absensi
• ${prefix2}svmess
• ${prefix2}listmess


「 *GROUP MENU* 」
• ${prefix2}enable
• ${prefix2}disable
• ${prefix2}ban
• ${prefix2}dellban
• ${prefix2}cmd
• ${prefix2}sider
• ${prefix2}hidetag
• ${prefix2}fitnah
• ${prefix2}settings
• ${prefix2}revoke
• ${prefix2}add
• ${prefix2}kick
• ${prefix2}promote
• ${prefix2}demote
• ${prefix2}tagall
• ${prefix2}antilink
• ${prefix2}antitoxic
• ${prefix2}leveling
• ${prefix2}welcome


「 *ANIME MENU* 」
• ${prefix2}neko
• ${prefix2}waifu


「 *GAMES MENU* 」
• ${prefix2}dungeon
• ${prefix2}slot
• ${prefix2}truth
• ${prefix2}dare
• ${prefix2}tebakgambar


「 *IMAGE MENU* 」
• ${prefix2}cogan
• ${prefix2}cecan
• ${prefix2}pinterest
• ${prefix2}ocr


「 *RANDOM MENU* 」
• ${prefix2}cerpen
• ${prefix2}ceritahoror
• ${prefix2}film
• ${prefix2}fakedata
• ${prefix2}news
• ${prefix2}beasiswa
• ${prefix2}ppcouple


「 *STICKER MENU* 」
• ${prefix2}sticker
• ${prefix2}ttp
• ${prefix2}attp
• ${prefix2}wasted
• ${prefix2}comrade
• ${prefix2}jail
• ${prefix2}passed
• ${prefix2}trigger
• ${prefix2}toimg


「 *EDUCATION MENU* 」
• ${prefix2}quiz
• ${prefix2}nulis
• ${prefix2}niatsholat
• ${prefix2}niatsehari2
• ${prefix2}hadist


「 *AUDIO/VN MENU* 」
• ${prefix2}fast
• ${prefix2}tupai
• ${prefix2}gemuk
• ${prefix2}slow
• ${prefix2}tomp3


「 *PREMIUM MENU* 」
• ${prefix2}asupan
• ${prefix2}upswtext
• ${prefix2}upswimg
• ${prefix2}upswvideo


「 *OTHER MENU* 」
• ${prefix2}sharelock
• ${prefix2}delete
• ${prefix2}pesan
• ${prefix2}owner
• ${prefix2}report
• ${prefix2}timer
• ${prefix2}setperintah


「 *OWNER MENU* 」
• $
• >
• =>
• ${prefix2}makegroup
• ${prefix2}join
• ${prefix2}kudet
• ${prefix2}leave
• ${prefix2}clone
• ${prefix2}bc
• ${prefix2}addprem
• ${prefix2}dellprem
• ${prefix2}setbudy
• ${prefix2}bug


「 *THANKS TO* 」
• mhankbarbar
• mitsuhabotz
• rimurubotz
• dimxbotz
• rurichan
• zak06cheat
• ridwan
• hafizh
`,
"description": `.`,
"footerText": `© *Copyright By Mitsuha Or Caca*
Created Language Nodejs`,
"buttons": [
{buttonId:`IKLAN`,buttonText:{displayText:'IKLAN'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(jo)*/
break
}

if (buttonsR === 'MENU') {
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`「 *PROFILE KAMU* 」
• nama ${pushname}
• setatus ${premi}
• pangkat ${role}
• level ${getLevel3}
• xp ${getLevelingXp(sender)}


「 *INFORMASI MENU* 」
• ${prefix2}info
• ${prefix2}iklan
• ${prefix2}donasi
• ${prefix2}request


「 *EVENT GAMES BOT* 」
• ${prefix2}carspeed
• ${prefix2}lotre


「 *URL TO MEDIA TYPE* 」
• ${prefix2}urltoimg


「 *PRODUK & VOTING* 」
• ${prefix2}produk
• ${prefix2}tambah
• ${prefix2}votting
• ${prefix2}vote
• ${prefix2}dellvote


「 *ULASAN & MUTUAL* 」
• ${prefix2}ulasan
• ${prefix2}komentar
• ${prefix2}mutual
• ${prefix2}save


「 *ABSEN & MESSAGES* 」
• ${prefix2}absen
• ${prefix2}absensi
• ${prefix2}svmess
• ${prefix2}listmess


「 *GROUP MENU* 」
• ${prefix2}enable
• ${prefix2}disable
• ${prefix2}ban
• ${prefix2}dellban
• ${prefix2}cmd
• ${prefix2}sider
• ${prefix2}hidetag
• ${prefix2}fitnah
• ${prefix2}settings
• ${prefix2}revoke
• ${prefix2}add
• ${prefix2}kick
• ${prefix2}promote
• ${prefix2}demote
• ${prefix2}tagall
• ${prefix2}antilink
• ${prefix2}antitoxic
• ${prefix2}leveling
• ${prefix2}welcome


「 *ANIME MENU* 」
• ${prefix2}neko
• ${prefix2}waifu


「 *GAMES MENU* 」
• ${prefix2}dungeon
• ${prefix2}slot
• ${prefix2}truth
• ${prefix2}dare
• ${prefix2}tebakgambar


「 *IMAGE MENU* 」
• ${prefix2}cogan
• ${prefix2}cecan
• ${prefix2}pinterest
• ${prefix2}ocr


「 *RANDOM MENU* 」
• ${prefix2}cerpen
• ${prefix2}ceritahoror
• ${prefix2}film
• ${prefix2}fakedata
• ${prefix2}news
• ${prefix2}beasiswa
• ${prefix2}ppcouple


「 *STICKER MENU* 」
• ${prefix2}sticker
• ${prefix2}ttp
• ${prefix2}attp
• ${prefix2}wasted
• ${prefix2}comrade
• ${prefix2}jail
• ${prefix2}passed
• ${prefix2}trigger
• ${prefix2}toimg


「 *EDUCATION MENU* 」
• ${prefix2}quiz
• ${prefix2}nulis
• ${prefix2}niatsholat
• ${prefix2}niatsehari2
• ${prefix2}hadist


「 *AUDIO/VN MENU* 」
• ${prefix2}fast
• ${prefix2}tupai
• ${prefix2}gemuk
• ${prefix2}slow
• ${prefix2}tomp3


「 *PREMIUM MENU* 」
• ${prefix2}asupan
• ${prefix2}upswtext
• ${prefix2}upswimg
• ${prefix2}upswvideo


「 *OTHER MENU* 」
• ${prefix2}sharelock
• ${prefix2}delete
• ${prefix2}pesan
• ${prefix2}owner
• ${prefix2}report
• ${prefix2}timer
• ${prefix2}setperintah


「 *OWNER MENU* 」
• $
• >
• =>
• ${prefix2}makegroup
• ${prefix2}join
• ${prefix2}kudet
• ${prefix2}leave
• ${prefix2}clone
• ${prefix2}bc
• ${prefix2}addprem
• ${prefix2}dellprem
• ${prefix2}setbudy
• ${prefix2}bug


「 *THANKS TO* 」
• mhankbarbar
• mitsuhabotz
• rimurubotz
• dimxbotz
• rurichan
• zak06cheat
• ridwan
• hafizh`
sendButLocation(from, `${teks}`, `*_© Mitsuha Official_*`,{jpegThumbnail:fakeimage}, [{buttonId:`IKLAN`,buttonText:{displayText:'IKLAN'},type:1},{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break
}

if (buttonsR === 'DAILY EVENT') {
reply(`_hei welkom tu my event!_\n\n1. car speed\n2. lotre berhadiah\n\n_untuk memilih salah satu event silahkan ketik -EVENT (angka)- contoh:_\n\n*-EVENT 1-*`)
}

if (buttonsR === 'IKLAN BOT') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
let gwmkkeje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*OPEN JASA SEWA BOT*`,
"description": `.`,
"footerText": `
🛑 *FEATURE FEATURE BOT*:
- ANTILINK . KICK SEND LINK
- WELCOME . SAMBUT MEMBER
- SETTING . PENGATURAN GC
- PRODUK . PROMOSI BARANG
- GROUP WA . BANTU CARI GRUP
- PLAY GAME . GAMES BOT

🛑 *LIST HARGA SEWA BOT*:
- SEWA DUA MINGGU - 5.000
- SEWA SATU BULAN - 10.000
- SEWA PERMANENT - 15.000

🛑 *CONTACT PERSON*:
- owner - wa.me/6285731261728
- bot - wa.me/62857312617283
- payment - qris - gopay - dana
- note - script bot tidak pasaran
- dan tidak ada di bot lain.
- note - script bot full fitur tanpa
- apikey jadi kemungkinan eror 
- sangatlah rendah!`,
"buttons": [
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwmkkeje)
break
}

if (buttonsR === 'IKLAN') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
let gwmgkkeje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*OPEN JASA SEWA BOT*`,
"description": `.`,
"footerText": `
🛑 *FEATURE FEATURE BOT*:
- ANTILINK . KICK SEND LINK
- WELCOME . SAMBUT MEMBER
- SETTING . PENGATURAN GC
- PRODUK . PROMOSI BARANG
- GROUP WA . BANTU CARI GRUP
- PLAY GAME . GAMES BOT

🛑 *LIST HARGA SEWA BOT*:
- SEWA DUA MINGGU - 5.000
- SEWA SATU BULAN - 10.000
- SEWA PERMANENT - 15.000

🛑 *CONTACT PERSON*:
- owner - wa.me/6285731261728
- bot - wa.me/62857312617283
- payment - qris - gopay - dana
- note - script bot tidak pasaran
- dan tidak ada di bot lain.
- note - script bot full fitur tanpa
- apikey jadi kemungkinan eror 
- sangatlah rendah!`,
"buttons": [
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwmgkkeje)
break
}
                
/*if (body.startsWith(`.${command}`)) 
opp = `*「 COMMAND IS NOT FOUND 」*`
client.sendMessage(from, opp, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://f.top4top.io/p_21083n2ea0.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: floc22})  
break
}*/

/*if (body.startsWith(`X${command}`)) {
opp = `*「 COMMAND IS NOT FOUND 」*`
client.sendMessage(from, opp, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://f.top4top.io/p_21083n2ea0.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: floc22})  
break
}*/

if (budy.includes(`-HADIST1-`)) {
for (let i of hadist) {
reply(`${i.result1.message}\n\n*${i.result1.arabic}*\n\n${i.result1.id}`) 
break
}
}

if (budy.includes(`-HADIST2-`)) {
for (let i of hadist) {
reply(`${i.result2.message}\n\n*${i.result2.arabic}*\n\n${i.result2.id}`) 
break
}
}

if (budy.includes(`-HADIST3-`)) {
for (let i of hadist) {
reply(`${i.result3.message}\n\n*${i.result3.arabic}*\n\n${i.result3.id}`) 
break
}
}

if (budy.includes(`-HADIST4-`)) {
for (let i of hadist) {
reply(`${i.result4.message}\n\n*${i.result4.arabic}*\n\n${i.result4.id}`) 
break
}
}

if (budy.includes(`-HADIST5-`)) {
for (let i of hadist) {
reply(`${i.result5.message}\n\n*${i.result5.arabic}*\n\n${i.result5.id}`) 
break
}
}

if (budy.includes(`-HADIST6-`)) {
for (let i of hadist) {
reply(`${i.result6.message}\n\n*${i.result6.arabic}*\n\n${i.result6.id}`) 
break
}
}

if (budy.includes(`-HADIST7-`)) {
for (let i of hadist) {
reply(`${i.result7.message}\n\n*${i.result7.arabic}*\n\n${i.result7.id}`) 
break
}
}

if (budy.includes(`-HADIST8-`)) {
for (let i of hadist) {
reply(`${i.result8.message}\n\n*${i.result8.arabic}*\n\n${i.result8.id}`) 
break
}
}

if (budy.includes(`-HADIST9-`)) {
for (let i of hadist) {
reply(`${i.result9.message}\n\n*${i.result9.arabic}*\n\n${i.result9.id}`) 
break
}
}

if (budy.includes(`-HADIST10-`)) {
for (let i of hadist) {
reply(`${i.result10.message}\n\n*${i.result10.arabic}*\n\n${i.result10.id}`) 
break
}
}

if (budy.includes(`-HADIST11-`)) {
for (let i of hadist) {
reply(`${i.result11.message}\n\n*${i.result11.arabic}*\n\n${i.result11.id}`) 
break
}
}

if (budy.includes(`-HADIST12-`)) {
for (let i of hadist) {
reply(`${i.result12.message}\n\n*${i.result12.arabic}*\n\n${i.result12.id}`) 
break
}
}

if (budy.includes(`-HADIST13-`)) {
for (let i of hadist) {
reply(`${i.result13.message}\n\n*${i.result13.arabic}*\n\n${i.result13.id}`) 
break
}
}

if (budy.includes(`-HADIST14-`)) {
for (let i of hadist) {
reply(`${i.result14.message}\n\n*${i.result14.arabic}*\n\n${i.result14.id}`) 
break
}
}

if (budy.includes(`-HADIST15-`)) {
for (let i of hadist) {
reply(`${i.result15.message}\n\n*${i.result15.arabic}*\n\n${i.result15.id}`) 
break
}
}

if (budy.includes(`-HADIST16-`)) {
for (let i of hadist) {
reply(`${i.result16.message}\n\n*${i.result16.arabic}*\n\n${i.result16.id}`) 
break
}
}

if (budy.includes(`-HADIST17-`)) {
for (let i of hadist) {
reply(`${i.result17.message}\n\n*${i.result17.arabic}*\n\n${i.result17.id}`) 
break
}
}

if (budy.includes(`-HADIST18-`)) {
for (let i of hadist) {
reply(`${i.result18.message}\n\n*${i.result18.arabic}*\n\n${i.result18.id}`) 
break
}
}

if (budy.includes(`-HADIST19-`)) {
for (let i of hadist) {
reply(`${i.result19.message}\n\n*${i.result19.arabic}*\n\n${i.result19.id}`) 
break
}
}

if (budy.includes(`-HADIST20-`)) {
for (let i of hadist) {
reply(`${i.result20.message}\n\n*${i.result20.arabic}*\n\n${i.result20.id}`) 
break
}
}

if (budy.includes(`-NIAT1-`)) {
for (let i of bacasholat) {
reply(`${i.result1.name}\n\n*${i.result1.arabic}*\n\n${i.result1.latin}\n\n${i.result1.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT2-`)) {
for (let i of bacasholat) {
reply(`${i.result2.name}\n\n*${i.result2.arabic}*\n\n${i.result2.latin}\n\n${i.result2.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT3-`)) {
for (let i of bacasholat) {
reply(`${i.result3.name}\n\n*${i.result3.arabic}*\n\n${i.result3.latin}\n\n${i.result3.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT4-`)) {
for (let i of bacasholat) {
reply(`${i.result4.name}\n\n*${i.result4.arabic}*\n\n${i.result4.latin}\n\n${i.result4.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT5-`)) {
for (let i of bacasholat) {
reply(`${i.result5.name}\n\n*${i.result5.arabic}*\n\n${i.result5.latin}\n\n${i.result5.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT6-`)) {
for (let i of bacasholat) {
reply(`${i.result6.name}\n\n*${i.result6.arabic}*\n\n${i.result6.latin}\n\n${i.result6.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT7-`)) {
for (let i of bacasholat) {
reply(`${i.result7.name}\n\n*${i.result7.arabic}*\n\n${i.result7.latin}\n\n${i.result7.terjemahan}`) 
break
}
}

if (budy.includes(`-NIAT8-`)) {
for (let i of bacasholat) {
reply(`${i.result8.name}\n\n*${i.result8.arabic}*\n\n${i.result8.latin}\n\n${i.result8.terjemahan}`) 
break
}
}


if (budy.includes(`-DOA1-`)) {
for (let i of bacaharian) {
reply(`${i.result1.title}\n\n*${i.result1.arabic}*\n\n${i.result1.latin}\n\n${i.result1.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA2-`)) {
for (let i of bacaharian) {
reply(`${i.result2.title}\n\n*${i.result2.arabic}*\n\n${i.result2.latin}\n\n${i.result2.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA3-`)) {
for (let i of bacaharian) {
reply(`${i.result3.title}\n\n*${i.result3.arabic}*\n\n${i.result3.latin}\n\n${i.result3.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA4-`)) {
for (let i of bacaharian) {
reply(`${i.result4.title}\n\n*${i.result4.arabic}*\n\n${i.result4.latin}\n\n${i.result4.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA5-`)) {
for (let i of bacaharian) {
reply(`${i.result5.title}\n\n*${i.result5.arabic}*\n\n${i.result5.latin}\n\n${i.result5.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA6-`)) {
for (let i of bacaharian) {
reply(`${i.result6.title}\n\n*${i.result6.arabic}*\n\n${i.result6.latin}\n\n${i.result6.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA7-`)) {
for (let i of bacaharian) {
reply(`${i.result7.title}\n\n*${i.result7.arabic}*\n\n${i.result7.latin}\n\n${i.result7.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA8-`)) {
for (let i of bacaharian) {
reply(`${i.result8.title}\n\n*${i.result8.arabic}*\n\n${i.result8.latin}\n\n${i.result8.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA9-`)) {
for (let i of bacaharian) {
reply(`${i.result9.title}\n\n*${i.result9.arabic}*\n\n${i.result9.latin}\n\n${i.result9.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA10-`)) {
for (let i of bacaharian) {
reply(`${i.result10.title}\n\n*${i.result10.arabic}*\n\n${i.result10.latin}\n\n${i.result10.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA11-`)) {
for (let i of bacaharian) {
reply(`${i.result11.title}\n\n*${i.result11.arabic}*\n\n${i.result11.latin}\n\n${i.result11.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA12-`)) {
for (let i of bacaharian) {
reply(`${i.result12.title}\n\n*${i.result12.arabic}*\n\n${i.result12.latin}\n\n${i.result12.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA13-`)) {
for (let i of bacaharian) {
reply(`${i.result13.title}\n\n*${i.result13.arabic}*\n\n${i.result13.latin}\n\n${i.result13.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA14-`)) {
for (let i of bacaharian) {
reply(`${i.result14.title}\n\n*${i.result14.arabic}*\n\n${i.result14.latin}\n\n${i.result14.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA15-`)) {
for (let i of bacaharian) {
reply(`${i.result15.title}\n\n*${i.result15.arabic}*\n\n${i.result15.latin}\n\n${i.result15.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA16-`)) {
for (let i of bacaharian) {
reply(`${i.result16.title}\n\n*${i.result16.arabic}*\n\n${i.result16.latin}\n\n${i.result16.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA17-`)) {
for (let i of bacaharian) {
reply(`${i.result17.title}\n\n*${i.result17.arabic}*\n\n${i.result17.latin}\n\n${i.result17.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA18-`)) {
for (let i of bacaharian) {
reply(`${i.result18.title}\n\n*${i.result18.arabic}*\n\n${i.result18.latin}\n\n${i.result18.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA19-`)) {
for (let i of bacaharian) {
reply(`${i.result19.title}\n\n*${i.result19.arabic}*\n\n${i.result19.latin}\n\n${i.result19.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA20-`)) {
for (let i of bacaharian) {
reply(`${i.result20.title}\n\n*${i.result20.arabic}*\n\n${i.result20.latin}\n\n${i.result20.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA21-`)) {
for (let i of bacaharian) {
reply(`${i.result21.title}\n\n*${i.result21.arabic}*\n\n${i.result21.latin}\n\n${i.result21.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA22-`)) {
for (let i of bacaharian) {
reply(`${i.result22.title}\n\n*${i.result22.arabic}*\n\n${i.result22.latin}\n\n${i.result22.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA23-`)) {
for (let i of bacaharian) {
reply(`${i.result23.title}\n\n*${i.result23.arabic}*\n\n${i.result23.latin}\n\n${i.result23.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA24-`)) {
for (let i of bacaharian) {
reply(`${i.result24.title}\n\n*${i.result24.arabic}*\n\n${i.result24.latin}\n\n${i.result24.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA25-`)) {
for (let i of bacaharian) {
reply(`${i.result25.title}\n\n*${i.result25.arabic}*\n\n${i.result25.latin}\n\n${i.result25.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA26-`)) {
for (let i of bacaharian) {
reply(`${i.result26.title}\n\n*${i.result26.arabic}*\n\n${i.result26.latin}\n\n${i.result26.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA27-`)) {
for (let i of bacaharian) {
reply(`${i.result27.title}\n\n*${i.result27.arabic}*\n\n${i.result27.latin}\n\n${i.result27.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA28-`)) {
for (let i of bacaharian) {
reply(`${i.result28.title}\n\n*${i.result28.arabic}*\n\n${i.result28.latin}\n\n${i.result28.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA29-`)) {
for (let i of bacaharian) {
reply(`${i.result29.title}\n\n*${i.result29.arabic}*\n\n${i.result29.latin}\n\n${i.result29.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA30-`)) {
for (let i of bacaharian) {
reply(`${i.result30.title}\n\n*${i.result30.arabic}*\n\n${i.result30.latin}\n\n${i.result30.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA31-`)) {
for (let i of bacaharian) {
reply(`${i.result31.title}\n\n*${i.result31.arabic}*\n\n${i.result31.latin}\n\n${i.result31.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA32-`)) {
for (let i of bacaharian) {
reply(`${i.result32.title}\n\n*${i.result32.arabic}*\n\n${i.result32.latin}\n\n${i.result32.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA33-`)) {
for (let i of bacaharian) {
reply(`${i.result33.title}\n\n*${i.result33.arabic}*\n\n${i.result33.latin}\n\n${i.result33.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA34-`)) {
for (let i of bacaharian) {
reply(`${i.result34.title}\n\n*${i.result34.arabic}*\n\n${i.result34.latin}\n\n${i.result34.terjemahan}`) 
break
}
}

if (budy.includes(`-DOA35-`)) {
for (let i of bacaharian) {
reply(`${i.result35.title}\n\n*${i.result35.arabic}*\n\n${i.result35.latin}\n\n${i.result35.terjemahan}`) 
break
}
}

if (budy.includes(`Test`)) {
client.sendMessage(from, 'active', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
break
}
   
                  
                   if (budy.includes(`⌚`)) {
                   	if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
			  uptime = process.uptime()
					client.setStatus(`Runtime ${kyun(uptime)}`)
					reply(`Sukses mengganti bio`)
					break
					}
					
                   if (budy.includes(`SEWA`)) {        
				let gwmee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `*OPEN JASA SEWA BOT*`,
					
					
"description": `.`,

"footerText": `
🛑 *FEATURE FEATURE BOT*:
- ANTILINK . KICK SEND LINK
- WELCOME . SAMBUT MEMBER
- SETTING . PENGATURAN GC
- PRODUK . PROMOSI BARANG
- GROUP WA . BANTU CARI GRUP
- PLAY GAME . GAMES BOT

🛑 *LIST HARGA SEWA BOT*:
- SEWA DUA MINGGU - 5.000
- SEWA SATU BULAN - 10.000
- SEWA PERMANENT - 15.000

🛑 *CONTACT PERSON*:
- owner - wa.me/6285731261728
- bot - wa.me/62857312617283
- payment - qris - gopay - dana
- note - script bot tidak pasaran
- dan tidak ada di bot lain.
- note - script bot full fitur tanpa
- apikey jadi kemungkinan eror 
- sangatlah rendah!`,

"buttons": [
						
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}

],
					

headerType: 1
					

},
					

}, {quoted: floc2})
					
 
await client.relayWAMessage(gwmee)

            break
}
            
                    if (budy.includes(`🦄`)) {
                    var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					const bot1 = ["ⒹⒺⓋ - ⒷⓄⓉ ⒷⓎ\n            ⓂⒾⓉⓈⓊⒽⒶ-ⒷⓄⓉⓏ","_MITSUHA-BOTZ_\n           _BY Chacha_"]
					const bot = bot1[Math.floor(Math.random() * bot1.length)]
					var options = {
					text: `${ucapanWaktu} Pacar Orang :v`,
					contextInfo: { mentionedJid: mem },
					quoted: floc2
					}
					client.sendMessage(from, options, text, {quoted: faketag3})
					break
}

if (budy.includes(`${kunci}`)) {
reply(`${respon}`)
break
}

if (buttonsR === 'Tutup') {
	  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
	var nomor = mek.participant
              const close = {
              text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
              contextInfo: { mentionedJid: [nomor] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, true);
              reply(close)
              break
}
              if (buttonsR === 'Buka') {
              	  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
open = {
              text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
              contextInfo: { mentionedJid: [sender] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, false)
              client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
              break
}
              if (buttonsR === 'Enable W1') {
              	  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
              	if (isWelkom) return reply('_﹝⌬﹞berhasil di aktifkan_')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('_﹝⌬﹞berhasil di aktifkan_')
						break
						}
						if (buttonsR === 'Disable W0') {
							  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
							var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('_﹝⌬﹞berhasil di matikan_')
						break
						}
						if (buttonsR === 'Enable A1') {
							  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
							if (isAntiLink) return reply('_﹝⌬﹞berhasil di aktifkan_')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_﹝⌬﹞berhasil di aktifkan_')
						break
						}
						
						if (buttonsR === 'Disable A0') {
							  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
							if (!isAntiLink) return reply('_﹝⌬﹞berhasil di matikan_')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('_﹝⌬﹞berhasil di matikan_')
						break 
						}
						
						if (buttonsR === 'Enable C1') {
							  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
							if (isCemd) return reply('_﹝⌬﹞berhasil di aktifkan_')
						
cmd.push(from)
usercmd.push(sender)
						fs.writeFileSync('./src/cmd.json', JSON.stringify(cmd))
						fs.writeFileSync('./src/usercmd.json', JSON.stringify(usercmd))
						reply('_﹝⌬﹞berhasil di aktifkan_')
						reply(`_fitur cmd aktif, bot akan mengirimkan setiap pesan ke chat kamu. jika ingin berhenti silahkan ketik #cmd lalu pilih tombol disable_`)
						break
						}
						
						if (buttonsR === 'Disable C0') {
							  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
                    
							if (!isCemd) return reply('_﹝⌬﹞berhasil di matikan_')
				
var ini = cmd.indexOf(from)
						cmd.splice(ini, 1)
						fs.writeFileSync('./src/cmd.json', JSON.stringify(cmd))
						var ini = usercmd.indexOf(sender)
						usercmd.splice(ini, 1)
						fs.writeFileSync('./src/usercmd.json', JSON.stringify(usercmd))
						reply('_﹝⌬﹞berhasil di matikan_')
						break 
						}
						
						if (buttonsR === 'Disable T0') {
							if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
							var ini = antitoxic.indexOf(from)
						antitoxic.splice(ini, 1)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('_﹝⌬﹞berhasil di matikan_')
						break
						}
						if (buttonsR === 'Enable T1') {
							if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
							if (isAntiToxic) return reply('_﹝⌬﹞berhasil di aktifkan_')
						antitoxic.push(from)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('_﹝⌬﹞berhasil di aktifkan_')
						break
						}
						if (buttonsR === 'Enable L1') {
							if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
					if (isLevelingOn) return reply('_﹝⌬﹞berhasil di aktifkan_')
                    _leveling.push(from)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     reply('_﹝⌬﹞berhasil di aktifkan_')
                     break
}
                     
                     if (buttonsR === 'Disable L0') {
							if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`_﹝⌬﹞hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`_﹝⌬﹞error, jadikan bot admin_`)
					var ini = _leveling.indexOf(from)
						_leveling.splice(ini, 1)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     reply('_﹝⌬﹞berhasil di matikan_')
                     break
}
                     

              
              
  
     if (buttonsR === 'SPIN') {
     
              youke = fs.readFileSync('./lib/odc.jpeg')
            const p = hewan[Math.floor(Math.random() * hewan.length)]
              const p2 = hewan[Math.floor(Math.random() * hewan.length)]
              const p3 = hewan[Math.floor(Math.random() * hewan.length)]
		      buttons = [{buttonId:`SPIN`,buttonText:{displayText:'SPIN'},type:1},{buttonId:`GET`,buttonText:{displayText:'GET'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`Tanggal ${date}\n*_© Mitsuha Official_*`, imageMessage: imageMsg,
              contentText:`[  🎰 | SLOTS ]\n-----------------\n${p}\n${p2}<=====\n${p3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : 🦂<=====`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
              client.relayWAMessage(prep)
              
              break
}

if (buttonsR === 'GET') {
	getLevel2 = getLevelingLevel(sender)
	addLevelingLevel(sender, 2) 
	addLevelingXp(sender, 10)
	reply(`Usaha Yg Bagus Level Mu Naik Menjadi ${getLevel2} 🍷Dan Xp Mu Bertambah Menjadi ${getLevelingXp(sender)}🔥`)
	break
	}
	
	
				 


if (buttonsR === '10 Menit <') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
setTimeout( () => {
				client.groupLeave(from)
				}, 600000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
				}, 500000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 10 Menit`, MessageType.text, { quoted: floc2 })
				}, 0)
				break
}
if (buttonsR === '14 Menit <') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
setTimeout( () => {
				client.groupLeave(from)
				}, 1,200,000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
				}, 1,100,000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 20 Menit`, MessageType.text, { quoted: floc2 })
				}, 0)
				break
}
if (buttonsR === '30 Menit <') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
setTimeout( () => {
				client.groupLeave(from)
				}, 1,800,000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
				}, 1,700,000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 30 Menit`, MessageType.text, { quoted: floc2 })
				}, 0)
				break
}

				if (buttonsR === 'PLAY GAME') {
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`START`,buttonText:{displayText:'START'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/dg.png`),'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`Menyambungkan Server...`, imageMessage: imageMsg,
              contentText:`*DUNGEON ISEKAI*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              
              break
}
              if (buttonsR === 'START') {
              E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await client.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: floc2 })
				
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SERANG ⚔`,buttonText:{displayText:'SERANG ⚔'},type:1},{buttonId:`LANTAI 2`,buttonText:{displayText:'LANTAI 2'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Skull.jpg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`Monster Tipe Pengguna Pedang Yang Ahli, Konon Pada Tahun 1567 Di Amerika Serikat Seorang Kesatria Berjuang Sendiri Melawan Penjajahan`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              break
}        
             if (buttonsR === 'LANTAI 2') {
              E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await client.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: floc2 })
				
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SERANG ⚔`,buttonText:{displayText:'SERANG ⚔'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Slime.jpg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`Slime Atau Sering Disebut Juga Lendir Memiliki Skill Hebat Ia Mampu Membelah Dirinya Menjadi Banyak Hingga Membuat Lawan Kuwalahan Menghadapinya`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              break
}

if (buttonsR === 'SERANG ⚔') {
buttons = [{buttonId:`BUY`,buttonText:{displayText:'BUY'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`HARGA 1 PERALATAN DI BANDROL DENGAN HARGA 1000 XP`, imageMessage: imageMsg,
              contentText:`*PERALATAN PERANG*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              addLevelingXp(sender, -1000)
              break
}

if (buttonsR === 'BUY') {
vs = ["WIN","LOSE","LOSE"]
mk = vs[Math.floor(Math.random() * vs.length)]
await reply(`Memulai Pertempuran...`)
setTimeout( () => {
			  creator = "6285731261728@s.whatsapp.net"
teks =`*PERTEMPURAN SELESAI*`
sendButLocation(from, `${teks}`, `Hasil Pertempuran Kamu Adalah ( *${mk}* ) Silahkan Kamu Claim Hadiah Yang Sudah Di Sediakan`, {jpegThumbnail:fakeimage}, [{buttonId:`${mk}`,buttonText:{displayText:`${mk}`},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
			}, 15000)
break
}
if (buttonsR === 'LOSE') {
addLevelingLevel(sender, -1)
addLevelingXp(sender, -1000)
reply(`Karna Kamu Kalah Maka Xp Kamu Hilang -1000 Dan Levelmu Turun -1`)
break
}

if (buttonsR === 'WIN') {
addLevelingLevel(sender, 1)
addLevelingXp(sender, 1500)
reply(`Kamu Mendapatkan Xp Sebanyak 1500, Dan Levelmu Naik 1`)
break
}
              
			  if (budy.includes(`SHARE`)){
			        
		      data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𝓗𝓪𝓲 𝓘?? 𝓜𝓲𝓽𝓼𝓾𝓱𝓪 👋`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
             break
}
             
             if (budy.includes(`READY`)){
			        
		      data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𝓗𝓪𝓲 𝓘?? 𝓜𝓲𝓽𝓼𝓾𝓱𝓪 👋`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
             break
}
             
           if (buttonsR === '么 cecan 么') {
			  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
			    data = fs.readFileSync('./lib/apirandom.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
              /*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
		      buttons = [{buttonId:`么 cecan 么`,buttonText:{displayText:`么 cecan 么`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:'CEWEK CANTIK', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
}
              if (buttonsR === '么 cogan 么') {
			  if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
			    data = fs.readFileSync('./lib/apirandom.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
              /*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
		      buttons = [{buttonId:`么 cogan 么`,buttonText:{displayText:`么 cogan 么`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:'COWOK GANTENG', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
}
            
 
				if (buttonsR === '么 waifu 么') {
				if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
              b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
		      buttons = [{buttonId:`么 waifu 么`,buttonText:{displayText:`么 waifu 么`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:'*_© Mitsuha Official_*', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
             
}
if (buttonsR === '👍') {
if (isLek) return reply(`Kamu Sudah Pernah Memberikan Ratting Sebelumnya`)     
dislike.splice(ini, 1)
fs.writeFileSync('./src/Star2.json', JSON.stringify(dislike))
like.push(sender)
fs.writeFileSync('./src/Star1.json', JSON.stringify(like))
reply(`Terimkasih Atas Ulasannya Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak Dan Baik`)
break
}

if (buttonsR === '👎') {
if (isDislek) return reply(`Kamu Sudah Pernah Memberikan Ratting Sebelumnya`)
like.splice(ini, 1)
fs.writeFileSync('./src/Star1.json', JSON.stringify(like))
dislike.push(sender)
fs.writeFileSync('./src/Star2.json', JSON.stringify(dislike))
reply(`Terimkasih Atas Ulasannya Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak Dan Baik`)
break
}
if (buttonsR === '么 neko 么') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
			  E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
			  reply(`_﹝⌬﹞wait proses_`)
			  B10 = (await fetchJson(`https://nekos.life/api/v2/img/neko`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(B10.url))
		      buttons = [{buttonId:`么 neko 么`,buttonText:{displayText:`么 neko 么`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
              buttonsMessage = {footerText:`*_© Mitsuha Official_*`, imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2, thumbnail: thumb})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
			break
}
				if (buttonsR === 'TAMBAH 📦') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`) 
if (!isQuotedImage) return reply('tag foto yang sudah dikirim sebelumnya lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas')
if(!q) return reply(`tag foto yang sudah dikirim sebelumnya lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas`)
nmapro = q.split('|')[0]
nmorpro = q.split('|')[1]
biopro = q.split('|')[2]
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
H1 = {
nama : nmapro,
nomor : nmorpro,
deskripsi : biopro
}
produk.push(H1)
fs.writeFileSync(`./lib/${randKey.nomor}.jpeg`, delb)
fs.writeFileSync('./src/produk.js', JSON.stringify(produk))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: floc2})		     	 
break
}
if (buttonsR === 'NEXT 📦') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT ??'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Ø Պ ! т ṧ ṳ ℏ ᾰ`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: floc2})
client.relayWAMessage(prep)
              break
}
              
              if (buttonsR === 'LEAVE NOW') {
              	    if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
                    if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
} else {
                        reply(mess.only.admin)
}
break
}

if (buttonsR === 'LEAVE TIME') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)
if (!isOwner) return reply(`_﹝⌬﹞hanya untuk owner_`)
gwetkhhkkke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_jika tidak muncul tombol silahkan ketik .enable atau .disable kemudian pilih query_`,
"buttons": [
{buttonId: '10 Menit <', buttonText: {displayText: '10 Menit <'}, type: 1},
{buttonId: '20 Menit <', buttonText: {displayText: '20 Menit <'}, type: 1},
{buttonId: '30 Menit <', buttonText: {displayText: '30 Menit <'}, type: 1}
],
headerType: 1
},
}, {quoted:mek})
await client.relayWAMessage(gwetkhhkkke)
break
}
      
if (buttonsR === '么 cerita_horor 么') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/horor.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`么 cerita_horor 么`,buttonText:{displayText:`么 cerita_horor 么`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'CERITA - HOROR', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Story*: ${randKey.result.story}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
}
              
if (buttonsR === 'BERI NILAI') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/komentar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId: `👍`,buttonText:{displayText: `👍`},type:1},{buttonId: `👎`,buttonText:{displayText: `👎`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
contentText:`            *TENTANG BOT INI*\n\n📋 Beri Nilai Pada Kualitas Bot Ini\n📑 Dukung Bot Agar Update Ya\n\n               *TOTAL RATING*\n\n❤ Jumlah Suka ${like.length}\n🖤 Jumlah Tidak Suka ${dislike.length}\n\n                  *KOMENTAR*\n\n👤 ${randKey.Pengguna}\n⌚ ${randKey.Time}\n💌 ${randKey.Komen}\n\n👤 ${randKey2.Pengguna}\n⌚ ${randKey2.Time}\n💌 ${randKey2.Komen}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
break
}

if (buttonsR === 'SEARCHING') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/film.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`SEARCHING`,buttonText:{displayText:`SEARCHING`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: thumb})).message.imageMessage
buttonsMessage = {footerText:'RANDOM - FILM', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Views*: ${randKey.result.views}\n\n*Duration*: ${randKey.result.duration}\n\n*Genre*: ${randKey.result.genre}\n\n*Tahun*: ${randKey.result.tahun}\n\n*Ratting*: ${randKey.result.rating}\n\n*Link*: ${randKey.result.link}\n\n*Actors*: ${randKey.result.actors}\n\n*Location*: ${randKey.result.location}\n\n*Release*: ${randKey.result.date_release}\n\n*Language*: ${randKey.result.language}\n\n*Link Download*: ${randKey.result.link_dl}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc2})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
}

if (buttonsR === 'NEWS') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/berita.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
oo = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*TITLE*: ${randKey.result.title}\n\n*AUTHOR*: ${randKey.result.author}\n\n*PUBLIS*: ${randKey.result.publishedAt}\n\n*CONTENT*: ${randKey.result.content}\n\n*DESKRIPSI*: ${randKey.result.description}\n\n*LINK*: ${randKey.result.url}`,
"description": `.`,
"footerText": "BREAKING NEWS",
"buttons": [
{buttonId: 'NEWS', buttonText: {displayText: 'NEWS'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(oo)
break
}

if (buttonsR === 'SELANJUTNYA') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/fdata.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let ot = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*KUMPULAN FAKE DATA ( PALSU )*\n\n*NAMA*: ${randKey.result.name}\n*BIRTHDAY*: ${randKey.result.birthday}\n*ADDRESS*: ${randKey.result.address}\n*CITY*: ${randKey.result.city}\n*REGION*: ${randKey.result.region}\n*COUNTRY*: ${randKey.result.country}\n*ZIP*: ${randKey.result.zip}\n*PHONE NUMBER*: ${randKey.result.phone_number}\n*USERNAME*: ${randKey.result.username}\n*PASSWORD*: ${randKey.result.password}\n*EMAIL*: ${randKey.result.email}`,
"description": `.`,
"footerText": "Ingat, Jangan Menyalah gunakan Data",
"buttons": [
{buttonId: 'SELANJUTNYA', buttonText: {displayText: 'SELANJUTNYA'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(ot)
break
}

if (buttonsR === 'MY INFO') {
creator = "6285731261728@s.whatsapp.net"
teks =`*HELLO ${pushname} ${ucapanWaktu} BERIKUT INFO DARI OWNERKU*`
sendButLocation(from, `${teks}`, `nama : chacha\nlahir tahun : 2007\nbulan : april\ntanggal : 10\nalamat : yogyakarta\ndesa : guyangan\ngender : cowo\nhobi : nonton anime\ndeveloper bot : chacha\ncreator bot : chacha`, {jpegThumbnail:fakeimage}, [{buttonId:`BERI NILAI`,buttonText:{displayText:'BERI NILAI'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break
}

if (buttonsR === 'MUTUAL') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
oo = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`,
"description": `.`,
"footerText": "TEMAN TEMAN BOT",
"buttons": [
{buttonId: 'MUTUAL', buttonText: {displayText: 'MUTUAL'}, type: 1}, 
{buttonId: 'SAVE', buttonText: {displayText: 'SAVE'}, type: 1}, 
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(oo)
break
}

if (buttonsR === 'SAVE') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if(!q) return reply(`Ingin Menemui Seseorang Diluar Sana? Yuk Ketik\n\n${prefix}.save nama|nomor\n\nGunakan Tanda | Sebagai Pembatas, Nomor Harus Berupa Kode Negara 62xxx`)
break
}

if (buttonsR === 'CARI LAGI') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)
data = fs.readFileSync('./lib/beasiswa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let io = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*INFORMASI BEASISWA*`,
"description": `.`,
"footerText": `${randKey.title}\n${randKey.link}\n\n${randKey2.title}\n${randKey2.link}\n\n${randKey3.title}\n${randKey3.link}`,
"buttons": [
{buttonId: 'CARI LAGI', buttonText: {displayText: 'CARI LAGI'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2}) 
await client.relayWAMessage(io)
break
}

if (buttonsR === '❎') {
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)  
if (isDepot) return reply('Kamu Sudah Melakukan Vote')
for (let i of vote) {
no.push(sender)
fs.writeFileSync('./src/no.json', JSON.stringify(no))
yes.splice(ini, 1)
fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
reply(`${i}\n\n✅ ${yes.length}\n❎ ${no.length}\n\nKetik perintah ${prefix2}vote untuk memvoting dan ${prefix2}delvote untuk menghapus vote kamu`)
}
break
}

if (buttonsR === '✅') {
if (!isGroup) return reply(`_﹝⌬﹞hanya bisa di grup_`)  
if (isPote) return reply('Kamu Sudah Melakukan Vote')
for (let i of vote) {
yes.push(sender)
fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
no.splice(ini, 1)
fs.writeFileSync('./src/no.json', JSON.stringify(no))
reply(`${i}\n\n✅ ${yes.length}\n❎ ${no.length}\n\nKetik perintah ${prefix2}vote untuk memvoting dan ${prefix2}delvote untuk menghapus vote kamu`)
}
break
}

if (buttonsR === 'MATIKAN') {
reply('TIMER DIMATIKAN')
break
}

if (buttonsR === 'JEDA 1 MENIT') {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
creator = "6285731261728@s.whatsapp.net"
setTimeout( () => {
sendButLocation(from, `JEDA ALARM ⏰`, `TIMER - BOTZ`, {jpegThumbnail:fakeimage}, [{buttonId:`JEDA 1 MENIT`,buttonText:{displayText:'JEDA 1 MENIT'},type:1},{buttonId:`MATIKAN`,buttonText:{displayText:'MATIKAN'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
}, 60000)
setTimeout( () => {
reply(`Alarm Akan Bunyi 1 Menit Lagi`)
}, 0)
break
}

if (budy.includes(`Asu`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`Konto`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`konto`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`Memek`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`memek`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`Ngent`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}

if (budy.includes(`ngent`)) {
kasar.push(sender)
fs.writeFileSync('./src/kasar.json', JSON.stringify(kasar))
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `BADWORD ( TOXIC ) DETECTED - ORANG YANG SUDAH PERNAH BERKATA KASAR : ${kasar.length}\n\n“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu'min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allah benci dengan orang yang lisannya kotor dan kasar.”`,
"footerText": `Hadist Riwayat Muslim`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: floc2})
await client.relayWAMessage(gwekkhkj1e)
if (!isGroup) return
if (!isAntiToxic) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
break
}
		 
if (buttonsR === `${Soalnya.jawaban}`) {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)  
if (isBenar) return reply(`_kamu sudah menjawab sebelumnya_`)
if (isSalah) return reply(`_kamu sudah menjawab sebelumnya_`)
benar.push(sender)
fs.writeFileSync('./src/benar.json', JSON.stringify(benar))
reply('Jawaban Anda Benar ✔️')
addLevelingLevel(sender, 2)
premium.push(sender)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply('Kamu Mendapat Hak Akses Premium + 2 Level')
break
}
						
if (buttonsR === `${Soalnya.salahnya}`) {
if (!isRegistered) return reply(ind.noregis())
if (isBan) return reply(`_﹝⌬﹞kamu telah dibanned bot_`)     
if (isBenar) return reply(`_kamu sudah menjawab sebelumnya_`)
if (isSalah) return reply(`_kamu sudah menjawab sebelumnya_`)
salah.push(sender)
fs.writeFileSync('./src/salah.json', JSON.stringify(sender))
reply('Jawaban Anda Salah ❌')
break
}

if (hoour_now >= '01:00' && hour_now <= '23:00') {
uptime = process.uptime()
setTimeout( () => {
client.setStatus(`Runtime ${kyun(uptime)}`)
}, 1000)
}

if (hoour_now >= '11:37' && hour_now <= '11:37') {
var ini = benar.indexOf(from)
benar.splice(ini, 1)
fs.writeFileSync('./src/benar.json', JSON.stringify(benar))
var inii = salah.indexOf(from)
salah.splice(inii, 1)
fs.writeFileSync('./src/salah.json', JSON.stringify(salah))
var iniii = clem.indexOf(from)
clem.splice(iniii, 1)
fs.writeFileSync('./src/clem.json', JSON.stringify(clem))
}

if (budy.startsWith('$')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (budy.startsWith('>')){
if (!isOwner) return
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: floc2})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
}
	
if (budy.includes(``)) {
if (!isCemd) return
if (!isGroup) return 
for (let sensi of usercmd) {
/*client.sendMessage(`${sensi}`, `> *time* ${time} *command* ${command} *from* ${groupName}`, text)*/
client.sendMessage(`${sensi}`,`{\n"from": "${sender}",\n"command": "${command}",\n"time": "${time}"\n}`, text)
break
}
}

/*if (budy.includes(``)) {
if (!isGroup) return
if (isGroupAdmins) return 
if (args.length > 4000) return 
var kic = `${sender.split("@")[0]}@s.whatsapp.net`      
client.groupRemove(from, [kic]).catch((e)=>{reply(`_﹝⌬﹞error, jadikan bot admin_`)})
}*/

		if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
}   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 