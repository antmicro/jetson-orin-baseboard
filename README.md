# Antmicro's Jetson Orin Baseboard

Copyright (c) 2022 [Antmicro](https://www.antmicro.com)

![Visualization](img/jetson-orin-baseboard-photo.png)

## Overview

This repository contains open hardware design files for a baseboard supporting the NVIDIA Jetson Orin SoMs. 
It was created by Antmicro, a custom hardware, software and AI engineering company and NVIDIA's Jetson ecosystem partner.
Antmicro's Jetson Orin Baseboard is a carrier board supporting NVIDIA Jetson Orin System-on-Module series. The board provides power to the SoM and exposes various interfaces.

## Key features

* Power over Ethernet
* Two USB PD ports
* DC Power connector
* MIPI CSI camera interfaces on 50pin connectors
* Micro HDMI connector
* USB-C 10 Gbps with USB PD and DP
* USB-C 10 Gbps
* USB-C UART with USB PD
* M.2 key M
* M.2 key E
* Ethernet with PoE
* Custom expansion connector with PCIe
* RTC battery backup

## Block diagram

![BlockDiagram](img/job-diagram.drawio.png)

## Repository structure

The main repository directory contains KiCad PCB project files, a LICENSE and a README.
The remaining files are stored in the following directories:

* ``lib`` - contains the component libraries
* ``img`` - contains graphics for this README
* ``doc`` - contains schematics in pdf form

## Licensing

This project is published under the [Apache-2.0](LICENSE) License.
