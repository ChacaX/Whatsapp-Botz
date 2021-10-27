exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`
┌───「 *MITSUHA BOTZ* 」───
│
├ *Nama*: ${namaUser}
├ *No*: wa.me/${sender.split("@")[0]}
├ *Umur*: ${umurUser}
├ *Ns*: ${serialUser}
│
└──────────────────`
}

exports.noregis = () => {
	return`_kamu belum terdaftar di bot, silahkan ketik .verify untuk login ke database bot_`
}

exports.wait = () => {
	return`PEROSES...`
}