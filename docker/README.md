# Docker Counter-Strike setup

* Dockerfile for [SteamCMD][steamcmd] friendly environment.
* Compose file to start the server.

[steamcmd]: https://developer.valvesoftware.com/wiki/SteamCMD

## Usage

```sh
docker build -t steamcmd .
docker-compose up
```

The first time, it will download SteamCMD and Counter-Strike Global
Offensive server. Then it will launch the server in arms race mode.

Feel free to tweak the launch command in `docker-compose.yml`, see
[other modes][modes].

[modes]: https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Dedicated_Servers#Starting_the_Server
