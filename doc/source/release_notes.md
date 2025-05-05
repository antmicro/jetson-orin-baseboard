# Revision changelog

This chapter provides a brief changelog along with comments and remarks specified for each board [release](https://github.com/antmicro/jetson-orin-baseboard/releases) defined in the GitHub repository.

## 1.3.4

Introduced design tweaks to the SoM power path switching under high loads.

Changelog:

* Added LED indicator for high power module detection
* Replaced `LM37100` load switch with `TPS259474`
* Replaced `FB1` with 0R to ensure the `SoM_VIN` rail stability under high load
* Trimmed power-up circuitry to make the SoM boot properly with input voltages >15V

## 1.3.0

Added support for so called [Super Mode](https://developer.nvidia.com/blog/nvidia-jetpack-6-2-brings-super-mode-to-nvidia-jetson-orin-nano-and-jetson-orin-nx-modules/) provided in the JetPack 6.x release.
Additionally this release introduced features that improve manufacturability and testability of the baseboard.

Changelog:

* Added support for Jetson Orin NX/Nano with Super update
  * Detection of the high power modules
  * Jetson Orin NX series modules (high power modules) are now powered directly from supply voltage
* Configuration of TPS65988 is now available via USB-C 3 Debug (J3)
* TAG Connect can be configured to access internal SPI and I2C buses
* Added more fiducials for calibrating pick and place machines
* Changed SPI MISO pull-up (R131) value to 10k
* Replaced DC/DC converters (U1, U40) to support input voltage up to 20V
  * Increased declared minimal input voltage to 8.4V
* Improved SoM_VIN decoupling
* Changed the arrangement of Test Points for easier access during In-Circuit Testing (ICT)
* Improved silkscreen markings
* Tweaked footprints of selected components to optimize the reflow-assembly yield

## 1.1.6

This is the first revision of the Jetson Orin Baseboard made commercially available.
