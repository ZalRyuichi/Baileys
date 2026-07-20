<div align="center">

<img src="https://em-content.zobj.net/source/apple/391/fire_1f525.png" width="70" alt="fire" />

# Ryuichi Bail

### A Fast, Lightweight WebSockets Library For WhatsApp Web

*Ryuichi Fork Of The Popular [Baileys](https://github.com/WhiskeySockets/Baileys) — Rebuilt For The **Ryuichi Code** Ecosystem*

<p>
<img src="https://img.shields.io/badge/package-%40ryuchi%2Fbail-8A2BE2?style=for-the-badge" alt="package" />
<img src="https://img.shields.io/badge/license-MIT-2ECC71?style=for-the-badge" alt="license" />
<img src="https://img.shields.io/badge/node-%3E%3D20.0.0-3178C6?style=for-the-badge" alt="node" />
<img src="https://img.shields.io/badge/multi--device-supported-FF4785?style=for-the-badge" alt="multi-device" />
</p>

[Installation](#-installation) •
[Quick Start](#-quick-start) •
[Pairing Code](#-pairing-code-login) •
[Structure](#-project-structure) •
[Credits](#-credits)

</div>

---

## 📖 About

**Ryuichi Bail** Is A Customized Fork Of The Popular Baileys Library — A Fully
Native, No-Browser WhatsApp Web API Built Entirely On WebSockets. No Selenium,
No Puppeteer, No Headless Chrome — Just A Direct Connection To WhatsApp's
Multi-Device Protocol.

This Fork Preserves Baileys' Battle-Tested Core While Layering In
Project-Specific Enhancements For **Ryuichi Code** — Powering Bots,
Dashboards, And Automation Tools Across The Ecosystem.

<br>

## ✨ Features

| | |
|---|---|
| 📡 **Multi-Device Protocol** | Full WhatsApp Web Support Over Raw WebSockets |
| 🔑 **Flexible Auth** | QR Code And Custom Pairing Code Login |
| 💬 **Rich Messaging** | Text, Media, Documents, Stickers, Polls, Buttons, And More |
| 👥 **Group Management** | Create Groups, Manage Participants, Update Settings |
| 🟢 **Live Presence** | Typing, Recording, Online/Offline Indicators |
| 🔒 **End-To-End Encryption** | Native Signal Protocol Implementation Via `libsignal` |
| 🗂️ **Session Persistence** | Multi-File Auth State Out Of The Box |
| 🧩 **Modular Architecture** | Clean Separation Across `Socket`, `Utils`, `WABinary`, `WAUSync` |

<br>

## 📦 Requirements

| Requirement | Version |
|---|---|
| Node.js | `>= 20.0.0` |
| Package Manager | `yarn@4.9.2` (Recommended) |

<br>

## 🚀 Installation

```bash
npm install @ryuchi/bail
```

```bash
yarn add @ryuchi/bail
```

<br>

## ⚡ Quick Start

```js
import makeWASocket, { useMultiFileAuthState } from '@ryuchi/bail'

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info')

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    })

    sock.ev.on('creds.update', saveCreds)

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            console.log('Connection closed:', lastDisconnect?.error)
        } else if (connection === 'open') {
            console.log('✅ Connected To WhatsApp')
        }
    })

    sock.ev.on('messages.upsert', async (m) => {
        console.log(JSON.stringify(m, undefined, 2))
    })
}

startBot()
```

<br>

## 🔗 Pairing Code Login

Skip The QR Scan — Log In With A Pairing Code Shown Under
**Linked Devices** On Your Phone:

```js
if (!sock.authState?.creds?.registered) {
    const phoneNumber = '6281234567890' // your number, no + or spaces
    const code = await sock.requestPairingCode(phoneNumber)
    console.log('Pairing code:', code)
}
```

<br>

## 📁 Project Structure

```
lib/
├── Socket/       → Core WebSocket connection & event handling
├── Utils/        → Auth, crypto, message, and history utilities
├── WABinary/     → WhatsApp binary node encode/decode
├── WAM/          → WhatsApp analytics/metrics encoding
├── WAUSync/      → User sync protocols (status, devices, contacts...)
└── index.js      → Package entrypoint
```

<br>

## 🛠️ Scripts

| Command | Description |
|---|---|
| `yarn test` | Run The Test Suite |
| `yarn lint` | Lint The Codebase |
| `yarn build:tsc` | Compile TypeScript |
| `yarn build:docs` | Generate API Docs |

<br>

## ⚠️ Disclaimer

This Project Is Not Affiliated With, Endorsed By, Or Connected To WhatsApp Or
Meta In Any Way. Use It Responsibly And In Accordance With WhatsApp's Terms Of
Service — Automating Or Spamming User Accounts Can Result In A Ban.

<br>

## 🙏 Credits

- Built On Top Of [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)
- Maintained By **Zal Ryuichi** For The **Ryuichi Code** Ecosystem

<br>

## 📄 License

Released Under The [MIT License](LICENSE).

---

<div align="center">

Made With By <b>Ryuichi Code</b>

</div>
