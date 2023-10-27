import { program }  from "commander"
import { exec } from "child_process"
import chalk from "chalk"

program
  .name("raspi-control-cli")
  .description("Simple script to control your raspberry pi.")
  .version("0.1.0")

program.command("shutdown")
  .description("Shutdown the raspberry pi.")
  .action(async () => {
    console.log("Shutting down in 5 seconds ⚡!")
    await new Promise(r => setTimeout(r, 5000))
    exec("shutdown -h now")
  })

program.command("reboot")
  .description("Reboots the raspberry pi.")
  .action(async () => {
    console.log("Rebooting in 5 seconds ⚡!")
    await new Promise(r => setTimeout(r, 5000))
    exec("reboot")
  })

program.command("update")
  .description("Update the raspberry pi.")
  .action(async () => {
    console.log("Updating using apt 📥...")
    exec("apt update && apt upgrade -y", (error, stdout, stderr) => {
      if (error) {
        console.log("Update Error: " + String(error).trim())
      }
      if (stderr) {
          console.log("Update Stderr: " + String(stderr).trim())
      }
      console.log("Update Output: " + String(stdout).trim())
    })
  })

program.command("gpio")
  .description("Turns a gpio pin on or off.")
  .argument("<pin>", "The pin to control.")
  .argument("<state>", "Set to on for on and off for off state.")
  .action(async (pin, state) => {
    console.log("Turning pin " + pin + " " + state + " 📌.")
    exec("raspi-gpio set " + pin + " op")
    if (state == "on") {
      exec("raspi-gpio set " + pin + " dh")
    } else if ( state == "off") {
      exec("raspi-gpio set " + pin + " dl")
    }
  })

program.command("temp")
  .description("Displays raspberry's cpu temp.")
  .action(async () => {
    exec("vcgencmd measure_temp", (error, stdout, stderr) => {
      var temp = stdout.split("=")
      temp = temp[1]
      temp = String(temp).trim()
      console.log("Raspberry's Temperature 🌡️  : " + temp)
   })
  })

console.log(chalk.green("Welcome to Raspi Control Cli 🍇"))
program.parse()
