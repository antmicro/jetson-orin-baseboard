# Revision changelog

Each release of the Antmicro Jetson Orin Baseboard comes with release notes. Release notes typically consist of changelog with respect to previous revision. The number of each subchapter corresponds with the revision tag on GitHub Repository.

Revisions:

* [Rev.1.3.4](#134)
* [Rev.1.3.0](#130)
* [Rev.1.1.6](#116---aug-7-2024)

## 1.3.4
Fixes known bugs and improves usefulness of the Jetson Orin Baseboard during high power modes.

**Changes:**

* Added LED indicator for high power module detection
* Replaced LM37100 load switch with TPS259474
* Replaced FB1 with 0R for SoM_VIN stability under high load
* Fixed power-up circuitry bug preventing module from powering down when >15V was applied on input


## 1.3.0
Adds support for Nvidia [Super Mode](https://developer.nvidia.com/blog/nvidia-jetpack-6-2-brings-super-mode-to-nvidia-jetson-orin-nano-and-jetson-orin-nx-modules/). Additionally, improves manufacturability and testability of the device.

**Changes:**

* Added support for Jetson Orin NX/Nano with Super update
  * Detection of the high power modules
  * Jetson Orin NX series modules (high power modules) are now powered directly from supply voltage
* Configuration of TPS65988 is now available via USB-C 3 Debug (J3)
* Tag Connect can be configured to access internal SPI and I2C buses
* Added fiducials for pick and place machines
* Changed SPI MISO pull-up (R131) value to 10k
* Replaced DC/DC converters (U1, U40) to support input voltage up to 20V
  * Increased declared minimal input voltage to 8.4V
* Improved SoM_VIN decoupling
* Changed Test Points positions for easier access
* Improved markings placement
* Updated components footprints after feedback from manufacturer


## 1.1.6 - Aug 7, 2024
First commercially available Antmicro Jetson Orin Baseboard revision. This project contains open hardware design files for a baseboard supporting NVIDIA Jetson Orin Nano and Jetson Orin NX System on Modules.

The key features of the design can be found in this [README](https://github.com/antmicro/jetson-orin-baseboard/tree/rev.1.1.6-ch?tab=readme-ov-file#key-features).