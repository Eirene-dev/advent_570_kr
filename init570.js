/*	________________________________________________________________________

	   ADVENTURES

	   CURRENT LIMITS:
	       9650 WORDS OF MESSAGE TEXT (LINES, LINSIZ).
	       1000 TRAVEL OPTIONS (TRAVEL, TRVSIZ).
	        400 VOCABULARY WORDS (KTAB, ATAB, TABSIZ).
	        200 LOCATIONS (LTEXT, STEXT, KEY, COND, ABB, ATLOC, LOCSIZ).
	        200 OBJECTS (PLAC, PLACE, FIXD, FIXED, LINK (TWICE), PTEXT, PROP).
	         50 "ACTION" VERBS (ACTSPK, VRBSIZ).
	        400 RANDOM MESSAGES (RTEXT).
	         12 DIFFERENT PLAYER CLASSIFICATIONS (CTEXT, CVAL, CLSMAX).
	         20 HINTS, LESS 3 (HINTLC, HINTED, HINTS, HNTSIZ).
	         35 MAGIC MESSAGES (MTEXT, MAGSIZ).

	   THERE ARE ALSO LIMITS WHICH CANNOT BE EXCEEDED DUE TO THE
	   STRUCTURE OF THE DATABASE.  (E.G., THE VOCABULARY USES
	   N/1000 TO DETERMINE WORD TYPE, SO THERE CAN'T BE MORE
	   THAN 1000 WORDS.) THESE UPPER LIMITS ARE:

	        1000 NON-SYNONYMOUS VOCABULARY WORDS
	        300 LOCATIONS
	        200 OBJECTS

	________________________________________________________________________*/

var SAVEVERS = 570;
var version = 570;
var showPirate = false;
var askingYesNo = 0;
var saveVer = "";

var LINSIZ = 3000;
var TRVSIZ = 1000;
var TABSIZ = 400;
var LOCSIZ = 200;
var OBJSIZ = 200;
var LNKSIZ = 200;
var VRBSIZ = 50;
var CLSMAX = 12;
var HNTSIZ = 20;

var linput = new Array();
var lines = new Array();
var lptr = new Array();
var travel = new Array();
var ktab = new Array();
var atab = new Array();
var ltext = new Array();
var stext = new Array();
var key = new Array();
var condl = new Array();
var abb = new Array();
var atlocLast = new Array();
var atlocFirst = new Array();
var linkBak = new Array();
var linkFwd = new Array();
var plac = new Array(); // Initial location of object
var place = new Array(); // Copy of plac[] - updated during game. -1 if object is carried.
var fixd = new Array(); // Indicates immovable (-1) or is the 2nd loc in a 2-part loc.
var fixed = new Array(); // Copy of fixd[]. Values in fixd[] can change, fixed[] values don't change.
var ptext = new Array(); // Pointers to pText messages
var prop = new Array();
var actspk = new Array();
var rtext = new Array();
var ctext = new Array();
var cval = new Array();
var hintlc = new Array();
var hinted = new Array();
var tk = new Array();
var dseen = new Array();
var dloc = new Array();
var odloc = new Array();
var hints = new Array(20);
var showmsg = new Array(10);
showmsg[0] = true;
showmsg[1] = true;
showmsg[2] = true;
showmsg[3] = false;
showmsg[4] = false;
showmsg[5] = true;
showmsg[6] = false;
showmsg[7] = false;
showmsg[8] = false;
showmsg[9] = false;

for (var ii = 0; ii <= OBJSIZ; ii++) {
  plac[ii] = 0;
  place[ii] = 0;
  fixd[ii] = 0;
  fixed[ii] = 0;
  ptext[ii] = 0;
  prop[ii] = 0;
}
for (var ii = 0; ii <= TABSIZ; ii++) {
  ktab[ii] = 0;
  rtext[ii] = 0;
}
for (var ii = 0; ii <= LOCSIZ; ii++) {
  ltext[ii] = 0;
  stext[ii] = 0;
  key[ii] = 0;
  condl[ii] = 0;
  abb[ii] = 0;
  atlocLast[ii] = 0;
  atlocFirst[ii] = 0;
}
for (var ii = 0; ii <= LNKSIZ; ii++) {
  linkBak[ii] = 0;
  linkFwd[ii] = 0;
}
for (var ii = 0; ii <= VRBSIZ; ii++) {
  actspk[ii] = 0;
}
for (var ii = 0; ii <= CLSMAX; ii++) {
  cval[ii] = 0;
}
for (var ii = 0; ii < HNTSIZ; ii++) {
  hints[ii] = new Array(20);
  hintlc[ii] = 0;
  tk[ii] = 0;
}
for (var ii = 0; ii <= 7; ii++) {
  dloc[ii] = 0;
  odloc[ii] = 0;
}

var loc, nextloc, oldloc, oldlc2, backloc, obj, verb, moveVerb;
var i1, i2, LL;
var wd1, wd2, fullWd1, fullWd2, objWd, verbWd;

var LOGON = true;
var CLOSNG = false;
var KEY = 0;
var LINUSE = 1;
var TRVS = 1;
var CLSSES = 0;
var HNTMAX = 20; // Number of Hints on file
var CHLOC = 114; // Location of Pirate's Chest dead end
var CHLOC2 = 140; // Location of Vending maze dead end
var K = 0;
var MXSCOR = 0;
var SCORE = 0;
var DTOTAL = 0; // Number of Dwarves in the room with you!
var ATTACK = 0; // Number of Dwarves throw knives at you!
var STICK = 0; // Number of knives get you!
var MINTRS = 150; // Start number of treasures
var MAXTRS = 175; // End   number of treasures
var TALLY = 0; // Number of Treasures yet to be found
var TALLY2 = 0; // Number of Treasures lost.
var DFLAG = 0;
var DALTLC = 18;
var banter = 0; // Breakroom dwarf banter message count

/*______________________________________________________________________
  OTHER RANDOM FLAGS AND COUNTERS, AS FOLLOWS:
       TURNS   TALLIES HOW MANY COMMANDS HE"S GIVEN (IGNORES YES/NO)
       LIMIT   LIFETIME OF LAMP (NOT SET HERE)
       CNTWEST HOW MANY TIMES HE"S SAID "WEST" INSTEAD OF "W"
       KNFLOC  0 IF NO KNIFE HERE, LOC IF KNIFE HERE, -1 AFTER CAVEAT
       DETAIL  HOW OFTEN WE"VE SAID "NOT ALLOWED TO GIVE MORE DETAIL"
       ABBNUM  HOW OFTEN WE SHOULD PRINT NON-ABBREVIATED DESCRIPTIONS
       MAXDIE  NUMBER OF REINCARNATION MESSAGES AVAILABLE (UP TO 5)
       NUMDIE  NUMBER OF TIMES KILLED SO FAR
       HOLDNG  NUMBER OF OBJECTS BEING CARRIED
       DKILL   NUMBER OF DWARVES KILLED (UNUSED IN SCORING, NEEDED FOR MSG)
       FOOBAR  CURRENT PROGRESS IN SAYING "FEE FIE FOE FOO".
       BONUS   USED TO DETERMINE AMOUNT OF BONUS IF HE REACHES CLOSING
       CLOCK1  NUMBER OF TURNS FROM FINDING LAST TREASURE TILL CLOSING
       CLOCK2  NUMBER OF TURNS FROM FIRST WARNING TILL BLINDING FLASH
       LOGICALS WERE EXPLAINED EARLIER
 ______________________________________________________________________*/
var TURNS = 0;
var LIMIT = 1000; // Lamp limit. Lamp is dead if < 0.
var CNTWEST = 0;
var KNFLOC = 0;
var DETAIL = 0;
var ABBNUM = 5;
var NUMDIE = 0; // Number of times player has died so far.
var HOLDNG = 0;
var DKILL = 0;
var FOOBAR = 0;
var BONUS = 0;
var CLOCK1 = 30;
var CLOCK2 = 50;
var MAXDIE = 0; // Maximum times player can die (determined by rtext[] death messages (3) )
var FOO = 0;
var BLACK = 1,
  RED = 2;
var lampAlwaysOn = false;
var LMWARN = false;
var PANIC = false;
var CLOSED = false;
var WZDARK = false;
var describeLocation = true;
var normalInput = true;
var ret = false;
var gameOver = false;
var mapImagesChanged = false;
var KK, currKK, savHint;
var clockDucky = 0; // Timer for duck to move to well.
var clockGiant = 2; // Timer for angry Giant to turn up (one move).
var clockGiantChase = 5; // Timer for angry Giant chasing - at 0 you're dead.
var giantChasing = false;
var giantDead = false;
var giantloc = 0;
var ogiantloc = 0;
var barlen;
var combo = ""; // Storage room security code
var rubySeen = false; // Ruby toggles back to prop -1 so need to keep track.
var maskSeen = false; // Mask toggles back to prop -1 so need to keep track.

/*______________________________________________________________________
     DEFINE SOME HANDY MNEMONICS.  THESE CORRESPOND TO OBJECT NUMBERS.
    ______________________________________________________________________*/
var KEYS, LAMP, GRATE, CAGE, ROD, ROD2, STEPS, BIRD, DOOR, PILLOW;
var SNAKE, FISSUR, TABLET, CLAM, OYSTER, MAGZIN, DWARF, KNIFE, FOOD, BOTTLE;
var WATER, OIL, PLANT, PLANT2, AXE, MIRROR, DRAGON, CHASM, TROLL, TROLL2;
var BEAR, MESSAG, VEND, BATTER, NUGGET, COINS, CHEST, EGGS, TRIDNT, VASE;
var EMRALD, PYRAM, PEARL, RUG, CHAIN, SPICES, BACK, LOOK, CAVE, ENTRNC;
var DPRSSN, ENTER, VERBSAY, LOCK, THROW, FIND, INVENT, MELLON;
var WELL, CORK, CORKS, DUCKY, RESER, PLAQU, GROTT, WORM, RUBY, RACK, LEAF;
var HARP, NECKL, RING, ARCHW, GIANT, RABBI, WEB, POLE, RIFT, SHOVEL, PEBBLE;
var SCARAB, CHITT1, CHITT2, BEETLE, TRENCH, SIGN, FEATHER, PEDES, PEDE2, PDOOR;
var HOLE, SARCO, SCALE, HEART, MASK, PANEL, SCRAP, ARCHE, SODA, OPAL;

function initialize() {
  setupData();

  /*______________________________________________________________________
             DEFINE SOME HANDY MNEMONICS.  THESE CORRESPOND TO OBJECT NUMBERS.
           ______________________________________________________________________*/
  KEYS = vocab("KEYS", 1);
  LAMP = vocab("LAMP", 1);
  GRATE = vocab("GRATE", 1);
  CAGE = vocab("CAGE", 1);
  ROD = vocab("ROD", 1);
  ROD2 = ROD + 1;
  STEPS = vocab("STEPS", 1);
  BIRD = vocab("BIRD", 1);
  DOOR = vocab("DOOR", 1);
  PILLOW = vocab("PILLO", 1);
  SNAKE = vocab("SNAKE", 1);
  FISSUR = vocab("FISSU", 1);
  TABLET = vocab("TABLE", 1);
  CLAM = vocab("CLAM", 1);
  OYSTER = vocab("OYSTE", 1);
  MAGZIN = vocab("MAGAZ", 1);
  DWARF = vocab("DWARF", 1);
  KNIFE = vocab("KNIFE", 1);
  FOOD = vocab("FOOD", 1);
  BOTTLE = vocab("BOTTL", 1);
  WATER = vocab("WATER", 1);
  OIL = vocab("OIL", 1);
  PLANT = vocab("PLANT", 1);
  PLANT2 = PLANT + 1;
  AXE = vocab("AXE", 1);
  MIRROR = vocab("MIRRO", 1);
  DRAGON = vocab("DRAGO", 1);
  CHASM = vocab("CHASM", 1);
  TROLL = vocab("TROLL", 1);
  TROLL2 = TROLL + 1;
  BEAR = vocab("BEAR", 1);
  MESSAG = vocab("MESSA", 1);
  VEND = vocab("VENDI", 1);
  BATTER = vocab("BATTE", 1);
  WELL = vocab("WELL", 1);
  CORK = vocab("CORK", 1);
  CORKS = vocab("CORKS", 1);
  DUCKY = vocab("DUCK", 1);
  RESER = vocab("RESER", 1);
  PLAQU = vocab("PLAQU", 1);
  GROTT = vocab("GROTT", 1);
  WORM = vocab("WORM", 1);
  RACK = vocab("RACK", 1);
  LEAF = vocab("LEAF", 1);
  ARCHW = vocab("ARCHW", 1);
  HARP = vocab("HARP", 1);
  NECKL = vocab("NECKL", 1);
  RING = vocab("RING", 1);
  GIANT = vocab("GIANT", 1);
  RABBI = vocab("RABBI", 1);
  WEB = vocab("WEB", 1);
  POLE = vocab("POLE", 1);
  RIFT = vocab("RIFT", 1);
  SHOVEL = vocab("SHOVE", 1);
  PEBBLE = vocab("PEBBL", 1);
  SCARAB = vocab("SCARA", 1);
  CHITT1 = vocab("CHIT1", 1);
  CHITT2 = vocab("CHIT2", 1);
  BEETLE = vocab("BEETL", 1);
  TRENCH = vocab("TRENC", 1);
  SIGN = vocab("SIGN", 1);
  FEATHER = vocab("FEATH", 1);
  PEDES = vocab("PEDES", 1);
  PEDE2 = vocab("PEDE2", 1);
  PDOOR = vocab("PDOOR", 1);
  HOLE = vocab("HOLE", 1);
  SARCO = vocab("SARCO", 1);
  SCALE = vocab("SCALE", 1);
  HEART = vocab("HEART", 1);
  PANEL = vocab("PANEL", 1);
  SCRAP = vocab("SCRAP", 1);
  ARCHE = vocab("ARCHE", 1);
  SODA = vocab("SODA", 1);

  // OBJECTS FROM 50 THROUGH WHATEVER ARE TREASURES.  HERE ARE A FEW.
  NUGGET = vocab("GOLD", 1);
  COINS = vocab("COINS", 1);
  CHEST = vocab("CHEST", 1);
  EGGS = vocab("EGGS", 1);
  TRIDNT = vocab("TRIDE", 1);
  VASE = vocab("VASE", 1);
  EMRALD = vocab("EMERA", 1);
  PYRAM = vocab("PYRAM", 1);
  PEARL = vocab("PEARL", 1);
  RUG = vocab("RUG", 1);
  CHAIN = vocab("CHAIN", 1);
  SPICES = vocab("SPICE", 1);
  RUBY = vocab("RUBY", 1);
  MASK = vocab("MASK", 1);
  OPAL = vocab("OPAL", 1);

  // THESE ARE MOTION-VERB NUMBERS.
  BACK = vocab("BACK", 0);
  LOOK = vocab("LOOK", 0);
  CAVE = vocab("CAVE", 0);
  ENTRNC = vocab("ENTRA", 0);
  DPRSSN = vocab("DEPRE", 0);
  ENTER = vocab("ENTER", 0);

  // AND SOME ACTION VERBS.
  VERBSAY = vocab("SAY", 2);
  LOCK = vocab("LOCK", 2);
  THROW = vocab("THROW", 2);
  FIND = vocab("FIND", 2);
  INVENT = vocab("INVEN", 2);
  MELLON = vocab("MELLO", 2);

  prop[HEART] = 1;

  /*______________________________________________________________________
          FINISH CONSTRUCTING INTERNAL DATA FORMAT
     
          HAVING READ IN THE DATABASE, CERTAIN THINGS ARE NOW
          CONSTRUCTED.  PROPS ARE SET TO ZERO.  WE FINISH SETTING
          UP COND BY CHECKING FOR FORCED-MOTION TRAVEL ENTRIES.
          THE PLAC AND FIXD ARRAYS ARE USED TO SET UP ATLOC(N) AS
          THE FIRST OBJECT AT LOCATION N, AND LINK(OBJ) AS THE NEXT
          OBJECT AT THE SAME LOCATION AS OBJ.  (OBJ>100 INDICATES
          THAT FIXED(OBJ-100)=LOC; LINK(OBJ) IS STILL THE CORRECT
          LINK TO USE.) ABB IS ZEROED; IT CONTROLS WHETHER THE
          ABBREVIATED DESCRIPTION IS PRINTED.  COUNTS MOD 5 UNLESS
          "LOOK" IS USED.
         ______________________________________________________________________*/

  for (var ii = 1; ii <= LOCSIZ; ii++) {
    if (ltext[ii] == 0 || key[ii] == 0) {
    } else {
      var kk = key[ii];

      if (Math.abs(travel[kk]) % 1000 == 1) {
        condl[ii] = 2;
      }
    }
    atlocLast[ii] = 0;
    atlocFirst[ii] = 0;
    abb[ii] = 0;
  }
  atlocLast[0] = LOCSIZ;

  /*______________________________________________________________________
          SET UP THE ATLOC AND LINK ARRAYS AS DESCRIBED ABOVE.
          WE"LL USE THE DROP SUBROUTINE, WHICH PREFACES NEW OBJECTS
          ON THE LISTS.  SINCE WE WANT THINGS IN THE OTHER ORDER,
          WE'LL RUN THE LOOP BACKWARDS.  IF THE OBJECT IS IN TWO
          LOCS, WE DROP IT TWICE.  THIS ALSO SETS UP "PLACE" AND
          "FIXED" AS COPIES OF "PLAC" AND "FIXD".  ALSO, SINCE
          TWO-PLACED OBJECTS ARE TYPICALLY BEST DESCRIBED LAST,
          WE'LL DROP THEM FIRST.
         ______________________________________________________________________*/

  /* Drop two-placed objects
         grate
         steps
         fissure
         plant (mature)
         figure in mirror
         dragon
         chasm
         troll
         rug
       The workaround for two-placed objects is that the second location holds
       the object value + 200. 
       This requires numerous tests in the code for obj + 200.
     */

  for (var ii = 1; ii <= 200; ii++) {
    var kk = 201 - ii;

    if (fixd[kk] > 0) {
      drop(kk + 200, fixd[kk]); // 2nd location holding object + 200
      drop(kk, plac[kk]); // 1st location holding object
    }
  }

  // Drop non two-placed objects
  for (var ii = 1; ii <= 200; ii++) {
    var kk = 201 - ii;

    fixed[kk] = fixd[kk]; // Copy fixd[] array

    if ((plac[kk] != 0) & (fixd[kk] <= 0)) {
      // Drop item in reverse of read array order.
      drop(kk, plac[kk]);
    }
  }

  /*______________________________________________________________________
          TREASURES, AS NOTED EARLIER, ARE OBJECTS 150 THROUGH
          MAXTRS (CURRENTLY 173).  THEIR PROPS ARE INITIALLY -1, AND
          ARE SET TO 0 THE FIRST TIME THEY ARE DESCRIBED.  TALLY
          KEEPS TRACK OF HOW MANY ARE NOT YET FOUND, SO WE KNOW
          WHEN TO CLOSE THE CAVE.  TALLY2 COUNTS HOW MANY CAN NEVER
          BE FOUND (E.G.  IF LOST BIRD OR BRIDGE).
         ______________________________________________________________________*/
  TALLY = 0;
  for (var ii = MINTRS; ii <= MAXTRS; ii++) {
    if (ptext[ii] != 0) prop[ii] = -1;
    //			 console.log("Treasure "+ii+" ptext "+ptext[ii]);

    TALLY = TALLY - prop[ii]; // Treasure Props are -1 to start with so subtract is used.
  }

  /*______________________________________________________________________
          CLEAR THE HINT STUFF.  HINTLC(I) IS HOW LONG HE'S BEEN AT
          LOC WITH COND BIT I.  HINTED(I) IS TRUE IFF HINT I HAS
          BEEN USED.
         ______________________________________________________________________*/

  for (var ii = 1; ii <= HNTMAX; ii++) {
    hinted[ii] = false;
    hintlc[ii] = 0;
  }

  /*______________________________________________________________________
          INITIALIZE THE DWARVES.  DLOC IS LOC OF DWARVES,
          HARD-WIRED IN.  ODLOC IS PRIOR LOC OF EACH DWARF,
          INITIALLY GARBAGE.  DALTLC IS ALTERNATE INITIAL LOC FOR
          DWARF, IN CASE ONE OF THEM STARTS OUT ON TOP OF THE
          ADVENTURER.  (NO 2 OF THE 5 INITIAL LOCS ARE ADJACENT.)
          DSEEN IS TRUE IF DWARF HAS SEEN HIM.  DFLAG CONTROLS THE
          LEVEL OF ACTIVATION OF ALL THIS:
               0       NO DWARF STUFF YET (WAIT UNTIL REACHES HALL
                       OF MISTS)
               1       REACHED HALL OF MISTS, BUT HASN'T MET FIRST DWARF
               2       MET FIRST DWARF, OTHERS START MOVING, NO
                       KNIVES THROWN YET
               3       A KNIFE HAS BEEN THROWN (FIRST SET ALWAYS
                       MISSES)
               3+      DWARVES ARE MAD (INCREASES THEIR ACCURACY)
          SIXTH DWARF IS SPECIAL (THE PIRATE).  HE ALWAYS STARTS AT
          HIS CHEST'S EVENTUAL LOCATION INSIDE THE MAZE.  THIS LOC
          IS SAVED IN CHLOC FOR REF.  THE DEAD END IN THE OTHER
          MAZE HAS ITS LOC STORED IN CHLOC2.
         ______________________________________________________________________*/
  for (var ii = 1; ii <= 6; ii++) {
    dseen[ii] = false;
  }
  dloc[1] = 19;
  dloc[2] = 27;
  dloc[3] = 33;
  dloc[4] = 44;
  dloc[5] = 64;
  dloc[6] = CHLOC;

  for (var ii = 0; ii <= 4; ii++) {
    if (rtext[2 * ii + 81] != 0) MAXDIE = ii + 1;
  }

  // Welcome to Adventure!!  Would you like instructions?
  sayIt(" ", BLACK);
  rSpeak(65, BLACK);
  sayIt(" ", BLACK);
  askingYesNo = 0;

  loc = 1;
  nextloc = 1;
  describeLocation();

  normalInput = true;
  gameOver = false;

  setStatus();

  showMapImages(loc, showPirate, dloc[6], prop[CHEST]);
}

//______________________________________________________________________________
//    Set up data arrays
//______________________________________________________________________________
function setupData() {
  var ii, jj, kk;
  var ln = 0,
    ptr = 0,
    saveptr = 0;

  //___1.__ ltext array __________________________________________________
  for (ii = 2; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    ptr = splitInputLine(linput[ii], ii) * 1;

    if (ptr != saveptr) {
      saveptr = ptr;
      ltext[ptr] = ii;
    }
  }

  ptr++;
  ltext[ptr] = ii;
  ltext[0] = ptr;

  //___2.__ stext array __________________________________________________
  kk = ii + 2;
  saveptr = 0;
  for (var aa = 1; aa < LOCSIZ; aa++) {
    stext[aa] = 0;
  }

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    ptr = splitInputLine(linput[ii], ii) * 1;

    if (ptr != saveptr) {
      saveptr = ptr;
      stext[ptr] = ii;
    }
  }

  ptr++;
  stext[ptr] = ii;
  stext[0] = ptr;

  /*___3.__ Travel array _________________________________________________
      THE STUFF FOR SECTION 3 IS ENCODED HERE.  EACH
      "FROM-LOCATION" GETS A CONTIGUOUS SECTION OF THE "TRAVEL"
      ARRAY.  EACH ENTRY IN TRAVEL IS NEWLOC*1000 + KEYWORD
      (FROM SECTION 4, MOTION VERBS), AND IS NEGATED IF THIS IS
      THE LAST ENTRY FOR THIS LOCATION.  KEY(N) IS THE INDEX IN
      TRAVEL OF THE FIRST OPTION AT LOCATION N.
     ______________________________________________________________________*/
  kk = ii + 2;
  var trvs1 = 0,
    newloc = 0;
  for (var ii = 0; ii < LOCSIZ; ++ii) key[ii] = 0;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    var bar = linput[ii].split(/[ ]+/);

    loc = bar[0] * 1;
    newloc = bar[1] * 1;

    var tkx = 0;
    for (var jj = 2; jj < bar.length - 1; jj++) {
      tkx++;
      tk[tkx] = bar[jj] * 1;
    }

    if (key[loc] == 0) {
      key[loc] = TRVS;
    } else {
      trvs1 = TRVS - 1;
      travel[trvs1] = -travel[trvs1];
    }

    for (var jj = 1; jj <= tkx; jj++) {
      travel[TRVS] = newloc * 1000 + tk[jj];
      TRVS++;
    }

    trvs1 = TRVS - 1;
    travel[trvs1] = -travel[trvs1];
  }

  //___4.__ ktab & atab arrays ___________________________________________
  //   HERE WE READ IN THE VOCABULARY.  KTAB(N) IS THE WORD
  //   NUMBER, ATAB(N) IS THE CORRESPONDING WORD.
  //______________________________________________________________________
  kk = ii + 2;
  jj = 0;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    jj++;

    var bar = linput[ii].split(/[ ]+/);

    ktab[jj] = bar[0] * 1;
    atab[jj] = bar[1].trim();

    //console.log(jj+" ktab "+ktab[jj]+" atab "+atab[jj]);
  }

  jj++;
  ktab[jj] = -1;
  ktab[0] = jj;

  //___5.__ ptext array  _________________________________________________
  kk = ii + 2;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    ptr = splitInputLine(linput[ii], ii);

    if (barlen < 4) {
      ptext[ptr] = ii;
    }
  }
  lptr[ii] = -1;
  ptext[0] = ptr;

  //___6.__ rtext array  _________________________________________________
  kk = ii + 2;
  saveptr = 0;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    ptr = splitInputLine(linput[ii], ii) * 1;

    if (ptr != saveptr) {
      saveptr = ptr;
      rtext[ptr] = ii;
    }
  }
  ptr++;
  rtext[ptr] = ii;
  rtext[0] = ptr;

  /*___7.__ Plac & Fixd arrays __________________________________________
      READ IN THE INITIAL LOCATIONS FOR EACH OBJECT.  ALSO THE
      IMMOVABILITY INFO.  PLAC CONTAINS INITIAL LOCATIONS OF
      OBJECTS.  FIXD IS -1 FOR IMMOVABLE OBJECTS (INCLUDING THE
      SNAKE), OR = SECOND LOC FOR TWO-PLACED OBJECTS.
     ______________________________________________________________________*/
  var obj = 0,
    plc = 0,
    fxd = 0;
  kk = ii + 2;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    var bar = linput[ii].split(/[ ]+/);

    obj = bar[0] * 1;
    plc = bar[1] * 1;

    if (bar.length > 3) fxd = bar[2] * 1;
    else fxd = 0;

    plac[obj] = plc;
    //console.log("plac obj "+obj+" = "+plac[obj]);
    fixd[obj] = fxd;
  }
  plac[0] = obj;
  fixd[0] = obj;

  //___8.__ ActSpk array  _______________________________________________
  //   READ DEFAULT MESSAGE NUMBERS FOR ACTION VERBS, STORE IN
  //   ACTSPK.
  //_____________________________________________________________________
  var verb = 0,
    msgno = 0;
  kk = ii + 2;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    var bar = linput[ii].split(/[ ]+/);

    verb = bar[0] * 1;
    msgno = bar[1] * 1;

    actspk[verb] = msgno;
  }

  //___9.__ Condl array   _________________________________________________
  //   READ INFO ABOUT AVAILABLE LIQUIDS AND OTHER CONDITIONS, STORE IN CONDL.
  //______________________________________________________________________
  var cbit = 0,
    xx = 0;
  kk = ii + 2;
  jj = 0;
  for (var ii = 0; ii < LOCSIZ; ++ii) condl[ii] = 0;

  for (ii = kk; ii < LINSIZ; ii++) {
    jj++;

    if (linput[ii].substring(0, 2) == "-1") break;

    var bar = linput[ii].split(/[ ]+/);

    cbit = bar[0] * 1;

    for (var uu = 1; uu <= bar.length - 2; uu++) {
      xx = bar[uu] * 1;

      switch (cbit) {
        case 0:
          condl[xx] = condl[xx] + 1;
          break;
        case 1:
          condl[xx] = condl[xx] + 2;
          break;
        case 2:
          condl[xx] = condl[xx] + 4;
          break;
        case 3:
          condl[xx] = condl[xx] + 8;
          break;
        case 4:
          condl[xx] = condl[xx] + 16;
          break;
        case 5:
          condl[xx] = condl[xx] + 32;
          break;
        case 6:
          condl[xx] = condl[xx] + 64;
          break;
        case 7:
          condl[xx] = condl[xx] + 128;
          break;
        case 8:
          condl[xx] = condl[xx] + 256;
          break;
        case 9:
          condl[xx] = condl[xx] + 512;
          break;
      }
    }
  }
  condl[0] = jj;

  //___10._ ctext array   _________________________________________________
  kk = ii + 2;
  jj = 0;
  for (ii = kk; ii < LINSIZ; ii++) {
    jj++;

    if (linput[ii].substring(0, 2) == "-1") break;

    cval[jj] = splitInputLine(linput[ii], ii) * 1;
    ctext[jj] = lines[ii];
  }
  CLSSES = jj;

  //___11._ Hints array   _________________________________________________
  kk = ii + 2;

  for (ii = kk; ii < LINSIZ; ii++) {
    if (linput[ii].substring(0, 2) == "-1") break;

    var bar = linput[ii].split(/[ ]+/);

    ptr = bar[0] * 1;
    hints[ptr][1] = bar[1] * 1;
    hints[ptr][2] = bar[2] * 1;
    hints[ptr][3] = bar[3] * 1;
    hints[ptr][4] = bar[4] * 1;
  }
  HNTMAX = ptr;
}

/*______________________________________________________________________
   Split input line into ptr and text
   ______________________________________________________________________*/
function splitInputLine(lin, ii) {
  var bar = lin.split(" ");

  lptr[ii] = bar[0] * 1;
  barlen = bar[0].length;
  lines[ii] = right(lin, barlen).trim();
  return lptr[ii];
}

/*______________________________________________________________________
 *   right - return all characters to the right of position n in string s.
 */
function right(s, len) {
  if (len < s.length) return s.substring(Math.max(0, len), s.length);
  else return "";
}

/*______________________________________________________________________
 *   showObject - given object number print the atab[obj] object name.
 */
function showObject(sobj) {
  for (var ii = 1; ii < TABSIZ; ii++) {
    //if (sobj == 166)
    //		console.log(ktab[ii]+" "+atab[ii]+" "+sobj);

    if (ktab[ii] >= 1000 && ktab[ii] % 1000 == sobj) {
      return atab[ii];
    }
  }
  return "None";
}
