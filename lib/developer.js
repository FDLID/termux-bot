const developer = (prefix) => { 
	return `
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  └─ ❏ ${prefix}gcshizuka     
  
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setlimit
  ├─ ❏ ${prefix}addlimit
  ├─ ❏ ${prefix}giftlimit
  ├─ ❏ ${prefix}setmemlimit
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}premium
  ├─ ❏ ${prefix}unpremium
  ├─ ❏ ${prefix}admin
  ├─ ❏ ${prefix}unadmin
  ├─ ❏ ${prefix}ban
  ├─ ❏ ${prefix}unban
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *ADMIN*
  │
  ├─ ❏ ${prefix}event
  ├─ ❏ ${prefix}bcc
  ├─ ❏ ${prefix}bann
  ├─ ❏ ${prefix}unbann
  ├─ ❏ ${prefix}blockk
  ├─ ❏ ${prefix}unblockk
  └─ ❏ ${prefix}giftlimit`
}

exports.developer = developer
