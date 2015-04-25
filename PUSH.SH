#!/bin/sh
###########################
git fetch origin
git pull --rebase origin master

git add .
git commit -am "updated blog"
git push
###########################
echo Press Enter...
read