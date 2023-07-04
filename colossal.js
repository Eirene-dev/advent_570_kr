var linput;
var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
var tempX = 0;
var tempY = 0;
var IE = document.all ? true : false;
var autoVerb = 85;

function runit() {
  linput = readData();

  if (version == 000) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "break  close   get     drop" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "strike take    throw   unlock  ";
  } else if (version == 350 || version == 366) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "break  close   get     drop" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   unlock  wave";
  } else if (version == 399) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "break  close   get     drop" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   unlock  wave";
  } else if (version == 430) {
    document.getElementById("verbList").value =
      "climb  invent  listen  load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "break  close   get     drop" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    light" +
      "\n" +
      "lock   open    pour    rub" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   unlock  wave";
  } else if (version == 440) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "get    drop    break   close" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   unlock  wave";
  } else if (version == 501) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "get    drop    break   close" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   unlock  wave";
  } else if (version == 550) {
    document.getElementById("verbList").value =
      "climb  invent  light   restore" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "get    drop    break   close" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "push   read    say     take" +
      "\n" +
      "throw  unlock  wave    exting";
  } else if (version == 551) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "get    drop    break   close" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "push   read    say     take" +
      "\n" +
      "throw  unlock  wave    exting";
  } else if (version == 570) {
    document.getElementById("verbList").value =
      "climb  invent  light   load" +
      "\n" +
      "look   off     on      plugh" +
      "\n" +
      "quit   save    score   xyzzy" +
      "\n" +
      "break  close   get     drop" +
      "\n" +
      "dig    enter   exit    feed" +
      "\n" +
      "fill   free    kill    lock" +
      "\n" +
      "move   open    pour    press" +
      "\n" +
      "pull   push    read    say" +
      "\n" +
      "take   throw   turn    unlock" +
      "\n" +
      "wave";
  }

  initialize();

  document.getElementById("inventoryList").value = "";
  document.getElementById("commandLine").focus();

  if (isTouch) {
    document.getElementById("verbList").cols = 15;
    document.getElementById("inventoryList").cols = 15;
  }
}

window.onload = runit;

//  Display a string
function aaa(s) {
  document.displayForm.displayText.value += s + "\n";

  var textarea = document.getElementById("displayText");
  textarea.scrollTop = textarea.scrollHeight;
}

//  Display a string
function sayIt(s, hilite) {
  document.displayForm.displayText.value += s + "\n";

  var textarea = document.getElementById("displayText");
  textarea.scrollTop = textarea.scrollHeight;
}

//  Display the inventory list
function showInventory(s) {
  document.getElementById("inventoryList").value = s;
}

//  Show the status bar
function showStatusBar(sLoc, sScore, sMoves) {
  document.getElementById("statusLoc").innerHTML = sLoc;
  document.getElementById("statusScore").innerHTML = sScore;
  document.getElementById("statusMoves").innerHTML = sMoves;
}

//  NW button
document.getElementById("navbutton-NW").onclick = function (event) {
  document.getElementById("commandLine").value = "NW";

  doCommand();
};
// N button
document.getElementById("navbutton-N").onclick = function (event) {
  document.getElementById("commandLine").value = "N";

  doCommand();
};
// NE button
document.getElementById("navbutton-NE").onclick = function (event) {
  document.getElementById("commandLine").value = "NE";

  doCommand();
};
// W button
document.getElementById("navbutton-W").onclick = function (event) {
  document.getElementById("commandLine").value = "W";

  doCommand();
};
// E button
document.getElementById("navbutton-E").onclick = function (event) {
  document.getElementById("commandLine").value = "E";

  doCommand();
};
// SW button
document.getElementById("navbutton-SW").onclick = function (event) {
  document.getElementById("commandLine").value = "SW";

  doCommand();
};
// S button
document.getElementById("navbutton-S").onclick = function (event) {
  document.getElementById("commandLine").value = "S";

  doCommand();
};
// SE button
document.getElementById("navbutton-SE").onclick = function (event) {
  document.getElementById("commandLine").value = "SE";

  doCommand();
};
// U button
document.getElementById("navbutton-U").onclick = function (event) {
  document.getElementById("commandLine").value = "U";

  doCommand();
};
// D button
document.getElementById("navbutton-D").onclick = function (event) {
  document.getElementById("commandLine").value = "D";

  doCommand();
};
// Show/Hide map
document.getElementById("navbutton-M").onclick = function (event) {
  toggleMap();

  if (showmap) {
    document.getElementById("navbutton-M").setAttribute("class", "buttonMap");
  } else {
    document
      .getElementById("navbutton-M")
      .setAttribute("class", "buttonMapOff");
  }

  giveCommandFocus();
};

/**  Command line listener
 *
 */
document.getElementById("commandLine").onkeypress = function (event) {
  if (event.keyCode == 13) {
    doCommand();
  }
};

/**  do command.
 *
 */
function doCommand() {
  var text = document.getElementById("commandLine").value;

  document.getElementById("commandLine").value = "";

  sayIt("\n" + ">" + text, RED);

  processCommand(text);

  giveCommandFocus();
  cntWords = 0;
}

//  Display Text listener
//
document.getElementById("displayText").onclick = function (e) {
  var curpos = document.getElementById("displayText").selectionStart;

  if (getCommand(curpos, document.getElementById("displayText").value))
    doCommand();
  else giveCommandFocus();
};

//  Verb List listener
//
document.getElementById("verbList").onclick = function (e) {
  var curpos = document.getElementById("verbList").selectionStart;

  if (
    getCommand(curpos, document.getElementById("verbList").value) |
    (curpos <= autoVerb)
  )
    doCommand();
  else giveCommandFocus();
};

//  Inventory List listener
//
document.getElementById("inventoryList").onclick = function (e) {
  var curpos = document.getElementById("inventoryList").selectionStart;

  if (getCommand(curpos, document.getElementById("inventoryList").value))
    doCommand();
  else giveCommandFocus();
};

//  Give focus to Command line if not a touch device.
//
function giveCommandFocus() {
  if (!isTouch) document.getElementById("commandLine").focus();
}

//  Get Command string from the Text area.
//
function getCommand(ptr, inArea) {
  cntWords = 0;
  var cmdTxt;
  var textLen = inArea.length;

  if (ptr == textLen) return false;

  // mouse-click selection of a character
  var strBeg = Math.max(0, ptr - 10);
  var strEnd = Math.min(textLen, ptr + 10);

  var ss = null;

  ss = inArea.substring(strBeg, strEnd);
  if (ss == null) return true;

  var aa = getWord(ss, ptr - strBeg);

  cmdTxt =
    document.getElementById("commandLine").value + aa.toLowerCase() + " ";
  document.getElementById("commandLine").value = cmdTxt;

  if (aa == "") {
    // clicked on whitespace so simulate 'Enter' key hit.
    return true;
  }

  // Count words in command - if 2 or more then automatically process command (return true)
  var bar = cmdTxt.split(/[ ]+/);
  cntWords = bar.length - 1;

  return cntWords > 1;
}

/**  Get a word from string (delimited by spaces).
 *
 */
function getWord(testStr, strt) {
  var ii,
    jj = 0;
  var chr = "";

  if (testStr == "") return "";
  if (testStr.length < strt) return "";

  for (ii = strt; ii >= 0; ii--) {
    chr = testStr.substring(ii, ii + 1);
    if (chr == " ") break;
    if (chr == ".") break;
    if (chr == ",") break;
    if (chr == '"') break;
    if (chr == ">") break;
    if (chr == "!") break;
    if (chr == "-") break;
    if (chr == "\n") break;
    if (chr == "\t") break;
  }

  for (jj = strt; jj < testStr.length; jj++) {
    chr = testStr.substring(jj, jj + 1);
    if (chr == " ") break;
    if (chr == ".") break;
    if (chr == ",") break;
    if (chr == '"') break;
    if (chr == ">") break;
    if (chr == "!") break;
    if (chr == "-") break;
    if (chr == "\n") break;
    if (chr == "\t") break;
  }

  if (ii == jj) return "";

  if (jj <= testStr.length) {
    return testStr.substring(ii + 1, jj);
  }
  return "";
}
