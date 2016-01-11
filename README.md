# Busbud Counter-Strike

> A guide to setting up a successful Counter-Strike LAN party.
>
> Tailored for [Global Offensive][csgo] on OS X.

[csgo]: http://store.steampowered.com/app/730/

## Activate the console

Add `-console` in the game launch options in Steam (right click the
game, properties, launch options).

You'll need this for playing LAN.

## Host a server

Get your thunderbolt ethernet IP using:

```sh
# Get the interface name
iface=$(networksetup -listallhardwareports | grep -A 1 'Thunderbolt Ethernet' | grep Device | cut -d' ' -f2)

# Get the IP for this interface
ipconfig getifaddr "$iface"
```

Then in the game console:

```sh
ip YOUR_IP
map MAP_NAME
```

## Join a server

Once someone's hosting, in the game console, type:

```sh
connect HOST_IP
```

## Game modes

### Arms race

To play an arms race, in the server console, type:

```sh
game_mode 0
game_type 1
```

Then change map for the change to take effect. Maps beginning with `ar_`
are best suited for arms race.
