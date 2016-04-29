# Counter-Strike chat bot

* Bot for your company's chat.
* Fetch changelog and updates the server.

## Installation

```sh
npm install
npm install stdbot/flowdock # Choose your chat adapter

cp config.js.dist config.js
$EDITOR config.js # Tweak to use your adapter and settings
```

## Usage

```sh
bin/update-notifier
```

This bot will post the changelog since the last Friday if any (because
we play on Fridays), and update the server with a live progress in the
chat.
