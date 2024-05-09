# Node.js Load Balancer

This is a Node.js-based load balancer project that implements round robin and least connections algorithms for distributing incoming requests among multiple backend servers.

## Features

- Load balancing using round robin algorithm.
- Load balancing using least connections algorithm.

## Prerequisites

- Node.js installed on your system.

## Installation

Install the dependencies:
    
    npm install  

## Configuration

1. Configure backend servers in the `config.json` file. Add the IP addresses and port numbers of your backend servers along with their respective timeouts (for least connections algorithm).

## Run


    node backend_server
    
    node server
    
    ./test.sh
