#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

echo "installing dependencies"
yarn

echo "running migrations"
yarn migration:run

echo "starting server"
yarn start:dev
