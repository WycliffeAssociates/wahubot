// Description:
//   Set the version of Bible you want Bible Me to return
//
// Dependencies:
//   None
//
// Configuration:
//
// Commands:
//   bible me version - Return current version
//   bible me [ULB or UDB] - Set current version
//
//
// Author:
//   WycliffeAssociates

module.exports = function (robot) {
  robot.respond(/bible version *(.*)/i, function(res) {
  var version
  version = res.match[1]
  if (version == undefined) {
      version = robot.brain.get('version')
      res.reply('Using ' + version);
  } else if ((version == 'UDB') || (version == 'ULB')) {
      robot.brain.set('version', version);
      res.reply('Version set to ' + version);
  } else {
      res.reply('Sorry, ' + version + 'is not available')
  }
    
});


};
