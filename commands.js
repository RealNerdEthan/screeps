//console command to create creeps
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Harvester1" );
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Upgrader1");
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Builder");
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Repairer");

//console commands to assign roles within the creep memory object
Game.creeps["Harvester"].memory.role = "harvester";
Game.creeps["Upgrader"].memory.role = "upgrader";
Game.creeps["Builder"].memory.role = "builder";
Game.creeps["Repairer"].memory.role = "repairer";

//Spawn a creep AND assign a role right away 
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Harvester", { memory: { role: "harvester" } } );
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Upgrader", { memory: { role: "upgrader" } } );
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Builder", { memory: { role: "builder" } } );
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Repairer", { memory: { role: "repairer" } } );

//Spawn a harvester with many more work parts
Game.spawns["Spawn1"].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], "HarvesterBig", {memory: {role: "harvester"}});

//Active safe mode to give yourself time to write better defence code (limited usage and last a few hours)(can attack enemies when we're in safe mode:
Game.spawns["Spawn1"].room.controller.activateSafeMode();

//Create constuction site (for a tower):
Game.spawns["Spawn1"].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

//Update the room's sign information
Game.creeps.Upgrader1.signController(Game.creeps.Upgrader1.room.controller, "github.com/realnerdethan");