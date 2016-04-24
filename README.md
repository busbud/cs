# Busbud Counter-Strike

> A guide to setting up a successful Counter-Strike LAN party.

## Server

Assuming a Debian based server.

### Install [SteamCMD][steamcmd] dependencies

[steamcmd]: https://developer.valvesoftware.com/wiki/SteamCMD

```sh
apt-get update
apt-get install lib32gcc1 curl
```

### Clone this repository

```sh
git clone https://github.com/busbud/cs.git
```

### Add our scripts to your `PATH`

```sh
export PATH=$PWD/cs/bin:$PATH
```

And to have it permanent:

```sh
echo "export PATH=$PWD/cs/bin:\$PATH" >> ~/.profile
```

### Launch the server

Example to start an arms race.

```sh
csgo +game_type 1 +game_mode 0 +mapgroup mg_armsrace +map ar_shoots
```

Feel free to tweak the command to play [other modes][modes].

[modes]: https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Dedicated_Servers#Starting_the_Server

## Client

### Download the game

Download [Global Offensive][csgo] on Steam.

[csgo]: http://store.steampowered.com/app/730/

### Activate the console

Add `-console` in the game launch options in Steam (right click the
game, properties, launch options).

You'll need this for playing LAN.

### Join a server

Launch the game, and in the console, type:

```sh
connect HOST_IP
```

Where `HOST_IP` is the IP of the server.
