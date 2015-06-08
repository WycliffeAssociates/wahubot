#@echo off

export HEROKU_URL= http://wahubot.herokuapp.com
export HUBOT_SLACK_TOKEN=xoxb-4889337235-QpajSFx0Qaq1pcKyRjThvO6X
export HUBOT_TRELLO_BOARD=w16lTmHR
export HUBOT_TRELLO_KEY=2be4699414cd27b1f09bc3f59f0ee0cd
export HUBOT_TRELLO_TOKEN=c0412a6c4d060a62524b90f6c6822b52bb06274819f1599b978098f0eb7c31cc


npm install && node_modules\.bin\hubot.cmd --name "wahubot" %* 
