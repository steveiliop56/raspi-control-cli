## Raspi Control CLI 🍇

An extremely simple typescript project to do basic functions in your raspberry pi. 

**Warning ⚠️:** This is my first ever typescript project so the code may have some issues... Please open an issue for 
every bug that you encouter.

### Fucntions 

The raspi-control-cli has 5 simple functions that you can see bellow:

| Argument       | Options                                                                       | Function                    |
|----------------|-------------------------------------------------------------------------------|-----------------------------| 
| ```shutdown``` | None                                                                          | Shutdowns the raspberry pi. | 
| ```reboot```   | None                                                                          | Reboot the raspberry pi.    |
| ```update```   | None                                                                          | Updates and upgrades.       |
| ```gpio```     | State - required (Could be on or off), Pin - required(The gpio pin number)    | Turns a gpio pin on or off  |
| ```temp```     | None                                                                          | Displays the cpu temp.      |

### Running

To run the cli download the compiled on from the release or build it your self (See here: ). 

Then run it like this:

```bash
./raspi-control-cli
```

**Warning ⚠️:** For some functions (liek the update one) you may need to use ```sudo```

### Building

To build the cli yourself first install the requirements using this command:

```bash
npm install
```

Then you can build the cli using this command:

```bash
npm run release_cli```
```

You will see the built cli inside the ```dist/bin``` folder.