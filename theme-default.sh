#!/usr/bin/env bash
rm -rf ././../../myb-portal/src/main/webapp/static/*
cp ./dist/index.html ././../../myb-portal/src/main/webapp/mb-default.html
cp -R ./dist/static/ ././../../myb-portal/src/main/webapp/static/
