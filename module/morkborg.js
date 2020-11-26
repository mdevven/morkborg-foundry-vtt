/**
 *
 */

import { MBActor } from "./actor.js";
import { MBActorSheet } from "./actor-sheet.js";
import { MBItem } from "./item.js";
import { MBItemSheet } from "./item-sheet.js";
import { createMorkBorgMacro } from "./macro.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
Hooks.once("init", async function() {
  console.log(`Initializing Mork Borg System`);

  CONFIG.Combat.initiative = {
    formula: "1d6",
    decimals: 2
  };

  game.morkborg = {
    MBActor,
    MBItem,
    createMorkBorgMacro
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = MBActor;  
  CONFIG.Item.entityClass = MBItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("morkborg", MBActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("morkborg", MBItemSheet, { makeDefault: true });

});