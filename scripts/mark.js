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

    // Updates the brain's knowledge.
//    function updateBrain(version) {
//        robot.brain.set('version', version);
//    }

    // Returns all boards.
//    function getBoards() {
//        return robot.brain.get('boards') || {};
//    }

    // Hear the command
//    robot.respond(/bible me [\\"\\'](.+)[\\"\\']$/i, function (msg) {
//        updateBrain(msg);
//        msg.send("Ok, from now on Bible Me will return: " + robot.brain.get('version');
//    });

robot.respond(/bible version ULB/i, function(res) {
  var version;
  version = "ULB"
    res.reply('Version set to ULB');
    return robot.brain.set('version', version);
});

robot.respond(/bible version UDB/i, function(res) {
  var version;
  version = "UDB"
    res.reply('Version set to UDB');
    return robot.brain.set('version', version);
});

robot.respond(/bible version/i, function(res) {
  var version;
  version = robot.brain.get('version')
    res.reply(version);
});

};
