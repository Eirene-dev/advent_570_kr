/* mainfunctions570 - This implements the main Colossal Cave 570 Game code.
   ________________________________________________________________________
	
	Advent570  - An extension of the advent350 port.
	             All credit to the originators Will Crowther and Don Woods.
	             As much original functionality as possible has been
	             retained although the code has been restructured to remove 
	             all GO TO statements.
	             Game Save / Load options have been added.
	             Upper case comments are from the original. 
 */

//======================================================================
//   This is the main method of Advent. It parses an input command
//   and processes it.
//======================================================================
function processCommand(text) {
  parseInput(text);

  if (!gameOver) {
    if (askingYesNo > 0) {
      processYesNo();
    } else {
      processInput();

      if (normalInput) processEvents();

      setStatus();

      setInventory();

      if (mapImagesChanged)
        showMapImages(loc, showPirate, dloc[6], prop[CHEST]);
    }
  }
}

//======================================================================
//  Process the keyed input.
//======================================================================
function processInput() {
  describeLoc = false;
  normalInput = false;
  verb = 0;
  obj = 0;

  var wd1Type = checkWord(1, wd1);
  var wd2Type = checkWord(2, wd2);

  if (wd1Type == "Spy") {
    // Show Pirate on map.
    showPirate = !showPirate;
    mapImagesChanged = true;
    return;
  }

  if (wd1 == "FLY") {
    // Wizard flight
    loc = parseInt(wd2.trim());
    describeLocation();
    return;
  }

  if (wd1Type == "Load") {
    // Load game
    load();
    return;
  }

  if (wd1Type == "Save") {
    // Save game
    save();
    return;
  }

  if (wd1Type == "Delete") {
    // Delete Save game
    deleteSave();
    return;
  }

  if (wd1 == "PUSH") {
    // Push panel buttons - get around the numbers being unknown words
    ret = processVerb(i1, fullWd1);
    return;
  }

  if (wd1Type == "Bad" || wd2Type == "Bad") {
    if (pct(20)) rSpeak(61, BLACK);
    // What?
    else if (pct(20)) rSpeak(13, BLACK);
    // I don't understand that!
    else rSpeak(60, BLACK); // I don't know that word.
    return;
  }

  if (wd1Type == "Motion" && wd2Type == "Object") {
    if (processObject(i2, fullWd2)) processMove(i1 % 1000);
    return;
  }

  if (wd1Type == "Motion") {
    processMove(i1 % 1000);
    return;
  }

  if (wd1Type == "Verb" && wd2Type == "Motion") {
    if (processVerb(i1, fullWd1)) processMove(i2 % 1000);
    return;
  }

  if (wd1Type == "Verb" && wd2Type == "Object") {
    if (processObject(i2, fullWd2)) ret = processVerb(i1, fullWd1);
    return;
  }

  if (wd1Type == "Verb" && wd2Type == "Verb") {
    rSpeak(61, BLACK); /* What? */
    return;
  }

  if (wd1Type == "Verb") {
    ret = processVerb(i1, fullWd1);
    return;
  }

  if (wd1Type == "Object" && wd2Type == "Verb") {
    if (processObject(i1, fullWd1)) processVerb(i2, fullWd2);
    return;
  }

  if (wd1Type == "Object" && wd2Type == "Object") {
    if (i1 == 1000 + WATER || i1 == 1000 + OIL) {
      if (processObject(i1, fullWd1))
        ret = processVerb(vocab("POUR", -1), "POUR");
      return;
    } else {
      rSpeak(61, BLACK); // What?
      return;
    }
  }

  if (wd1Type == "Object") {
    ret = processObject(i1, fullWd1);
    return;
  }

  if (i1 < 4000) {
    rSpeak(i1 % 1000, BLACK);
    return;
  }
  bug(22);
}

/*______________________________________________________________________
   FIGURE OUT THE NEW LOCATION

   GIVEN THE CURRENT LOCATION IN "LOC", AND A MOTION VERB
   NUMBER IN "MOVEVERB", PUT THE NEW LOCATION IN "NEWLOC".  THE
   CURRENT LOC IS SAVED IN "OLDLOC" IN CASE HE WANTS TO
   RETREAT.  THE CURRENT OLDLOC IS SAVED IN OLDLC2, IN CASE
   HE DIES.  (IF HE DOES, NEWLOC WILL BE LIMBO, AND OLDLOC
   WILL BE WHAT KILLED HIM, SO WE NEED OLDLC2, WHICH IS THE
   LAST PLACE HE WAS SAFE.)
  ______________________________________________________________________*/
function processMove(pVerb) {
  moveVerb = pVerb;
  normalInput = true;
  describeLoc = true;
  currKK = key[loc];

  if (wd1 == "WEST") {
    CNTWEST++;
    if (CNTWEST == 10)
      // If you prefer, simply type w rather than west.
      rSpeak(17, BLACK);
  } else if (moveVerb == ENTER && (wd2 == "STREA" || wd2 == "WATER")) {
    if (liqLoc(loc) == WATER) rSpeak(70, BLACK);
    // Your feet are now wet.
    else rSpeak(43, BLACK); // Where?
    describeLoc = false;
    return;
  } else if (moveVerb == ENTER && !wd2 == "") {
    // GET SECOND WORD FOR ANALYSIS.
    wd1 = wd2;
    fullWd1 = fullWd2;
    wd2 = "";
  }

  if (currKK == 0) bug(26);
  // LOCATION HAS NO TRAVEL ENTRIES
  else if (wd1 == "LOOK") look();
  else if (wd1 == "CAVE") cave();
  else if (wd1 == "BACK") {
    if (goBack()) loc = getNewLocation();
  } else loc = getNewLocation();
}

/*______________________________________________________________________
    HANDLE "GO BACK".  LOOK FOR VERB WHICH GOES FROM LOC TO
    OLDLOC, OR TO OLDLC2 IF OLDLOC HAS FORCED-MOTION.  K2
    SAVES ENTRY -> FORCED LOC -> PREVIOUS LOC.
______________________________________________________________________*/
function goBack() {
  backloc = oldloc;
  if (forced(backloc)) backloc = oldlc2;

  var LL = 0;
  var K2 = 0;
  if (backloc == loc) {
    /* Sorry, but I no longer seem to remember how it was you got here.*/
    rSpeak(91, BLACK);
    return false;
  }

  for (KK = currKK; KK <= TRVSIZ; KK++) {
    if (travel[KK] < 0) break;
    LL = Math.floor(Math.abs(travel[KK]) / 1000) % 1000;
    if (LL == backloc) break;
    if (LL > 300) continue;

    var J = key[LL];
    if (forced(LL) && Math.floor(Math.abs(travel[J] / 1000)) % 1000 == backloc)
      K2 = KK;
  }

  if (LL != backloc) {
    KK = K2;
    if (KK == 0) {
      rSpeak(140, BLACK); /* You can't get there from here.*/
      return false;
    }
  }

  moveVerb = Math.abs(travel[KK]) % 1000;
  currKK = key[loc];

  return true;
}

/*______________________________________________________________________
   LOOK.  CAN'T GIVE MORE DETAIL.  PRETEND IT WASN'T DARK
   (THOUGH IT MAY "NOW" BE DARK) SO HE WON'T FALL INTO A PIT
   WHILE STARING INTO THE GLOOM.
  ______________________________________________________________________*/
function look() {
  //if (DETAIL < 3)
  /* Sorry, but I am not allowed to give more detail.  I will repeat the
 		   long description of your location.*/
  //	rSpeak(15, BLACK);

  DETAIL++;
  WZDARK = false;
  abb[loc] = 0;
}

//______________________________________________________________________
//   CAVE.  DIFFERENT MESSAGES DEPENDING ON WHETHER ABOVE GROUND.
//______________________________________________________________________
function cave() {
  if (loc < 8)
    // I don't know where the cave is, but hereabouts no stream can run on
    // the surface for long.  I would try the stream.
    rSpeak(57, BLACK);
  else rSpeak(58, BLACK); // I need more detailed instructions to do that.
}

/*______________________________________________________________________
	Get new location.

	Example of conditional location handling:
	Travel Data:
	   141     341702  30        <= contains the test and error msg if rejected                                   
       141     142     30        <= contains the next loc if accepted                                     
       142     141     29      

	141 (Well) has conditional next loc 341702 for movement 30 (Down).

	nn is set to 341 so 300 < nn <= 400 making the check prop(mm) != 0 with mm set to 41 (Well).  
	If the conditional is NOT met the next Travel line("142     141     29") will be used and the next location will
	be 142 (Bottom of Well) otherwise movement is blocked and a rText message (702 - 500 = 202) 
	is displayed ("202     The well is full of water!")
	
	Note on part where num = 702:
		If 300 < num <= 500 Do special motion.
		If 500 < num        Do rejection message num - 500
		Else use num as nextloc.
	
  ______________________________________________________________________*/
function getNewLocation() {
  var goodMove = false;
  oldlc2 = oldloc;
  oldloc = loc;

  for (KK = currKK; KK <= TRVSIZ; KK++) {
    LL = Math.abs(travel[KK]); // Note - last TRAVEL entry for each loc is -ve

    goodMove = LL % 1000 == 1 || LL % 1000 == moveVerb; // remainders

    if (travel[KK] < 0) break;
    if (goodMove) break;
  }

  if (!goodMove) {
    rSpeak(badMove(), BLACK);
    return loc;
  }

  LL = Math.floor(LL / 1000);

  while (true) {
    var nn = Math.floor(LL / 1000);
    var mm = nn % 100; // remainder

    //console.log("LL "+LL+" nn "+nn+" mm "+mm+" prop["+mm+"] "+prop[mm]);
    //console.log("(toting(nn - 100)) = "+(toting(nn - 100)));

    // Breaks below mean process that map entry (often a reject message or special move).
    // Otherwise the next map location entry is looked at.
    if (nn == 0) break;
    else if (nn <= 100) {
      if (pct(nn)) break;
    } else if (nn <= 200) {
      if (toting(nn - 100)) break;
    } // Toting non-treasures
    else if (nn <= 300) {
      if (toting(nn - 100)) break;
    } // Toting treasures
    else if (nn <= 400) {
      if (prop[mm] != 0) break;
    } else if (nn <= 500) {
      if (prop[mm] != 1) break;
    } else if (nn <= 600) {
      if (prop[mm] != 2) break;
    } else if (nn <= 700) {
      if (prop[mm] != 3) break;
    } else if (nn <= 800) {
      if (prop[mm] != 4) break;
    } else if (nn <= 900) {
      if (prop[mm] != 5) break;
    } else if (toting(nn - 900) || at(nn - 900)) break;

    nextloc = nextLocation(LL);

    LL = nextloc;
  } // while

  nextloc = Math.floor(LL % 1000); // remainder

  //console.log("newloc LL "+LL+" next "+nextloc);
  if (nextloc > 300) {
    if (nextloc <= 500) {
      specialMotions();
    } else {
      rSpeak(nextloc - 500, BLACK);
      nextloc = loc;
    }
  }

  //______________________________________________________________________
  //   SEE IF A DWARF HAS SEEN HIM AND HAS COME FROM WHERE HE
  //   WANTS TO GO.  IF SO, THE DWARF'S BLOCKING HIS WAY.  IF
  //   COMING FROM PLACE FORBIDDEN TO PIRATE (DWARVES ROOTED IN
  //   PLACE) LET HIM GET OUT (AND ATTACKED).
  //______________________________________________________________________
  if (nextloc != loc && !forced(loc) && !bitSetCondl(loc, 3)) {
    for (var ii = 1; ii <= 5; ii++)
      if (odloc[ii] == nextloc && dseen[ii]) {
        rSpeak(2, RED); // A little dwarf with a big knife blocks your way.
        return loc;
      }
  }

  if (CLOSNG && nextloc < 9) {
    //  CAN'T LEAVE CAVE ONCE IT'S CLOSING (EXCEPT BY MAIN OFFICE).

    // A mysterious recorded voice groans into life and announces:
    // "This exit is closed.  Please leave via main office."
    rSpeak(130, RED);

    if (!PANIC) CLOCK2 = 15;
    PANIC = true;

    return loc;
  }

  if (giantBlocking(loc, nextloc)) return loc; // Path blocked by giant

  //console.log("Return nextloc "+nextloc);
  return nextloc;
}

/*______________________________________________________________________
   NON-APPLICABLE MOTION.  VARIOUS MESSAGES DEPENDING ON WORD GIVEN. 
  ______________________________________________________________________*/
function badMove() {
  if ((moveVerb >= 43 && moveVerb <= 50) || moveVerb == 29 || moveVerb == 30)
    /* There is no way to go that direction.*/
    return 9;

  if (moveVerb == 7 || moveVerb == 36 || moveVerb == 37)
    /* I am unsure how you are facing.  Use compass points or nearby objects*/
    return 10;

  if (moveVerb == 11 || moveVerb == 19)
    /* I don't know in from out here.  Use compass points or name something
     	   in the general direction you want to go.*/
    return 11;

  if (verb == FIND || verb == INVENT)
    /* I can only tell you what you see as you move about and manipulate
     	   things.  I cannot tell you where remote things are.*/
    return 59;

  if (moveVerb == 62 || moveVerb == 65)
    /* Nothing happens.*/
    return 42;

  if (moveVerb == 17)
    /* Which way?*/
    return 80;

  /* I don't know how to apply that word here.*/
  return 12;
}

/*______________________________________________________________________
   SPECIAL MOTIONS COME HERE.
  ______________________________________________________________________*/
function specialMotions() {
  if (nextloc == 301) {
    /*____________________________________________________________________
     	  TRAVEL 301.  PLOVER-ALCOVE PASSAGE.  CAN CARRY ONLY
     	  EMERALD.  NOTE:  TRAVEL TABLE MUST INCLUDE "USELESS"
     	  ENTRIES GOING THROUGH PASSAGE, WHICH CAN NEVER BE USED
     	  FOR ACTUAL MOTION, BUT CAN BE SPOTTED BY "GO BACK".
    	____________________________________________________________________*/
    nextloc = 199 - loc;
    if (HOLDNG > 0 && (HOLDNG > 1 || !toting(EMRALD))) {
      nextloc = loc;
      /* Something you're carrying won't fit through the tunnel with you.
            You'd best take inventory and drop something.*/

      rSpeak(117, BLACK);
    }
    return;
  }

  if (nextloc == 302) {
    /*______________________________________________________________________
     	  TRAVEL 302.  PLOVER TRANSPORT.  DROP THE EMERALD (ONLY
     	  USE SPECIAL TRAVEL IF TOTING IT), SO HE'S FORCED TO USE
     	  THE PLOVER-PASSAGE TO GET IT OUT.  HAVING DROPPED IT, GO
     	  BACK AND PRETEND HE WASN'T CARRYING IT AFTER ALL.
    	______________________________________________________________________*/
    drop(EMRALD, loc);

    nextloc = nextLocation(LL);
    return;
  }

  if (nextloc == 303) {
    /*______________________________________________________________________
     	  TRAVEL 303.  TROLL BRIDGE.  MUST BE DONE ONLY AS SPECIAL
     	  MOTION SO THAT DWARVES WON'T WANDER ACROSS AND ENCOUNTER
     	  THE BEAR.  (THEY WON'T FOLLOW THE PLAYER THERE BECAUSE
     	  THAT REGION IS FORBIDDEN TO THE PIRATE.) IF
     	  PROP(TROLL)=1, HE'S CROSSED SINCE PAYING, SO STEP OUT AND
     	  BLOCK HIM.  (STANDARD TRAVEL ENTRIES CHECK FOR
     	  PROP(TROLL)=0.) SPECIAL STUFF FOR BEAR.
    	______________________________________________________________________*/
    if (prop[TROLL] == 1) {
      // The troll steps out from beneath the bridge and blocks your way.
      pSpeak(TROLL, 1, BLACK);
      prop[TROLL] = 0;
      move(TROLL2, 0);
      move(TROLL2 + 200, 0);
      move(TROLL, plac[TROLL]);
      move(TROLL + 200, fixd[TROLL]);
      juggle(CHASM);
      nextloc = loc;
      return;
    } else {
      nextloc = plac[TROLL] + fixd[TROLL] - loc;
      if (prop[TROLL] == 0) prop[TROLL] = 1;
      if (!toting(BEAR)) return;
      /* Just as you reach the other side, the bridge buckles beneath the
     		  weight of the bear, which was still following you around.  You
     		  scrabble desperately for support, but as the bridge collapses you
     		  stumble back and fall into the chasm. */

      rSpeak(162, BLACK);
      prop[CHASM] = 1;
      prop[TROLL] = 2;
      drop(BEAR, nextloc);
      fixed[BEAR] = -1;
      prop[BEAR] = 3;
      if (prop[SPICES] < 0) TALLY2 = TALLY2 + 1; // Lost spices
      oldlc2 = nextloc;

      deadJim();
      return;
    }
  }

  if (nextloc == 304) {
    /*______________________________________________________________________
     	  TRAVEL 304.  When he climbs up the beanstalk for the first time 
     	  he knocks a leaf loose.
    	______________________________________________________________________*/
    drop(LEAF, loc);
    prop[LEAF] = 1;

    rSpeak(
      211,
      BLACK
    ); /* You inadvertently dislodge a leaf as you grip the stalk.    */

    nextloc = nextLocation(LL);
    return;
  }

  if (nextloc == 305) {
    /*______________________________________________________________________
     	  TRAVEL 305.  When he enters the pebble pit does he get killed by the 
     	  beetles (if they are alive and he's not carrying the scarab).
    	______________________________________________________________________*/
    if (prop[BEETLE] == 0) {
      // Angry beetles

      rSpeak(256, BLACK);
      oldlc2 = nextloc;
      deadJim();
      return;
    }
    nextloc = nextLocation(LL);
    return;
  }

  if (nextloc == 306) {
    /*______________________________________________________________________
     	  TRAVEL 306.  Implements "There is no way to go in that direction" as  
     	  a location to make things easier. Stays at original location.
		  ______________________________________________________________________*/
    rSpeak(9, BLACK); /* There is no way to go in that direction. */
    nextloc = loc;
    return;
  }

  if (nextloc == 307) {
    /*______________________________________________________________________
     	  TRAVEL 307.  Pyramid door opens and closes behind you.
		  ______________________________________________________________________*/
    /* The scarab shivers in your hands as a low doorway appears in the east wall allowing
           you passage. The door disappears as you pass through. */
    rSpeak(283, BLACK);
    nextloc = 156;
    return;
  }
  bug(20);
}

/*______________________________________________________________________
   The giant blocks movements past him while in and around his domain.
  ______________________________________________________________________*/
function giantBlocking(ploc, pnloc) {
  if (giantDead || !giantChasing) return false;

  if (ploc == pnloc) return false;

  if ((ploc == 88 && pnloc == 92) || (ploc == 94 && pnloc == 92)) {
    // Don't let him enter domain.
    rSpeak(226, BLACK); /* The giant blocks your path. */
    return true;
  }

  if (!(inGiantDomain(ploc) || ploc == 88 || ploc == 94 || ploc == 95))
    return false;

  if (pnloc == ogiantloc) {
    // Giant won't let him past.
    rSpeak(226, BLACK); /* The giant blocks your path. */
    return true;
  }

  return false;
}

/*______________________________________________________________________
   ANALYSE AN OBJECT WORD.  SEE IF THE THING IS HERE,
   WHETHER WE'VE GOT A VERB YET, AND SO ON.  OBJECT MUST BE
   HERE UNLESS VERB IS "FIND" OR "INVENT(ORY)" (AND NO NEW
   VERB YET TO BE ANALYSED).  WATER AND OIL ARE ALSO FUNNY,
   SINCE THEY ARE NEVER ACTUALLY DROPPED AT ANY LOCATION,
   BUT MIGHT BE HERE INSIDE THE BOTTLE OR AS A FEATURE OF
   THE LOCATION.
  ______________________________________________________________________*/
function processObject(parmI, parmObj) {
  normalInput = true;
  obj = parmI % 1000;
  objWd = parmObj;

  if (obj == MESSAG && loc == 158) return true;

  if (fixed[obj] == loc || here(obj)) {
  } // Object is in the room
  else if (obj == GRATE && (loc == 1 || loc == 4 || loc == 7)) {
    processMove(DPRSSN);
    return true;
  } else if (obj == GRATE && loc > 9 && loc < 15) {
    processMove(ENTRNC);
    return true;
  } else if (obj == DWARF && loc == 158) {
  } // Dwarves in break room
  else if (
    obj == DWARF &&
    DFLAG >= 2 &&
    (dloc[1] == loc ||
      dloc[2] == loc ||
      dloc[3] == loc ||
      dloc[4] == loc ||
      dloc[5] == loc)
  ) {
  } else if ((liq() == obj && here(BOTTLE)) || obj == liqLoc(loc)) {
  } else if (obj == PLANT && at(PLANT2) && prop[PLANT2] != 0) obj = PLANT2;
  else if (obj == KNIFE && KNFLOC == loc) {
    KNFLOC = -1;
    /* The dwarves' knives vanish as they strike the walls of the cave.*/
    rSpeak(116, BLACK);
  } else if (obj == ROD && here(ROD2)) obj = ROD2;
  else if (obj == POLE && prop[RIFT] == 1 && (loc == 154 || loc == 155)) {
  } else if ((verb == FIND || verb == INVENT) && objWd == "") {
  } else {
    sayIt("I see no " + objWd + " here!", BLACK);
    sayIt("여기에서 " + objWd + "가 보이지 않습니다!", BLACK);
    return false;
  }

  if (wd2 == "") {
    sayIt("What do you want to do with the " + objWd + "?", BLACK);
    sayIt("당신은 " + objWd + "에 대해 어떤 행동을 하길 원하십니까?", BLACK);
    normalInput = false;
    return false;
  }

  return true;
}

/*______________________________________________________________________
    ANALYSE A VERB.  REMEMBER WHAT IT WAS, GO BACK FOR OBJECT IF SECOND
    WORD UNLESS VERB IS "SAY", WHICH SNARFS ARBITRARY SECOND WORD.
______________________________________________________________________*/
function processVerb(verbI, parmVerb) {
  var retc = false;
  normalInput = true;
  verb = verbI % 1000;
  verbWd = parmVerb;

  /*______________________________________________________________________
	    ANALYSE A TRANSITIVE/INTRANSITIVE VERB.
	  ______________________________________________________________________*/

  switch (verb) {
    case 1:
      retc = verbTake();
      break; /* TAKE */
    case 2:
      retc = verbDrop();
      break; /* DROP */
    case 3:
      retc = verbSay();
      break; /* SAY  */
    case 4:
      retc = verbOpen();
      break; /* OPEN */
    case 5:
      retc = verbNothing();
      break; /* NOTH */
    case 6:
      retc = verbOpen();
      break; /* LOCK */
    case 7:
      retc = verbOn();
      break; /* ON   */
    case 8:
      retc = verbOff();
      break; /* OFF  */
    case 9:
      retc = verbWave();
      break; /* WAVE */
    case 10:
      retc = verbCalm();
      break; /* CALM */
    case 11:
      retc = verbWalk();
      break; /* WALK */
    case 12:
      retc = verbAttack();
      break; /* KILL */
    case 13:
      retc = verbPour();
      break; /* POUR */
    case 14:
      retc = verbEat();
      break; /* EAT  */
    case 15:
      retc = verbDrink();
      break; /* DRNK */
    case 16:
      retc = verbRub();
      break; /* RUB  */
    case 17:
      retc = verbThrow();
      break; /* TOSS */
    case 18:
      retc = verbQuit();
      break; /* QUIT */
    case 19:
      retc = verbFind();
      break; /* FIND */
    case 20:
      retc = verbInvent();
      break; /* INVN */
    case 21:
      retc = verbFeed();
      break; /* FEED */
    case 22:
      retc = verbFill();
      break; /* FILL */
    case 23:
      retc = verbBlast();
      break; /* BLST */
    case 24:
      retc = verbScore();
      break; /* SCOR */
    case 25:
      retc = verbFoo();
      break; /* FOO  */
    case 26:
      retc = verbBrief();
      break; /* BRF  */
    case 27:
      retc = verbRead();
      break; /* READ */
    case 28:
      retc = verbBreak();
      break; /* BREK */
    case 29:
      retc = verbWake();
      break; /* WAKE */
    case 30:
      retc = verbSuspend();
      break; /* SUSP */
    case 31:
      retc = verbHours();
      break; /* HOUR */
    case 32:
      retc = verbSetLog();
      break; /* LOG  */
    case 33:
      retc = verbDig();
      break; /* DIG  */
    case 34:
      retc = verbTurn();
      break; /* TURN */
    case 35:
      retc = verbInstr();
      break; /* INSTR*/
    case 36:
      retc = verbWhack();
      break; /* WHACK*/
    case 37:
      retc = verbPush();
      break; /* PUSH */
    case 38:
      retc = verbMellon();
      break; /* MELLON*/

    default:
      bug(24);
  }

  return retc;
}

/***********************************************************************
ROUTINES FOR PERFORMING THE VARIOUS ACTION VERBS

***********************************************************************/

//______________________________________________________________________
//   Say default for the Verb
//______________________________________________________________________
function vDefault() {
  rSpeak(actspk[verb], BLACK);

  return false;
}

//______________________________________________________________________
//	No verb.
//______________________________________________________________________
function verbNothing() {
  rSpeak(54, BLACK); /* Ok */

  return false;
}

//______________________________________________________________________
//   CARRY, NO OBJECT GIVEN YET.  OK IF ONLY ONE OBJECT PRESENT.
//______________________________________________________________________
function verbTake() {
  if (obj == 0) {
    /* Intransitive */
    if (atlocLast[loc] == 0 || linkBak[atlocLast[loc]] != 0) return vWhat();

    for (var ii = 1; ii <= 5; ii++) {
      if (dloc[ii] == loc && DFLAG >= 2) return vWhat();
    }
    obj = atlocLast[loc];
  }

  return verbTakeObj();
}

/*______________________________________________________________________
   CARRY AN OBJECT.  SPECIAL CASES FOR BIRD AND CAGE (IF
   BIRD IN CAGE, CAN'T TAKE ONE WITHOUT THE OTHER.  LIQUIDS
   ALSO SPECIAL, SINCE THEY DEPEND ON STATUS OF BOTTLE.
   ALSO VARIOUS SIDE EFFECTS, ETC.
  ______________________________________________________________________*/
function verbTakeObj() {
  if (obj == MESSAG && loc == 158) {
    /* A sharp look from the nearest dwarf makes you think twice about messing up the
           staff message board. */
    rSpeak(267, BLACK);
    return false;
  }

  if (toting(obj)) {
    rSpeak(24, BLACK); /* You are already carrying it! */
    return false;
  }

  if (obj == PEBBLE) {
    rSpeak(
      255,
      BLACK
    ); /* You feel a sharp sting, drop the pebble and examine your bloodied hand.  */
    return false;
  }

  if (obj == BEETLE) {
    rSpeak(209, BLACK); /* Yech! No thanks. */
    return false;
  }

  if (obj == WORM) {
    rSpeak(209, BLACK); /* Yech! No thanks. */
    return false;
  }

  if (obj == WEB) {
    rSpeak(246, BLACK); /* Ewww! No thanks. */
    return false;
  }

  if (obj == PLANT && prop[PLANT] <= 0) {
    rSpeak(
      115,
      BLACK
    ); /* The plant has exceptionally deep roots and cannot be pulled free.*/
    return false;
  }

  if (obj == BEAR && prop[BEAR] == 1) {
    rSpeak(169, BLACK); /* The bear is still chained to the wall.*/
    return false;
  }

  if (obj == CHAIN && prop[CHAIN] != 0) {
    rSpeak(170, BLACK); /* The chain is still locked.*/
    return false;
  }

  if (obj == RACK) {
    rSpeak(
      210,
      BLACK
    ); /* The stand is securely bolted to the ground to foil vandals (like you). */
    return false;
  }

  if (fixed[obj] != 0) {
    rSpeak(25, BLACK); /* You can't be serious! */
    return false;
  }

  if (obj == WATER || obj == OIL) {
    if (here(BOTTLE) && liq() == obj) obj = BOTTLE;
    else {
      if (toting(BOTTLE))
        if (prop[BOTTLE] == 1) {
          /* empty */
          obj = BOTTLE;
          return verbFill();
        } else rSpeak(105, BLACK);
      /* Your bottle is already full.*/ else
        rSpeak(104, BLACK); /* You have nothing in which to carry it. */
      return false;
    }
  }

  if (obj == NECKL && prop[RABBI] == 0) {
    rSpeak(
      237,
      BLACK
    ); /* The rabbit (and hence the necklace) is beyond reach behind a forest of sharp spikes. */
    return false;
  }

  if (obj == RABBI && prop[RABBI] == 0) {
    rSpeak(
      234,
      BLACK
    ); /* The rabbit is beyond reach behind a forest of sharp spikes. */
    return false;
  }

  if (obj == RABBI && prop[RABBI] == 1) {
    prop[RABBI] = 0;
    /* The rabbit is much too quick. It darts back into a particularly dense cluster 
		   of spikes and eyes you warily.  */

    rSpeak(242, BLACK);
    return false;
  }

  /* __________________________________________________________________________________________________________*/

  if (HOLDNG >= 7) {
    /* You can't carry anything more. You'll have to drop something first. */
    rSpeak(92, BLACK);
    return false;
  }

  if (obj == BIRD && prop[BIRD] == 0 && toting(ROD)) {
    /* The bird was unafraid when you entered, but as you approach it becomes 
     	   disturbed and you cannot catch it. */
    rSpeak(26, BLACK);
    return false;
  }

  if (obj == BIRD && prop[BIRD] == 0 && !toting(CAGE)) {
    /* You can catch the bird, but you cannot carry it. */
    rSpeak(27, BLACK);
    return false;
  }

  /* Otherwise it's good to go ... */
  if (obj == WATER || obj == OIL)
    if (here(BOTTLE) && liq() == obj) obj = BOTTLE;

  if (obj == BIRD && prop[BIRD] == 0) prop[BIRD] = 1;

  if ((obj == BIRD || obj == CAGE) && prop[BIRD] != 0)
    carry(BIRD + CAGE - obj, loc);

  if (obj == SCARAB) {
    move(BEETLE, 153);
    move(PEBBLE, 0);
    if (prop[PEBBLE] == 1) {
      // Water-covered pebbles
      prop[BEETLE] = 1; // Drowned beetles
    } else {
      prop[BEETLE] = 0; // Angry beetles
      prop[CHITT1] = 1;
      prop[CHITT2] = 1;
    }
  }

  if (obj == SIGN) prop[SIGN] = 0;

  if (obj == CORKS) prop[CORKS] = 1;

  if (obj == RUBY) {
    if (prop[RUBY] < 0) {
      /* Still in ceiling */
      /* Your fingers push past the worms and web and close around a smooth star-shaped rock. */
      rSpeak(233, BLACK);
    }
    prop[RUBY] = 1;
  }

  if (obj == CORK) {
    if (!toting(CORKS) && !here(CORKS)) {
      /* The plug is firmly set into the floor and connot be removed with your hands. */
      rSpeak(203, BLACK);
    } else {
      prop[CORK] = 1;
      prop[WELL] = 1;
      prop[RESER] = 1; // Sets reservoir pspeak for water level drop.
      clockDucky = 4; // Set timer for rubber duck to reach the well.
      /*  Water surges up through the hole, rapidly rising past your waist.
				You are forced to climb out of the well as fast as you can!   */
      pSpeak(WELL, 2, BLACK);
      carry(obj, loc);

      loc = 141;
      describeLocation();
    }
    return false;
  }

  if (obj == MAGZIN) {
    prop[RACK] = 0;
    prop[MAGZIN] = 0;
  }

  if (obj == DUCKY)
    if (prop[DUCKY] == 0) {
      /* The rubber duck is well out of reach. */
      rSpeak(204, BLACK);
      return false;
    } else {
      prop[DUCKY] = 2; /* Duck is no longer in the well. */
    }

  if (obj == NECKL && prop[RABBI] == 1) {
    prop[NECKL] = 2;
    prop[RABBI] = 2;
    move(RABBI, 0);
    carry(obj, loc);
    /* You deftly snatch the necklace from the distracted rabbit.
		   Startled, the rabbit darts back into the spikes and disappears. */
    rSpeak(235, BLACK);
    return false;
  }

  if (obj == POLE && loc == 155 && prop[RIFT] == 1) {
    rSpeak(259, BLACK); /* The pole is too heavy to lift over the crevice. */
    return false;
  }

  if (obj == POLE && loc == 154 && prop[RIFT] == 1) {
    prop[RIFT] = 0;
    obj = ROD;
    /* You manage to move the pole out of the channel and it instantly shrinks back to ";
		   its original 3-foot form.*/

    rSpeak(260, BLACK);
  }

  if (obj == PYRAM && loc == 156 && prop[PEDES] > 1) {
    rSpeak(
      262,
      BLACK
    ); /* The pyramid appears to be screwed into the pedestal face. It can't be lifted. */
    return false;
  }

  if (obj == PYRAM && loc == 159) {
    // Pedestal 2
    prop[PYRAM] = 0; // Pyramid is off pedestal
    prop[PEDE2] = 0; // Pyramid pedestal 2

    if (!toting[SCARAB]) {
      carry(PYRAM, loc);
      prop[PDOOR] = 0; // Pyramid door disappears
      /* There is a low rumble and the eastern doorway disappears leaving a small bas-relief 
               carving of a scarab in the smooth rock face. */
      rSpeak(282, BLACK);
      return false;
    }
  }

  if (obj == HEART && loc == 160 && prop[HEART] == 1) {
    // Heart is on the scale
    prop[HEART] = 0; // Heart is off the scale
    prop[SARCO] = 0; // Sarcophagus is closed
    if (prop[FEATHER] == 1) {
      // Feather is on scales
      prop[SCALE] = 1; // Scales hold feather only

      if (prop[MASK] == 1) {
        // Death mask is in sarcophagus
        move(MASK, 0); // Hide mask away
      }

      carry(obj, loc);
      rSpeak(287, BLACK); /* The sarcophagus lid slides shut. */
      return false;
    } else prop[SCALE] = 2; // Scales hold nothing
  }

  if (obj == FEATHER && loc == 160 && prop[FEATHER] == 1) {
    // Feather is on the scale
    prop[FEATHER] = 0; // Feather is off the scale
    prop[SARCO] = 0; // Sarcophagus is closed
    if (prop[HEART] == 1) {
      // Heart is on scales
      prop[SCALE] = 0; // Scales hold heart only

      if (prop[MASK] == 1) {
        // Death mask is in sarcophagus
        move(MASK, 0); // Hide mask away
      }

      carry(obj, loc);
      rSpeak(287, BLACK); /* The sarcophagus lid slides shut. */
      return false;
    } else prop[SCALE] = 2; // Scales hold nothing
  }

  if (obj == MASK && loc == 160 && prop[SARCO] == 2) {
    // Death mask is in open sarcophagus
    prop[SARCO] = 1; // Open sarcophagus without death mask
    prop[MASK] = 0; // Death mask is out of sarcophagus
  }

  if (obj == SODA && prop[SODA] == 0) {
    rSpeak(307, BLACK); /* The can rattles as you pick it up. */
  }

  carry(obj, loc);

  var kObj = liq();
  if (obj == BOTTLE && kObj != 0) place[kObj] = -1;

  rSpeak(54, BLACK); /* Ok */

  if (obj == LEAF && prop[RABBI] == 1) {
    prop[RABBI] = 0;
    rSpeak(
      238,
      BLACK
    ); /* The rabbit hops disappointedly back into the forest of spikes. */
  }

  return false;
}

/*______________________________________________________________________

   DISCARD OBJECT.  "THROW" ALSO COMES HERE FOR MOST
   OBJECTS.  SPECIAL CASES FOR BIRD (MIGHT ATTACK SNAKE OR
   DRAGON) AND CAGE (MIGHT CONTAIN BIRD) AND VASE.  DROP
   COINS AT VENDING MACHINE FOR EXTRA BATTERIES.
  ______________________________________________________________________*/
function verbDrop() {
  if (toting(ROD2) && obj == ROD && !toting(ROD)) obj = ROD2;

  if (obj == 0) /* Intransitive */ return vWhat();

  if (!toting(obj)) return vDefault(); /* Default: You aren't carrying it!*/

  if (obj == BIRD && here(SNAKE)) {
    /* The little bird attacks the green snake, and in an astounding flurry
     	   drives the snake away. A dislodged tail feather wafts slowly to the ground.*/
    rSpeak(30, BLACK);

    if (CLOSED) wakeDwarves();

    destroy(SNAKE);

    prop[SNAKE] = 1;
    prop[BIRD] = 0;
    drop(BIRD, loc);
    drop(FEATHER, loc);
    return false;
  }

  if (obj == BIRD && at(DRAGON) && prop[DRAGON] == 0) {
    /* The little bird attacks the green dragon, and in an astounding flurry
     	   gets burnt to a cinder.  The ashes blow away. */
    rSpeak(154, BLACK);
    destroy(BIRD);
    prop[BIRD] = 0;
    if (place[SNAKE] == plac[SNAKE]) TALLY2++; // Lost bird and chance to kill snake
    return false;
  }

  if (obj == BIRD) {
    prop[BIRD] = 0;
    drop(obj, loc);
    rSpeak(54, BLACK); /* Ok */
    return false;
  }

  if (obj == CAGE && prop[BIRD] != 0) {
    drop(BIRD, loc);
    drop(obj, loc);
    rSpeak(54, BLACK); /* Ok */
    return false;
  }

  if (obj == COINS && here(VEND)) {
    destroy(COINS);
    drop(BATTER, loc);
    // There are fresh batteries here.
    pSpeak(BATTER, 0, BLACK);
    return false;
  }

  if (obj == BEAR && at(TROLL)) {
    /* The bear lumbers toward the troll, who lets out a startled shriek and
           scurries away.  The bear soon gives up the pursuit and wanders back.*/
    rSpeak(163, BLACK);
    move(TROLL, 0);
    move(TROLL + 200, 0);
    move(TROLL2, plac[TROLL]);
    move(TROLL2 + 200, fixd[TROLL]);
    juggle(CHASM);
    prop[TROLL] = 2;

    drop(obj, loc);
    return false;
  }

  if (obj == VASE && loc != plac[PILLOW]) {
    if (at(PILLOW)) {
      prop[VASE] = 0;
      // The vase is now resting, delicately, on a velvet pillow.
      pSpeak(VASE, 1, BLACK);
    } else {
      prop[VASE] = 2;
      // The ming vase drops with a delicate crash.
      pSpeak(VASE, 3, BLACK);
    }

    if (prop[VASE] != 0) fixed[VASE] = -1;

    drop(obj, loc);
    return false;
  }

  if (obj == RUBY) prop[RUBY] = 0;

  if (liq() == obj || obj == BOTTLE) {
    obj = BOTTLE;
    if (liq() != 0) place[liq()] = 0;
    drop(obj, loc);
    rSpeak(54, BLACK); /* Ok */
    return false;
  }

  if (obj == MAGZIN && loc == 108) {
    rSpeak(241, BLACK); /* The world hates a litterbug. */
  }

  if (obj == MAGZIN && loc == 8) {
    prop[RACK] = 1;
    prop[MAGZIN] = 1;
    drop(MAGZIN, loc);
    rSpeak(
      240,
      BLACK
    ); /* You drop the magazines into an empty slot in the magazine rack. The world seems a tidier place. */
    return false;
  }

  if (obj == SIGN && loc == 106) {
    prop[SIGN] = 1;
    drop(SIGN, loc);
    /* The sign magically hovers and then slowly rises to display it's message a foot above your head.                                                                ";
           Well done! You've saved other adventurers all those wasted moves!  */
    rSpeak(265, BLACK);
    return false;
  }

  if (obj == LEAF && loc == 148 && prop[NECKL] < 2 && prop[RABBI] == 0) {
    prop[RABBI] = 1;
    drop(LEAF, loc);
    /* The rabbit hops forward, sniffs approvingly at the plant leaf and starts to nibble at it. */
    rSpeak(236, BLACK);
    return false;
  }

  if (obj == ROD && loc == 154 && prop[RIFT] == 0) {
    drop(ROD, 0); // Remove rod from world
    prop[RIFT] = 1;
    /* The rod drops snugly into the floor channel. It immediately starts to grow 
		   larger until it fully extends over the chasm. */
    rSpeak(248, BLACK);
    return false;
  }

  if (obj == PYRAM && loc == 156) {
    drop(PYRAM, loc);
    prop[PYRAM] = 1; // Pyramid is on pedestal
    prop[PEDES] = 1; // Pyramid at position 1 on pedestal 1
    /* The pyramid settles snugly into the square recess on the pedestal face. */
    rSpeak(261, BLACK);
    return false;
  }

  if (obj == PYRAM && loc == 159) {
    drop(PYRAM, loc);
    prop[PYRAM] = 1; // Pyramid is on pedestal
    prop[PEDE2] = 1; // Pyramid pedestal 2
    rSpeak(279, BLACK); /* The pyramid rests on the pedestal. */
    rSpeak(
      281,
      BLACK
    ); /* There is a low rumble and a low doorway appears in the east wall. */
    return false;
  }

  if (obj == SCARAB) {
    /* Turn the beetles into pebbles */
    move(BEETLE, loc);
    move(PEBBLE, 153);
    prop[BEETLE] = 0;
    prop[CHITT1] = 0;
    prop[CHITT2] = 0;
  }

  if (obj == HEART && loc == 160) {
    // Drop heart on the scale
    drop(HEART, 160); // Drop heart
    prop[HEART] = 1; // Heart is on the scale
    prop[SCALE] = 0; // Scales hold heart

    if (prop[FEATHER] == 1) {
      // Feather is on the scale
      prop[SCALE] = 3; // Scales hold feather and heart

      if (prop[MASK] == -1 || prop[MASK] == 1) {
        // Death mask is not yet uncovered or is in sarcophagus
        prop[SARCO] = 2; // Sarcophagus is open holding death mask
        prop[MASK] = 1; // Death mask is in sarcophagus
        drop(MASK, 160); // Drop death mask in burial chamber

        /* The sarcophagus lid slides effortlessly open to reveal a golden jewel-encrusted
				death mask! */
        rSpeak(286, BLACK);
        return false;
      }

      prop[SARCO] = 1; // Sarcophagus is open without death mask

      /* The sarcophagus lid slides effortlessly open. */
      rSpeak(288, BLACK);
      return false;
    }
  }

  if (obj == FEATHER && loc == 160) {
    // Drop feather on the scale
    drop(FEATHER, 160); // Drop feather
    prop[FEATHER] = 1; // Feather is on the scale
    prop[SCALE] = 1; // Scales hold feather

    if (prop[HEART] == 1) {
      // Heart is on the scale
      prop[SCALE] = 3; // Scales hold feather and heart

      if (prop[MASK] == -1 || prop[MASK] == 1) {
        // Death mask is not yet uncovered or is in sarcophagus
        prop[SARCO] = 2; // Sarcophagus is open holding death mask
        prop[MASK] = 1; // Death mask is in sarcophagus
        drop(MASK, 160); // Drop death mask in burial chamber

        if (!maskSeen) {
          maskSeen = true;
          TALLY--;
        }

        /* The sarcophagus lid slides effortlessly open to reveal a golden jewel-encrusted
                   death mask! */
        rSpeak(286, BLACK);
        return false;
      }

      prop[SARCO] = 1; // Sarcophagus is open without death mask

      /* The sarcophagus lid slides effortlessly open. */
      rSpeak(288, BLACK);
      return false;
    }
  }

  if (obj == SODA && prop[SODA] == 0) {
    rSpeak(308, BLACK); /* The can rattles as it drops to the ground. */
  }

  /* Otherwise ... */
  drop(obj, loc);
  rSpeak(54, BLACK); /* Ok */

  return false;
}

/*______________________________________________________________________
   SAY.  ECHO WD2 (IF NO WD2 (SAY WHAT?, ETC.).) MAGIC WORDS OVERRIDE.
  ______________________________________________________________________*/
function verbSay() {
  var ii;

  if (fullWd2 == "") return vWhat();

  ii = vocab(wd2, -1);

  if (ii == 2025) {
    wd1 = wd2;
    return verbFoo();
  }

  if (ii == 62 || ii == 65 || ii == 71) {
    processMove(ii);
    return false;
  }

  sayIt("Okay, " + '"' + fullWd2 + '"' + ".", BLACK);

  return false;
}

//______________________________________________________________________
//   LOCK, UNLOCK, NO OBJECT GIVEN.  ASSUME VARIOUS THINGS IF PRESENT.
//______________________________________________________________________
function verbOpen() {
  if (obj == 0) {
    /* Intransitive */
    if (here(CLAM)) obj = CLAM;
    if (here(OYSTER)) obj = OYSTER;
    if (at(DOOR)) obj = DOOR;
    if (at(GRATE)) obj = GRATE;

    if (obj != 0 && here(CHAIN)) return vWhat();

    if (here(CHAIN)) obj = CHAIN;

    if (obj == 0) {
      rSpeak(28, BLACK); /* There is nothing here with a lock! */
      return false;
    }
  }
  return verbOpenObj();
}

//______________________________________________________________________________
//   LOCK, UNLOCK OBJECT.  SPECIAL STUFF FOR OPENING CLAM/OYSTER AND FOR CHAIN.
//______________________________________________________________________________
function verbOpenObj() {
  if (obj == CLAM) {
    if (verb == LOCK)
      /* What? */
      rSpeak(61, BLACK);
    else if (!toting(TRIDNT))
      /* You don't have anything strong enough to open the clam.*/
      rSpeak(122, BLACK);
    else if (toting(obj))
      /* I advise you to put down the clam before opening it. >STRAIN!<*/

      rSpeak(120, BLACK);
    else {
      destroy(CLAM);
      drop(OYSTER, loc);
      drop(PEARL, 105);
      /* A glistening pearl falls out of the clam and rolls away.  
               Goodness, this must really be an oyster.  
              (I never was very good at identifying bivalves.)  
               Whatever it is, it has now snapped shut again.*/
      rSpeak(124, BLACK);
    }
    return false;
  }

  if (obj == OYSTER) {
    if (verb == LOCK)
      /* What? */
      rSpeak(61, BLACK);
    else if (!toting(TRIDNT))
      /* You don't have anything strong enough to open the oyster.*/
      rSpeak(123, BLACK);
    else if (toting(obj))
      /* I advise you to put down the oyster before opening it>WRENCH!<*/

      rSpeak(121, BLACK);
    else {
      /* The oyster creaks open, revealing nothing but oyster inside. It
            promptly snaps shut again.*/
      rSpeak(125, BLACK);
    }
    return false;
  }

  if (obj == DOOR && prop[DOOR] == 1) {
    rSpeak(54, BLACK); /* OK */
    return false;
  }

  if (obj == DOOR) {
    rSpeak(111, BLACK); /* The door is extremely rusty and refuses to open.*/
    return false;
  }

  if (obj == CAGE) {
    rSpeak(32, BLACK); /* It has no lock.*/
    return false;
  }

  if (obj == KEYS) {
    rSpeak(55, BLACK); /* You can't unlock the keys.*/
    return false;
  }

  if ((obj == GRATE || obj == CHAIN) && !here(KEYS)) {
    rSpeak(31, BLACK); /* You have no keys!*/
    return false;
  }

  if (obj == CHAIN && verb == LOCK) {
    if (loc != plac[CHAIN])
      /* There is nothing here to which the chain can be locked.*/

      rSpeak(173, BLACK);
    else if (prop[CHAIN] != 0)
      /* It was already locked.*/
      rSpeak(34, BLACK);
    else {
      prop[CHAIN] = 2;
      if (toting(CHAIN)) drop(CHAIN, loc);
      fixed[CHAIN] = -1;

      rSpeak(172, BLACK); /* The chain is now locked.*/
    }
    return false;
  }

  if (obj == CHAIN) {
    if (prop[CHAIN] == 0) rSpeak(37, BLACK);
    /* It was already unlocked.*/ else if (prop[BEAR] == 0)
      /* There is no way to get past the bear to unlock the chain, 
            which is probably just as well.*/
      rSpeak(41, BLACK);
    else {
      prop[CHAIN] = 0;
      fixed[CHAIN] = 0;
      if (prop[BEAR] != 3) prop[BEAR] = 2;
      fixed[BEAR] = 2 - prop[BEAR];
      rSpeak(171, BLACK); /* The chain is now unlocked.*/
    }
    return false;
  }

  if (CLOSNG) {
    if (!PANIC) CLOCK2 = 15;
    PANIC = true;
    // A mysterious recorded voice groans into life and announces:
    //  "This exit is closed.  Please leave via main office."
    rSpeak(130, RED);
    return false;
  }

  if (obj == GRATE) {
    if (verb == LOCK) {
      if (prop[GRATE] == 0) rSpeak(34, BLACK);
      // It was already locked.
      else {
        prop[GRATE] = 0;
        rSpeak(35, BLACK); // The grate is now locked.
      }
    } else {
      if (prop[GRATE] == 1) rSpeak(37, BLACK);
      // It was already unlocked.
      else {
        prop[GRATE] = 1;
        rSpeak(36, BLACK); // The grate is now unlocked.
      }
    }
    return false;
  }

  if (obj == SARCO) {
    if (verb == LOCK) {
      if (prop[SARCO] == 0) rSpeak(289, BLACK);
      /* Try as you might the heavy lid won't budge an inch. */ else
        rSpeak(290, BLACK); /* The sarcophagus is already open! */
    } else {
      if (prop[SARCO] > 0) rSpeak(289, BLACK);
      /* Try as you might the heavy lid won't budge an inch. */ else
        rSpeak(291, BLACK); /* The sarcophagus is already closed! */
    }
    return false;
  }

  // Otherwise
  rSpeak(33, BLACK); // I don't know how to lock or unlock such a thing.

  return false;
}

/*______________________________________________________________________
   LIGHT LAMP
  ______________________________________________________________________*/
function verbOn() {
  if (!here(LAMP)) return vDefault();
  /* Default: You have no source of light.*/ else if (LIMIT < 0)
    rSpeak(184, BLACK);
  /* Your lamp has run out of power.*/ else {
    prop[LAMP] = 1;
    rSpeak(39, BLACK); /* Your lamp is now on.*/

    if (WZDARK) describeLoc = true;
  }

  return false;
}

/*______________________________________________________________________
   LAMP OFF
  ______________________________________________________________________*/
function verbOff() {
  if (!here(LAMP)) return vDefault(); /* Default: You have no source of light.*/

  prop[LAMP] = 0;
  rSpeak(40, BLACK); /* Your lamp is now off.*/

  if (dark())
    /* It is now pitch dark.  
           If you proceed you will likely fall into a pit.*/

    rSpeak(16, BLACK);

  if (loc == 147) {
    // Glow-worm grotto
    move(RUBY, 147);
    printLocationObjects(); // Describe glowworms immediately
  }

  return false;
}

/*______________________________________________________________________
   WAVE.  NO EFFECT UNLESS WAVING ROD AT FISSURE.
  ______________________________________________________________________*/
function verbWave() {
  if (obj == 0) return vWhat();

  if (!toting(obj) && (obj != ROD || !toting(ROD2)))
    return rSpeak(29, BLACK); /* You aren't carrying it!*/

  if (obj != ROD || !at(FISSUR) || !toting(obj) || CLOSNG) return vDefault();

  if (prop[FISSUR] == 0) {
    prop[FISSUR] = 1;
    pSpeak(FISSUR, 1, BLACK); // A crystal bridge now spans the fissure.
  } else {
    prop[FISSUR] = 0;
    pSpeak(FISSUR, 2, BLACK); // The crystal bridge has vanished!
  }

  return false;
}

/*______________________________________________________________________
   CALM.
  ______________________________________________________________________*/
function verbCalm() {
  if (obj == 0) return vWhat();
  else return vDefault();
}

/*______________________________________________________________________
   Walk.
  ______________________________________________________________________*/
function verbWalk() {
  if (wd2 == "") return vDefault();
  else return true;
}

/*______________________________________________________________________
   ATTACK.  ASSUME TARGET IF UNAMBIGUOUS.  "THROW" ALSO
   LINKS HERE.  ATTACKABLE OBJECTS FALL INTO TWO CATEGORIES:
   ENEMIES (SNAKE, DWARF, ETC.) AND OTHERS (BIRD, CLAM).
   AMBIGUOUS IF TWO ENEMIES, OR IF NO ENEMIES BUT TWO
   OTHERS.
  ______________________________________________________________________*/
function verbAttack() {
  if (obj == 0) {
    for (var ii = 1; ii <= 5; ii++) {
      if ((dloc[ii] == loc) & (DFLAG >= 2)) {
        obj = DWARF;
        break;
      }
    }
  }

  if (obj == 0) {
    var cnt = 0;
    if (here(RABBI)) {
      obj = RABBI;
      cnt++;
    }
    if (here(SNAKE)) {
      obj = SNAKE;
      cnt++;
    }
    if (at(DRAGON) && prop[DRAGON] == 0) {
      obj = DRAGON;
      cnt++;
    }
    if (at(TROLL)) {
      obj = TROLL;
      cnt++;
    }
    if (here(BEAR) && prop[BEAR] == 0) {
      obj = BEAR;
      cnt++;
    }
    if (here(GIANT)) {
      obj = GIANT;
      cnt++;
    }
    if (obj == 0) {
      if (here(BIRD) && verb != THROW) {
        obj = BIRD;
        cnt++;
      }
      if (here(CLAM) || here(OYSTER)) {
        obj = CLAM;
        cnt++;
      }
    }
    if (cnt > 1) return vWhat();
  }

  if (obj == BIRD && CLOSED) {
    rSpeak(137, BLACK); /* Oh, leave the poor unhappy bird alone.*/
    return false;
  }

  if (loc == 158)
    if (obj == 0 || obj == DWARF) {
      // Break room
      rSpeak(
        278,
        BLACK
      ); /* The break room is regarded as a kind of "sanctuary". No violence please. */
      return false;
    }

  if (obj == BIRD) {
    destroy(BIRD);
    prop[BIRD] = 0;
    if (place[SNAKE] == plac[SNAKE]) TALLY2++; // Lost bird and chance to kill snake
    rSpeak(45, BLACK); /* The little bird is now dead. Its body disappears. */
    return false;
  }

  if (obj == 0) {
    rSpeak(44, BLACK); /* There is nothing here to attack.*/
    return false;
  }

  if (obj == CLAM || obj == OYSTER) {
    rSpeak(
      150,
      BLACK
    ); /* The shell is very strong and is impervious to attack. */
    return false;
  }

  if (obj == SNAKE) {
    rSpeak(
      46,
      BLACK
    ); /* Attacking the snake both doesn't work and is very dangerous. */
    return false;
  }

  if ((obj == DWARF) & CLOSED) {
    wakeDwarves();
    return false;
  }

  if (obj == DWARF) {
    rSpeak(49, BLACK); /* With what?  your bare hands? */
    return false;
  }

  if (obj == TROLL) {
    rSpeak(
      157,
      BLACK
    ); /* Trolls are close relatives with the rocks and 
                        		have skin as tough as that of a rhinoceros.  
                        		The troll fends off your blows effortlessly.*/
    return false;
  }

  if (obj == BEAR) {
    rSpeak(165 + Math.floor((prop[BEAR] + 1) / 2), BLACK);
    return false;
  }

  if (obj == DRAGON && prop[DRAGON] != 0) {
    rSpeak(
      167,
      BLACK
    ); /* For crying out loud, the poor thing is already dead! */
    return false;
  }

  if (obj == DRAGON) {
    /*  FUN STUFF FOR DRAGON.  IF HE INSISTS ON ATTACKING IT,
        	WIN!  SET PROP TO DEAD, MOVE DRAGON TO CENTRAL LOC (STILL
        	FIXED), MOVE RUG THERE (NOT FIXED), AND MOVE HIM THERE,
        	TOO.  THEN DO A NULL MOTION TO GET NEW DESCRIPTION. */
    verb = 0;
    obj = 0;
    askingYesNo = 4;
    rSpeak(49, BLACK); /* With what?  your bare hands?*/
    return false;
  }

  if (obj == GIANT) {
    /* The giant falls face first with a huge crash! Just kidding, he barely notices. */

    rSpeak(228, BLACK);
    return false;
  }

  if (obj == PLANT) {
    if (prop[PLANT] == 4) {
      // Large beanstalk
      if (toting(AXE))
        /* Your feeble blows glance harmlessly off the fibrous trunk.                      ";
				   Who got you that axe? Your mom? */

        rSpeak(231, BLACK);
      /* The beanstalk has grown so hardy that it's impossible to damage. */ else
        rSpeak(230, BLACK);
    } else rSpeak(232, BLACK); /* What's next? "Shoot foot"?  */
    return false;
  }

  if (obj == RABBI && prop[RABBI] == 1) {
    prop[RABBI] = 2;
    prop[NECKL] = 2;
    move(RABBI, 0);
    drop(NECKL, loc);
    /* You swiftly slaughter the poor defenseless animal. The bloodied corpse disappears
		   in a cloud of fine white smoke. */
    rSpeak(243, BLACK);
    if (toting(AXE)) rSpeak(244, BLACK);
    /* I'd take points off for that but I see how you like using that axe. */ else
      rSpeak(
        245,
        BLACK
      ); /* There goes our PG rating. Shouldn\'t you be playing Space Invaders? */
    return false;
  }

  rSpeak(110, BLACK); /* Don't be ridiculous! */
  return false;
}

/*______________________________________________________________________
   POUR.  IF NO OBJECT, OR OBJECT IS BOTTLE, ASSUME CONTENTS
   OF BOTTLE.  SPECIAL TESTS FOR POURING WATER OR OIL ON
   PLANT OR RUSTY DOOR.
______________________________________________________________________*/
function verbPour() {
  if (obj == SODA) {
    if (prop[SODA] == 0) {
      prop[SODA] = 1;
      drop(OPAL, loc);

      rSpeak(
        309,
        BLACK
      ); /* A glistening opal exits the can and lands at your feet! */
      return false;
    } else {
      rSpeak(310, BLACK); /* The soda can is empty. */
      return false;
    }
  }

  if (obj == BOTTLE || obj == 0) obj = liq();

  if (obj == 0) return vWhat();

  if (!toting(obj)) return vDefault();

  if (obj != OIL && obj != WATER) {
    rSpeak(78, BLACK); /* You can't pour that. */
    return false;
  }

  /* Empty the bottle and ditch the liquid */

  prop[BOTTLE] = 1;
  place[obj] = 0;

  if (at(DOOR) && obj == OIL) {
    prop[DOOR] = 1;
    /* The oil has freed up the hinges so that the door will now move,
     		although it requires some effort.*/
    rSpeak(114, BLACK);
    return false;
  }

  if (at(DOOR) && obj == WATER) {
    prop[DOOR] = 0;
    rSpeak(
      113,
      BLACK
    ); /* The hinges are quite thoroughly rusted now and won't budge. */
    return false;
  }

  if (at(PLANT) && obj == OIL) {
    rSpeak(
      112,
      BLACK
    ); /* The plant indignantly shakes the oil off its leaves and asks, "Water?" */
    return false;
  }

  if (at(PLANT) && obj == WATER) {
    /* Water the plant at various growth stages */
    /* prop[PLANT] 0 - There is a tiny little plant in the pit, murmuring "water, water, ... 
		               1 - The plant spurts into furious growth for a few seconds.     
					   2 - There is a 12-foot-tall beanstalk stretching up out of the pit, bellowing "Water!! Water!!
					   3 - The plant grows explosively, almost filling the bottom of the pit. 
					   4 - There is a gigantic beanstalk stretching all the way up to the hole. 
					   5 - You've over-watered the plant!  It's shriveling up!  It's, it's... */
    pSpeak(PLANT, prop[PLANT] + 1, BLACK);

    prop[PLANT] = (prop[PLANT] + 2) % 6;
    prop[PLANT2] = Math.floor(prop[PLANT] / 2);
    return false;
  }

  /* Otherwise ... */

  rSpeak(77, BLACK); /* Your bottle is empty and the ground is wet. */

  return false;
}

/*______________________________________________________________________
   EAT.  INTRANSITIVE:  ASSUME FOOD IF PRESENT, ELSE ASK WHAT.  
  ______________________________________________________________________*/
function verbEat() {
  if (obj == 0)
    if (here(FOOD)) return verbEatObj(FOOD);
    else return vWhat();

  return verbEatObj(obj);
}

/*______________________________________________________________________
   EAT. TRANSITIVE:  FOOD OK, SOME THINGS LOSE APPETITE,
   REST ARE RIDICULOUS.
  ______________________________________________________________________*/

function verbEatObj(eObj) {
  if (eObj == FOOD) {
    destroy(FOOD);
    rSpeak(72, BLACK); /* Thank you, it was delicious!*/
  } else if (
    eObj == BIRD ||
    eObj == SNAKE ||
    eObj == CLAM ||
    eObj == OYSTER ||
    eObj == DWARF ||
    eObj == DRAGON ||
    eObj == TROLL ||
    eObj == BEAR
  )
    rSpeak(71, BLACK);
  /* I think I just lost my appetite.*/ else return vDefault();

  return false;
}

/*______________________________________________________________________
   DRINK.  IF NO OBJECT, ASSUME WATER AND LOOK FOR IT HERE.
   IF WATER IS IN THE BOTTLE, DRINK THAT, ELSE MUST BE AT A
   WATER LOC, SO DRINK STREAM.
  ______________________________________________________________________*/

function verbDrink() {
  if (obj == 0 && liqLoc(loc) != WATER && (liq() != WATER || !here(BOTTLE)))
    return vWhat();

  if (obj != 0 && obj != WATER) {
    rSpeak(110, BLACK); /* Don't be ridiculous!*/
    return false;
  }

  if (liq() == WATER && here(BOTTLE)) {
    prop[BOTTLE] = 1;
    place[WATER] = 0;
    rSpeak(74, BLACK); /* The bottle of water is now empty. */
    return false;
  }

  /* Otherwise ... */
  return vDefault();
}

/*______________________________________________________________________
   RUB.  YIELDS VARIOUS SNIDE REMARKS.
  ______________________________________________________________________*/

function verbRub() {
  if (obj == 0) return vWhat();
  if (obj == LAMP) return vDefault();

  rSpeak(76, BLACK); /* Peculiar. Nothing unexpected happens. */
  return false;
}

/*______________________________________________________________________
   THROW.  SAME AS DISCARD UNLESS AXE.  THEN SAME AS ATTACK
   EXCEPT IGNORE BIRD, AND IF DWARF IS PRESENT THEN ONE
   MIGHT BE KILLED.  (ONLY WAY TO DO SO!) AXE ALSO SPECIAL
   FOR DRAGON, BEAR, AND TROLL.  TREASURES SPECIAL FOR TROLL.
  ______________________________________________________________________*/

function verbThrow() {
  if (toting(ROD2) && obj == ROD && !toting(ROD)) obj = ROD2;

  if (obj == 0) return vWhat();

  if (!toting(obj)) return vDefault();

  if (obj >= MINTRS && obj <= MAXTRS && at(TROLL)) {
    /* SNARF A TREASURE FOR THE TROLL. */
    drop(obj, 0);
    move(TROLL, 0);
    move(TROLL + 200, 0);
    drop(TROLL2, plac[TROLL]);
    drop(TROLL2 + 200, fixd[TROLL]);
    juggle(CHASM);

    rSpeak(
      159,
      BLACK
    ); /* the troll catches your treasure and 
                        	   scurries away out of sight. */
    return false;
  }

  if (obj == FOOD && here(BEAR)) {
    /* BUT THROWING FOOD IS ANOTHER STORY. */
    obj = BEAR;
    return verbFeed();
  }

  if (obj == AXE) return verbThrowAxe();

  /* Otherwise ... */
  return verbDrop();
}

/*______________________________________________________________________
   THROW AXE.
  ______________________________________________________________________*/

function verbThrowAxe() {
  var ii;
  for (ii = 1; ii <= 5; ii++) if (dloc[ii] == loc) break;

  if ((ii < 6) & pct(25)) {
    rSpeak(
      48,
      BLACK
    ); /* You attack a little dwarf, but he dodges out of the way.*/
    drop(AXE, loc);
    return false;
  }

  if (ii < 6) {
    dseen[ii] = false;
    dloc[ii] = 0;
    DKILL++;
    if (DKILL == 1) rSpeak(149, BLACK);
    /* You killed a little dwarf. The body 
                            	   vanishes in a cloud of greasy black smoke.*/ else
      rSpeak(47, BLACK); /* You killed a little dwarf. */
    drop(AXE, loc);
    return false;
  }

  if (at(DRAGON) && prop[DRAGON] == 0) {
    rSpeak(
      152,
      BLACK
    ); /* The axe bounces harmlessly off the dragon's thick scales. */
    drop(AXE, loc);
    return false;
  }

  if (at(TROLL)) {
    rSpeak(
      158,
      BLACK
    ); /* The troll deftly catches the axe, examines it carefully, and tosses it*/
    drop(AXE, loc);
    return false;
  }

  if (here(BEAR) && prop[BEAR] == 0) {
    /* THIS'LL TEACH HIM TO THROW THE AXE AT THE BEAR! */
    drop(AXE, loc);
    fixed[AXE] = -1;
    prop[AXE] = 1;
    juggle(BEAR);
    rSpeak(
      164,
      BLACK
    ); /* The axe misses and lands near the bear where you can't get at it.*/
    return false;
  }

  if (at(GIANT)) {
    rSpeak(
      229,
      BLACK
    ); /* The axe hits the giant right between the eyes! And nothing happens. */
    drop(AXE, loc);
    return false;
  }

  /* Otherwise ... */
  obj = 0;
  return verbAttack();
}

/*______________________________________________________________________
   QUIT.  INTRANSITIVE ONLY.  VERIFY INTENT AND EXIT IF
   THAT'S WHAT HE WANTS.  
  ______________________________________________________________________*/

function verbQuit() {
  if (obj == 0) {
    askingYesNo = 3;
    return rSpeak(22, BLACK); /* Do you really want to quit now? */
  } else return vDefault();
}

/*______________________________________________________________________
   FIND.  MIGHT BE CARRYING IT, OR IT MIGHT BE HERE.  ELSE GIVE CAVEAT. 
  ______________________________________________________________________*/

function verbFind() {
  if (toting(obj)) {
    rSpeak(24, BLACK); /* You are already carrying it!*/
    return false;
  }

  if (CLOSED) {
    rSpeak(
      138,
      BLACK
    ); /* I daresay whatever you want is around here somewhere..*/
    return false;
  }

  if (at(obj) || (liq() == obj && at(BOTTLE)) || obj == liqLoc(loc)) {
    rSpeak(94, BLACK); /* I believe what you want is right here with you.*/
    return false;
  }

  if (obj == DWARF) {
    for (var ii = 1; ii <= 5; ii++)
      if (dloc[ii] == loc && DFLAG >= 2) {
        rSpeak(94, BLACK); /* I believe what you want is right here with you. */
        break;
      }
    return false;
  }

  /* Otherwise ... */
  return vDefault();
}

/*______________________________________________________________________
   INVENTORY.  IF OBJECT, TREAT SAME AS FIND.  ELSE REPORT ON CURRENT BURDEN.
  ______________________________________________________________________*/
function verbInvent() {
  var gotItems = false;
  for (var ii = 1; ii <= 200; ii++) {
    if (toting(ii))
      if (ii != BEAR) {
        if (!gotItems) {
          rSpeak(99, BLACK); /* You are currently holding the following:*/
          gotItems = true;
        }
        pSpeak(ii, -1, BLACK);
      }
  }

  if (toting(BEAR)) rSpeak(141, BLACK);
  /* You are being followed by a very large, tame bear.*/ else if (!gotItems)
    rSpeak(98, BLACK); /* You're not carrying anything.*/

  return false;
}

/*______________________________________________________________________
   FEED.  IF BIRD, NO SEED.  SNAKE, DRAGON, TROLL:  QUIP.  IF
   DWARF, MAKE HIM MAD.  BEAR, SPECIAL.
  ______________________________________________________________________*/
function verbFeed() {
  if (obj == 0) return vWhat();

  if (obj == BIRD) {
    rSpeak(
      100,
      BLACK
    ); /* It's not hungry (it's merely pinin' for the 
                           		  fjords).  Besides, you have no bird seed. */
    return false;
  }

  if (obj == TROLL) {
    rSpeak(
      182,
      BLACK
    ); /* Gluttony is not one of the troll's vices. Avarice, however, is. */
    return false;
  }

  if (obj == DRAGON) {
    if (prop[DRAGON] != 0) rSpeak(110, BLACK);
    /* Don't be ridiculous!*/ else
      rSpeak(
        102,
        BLACK
      ); /* There's nothing here it wants to eat (except perhaps you).*/
    return false;
  }

  if (obj == SNAKE && (CLOSED || !here(BIRD))) {
    rSpeak(
      102,
      BLACK
    ); /* There's nothing here it wants to eat (except perhaps you).*/
    return false;
  }

  if (obj == SNAKE) {
    rSpeak(101, BLACK); /* The snake has now devoured your bird.*/
    destroy(BIRD);
    prop[BIRD] = 0;
    TALLY2++; // Lost bird and chance to kill snake
    return false;
  }

  if (obj == DWARF && here(FOOD)) {
    DFLAG++;
    rSpeak(
      103,
      BLACK
    ); /* You fool, dwarves eat only coal! Now you've made him *really* mad!! */
    return false;
  }

  if (obj == DWARF) return vDefault();

  if (obj == BEAR) {
    if (here(FOOD)) {
      destroy(FOOD);
      prop[BEAR] = 1;
      fixed[AXE] = 0;
      prop[AXE] = 0;
      /* The bear eagerly wolfs down your food, after which he seems to 
            calm down considerably and even becomes rather friendly. */
      rSpeak(168, BLACK);
    } else if (prop[BEAR] == 0) rSpeak(102, BLACK);
    /* There's nothing here it wants to eat (except perhaps you). */ else if (
      prop[BEAR] == 3
    )
      rSpeak(110, BLACK); /* Don't be ridiculous!*/

    return false;
  }

  /* Otherwise ... */
  rSpeak(14, BLACK); /* I'm game.  Would you care to explain how?*/
  return false;
}

/*______________________________________________________________________
   FILL.  BOTTLE MUST BE EMPTY, AND SOME LIQUID AVAILABLE.(VASE IS NASTY.)
  ______________________________________________________________________*/
function verbFill() {
  if (obj == VASE) {
    if (liqLoc(loc) == 0) rSpeak(144, BLACK);
    /* There is nothing here with which to fill the vase.*/ else if (
      liqLoc(loc) == 0 ||
      !toting(VASE)
    )
      rSpeak(29, BLACK);
    /* You aren't carrying it!*/ else {
      rSpeak(
        145,
        BLACK
      ); /* The sudden change in temperature has delicately shattered the vase.*/
      prop[VASE] = 2;
      fixed[VASE] = -1;
      drop(obj, loc);
    }
    return false;
  }

  if (obj == SODA || (obj == 0 && !here(BOTTLE) && here(SODA))) {
    rSpeak(
      311,
      BLACK
    ); /* The soda can leaks like a sieve and is soon empty again.*/
    return false;
  }

  if (obj != 0 && obj != BOTTLE) return vDefault();

  if (obj == 0 && !here(BOTTLE)) return vWhat();

  if (liq() != 0) {
    rSpeak(105, BLACK); /* Your bottle is already full.*/
    return false;
  }

  if (liqLoc(loc) == 0) {
    rSpeak(
      106,
      BLACK
    ); /* There is nothing here with which to fill the bottle.*/
    return false;
  }

  /* Otherwise ... */
  prop[BOTTLE] = Math.floor((condl[loc] % 4) / 2) * 2;

  if (toting(BOTTLE)) place[liq()] = -1;

  if (liq() == OIL) rSpeak(108, BLACK);
  /* Your bottle is now full of oil.*/ else
    rSpeak(107, BLACK); /* Your bottle is now full of water.*/
  return false;
}

/*______________________________________________________________________
   BLAST.  NO EFFECT UNLESS YOU'VE GOT DYNAMITE, WHICH IS A NEAT TRICK! 
  ______________________________________________________________________*/
function verbBlast() {
  if (prop[ROD2] < 0 || !CLOSED) return vDefault();

  if (loc == 115) {
    /* There is a loud explosion, and a twenty-foot hole appears in the far
     	   wall, burying the snakes in the rubble.  A river of molten lava pours
     	   in through the hole, destroying everything in its path,including you!*/
    rSpeak(134, BLACK);
    BONUS = 134;
    tallyScore("DEAD");
    endGame();
    return false;
  }

  if (here(ROD2)) {
    /* There is a loud explosion, and you are suddenly splashed across the
           walls of the room.*/
    rSpeak(135, BLACK);
    BONUS = 135;
    tallyScore("DEAD");
    endGame();
    return false;
  }

  /* Otherwise ... */
  /* There is a loud explosion, and a twenty-foot hole appears in the far
       wall, burying the dwarves in the rubble.  You march through the hole
       and find yourself in the main office, where a cheering band of
       friendly elves carry the conquering adventurer off into the sunset.*/
  rSpeak(133, BLACK);
  BONUS = 133;
  tallyScore("DEAD");
  endGame();
  return false;
}

/*______________________________________________________________________
   SCORE.  
  ______________________________________________________________________*/
function verbScore() {
  tallyScore("SCORE");

  sayIt(
    "If you were to quit now, you would score " +
      SCORE +
      " out of a possible " +
      MXSCOR +
      ".",
    BLACK
  );
}

/*______________________________________________________________________
   FEE FIE FOE FOO (AND FUM).  ADVANCE TO NEXT STATE IF GIVEN
   IN PROPER ORDER.  LOOK UP WD1 IN SECTION 3 OF VOCAB TO
   DETERMINE WHICH WORD WE'VE GOT.  LAST WORD ZIPS THE EGGS
   BACK TO THE GIANT ROOM (UNLESS ALREADY THERE).
   ______________________________________________________________________*/
function verbFoo() {
  KK = vocab(wd1, 3);

  if (KK != FOOBAR + 1) {
    FOOBAR = 0;
    if (loc == plac[EGGS]) rSpeak(151, BLACK);
    /* What's the matter, can't you read? Now you'd best start over.*/ else
      rSpeak(207, BLACK); /* That doesn't sound right. You'd best start over.*/
    return false;
  }

  if (KK < 4) {
    FOOBAR = KK;
    rSpeak(54, BLACK); /* Ok */
    return false;
  }

  // We've finished the FEE FIE FOE FOO sentence.
  FOOBAR = 0;

  if (prop[ARCHW] == 0)
    // Toggle the giant's archway
    prop[ARCHW] = 1;
  else prop[ARCHW] = 0;

  if (loc == plac[EGGS] || loc == 149) {
    // Either side of Giant Arch
    rSpeak(206, BLACK); /* The floor and walls rumble slightly. */

    if (loc == 92 && !giantDead && ogiantloc == 149 && prop[ARCHW] == 0) {
      // West of arch
      showmsg[4] = true;
      giantDead = true;
      giantChasing = false;
      move(GIANT, 0);
      drop(RING, 92);

      /* As the archway fills with rock the giant is sliced neatly in half. His upper torso
			   remains briefly visible, arms outstretched as if to snatch you even in death.   
			   He then disappears in thick green smoke. Something remains where his left hand lay.  */

      rSpeak(227, BLACK);
    }
  }

  if (place[EGGS] == plac[EGGS] || (toting(EGGS) && loc == plac[EGGS])) {
    if (loc != plac[EGGS] && loc != 149)
      rSpeak(42, BLACK); /* Nothing happens. */
    return false;
  }

  /* Otherwise ... */
  if (place[EGGS] == 0 && place[TROLL] == 0 && prop[TROLL] == 0)
    /* BRING BACK TROLL IF WE STEAL THE EGGS BACK FROM HIM BEFORE CROSSING. */
    prop[TROLL] = 1;

  if (loc == plac[EGGS]) pSpeak(EGGS, 0, BLACK);
  /* There is a large nest here, full of golden eggs! */ else if (here(EGGS))
    pSpeak(EGGS, 1, BLACK);
  /* The nest of golden eggs has vanished! */ else
    pSpeak(EGGS, 2, BLACK); /* Done! */

  move(EGGS, plac[EGGS]);

  return false;
}

/*______________________________________________________________________
   BRIEF.  INTRANSITIVE ONLY.  SUPPRESS LONG DESCRIPTIONS AFTER FIRST TIME.  
______________________________________________________________________*/
function verbBrief() {
  if (obj != 0) return vDefault();

  /* Okay, from now on I'll only describe a place in full the first time
     	you come to it.  To get the full description, say "look".*/
  rSpeak(156, BLACK);

  ABBNUM = 10000;
  DETAIL = 3;

  return false;
}

/*______________________________________________________________________
   READ.  MAGAZINES IN DWARVISH, MESSAGE WE'VE SEEN, AND OYSTER?  
  ______________________________________________________________________*/
function verbRead() {
  var cntObjs = 0;

  if (obj != 0) return verbReadObj();

  if (dark()) return vWhat();

  if (CLOSED && toting(OYSTER)) {
    cntObjs++;
    obj = OYSTER;
  }

  if (here(MAGZIN)) {
    cntObjs++;
    obj = MAGZIN;
  }

  if (here(TABLET)) {
    cntObjs++;
    obj = TABLET;
  }

  if (here(MESSAG)) {
    cntObjs++;
    obj = MESSAG;
  }

  if (here(SIGN)) {
    cntObjs++;
    obj = SIGN;
  }

  if (here(SCRAP)) {
    cntObjs++;
    obj = SCRAP;
  }

  if (cntObjs == 1) return verbReadObj();
  else return vWhat();
}

/*______________________________________________________________________
   READ OBJECT.
  ______________________________________________________________________*/
function verbReadObj() {
  if (dark()) {
    sayIt(" " + objWd + " here!", BLACK);
    return false;
  }

  if (obj == MESSAG && loc == 158) {
    for (
      var ii = 0;
      ii <= 9;
      ii++ /* Display message(s) on the message board. */
    )
      if (showmsg[ii] == true) rSpeak(268 + ii, BLACK);
    return false;
  }

  if (obj == MAGZIN) {
    rSpeak(190, BLACK); /* I'm afraid the magazine is written in dwarvish.*/
    return false;
  }

  if (obj == SIGN) {
    /* "Cave under construction beyond this point. Proceed at own risk. 
		    Witt Construction Company." */
    rSpeak(266, BLACK);
    return false;
  }

  if (obj == TABLET) {
    rSpeak(
      196,
      BLACK
    ); /* "Congratulations on bringing light into the dark-room!" */
    return false;
  }

  if (obj == MESSAG) {
    rSpeak(
      191,
      BLACK
    ); /* "This is not the maze where the pirate leaves his treasure chest." */
    return false;
  }

  if (obj == PLAQU) {
    /* Etched in a strong clear script the plaque reads "R.I.P. Stabby, inaccurately
		   transported during The Great Initialization".  */
    rSpeak(205, BLACK);
    return false;
  }

  if (obj == SCRAP) {
    /* Scrawled on one side of the paper is the number 7628. */
    rSpeak(304, BLACK);
    return false;
  }

  if (obj == CHEST) {
    showmsg[3] = true; // Show message board message about the pirate
    return false;
  }

  if (obj == OYSTER && toting(OYSTER) && CLOSED) {
    if (hinted[2]) rSpeak(194, BLACK);
    /* It says the same thing it did before.*/ else {
      /* Hmmm, this looks like a clue, which means it'll cost you 10 points to
			read it.  Should I go ahead and read it anyway? */
      rSpeak(192);
      askingYesNo = 5;
      return false;
    }
  }

  return vDefault();
}

/*______________________________________________________________________
   BREAK.  ONLY WORKS FOR MIRROR IN REPOSITORY AND, OF COURSE, THE VASE.
  ______________________________________________________________________*/
function verbBreak() {
  if (obj == 0) return vWhat();

  if (obj == MIRROR && CLOSED) {
    /* You strike the mirror a resounding blow, whereupon it 
     	   shatters into a myriad tiny fragments.*/
    rSpeak(197, BLACK);
    wakeDwarves();
    return false;
  }

  if (obj == MIRROR) {
    rSpeak(148, BLACK); /* It is too far up for you to reach.*/
    return false;
  }

  if (obj == VASE && prop[VASE] == 0) {
    rSpeak(
      198,
      BLACK
    ); /* You have taken the vase and hurled it delicately to the ground.*/
    if (toting(VASE)) drop(VASE, loc);
    prop[VASE] = 2;
    fixed[VASE] = -1;
    return false;
  }

  return vDefault();
}

/*______________________________________________________________________
   WAKE.  ONLY USE IS TO DISTURB THE DWARVES.
  ______________________________________________________________________*/
function verbWake() {
  if (obj == 0) return vWhat();

  if (obj == DWARF && CLOSED) {
    /* You prod the nearest dwarf, who wakes up grumpily, takes one look at
     	   you, curses, and grabs for his axe.*/
    rSpeak(199, BLACK);
    wakeDwarves();
    return false;
  }

  return vDefault();
}

/*______________________________________________________________________
   SUSPEND.  OFFER TO EXIT LEAVING THINGS RESTARTABLE, BUT
   REQUIRING A DELAY BEFORE RESTARTING (SO CAN'T SAVE THE
   WORLD BEFORE TRYING SOMETHING RISKY).  UPON RESTARTING,
   SETUP=-1 CAUSES RETURN TO 8305 TO PICK UP AGAIN.
  ______________________________________________________________________*/
function verbSuspend() {
  if (obj == 0) {
    sayIt("Can't suspend on this machine", BLACK);
    return false;
  } else return vDefault();
}

/*______________________________________________________________________
   HOURS.  REPORT CURRENT NON-PRIME-TIME HOURS. 
  ______________________________________________________________________*/
function verbHours() {
  if (obj == 0) sayIt("Open all day!", BLACK);
  else return vDefault();

  return false;
}

/*______________________________________________________________________
   LOG.  TOGGLE LOGIN EITHER ON OR OFF 
  ______________________________________________________________________*/
function verbSetLog() {
  if (obj == 0) {
    LOGON = !LOGON;

    if (LOGON) sayIt("Log on.", BLACK);
    else sayIt("Log off.", BLACK);
    return false;
  } else return vWhat();
}

/*______________________________________________________________________
   DIG.   
  ______________________________________________________________________*/
function verbDig() {
  if (obj == 0) {
    if (loc == 157) {
      // Scarab dead end
      if (!toting(SHOVEL)) {
        rSpeak(254, BLACK); /* Pity you don't have a shovel. */
        return false;
      }

      if (prop[SCARAB] == -1) {
        // Scarab is buried
        prop[HOLE] = 1; // hole is dug
        prop[SCARAB] = 0; // Scarab is uncovered
        TALLY--; // First seen scarab
        drop(SCARAB, 157); // Drop scarab in dead end

        /* Your shovel immediately hits something hard and metallic ... a gold scarab! */
        rSpeak(285, BLACK);
      } else
        rSpeak(
          284,
          BLACK
        ); /* There doesn't seem to be anything else to dig up. */
      return false;
    }
    if (loc == 143) {
      // North beach
      if (!toting(SHOVEL)) {
        rSpeak(254, BLACK); /* Pity you don't have a shovel. */
        return false;
      }

      if (prop[PEBBLE] == 0) {
        // Normal pebbles
        prop[PEBBLE] = 1; // Water-covered pebbles
        prop[CHITT1] = 0;
        prop[TRENCH] = 1;
        /* The hole you dig in the sand quickly becomes a trench that fills with water from
     		   	   what's left of the reservior and drains into the hole. */
        rSpeak(252, BLACK);
      } else rSpeak(253, BLACK); /* You make the trench bigger. */
    } else if (toting(SHOVEL))
      /* Dig all day, you won't find anything here. */
      rSpeak(251, BLACK);
    /* Digging without a shovel is quite impractical.  Even with a shovel progress is unlikely. */ else
      rSpeak(66, BLACK);

    return false;
  }

  return vWhat();
}

/*______________________________________________________________________
   TURN.   
  ______________________________________________________________________*/
function verbTurn() {
  if (obj == 0) return vWhat();

  if (loc == 156 && prop[PEDES] >= 1) {
    // Pyramid in first pedestal recess

    if (prop[PEDES] < 3) {
      prop[PEDES]++;
      rSpeak(
        263,
        BLACK
      ); /* The pyramid rotates clockwise a third of a turn and settles with a sharp 'click' */
      return false;
    }

    rSpeak(
      264,
      BLACK
    ); /* The pyramid rotates a final third turn and terminates with a slightly louder 'click'.
								After a moment it slowly lowers into the body of the pedestal and out of sight. 
								There is a low rumbling at the west wall. The triangle shape glows brightly and 
								disappears, leaving a triangular doorway. */
    prop[PEDES] = 0;
    prop[PEDE2] = 1; // Set pyramid on second pedestal
    move(PYRAM, 159); // Move pyramid to middle chamber (second pyramid)
    prop[PYRAM] = 1; // Pyramid is on pedestal
    prop[PDOOR] = 1; // Pyramid door appears
    return false;
  }

  if (loc == 159 && prop[PEDE2] == 1) {
    // Pyramid on second pedestal
    /* The pyramid spins freely on the smooth pedestal surface. Nothing interesting happens. */
    rSpeak(280, BLACK);
    return false;
  }

  rSpeak(42, BLACK); /* Nothing happens. */
}

/*______________________________________________________________________
   INSTR - print game instructions.   
  ______________________________________________________________________*/
function verbInstr() {
  hinted[3] = true;
  rSpeak(1, BLACK);

  setStatus();
}

/*______________________________________________________________________
   WHACK - whack the lamp.   
  ______________________________________________________________________*/
function verbWhack() {
  if (obj == 0) return vWhat();

  if (obj == LAMP) {
    lampAlwaysOn = true;
    prop[LAMP] = 1;

    rSpeak(
      298,
      BLACK
    ); /* The lamp flickers briefly then shines with a bright steady glow. */

    if (WZDARK) describeLoc = true;

    return false;
  }

  verbAttack(); // Not lamp? Try the generic attack routine
}

/*______________________________________________________________________
   PUSH - Push a door panel button.   
  ______________________________________________________________________*/
function verbPush() {
  if (loc != 62)
    // Not outside the storage room
    return vWhat();

  if (isNaN(wd2)) {
    rSpeak(13, BLACK); /* I don't understand that! */
    return false;
  }

  combo = combo + "" + wd2;

  if (combo.length > 4) combo = combo.substring(0, 4);

  if (prop[PANEL] == 0) {
    if (wd2.length >= 1) rSpeak(300, BLACK); /* <Click!> */
    if (wd2.length >= 2) rSpeak(300, BLACK); /* <Click!> */
    if (wd2.length >= 3) rSpeak(300, BLACK); /* <Click!> */
    if (combo.length < 4) return;

    if (combo != "8267") {
      // Fail.
      combo = "";
      rSpeak(301, BLACK); /* <Clunk!> */
      return false;
    }

    prop[PANEL] = 1;
    rSpeak(
      302,
      BLACK
    ); /* There is a <Ding!> and the door disappears into the wall. */
    return false;
  }

  rSpeak(42, BLACK); /* Nothing happens. */

  return false;
}

/*______________________________________________________________________
   Mellon - Speak, Friend, and enter.   
  ______________________________________________________________________*/
function verbMellon() {
  if (wd2 != "") return vWhat();

  if (loc != 167)
    // Not at elvish doorway
    return vWhat();

  if (prop[ARCHE] == 0) {
    prop[ARCHE] = 1;
    /* The wall trembles slightly and than part of it dissolves leaving a wide archway. */
    rSpeak(306, BLACK);
    return false;
  }

  rSpeak(42, BLACK); /* Nothing happens. */

  return false;
}

/*______________________________________________________________________
   What?
  ______________________________________________________________________*/
function vWhat() {
  obj = 0;
  normalInput = false;

  sayIt(verbWd + " what?", BLACK);

  return false;
}

/*======================================================================
     Process events after input has been processed
======================================================================*/
function processEvents() {
  dwarfStuff();

  if (gameOver) return;

  if (giantChasing) giantStuff();

  if (gameOver) return;

  if (askingYesNo > 0) return;

  while (forced(loc)) {
    forcedMove();
  }

  if (describeLoc) {
    describeLocation();
  }

  if (!gameOver) {
    clockEvents();
  }
}

/*======================================================================
         Dwarf stuff
  ======================================================================*/
function dwarfStuff() {
  /*______________________________________________________________________
   DWARF STUFF.  SEE EARLIER COMMENTS FOR DESCRIPTION OF
   VARIABLES.  REMEMBER SIXTH DWARF IS PIRATE AND IS THUS
   VERY DIFFERENT EXCEPT FOR MOTION RULES.

   FIRST OFF, DON'T LET THE DWARVES FOLLOW HIM INTO A PIT OR
   A WALL.  ACTIVATE THE WHOLE MESS THE FIRST TIME HE GETS
   AS FAR AS THE HALL OF MISTS (LOC 15).  IF NEWLOC IS
   FORBIDDEN TO PIRATE (IN PARTICULAR, IF IT'S BEYOND THE
   TROLL BRIDGE), BYPASS DWARF STUFF.  THAT WAY PIRATE CAN'T
   STEAL RETURN TOLL, AND DWARVES CAN'T MEET THE BEAR.  ALSO
   MEANS DWARVES WON'T FOLLOW HIM INTO DEAD END IN MAZE, BUT
   C'EST LA VIE.  THEY'LL WAIT FOR HIM OUTSIDE THE DEAD END.
  ______________________________________________________________________*/

  if (loc == 0 || forced(loc) || bitSetCondl(nextloc, 3)) {
  } else if (DFLAG == 0) {
    /*____ No dwarf process yet ____*/
    /* Is he deep enough in the cave for dwarves yet ______________*/
    if (inCave(loc)) DFLAG = 1;
  } else if (DFLAG == 1) {
    /*____ Dwarves may be encountered now ____*/
    /*______________________________________________________________________
        	WHEN WE ENCOUNTER THE FIRST DWARF, WE KILL 0, 1, OR 2 OF
        	THE 5 DWARVES.  IF ANY OF THE SURVIVORS IS AT LOC,
        	REPLACE HIM WITH THE ALTERNATE.
      	  ______________________________________________________________________*/
    if (!inCave(loc) || pct(95)) return;

    DFLAG = 2;

    for (var ii = 1; ii <= 2; ii++) {
      var jj = 1 + Math.floor(Math.random() * 5);
      if (pct(50)) dloc[jj] = 0;
    }

    for (var ii = 1; ii <= 5; ii++) {
      if (dloc[ii] == loc) dloc[ii] = DALTLC;

      odloc[ii] = dloc[ii];
    }

    /*       A little dwarf just walked around a corner, saw you, threw a little */
    /*       axe at you which missed, cursed, and ran away. */
    rSpeak(3, RED);
    drop(AXE, loc);
    return;
  } else {
    /*______________________________________________________________________
        THINGS ARE IN FULL SWING.  MOVE EACH DWARF AT RANDOM,
        EXCEPT IF HE'S SEEN US HE STICKS WITH US.  DWARVES NEVER
        GO TO LOCS <15.  IF WANDERING AT RANDOM, THEY DON'T BACK
        UP UNLESS THERE'S NO ALTERNATIVE.  IF THEY DON'T HAVE TO
        MOVE, THEY ATTACK.  AND, OF COURSE, DEAD DWARVES DON'T DO
        MUCH OF ANYTHING.
      ______________________________________________________________________*/
    DTOTAL = 0;
    ATTACK = 0;
    STICK = 0;

    for (var ii = 1; ii <= 6; ii++) {
      if (dloc[ii] != 0) moveDwarves(ii);
    }

    /*____________________________________________________________________
           NOW WE KNOW WHAT'S HAPPENING.  LET'S TELL THE POOR SUCKER
           ABOUT IT.
         ____________________________________________________________________*/
    if (DTOTAL == 0) return;
    if (DTOTAL != 1) {
      sayIt(
        "There are " +
          DTOTAL +
          " threatening little dwarves in the room with you.",
        RED
      );
    } else
      rSpeak(
        4,
        RED
      ); /* There is a threatening little dwarf in the room with you! */

    /*_________________________________________________________________
           When good dwarves turn bad ...
         _________________________________________________________________*/
    if (ATTACK == 0) {
    } else if (ATTACK == 1) {
      rSpeak(5, RED); /* 1 sharp, nasty knife is thrown at you */
      rSpeak(
        STICK + 52,
        RED
      ); /* STICK must be 0 or 1: It misses! (or) It gets you! */
    } else if (ATTACK > 1 && STICK <= 1) {
      sayIt(ATTACK + " of them throw knives at you!", RED);
      rSpeak(
        STICK + 6,
        RED
      ); /* None of them hit you! (or) One of them gets you! */
    } else {
      sayIt(ATTACK + " of them throw knives at you!", RED);
      sayIt(STICK + " of them get you!", RED);
    }

    if (ATTACK > 0) if (DFLAG == 2) DFLAG = 3;

    if (STICK > 0) {
      oldlc2 = loc;
      deadJim();
    }
  }
}

/*______________________________________________________________________
         Is location inside the cave.
  ______________________________________________________________________*/
function inCave(ploc) {
  return (
    ploc >= 15 &&
    ploc != 141 &&
    ploc != 142 &&
    ploc != 163 &&
    ploc != 164 &&
    ploc != 165 &&
    ploc != 166
  );
}

/*______________________________________________________________________
         Move Dwarves (and Pirate).
  ______________________________________________________________________*/
function moveDwarves(pp) {
  var jj = 1;
  var cc = dloc[pp];
  var dd = key[cc];
  var dd1 = 0;
  var nextDloc = 0;
  var lastjj = 0;

  if (dd != 0)
    do {
      nextDloc = Math.floor(Math.abs(travel[dd]) / 1000) % 1000;
      lastjj = jj - 1;

      if (nextDloc > 300) {
      } /* Special moves not allowed.    */ else if (nextDloc < 15) {
      } /* Not allowed in upper cave.    */ else if (nextDloc == 158) {
      } /* Not allowed in break room.    */ else if (nextDloc == odloc[pp]) {
      } /* Don't backtrack.              */ else if (nextDloc == dloc[pp]) {
      } /* Don't stay still.             */ else if (
        jj > 1 &&
        nextDloc == tk[lastjj]
      ) {
      } /* Same as previous move option. */ else if (jj >= 20) {
      } /* Only 20 move options allowed. */ else if (forced(nextDloc)) {
      } /* Forced moves not allowed.     */ else if (
        pp == 6 &&
        bitSetCondl(nextDloc, 3)
      ) {
      } /* Forbidden to Pirate.          */ else if (
        Math.floor(Math.abs(travel[dd]) / 1000000) == 100
      ) {
      } /* Location off-limits to dwarfs.*/ else {
        tk[jj] = nextDloc;
        jj++;
      }

      dd1 = dd;
      dd++;
    } while (travel[dd1] >= 0);

  tk[jj] = odloc[pp];
  if (jj >= 2) jj--;
  jj = 1 + Math.floor(Math.random() * jj);
  odloc[pp] = dloc[pp];
  dloc[pp] = tk[jj];

  dseen[pp] =
    (dseen[pp] && loc >= 15 && loc != 158) ||
    dloc[pp] == loc ||
    odloc[pp] == loc;

  if (!dseen[pp]) return;

  dloc[pp] = loc;

  if (pp != 6) {
    /*______________________________________________________________________
        	THIS THREATENING LITTLE DWARF IS IN THE ROOM WITH HIM!
      	______________________________________________________________________*/
    DTOTAL++;
    if (odloc[pp] == dloc[pp]) {
      ATTACK++;
      if (KNFLOC >= 0) KNFLOC = loc;
      if (Math.floor(Math.random() * 1000) < 95 * (DFLAG - 2)) STICK++;
    }
    return;
  }

  if (loc != CHLOC && prop[CHEST] < 0) movePirate();
}

/*______________________________________________________________________
         Move Pirate
   THE PIRATE'S SPOTTED HIM.  HE LEAVES HIM ALONE ONCE WE'VE
   FOUND CHEST.  CHECK IF A TREASURE IS HERE.  IF NOT,
   AND TALLY=TALLY2 PLUS ONE FOR AN UNSEEN CHEST, LET THE
   PIRATE BE SPOTTED.
  ______________________________________________________________________*/

function movePirate() {
  /*______________________________________________________________________
   PIRATE WON'T TAKE PYRAMID FROM PLOVER ROOM OR DARK ROOM (TOO EASY!).
  ______________________________________________________________________*/
  var treasure = false;

  for (var qq = MINTRS; qq <= MAXTRS; qq++) {
    if (qq == PYRAM && (loc == plac[PYRAM] || loc == plac[EMRALD])) {
    } else if (toting(qq)) {
      /* Out from the shadows behind you pounces a bearded pirate!  "Har, har,"
         	 he chortles, "I'll just take all this booty and hide it away with me
         	 chest deep in the maze!"  He snatches your treasure and vanishes into
         	 the gloom. */
      rSpeak(128, RED);

      /*__________________________________________________________________
	     	DON'T STEAL CHEST BACK FROM TROLL!
	    	__________________________________________________________________*/
      if (place[MESSAG] == 0) move(CHEST, CHLOC);

      move(MESSAG, CHLOC2);
      for (var rr = MINTRS; rr <= MAXTRS; rr++) {
        if (rr == PYRAM && (loc == plac[PYRAM] || loc == plac[EMRALD])) {
        } else {
          if (at(rr) & (fixed[rr] == 0)) carry(rr, loc);
          if (toting(rr)) drop(rr, CHLOC);
        }
      }

      dloc[6] = CHLOC;
      odloc[6] = CHLOC;
      dseen[6] = false;
      return;
    }

    treasure = here(qq);
  }

  if (
    TALLY == TALLY2 + 1 &&
    !treasure &&
    place[CHEST] == 0 &&
    here(LAMP) &&
    prop[LAMP] == 1
  ) {
    /* There are faint rustling noises from the darkness behind you.  As you
       turn toward them, the beam of your lamp falls across a bearded pirate.
       He is carrying a large chest.  "Shiver me timbers!" he cries, "I've
       been spotted!  I'd best hie meself off to the maze to hide me chest!"
       with that, he vanishes into the gloom. */
    rSpeak(186, RED);

    move(CHEST, CHLOC);
    move(MESSAG, CHLOC2);

    dloc[6] = CHLOC;
    odloc[6] = CHLOC;
    dseen[6] = false;
    return;
  }

  if (odloc[6] != dloc[6] && pct(20))
    /* There are faint rustling noises from the darkness behind you. */
    rSpeak(127, RED);
}

/*======================================================================
    Giant is chasing...
  ======================================================================*/
function giantStuff() {
  var entering = giantloc != loc;

  if (giantloc != ogiantloc && giantloc != loc) {
    ogiantloc = giantloc;
  }

  giantloc = loc;
  move(GIANT, loc);

  if (clockGiantChase > 0) clockGiantChase--;

  if (clockGiantChase == 4) {
    if (entering) rSpeak(216, BLACK);
    /* There is an enraged giant bearing down on you bellowing "FEE!" */ else
      rSpeak(
        220,
        BLACK
      ); /* There is an enraged giant here bellowing "FEE!".  */
  } else if (clockGiantChase == 3) {
    if (entering) rSpeak(217, BLACK);
    /* There is an enraged giant bearing down on you bellowing "FIE!". */ else
      rSpeak(
        221,
        BLACK
      ); /* There is an enraged giant here bellowing "FIE!".  */
  } else if (clockGiantChase == 2) {
    if (entering) rSpeak(218, BLACK);
    /* There is an enraged giant bearing down on you bellowing "FOE!". */ else
      rSpeak(
        222,
        BLACK
      ); /* There is an enraged giant here bellowing "FOE!".  */
  } else if (clockGiantChase == 1) {
    if (entering) rSpeak(219, BLACK);
    /* There is an enraged giant bearing down on you bellowing "FUM!". */ else
      rSpeak(
        223,
        BLACK
      ); /* There is an enraged giant here bellowing "FUM!".  */
  } else if (clockGiantChase == 0) {
    clockGiantChase = 5; // Reset giant stats - giant stops chasing and disappears.
    clockGiant = 2;
    giantloc = 0;
    giantChasing = false;

    if (inGiantDomain(loc)) {
      /* The giant grabs you with both hands and effortlessly separates the top half of
				   your body from the lower half  */
      rSpeak(215, BLACK);

      move(HARP, 152); // Return the harp to the amphitheater.
      prop[HARP] = 0;
      oldlc2 = loc;
      deadJim();
      return;
    }

    if (toting(HARP) || here(HARP))
      /* The giant grabs the harp and heads back into the gloom muttering "Bloody tourists". */
      rSpeak(224, BLACK);
    /* The giant loses interest and disappears back into the gloom.  */ else
      rSpeak(225, BLACK);

    move(HARP, 152); // Return the harp to the amphitheater.
    prop[HARP] = 0;
  }
}

/*======================================================================
    Forced Move - describe circumstances for the forced move and then
    move to the forced location.
  ======================================================================*/
function forcedMove() {
  describeLocation();

  processMove(1);
}

//======================================================================
//    DESCRIBE THE CURRENT LOCATION AND (MAYBE) GET NEXT COMMAND.
//======================================================================
function describeLocation() {
  if (askingYesNo > 0)
    // Question is being asked so skip
    return;

  if (loc == 0) {
    deadJim();
    return;
  }

  KK = stext[loc];
  if (abb[loc] % ABBNUM == 0 || KK == 0) KK = ltext[loc];

  if (dark() && !forced(loc)) {
    if (WZDARK && pct(35)) {
      rSpeak(23, BLACK); // You fell into a pit and broke every bone in your body!
      oldlc2 = loc;

      deadJim();
      return;
    }
    // It is now pitch dark. If you proceed you will likely fall into a pit.
    KK = rtext[16];
  }

  if (toting(BEAR)) rSpeak(141, BLACK); // You are being followed by a very large, tame bear.

  speak(KK, BLACK); // Print location description.

  if (loc == 33 && pct(25) && !CLOSNG) rSpeak(8, BLACK); // A hollow voice says "PLUGH".

  if (!dark()) {
    printLocationObjects();
  }

  if (loc == 92 && !giantDead && toting(HARP) && prop[HARP] < 3) {
    // In Giant room with the harp
    prop[HARP] = 3;
    rSpeak(
      212,
      RED
    ); /* The harp struggles in your hands and cries "MASTER! MASTER!". */
  }

  mapImagesChanged = true;

  return;
}

//______________________________________________________________________
//    PRINT OUT DESCRIPTIONS OF OBJECTS AT THIS LOCATION.  IF
//    NOT CLOSING AND PROPERTY VALUE IS NEGATIVE, TALLY OFF
//    ANOTHER TREASURE.  RUG IS SPECIAL CASE  ONCE SEEN, ITS
//    PROP IS 1 (DRAGON ON IT) TILL DRAGON IS KILLED.
//    SIMILARLY FOR CHAIN; PROP IS INITIALLY 1 (LOCKED TO BEAR).
//    THESE HACKS ARE BECAUSE PROP=0 IS NEEDED TO GET FULL SCORE.
//______________________________________________________________________*/
function printLocationObjects() {
  var ii, obj;

  if (loc == 147) {
    // Glow-worm grotto
    if (prop[LAMP] == 0 || !here(LAMP)) {
      // lamp is off or not here
      if (prop[RUBY] == -1) prop[GROTT] = 1;
      // Show stars with Sirius
      else prop[GROTT] = 2; // Show stars without Sirius
    } else {
      prop[GROTT] = 0; // Show worms
    }
  }

  if (!forced(loc)) {
    abb[loc]++;
  }

  ii = atlocFirst[loc];
  obj = ii;

  //console.log("..... printLocationObjects loc "+loc);
  //console.log("First Location "+loc+" atlocFirst["+loc+"] = "+atlocFirst[loc]);
  while (obj != 0) {
    // For all objects at location

    if (ii > 200)
      // two-placed object
      obj = ii - 200;
    else obj = ii;

    if (obj == 0) break;

    if (obj == STEPS && toting(NUGGET)) {
    } else if (CLOSED && prop[obj] < 0) {
    } else if (obj == RUBY && prop[RUBY] < 0) {
      if (!rubySeen) {
        rubySeen = true;
        TALLY--;
      }
    } else {
      if (prop[obj] < 0) {
        // See unseen Treasure (prop[] = -1)

        prop[obj] = 0;
        if (obj == RUG || obj == CHAIN) prop[obj] = 1;

        TALLY--;

        // IF REMAINING TREASURES TOO ELUSIVE, ZAP HIS LAMP.
        if (TALLY == TALLY2 && TALLY != 0) LIMIT = Math.min(35, LIMIT);
      }

      if (obj == HARP && loc == 152) {
        // Natural amphitheater
        if (here(HARP) && !toting(HARP))
          // If harp is in Amphitheater (but not carried) it will sing.
          prop[HARP] = 1;
        // Harp is singing
        else prop[HARP] = 0; // Harp is unhappy
      }

      if (obj == STEPS && loc == fixed[STEPS]) {
        // Rough stone steps lead up the dome
        pSpeak(STEPS, 1, BLACK);
      } else {
        pSpeak(obj, prop[obj], BLACK);
      }
    }

    ii = linkFwd[ii];
  } /* while */
}

//______________________________________________________________________
//    Check type of Word
//______________________________________________________________________*/
function checkWord(parmTyp, parmWd) {
  var vocI = vocab(parmWd, -1);

  if (parmTyp == 1) i1 = vocI;
  else i2 = vocI;

  if (wd1 == "SAY" && parmTyp == 2) return "None";
  if (parmWd == "SPY") return "Spy";
  if (parmWd == "LOAD") return "Load";
  if (parmWd == "SAVE") return "Save";
  if (parmWd == "DELET") return "Delete";

  if (vocI < 0) if (parmTyp == 1 || !(parmWd == "")) return "Bad";

  if (vocI == 0) return "None";
  if (vocI < 1000) return "Motion";
  if (vocI < 2000) return "Object";
  if (vocI < 3000) return "Verb";
  if (vocI < 4000) return "Speak";
  bug(22);

  return "None";
}

/*======================================================================
    KICK THE RANDOM NUMBER GENERATOR JUST TO ADD VARIETY TO
    THE CHASE.  ALSO, IF CLOSING TIME, CHECK FOR ANY OBJECTS
    BEING TOTED WITH PROP < 0 AND SET THE PROP TO -1-PROP.
    THIS WAY OBJECTS WON'T BE DESCRIBED UNTIL THEY'VE BEEN
    PICKED UP AND PUT DOWN SEPARATE FROM THEIR RESPECTIVE
    PILES.  DON'T TICK CLOCK1 UNLESS WELL INTO CAVE (AND NOT
    AT Y2).
  ======================================================================*/
function clockEvents() {
  checkHints();

  if (CLOSED) {
    if (prop[OYSTER] < 0 && toting(OYSTER)) pSpeak(OYSTER, 1, BLACK);

    for (var ii = 1; ii <= 200; ii++) {
      if (toting(ii) && prop[ii] < 0) prop[ii] = -1 - prop[ii];
    }
  }

  WZDARK = dark();
  if (KNFLOC > 0 && KNFLOC != loc) KNFLOC = 0;

  TURNS = TURNS + 1;

  if (clockDucky > 0) {
    clockDucky--;

    if (clockDucky == 0) {
      // Rubber duck makes it to the top of the well
      prop[DUCKY] = 1;
      move(DUCKY, 141);
    }
  }

  if (prop[HARP] == 3 && !giantDead) {
    if (clockGiant >= 0) clockGiant--;

    if (clockGiant == 0) {
      giantChasing = true;
      giantloc = loc;
      move(GIANT, loc);
      ogiantloc = 94;

      if (loc == 92) {
        /* There is some kind of disturbance, wait a second....  >POOF!<                   
                   A huge cloud of green smoke fills the room. Gradually it clears to reveal an   
                   enraged giant bearing down on you bellowing "THIEF!". */

        rSpeak(213, BLACK);
      } else {
        /* There is some kind of disturbance in the adjoining room. Trails of thick green  ";
                   smoke appear and a disconnected voice bellows "THIEF!". */
        rSpeak(214, BLACK);
      }
    }
  }

  if (loc == 158) {
    // Breakroom dwarf banter
    if (banter < 6) {
      rSpeak(292 + banter, BLACK);
      banter++;
    }
  }

  if (TALLY == 0 && inCave(loc) && loc != 33) {
    /* Once all treasures have been found, count down from 30 till cave closing announcement. */
    CLOCK1--;
  }

  if (CLOCK1 == 0) caveClosing();
  else {
    if (CLOCK1 < 0)
      /* Once cave closing is announced, count down from 50 till Repository. */
      CLOCK2--;

    if (CLOCK2 == 0) enterRepository();

    processLamp();
  }
}

/*______________________________________________________________________
         Is location in the giant's domain?
  ______________________________________________________________________*/
function inGiantDomain(ploc) {
  return ploc == 92 || (ploc >= 149 && ploc <= 152);
}

/*______________________________________________________________________
    CHECK IF THIS LOC IS ELIGIBLE FOR ANY HINTS.  IF BEEN
    HERE LONG ENOUGH, BRANCH TO HELP SECTION (ON LATER PAGE).
    HINTS ALL COME BACK HERE EVENTUALLY TO FINISH THE LOOP.
    IGNORE "HINTS" < 4 (SPECIAL STUFF, SEE DATABASE NOTES).
______________________________________________________________________*/
function checkHints() {
  for (var ii = 4; ii <= HNTMAX; ii++) {
    if (!hinted[ii]) {
      if (!bitSetCondl(loc, ii)) hintlc[ii] = 0;
      else hintlc[ii]++;

      if (hintlc[ii] >= hints[ii][1]) {
        /*___________________________________________________________
                 	HINTS

              	  COME HERE IF HE'S BEEN LONG ENOUGH AT REQUIRED LOC(S) FOR
              	  SOME UNUSED HINT.  HINT NUMBER IS IN VARIABLE "HINT".
              	  BRANCH TO QUICK TEST FOR ADDITIONAL CONDITIONS, THEN COME
              	  BACK TO DO NEAT STUFF..
             	___________________________________________________________*/
        if (ii != 5) hintlc[ii] = 0;

        /* Check for reasons not to hint: */
        switch (ii) {
          case 4:
            if (prop[GRATE] != 0 || here(KEYS)) return;
            break; /* Cave  */
          case 5:
            if (!here(BIRD) || !toting(ROD) || obj != BIRD) return;
            break; /* Bird  */
          case 6:
            if (!here(SNAKE) || here(BIRD)) return;
            break; /* Snake */
          case 7:
            if (
              atlocLast[loc] != 0 ||
              atlocLast[oldloc] != 0 ||
              atlocLast[oldlc2] != 0 ||
              HOLDNG <= 1
            )
              return;
            break; /* Maze  */
          case 8:
            if (prop[EMRALD] == -1 || prop[PYRAM] != -1) return;
            break; /* Dark  */
          case 9:
            break; /* Witt  */
          default:
            bug(27);
            return;
        }

        askingYesNo = 6;
        rSpeak(hints[ii][3]); // Ask the hint-specific question
        savHint = ii;
        return;
      }
    }
  }
}

/*______________________________________________________________________
    CAVE CLOSING AND SCORING

  THESE SECTIONS HANDLE THE CLOSING OF THE CAVE.  THE CAVE
  CLOSES "CLOCK1" TURNS AFTER THE LAST TREASURE HAS BEEN
  LOCATED (INCLUDING THE PIRATE'S CHEST, WHICH MAY OF
  COURSE NEVER SHOW UP).  NOTE THAT THE TREASURES NEED NOT
  HAVE BEEN TAKEN YET, JUST LOCATED.  HENCE CLOCK1 MUST BE
  LARGE ENOUGH TO GET OUT OF THE CAVE (IT ONLY TICKS WHILE
  INSIDE THE CAVE).  WHEN IT HITS ZERO, WE BRANCH TO 10000
  TO START CLOSING THE CAVE, AND THEN SIT BACK AND WAIT FOR
  HIM TO TRY TO GET OUT.  IF HE DOESN'T WITHIN CLOCK2
  TURNS, WE CLOSE THE CAVE  IF HE DOES TRY, WE ASSUME HE
  PANICS, AND GIVE HIM A FEW ADDITIONAL TURNS TO GET
  FRANTIC BEFORE WE CLOSE.  WHEN CLOCK2 HITS ZERO, WE
  BRANCH TO 11000 TO TRANSPORT HIM INTO THE FINAL PUZZLE.
  NOTE THAT THE PUZZLE DEPENDS UPON ALL SORTS OF RANDOM
  THINGS.  FOR INSTANCE, THERE MUST BE NO WATER OR OIL,
  SINCE THERE ARE BEANSTALKS WHICH WE DON'T WANT TO BE ABLE
  TO WATER, SINCE THE CODE CAN'T HANDLE IT.  ALSO, WE CAN
  HAVE NO KEYS, SINCE THERE IS A GRATE (HAVING MOVED THE
  FIXED OBJECT!) THERE SEPARATING HIM FROM ALL THE
  TREASURES.  MOST OF THESE PROBLEMS ARISE FROM THE USE OF
  NEGATIVE PROP NUMBERS TO SUPPRESS THE OBJECT DESCRIPTIONS
  UNTIL HE'S ACTUALLY MOVED THE OBJECTS.

  WHEN THE FIRST WARNING COMES, WE LOCK THE GRATE, DESTROY
  THE BRIDGE, KILL ALL THE DWARVES (AND THE PIRATE), REMOVE
  THE TROLL AND BEAR (UNLESS DEAD), AND SET "CLOSNG" TO
  TRUE.  LEAVE THE DRAGON  TOO MUCH TROUBLE TO MOVE IT.
  FROM NOW UNTIL CLOCK2 RUNS OUT, HE CANNOT UNLOCK THE
  GRATE, MOVE TO ANY LOCATION OUTSIDE THE CAVE (LOC<9), OR
  CREATE THE BRIDGE.  NOR CAN HE BE RESURRECTED IF HE DIES.
  NOTE THAT THE SNAKE IS ALREADY GONE, SINCE HE GOT TO THE
  TREASURE ACCESSIBLE ONLY VIA THE HALL OF THE MT.  KING.
  ALSO, HE'S BEEN IN GIANT ROOM (TO GET EGGS), SO WE CAN
  REFER TO IT.  ALSO ALSO, HE'S GOTTEN THE PEARL, SO WE
  KNOW THE BIVALVE IS AN OYSTER.  *AND*, THE DWARVES MUST
  HAVE BEEN ACTIVATED, SINCE WE'VE FOUND CHEST.
  ______________________________________________________________________*/
function caveClosing() {
  prop[GRATE] = 0;
  prop[FISSUR] = 0;

  for (var ii = 1; ii <= 6; ii++) {
    dseen[ii] = false;
    dloc[ii] = 0;
  }

  move(TROLL, 0);
  move(TROLL + 200, 0);
  move(TROLL2, plac[TROLL]);
  move(TROLL2 + 200, fixd[TROLL]);
  juggle(CHASM);
  if (prop[BEAR] != 3) destroy(BEAR);

  prop[CHAIN] = 0;
  fixed[CHAIN] = 0;
  prop[AXE] = 0;
  fixed[AXE] = 0;

  /* A sepulchral voice reverberating through the cave, says, "Cave closing
	   soon.  All adventurers exit immediately through main office." */

  rSpeak(129, RED);
  CLOCK1 = -1;
  CLOSNG = true;
}

/*______________________________________________________________________
  ONCE HE'S PANICKED, AND CLOCK2 HAS RUN OUT, WE COME HERE
  TO SET UP THE STORAGE ROOM.  THE ROOM HAS TWO LOCS,
  HARDWIRED AS 115 (NE) AND 116 (SW).  AT THE NE END, WE
  PLACE EMPTY BOTTLES, A NURSERY OF PLANTS, A BED OF
  OYSTERS, A PILE OF LAMPS, RODS WITH STARS, SLEEPING
  DWARVES, AND HIM.  AND THE SW END WE PLACE GRATE OVER
  TREASURES, SNAKE PIT, COVEY OF CAGED BIRDS, MORE RODS,
  AND PILLOWS.  A MIRROR STRETCHES ACROSS ONE WALL.  MANY
  OF THE OBJECTS COME FROM KNOWN LOCATIONS AND/OR STATES
  (E.G.  THE SNAKE IS KNOWN TO HAVE BEEN DESTROYED AND
  NEEDN'T BE CARRIED AWAY FROM ITS OLD "PLACE"), MAKING THE
  VARIOUS OBJECTS BE HANDLED DIFFERENTLY.  WE ALSO DROP ALL
  OTHER OBJECTS HE MIGHT BE CARRYING (LEST HE HAVE SOME
  WHICH COULD CAUSE TROUBLE, SUCH AS THE KEYS).  WE
  DESCRIBE THE FLASH OF LIGHT AND TRUNDLE BACK.
______________________________________________________________________*/
function enterRepository() {
  prop[BOTTLE] = putMove(BOTTLE, 115, 1);
  prop[PLANT] = putMove(PLANT, 115, 0);
  prop[OYSTER] = putMove(OYSTER, 115, 0);
  prop[LAMP] = putMove(LAMP, 115, 0);
  prop[ROD] = putMove(ROD, 115, 0);
  prop[DWARF] = putMove(DWARF, 115, 0);
  loc = 115;
  oldloc = 115;
  nextloc = 115;

  /* LEAVE THE GRATE WITH NORMAL (NON-NEGATIVE PROPERTY). */
  FOO = putMove(GRATE, 116, 0);
  prop[SNAKE] = putMove(SNAKE, 116, 1);
  prop[BIRD] = putMove(BIRD, 116, 1);
  prop[CAGE] = putMove(CAGE, 116, 0);
  prop[ROD2] = putMove(ROD2, 116, 0);
  prop[PILLOW] = putMove(PILLOW, 116, 0);
  prop[MIRROR] = putMove(MIRROR, 115, 0);
  fixed[MIRROR] = 116;

  for (var ii = 1; ii <= 200; ii++) if (toting(ii)) destroy(ii);

  /* The sepulchral voice entones, "The cave is now closed."  as the echoes
	   fade, there is a blinding flash of light (and a small puff of orange
	   smoke). . . .    as your eyes refocus, you look around and find...*/
  rSpeak(132, RED);

  CLOSED = true;
}

/*______________________________________________________________________
  ANOTHER WAY WE CAN FORCE AN END TO THINGS IS BY HAVING
  THE LAMP GIVE OUT.  WHEN IT GETS CLOSE, WE COME HERE TO
  WARN HIM.  WE GO TO 12000 IF THE LAMP AND FRESH BATTERIES
  ARE HERE, IN WHICH CASE WE REPLACE THE BATTERIES AND
  CONTINUE.  12200 IS FOR OTHER CASES OF LAMP DYING.  12400
  IS WHEN IT GOES OUT, AND 12600 IS IF HE'S WANDERED
  OUTSIDE AND THE LAMP IS USED UP, IN WHICH CASE WE FORCE
  HIM TO GIVE UP.
  ______________________________________________________________________*/
function processLamp() {
  if (prop[LAMP] == 1)
    // Lamp is on
    LIMIT = LIMIT - 1;

  if (LIMIT <= 30 && here(BATTER) && prop[BATTER] == 0 && here(LAMP)) {
    replaceBattery();
    return;
  }
  if (LIMIT == 0) {
    expireLamp();
    return;
  }
  if (LIMIT < 0 && !inCave(loc)) {
    callItADay();
    return;
  }
  if (LIMIT <= 30) {
    dimmingLamp();
    return;
  }
}

/*______________________________________________________________________
   Replace Battery
  ______________________________________________________________________*/
function replaceBattery() {
  rSpeak(
    188,
    BLACK
  ); /* Your lamp is getting dim. I'm taking the liberty of replacing the batteries.*/

  prop[BATTER] = 1;
  if (toting(BATTER)) drop(BATTER, loc);
  LIMIT = LIMIT + 2500;
  LMWARN = false;
}

/*______________________________________________________________________
  Expire Lamp
  ______________________________________________________________________*/
function expireLamp() {
  LIMIT = -1;
  prop[LAMP] = 0;
  if (here(LAMP)) rSpeak(184, BLACK); /* Your lamp has run out of power.*/
}

/*______________________________________________________________________
  No lamp so call it a day
  ______________________________________________________________________*/
function callItADay() {
  /* There's not much point in wandering around out here, and you can't
	   explore the cave without a lamp.  So let's just call it a day.*/
  sayIt(" ", BLACK);
  rSpeak(185, BLACK);

  tallyScore("QUIT");
  endGame();
}

/*______________________________________________________________________
  Replace Battery
  ______________________________________________________________________*/
function dimmingLamp() {
  if (LMWARN || !here(LAMP)) return;

  if (place[BATTER] == 0)
    /* Your lamp is getting dim.  You'd best start wrapping this up, unless
      you can find some fresh batteries.  I seem to recall there's a vending
      machine in the maze.  Bring some coins with you.*/
    rSpeak(183, RED);
  else if (prop[BATTER] == 1)
    /* Your lamp is getting dim, and you're out of spare batteries.  You'd
      best start wrapping this up.*/
    rSpeak(189, RED);
  /* Your lamp is getting dim.  You'd best go back for those batteries.*/ else
    rSpeak(187, RED);

  LMWARN = true;
}

/*______________________________________________________________________
  OH DEAR, HE'S DISTURBED THE DWARVES. 
  ______________________________________________________________________*/
function wakeDwarves() {
  /*The resulting ruckus has awakened the dwarves.  There are now several
	threatening little dwarves in the room with you!  Most of them throw
	knives at you!  All of them get you!*/
  rSpeak(136, RED);

  tallyScore("DEAD");
  endGame();
}

/*______________________________________________________________________
  "YOU'RE DEAD, JIM."

  IF THE CURRENT LOC IS ZERO, IT MEANS THE CLOWN GOT
  HIMSELF KILLED.  WE'LL ALLOW THIS MAXDIE TIMES.  MAXDIE
  IS AUTOMATICALLY SET BASED ON THE NUMBER OF SNIDE
  MESSAGES AVAILABLE.  EACH DEATH RESULTS IN A MESSAGE (81,
  83, ETC.) WHICH OFFERS REINCARNATION  IF ACCEPTED, THIS
  RESULTS IN MESSAGE 82, 84, ETC.  THE LAST TIME, IF HE
  WANTS ANOTHER CHANCE, HE GETS A SNIDE REMARK AS WE EXIT.
  WHEN REINCARNATED, ALL OBJECTS BEING CARRIED GET DROPPED
  AT OLDLC2 (PRESUMABLY THE LAST PLACE PRIOR TO BEING
  KILLED) WITHOUT CHANGE OF PROPS.  THE LOOP RUNS BACKWARDS
  TO ASSURE THAT THE BIRD IS DROPPED BEFORE THE CAGE.
  (THIS KLUGE COULD BE CHANGED ONCE WE'RE SURE ALL
  REFERENCES TO BIRD AND CAGE ARE DONE BY KEYWORDS.) THE
  LAMP IS A SPECIAL CASE (IT WOULDN'T DO TO LEAVE IT IN THE
  CAVE).  IT IS TURNED OFF AND LEFT OUTSIDE THE BUILDING
  (ONLY IF HE WAS CARRYING IT, OF COURSE).  HE HIMSELF IS
  LEFT INSIDE THE BUILDING (AND HEAVEN HELP HIM IF HE TRIES
  TO XYZZY BACK INTO THE CAVE WITHOUT THE LAMP!).  OLDLOC
  IS ZAPPED SO HE CAN'T JUST "RETREAT".

  THE EASIEST WAY TO GET KILLED IS TO FALL INTO A PIT IN
  PITCH DARKNESS.

  OKAY, HE'S DEAD.  LET'S GET ON WITH IT.
  ______________________________________________________________________*/
function deadJim() {
  if (CLOSNG) {
    /*____________________________________________________________________
			HE DIED DURING CLOSING TIME.  NO RESURRECTION.  TALLY UP
			A DEATH AND EXIT.
		  ____________________________________________________________________*/
    /* It looks as though you're dead.  Well, seeing as how it's so close to
			closing time anyway, I think we'll just call it a day. */
    rSpeak(131, BLACK);

    NUMDIE = NUMDIE + 1;

    tallyScore("DEAD");
    endGame();
    return;
  }

  // First death:
  /* Oh dear, you seem to have gotten yourself killed.  I might be able to
		   help you out, but I've never really done this before.  Do you want me to try to reincarnate you? */
  // Second death:
  /* You clumsy oaf, you've done it again!  I don't know how long I can
		   keep this up.  Do you want me to try reincarnating you again?   */
  // Third death:
  /* Now you've really done it!  I'm out of orange smoke!  You don't expect          
		   me to do a decent reincarnation without any orange smoke, do you? */
  sayIt(" ", BLACK);
  rSpeak(81 + NUMDIE * 2, BLACK);
  sayIt(" ", BLACK);
  askingYesNo = 2;
  return;
}

/*______________________________________________________________________
  TALLYSCORE:
  THE PRESENT SCORING ALGORITHM IS AS FOLLOWS:
     OBJECTIVE:          POINTS:        		TOTAL:     
            
  EACH TREASURE < CHEST                                          
					GOLD   12                                                                         
					DIAMO  12                                                                         
					SILVE  12                                                                         
					JEWEL  12                                                                         
					COINS  12   
  TREASURE CHEST ITSELF    14                                    
  EACH TREASURE > CHEST                          
					EGGS   16                                                                         
					TRIDE  16                                                                         
					VASE   16                                                                         
					EMERA  16                                                                         
					PYRAM  16                                                                         
					PEARL  16                                                                         
					RUG    16                                                                         
					SPICE  16                                                                         
					CHAIN  16                                                                         
					DUCK   16                                                                         
					DAGGE  16                                                                         
					RUBY   16   
					HARP   16
					NECKL  16
					RING   16				
					SCARA  16
					MASK   16					
					TEAPO  16	
					BROOC  16	
					OPAL   16															
					                           ----              
                                                394  
												
  GETTING WELL INTO CAVE   25                   419    
  SURVIVING (MAX-NUM)*10 = 30            		449                
  NOT QUITTING              4                   453                
  REACHING "CLOSNG"        25                   478                
  "CLOSED": QUIT/KILLED    10
            KLUTZED        25
            WRONG WAY      30
            SUCCESS        45                   523                
  Magazine in Rack         10                   533  
  Been to Tolkien room     20                   553  
  Witt's End sign in place 16                   569                

  ROUND OUT THE TOTAL       1                     1 
												===
                                       TOTAL:   570                
  (POINTS CAN ALSO BE DEDUCTED FOR USING HINTS.)
  
  prop[] for a Treasure:
	-1 - Not seen yet
	 0 - Seen / taken
	 
  Note at game start you already have 31 points:
		31 points = 10 * 3 lives left + 1 round up point

  ______________________________________________________________________*/
function tallyScore(reason) {
  /* FIRST TALLY UP THE TREASURES.  MUST BE IN BUILDING AND
	   NOT BROKEN.  GIVE THE POOR GUY 2 POINTS JUST FOR FINDING
	   EACH TREASURE. */
  //console.log("TallyScore "+reason);
  MXSCOR = 0;
  SCORE = 0;

  var jj;
  for (var ii = MINTRS; ii <= MAXTRS; ii++) {
    if (ii == CHEST) jj = 14;
    else if (ii > CHEST) jj = 16;
    else jj = 12;

    if (prop[ii] >= 0) {
      SCORE = SCORE + 2; // 2 points just for seeing/taking the treasure
      //console.log("Treasure ii "+ii);
    }

    if (place[ii] == 3 && prop[ii] >= 0) {
      // Treasue is in well house (and seen/taken)
      SCORE = SCORE + jj - 2;
      //console.log("Treasure "+ii+" in Building "+jj+" Total score "+SCORE);
    } else if (prop[ii] >= 0) {
      //console.log("Treasure "+ii+" seen         2 Total score "+SCORE);
    }

    MXSCOR = MXSCOR + jj;
  }
  //console.log("All Treasures "+MINTRS+" to "+MAXTRS+" Max "+MXSCOR+" Score "+SCORE);

  if (DFLAG != 0)
    // Got deep enough to see dwarves
    SCORE = SCORE + 25;
  MXSCOR = MXSCOR + 25;
  //console.log("Deep in Cave      25 Max "+MXSCOR+" Score "+SCORE);

  /*______________________________________________________________________
	  NOW LOOK AT HOW HE FINISHED AND HOW FAR HE GOT.  MAXDIE
	  AND NUMDIE TELL US HOW WELL HE SURVIVED. DFLAG WILL TELL US IF HE
	  EVER GOT SUITABLY DEEP INTO THE CAVE.  CLOSNG STILL
	  INDICATES WHETHER HE REACHED THE ENDGAME.  AND IF HE GOT
	  AS FAR AS "CAVE CLOSED" (INDICATED BY "CLOSED"), THEN
	  BONUS IS ZERO FOR MUNDANE EXITS OR 133, 134, 135 IF HE
	  BLEW IT (SO TO SPEAK).
	______________________________________________________________________*/
  SCORE = SCORE + (MAXDIE - NUMDIE) * 10; // 10 points for each remaining life (you start with 3)
  MXSCOR = MXSCOR + MAXDIE * 10;
  //console.log("Remaining Lives   30 Max "+MXSCOR+" Score "+SCORE+" Lives "+(MAXDIE - NUMDIE));
  if (reason != "SCORE" && reason != "QUIT")
    // Lose 4 points if you quit
    SCORE = SCORE + 4;
  MXSCOR = MXSCOR + 4;
  //console.log("No Quitting        4 Max "+MXSCOR+" Score "+SCORE);

  if (CLOSNG)
    // Got to Cave Closing
    SCORE = SCORE + 25;
  MXSCOR = MXSCOR + 25;
  //console.log("Cave Closing      25 Max "+MXSCOR+" Score "+SCORE);
  if (CLOSED)
    // Got to Repository endgame
    switch (BONUS) {
      case 0:
        SCORE = SCORE + 10;
        break;
      case 135:
        SCORE = SCORE + 25;
        break;
      case 134:
        SCORE = SCORE + 30;
        break;
      case 133:
        SCORE = SCORE + 45;
        break;
      default:
    }
  MXSCOR = MXSCOR + 45;
  //console.log("Repository        45 Max "+MXSCOR+" Score "+SCORE);

  if (place[MAGZIN] == 8)
    SCORE =
      SCORE +
      10; /* 10 points for returning the magazines to the magazine rack */
  MXSCOR = MXSCOR + 10;
  //console.log("Magazine          10 Max "+MXSCOR+" Score "+SCORE);

  if (prop[SIGN] == 1)
    SCORE = SCORE + 16; /* 16 points for placing sign outside Witt's End */
  MXSCOR = MXSCOR + 16;
  //console.log("Witt sign         16 Max "+MXSCOR+" Score "+SCORE);

  if (prop[ARCHE] == 1)
    SCORE = SCORE + 20; /* 20 points for entering the Tolkien room */
  MXSCOR = MXSCOR + 20;
  //console.log("Tolkien room      20 Max "+MXSCOR+" Score "+SCORE);

  SCORE = SCORE + 1; /* 1 point to round out the total */
  MXSCOR = MXSCOR + 1;
  //console.log("Rounding           1 Max "+MXSCOR+" Score "+SCORE);

  /* DEDUCT POINTS FOR HINTS.  HINTS < 4 ARE SPECIAL  SEE
	   DATABASE DESCRIPTION. */
  for (var ii = 1; ii <= HNTMAX; ii++) {
    if (hinted[ii]) SCORE = SCORE - hints[ii][2];
  }
}

/*______________________________________________________________________
   SHOW THE SCORE AND END THE GAME.
  ______________________________________________________________________*/
function endGame() {
  /* THAT SHOULD BE GOOD ENOUGH.  LET'S TELL HIM ALL ABOUT IT. */
  sayIt(" ", BLACK);
  sayIt(
    "     You scored " +
      SCORE +
      " out of a possible " +
      MXSCOR +
      " using " +
      TURNS +
      " turns.",
    BLACK
  );

  var ii;
  for (ii = 1; ii <= CLSSES; ii++) if (cval[ii] >= SCORE) break;

  if (ii > CLSSES) {
    sayIt(" ", BLACK);
    sayIt("     You just went off my scale!!", BLACK);
    sayIt(" ", BLACK);
    return;
  } else if (ii >= CLSSES - 1) {
    sayIt("     " + ctext[ii], BLACK);
    sayIt(" ", BLACK);
    sayIt(
      "     To achieve the next higher rating would be a neat trick!",
      BLACK
    );
    sayIt(" ", BLACK);
    sayIt("     Congratulations!!", BLACK);
  } else {
    sayIt("     " + ctext[ii], BLACK);
    K = cval[ii] + 1 - SCORE;
    sayIt(" ", BLACK);
    if (K == 1)
      sayIt(
        "     To achieve the next higher rating, you need 1 more point.",
        BLACK
      );
    else
      sayIt(
        "     To achieve the next higher rating, you need " +
          K +
          " more points.",
        BLACK
      );
  }

  sayIt(" ", BLACK);

  gameOver = true;

  setStatus();
}

//______________________________________________________________________________
//    Process a yes/no question.Ask Game Start question.
//______________________________________________________________________________
function processYesNo() {
  switch (askingYesNo) {
    case 1:
      startYesNo();
      break;
    case 2:
      deadYesNo();
      break;
    case 3:
      quitYesNo();
      break;
    case 4:
      dragonYesNo();
      break;
    case 5:
      oysterYesNo();
      break;
    case 6:
      hint1YesNo();
      break;
    case 7:
      hint2YesNo();
      break;
    default:
      break;
  }
}

//______________________________________________________________________________
//    Ask Game Start question.
//    Welcome to Adventure!!  Would you like instructions?
//______________________________________________________________________________
function startYesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    hinted[3] = true;
    rSpeak(1, BLACK);
  } else if (wd1 == "N" || wd1 == "NO") {
    hinted[3] = false;
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;

  loc = 1;
  nextloc = 1;
  if (hinted[3])
    // Didn't request instructions - nice to have extra lamp life but the instructions cost 5 points.
    LIMIT = 1000;
  // Did request instructions
  else LIMIT = 330;

  describeLocation();

  normalInput = true;
  gameOver = false;

  setStatus();
}

/*______________________________________________________________________
  
    Ask dead question	
  ______________________________________________________________________*/
function deadYesNo() {
  var YEA = false;
  if (wd1 == "Y" || wd1 == "YES") {
    YEA = true;
    rSpeak(82 + NUMDIE * 2, BLACK);
  } else if (wd1 == "N" || wd1 == "NO") {
    YEA = false;
    rSpeak(54, BLACK);
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;

  NUMDIE = NUMDIE + 1;
  if (NUMDIE == MAXDIE || !YEA) {
    tallyScore("DEAD");
    endGame();
    return;
  }

  place[WATER] = 0;
  place[OIL] = 0;
  if (toting(LAMP)) prop[LAMP] = 0;

  var kk;
  for (var jj = 1; jj <= OBJSIZ; jj++) {
    if (toting(jj)) {
      kk = oldlc2;
      if (jj == LAMP) kk = 1;
      drop(jj, kk);
    }
  }

  loc = 3;
  oldloc = loc;
  HEALTH = 100;
  describeLocation();
  showMapImages(loc, showPirate, dloc[6], prop[CHEST]);
}

/*______________________________________________________________________
  
    Ask quit question	
  ______________________________________________________________________*/
function quitYesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    rSpeak(54, BLACK); // "Ok"

    endGame();
  } else if (wd1 == "N" || wd1 == "NO") {
    rSpeak(54, BLACK); // "Ok"
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;
}

/*______________________________________________________________________
  
    Ask dragon question	
  ______________________________________________________________________*/
function dragonYesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    pSpeak(DRAGON, 1, BLACK);
    prop[DRAGON] = 2;
    prop[RUG] = 0;
    var ii = Math.floor((plac[DRAGON] + fixd[DRAGON]) / 2);
    // Dragon locations are 119, 120, 121
    move(DRAGON + 200, -1);
    move(RUG + 200, 0);
    move(DRAGON, ii);
    move(RUG, ii);
    for (obj = 1; obj <= 200; obj++)
      if (place[obj] == plac[DRAGON] || place[obj] == fixd[DRAGON]) {
        move(obj, ii);
      }
    loc = ii;
    KK = key[loc];

    describeLocation();
  } else if (wd1 == "N" || wd1 == "NO") {
    rSpeak(
      153,
      BLACK
    ); /* The dragon looks rather nasty.  You'd best not try to get by.  */
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;
}

/*______________________________________________________________________
  
    Ask oyster question	
  ______________________________________________________________________*/
function oysterYesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    /* It says, "There is a way out of this place.  Do you need any more
			   information to escape?  Sorry, but this initial hint is all you get." */
    rSpeak(193, BLACK);
    CLSHNT = true;
  } else if (wd1 == "N" || wd1 == "NO") {
    rSpeak(54, BLACK); /* Ok */
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;
}

/*______________________________________________________________________
  
    Ask hint1 question	
  ______________________________________________________________________*/
function hint1YesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    sayIt(
      "I am prepared to give you a hint, but it will cost you " +
        hints[savHint][2] +
        " points."
    );
    rSpeak(175); /* Do you want the hint? */
    askingYesNo = 7;
    return;
  } else if (wd1 == "N" || wd1 == "NO") {
    rSpeak(54, BLACK); /* Ok */
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;
}

/*______________________________________________________________________
  
    Ask hint2 question	
  ______________________________________________________________________*/
function hint2YesNo() {
  if (wd1 == "Y" || wd1 == "YES") {
    rSpeak(hints[savHint][4]); /* say the hint */
    hinted[savHint] = true;

    if (LIMIT > 30) LIMIT = LIMIT + 30 * hints[savHint][2]; // Bump up the lamp for some reason
  } else if (wd1 == "N" || wd1 == "NO") {
    rSpeak(54, BLACK); /* Ok */
    hinted[savHint] = true;
  } else {
    sayIt("Answer the question");
    return;
  }

  askingYesNo = 0;
}

/*______________________________________________________________________
     setStatus:
     Set up and display status line on screen.
   ______________________________________________________________________*/
function setStatus() {
  if (!gameOver) tallyScore("SCORE");

  // Pass the status bar details to the user interface.
  //showStatusBar(getStatusLocation(loc), SCORE, TALLY);
  showStatusBar(getStatusLocation(loc), SCORE, TURNS);
  //showStatusBar(getStatusLocation(loc), SCORE, loc);
}

/*______________________________________________________________________
	getStatusLocation:
	Get Status bar location description ("You're at ...").
  ______________________________________________________________________*/
function getStatusLocation(sloc) {
  if (sloc == 0) return "You're Dead.";
  else if (sloc == 1) return "You're at end of road. 당신은 길 끝에 있습니다.";
  else if (stext[sloc] == 0) return firstSentence(lines[ltext[sloc]]);
  else return lines[stext[sloc]];
}

/*______________________________________________________________________
         setInventory:
         Build a string of the current inventory list and show it.
  ______________________________________________________________________*/
function setInventory() {
  var ss = "",
    crlf = "";

  for (var ii = 1; ii <= 200; ii++) {
    if (toting(ii))
      if (ii != BEAR) {
        ss = ss + crlf + buildMessage(ptext[ii]);
        crlf = "\n";
      }
  }

  if (toting(BEAR)) ss = ss + crlf + "Large bear";

  showInventory(ss);
}

/*______________________________________________________________________
     Speak :
   PRINT THE MESSAGE WHICH STARTS AT LINES(N).
  ______________________________________________________________________*/
function speak(nn, hilite) {
  if (nn == 0 || lines[nn] == null) return;

  if (lines[nn].length >= 3) if (lines[nn].substring(0, 3) == ">$<") return;

  var aa = nn;
  while (lptr[aa] == lptr[nn]) {
    sayIt(lines[aa], hilite);

    aa++;
  }
}

/*______________________________________________________________________
     pSpeak :
 FIND THE SKIP+1ST MESSAGE FROM MESSAGE AND PRINT IT. MESSAGE
 SHOULD BE THE INDEX OF THE INVENTORY MESSAGE FOR OBJECT.
 (INVEN+N+1 MESSAGE IS PROP=N MESSAGE).
______________________________________________________________________*/
function pSpeak(psMessage, psSkip, hilite) {
  if (psSkip >= 0)
    // Find skip'th message from beginning message
    speak(findNthMsg(ptext[psMessage], psSkip), hilite);
  else speak(ptext[psMessage], hilite);
}

/*______________________________________________________________________
     findNthMsg:
 Find the nth ptext message from the message pointed to by mstrt.
 Messages may be made up of multiple lines - in which case those lines
 have the same ptr value.
 Remember - a ptext line consists of Ptr and Text.
 
 Example ptext lines
24      *plant
0000    There is a tiny little plant in the pit, murmuring "water, water, ..."
0100    The plant spurts into furious growth for a few seconds.
0200    There is a 12-foot-tall beanstalk stretching up out of the pit,
0200    bellowing "Water!! Water!!"
0300    The plant grows explosively, almost filling the bottom of the pit.
0400    There is a gigantic beanstalk stretching all the way up to the hole.
0500    You've over-watered the plant!  It's shriveling up!  It's, it's...
25      *phony plant (seen in twopit room only when tall enough)
0000    >$<
0100    The top of a 12-foot-tall beanstalk is poking out of the west pit.
0200    There is a huge beanstalk growing out of the west pit up to the hole.
______________________________________________________________________*/
function findNthMsg(mstrt, nth) {
  var aa = mstrt + 1;
  var savptr = lptr[aa];
  var skippedmsgs = 0;

  while ((skippedmsgs < nth) & (aa <= LINSIZ)) {
    aa++;

    if (lptr[aa] != savptr) {
      skippedmsgs++;
      savptr = lptr[aa];
    }
  }

  return aa;
}

/*______________________________________________________________________
     rSpeak :
     PRINT THE I-TH "RANDOM" MESSAGE (SECTION 6 OF DATABASE).
______________________________________________________________________*/
function rSpeak(rsOpt, hilite) {
  if (rsOpt != 0) speak(rtext[rsOpt], hilite);
}

/*______________________________________________________________________
     parse Input :
     GET A COMMAND FROM THE ADVENTURER.  SNARF OUT THE FIRST
     WORD, PAD IT WITH BLANKS, AND RETURN IT IN WD1.
______________________________________________________________________*/
function parseInput(text) {
  var bar = text.split(" ");

  if (bar.length == 0) {
    wd1 = "";
    wd2 = "";
    return;
  }

  fullWd1 = bar[0];

  if (bar.length > 1) fullWd2 = bar[1];
  else fullWd2 = "";

  wd1 = left(fullWd1, 5).toUpperCase();
  wd2 = left(fullWd2, 5).toUpperCase();
}

/*______________________________________________________________________
 	buildYesQuestion:
	Similar to speak() but rather than Saying every line of message nn,
	return a string of all of the lines concatenated.
	This is for building the Yes/No pop-up questions and for obtaining
	inventory messages.
  ______________________________________________________________________*/
function buildMessage(nn) {
  var txt = lines[nn];
  var aa = nn + 1;
  while (lptr[aa] == lptr[nn]) {
    txt = txt + " " + lines[aa];
    aa++;
  }

  return txt;
}

/***********************************************************************
     STATEMENT FUNCTIONS
 ***********************************************************************/

/*______________________________________________________________________
     toting :
     RETURN TRUE IF THE OBJ IS BEING CARRIED
______________________________________________________________________*/
function toting(tObject) {
  return place[tObject] == -1;
}

/*______________________________________________________________________
     Here :
     RETURN TRUE IF THE OBJ IS AT "LOC" (OR IS BEING CARRIED)
______________________________________________________________________*/
function here(hObject) {
  return place[hObject] == loc || toting(hObject);
}

/*______________________________________________________________________
     At :
     RETURN TRUE IF ON EITHER SIDE OF TWO-PLACED OBJECT
______________________________________________________________________*/
function at(atObject) {
  return place[atObject] == loc || fixed[atObject] == loc;
}

/*______________________________________________________________________
     Liq :
     RETURN OBJECT NUMBER OF LIQUID IN BOTTLE
	 returns: water = 21, oil = 22, empty = 0
______________________________________________________________________*/
function liq() {
  return liq2(Math.max(prop[BOTTLE], -1 - prop[BOTTLE]));
}

/*______________________________________________________________________
     Liq2 :
______________________________________________________________________*/
function liq2(lbotl) {
  var LIQ2TEMP = Math.floor(lbotl / 2);

  return (1 - lbotl) * WATER + LIQ2TEMP * (WATER + OIL);
}

/*______________________________________________________________________
     LiqLoc :
     LIQLOC(LOC)  = OBJECT NUMBER OF LIQUID (IF ANY) AT LOC
______________________________________________________________________*/
function liqLoc(lloc) {
  var LIQTEMP1 = Math.floor(condl[lloc] / 2) * 2;
  var LIQTEMP2 = Math.floor(condl[lloc] / 4);

  return liq2(((LIQTEMP1 % 8) - 5) * (LIQTEMP2 % 2) + 1);
}

/*______________________________________________________________________
     bitSetCondl :
     RETURN TRUE IF COND(L) HAS BIT N SET (BIT 0 IS UNITS BIT)
______________________________________________________________________*/
function bitSetCondl(ll, nn) {
  return (condl[ll] & (1 << nn)) != 0;
}

/*______________________________________________________________________
     Forced :
     RETURN TRUE IF LOC MOVES WITHOUT ASKING FOR INPUT (COND=2)
______________________________________________________________________*/
function forced(fLoc) {
  return condl[fLoc] == 2;
}

/*______________________________________________________________________
     Dark :
     RETURN TRUE IF LOCATION "LOC" IS DARK
______________________________________________________________________*/
function dark() {
  return condl[loc] % 2 == 0 && (prop[LAMP] == 0 || !here(LAMP));
}

/*______________________________________________________________________
     pct :
     RETURN TRUE N% OF THE TIME (N INTEGER FROM 0 TO 100)
______________________________________________________________________*/
function pct(nn) {
  return Math.random() * 100 < nn;
}

//______________________________________________________________________
//   left - return all characters to the left of position n in string s.
//
function left(s, len) {
  return s.substring(0, Math.min(len, s.length));
}

//______________________________________________________________________
//   right - return all characters to the right of position n in string s.
//
function right(s, len) {
  if (len < s.length) return s.substring(Math.max(0, len), s.length);
  else return "";
}

//______________________________________________________________________
//   firstSentence - return the first sentence in the string s.
//   That's all characters leading up to a period, comma or string end.
//
function firstSentence(s) {
  var pos = s.length;
  for (var ii = 0; ii < s.length; ii++) {
    if (s.substring(ii, ii + 1) == ".") {
      pos = ii + 1;
      break;
    }
    if (s.substring(ii, ii + 1) == ",") {
      pos = ii;
      break;
    }
  }
  return s.substring(0, pos);
}

/*______________________________________________________________________
 *   lastSentence - return the last sentence in the string s.
 */
function lastSentence(s) {
  var pos = 0;
  for (var ii = 0; ii < s.length; ii++) {
    if (s.substring(ii, ii + 1) == ".") pos = ii + 1;
  }
  return s.substring(pos, s.length);
}

/*______________________________________________________________________
        vocab:
    LOOK UP ID IN THE VOCABULARY (ATAB) AND RETURN ITS
    "DEFINITION" (KTAB), OR -1 IF NOT FOUND.  IF INIT IS
    POSITIVE, THIS IS AN INITIALISATION CALL SETTING UP A
    KEYWORD VARIABLE, AND NOT FINDING IT CONSTITUTES A BUG.
    IT ALSO MEANS THAT ONLY KTAB VALUES WHICH TAKEN OVER 1000
    EQUAL INIT MAY BE CONSIDERED.  (THUS "STEPS", WHICH IS A
    MOTION VERB AS WELL AS AN OBJECT, MAY BE LOCATED AS AN
    OBJECT.)  AND IT ALSO MEANS THE KTAB VALUE IS TAKEN MOD
    1000.
   ______________________________________________________________________*/
function vocab(id, init) {
  for (var ii = 1; ii <= TABSIZ; ii++) {
    if (ktab[ii] == -1)
      if (init < 0) return -1;
      else {
        console.log("---- ERROR ii=" + ii + " id " + id);
        bug(5);
      }

    if ((init >= 0) & (Math.floor(ktab[ii] / 1000) != init)) {
    } else {
      if (atab[ii] == id) {
        if (init >= 0) return ktab[ii] % 1000;
        else return ktab[ii];
      }
    }
  }

  bug(21);
  return 0;
}

/*______________________________________________________________________
         Destroy :
    PERMANENTLY ELIMINATE "OBJECT" BY MOVING TO A
    NON-EXISTANT LOCATION.
   ______________________________________________________________________*/
function destroy(dObject) {
  move(dObject, 0);
}

/*______________________________________________________________________
         Juggle :
    JUGGLE AN OBJECT BY PICKING IT UP AND PUTTING IT DOWN
    AGAIN, THE PURPOSE BEING TO GET THE OBJECT TO THE FRONT
    OF THE CHAIN OF THINGS AT ITS LOC.
   ______________________________________________________________________*/
function juggle(jObject) {
  var ii = plac[jObject];
  var jj = fixed[jObject];
  move(jObject, ii);
  move(jObject + 100, jj);
}

/*______________________________________________________________________
         Move :
    PLACE ANY OBJECT ANYWHERE BY PICKING IT UP AND DROPPING
    IT.  MAY ALREADY BE TOTING, IN WHICH CASE THE CARRY IS A
    NO-OP.  MUSTN"T PICK UP OBJECTS WHICH ARE NOT AT ANY LOC,
    SINCE CARRY WANTS TO REMOVE OBJECTS FROM ATLOC CHAINS.
   ______________________________________________________________________*/
function move(mObject, mWhere) {
  var from = 0;

  if (mObject <= 200) from = place[mObject];
  else from = fixed[mObject - 200];

  if ((from > 0) & (from <= 300)) {
    carry(mObject, from);
  }

  drop(mObject, mWhere);
}

/*______________________________________________________________________
         Put :
    PUT IS THE SAME AS MOVE, EXCEPT IT RETURNS A VALUE USED
    TO SET UP THE NEGATED PROP VALUES FOR THE REPOSITORY
    OBJECTS.
   ______________________________________________________________________*/
function putMove(pObject, pWhere, pVal) {
  move(pObject, pWhere);

  return -1 - pVal;
}

/*______________________________________________________________________
         Carry :
    START TOTING AN OBJECT, REMOVING IT FROM THE LIST OF
    THINGS AT ITS FORMER LOCATION.  INCR HOLDNG UNLESS IT WAS
    ALREADY BEING TOTED.  IF OBJECT>100 (MOVING "FIXED"
    SECOND LOC), DON"T CHANGE PLACE OR HOLDNG.
    atlocLast[x]  = last object at location x.
	atlocFirst[x] = first object at location x.
    linkBak[obj]  = previous object before obj at location x etc.
	linkFwd[obj]  = next object after obj at location x etc.
   ______________________________________________________________________*/
function carry(cObject, cWhere) {
  var temp = 0;
  mapImagesChanged = true;

  if (cObject <= 200) {
    if (place[cObject] == -1) return;
    place[cObject] = -1; // Indicate object is being carried.
    HOLDNG = HOLDNG + 1;
  }

  // Change atloc & link chain
  if (atlocLast[cWhere] == cObject) {
    atlocLast[cWhere] = linkBak[cObject];
  } else {
    temp = atlocLast[cWhere];

    while ((temp > 0) & (linkBak[temp] != cObject)) temp = linkBak[temp];

    linkBak[temp] = linkBak[cObject];
  }

  // Change atlocFirst & linkFwd chain
  if (atlocFirst[cWhere] == cObject) {
    atlocFirst[cWhere] = linkFwd[cObject];
  } else {
    temp = atlocFirst[cWhere];

    while ((temp > 0) & (linkFwd[temp] != cObject)) temp = linkFwd[temp];

    linkFwd[temp] = linkFwd[cObject];
  }
}

/*______________________________________________________________________
       Drop :
    PLACE AN OBJECT AT A GIVEN LOC, PREFIXING IT ONTO THE
    ATLOC LIST.  DECR HOLDNG IF THE OBJECT WAS BEING TOTED.
   ______________________________________________________________________*/
function drop(drObject, drWhere) {
  mapImagesChanged = true;

  if (drObject <= 200) {
    if (place[drObject] == -1) HOLDNG = HOLDNG - 1;
    place[drObject] = drWhere;
  } else {
    fixed[drObject - 200] = drWhere;
  }

  if (drWhere <= 0) return;

  linkFwd[drObject] = 0;
  linkFwd[atlocLast[drWhere]] = drObject;
  if (atlocFirst[drWhere] == 0) {
    atlocFirst[drWhere] = drObject;
  }

  linkBak[drObject] = atlocLast[drWhere];
  atlocLast[drWhere] = drObject;
}

/*______________________________________________________________________
       NextLocation :
    Get next location from starting point KK+1 in Travel stem.
   ______________________________________________________________________*/
function nextLocation(trLL) {
  var ploc = nextloc;

  do {
    if (travel[KK] < 0)
      /* CONDITIONAL TRAVEL ENTRY WITH NO ALTERNATIVE */
      bug(25);
    KK = KK + 1;

    ploc = Math.floor(Math.abs(travel[KK]) / 1000);
  } while (ploc == trLL);

  return ploc;
}

/*______________________________________________________________________
     THE FOLLOWING CONDITIONS ARE CURRENTLY CONSIDERED FATAL BUGS.  NUMBERS < 20 
     ARE DETECTED WHILE READING THE DATABASE  THE OTHERS OCCUR AT "RUN TIME".
          0       MESSAGE LINE > 70 CHARACTERS
          1       NULL LINE IN MESSAGE
          2       TOO MANY WORDS OF MESSAGES
          3       TOO MANY TRAVEL OPTIONS
          4       TOO MANY VOCABULARY WORDS
          5       REQUIRED VOCABULARY WORD NOT FOUND
          6       TOO MANY RTEXT OR MTEXT MESSAGES
          7       TOO MANY HINTS
          8       LOCATION HAS COND BIT BEING SET TWICE
          9       INVALID SECTION NUMBER IN DATABASE
          20      SPECIAL TRAVEL (500>L>300) EXCEEDS GOTO LIST
          21      RAN OFF END OF VOCABULARY TABLE
          22      VOCABULARY TYPE (N/1000) NOT BETWEEN 0 AND 3
          23      INTRANSITIVE ACTION VERB EXCEEDS GOTO LIST
          24      TRANSITIVE ACTION VERB EXCEEDS GOTO LIST
          25      CONDITIONAL TRAVEL ENTRY WITH NO ALTERNATIVE
          26      LOCATION HAS NO TRAVEL ENTRIES
          27      HINT NUMBER EXCEEDS GOTO LIST
          28      INVALID MONTH RETURNED BY DATE FUNCTION
    ______________________________________________________________________*/
function bug(num) {
  sayIt(" Fatal error, see source code for interpretation.", RED);
  sayIt(" Probable cause: erroneous info in database.", RED);
  sayIt(" Error code = " + num, RED);

  sayIt("치명적인 오류입니다. 해석을 위해서는 소스 코드를 참조하십시오.", RED);
  sayIt("가능한 원인: 데이터베이스에 잘못된 정보가 있음.", RED);
  sayIt("오류 코드 = " + num, RED);
}

/*______________________________________________________________________
    Load runtime variables from a save file
  ______________________________________________________________________*/
function load() {
  if (typeof Storage == "undefined") {
    sayIt("Load/Save Functions Not Available");
    sayIt("로드/저장 기능을 사용할 수 없습니다.");
    return;
  }

  saveVer = fullWd2.toLowerCase().trim();

  if (saveVer == "?") {
    sayIt("Type LOAD filename.");
    sayIt("LOAD 파일명을 입력하세요.");
    listSaveFiles();
    return;
  }

  if (localStorage["gobberwarts.advent570." + saveVer + ".CHK"] !== "OK") {
    sayIt("Save data not found");
    sayIt("저장된 데이터를 찾을 수 없습니다.");
    return;
  }

  askingYesNo = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".askingYesNo"]
  );
  savHint = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".savHint"]
  );

  gameOver =
    localStorage["gobberwarts.advent570." + saveVer + ".gameOver"] == "true";

  LMWARN =
    localStorage["gobberwarts.advent570." + saveVer + ".LMWARN"] == "true";
  CLOSNG =
    localStorage["gobberwarts.advent570." + saveVer + ".CLOSNG"] == "true";
  PANIC = localStorage["gobberwarts.advent570." + saveVer + ".PANIC"] == "true";
  CLOSED =
    localStorage["gobberwarts.advent570." + saveVer + ".CLOSED"] == "true";

  clockDucky = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".clockDucky"]
  );
  clockGiant = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".clockGiant"]
  );
  clockGiantChase = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".clockGiantChase"]
  );
  giantloc = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".giantloc"]
  );
  ogiantloc = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".ogiantloc"]
  );
  giantChasing =
    localStorage["gobberwarts.advent570." + saveVer + ".giantChasing"] ==
    "true";
  giantDead =
    localStorage["gobberwarts.advent570." + saveVer + ".giantDead"] == "true";
  combo = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".combo"]);
  rubySeen =
    localStorage["gobberwarts.advent570." + saveVer + ".rubySeen"] == "true";
  maskSeen =
    localStorage["gobberwarts.advent570." + saveVer + ".maskSeen"] == "true";

  TURNS = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".TURNS"]);
  CNTWEST = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".CNTWEST"]
  );
  KNFLOC = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".KNFLOC"]
  );
  DETAIL = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".DETAIL"]
  );
  ABBNUM = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".ABBNUM"]
  );
  MAXDIE = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".MAXDIE"]
  );
  NUMDIE = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".NUMDIE"]
  );
  HOLDNG = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".HOLDNG"]
  );
  DKILL = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".DKILL"]);
  FOOBAR = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".FOOBAR"]
  );
  BONUS = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".BONUS"]);
  CLOCK1 = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".CLOCK1"]
  );
  CLOCK2 = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".CLOCK2"]
  );
  loc = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".loc"]);
  nextloc = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".nextloc"]
  );
  LIMIT = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".LIMIT"]);
  TALLY = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".TALLY"]);
  TALLY2 = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".TALLY2"]
  );
  DFLAG = parseInt(localStorage["gobberwarts.advent570." + saveVer + ".DFLAG"]);
  HNTMAX = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".HNTMAX"]
  );

  for (var ii = 1; ii <= LOCSIZ; ii++) {
    abb[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".abb." + ii]
    );
    condl[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".condl." + ii]
    );
    atlocLast[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".atloc." + ii]
    );
    atlocFirst[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".atlocFirst." + ii]
    );
  }

  plac[0] = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".plac.0"]
  );
  for (var ii = 1; ii <= plac[0]; ii++) {
    plac[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".plac." + ii]
    );
  }

  fixd[0] = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".fixd.0"]
  );
  for (var ii = 1; ii <= fixd[0]; ii++) {
    fixd[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".fixd." + ii]
    );
  }

  condl[0] = parseInt(
    localStorage["gobberwarts.advent570." + saveVer + ".condl.0"]
  );
  for (var ii = 1; ii <= condl[0]; ii++) {
    condl[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".condl." + ii]
    );
  }

  for (var ii = 1; ii <= OBJSIZ; ii++) {
    fixed[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".fixed." + ii]
    );
    place[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".place." + ii]
    );
    prop[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".prop." + ii]
    );
    linkBak[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".link." + ii]
    );
    linkBak[ii + 200] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".link." + (ii + 200)]
    );
    linkFwd[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".linkFwd." + ii]
    );
    linkFwd[ii + 200] = parseInt(
      localStorage[
        "gobberwarts.advent570." + saveVer + ".linkFwd." + (ii + 200)
      ]
    );
  }

  for (var ii = 1; ii <= 6; ii++) {
    dseen[ii] =
      localStorage["gobberwarts.advent570." + saveVer + ".dseen." + ii] ==
      "true";
    dloc[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".dloc." + ii]
    );
  }

  for (var ii = 1; ii <= HNTMAX; ii++) {
    hinted[ii] =
      localStorage["gobberwarts.advent570." + saveVer + ".hinted." + ii] ==
      "true";
    hintlc[ii] = parseInt(
      localStorage["gobberwarts.advent570." + saveVer + ".hintlc." + ii]
    );
  }

  WZDARK = false;
  sayIt("Game loaded");

  describeLocation();
}

/*______________________________________________________________________
    Save game variables
  ______________________________________________________________________*/
function save() {
  //if (!supportsLocalStorage()) { return false; }

  saveVer = fullWd2.toLowerCase().trim();

  localStorage[
    "gobberwarts.advent570." + saveVer + ".askingYesNo"
  ] = askingYesNo;
  localStorage["gobberwarts.advent570." + saveVer + ".savHint"] = savHint;

  localStorage["gobberwarts.advent570." + saveVer + ".gameOver"] = gameOver;

  localStorage["gobberwarts.advent570." + saveVer + ".LMWARN"] = LMWARN;
  localStorage["gobberwarts.advent570." + saveVer + ".CLOSNG"] = CLOSNG;
  localStorage["gobberwarts.advent570." + saveVer + ".PANIC"] = PANIC;
  localStorage["gobberwarts.advent570." + saveVer + ".CLOSED"] = CLOSED;

  localStorage["gobberwarts.advent570." + saveVer + ".clockDucky"] = clockDucky;
  localStorage["gobberwarts.advent570." + saveVer + ".clockGiant"] = clockGiant;
  localStorage[
    "gobberwarts.advent570." + saveVer + ".clockGiantChase"
  ] = clockGiantChase;
  localStorage[
    "gobberwarts.advent570." + saveVer + ".giantChasing"
  ] = giantChasing;
  localStorage["gobberwarts.advent570." + saveVer + ".giantDead"] = giantDead;
  localStorage["gobberwarts.advent570." + saveVer + ".giantloc"] = giantloc;
  localStorage["gobberwarts.advent570." + saveVer + ".ogiantloc"] = ogiantloc;
  localStorage["gobberwarts.advent570." + saveVer + ".combo"] = combo;
  localStorage["gobberwarts.advent570." + saveVer + ".rubySeen"] = rubySeen;
  localStorage["gobberwarts.advent570." + saveVer + ".maskSeen"] = maskSeen;

  localStorage["gobberwarts.advent570." + saveVer + ".TURNS"] = TURNS;
  localStorage["gobberwarts.advent570." + saveVer + ".CNTWEST"] = CNTWEST;
  localStorage["gobberwarts.advent570." + saveVer + ".KNFLOC"] = KNFLOC;
  localStorage["gobberwarts.advent570." + saveVer + ".DETAIL"] = DETAIL;
  localStorage["gobberwarts.advent570." + saveVer + ".ABBNUM"] = ABBNUM;
  localStorage["gobberwarts.advent570." + saveVer + ".MAXDIE"] = MAXDIE;
  localStorage["gobberwarts.advent570." + saveVer + ".NUMDIE"] = NUMDIE;
  localStorage["gobberwarts.advent570." + saveVer + ".HOLDNG"] = HOLDNG;
  localStorage["gobberwarts.advent570." + saveVer + ".DKILL"] = DKILL;
  localStorage["gobberwarts.advent570." + saveVer + ".FOOBAR"] = FOOBAR;
  localStorage["gobberwarts.advent570." + saveVer + ".BONUS"] = BONUS;
  localStorage["gobberwarts.advent570." + saveVer + ".CLOCK1"] = CLOCK1;
  localStorage["gobberwarts.advent570." + saveVer + ".CLOCK2"] = CLOCK2;
  localStorage["gobberwarts.advent570." + saveVer + ".loc"] = loc;
  localStorage["gobberwarts.advent570." + saveVer + ".nextloc"] = nextloc;
  localStorage["gobberwarts.advent570." + saveVer + ".LIMIT"] = LIMIT;
  localStorage["gobberwarts.advent570." + saveVer + ".TALLY"] = TALLY;
  localStorage["gobberwarts.advent570." + saveVer + ".TALLY2"] = TALLY2;
  localStorage["gobberwarts.advent570." + saveVer + ".DFLAG"] = DFLAG;
  localStorage["gobberwarts.advent570." + saveVer + ".HNTMAX"] = HNTMAX;

  for (var ii = 1; ii <= LOCSIZ; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".abb." + ii] = abb[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".condl." + ii] =
      condl[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".atloc." + ii] =
      atlocLast[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".atlocFirst." + ii] =
      atlocFirst[ii];
  }
  for (var ii = 0; ii <= plac[0]; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".plac." + ii] = plac[ii];
  }
  for (var ii = 0; ii <= fixd[0]; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".fixd." + ii] = fixd[ii];
  }
  for (var ii = 0; ii <= condl[0]; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".condl." + ii] =
      condl[ii];
  }
  for (var ii = 1; ii <= OBJSIZ; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".fixed." + ii] =
      fixed[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".place." + ii] =
      place[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".prop." + ii] = prop[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".link." + ii] =
      linkBak[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".link." + (ii + 200)] =
      linkBak[ii + 200];
    localStorage["gobberwarts.advent570." + saveVer + ".linkFwd." + ii] =
      linkFwd[ii];
    localStorage[
      "gobberwarts.advent570." + saveVer + ".linkFwd." + (ii + 200)
    ] = linkFwd[ii + 200];
  }
  for (var ii = 1; ii <= 6; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".dseen." + ii] =
      dseen[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".dloc." + ii] = dloc[ii];
  }
  for (var ii = 1; ii <= HNTMAX; ii++) {
    localStorage["gobberwarts.advent570." + saveVer + ".hinted." + ii] =
      hinted[ii];
    localStorage["gobberwarts.advent570." + saveVer + ".hintlc." + ii] =
      hintlc[ii];
  }

  localStorage["gobberwarts.advent570." + saveVer + ".CHK"] = "OK";
  localStorage["gobberwarts.advent570.save." + saveVer] = saveVer;
  localStorage[
    "gobberwarts.advent570.datesaved." + saveVer
  ] = getNowDateTimeStr();

  sayIt("Game saved");
}

/*______________________________________________________________________
    Delete saved file
  ______________________________________________________________________*/
function deleteSave() {
  var cntdels = 0;

  if (typeof Storage == "undefined") {
    sayIt("Delete Function Not Available");
    return;
  }

  saveVer = fullWd2.toLowerCase().trim();

  localStorage.removeItem("gobberwarts.advent570.save." + saveVer);
  localStorage.removeItem("gobberwarts.advent570.datesaved." + saveVer);

  for (var ii in localStorage) {
    if (ii.indexOf("gobberwarts.advent570." + saveVer) >= 0) {
      cntdels++;

      localStorage.removeItem(ii);
    }
  }
  if (cntdels == 0) sayIt("Nothing Deleted");
  else sayIt("Ok");
}

/*______________________________________________________________________
    List saved files
  ______________________________________________________________________*/
function listSaveFiles() {
  var spcs = "                                                            ";
  var cntsaves = 0;
  sayIt("Current saved files:");

  for (var ii in localStorage) {
    if (ii.indexOf("gobberwarts.advent570.save") >= 0) {
      cntsaves++;

      var str = "  Save File: " + localStorage[ii];
      var jj = 50 - str.length;

      sayIt(
        str +
          spcs.substring(0, jj) +
          " saved at " +
          localStorage["gobberwarts.advent570.datesaved." + localStorage[ii]]
      );
    }
    //console.log(ii + ' = ' + localStorage[ii]);
    //localStorage.removeItem(ii);
  }
  if (cntsaves == 0) {
    sayIt("None");
    sayIt("없음");
    return;
  }
}

/*______________________________________________________________________
    Load 'show map' state
  ______________________________________________________________________*/
function loadShowMap() {
  showmap = localStorage["gobberwarts.advent570.showmap"] == "true";
}

/*______________________________________________________________________
    Save 'show map' state
  ______________________________________________________________________*/
function saveShowMap() {
  localStorage["gobberwarts.advent570.showmap"] = showmap;
}

/*______________________________________________________________________
    Get formatted current date and time.
  ______________________________________________________________________*/
function getNowDateTimeStr() {
  var now = new Date();
  var hour = now.getHours() - (now.getHours() >= 12 ? 12 : 0);

  return [
    [
      AddZero(now.getDate()),
      AddZero(now.getMonth() + 1),
      now.getFullYear()
    ].join("/"),
    [AddZero(hour), AddZero(now.getMinutes())].join(":"),
    now.getHours() >= 12 ? "PM" : "AM"
  ].join(" ");
}

//Pad given value to the left with "0"
function AddZero(num) {
  return num >= 0 && num < 10 ? "0" + num : num + "";
}
