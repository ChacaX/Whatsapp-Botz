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
	return`_﹝⌬﹞silahkan ketik .verify dulu_`
}

exports.wait = () => {
	return`PEROSES...`
}