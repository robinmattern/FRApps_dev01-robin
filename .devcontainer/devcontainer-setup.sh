#!/bin/bash 

  cp .devcontainer/.profile.dev  /home/node/.profile
  source /home/node/.profile

  cd client1 
  npm install 
 
  mysql.server start