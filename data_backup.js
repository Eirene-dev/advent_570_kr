function readData() {
  var xx = new Array();
  var ii = 1;

  // ltext[] array
  xx[ii++] = "1";
  xx[ii++] =
    "1       You are standing at the end of a road before a small brick building.          ";
  xx[ii++] =
    "1       Around you is a forest. A small stream flows out of the building and           ";
  xx[ii++] =
    "1       down a gully.                                                                   ";

  xx[ii++] =
    "2       You have walked up a hill, still in the forest.  The road slopes back           ";
  xx[ii++] =
    "2       down the other side of the hill.  There is a building in the distance.          ";
  xx[ii++] =
    "2       당신은 숲 속에서 언덕을 올라갔습니다. 도로는 언덕의 반대편으로 내려가고 있습니다. 멀리 건물이 보입니다.         ";
  xx[ii++] =
    "2       당신은 언덕을 올라갔으며, 여전히 숲 속에 있습니다. 도로는 언덕의 반대편으로 내려갑니다. 멀리에 건물이 보입니다.         ";
  xx[ii++] =
    "3       You are inside a building, a well house for a large spring. To the east is a    ";
  xx[ii++] =
    "3       small room.                                                                     ";
  xx[ii++] =
    "3 당신은 거대한 샘을 위한 우물집 안에 있습니다. 동쪽에는 작은 방이 있습니다. ";
  xx[ii++] =
    "1       당신은 도로의 끝에 작은 벽돌 건물 앞에 서 있습니다. 주변에는 숲이 있습니다. 작은 시냇물이 건물에서 흘러 나와서 계곡을 따라 내려갑니다.  ";
  xx[ii++] =
    "4       You are in a valley in the forest beside a stream tumbling along a              ";
  xx[ii++] =
    "4       rocky bed.                                                                      ";
  xx[ii++] =
    "4 당신은 숲 속 계곡에 있습니다. 시냇물이 바위 바닥을 따라 흘러가고 있습니다. ";
  xx[ii++] =
    "5       You are in open forest, with a deep valley to one side.                         ";
  xx[ii++] =
    "5       당신은 깊은 계곡이 한쪽에 있는 숲 속에 있습니다.                              ";
  xx[ii++] =
    "6       You are in open forest near both a valley and a road.                           ";
  xx[ii++] =
    "6       당신은 계곡과 도로 모두 가까이에 있는 숲 속에 있습니다.                          ";
  xx[ii++] =
    "7       At your feet all the water of the stream splashes into a 2-inch slit            ";
  xx[ii++] =
    "7       in the rock.  Downstream the streambed is bare rock.                            ";
  xx[ii++] =
    "7       당신의 발 밑에서 모든 물은 바위에 있는 2인치 크기의 틈새로 튀어오릅니다.             ";
  xx[ii++] =
    "7       아래로는 하류에서 강바닥이 벌거숭이 됩니다.                                      ";
  xx[ii++] =
    "8       You are in a 20-foot depression floored with bare dirt.  Set into the           ";
  xx[ii++] =
    "8       dirt is a strong steel grate mounted in concrete.  A dry streambed              ";
  xx[ii++] =
    "8       leads into the depression.                                                      ";
  xx[ii++] =
    "8       당신은 약 20피트 깊이의 맨바닥이 있는 웅덩이에 있습니다.                            ";
  xx[ii++] =
    "8       이 웅덩이에는 단단한 강철 그레이트가 콘크리트에 장착되어 있습니다.                  ";
  xx[ii++] =
    "8       건조한 시내 강바닥이 흐릅니다.                                                  ";
  xx[ii++] =
    "9       You are in a small chamber beneath a 3x3 steel grate to the surface.            ";
  xx[ii++] =
    "9       A low crawl over cobbles leads inward to the west.                              ";
  xx[ii++] =
    "9       당신은 표면으로 향하는 3x3 크기의 강철 그레이트 아래 작은 방 안에 있습니다.         ";
  xx[ii++] =
    "9       작은 돌들 위를 기어가는 길이 서쪽으로 이어져 있습니다.                            ";
  xx[ii++] =
    "10      You are crawling over cobbles in a low passage.  There is a dim light           ";
  xx[ii++] =
    "10      at the east end of the passage.                                                 ";
  xx[ii++] =
    "10      당신은 낮은 통로에서 작은 돌 위를 기어 다니고 있습니다. 통로의 동쪽 끝에는 어둠이 있습니다.  ";
  xx[ii++] =
    "10      통로의 동쪽 끝에는 어둠이 있습니다.                                                ";
  xx[ii++] =
    "11      You are in a debris room filled with stuff washed in from the surface.          ";
  xx[ii++] =
    "11      A low wide passage with cobbles becomes plugged with mud and debris             ";
  xx[ii++] =
    "11      here, but an awkward canyon leads upward and west.  A note on the wall          ";
  xx[ii++] =
    '11      says "Magic word XYZZY".                                                        ';
  xx[ii++] =
    "11      당신은 표면에서 씻겨온 물건들로 가득한 잔해 방에 있습니다.                  ";
  xx[ii++] =
    "11      낮고 넓은 돌로 포장된 통로가 이곳에서 진흙과 잔해로 막혀있지만, 어색한 협곡이 위쪽과 서쪽으로 이어집니다. 벽에 있는 쪽지에는 '마법의 단어 XYZZY'라고 적혀 있습니다.  ";
  xx[ii++] =
    '11      "마법의 단어 XYZZY"라고 벽에 적혀 있는 쪽지를 읽을 수 있습니다.                   ';
  xx[ii++] =
    "12      You are in an awkward sloping east/west canyon.                                 ";
  xx[ii++] =
    "12      당신은 어색하게 기울어진 동/서쪽 협곡에 있습니다.                                 ";
  xx[ii++] =
    "13      You are in a splendid chamber thirty feet high.  The walls are frozen           ";
  xx[ii++] =
    "13      rivers of orange stone.  An awkward canyon and a good passage exit              ";
  xx[ii++] =
    "13      from east and west sides of the chamber.                                        ";
  xx[ii++] =
    "13      당신은 화려한 높이 30피트의 방 안에 있습니다. 벽은 주황색 돌로 이루어진 얼어붙은 강입니다. 어색한 협곡과 좋은 통로가 방의 동쪽과 서쪽에 있습니다. ";
  xx[ii++] =
    "14      At your feet is a small pit breathing traces of white mist.  An east            ";
  xx[ii++] =
    "14      passage ends here except for a small crack leading on.                          ";
  xx[ii++] =
    "14 당신의 발 아래는 희미한 흰 안개가 나오는 작은 구덩이가 있습니다. 동쪽 통로는 여기서 끝나며, 작은 균열로 이어집니다.";
  xx[ii++] =
    "15      You are at one end of a vast hall stretching forward out of sight to            ";
  xx[ii++] =
    "15      the west.  There are openings to either side.  Nearby, a wide stone             ";
  xx[ii++] =
    "15      staircase leads downward.  The hall is filled with wisps of white mist          ";
  xx[ii++] =
    "15      swaying to and fro almost as if alive.  A cold wind blows up the                ";
  xx[ii++] =
    "15      staircase.  There is a passage at the top of a dome behind you.                 ";
  xx[ii++] =
    "15 당신은 시야에서 멀리 서쪽으로 펼쳐진 거대한 홀의 한쪽 끝에 있습니다. 양쪽에는 입구가 있습니다. 근처에는 넓은 돌 계단이 아래로 이어져 있습니다. 홀은 흰 안개의 날카로운 미사일로 가득 차 있으며 거의 생명처럼 왔다갔다 흔들리고 있습니다. 차가운 바람이 계단을 타고 올라옵니다. 뒤에 한 천장의 입구가 있습니다.";
  xx[ii++] =
    "16      The crack is far too small for you to follow.                                   ";
  xx[ii++] = "16 그 균열은 너무 작아서 따라갈 수 없습니다.";
  xx[ii++] =
    "17      You are on the east bank of a fissure slicing clear across the hall.            ";
  xx[ii++] =
    "17      The mist is quite thick here, and the fissure is too wide to jump.              ";
  xx[ii++] =
    "17 당신은 홀을 가로지르는 균열의 동쪽 둑에 서 있습니다. 안개가 매우 짙으며, 균열은 뛰어넘을 수 없을만큼 넓습니다.";
  xx[ii++] =
    "18      This is a low room with a crude note on the wall.  The note says,               ";
  xx[ii++] =
    '18      "You won\'t get it up the steps".                                               ';
  xx[ii++] =
    "18 이곳은 벽에 잔인한 쪽지가 있는 낮은 방입니다. 쪽지에는 '계단을 올라가지 마세요'라고 적혀 있습니다.";
  xx[ii++] =
    "19      You are in the hall of the mountain king, with passages off in all              ";
  xx[ii++] =
    "19      directions.                                                                     ";
  xx[ii++] = "19 당신은 산왕의 전당에 있으며, 모든 방향으로 통로가 있습니다.";
  xx[ii++] =
    "20      You are at the bottom of the pit with a broken neck.                            ";
  xx[ii++] = "20 당신은 목이 부러진 구덩이의 밑바닥에 있습니다.";
  xx[ii++] =
    "21      You didn't make it.                                                             ";
  xx[ii++] = "21 당신은 성공하지 못했습니다. ";
  xx[ii++] =
    "22      The dome is unclimbable.                                                        ";
  xx[ii++] = "22 그 돔은 오르기 어렵습니다. ";
  xx[ii++] =
    "23      You are at the west end of the twopit room.  There is a large hole in           ";
  xx[ii++] =
    "23      the wall above the pit at this end of the room.                                 ";
  xx[ii++] =
    "23 당신은 이중 구덩이 방의 서쪽 끝에 있습니다. 이 방의 이쪽 끝 구덩이 위에는 큰 구멍이 있습니다. ";
  xx[ii++] =
    "23 당신은 이중 구덩이 방의 동쪽 구덩이 아래에 있습니다. 구덩이의 한 모퉁이에는 작은 기름 웅덩이가 있습니다. ";
  xx[ii++] =
    "24      You are at the bottom of the eastern pit in the twopit room.  There is          ";
  xx[ii++] =
    "24      a small pool of oil in one corner of the pit.                                   ";
  xx[ii++] =
    "24 당신은 이중 구덩이 방의 동쪽 구덩이 바닥에 있습니다. 25피트 정도 위에 벽에 큰 구멍이 있습니다. ";
  xx[ii++] =
    "24 당신은 이중 구덩이 방의 동쪽 구덩이 바닥에 있습니다. 구덩이 한 모퉁이에 작은 기름 웅덩이가 있습니다. ";
  xx[ii++] =
    "25      You are at the bottom of the western pit in the twopit room.  There is          ";
  xx[ii++] =
    "25      a large hole in the wall about 25 feet above you.                               ";
  xx[ii++] =
    "25 당신은 이중 구덩이 방의 서쪽 구덩이 바닥에 있습니다. 25피트 정도 위에 벽에 큰 구멍이 있습니다. ";
  xx[ii++] =
    "25 당신은 이중 구덩이 방의 서쪽 구덩이 바닥에 있습니다. 구덩이 한 모퉁이에 작은 기름 웅덩이가 있습니다. ";
  xx[ii++] =
    "26      You clamber up the plant and scurry through the hole at the top.                ";
  xx[ii++] = "26 당신은 식물을 타고 올라가고 위쪽 구멍을 통과합니다. ";
  xx[ii++] =
    "27      You are on the west side of the fissure in the hall of mists.                   ";
  xx[ii++] = "27 당신은 안개의 홀의 균열 서쪽에 있습니다. ";
  xx[ii++] =
    "28      You are in a low N/S passage at a hole in the floor.  The hole goes             ";
  xx[ii++] =
    "28      down to an E/W passage.                                                         ";
  xx[ii++] =
    "28 당신은 N/S 통로의 낮은 곳에 있으며, 바닥의 구멍이 있습니다. 구멍은 E/W 통로로 이어집니다. ";
  xx[ii++] = "28 당신은 남쪽 측면 방에 있습니다. ";
  xx[ii++] =
    "29      You are in the south side chamber.                                              ";
  xx[ii++] = "29 당신은 남쪽 측면 방에 있습니다. ";
  xx[ii++] =
    "30      You are in the west side chamber of the hall of the mountain king.              ";
  xx[ii++] =
    "30      A passage continues west and up and a path leads north.                         ";
  xx[ii++] = "30 당신은 산왕의 전당 서쪽 측면 방에 있습니다. ";
  xx[ii++] = "30 통로는 서쪽과 위로 이어지며, 길이 북쪽으로 이어집니다. ";
  xx[ii++] =
    "31      >$<                                                                             ";
  xx[ii++] =
    "32      You can't get by the snake.                                                     ";
  xx[ii++] =
    "33      You are in a large room, with a passage to the south, a passage to the          ";
  xx[ii++] =
    '33      west, and a wall of broken rock to the east.  There is a large "Y2" on          ';
  xx[ii++] =
    "33      a rock in the room's center.                                                    ";
  xx[ii++] =
    "34      You are in a jumble of rock, with cracks everywhere.                            ";
  xx[ii++] =
    "35      You're at a low window overlooking a huge pit, which extends up out of          ";
  xx[ii++] =
    "35      sight.  A floor is indistinctly visible over 50 feet below.  Traces of          ";
  xx[ii++] =
    "35      white mist cover the floor of the pit, becoming thicker to the right.           ";
  xx[ii++] =
    "35      Marks in the dust around the window would seem to indicate that                 ";
  xx[ii++] =
    "35      someone has been here recently.  Directly across the pit from you and           ";
  xx[ii++] =
    "35      25 feet away there is a similar window looking into a lighted room.  A          ";
  xx[ii++] =
    "35      shadowy figure can be seen there peering back at you.                           ";
  xx[ii++] =
    "36      You are in a dirty broken passage.  To the east is a crawl.  To the             ";
  xx[ii++] =
    "36      west is a large passage.  Above you is a hole to another passage.               ";
  xx[ii++] =
    "37      You are on the brink of a small clean climbable pit.  A crawl leads             ";
  xx[ii++] =
    "37      west.                                                                           ";
  xx[ii++] =
    "38      You are in the bottom of a small pit with a little stream, which                ";
  xx[ii++] =
    "38      enters and exits through tiny slits.                                            ";
  xx[ii++] =
    "39      You are in a large room full of dusty rocks.  There is a big hole in            ";
  xx[ii++] =
    "39      the floor.  There are cracks everywhere, and a passage leading east.            ";
  xx[ii++] =
    "40      You have crawled through a very low wide passage parallel to and north          ";
  xx[ii++] =
    "40      of the hall of mists.                                                           ";
  xx[ii++] =
    "32      당신은 뱀을 통과할 수 없습니다.                                                     ";
  xx[ii++] =
    "33      당신은 큰 방에 있으며, 남쪽으로 통로, 서쪽으로 통로, 동쪽으로는 부서진 바위로 이루어진 벽이 있습니다.  방의 중앙에는 큰 'Y2'가 있습니다.          ";
  xx[ii++] =
    "34      당신은 바위 더미에 있으며, 곳곳에 균열이 있습니다.                            ";
  xx[ii++] =
    "35      당신은 거대한 구덩이를 내려다보는 낮은 창가에 있습니다. 구덩이는 시야 밖으로까지 이어지며, 50피트 아래로 희미하게 바닥이 보입니다. 바닥에는 흰 안개의 흔적이 있으며, 오른쪽으로 갈수록 짙어집니다. 창가 주변의 먼지에 남겨진 흔적으로 보아 최근에 누군가가 여기에 있었음을 알 수 있습니다. 직접적으로 당신과 구덩이 반대편에는 25피트 떨어진 곳에 비슷한 창이 있으며, 그 안에는 밝은 방이 보입니다. 거기서 어두운 인물이 당신을 바라보고 있는 모습이 보입니다. ";
  xx[ii++] =
    "36      당신은 더러운 부서진 통로에 있습니다. 동쪽으로 기어갈 수 있는 통로가 있고, 서쪽으로는 큰 통로가 있습니다. 위쪽에는 다른 통로로 통하는 구멍이 있습니다. ";
  xx[ii++] =
    "37      당신은 작은 깨끗한 오르막 구덩이의 가장자리에 있습니다. 서쪽으로 기어갈 수 있는 통로가 있습니다.          ";
  xx[ii++] =
    "38      당신은 작은 구덩이 아래에 있는 작은 시냇물과 함께 있는 곳에 있습니다. 시냇물은 작은 갈혈을 통해 들어오고 나갑니다.                    ";
  xx[ii++] =
    "39      당신은 먼지투성이의 바위로 가득한 큰 방에 있습니다. 바닥에 큰 구멍이 있으며, 곳곳에 균열이 있으며, 동쪽으로 이어지는 통로가 있습니다.       ";
  xx[ii++] =
    "40      당신은 안개의 전당과 평행한 매우 낮고 넓은 통로를 기어갔습니다.                           ";
  xx[ii++] =
    "41      You are at the west end of hall of mists.  A low wide crawl continues           ";
  xx[ii++] =
    "41      west and another goes north.  To the south is a little passage 6 feet           ";
  xx[ii++] =
    "41      off the floor.                                                                  ";
  xx[ii++] =
    "42      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "43      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "44      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "45      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "46      Dead end                                                                        ";
  xx[ii++] =
    "47      Dead end                                                                        ";
  xx[ii++] =
    "48      Dead end                                                                        ";
  xx[ii++] =
    "49      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "50      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "51      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "52      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "53      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "54      Dead end                                                                        ";
  xx[ii++] =
    "55      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "56      Dead end                                                                        ";
  xx[ii++] =
    "57      You are on the brink of a thirty foot pit with a massive orange column          ";
  xx[ii++] =
    "57      down one wall.  You could climb down here but you could not get back            ";
  xx[ii++] =
    "57      up.  The maze continues at this level.                                          ";
  xx[ii++] =
    "58      Dead end                                                                        ";
  xx[ii++] =
    "59      You have crawled through a very low wide passage parallel to and north          ";
  xx[ii++] =
    "59      of the hall of mists.                                                           ";
  xx[ii++] =
    "60      You are at the east end of a very long hall apparently without side             ";
  xx[ii++] =
    "60      chambers.  To the east a low wide crawl slants up.  To the north a              ";
  xx[ii++] =
    "60      round two foot hole slants down.                                                ";

  xx[ii++] =
    "41      당신은 안개의 전당의 서쪽 끝에 있습니다. 낮은 넓은 기어갈 수 있는 통로가 서쪽으로 이어지고, 또 다른 통로가 북쪽으로 이어집니다. 남쪽에는 높이로 6피트의 작은 통로가 있습니다.";
  xx[ii++] = "42      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "43      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "44      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "45      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "46      막다른 곳입니다. ";
  xx[ii++] = "47      막다른 곳입니다. ";
  xx[ii++] = "48      막다른 곳입니다. ";
  xx[ii++] = "49      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "50      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "51      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "52      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "53      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "54      막다른 곳입니다. ";
  xx[ii++] = "55      당신은 일그러진 작은 통로의 미로에 있습니다. ";
  xx[ii++] = "56      막다른 곳입니다. ";
  xx[ii++] =
    "57      당신은 한쪽 벽에는 거대한 주황색 기둥이 있는 30피트 깊이의 구덩이 가장자리에 있습니다. 여기로 내려갈 수는 있지만 다시 올라올 수는 없습니다. 미로는 이 수준에서 계속됩니다. ";
  xx[ii++] = "58      막다른 곳입니다. ";
  xx[ii++] =
    "59      당신은 안개의 전당과 평행한 매우 낮고 넓은 통로를 기어갔습니다. ";
  xx[ii++] =
    "60      당신은 측면의 방이 없는 아주 긴 전당의 동쪽 끝에 있습니다. 동쪽으로 낮고 넓은 기어갈 수 있는 통로가 올라갑니다. ";
  xx[ii++] =
    "60      북쪽으로는 작은 둥근 구멍이 2피트 아래로 기울어져 내려갑니다. ";
  xx[ii++] =
    "61      You are at the west end of a very long featureless hall.  The hall              ";
  xx[ii++] =
    "61      joins up with a narrow north/south passage.                                     ";
  xx[ii++] =
    "62      You are at a crossover of a high N/S passage and a low E/W one.                 ";
  xx[ii++] =
    "63      You are in a dusty storage room lined with empty shelves.                       ";
  xx[ii++] =
    "64      You are at a complex junction.  A low hands and knees passage from the          ";
  xx[ii++] =
    "64      north joins a higher crawl from the east to make a walking passage              ";
  xx[ii++] =
    "64      going west.  There is also a large room above.  The air is damp here.           ";
  xx[ii++] =
    "65      You are in bedquilt, a long east/west passage with holes everywhere.            ";
  xx[ii++] =
    "65      To explore at random select north, south, up, or down.                          ";
  xx[ii++] =
    "66      You are in a room whose walls resemble swiss cheese.  Obvious passages          ";
  xx[ii++] =
    "66      go west, east, NE, and NW.  Part of the room is occupied by a large             ";
  xx[ii++] =
    "66      bedrock block.                                                                  ";
  xx[ii++] =
    "67      You are at the east end of the twopit room.  The floor here is                  ";
  xx[ii++] =
    "67      littered with thin rock slabs, which make it easy to descend the pits.          ";
  xx[ii++] =
    "67      There is a path here bypassing the pits to connect passages from east           ";
  xx[ii++] =
    "67      and west.  There are holes all over, but the only big one is on the             ";
  xx[ii++] =
    "67      wall directly over the west pit where you can't get to it. A narrow path leads  ";
  xx[ii++] =
    "67      north.                                                                          ";
  xx[ii++] =
    "68      You are in a large low circular chamber whose floor is an immense slab          ";
  xx[ii++] =
    "68      fallen from the ceiling (slab room).  East and west there once were             ";
  xx[ii++] =
    "68      large passages, but they are now filled with boulders.  Low small               ";
  xx[ii++] =
    "68      passages go north and south, and the south one quickly bends west               ";
  xx[ii++] =
    "68      around the boulders.                                                            ";
  xx[ii++] =
    "69      You are in a secret N/S canyon above a large room.                              ";
  xx[ii++] =
    "70      You are in a secret N/S canyon above a sizable passage.                         ";
  xx[ii++] =
    "71      You are in a secret canyon at a junction of three canyons, bearing              ";
  xx[ii++] =
    "71      north, south, and SE.  The north one is as tall as the other two                ";
  xx[ii++] =
    "71      combined.                                                                       ";
  xx[ii++] =
    "72      You are in a large low room.  Crawls lead north, SE, and SW.                    ";
  xx[ii++] =
    "73      Dead end crawl.                                                                 ";
  xx[ii++] =
    "74      You are in a secret canyon which here runs E/W.  It crosses over a              ";
  xx[ii++] =
    "74      very tight canyon 15 feet below.  If you go down you may not be able            ";
  xx[ii++] =
    "74      to get back up.                                                                 ";
  xx[ii++] =
    "75      You are at a wide place in a very tight N/S canyon.                             ";
  xx[ii++] =
    "76      You are in a low wide room with an exit to the north.                           ";
  xx[ii++] =
    "76      Partially projecting from a low alcove in the south wall is the frozen stone    ";
  xx[ii++] =
    "76      form of a dwarf seemingly struggling to escape his rocky confines.              ";
  xx[ii++] =
    "76      A brass plaque hangs above the alcove.                                          ";
  xx[ii++] =
    "77      You are in a tall E/W canyon.  A low tight crawl goes 3 feet north and          ";
  xx[ii++] =
    "77      seems to open up.                                                               ";
  xx[ii++] =
    "78      The canyon runs into a mass of boulders -- dead end.                            ";
  xx[ii++] =
    "79      The stream flows out through a pair of 1 foot diameter drainage pipes.          ";
  xx[ii++] =
    "79      It would be advisable to use the exit.                                          ";
  xx[ii++] =
    "80      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "81      Dead end                                                                        ";
  xx[ii++] =
    "82      Dead end                                                                        ";
  xx[ii++] =
    "83      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "84      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "85      Dead end                                                                        ";
  xx[ii++] =
    "86      Dead end                                                                        ";
  xx[ii++] =
    "87      You are in a maze of twisty little passages, all alike.                         ";
  xx[ii++] =
    "88      You are in a long, narrow corridor stretching out of sight to the               ";
  xx[ii++] =
    "88      west.  At the eastern end is a hole through which you can see a                 ";
  xx[ii++] =
    "88      profusion of leaves.                                                            ";
  xx[ii++] =
    '89      There is nothing here to climb.  Use "up" or "out" to leave the pit.            ';
  xx[ii++] =
    "90      You have climbed up the plant and out of the pit.                               ";
  xx[ii++] =
    "91      You are at the top of a steep incline above a large room.  You could            ";
  xx[ii++] =
    "91      climb down here, but you would not be able to climb up.  There is a             ";
  xx[ii++] =
    "91      passage leading back to the north.                                              ";
  xx[ii++] =
    "92      You are in the giant room.  The ceiling here is too high up for your            ";
  xx[ii++] =
    "92      lamp to show it.  Cavernous passages lead east, north, and south.  On           ";
  xx[ii++] =
    '92      the west wall is scrawled the inscription, "Fee fie foe foo" <sic>.             ';
  xx[ii++] =
    "93      You are on a wide ledge with an exit south and a narrow opening leading down.   ";
  xx[ii++] =
    "94      You are at one end of an immense north/south passage.                           ";
  xx[ii++] =
    "95      You are in a magnificent cavern with a rushing stream, which cascades           ";
  xx[ii++] =
    "95      over a sparkling waterfall into a roaring whirlpool which disappears            ";
  xx[ii++] =
    "95      through a hole in the floor.  Passages exit to the south and west.              ";
  xx[ii++] =
    "96      You are in the soft room.  The walls are covered with heavy curtains,           ";
  xx[ii++] =
    "96      the floor with a thick pile carpet.  Moss covers the ceiling.                   ";
  xx[ii++] =
    "97      This is the oriental room.  Ancient oriental cave drawings cover the            ";
  xx[ii++] =
    "97      walls.  A gently sloping passage leads upward to the north, another             ";
  xx[ii++] =
    "97      passage leads SE, and a hands and knees crawl leads west.                       ";
  xx[ii++] =
    "98      You are following a wide path around the outer edge of a large cavern.          ";
  xx[ii++] =
    "98      Far below, through a heavy white mist, strange splashing noises can be          ";
  xx[ii++] =
    "98      heard.  The mist rises up through a fissure in the ceiling.  The path           ";
  xx[ii++] =
    "98      exits to the south and west.                                                    ";
  xx[ii++] =
    "99      You are in an alcove.  A small NW path seems to widen after a short             ";
  xx[ii++] =
    "99      distance.  An extremely tight tunnel leads east.  It looks like a very          ";
  xx[ii++] =
    "99      tight squeeze.  An eerie light can be seen at the other end.                    ";
  xx[ii++] =
    "100     You're in a small chamber lit by an eerie green light.  An extremely            ";
  xx[ii++] =
    "100     narrow tunnel exits to the west.  A dark corridor leads NE.                     ";
  xx[ii++] =
    "61      당신은 아주 긴, 특징 없는 홀의 서쪽 끝에 있습니다.  이 홀은                ";
  xx[ii++] =
    "61      좁은 남/북 통로와 연결되어 있습니다.                                     ";
  xx[ii++] =
    "62      당신은 높은 남/북 통로와 낮은 동/서 통로가 교차하는 지점에 있습니다.             ";
  xx[ii++] =
    "63      빈 선반으로 가득한 먼지 낀 저장실에 있습니다.                           ";
  xx[ii++] =
    "64      복잡한 교차로에 있습니다. 북쪽에서는 낮은 엉덩이와 무릎을 사용하는 통로가          ";
  xx[ii++] =
    "64      연결되어 동쪽에서 올라가는 좁은 통로를 만들어서 서쪽으로 이어집니다.              ";
  xx[ii++] =
    "64      위에는 큰 방도 있습니다. 공기가 습기를 띠고 있습니다.                      ";
  xx[ii++] =
    "65      당신은 베드퀼트에 있습니다. 구멍이 어디에나 있는 긴 동/서 통로입니다.       ";
  xx[ii++] =
    "65      무작위로 탐험하려면 북, 남, 위, 아래 중 하나를 선택하십시오.               ";
  xx[ii++] =
    "66      당신은 스위스 치즈와 같은 벽돌 방에 있습니다. 북, 동, 북동, 북서로           ";
  xx[ii++] =
    "66      명백한 통로가 이어져 있습니다. 방의 일부는 큰 바위 블록으로 차지되어 있습니다.   ";
  xx[ii++] =
    "67      당신은 이중 구덩이 방의 동쪽 끝에 있습니다. 바닥은                        ";
  xx[ii++] =
    "67      얇은 바위 판자로 얼룩져 있어 구덩이로 내려가기 쉽습니다.                    ";
  xx[ii++] =
    "67      이곳에서는 구덩이를 피해서 동/서쪽의 통로를 연결하는 길이 있습니다.           ";
  xx[ii++] =
    "67      구멍은 여기에 있으며, 당신이 접근할 수 없는 서쪽 구덩이 바로 위 벽에 있습니다.     ";
  xx[ii++] =
    "67      좁은 길이 북쪽으로 이어집니다.                                           ";
  xx[ii++] =
    "68      당신은 거대한 원형 방 안에 있습니다. 바닥은 천장에서 떨어진 거대한          ";
  xx[ii++] =
    "68      돌 덩어리로 이루어져 있습니다. 동/서쪽에는 큰 통로가 있었지만 지금은        ";
  xx[ii++] =
    "68      큰 바위로 메워져 있습니다. 남쪽과 북쪽으로는 낮은 작은 통로가 이어지며,        ";
  xx[ii++] =
    "68      남쪽 통로는 빠르게 서쪽으로 돌아갑니다.                                      ";
  xx[ii++] =
    "69      당신은 큰 방 위에 있는 비밀 남/북 협곡에 있습니다.                          ";
  xx[ii++] =
    "70      당신은 상당한 통로 위에 있는 비밀 남/북 협곡에 있습니다.                    ";
  xx[ii++] =
    "71      당신은 세 개의 협곡이 교차하는 비밀 협곡에 있으며, 북, 남, 남동쪽으로       ";
  xx[ii++] =
    "71      이어집니다. 북쪽 협곡은 다른 두 협곡과 같은 높이입니다.                      ";
  xx[ii++] =
    "72      당신은 큰 낮은 방에 있습니다. 북쪽, 남동, 남서로 기어가는 통로가 있습니다.       ";
  xx[ii++] =
    "73      막다른 기어로 진행할 수 없습니다.                                       ";
  xx[ii++] =
    "74      여기서 동/서로 달리는 비밀 협곡에 있습니다. 이곳은 아래에 매우 좁은          ";
  xx[ii++] =
    "74      협곡이 가로지르고 있습니다. 아래로 내려가면 다시 올라올 수 없을 수도 있습니다. ";
  xx[ii++] =
    "75      아주 좁은 남/북 협곡의 넓은 곳에 있습니다.                                   ";
  xx[ii++] =
    "76      북쪽으로 나가는 작은 폭의 방에 있습니다.                                   ";
  xx[ii++] =
    "76      남쪽 벽의 낮은 동굴에서는 돌로 둘러싸인 작은 돌아간 중에 갇힌 드워프의            ";
  xx[ii++] =
    "76      얼어 붙은 돌 형태가 부분적으로 드러나 있습니다.                              ";
  xx[ii++] =
    "76      알코브 위에 황동 표판이 매달려 있습니다.                                  ";
  xx[ii++] =
    "77      당신은 긴 동/서 협곡에 있습니다. 남쪽으로 3피트의 좁은 기어가 북쪽으로        ";
  xx[ii++] =
    "77      펼쳐져 있는 것 같습니다.                                                  ";
  xx[ii++] =
    "78      협곡은 바위 더미에 닿습니다. 막다른 곳입니다.                               ";
  xx[ii++] =
    "79      시냇물이 직경 1피트의 배수 파이프를 통해 흘러나옵니다. 나가는 것이 좋습니다. ";
  xx[ii++] = "79      ";
  xx[ii++] =
    "80      얽힌 작은 통로의 미로에 있습니다. 모든 통로가 닮았습니다.                    ";
  xx[ii++] =
    "81      막다른 곳입니다.                                                          ";
  xx[ii++] =
    "82      막다른 곳입니다.                                                          ";
  xx[ii++] =
    "83      얽힌 작은 통로의 미로에 있습니다. 모든 통로가 닮았습니다.                    ";
  xx[ii++] =
    "84      얽힌 작은 통로의 미로에 있습니다. 모든 통로가 닮았습니다.                    ";
  xx[ii++] =
    "85      막다른 곳입니다.                                                          ";
  xx[ii++] =
    "86      막다른 곳입니다.                                                          ";
  xx[ii++] =
    "87      얽힌 작은 통로의 미로에 있습니다. 모든 통로가 닮았습니다.                    ";
  xx[ii++] =
    "88      서쪽으로 끝없이 이어지는 좁고 긴 복도에 있습니다. 동쪽 끝에는                  ";
  xx[ii++] =
    "88      덮개가 풀려있어 수많은 나뭇잎이 보입니다.                                    ";
  xx[ii++] =
    '89      여기에 오를 곳이 없습니다. "위로" 또는 "밖으로"를 사용하여 구덩이에서 나갑니다. ';
  xx[ii++] =
    "90      당신은 식물을 오르고 구덩이에서 나왔습니다.                                 ";
  xx[ii++] =
    "91      큰 방 위의 가파른 경사로 위에 있습니다. 이곳으로 내려갈 수는 있지만          ";
  xx[ii++] =
    "91      다시 올라갈 수는 없습니다. 북쪽으로 이어지는 통로가 있습니다.                 ";
  xx[ii++] =
    "92      당신은 거대한 방에 있습니다. 여기 천장은 등등한 높이로 당신의                ";
  xx[ii++] =
    "92      램프로는 비추기 어렵습니다. 굴착 통로가 동쪽, 북쪽, 남쪽으로 이어집니다.     ";
  xx[ii++] =
    '92      서쪽 벽에는 "Fee fie foe foo"라는 문구가 쓰여져 있습니다.                  ';
  xx[ii++] =
    "93      좁은 개구리로부터 남쪽으로 통로가 이어지는 넓은 언덕 위에 있습니다.            ";
  xx[ii++] =
    "94      거대한 남/북 통로의 한쪽 끝에 있습니다.                                     ";
  xx[ii++] =
    "95      황량한 동굴에는 분출하는 시냇물이 흐르며, 그 시냇물은 반짝이는 폭포로 흘러들어 ";
  xx[ii++] =
    "95      바닥의 로어링 워터풀로 사라집니다. 남쪽과 서쪽으로 통로가 이어집니다.         ";
  xx[ii++] =
    "96      당신은 부드러운 방에 있습니다. 벽은 두꺼운 커튼으로 덮여 있고,                 ";
  xx[ii++] =
    "96      바닥은 두꺼운 양탄자로 되어 있습니다. 천장은 이끼로 덮여 있습니다.          ";
  xx[ii++] =
    "97      이곳은 동양식 방입니다. 벽에는 고대 동양의 동굴 그림이 그려져 있습니다.        ";
  xx[ii++] =
    "97      북쪽으로 올라가는 약한 경사로, 남동쪽으로 이어지는 다른 통로,                ";
  xx[ii++] =
    "97      서쪽으로 가는 엉덩이와 무릎을 사용하는 기어로 이어집니다.                    ";
  xx[ii++] =
    "98      당신은 큰 동굴의 외곽을 따라 넓은 길을 따라가고 있습니다.                    ";
  xx[ii++] =
    "98      아래로는 짙은 하얀 안개 속을 통해 이상한 물소리가 들립니다.                  ";
  xx[ii++] =
    "98      안개가 천장의 틈으로 올라오고 있습니다. 이 길은 남쪽과 서쪽으로 이어집니다.   ";
  xx[ii++] =
    "99      동쪽으로 향하는 매우 좁은 터널이 있는 곳으로 넓어지는 것 같은 작은           ";
  xx[ii++] =
    "99      북서쪽 통로가 있는 계곡에 있습니다. 터널은 매우 좁아 보입니다.                 ";
  xx[ii++] =
    "99      다른 쪽 끝에서는 기괴한 빛이 보입니다.                                      ";
  xx[ii++] =
    "100     당신은 음산한 초록빛으로 밝힌 작은 방에 있습니다. 매우 좁은 터널이 서쪽으로    ";
  xx[ii++] =
    "100     이어집니다. 어두운 복도가 북동쪽으로 이어집니다.                             ";
  xx[ii++] =
    "101     You're in the dark-room.  A corridor leading south is the only exit.            ";
  xx[ii++] =
    "102     You are in an arched hall.  A narrow passage continues up and east from here.   ";
  xx[ii++] =
    "103     You're in a large room carved out of sedimentary rock.  The floor and           ";
  xx[ii++] =
    "103     walls are littered with bits of shells imbedded in the stone.  A                ";
  xx[ii++] =
    "103     shallow passage proceeds downward, and a somewhat steeper one leads             ";
  xx[ii++] =
    "103     up.  A low hands and knees passage enters from the south.                       ";
  xx[ii++] =
    "104     You are in a long sloping corridor with ragged sharp walls.                     ";
  xx[ii++] =
    "105     You are in a cul-de-sac about eight feet across.                                ";
  xx[ii++] =
    "106     You are in an anteroom leading to a large passage to the east.  Small           ";
  xx[ii++] =
    "106     passages go west and up.  The remnants of recent digging are evident.           ";
  xx[ii++] =
    "107     You are in a maze of twisty little passages, all different.                     ";
  xx[ii++] =
    "108     You are at Witt's end.  Passages lead off in *all* directions.                  ";
  xx[ii++] =
    "109     You are in a north/south canyon about 25 feet across.  The floor is             ";
  xx[ii++] =
    "109     covered by white mist seeping in from the north.  The walls extend              ";
  xx[ii++] =
    "109     upward for well over 100 feet.  Suspended from some unseen point far            ";
  xx[ii++] =
    "109     above you, an enormous two-sided mirror is hanging parallel to and              ";
  xx[ii++] =
    "109     midway between the canyon walls.  (The mirror is obviously provided             ";
  xx[ii++] =
    "109     for the use of the dwarves, who as you know, are extremely vain.)  a            ";
  xx[ii++] =
    "109     small window can be seen in either wall, some fifty feet up.                    ";
  xx[ii++] =
    "110     You're at a low window overlooking a huge pit, which extends up out of          ";
  xx[ii++] =
    "110     sight.  A floor is indistinctly visible over 50 feet below.  Traces of          ";
  xx[ii++] =
    "110     white mist cover the floor of the pit, becoming thicker to the left.            ";
  xx[ii++] =
    "110     Marks in the dust around the window would seem to indicate that                 ";
  xx[ii++] =
    "110     someone has been here recently.  Directly across the pit from you and           ";
  xx[ii++] =
    "110     25 feet away there is a similar window looking into a lighted room.  A          ";
  xx[ii++] =
    "110     shadowy figure can be seen there peering back at you.                           ";
  xx[ii++] =
    "111     A large stalactite extends from the roof and almost reaches the floor           ";
  xx[ii++] =
    "111     below.  You could climb down it, and jump from it to the floor, but             ";
  xx[ii++] =
    "111     having done so you would be unable to reach it to climb back up.                ";
  xx[ii++] =
    "112     You are in a little maze of twisting passages, all different.                   ";
  xx[ii++] =
    "113     You are at the edge of a large underground reservoir.  An opaque cloud          ";
  xx[ii++] =
    "113     of white mist fills the room and rises rapidly upward.  The lake is             ";
  xx[ii++] =
    "113     fed by a stream, which tumbles out of a hole in the wall about 10 feet          ";
  xx[ii++] =
    "113     overhead and splashes noisily into the water somewhere within the               ";
  xx[ii++] =
    "113     mist.  A passage leads south and a narrow path climbs eastward.                 ";
  xx[ii++] =
    "114     Dead end                                                                        ";
  xx[ii++] =
    "115     You are at the northeast end of an immense room, even larger than the           ";
  xx[ii++] =
    '115     giant room.  It appears to be a repository for the "Adventure"                  ';
  xx[ii++] =
    "115     program.  Massive torches far overhead bathe the room with smoky                ";
  xx[ii++] =
    "115     yellow light.  Scattered about you can be seen a pile of bottles (all           ";
  xx[ii++] =
    "115     of them empty), a nursery of young beanstalks murmuring quietly, a bed          ";
  xx[ii++] =
    "115     of oysters, a bundle of black rods with rusty stars on their ends, and          ";
  xx[ii++] =
    "115     a collection of brass lanterns.  Off to one side a great many dwarves           ";
  xx[ii++] =
    '115     are sleeping on the floor, snoring loudly.  A sign nearby reads: "Do            ';
  xx[ii++] =
    '115     not disturb the dwarves!" An immense mirror is hanging against one              ';
  xx[ii++] =
    "115     wall, and stretches to the other end of the room, where various other           ";
  xx[ii++] =
    "115     sundry objects can be glimpsed dimly in the distance.                           ";
  xx[ii++] =
    "116     You are at the southwest end of the repository.  To one side is a pit           ";
  xx[ii++] =
    "116     full of fierce green snakes.  On the other side is a row of small               ";
  xx[ii++] =
    "116     wicker cages, each of which contains a little sulking bird.  In one             ";
  xx[ii++] =
    "116     corner is a bundle of black rods with rusty marks on their ends.  A             ";
  xx[ii++] =
    "116     large number of velvet pillows are scattered about on the floor.  A             ";
  xx[ii++] =
    "116     vast mirror stretches off to the northeast.  At your feet is a large            ";
  xx[ii++] =
    '116     steel grate, next to which is a sign which reads, "Treasure vault.              ';
  xx[ii++] =
    '116     Keys in main office."                                                           ';
  xx[ii++] =
    "117     You are on one side of a large, deep chasm.  A heavy white mist rising          ";
  xx[ii++] =
    "117     up from below obscures all view of the far side.  A SW path leads away          ";
  xx[ii++] =
    "117     from the chasm into a winding corridor.                                         ";
  xx[ii++] =
    "118     You are in a long winding corridor sloping out of sight in both                 ";
  xx[ii++] =
    "118     directions.                                                                     ";
  xx[ii++] =
    "119     You are in a secret canyon which exits to the north and east.                   ";
  xx[ii++] =
    "120     You are in a secret canyon which exits to the north and east.                   ";
  xx[ii++] =
    "121     You are in a secret canyon which exits to the north and east.                   ";
  xx[ii++] =
    "122     You are on the far side of the chasm.  A NE path leads away from the            ";
  xx[ii++] =
    "122     chasm on this side.                                                             ";
  xx[ii++] =
    "123     You're in a long east/west corridor.  A faint rumbling noise can be             ";
  xx[ii++] =
    "123     heard in the distance.                                                          ";
  xx[ii++] =
    "124     The path forks here.  The left fork leads northeast.  A dull rumbling           ";
  xx[ii++] =
    "124     seems to get louder in that direction.  The right fork leads southeast          ";
  xx[ii++] =
    "124     down a gentle slope.  The main corridor enters from the west.                   ";
  xx[ii++] =
    "125     The walls are quite warm here.  From the north can be heard a steady            ";
  xx[ii++] =
    "125     roar, so loud that the entire cave seems to be trembling.  Another              ";
  xx[ii++] =
    "125     passage leads south, and a low crawl goes east.                                 ";
  xx[ii++] =
    "126     You are on the edge of a breath-taking view.  Far below you is an               ";
  xx[ii++] =
    "126     active volcano, from which great gouts of molten lava come surging              ";
  xx[ii++] =
    "126     out, cascading back down into the depths.  The glowing rock fills the           ";
  xx[ii++] =
    "126     farthest reaches of the cavern with a blood-red glare, giving every-            ";
  xx[ii++] =
    "126     thing an eerie, macabre appearance.  The air is filled with flickering          ";
  xx[ii++] =
    "126     sparks of ash and a heavy smell of brimstone.  The walls are hot to             ";
  xx[ii++] =
    "126     the touch, and the thundering of the volcano drowns out all other               ";
  xx[ii++] =
    "126     sounds.  Embedded in the jagged roof far overhead are myriad twisted            ";
  xx[ii++] =
    "126     formations composed of pure white alabaster, which scatter the murky            ";
  xx[ii++] =
    "126     light into sinister apparitions upon the walls.  To one side is a deep          ";
  xx[ii++] =
    "126     gorge, filled with a bizarre chaos of tortured rock which seems to              ";
  xx[ii++] =
    "126     have been crafted by the devil himself.  An immense river of fire               ";
  xx[ii++] =
    "126     crashes out from the depths of the volcano, burns its way through the           ";
  xx[ii++] =
    "126     gorge, and plummets into a bottomless pit far off to your left.  To             ";
  xx[ii++] =
    "126     the right, an immense geyser of blistering steam erupts continuously            ";
  xx[ii++] =
    "126     from a barren island in the center of a sulfurous lake, which bubbles           ";
  xx[ii++] =
    "126     ominously.  The far right wall is aflame with an incandescence of its           ";
  xx[ii++] =
    "126     own, which lends an additional infernal splendor to the already                 ";
  xx[ii++] =
    "126     hellish scene.  A dark, foreboding passage exits to the south.                  ";
  xx[ii++] =
    "127     You are in a small chamber filled with large boulders.  The walls are           ";
  xx[ii++] =
    "127     very warm, causing the air in the room to be almost stifling from the           ";
  xx[ii++] =
    "127     heat.  The only exit is a crawl heading west, through which is coming           ";
  xx[ii++] =
    "127     a low rumbling.                                                                 ";
  xx[ii++] =
    "128     You are walking along a gently sloping north/south passage lined with           ";
  xx[ii++] =
    "128     oddly shaped limestone formations.                                              ";
  xx[ii++] =
    "129     You are standing at the entrance to a large, barren room.  A sign               ";
  xx[ii++] =
    '129     posted above the entrance reads:  "Caution! Bear in room!"                      ';
  xx[ii++] =
    "130     You are inside a barren room.  The center of the room is completely             ";
  xx[ii++] =
    "130     empty except for some dust.  Marks in the dust lead away toward the             ";
  xx[ii++] =
    "130     far end of the room.  The only exit is the way you came in.                     ";
  xx[ii++] =
    "101     당신은 어두운 방에 있습니다. 남쪽으로 통로가 나가는 유일한 출구입니다.              ";
  xx[ii++] =
    "102     당신은 아치 형태의 홀에 있습니다. 여기서 북쪽으로 좁은 통로가 이어집니다.          ";
  xx[ii++] =
    "103     당신은 침전암으로 조각된 큰 방에 있습니다. 바닥과 벽에는 돌에 박힌 조각들이          ";
  xx[ii++] =
    "103     흩어져 있습니다. 얕은 통로가 아래로 이어지고, 다소 가파른 통로가 위로 이어집니다.   ";
  xx[ii++] =
    "103     남쪽에서는 낮은 기어로 이어지는 통로가 있습니다.                                    ";
  xx[ii++] =
    "104     당신은 울퉁불퉁하고 예리한 벽이 있는 긴 경사로 있는 복도에 있습니다.                  ";
  xx[ii++] =
    "105     당신은 지름 약 8피트의 막다른 곳에 있습니다.                                      ";
  xx[ii++] =
    "106     당신은 동쪽으로 이어지는 큰 통로로 통하는 대기실에 있습니다. 작은 통로가            ";
  xx[ii++] =
    "106     서쪽과 위로 이어지고 있습니다. 최근 발굴의 흔적이 보입니다.                           ";
  xx[ii++] =
    "107     얽힌 작은 통로의 미로에 있습니다. 모두 다릅니다.                                   ";
  xx[ii++] =
    "108     이곳은 '위트의 끝'에 있습니다. 통로가 *모든* 방향으로 뻗어 있습니다.                  ";
  xx[ii++] =
    "109     당신은 약 25피트 폭의 북/남쪽 협곡에 있습니다. 바닥은 북쪽에서 스며들어 오는         ";
  xx[ii++] =
    "109     흰 안개로 뒤덮여 있습니다. 벽은 100피트 이상 높이로 솟아오릅니다.                   ";
  xx[ii++] =
    "109     알아볼 수 없는 어딘가 높은 곳에서 걸려 있는 거대한 양면 거울이 협곡의 벽과          ";
  xx[ii++] =
    "109     중앙에 평행하게 매달려 있습니다. (거울은 알다시피 극도로 자신에게 매우                  ";
  xx[ii++] =
    "109     자만심이 있는 도애처럼 사용하기 위해 제공되었습니다.) 각 벽에는 작은 창이            ";
  xx[ii++] =
    "109     50피트 높이에 볼 수 있습니다.                                                    ";
  xx[ii++] =
    "110     당신은 아래에서 올라오는 거대한 구덩이를 내려다보는 낮은 창가에 있습니다.           ";
  xx[ii++] =
    "110     바닥은 약 50피트 아래에 희미하게 보입니다. 흰 안개의 흔적이 바닥에 덮여 있으며,         ";
  xx[ii++] =
    "110     왼쪽으로 갈수록 짙어집니다. 창가 주변의 먼지에 남겨진 자국은 최근에                ";
  xx[ii++] =
    "110     누군가가 이곳에 있었음을 암시합니다. 당신과 25피트 떨어진 곳에는 비슷한              ";
  xx[ii++] =
    "110     창이 있으며, 그 안에서 불이 들어오는 방을 바라보고 있는 어둡고 모습이               ";
  xx[ii++] =
    "110     드리운 인물이 보입니다.                                                          ";
  xx[ii++] =
    "111     큰 석순이 천장에서 시작하여 거의 바닥까지 내려옵니다. 이를 따라                   ";
  xx[ii++] =
    "111     내려갈 수 있고, 그대로 땅으로 점프할 수 있지만, 다시 올라갈 수는 없습니다.          ";
  xx[ii++] =
    "112     당신은 뒤얽힌 작은 통로의 미로에 있습니다. 모두 다릅니다.                          ";
  xx[ii++] =
    "113     당신은 큰 지하 저수지의 가장자리에 있습니다. 흰 안개의 불투명한 구름이              ";
  xx[ii++] =
    "113     방을 채우며 급속히 올라옵니다. 호수는 벽에 10피트 정도 높이에 있는                  ";
  xx[ii++] =
    "113     구멍에서 흘러나와 어딘가에서 물에 찍혀 소리를 내며 떨어지고 있습니다.                ";
  xx[ii++] =
    "113     통로는 남쪽으로 이어지고 좁은 길이 동쪽으로 올라갑니다.                             ";
  xx[ii++] =
    "114     막다른 곳에 있습니다.                                                               ";
  xx[ii++] =
    "115     당신은 거대한 방의 북동쪽 끝에 서 있습니다. 이 방은 심지어                      ";
  xx[ii++] =
    "115     거대한 방보다도 더 큰 것 같습니다. '어드벤처' 프로그램을 위한                        ";
  xx[ii++] =
    "115     저장고인 것 같습니다. 아주 높은 곳에 걸린 거대한 횃불이 방을 연기 나는             ";
  xx[ii++] =
    "115     노란빛으로 비추고 있습니다. 주변에는 빈 병들의 더미(모두 비어 있음),                    ";
  xx[ii++] =
    "115     속삭이는 어린 콩잠자리들의 보호소, 굴레에 매인 암맥 한 줌, 그리고                   ";
  xx[ii++] =
    "115     황금 랜턴들의 모음이 흩어져 있습니다. 한 쪽에는 많은 드워프들이                    ";
  xx[ii++] =
    "115     바닥에 자고 있으며, 크게 코를 골고루 쉬고 있습니다. 근처에 있는                      ";
  xx[ii++] =
    "115     표지판에는 '드워프들을 깨우지 말아주세요!'라고 쓰여 있습니다.                          ";
  xx[ii++] =
    "115     방의 한 벽에는 거대한 거울이 걸려 있으며, 그 길이는 방의 끝까지 이어져 있으며,         ";
  xx[ii++] =
    "115     거울을 통해 희미하게 멀리서 다른 여러 가지 물건들을 엿볼 수 있습니다.               ";
  xx[ii++] =
    "116     당신은 저장소의 남서쪽 끝에 서 있습니다. 한쪽에는 맹독을 품은 녹색 뱀들로            ";
  xx[ii++] =
    "116     가득한 구덩이가 있습니다. 다른 쪽에는 작은 꺾이는 새장들이 일렬로 있고,              ";
  xx[ii++] =
    "116     각각에는 홱한 새 한 마리씩이 들어 있습니다. 한 쪽 구석에는 녹슨                          ";
  xx[ii++] =
    "116     점이 있는 검은 막대 다발이 있습니다. 바닥에는 많은 벨벳 베개들이                   ";
  xx[ii++] =
    "116     흩어져 있습니다. 북동쪽으로 거대한 거울이 뻗어 있으며, 어두운                      ";
  xx[ii++] =
    "116     곳에 있는 근접한 감옥입니다. 그 옆에는 '보물 금고. 메인 오피스에                 ";
  xx[ii++] =
    "116     열쇠 있음.'이라고 쓰여진 표지판이 있습니다.                                         ";
  xx[ii++] =
    "117     당신은 큰, 깊은 협곡의 한쪽에 있습니다. 밑으로부터 올라오는 흰 안개가                ";
  xx[ii++] =
    "117     멀리 있는 반대편을 모두 가리고 있습니다. 남서쪽으로 향하는 길이 협곡에서             ";
  xx[ii++] =
    "117     떨어져 나가는 약간 굽은 복도로 이어집니다.                                           ";
  xx[ii++] =
    "118     당신은 양쪽으로 멀리까지 이어지는 긴 구불구불한 복도에 있습니다.                        ";
  xx[ii++] =
    "119     당신은 북쪽과 동쪽으로 이어지는 비밀 협곡에 있습니다.                                  ";
  xx[ii++] =
    "120     당신은 북쪽과 동쪽으로 이어지는 비밀 협곡에 있습니다.                                  ";
  xx[ii++] =
    "121     당신은 북쪽과 동쪽으로 이어지는 비밀 협곡에 있습니다.                                  ";
  xx[ii++] =
    "122     당신은 협곡의 반대편에 있습니다. 북동쪽으로 이어지는 길이 이쪽에서                   ";
  xx[ii++] =
    "122     떨어져 나가고 있습니다.                                                             ";
  xx[ii++] =
    "123     당신은 먼 도피가 보이는 긴 동/서 복도에 있습니다. 먼 거리에서는                     ";
  xx[ii++] =
    "123     연속된 울림 소리가 들립니다.                                                        ";
  xx[ii++] =
    "124     이곳에서 길이 갈라집니다. 왼쪽 길은 북동쪽으로 이어집니다. 둔한                     ";
  xx[ii++] =
    "124     울림 소리는 그 방향에서 점점 커지는 것 같습니다. 오른쪽 길은 남동쪽으로              ";
  xx[ii++] =
    "124     가는 완만한 경사로 이어집니다. 주요 복도는 서쪽에서 들어옵니다.                        ";
  xx[ii++] =
    "125     벽은 여기서 꽤 따뜻합니다. 북쪽에서는 꾸준한 울림 소리가 들립니다. 다른             ";
  xx[ii++] =
    "125     통로는 남쪽으로 이어지며, 낮은 기어로 동쪽으로 이어집니다.                             ";
  xx[ii++] =
    "126     당신은 숨을 멎을만한 경치의 가장자리에 서 있습니다. 아래로는 활동적인                ";
  xx[ii++] =
    "126     화산이 펼쳐져 있으며, 거대한 용암이 뿜어져 나와 깊은 심연으로                     ";
  xx[ii++] =
    "126     흘러들어갑니다. 붉게 빛나는 암석이 동굴의 먼지 속에서 먼 곳까지                   ";
  xx[ii++] =
    "126     채워져 있어 음산한, 맥락 없는 모습을 연출합니다. 공기는 잔뜩 떠도는               ";
  xx[ii++] =
    "126     잿빛 재의 희미한 불꽃과 유황 냄새로 가득 차 있습니다. 벽은 따뜻하게                ";
  xx[ii++] =
    "126     느껴지며, 화산의 우레소리가 다른 모든 소리를 덮어버립니다. 천장에는 숭고한          ";
  xx[ii++] =
    "126     백색 알라바스터로 만들어진 다양한 비틀린 형태들이 박혀 있으며,                      ";
  xx[ii++] =
    "126     어두운 빛에 흐릿하게 벽에 걸친 사악한 모습을 드러냅니다. 한 쪽에는 깊은           ";
  xx[ii++] =
    "126     협곡이 있으며, 악마 그 자체로 제작된 괴상한 형태의 고통받는                      ";
  xx[ii++] =
    "126     바위가 있습니다. 화산 심연에서 출발한 엄청난 불강이 협곡을 통과하고 왼쪽           ";
  xx[ii++] =
    "126     끝으로 떨어져들어가는 곳까지 흐르고 있습니다. 오른쪽에는 유황수를                  ";
  xx[ii++] =
    "126     가운데서 끊임없이 분출하는 거대한 증기 분출구가 있습니다. 이슬엔                  ";
  xx[ii++] =
    "126     음침한 수면이 있는 호수 가운데 있는 황홀한 섬에서 불어오는                          ";
  xx[ii++] =
    "126     뜨거운 증기로 가득 차 있으며, 끊임없이 흘러나오고 있습니다.                           ";
  xx[ii++] =
    "126     오른쪽 벽은 자체적인 불꽃에 불타고 있어 이미지에 추가로 지옥같은                       ";
  xx[ii++] =
    "126     화면을 제공합니다. 어둡고 불길한 통로가 남쪽으로 이어져 있습니다.                      ";
  xx[ii++] =
    "127     당신은 큰 바위로 가득한 작은 방에 있습니다. 벽은 매우 따뜻하여 방 안은             ";
  xx[ii++] =
    "127     열기 때문에 거의 기운이 빠지는 것 같습니다. 유일한 출구는 서쪽으로 가는             ";
  xx[ii++] =
    "127     기어오르는 통로이며, 그 방향에서는 낮은 울림이 들려옵니다.                           ";
  xx[ii++] =
    "128     당신은 이상하게 형성된 석회암 형태로 둘러싸인 약간 경사진 북/남쪽 통로를           ";
  xx[ii++] =
    "128     따라 걷고 있습니다.                                                               ";
  xx[ii++] =
    "129     당신은 크고 황량한 방의 입구에 서 있습니다. 입구 위에는                         ";
  xx[ii++] =
    "129     '주의! 방 안에 곰 있음!'이라는 표지가 있습니다.                                    ";
  xx[ii++] =
    "130     당신은 황량한 방 안에 있습니다. 방의 중앙은 먼지 뿐인 완전히                      ";
  xx[ii++] =
    "130     비어 있는 상태입니다. 먼지에 남아있는 흔적이 방의 끝쪽으로 향하고 있습니다.         ";
  xx[ii++] =
    "130     유일한 출구는 들어온 방향입니다.                                                     ";
  xx[ii++] =
    "131     You are in a maze of twisting little passages, all different.                   ";
  xx[ii++] =
    "132     You are in a little maze of twisty passages, all different.                     ";
  xx[ii++] =
    "133     You are in a twisting maze of little passages, all different.                   ";
  xx[ii++] =
    "134     You are in a twisting little maze of passages, all different.                   ";
  xx[ii++] =
    "135     You are in a twisty little maze of passages, all different.                     ";
  xx[ii++] =
    "136     You are in a twisty maze of little passages, all different.                     ";
  xx[ii++] =
    "137     You are in a little twisty maze of passages, all different.                     ";
  xx[ii++] =
    "138     You are in a maze of little twisting passages, all different.                   ";
  xx[ii++] =
    "139     You are in a maze of little twisty passages, all different.                     ";
  xx[ii++] =
    "140     Dead end                                                                        ";
  xx[ii++] =
    "141     You are in a small well room. A well opening is set in the floor.               ";
  xx[ii++] =
    "142     You are at the bottom of an empty well.                                         ";
  xx[ii++] =
    "143     You are on a small beach at the north end of a large reservoir. There is a      ";
  xx[ii++] =
    "143     passage to the north and a narrow path leading down. To the south the low       ";
  xx[ii++] =
    "143     water level makes the reservoir passable.                                       ";
  xx[ii++] =
    "144     You are in a room with rubble covering the floor. A clear path travels east/west.";
  xx[ii++] =
    "145     You are in an awkward sloping traverse. Exits are to the east and west.         ";
  xx[ii++] =
    "146     You are in a low crawl with an exit west and a narrow passage leading down.     ";
  xx[ii++] =
    "147     You are in a wide room with a low domed ceiling and an exit heading up.         ";
  xx[ii++] =
    "148     You are at the north end of a low chamber full of razor-sharp crystalline shards";
  xx[ii++] =
    "148     projecting from all surfaces. Moving further into the room would be very unwise.";
  xx[ii++] =
    "149     You are at the west end of a wide road made up of thousands of interlocking     ";
  xx[ii++] =
    "149     basalt columns thrust up from a deep volcanic fissure. The tops of the columns  ";
  xx[ii++] =
    "149     form stepping stones that stretch from west to east. An exit leads south.       ";
  xx[ii++] =
    "150     You are at the end of a wide road leading west. To the east is a wide open area.";
  xx[ii++] =
    "150     An exit also leads south.                                                       ";
  xx[ii++] =
    "151     You are at an elbow junction with exits northwest and northeast.                ";
  xx[ii++] =
    "152     You are in a wide natural rock amphitheater with an exit west.                  ";
  xx[ii++] =
    "153     You are in a shallow pit with upper exits in the east and west sides.           ";
  xx[ii++] =
    "154     You are in a low room cut in half by a wide rift in the rock floor. An exit leads east. ";
  xx[ii++] =
    "155     You are in a low room west of a wide rift. An exit leads south.                 ";
  xx[ii++] =
    "156     You are in a room lavishly decorated with Egyptian art. The east and south walls ";
  xx[ii++] =
    "156     depict a funeral scene of servants carrying a mummified body up a ramp toward   ";
  xx[ii++] =
    "156     a doorway set in an impressively large pyramid.                                 ";
  xx[ii++] =
    "156     The west wall is unadorned and slopes outward from the floor to the ceiling.    ";
  xx[ii++] =
    "157     You are in a dead end.                                                          ";
  xx[ii++] =
    '158     The words "Staff break room" are printed on the far wall above a large message ';
  xx[ii++] =
    "158     board holding a number of pinned messages. Two dwarves sit at one of many small ";
  xx[ii++] =
    "158     tables, deep in conversation. They pointedly ignore you.                        ";
  xx[ii++] =
    "159     You are in a small chamber with walls of smooth granite. A wide stairway leads  ";
  xx[ii++] =
    "159     upwards.                                                                        ";
  xx[ii++] =
    "160     You are in a large chamber. The walls are richly decorated with scenes of burial ";
  xx[ii++] =
    "160     rituals. A narrow staiway leads up and a wide stairway leads down.              ";
  xx[ii++] =
    "131     당신은 얽히고 설킨 작은 통로의 미로에 있습니다. 모든 통로가 서로 다릅니다.               ";
  xx[ii++] =
    "132     당신은 얽히고 설킨 작은 통로의 작은 미로에 있습니다. 모든 통로가 서로 다릅니다.         ";
  xx[ii++] =
    "133     당신은 얽히고 설킨 작은 통로의 미로에 있습니다. 모든 통로가 서로 다릅니다.               ";
  xx[ii++] =
    "134     당신은 얽히고 설킨 작은 통로의 미로에 있습니다. 모든 통로가 서로 다릅니다.               ";
  xx[ii++] =
    "135     당신은 얽히고 설킨 작은 통로의 미로에 있습니다. 모든 통로가 서로 다릅니다.               ";
  xx[ii++] =
    "136     당신은 얽히고 설킨 작은 통로의 미로에 있습니다. 모든 통로가 서로 다릅니다.               ";
  xx[ii++] =
    "137     당신은 얽히고 설킨 작은 통로의 작은 미로에 있습니다. 모든 통로가 서로 다릅니다.         ";
  xx[ii++] =
    "138     당신은 작고 얽히고 설킨 통로의 작은 미로에 있습니다. 모든 통로가 서로 다릅니다.         ";
  xx[ii++] =
    "139     당신은 작고 얽히고 설킨 통로의 작은 미로에 있습니다. 모든 통로가 서로 다릅니다.         ";
  xx[ii++] =
    "140     막다른 곳입니다.                                                                   ";
  xx[ii++] =
    "141     당신은 작은 우물 방에 있습니다. 바닥에 우물이 열려 있습니다.                             ";
  xx[ii++] =
    "142     당신은 빈 우물의 맨 아래에 있습니다.                                                 ";
  xx[ii++] =
    "143     당신은 큰 저수지의 북쪽 끝에 작은 해변에 서 있습니다. 북쪽으로 통로가 있으며,              ";
  xx[ii++] =
    "143     좁은 길이 아래로 이어집니다. 남쪽으로는 수위가 낮아 저수지를 건널 수 있습니다.           ";
  xx[ii++] =
    "144     당신은 돌멩이로 가득한 방 안에 있습니다. 분명한 길이 동/서쪽으로 이어집니다.              ";
  xx[ii++] =
    "145     당신은 어색하게 경사진 통로에 있습니다. 동쪽과 서쪽으로 나갈 수 있습니다.                  ";
  xx[ii++] =
    "146     당신은 서쪽으로 나가는 낮은 기어오르기 통로에 있으며, 좁은 통로가 아래로 이어집니다.           ";
  xx[ii++] =
    "147     당신은 낮은 천장이 있는 넓은 방에 있으며, 위로 올라가는 통로가 있습니다.                      ";
  xx[ii++] =
    "148     당신은 날카로운 결정조각으로 가득 찬 낮은 방의 북쪽 끝에 있습니다.                            ";
  xx[ii++] =
    "148     방 안으로 더 들어가는 것은 매우 무모한 행동일 것입니다.                                        ";
  xx[ii++] =
    "149     당신은 수천 개의 서로 맞물리는 화강암 기둥으로 이루어진 넓은 길의 서쪽 끝에 있습니다.        ";
  xx[ii++] =
    "149     기둥 위에는 서쪽에서 동쪽으로 이어지는 발판이 형성되어 있습니다. 남쪽으로 나가는 출구가 있습니다. ";
  xx[ii++] =
    "150     당신은 서쪽으로 향하는 넓은 길의 끝에 있습니다. 동쪽에는 넓은 오픈 에리어가 있습니다.           ";
  xx[ii++] =
    "150     나가는 출구로는 남쪽으로 이어집니다.                                                     ";
  xx[ii++] =
    "151     당신은 북서쪽과 북동쪽으로 나가는 커브된 각이 있는 지점에 있습니다.                              ";
  xx[ii++] =
    "152     당신은 동쪽으로 나가는 넓은 천연 암 극장에 있습니다.                                          ";
  xx[ii++] =
    "153     당신은 동쪽과 서쪽 측면에 상승구가 있는 얕은 구덩이에 있습니다.                                  ";
  xx[ii++] =
    "154     당신은 돌바닥의 넓은 균열로 절반으로 나뉜 낮은 방에 있습니다. 동쪽으로 나가는 출구가 있습니다. ";
  xx[ii++] =
    "155     당신은 넓은 균열 서쪽에 있는 낮은 방에 있습니다. 남쪽으로 나가는 출구가 있습니다.                  ";
  xx[ii++] =
    "156     당신은 이집트 예술로 화려하게 장식된 방에 있습니다. 동쪽과 남쪽 벽에는                        ";
  xx[ii++] =
    "156     종교 장면이 그려져 있습니다. 종교 의식을 하는 종업원들이 미라를 향해 담고 있는 사체를          ";
  xx[ii++] =
    "156     경사로를 따라 대형 피라미드로 올려가고 있는 모습입니다.                                        ";
  xx[ii++] =
    "156     서쪽 벽은 꾸밈이 없으며 바닥에서 천장으로 경사를 이루고 있습니다.                              ";
  xx[ii++] =
    "157     막다른 곳입니다.                                                                   ";
  xx[ii++] =
    '158     "직원 휴게실"이라는 글씨가 작성된 멀리 벽 위에는 많은 메시지가 달린 대형 메시지                ';
  xx[ii++] =
    "158     보드가 있습니다. 두 명의 드워프가 작은 탁자 중 하나에 앉아 대화를 나누고 있습니다.                  ";
  xx[ii++] =
    "158     그들은 당신을 무시하고 있습니다.                                                        ";
  xx[ii++] =
    "159     당신은 매끄러운 화강암으로 된 작은 방에 있습니다. 넓은 계단이 위로 올라갑니다.                       ";
  xx[ii++] =
    "160     당신은 장식이 가득한 큰 방에 있습니다. 벽에는 장례 의식이 그려져 있습니다.                          ";
  xx[ii++] =
    "160     좁은 계단이 위로 올라가고 넓은 계단이 아래로 내려갑니다.                                        ";
  xx[ii++] =
    "161     You are in a barren alcove with rough-hewn walls and ceiling. A narrow stairway ";
  xx[ii++] =
    "161     leads down.                                                                     ";
  xx[ii++] =
    "162     There is no way to go in that direction.                                        ";
  xx[ii++] =
    "163     You are in open forest, with a deep valley to one side.                         ";
  xx[ii++] =
    "164     You are in open forest near a road.                                             ";
  xx[ii++] =
    "165     You are in forest clearing. In the center stands a lone pine sapling.           ";
  xx[ii++] =
    "166     You are in open forest near a road.                                             ";
  xx[ii++] =
    "167     You are in a chamber consisting of a series of stone arches heading north.      ";
  xx[ii++] =
    "167     A descending passage disappears west.                                           ";
  xx[ii++] =
    "168     You are on a slender rock promontory overlooking a vast subterranean space.     ";
  xx[ii++] =
    "168     A sheer drop of many fathoms faces you to the north. An arch exits south.       ";
  xx[ii++] =
    "168     Far below are sandy floors under echoing domes; gems and crystals and           ";
  xx[ii++] =
    "168     veins of precious ore glint in the polished walls; and the light glows          ";
  xx[ii++] =
    "168     through folded marbles, shell-like, translucent as the living hands of          ";
  xx[ii++] =
    "168     Queen Galadriel. There are columns of white and saffron and dawn-rose,          ";
  xx[ii++] =
    "168     fluted and twisted into dreamlike forms; they spring from many-coloured         ";
  xx[ii++] =
    "168     floors to meet the glistening pendants of the roof: wings, ropes,               ";
  xx[ii++] =
    "168     curtains fine as frozen clouds; spears, banners, pinnacles of                   ";
  xx[ii++] =
    "168     suspended palaces! Still lakes mirror them: a glimmering world looks up         ";
  xx[ii++] =
    "168     from dark pools covered with clear glass; cities, such as the mind of           ";
  xx[ii++] =
    "168     Durin could scarce have imagined in his sleep, stretch on through               ";
  xx[ii++] =
    "168     avenues and pillared courts, on into the dark recesses where no light           ";
  xx[ii++] =
    "168     can come. And plink! a silver drop falls, and the round wrinkles in the         ";
  xx[ii++] =
    "168     glass make all the towers bend and waver like weeds and corals in a             ";
  xx[ii++] =
    "168     grotto of the sea.                                                              ";
  xx[ii++] =
    "168     The Road to Isengard, Book II, The Lord of the Rings by J. R. R. Tolkien.       ";
  xx[ii++] =
    "161     당신은 거칠게 깎아지른 벽과 천장을 가진 황량한 동굴에 있습니다. 좁은 계단이";
  xx[ii++] =
    "161     아래로 이어져 있습니다.                                                           ";
  xx[ii++] =
    "162     해당 방향으로 이동할 수 없습니다.                                                  ";
  xx[ii++] =
    "163     당신은 깊은 계곡이 있는 산림 속에 있습니다.                                            ";
  xx[ii++] =
    "164     당신은 도로 근처의 산림 속에 있습니다.                                                ";
  xx[ii++] =
    "165     당신은 숲의 공터에 있습니다. 중앙에는 고립된 소나무 새싹이 서 있습니다.                          ";
  xx[ii++] =
    "166     당신은 도로 근처의 산림 속에 있습니다.                                                ";
  xx[ii++] =
    "167     당신은 북쪽으로 이어지는 일련의 돌 아치로 이루어진 방에 있습니다.                             ";
  xx[ii++] =
    "167     내려가는 통로가 서쪽으로 사라집니다.                                                  ";
  xx[ii++] =
    "168     당신은 광활한 지하 공간을 내려다보는 가느다란 바위 투척물 위에 서 있습니다.                           ";
  xx[ii++] =
    "168     북쪽에는 많은 기암괴석이 수십 개미터 떨어진 곳에 있습니다. 남쪽으로는 아치가 있습니다.                    ";
  xx[ii++] =
    "168     아래에는 모래 바닥, 반향하는 천장 아래에는 보석과 수정, 귀금속 광맥이                      ";
  xx[ii++] =
    "168     반짝이며, 빛은 마블에 투영됩니다. 마치 살아 움직이는 갈라드리엘 여왕의                       ";
  xx[ii++] =
    "168     유리 같은 투명한 손과 같습니다. 하얀색, 황갈색, 새벽 붉은색의 기둥들이 있습니다.                    ";
  xx[ii++] =
    "168     그들은 꿈과 같은 형태로 갈라지고 비틀려 나옵니다. 많은 색깔의 바닥에서 생겨난                   ";
  xx[ii++] =
    "168     그들은 반짝이는 천장의 목걸이들과 만나게 됩니다. 날개, 줄,                         ";
  xx[ii++] =
    "168     구름과 같이 투명한 커튼, 창문, 기둥이                           ";
  xx[ii++] =
    "168     그들은 기둥들로부터 금색을 띠는 행렬, 펜던트로부터 투영되는 빛: 날개, 줄,                 ";
  xx[ii++] =
    "168     커튼, 얼음 결정과 같은 맑은 유리로 덮인 어두운 웅덩이로부터 아래를 바라봅니다. ";
  xx[ii++] =
    "168     도시는 마치 듀린의 마음속에서 조차도 상상하기 힘들 정도로 많습니다. 그것은                  ";
  xx[ii++] =
    "168     향로와 기둥된 궁전의 피나클과 함께 다양한 곳에 이어지며, 어두운 갈 수 없는                  ";
  xx[ii++] =
    "168     깊은 곳으로 이어져 있습니다. 그리고 뚝! 은빛 방울 하나가 떨어지고, 유리에 생긴                 ";
  xx[ii++] =
    "168     둥근 주름 때문에 모든 탑들이 끔직거리고 파도치는 듯이 움직이며                          ";
  xx[ii++] =
    "168     바닥에서 천장까지 길쭉한 동굴과 같은 거미줄처럼 흔들리게 됩니다.                            ";
  xx[ii++] =
    "168     The Road to Isengard, Book II, The Lord of the Rings by J. R. R. Tolkien.       ";
  xx[ii++] =
    "-1      End                                                                             ";

  // stext[] array
  xx[ii++] =
    "2                                                                                       ";
  xx[ii++] =
    "1       You're at end of road again.                                                    ";
  xx[ii++] =
    "2       You're at hill in road.                                                         ";
  xx[ii++] =
    "3       You're inside building.                                                         ";
  xx[ii++] =
    "4       You're in valley.                                                               ";
  xx[ii++] =
    "5       You're in forest.                                                               ";
  xx[ii++] =
    "6       You're in forest.                                                               ";
  xx[ii++] =
    "7       You're at slit in streambed.                                                    ";
  xx[ii++] =
    "8       You're outside grate.                                                           ";
  xx[ii++] =
    "9       You're below the grate.                                                         ";
  xx[ii++] =
    "10      You're in cobble crawl.                                                         ";
  xx[ii++] =
    "11      You're in debris room.                                                          ";
  xx[ii++] =
    "13      You're in bird chamber.                                                         ";
  xx[ii++] =
    "14      You're at top of small pit.                                                     ";
  xx[ii++] =
    "15      You're in hall of mists.                                                        ";
  xx[ii++] =
    "17      You're on east bank of fissure.                                                 ";
  xx[ii++] =
    "18      You're in nugget of gold room.                                                  ";
  xx[ii++] =
    "19      You're in hall of Mt King.                                                      ";
  xx[ii++] =
    "23      You're at west end of twopit room.                                              ";
  xx[ii++] =
    "24      You're in east pit.                                                             ";
  xx[ii++] =
    "25      You're in west pit.                                                             ";
  xx[ii++] =
    '33      You\'re at "Y2".                                                                 ';
  xx[ii++] =
    "35      You're at window on pit.                                                        ";
  xx[ii++] =
    "36      You're in dirty passage.                                                        ";
  xx[ii++] =
    "39      You're in dusty rock room.                                                      ";
  xx[ii++] =
    "41      You're at west end of hall of mists.                                            ";
  xx[ii++] =
    "57      You're at brink of pit.                                                         ";
  xx[ii++] =
    "60      You're at east end of long hall.                                                ";
  xx[ii++] =
    "61      You're at west end of long hall.                                                ";
  xx[ii++] =
    "63      You're at storage room.                                                         ";
  xx[ii++] =
    "64      You're at complex junction.                                                     ";
  xx[ii++] =
    "66      You're in swiss cheese room.                                                    ";
  xx[ii++] =
    "67      You're at east end of twopit room.                                              ";
  xx[ii++] =
    "68      You're in slab room.                                                            ";
  xx[ii++] =
    "71      You're at junction of three secret canyons.                                     ";
  xx[ii++] =
    "74      You're in secret E/W canyon above tight canyon.                                 ";
  xx[ii++] =
    "76      You're in the tomb of the seventh dwarf.                                        ";
  xx[ii++] =
    "88      You're in narrow corridor.                                                      ";
  xx[ii++] =
    "91      You're at steep incline above large room.                                       ";
  xx[ii++] =
    "92      You're in giant room.                                                           ";
  xx[ii++] =
    "93      You're on wide ledge.                                                           ";
  xx[ii++] =
    "95      You're in cavern with waterfall.                                                ";
  xx[ii++] =
    "96      You're in soft room.                                                            ";
  xx[ii++] =
    "97      You're in oriental room.                                                        ";
  xx[ii++] =
    "98      You're in misty cavern.                                                         ";
  xx[ii++] =
    "99      You're in alcove.                                                               ";
  xx[ii++] =
    "100     You're in plover room.                                                          ";
  xx[ii++] =
    "101     You're in dark-room.                                                            ";
  xx[ii++] =
    "102     You're in arched hall.                                                          ";
  xx[ii++] =
    "103     You're in shell room.                                                           ";
  xx[ii++] =
    "106     You're in anteroom.                                                             ";
  xx[ii++] =
    "108     You're at Witt's end.                                                           ";
  xx[ii++] =
    "109     You're in mirror canyon.                                                        ";
  xx[ii++] =
    "110     You're at window on pit.                                                        ";
  xx[ii++] =
    "111     You're at top of stalactite.                                                    ";
  xx[ii++] =
    "113     You're at reservoir.                                                            ";
  xx[ii++] =
    "115     You're at NE end.                                                               ";
  xx[ii++] =
    "116     You're at SW end.                                                               ";
  xx[ii++] =
    "117     You're on SW side of chasm.                                                     ";
  xx[ii++] =
    "118     You're in sloping corridor.                                                     ";
  xx[ii++] =
    "122     You're on NE side of chasm.                                                     ";
  xx[ii++] =
    "123     You're in corridor.                                                             ";
  xx[ii++] =
    "124     You're at fork in path.                                                         ";
  xx[ii++] =
    "125     You're at junction with warm walls.                                             ";
  xx[ii++] =
    "126     You're at breath-taking view.                                                   ";
  xx[ii++] =
    "127     You're in chamber of boulders.                                                  ";
  xx[ii++] =
    "128     You're in limestone passage.                                                    ";
  xx[ii++] =
    "129     You're in front of barren room.                                                 ";
  xx[ii++] =
    "130     You're in barren room.                                                          ";
  xx[ii++] =
    "141     You're in well room.                                                            ";
  xx[ii++] =
    "142     You're in bottom of well.                                                       ";
  xx[ii++] =
    "143     You're on north beach.                                                          ";
  xx[ii++] =
    "144     You're in rubble room.                                                          ";
  xx[ii++] =
    "145     You're in diagonal traverse.                                                    ";
  xx[ii++] =
    "146     You're in low crawl.                                                            ";
  xx[ii++] =
    "147     You're in glowworm grotto.                                                      ";
  xx[ii++] =
    "148     You're in sharp room.                                                           ";
  xx[ii++] =
    "149     You're at west end of Giant's Causeway.                                         ";
  xx[ii++] =
    "150     You're at east end of Giant's Causeway.                                         ";
  xx[ii++] =
    "151     You're at elbow junction.                                                       ";
  xx[ii++] =
    "152     You're in amphitheater.                                                         ";
  xx[ii++] =
    "153     You're in pebble pit.                                                           ";
  xx[ii++] =
    "154     You're east of rift.                                                            ";
  xx[ii++] =
    "155     You're west of rift.                                                            ";
  xx[ii++] =
    "156     You're in Egyptian room.                                                        ";
  xx[ii++] =
    "157     You're in dead end.                                                             ";
  xx[ii++] =
    "158     You're in staff break room.                                                     ";
  xx[ii++] =
    "159     You're in middle chamber.                                                       ";
  xx[ii++] =
    "160     You're in burial chamber.                                                       ";
  xx[ii++] =
    "161     You're in alcove.                                                               ";
  xx[ii++] =
    "163     You're in forest.                                                               ";
  xx[ii++] =
    "164     You're in forest.                                                               ";
  xx[ii++] =
    "165     You're in clearing.                                                             ";
  xx[ii++] =
    "166     You're in forest.                                                               ";
  xx[ii++] =
    "167     You're in stone arch room.                                                               ";
  xx[ii++] =
    "168     You're in Tolkien room.                                                               ";
  xx[ii++] =
    "1       당신은 다시 도로의 끝에 있습니다.                                                    ";
  xx[ii++] =
    "2       당신은 도로의 언덕에 있습니다.                                                       ";
  xx[ii++] =
    "3       당신은 건물 안에 있습니다.                                                         ";
  xx[ii++] =
    "4       당신은 계곡에 있습니다.                                                               ";
  xx[ii++] =
    "5       당신은 숲에 있습니다.                                                               ";
  xx[ii++] =
    "6       당신은 숲에 있습니다.                                                               ";
  xx[ii++] =
    "7       당신은 시냇가의 틈새에 있습니다.                                                    ";
  xx[ii++] =
    "8       당신은 빗장 밖에 있습니다.                                                           ";
  xx[ii++] =
    "9       당신은 빗장 아래에 있습니다.                                                         ";
  xx[ii++] =
    "10      당신은 자갈로 된 통로에 있습니다.                                                     ";
  xx[ii++] =
    "11      당신은 잔해가 있는 방에 있습니다.                                                    ";
  xx[ii++] =
    "13      당신은 새들의 방에 있습니다.                                                         ";
  xx[ii++] =
    "14      당신은 작은 구덩이의 꼭대기에 있습니다.                                               ";
  xx[ii++] =
    "15      당신은 안개의 홀에 있습니다.                                                         ";
  xx[ii++] =
    "17      당신은 균열의 동쪽 둑 위에 있습니다.                                                 ";
  xx[ii++] =
    "18      당신은 금의 작은 덩어리 방에 있습니다.                                                ";
  xx[ii++] =
    "19      당신은 산의 왕의 홀에 있습니다.                                                      ";
  xx[ii++] =
    "23      당신은 두 구덩이 방의 서쪽 끝에 있습니다.                                              ";
  xx[ii++] =
    "24      당신은 동쪽 구덩이에 있습니다.                                                        ";
  xx[ii++] =
    "25      당신은 서쪽 구덩이에 있습니다.                                                        ";
  xx[ii++] =
    '33      당신은 "Y2"에 있습니다.                                                               ';
  xx[ii++] =
    "35      당신은 구덩이 위의 창가에 있습니다.                                                   ";
  xx[ii++] =
    "36      당신은 더러운 통로에 있습니다.                                                        ";
  xx[ii++] =
    "39      당신은 먼지 낀 바위 방에 있습니다.                                                   ";
  xx[ii++] =
    "41      당신은 안개의 홀의 서쪽 끝에 있습니다.                                                 ";
  xx[ii++] =
    "57      당신은 구덩이의 가장자리에 있습니다.                                                  ";
  xx[ii++] =
    "60      당신은 긴 홀의 동쪽 끝에 있습니다.                                                    ";
  xx[ii++] =
    "61      당신은 긴 홀의 서쪽 끝에 있습니다.                                                    ";
  xx[ii++] =
    "63      당신은 저장실에 있습니다.                                                             ";
  xx[ii++] =
    "64      당신은 복잡한 교차로에 있습니다.                                                      ";
  xx[ii++] =
    "66      당신은 스위스 치즈 방에 있습니다.                                                     ";
  xx[ii++] =
    "67      당신은 두 구덩이 방의 동쪽 끝에 있습니다.                                              ";
  xx[ii++] =
    "68      당신은 돌반 지붕 방에 있습니다.                                                       ";
  xx[ii++] =
    "71      당신은 세 개의 비밀 캐니언의 교차로에 있습니다.                                        ";
  xx[ii++] =
    "74      당신은 타이트 캐니언 위에있는 동서 캐니언에서 비밀 캐니언으로 이동하는 길에 있습니다.                 ";
  xx[ii++] =
    "76      당신은 일곱 번째 난쟁이의 무덤에 있습니다.                                              ";
  xx[ii++] =
    "88      당신은 좁은 복도에 있습니다.                                                          ";
  xx[ii++] =
    "91      당신은 큰 방 위의 가파른 경사로에 있습니다.                                            ";
  xx[ii++] =
    "92      당신은 거대한 방에 있습니다.                                                          ";
  xx[ii++] =
    "93      당신은 넓은 터라에 있습니다.                                                          ";
  xx[ii++] =
    "95      당신은 폭포가 있는 동굴에 있습니다.                                                    ";
  xx[ii++] =
    "96      당신은 부드러운 방에 있습니다.                                                        ";
  xx[ii++] =
    "97      당신은 동양적인 방에 있습니다.                                                        ";
  xx[ii++] =
    "98      당신은 안개 동굴에 있습니다.                                                          ";
  xx[ii++] =
    "99      당신은 벽감에 있습니다.                                                              ";
  xx[ii++] =
    "100     당신은 철새 방에 있습니다.                                                            ";
  xx[ii++] =
    "101     당신은 어두운 방에 있습니다.                                                          ";
  xx[ii++] =
    "102     당신은 아치 형태의 홀에 있습니다.                                                     ";
  xx[ii++] =
    "103     당신은 조개껍질 방에 있습니다.                                                        ";
  xx[ii++] =
    "106     당신은 대기실에 있습니다.                                                             ";
  xx[ii++] =
    "108     당신은 끝에 다다랐습니다.                                                             ";
  xx[ii++] =
    "109     당신은 거울 캐니언에 있습니다.                                                        ";
  xx[ii++] =
    "110     당신은 구덩이 위의 창가에 있습니다.                                                   ";
  xx[ii++] =
    "111     당신은 석순의 꼭대기에 있습니다.                                                      ";
  xx[ii++] =
    "113     당신은 저수지에 있습니다.                                                             ";
  xx[ii++] =
    "115     당신은 북동쪽 끝에 있습니다.                                                          ";
  xx[ii++] =
    "116     당신은 남서쪽 끝에 있습니다.                                                          ";
  xx[ii++] =
    "117     당신은 협곡의 남쪽에 있습니다.                                                        ";
  xx[ii++] =
    "118     당신은 경사로가 있는 복도에 있습니다.                                                  ";
  xx[ii++] =
    "122     당신은 협곡의 북동쪽에 있습니다.                                                      ";
  xx[ii++] =
    "123     당신은 복도에 있습니다.                                                              ";
  xx[ii++] =
    "124     당신은 길이 갈라지는 곳에 있습니다.                                                    ";
  xx[ii++] =
    "125     당신은 따뜻한 벽들이 있는 교차로에 있습니다.                                           ";
  xx[ii++] =
    "126     당신은 아슬아슬한 전망을 바라보고 있습니다.                                            ";
  xx[ii++] =
    "127     당신은 바위 방에 있습니다.                                                            ";
  xx[ii++] =
    "128     당신은 석회암 통로에 있습니다.                                                        ";
  xx[ii++] =
    "129     당신은 황량한 방 앞에 있습니다.                                                       ";
  xx[ii++] =
    "130     당신은 황량한 방에 있습니다.                                                          ";
  xx[ii++] =
    "141     당신은 우물 방에 있습니다.                                                            ";
  xx[ii++] =
    "142     당신은 우물의 바닥에 있습니다.                                                        ";
  xx[ii++] =
    "143     당신은 북쪽 해변에 있습니다.                                                          ";
  xx[ii++] =
    "144     당신은 돌바닥 방에 있습니다.                                                          ";
  xx[ii++] =
    "145     당신은 대각선 통로에 있습니다.                                                        ";
  xx[ii++] =
    "146     당신은 낮은 기어오르기에 있습니다.                                                     ";
  xx[ii++] =
    "147     당신은 발광 웜홀의 동쪽 끝에 있습니다.                                                  ";
  xx[ii++] =
    "148     당신은 날카로운 방에 있습니다.                                                        ";
  xx[ii++] =
    "149     당신은 거인의 길 코즈웨이의 서쪽 끝에 있습니다.                                         ";
  xx[ii++] =
    "150     당신은 거인의 길 코즈웨이의 동쪽 끝에 있습니다.                                         ";
  xx[ii++] =
    "151     당신은 팔꿈치 모양의 교차로에 있습니다.                                                ";
  xx[ii++] =
    "152     당신은 원형 극장에 있습니다.                                                          ";
  xx[ii++] =
    "153     당신은 자갈 구덩이에 있습니다.                                                        ";
  xx[ii++] =
    "154     당신은 균열 동쪽에 있습니다.                                                          ";
  xx[ii++] =
    "155     당신은 균열 서쪽에 있습니다.                                                          ";
  xx[ii++] =
    "156     당신은 이집트 방에 있습니다.                                                          ";
  xx[ii++] =
    "157     당신은 막다른 곳에 있습니다.                                                          ";
  xx[ii++] =
    "158     당신은 직원 휴게실에 있습니다.                                                        ";
  xx[ii++] =
    "159     당신은 중간의 방에 있습니다.                                                          ";
  xx[ii++] =
    "160     당신은 매장의 방에 있습니다.                                                          ";
  xx[ii++] =
    "161     당신은 동풍석에 있습니다.                                                             ";
  xx[ii++] =
    "163     당신은 숲에 있습니다.                                                               ";
  xx[ii++] =
    "164     당신은 숲에 있습니다.                                                               ";
  xx[ii++] =
    "165     당신은 공터에 있습니다.                                                             ";
  xx[ii++] =
    "166     당신은 숲에 있습니다.                                                               ";
  xx[ii++] =
    "167     당신은 돌 아치 방에 있습니다.                                                               ";
  xx[ii++] =
    "168     당신은 톨킨의 방에 있습니다.                                                               ";
  xx[ii++] =
    "-1                                                                                      ";

  // Travel (travel[]) array
  //         From    To      Cmd     Cmd     Cmd     Cmd     Cmd     Cmd ....
  xx[ii++] =
    "3                                                                                       ";
  xx[ii++] =
    "1       2       2       44      29                                                      ";
  xx[ii++] =
    "1       3       3       12      19      43                                              ";
  xx[ii++] =
    "1       4       5       13      14      46      30                                      ";
  xx[ii++] =
    "1       164     6       45                                                              ";
  xx[ii++] =
    "1       8       63                                                                      ";
  xx[ii++] =
    "2       1       2       12      7       43      30                                      ";
  xx[ii++] =
    "2       5       6       45                                                              ";
  xx[ii++] =
    "3       1       3       11      32      44                                              ";
  xx[ii++] =
    "3       11      62                                                                      ";
  xx[ii++] =
    "3       33      65                                                                      ";
  xx[ii++] =
    "3       79      5       14                                                              ";
  xx[ii++] =
    "3       141     43                                                                      ";
  xx[ii++] =
    "4       1       4       12      45                                                      ";
  xx[ii++] =
    "4       5       6       43      44      29                                              ";
  xx[ii++] =
    "4       7       5       46      30                                                      ";
  xx[ii++] =
    "4       8       63                                                                      ";
  xx[ii++] =
    "5       6       6       45                                                              ";
  xx[ii++] =
    "5       2       46                                                                      ";
  xx[ii++] =
    "5       164     43                                                                      ";
  xx[ii++] =
    "6       163     43                                                                      ";
  xx[ii++] =
    "6       5       6       46                                                              ";
  xx[ii++] =
    "7       1       12                                                                      ";
  xx[ii++] =
    "7       4       4       45                                                              ";
  xx[ii++] =
    "7       5       6       43      44                                                      ";
  xx[ii++] =
    "7       8       5       15      16      46                                              ";
  xx[ii++] =
    "7       595     60      14      30                                                      ";
  xx[ii++] =
    "8       5       6       43      44      46                                              ";
  xx[ii++] =
    "8       1       12                                                                      ";
  xx[ii++] =
    "8       7       4       13      45                                                      ";
  xx[ii++] =
    "8       303009  3       19      30                                                      ";
  xx[ii++] =
    "8       593     3                                                                       ";
  xx[ii++] =
    "9       303008  11      29                                                              ";
  xx[ii++] =
    "9       593     11                                                                      ";
  xx[ii++] =
    "9       10      17      18      19      44                                              ";
  xx[ii++] =
    "9       14      31                                                                      ";
  xx[ii++] =
    "9       11      51                                                                      ";
  xx[ii++] =
    "10      9       11      20      21      43                                              ";
  xx[ii++] =
    "10      11      19      22      44      51                                              ";
  xx[ii++] =
    "10      14      31                                                                      ";
  xx[ii++] =
    "11      303008  63                                                                      ";
  xx[ii++] =
    "11      9       64                                                                      ";
  xx[ii++] =
    "11      10      17      18      23      24      43                                      ";
  xx[ii++] =
    "11      12      25      19      29      44                                              ";
  xx[ii++] =
    "11      3       62                                                                      ";
  xx[ii++] =
    "11      14      31                                                                      ";
  xx[ii++] =
    "12      303008  63                                                                      ";
  xx[ii++] =
    "12      9       64                                                                      ";
  xx[ii++] =
    "12      11      30      43      51                                                      ";
  xx[ii++] =
    "12      13      19      29      44                                                      ";
  xx[ii++] =
    "12      14      31                                                                      ";
  xx[ii++] =
    "13      303008  63                                                                      ";
  xx[ii++] =
    "13      9       64                                                                      ";
  xx[ii++] =
    "13      11      51                                                                      ";
  xx[ii++] =
    "13      12      25      43                                                              ";
  xx[ii++] =
    "13      14      23      31      44                                                      ";
  xx[ii++] =
    "14      303008  63                                                                      ";
  xx[ii++] =
    "14      9       64                                                                      ";
  xx[ii++] =
    "14      11      51                                                                      ";
  xx[ii++] =
    "14      13      23      43                                                              ";
  xx[ii++] =
    "14      250020  30      31      34                                                      ";
  xx[ii++] =
    "14      15      30                                                                      ";
  xx[ii++] =
    "14      16      33      44                                                              ";
  xx[ii++] =
    "15      18      36      46                                                              ";
  xx[ii++] =
    "15      17      7       38      44                                                      ";
  xx[ii++] =
    "15      19      10      30      45                                                      ";
  xx[ii++] =
    "15      250022  29      31      34      35      23      43                              ";
  xx[ii++] =
    "15      14      29                                                                      ";
  xx[ii++] =
    "15      34      55                                                                      ";
  xx[ii++] =
    "16      14      1                                                                       ";
  xx[ii++] =
    "17      15      38      43                                                              ";
  xx[ii++] =
    "17      312596  39                                                                      ";
  xx[ii++] =
    "17      412021  7                                                                       ";
  xx[ii++] =
    "17      412597  41      42      44      69                                              ";
  xx[ii++] =
    "17      27      41                                                                      ";
  xx[ii++] =
    "18      15      38      11      45                                                      ";
  xx[ii++] =
    "19      15      10      29      43                                                      ";
  xx[ii++] =
    "19      311028  45      36                                                              ";
  xx[ii++] =
    "19      311029  46      37                                                              ";
  xx[ii++] =
    "19      311030  44      7                                                               ";
  xx[ii++] =
    "19      32      45                                                                      ";
  xx[ii++] =
    "19      35074   49                                                                      ";
  xx[ii++] =
    "19      911032  49                                                                      ";
  xx[ii++] =
    "19      74      66                                                                      ";
  xx[ii++] =
    "20      0       1                                                                       ";
  xx[ii++] =
    "21      0       1                                                                       ";
  xx[ii++] =
    "22      15      1                                                                       ";
  xx[ii++] =
    "23      67      43      42                                                              ";
  xx[ii++] =
    "23      68      44      61                                                              ";
  xx[ii++] =
    "23      25      30      31                                                              ";
  xx[ii++] =
    "23      648     52                                                                      ";
  xx[ii++] =
    "24      67      29      11                                                              ";
  xx[ii++] =
    "25      23      29      11                                                              ";
  xx[ii++] =
    "25      724031  56                                                                      ";
  xx[ii++] =
    "25      449304  56                                                                      ";
  xx[ii++] =
    "25      26      56                                                                      ";
  xx[ii++] =
    "26      88      1                                                                       ";
  xx[ii++] =
    "27      312596  39                                                                      ";
  xx[ii++] =
    "27      412021  7                                                                       ";
  xx[ii++] =
    "27      412597  41      42      43      69                                              ";
  xx[ii++] =
    "27      17      41                                                                      ";
  xx[ii++] =
    "27      40      45                                                                      ";
  xx[ii++] =
    "27      41      44                                                                      ";
  xx[ii++] =
    "28      19      38      11      46                                                      ";
  xx[ii++] =
    "28      33      45      55                                                              ";
  xx[ii++] =
    "28      36      30      52                                                              ";
  xx[ii++] =
    "29      19      38      11      45                                                      ";
  xx[ii++] =
    "30      19      38      11      43                                                      ";
  xx[ii++] =
    "30      62      44      29                                                              ";
  xx[ii++] =
    "30      158     45      3                                                               ";
  xx[ii++] =
    "31      524089  1                                                                       ";
  xx[ii++] =
    "31      90      1                                                                       ";
  xx[ii++] =
    "32      19      1                                                                       ";
  xx[ii++] =
    "33      3       65                                                                      ";
  xx[ii++] =
    "33      28      46                                                                      ";
  xx[ii++] =
    "33      34      43      53      54                                                      ";
  xx[ii++] =
    "33      35      44                                                                      ";
  xx[ii++] =
    "33      259302  71                                                                      ";
  xx[ii++] =
    "33      100     71                                                                      ";
  xx[ii++] =
    "34      33      44      55                                                              ";
  xx[ii++] =
    "34      15      29                                                                      ";
  xx[ii++] =
    "34      113     30                                                                      ";
  xx[ii++] =
    "35      33      43      55                                                              ";
  xx[ii++] =
    "35      20      39                                                                      ";
  xx[ii++] =
    "36      37      43      17                                                              ";
  xx[ii++] =
    "36      28      29      52                                                              ";
  xx[ii++] =
    "36      39      44                                                                      ";
  xx[ii++] =
    "36      65      70                                                                      ";
  xx[ii++] =
    "37      36      44      17                                                              ";
  xx[ii++] =
    "37      38      30      31      56                                                      ";
  xx[ii++] =
    "38      37      56      29      11                                                      ";
  xx[ii++] =
    "38      595     60      14      30      4       5                                       ";
  xx[ii++] =
    "39      36      43      23                                                              ";
  xx[ii++] =
    "39      64      30      52      58                                                      ";
  xx[ii++] =
    "39      65      70                                                                      ";
  xx[ii++] =
    "40      41      1                                                                       ";
  xx[ii++] =
    "41      42      46      29      23      56                                              ";
  xx[ii++] =
    "41      27      43                                                                      ";
  xx[ii++] =
    "41      59      45                                                                      ";
  xx[ii++] =
    "41      60      44      17                                                              ";
  xx[ii++] =
    "42      41      29                                                                      ";
  xx[ii++] =
    "42      42      45                                                                      ";
  xx[ii++] =
    "42      43      43                                                                      ";
  xx[ii++] =
    "42      45      46                                                                      ";
  xx[ii++] =
    "42      80      44                                                                      ";
  xx[ii++] =
    "43      42      44                                                                      ";
  xx[ii++] =
    "43      44      46                                                                      ";
  xx[ii++] =
    "43      45      43                                                                      ";
  xx[ii++] =
    "44      43      43                                                                      ";
  xx[ii++] =
    "44      48      30                                                                      ";
  xx[ii++] =
    "44      50      46                                                                      ";
  xx[ii++] =
    "44      82      45                                                                      ";
  xx[ii++] =
    "45      42      44                                                                      ";
  xx[ii++] =
    "45      43      45                                                                      ";
  xx[ii++] =
    "45      46      43                                                                      ";
  xx[ii++] =
    "45      47      46                                                                      ";
  xx[ii++] =
    "45      87      29      30                                                              ";
  xx[ii++] =
    "46      45      44      11                                                              ";
  xx[ii++] =
    "47      45      43      11                                                              ";
  xx[ii++] =
    "48      44      29      11                                                              ";
  xx[ii++] =
    "49      50      43                                                                      ";
  xx[ii++] =
    "49      51      44                                                                      ";
  xx[ii++] =
    "50      44      43                                                                      ";
  xx[ii++] =
    "50      49      44                                                                      ";
  xx[ii++] =
    "50      51      30                                                                      ";
  xx[ii++] =
    "50      52      46                                                                      ";
  xx[ii++] =
    "51      49      44                                                                      ";
  xx[ii++] =
    "51      50      29                                                                      ";
  xx[ii++] =
    "51      52      43                                                                      ";
  xx[ii++] =
    "51      53      46                                                                      ";
  xx[ii++] =
    "52      50      44                                                                      ";
  xx[ii++] =
    "52      51      43                                                                      ";
  xx[ii++] =
    "52      52      46                                                                      ";
  xx[ii++] =
    "52      53      29                                                                      ";
  xx[ii++] =
    "52      55      45                                                                      ";
  xx[ii++] =
    "52      86      30                                                                      ";
  xx[ii++] =
    "53      51      44                                                                      ";
  xx[ii++] =
    "53      52      45                                                                      ";
  xx[ii++] =
    "53      54      46                                                                      ";
  xx[ii++] =
    "54      53      44      11                                                              ";
  xx[ii++] =
    "55      52      44                                                                      ";
  xx[ii++] =
    "55      55      45                                                                      ";
  xx[ii++] =
    "55      56      30                                                                      ";
  xx[ii++] =
    "55      57      43                                                                      ";
  xx[ii++] =
    "56      55      29      11                                                              ";
  xx[ii++] =
    "57      13      30      56                                                              ";
  xx[ii++] =
    "57      55      44                                                                      ";
  xx[ii++] =
    "57      58      46                                                                      ";
  xx[ii++] =
    "57      83      45                                                                      ";
  xx[ii++] =
    "57      84      43                                                                      ";
  xx[ii++] =
    "58      57      43      11                                                              ";
  xx[ii++] =
    "59      27      1                                                                       ";
  xx[ii++] =
    "60      41      43      29      17                                                      ";
  xx[ii++] =
    "60      61      44                                                                      ";
  xx[ii++] =
    "60      62      45      30      52                                                      ";
  xx[ii++] =
    "61      60      43                                                                      ";
  xx[ii++] =
    "61      62      45                                                                      ";
  xx[ii++] =
    "61      100107  46                                                                      ";
  xx[ii++] =
    "62      60      44                                                                      ";
  xx[ii++] =
    "62      471799  45                                                                      ";
  xx[ii++] =
    "62      63      45                                                                      ";
  xx[ii++] =
    "62      30      43                                                                      ";
  xx[ii++] =
    "62      61      46                                                                      ";
  xx[ii++] =
    "63      62      46      11                                                              ";
  xx[ii++] =
    "64      39      29      56      59                                                      ";
  xx[ii++] =
    "64      65      44      70                                                              ";
  xx[ii++] =
    "64      103     45      74                                                              ";
  xx[ii++] =
    "64      106     43                                                                      ";
  xx[ii++] =
    "65      64      43                                                                      ";
  xx[ii++] =
    "65      66      44                                                                      ";
  xx[ii++] =
    "65      80556   46                                                                      ";
  xx[ii++] =
    "65      68      61                                                                      ";
  xx[ii++] =
    "65      80556   29                                                                      ";
  xx[ii++] =
    "65      50070   29                                                                      ";
  xx[ii++] =
    "65      39      29                                                                      ";
  xx[ii++] =
    "65      60556   45                                                                      ";
  xx[ii++] =
    "65      75072   45                                                                      ";
  xx[ii++] =
    "65      71      45                                                                      ";
  xx[ii++] =
    "65      80556   30                                                                      ";
  xx[ii++] =
    "65      106     30                                                                      ";
  xx[ii++] =
    "66      65      47                                                                      ";
  xx[ii++] =
    "66      67      44                                                                      ";
  xx[ii++] =
    "66      80556   46                                                                      ";
  xx[ii++] =
    "66      77      25                                                                      ";
  xx[ii++] =
    "66      96      43                                                                      ";
  xx[ii++] =
    "66      50556   50                                                                      ";
  xx[ii++] =
    "66      97      72                                                                      ";
  xx[ii++] =
    "67      66      43                                                                      ";
  xx[ii++] =
    "67      23      44      42                                                              ";
  xx[ii++] =
    "67      24      30      31                                                              ";
  xx[ii++] =
    "67      93      45                                                                      ";
  xx[ii++] =
    "68      23      46                                                                      ";
  xx[ii++] =
    "68      69      29      56                                                              ";
  xx[ii++] =
    "68      65      45                                                                      ";
  xx[ii++] =
    "69      68      30      61                                                              ";
  xx[ii++] =
    "69      331120  46                                                                      ";
  xx[ii++] =
    "69      119     46                                                                      ";
  xx[ii++] =
    "69      109     45                                                                      ";
  xx[ii++] =
    "69      113     75                                                                      ";
  xx[ii++] =
    "70      71      45                                                                      ";
  xx[ii++] =
    "70      65      30      23                                                              ";
  xx[ii++] =
    "70      111     46                                                                      ";
  xx[ii++] =
    "71      65      48                                                                      ";
  xx[ii++] =
    "71      70      46                                                                      ";
  xx[ii++] =
    "71      110     45                                                                      ";
  xx[ii++] =
    "72      65      70                                                                      ";
  xx[ii++] =
    "72      118     49                                                                      ";
  xx[ii++] =
    "72      73      45                                                                      ";
  xx[ii++] =
    "72      97      48      72                                                              ";
  xx[ii++] =
    "73      72      46      17      11                                                      ";
  xx[ii++] =
    "74      19      43                                                                      ";
  xx[ii++] =
    "74      331120  44                                                                      ";
  xx[ii++] =
    "74      121     44                                                                      ";
  xx[ii++] =
    "74      75      30                                                                      ";
  xx[ii++] =
    "75      76      46                                                                      ";
  xx[ii++] =
    "75      77      45                                                                      ";
  xx[ii++] =
    "76      75      45                                                                      ";
  xx[ii++] =
    "77      75      43                                                                      ";
  xx[ii++] =
    "77      78      44                                                                      ";
  xx[ii++] =
    "77      66      45      17                                                              ";
  xx[ii++] =
    "78      77      46                                                                      ";
  xx[ii++] =
    "79      3       1                                                                       ";
  xx[ii++] =
    "80      42      45                                                                      ";
  xx[ii++] =
    "80      80      44                                                                      ";
  xx[ii++] =
    "80      80      46                                                                      ";
  xx[ii++] =
    "80      81      43                                                                      ";
  xx[ii++] =
    "81      80      44      11                                                              ";
  xx[ii++] =
    "82      44      46      11                                                              ";
  xx[ii++] =
    "83      57      46                                                                      ";
  xx[ii++] =
    "83      84      43                                                                      ";
  xx[ii++] =
    "83      85      44                                                                      ";
  xx[ii++] =
    "84      57      45                                                                      ";
  xx[ii++] =
    "84      83      44                                                                      ";
  xx[ii++] =
    "84      114     50                                                                      ";
  xx[ii++] =
    "85      83      43      11                                                              ";
  xx[ii++] =
    "86      52      29      11                                                              ";
  xx[ii++] =
    "87      45      29      30                                                              ";
  xx[ii++] =
    "88      25      30      56      43                                                      ";
  xx[ii++] =
    "88      20      39                                                                      ";
  xx[ii++] =
    "88      92      44      27                                                              ";
  xx[ii++] =
    "89      25      1                                                                       ";
  xx[ii++] =
    "90      23      1                                                                       ";
  xx[ii++] =
    "91      95      45      73      23                                                      ";
  xx[ii++] =
    "91      72      30      56                                                              ";
  xx[ii++] =
    "92      88      46                                                                      ";
  xx[ii++] =
    "92      450509  43                                                                      ";
  xx[ii++] =
    "92      149     43                                                                      ";
  xx[ii++] =
    "92      94      45                                                                      ";
  xx[ii++] =
    "93      67      46                                                                      ";
  xx[ii++] =
    "93      148     30                                                                      ";
  xx[ii++] =
    "94      92      46      27      23                                                      ";
  xx[ii++] =
    "94      309095  45      3       73                                                      ";
  xx[ii++] =
    "94      611     45                                                                      ";
  xx[ii++] =
    "95      94      46      11                                                              ";
  xx[ii++] =
    "95      92      27                                                                      ";
  xx[ii++] =
    "95      91      44                                                                      ";
  xx[ii++] =
    "96      66      44      11                                                              ";
  xx[ii++] =
    "97      66      48                                                                      ";
  xx[ii++] =
    "97      72      44      17                                                              ";
  xx[ii++] =
    "97      98      29      45      73                                                      ";
  xx[ii++] =
    "98      97      46      72                                                              ";
  xx[ii++] =
    "98      99      44                                                                      ";
  xx[ii++] =
    "99      98      50      73                                                              ";
  xx[ii++] =
    "99      301     43      23                                                              ";
  xx[ii++] =
    "99      100     43                                                                      ";
  xx[ii++] =
    "100     301     44      23      11                                                      ";
  xx[ii++] =
    "100     99      44                                                                      ";
  xx[ii++] =
    "100     259302  71                                                                      ";
  xx[ii++] =
    "100     33      71                                                                      ";
  xx[ii++] =
    "100     101     47      22                                                              ";
  xx[ii++] =
    "101     100     46      71      11                                                      ";
  xx[ii++] =
    "102     103     30      74      11                                                      ";
  xx[ii++] =
    "102     167     29      43                                                              ";
  xx[ii++] =
    "103     102     29      38                                                              ";
  xx[ii++] =
    "103     104     30                                                                      ";
  xx[ii++] =
    "103     114618  46                                                                      ";
  xx[ii++] =
    "103     115619  46                                                                      ";
  xx[ii++] =
    "103     64      46                                                                      ";
  xx[ii++] =
    "104     103     29      74                                                              ";
  xx[ii++] =
    "104     105     30                                                                      ";
  xx[ii++] =
    "105     104     29      11                                                              ";
  xx[ii++] =
    "105     103     74                                                                      ";
  xx[ii++] =
    "106     64      29                                                                      ";
  xx[ii++] =
    "106     65      44                                                                      ";
  xx[ii++] =
    "106     108     43                                                                      ";
  xx[ii++] =
    "107     131     46                                                                      ";
  xx[ii++] =
    "107     132     49                                                                      ";
  xx[ii++] =
    "107     133     47                                                                      ";
  xx[ii++] =
    "107     134     48                                                                      ";
  xx[ii++] =
    "107     135     29                                                                      ";
  xx[ii++] =
    "107     136     50                                                                      ";
  xx[ii++] =
    "107     137     43                                                                      ";
  xx[ii++] =
    "107     138     44                                                                      ";
  xx[ii++] =
    "107     139     45                                                                      ";
  xx[ii++] =
    "107     61      30                                                                      ";
  xx[ii++] =
    "108     95556   43      45      46      47      48      49      50      29      30      ";
  xx[ii++] =
    "108     106     43                                                                      ";
  xx[ii++] =
    "108     626     44                                                                      ";
  xx[ii++] =
    "109     69      46                                                                      ";
  xx[ii++] =
    "109     113     45      75                                                              ";
  xx[ii++] =
    "110     71      44                                                                      ";
  xx[ii++] =
    "110     20      39                                                                      ";
  xx[ii++] =
    "111     70      45                                                                      ";
  xx[ii++] =
    "111     40050   30      39      56                                                      ";
  xx[ii++] =
    "111     50053   30                                                                      ";
  xx[ii++] =
    "111     45      30                                                                      ";
  xx[ii++] =
    "112     131     49                                                                      ";
  xx[ii++] =
    "112     132     45                                                                      ";
  xx[ii++] =
    "112     133     43                                                                      ";
  xx[ii++] =
    "112     134     50                                                                      ";
  xx[ii++] =
    "112     135     48                                                                      ";
  xx[ii++] =
    "112     136     47                                                                      ";
  xx[ii++] =
    "112     137     44                                                                      ";
  xx[ii++] =
    "112     138     30                                                                      ";
  xx[ii++] =
    "112     139     29                                                                      ";
  xx[ii++] =
    "112     140     46                                                                      ";
  xx[ii++] =
    "113     34      29      43                                                              ";
  xx[ii++] =
    "113     109     46                                                                      ";
  xx[ii++] =
    "113     441509  45                                                                      ";
  xx[ii++] =
    "113     143     45                                                                      ";
  xx[ii++] =
    "114     84      48                                                                      ";
  xx[ii++] =
    "115     116     49                                                                      ";
  xx[ii++] =
    "116     115     47                                                                      ";
  xx[ii++] =
    "116     593     30                                                                      ";
  xx[ii++] =
    "117     118     49                                                                      ";
  xx[ii++] =
    "117     933660  41      42      69      47                                              ";
  xx[ii++] =
    "117     332661  41                                                                      ";
  xx[ii++] =
    "117     303     41                                                                      ";
  xx[ii++] =
    "117     332021  39                                                                      ";
  xx[ii++] =
    "117     596     39                                                                      ";
  xx[ii++] =
    "118     72      30                                                                      ";
  xx[ii++] =
    "118     117     29                                                                      ";
  xx[ii++] =
    "119     69      45      11                                                              ";
  xx[ii++] =
    "119     653     43      7                                                               ";
  xx[ii++] =
    "120     69      45                                                                      ";
  xx[ii++] =
    "120     74      43                                                                      ";
  xx[ii++] =
    "121     74      43      11                                                              ";
  xx[ii++] =
    "121     653     45      7                                                               ";
  xx[ii++] =
    "122     123     47                                                                      ";
  xx[ii++] =
    "122     933660  41      42      69      49                                              ";
  xx[ii++] =
    "122     303     41                                                                      ";
  xx[ii++] =
    "122     596     39                                                                      ";
  xx[ii++] =
    "122     124     77                                                                      ";
  xx[ii++] =
    "122     126     28                                                                      ";
  xx[ii++] =
    "122     129     40                                                                      ";
  xx[ii++] =
    "123     122     44                                                                      ";
  xx[ii++] =
    "123     124     43      77                                                              ";
  xx[ii++] =
    "123     126     28                                                                      ";
  xx[ii++] =
    "123     129     40                                                                      ";
  xx[ii++] =
    "124     123     44                                                                      ";
  xx[ii++] =
    "124     125     47      36                                                              ";
  xx[ii++] =
    "124     128     48      37      30                                                      ";
  xx[ii++] =
    "124     126     28                                                                      ";
  xx[ii++] =
    "124     129     40                                                                      ";
  xx[ii++] =
    "125     124     46      77                                                              ";
  xx[ii++] =
    "125     126     45      28                                                              ";
  xx[ii++] =
    "125     127     43      17                                                              ";
  xx[ii++] =
    "126     125     46      23      11                                                      ";
  xx[ii++] =
    "126     124     77                                                                      ";
  xx[ii++] =
    "126     610     30      39                                                              ";
  xx[ii++] =
    "127     125     44      11      17                                                      ";
  xx[ii++] =
    "127     124     77                                                                      ";
  xx[ii++] =
    "127     126     28                                                                      ";
  xx[ii++] =
    "128     124     45      29      77                                                      ";
  xx[ii++] =
    "128     129     46      30      40                                                      ";
  xx[ii++] =
    "128     126     28                                                                      ";
  xx[ii++] =
    "129     128     44      29                                                              ";
  xx[ii++] =
    "129     124     77                                                                      ";
  xx[ii++] =
    "129     130     43      19      40      3                                               ";
  xx[ii++] =
    "129     126     28                                                                      ";
  xx[ii++] =
    "130     129     44      11                                                              ";
  xx[ii++] =
    "130     124     77                                                                      ";
  xx[ii++] =
    "130     126     28                                                                      ";
  xx[ii++] =
    "131     107     44                                                                      ";
  xx[ii++] =
    "131     132     48                                                                      ";
  xx[ii++] =
    "131     133     50                                                                      ";
  xx[ii++] =
    "131     134     49                                                                      ";
  xx[ii++] =
    "131     135     47                                                                      ";
  xx[ii++] =
    "131     136     29                                                                      ";
  xx[ii++] =
    "131     137     30                                                                      ";
  xx[ii++] =
    "131     138     45                                                                      ";
  xx[ii++] =
    "131     139     46                                                                      ";
  xx[ii++] =
    "131     112     43                                                                      ";
  xx[ii++] =
    "132     107     50                                                                      ";
  xx[ii++] =
    "132     131     29                                                                      ";
  xx[ii++] =
    "132     133     45                                                                      ";
  xx[ii++] =
    "132     134     46                                                                      ";
  xx[ii++] =
    "132     135     44                                                                      ";
  xx[ii++] =
    "132     136     49                                                                      ";
  xx[ii++] =
    "132     137     47                                                                      ";
  xx[ii++] =
    "132     138     43                                                                      ";
  xx[ii++] =
    "132     139     30                                                                      ";
  xx[ii++] =
    "132     112     48                                                                      ";
  xx[ii++] =
    "133     107     29                                                                      ";
  xx[ii++] =
    "133     131     30                                                                      ";
  xx[ii++] =
    "133     132     44                                                                      ";
  xx[ii++] =
    "133     134     47                                                                      ";
  xx[ii++] =
    "133     135     49                                                                      ";
  xx[ii++] =
    "133     136     43                                                                      ";
  xx[ii++] =
    "133     137     45                                                                      ";
  xx[ii++] =
    "133     138     50                                                                      ";
  xx[ii++] =
    "133     139     48                                                                      ";
  xx[ii++] =
    "133     112     46                                                                      ";
  xx[ii++] =
    "134     107     47                                                                      ";
  xx[ii++] =
    "134     131     45                                                                      ";
  xx[ii++] =
    "134     132     50                                                                      ";
  xx[ii++] =
    "134     133     48                                                                      ";
  xx[ii++] =
    "134     135     43                                                                      ";
  xx[ii++] =
    "134     136     30                                                                      ";
  xx[ii++] =
    "134     137     46                                                                      ";
  xx[ii++] =
    "134     138     29                                                                      ";
  xx[ii++] =
    "134     139     44                                                                      ";
  xx[ii++] =
    "134     112     49                                                                      ";
  xx[ii++] =
    "135     107     45                                                                      ";
  xx[ii++] =
    "135     131     48                                                                      ";
  xx[ii++] =
    "135     132     30                                                                      ";
  xx[ii++] =
    "135     133     46                                                                      ";
  xx[ii++] =
    "135     134     43                                                                      ";
  xx[ii++] =
    "135     136     44                                                                      ";
  xx[ii++] =
    "135     137     49                                                                      ";
  xx[ii++] =
    "135     138     47                                                                      ";
  xx[ii++] =
    "135     139     50                                                                      ";
  xx[ii++] =
    "135     112     29                                                                      ";
  xx[ii++] =
    "136     107     43                                                                      ";
  xx[ii++] =
    "136     131     44                                                                      ";
  xx[ii++] =
    "136     132     29                                                                      ";
  xx[ii++] =
    "136     133     49                                                                      ";
  xx[ii++] =
    "136     134     30                                                                      ";
  xx[ii++] =
    "136     135     46                                                                      ";
  xx[ii++] =
    "136     137     50                                                                      ";
  xx[ii++] =
    "136     138     48                                                                      ";
  xx[ii++] =
    "136     139     47                                                                      ";
  xx[ii++] =
    "136     112     45                                                                      ";
  xx[ii++] =
    "137     107     48                                                                      ";
  xx[ii++] =
    "137     131     47                                                                      ";
  xx[ii++] =
    "137     132     46                                                                      ";
  xx[ii++] =
    "137     133     30                                                                      ";
  xx[ii++] =
    "137     134     29                                                                      ";
  xx[ii++] =
    "137     135     50                                                                      ";
  xx[ii++] =
    "137     136     45                                                                      ";
  xx[ii++] =
    "137     138     49                                                                      ";
  xx[ii++] =
    "137     139     43                                                                      ";
  xx[ii++] =
    "137     112     44                                                                      ";
  xx[ii++] =
    "138     107     30                                                                      ";
  xx[ii++] =
    "138     131     43                                                                      ";
  xx[ii++] =
    "138     132     47                                                                      ";
  xx[ii++] =
    "138     133     29                                                                      ";
  xx[ii++] =
    "138     134     44                                                                      ";
  xx[ii++] =
    "138     135     45                                                                      ";
  xx[ii++] =
    "138     136     46                                                                      ";
  xx[ii++] =
    "138     137     48                                                                      ";
  xx[ii++] =
    "138     139     49                                                                      ";
  xx[ii++] =
    "138     112     50                                                                      ";
  xx[ii++] =
    "139     107     49                                                                      ";
  xx[ii++] =
    "139     131     50                                                                      ";
  xx[ii++] =
    "139     132     43                                                                      ";
  xx[ii++] =
    "139     133     44                                                                      ";
  xx[ii++] =
    "139     134     45                                                                      ";
  xx[ii++] =
    "139     135     30                                                                      ";
  xx[ii++] =
    "139     136     48                                                                      ";
  xx[ii++] =
    "139     137     29                                                                      ";
  xx[ii++] =
    "139     138     46                                                                      ";
  xx[ii++] =
    "139     112     47                                                                      ";
  xx[ii++] =
    "140     112     45      11                                                              ";
  xx[ii++] =
    "141     3       44                                                                      ";
  xx[ii++] =
    "141     341702  30                                                                      ";
  xx[ii++] =
    "141     142     30                                                                      ";
  xx[ii++] =
    "142     141     29                                                                      ";
  xx[ii++] =
    "143     113     46                                                                      ";
  xx[ii++] =
    "143     144     45                                                                      ";
  xx[ii++] =
    "143     271305  30                                                                      ";
  xx[ii++] =
    "143     153     30                                                                      ";
  xx[ii++] =
    "144     143     44                                                                      ";
  xx[ii++] =
    "144     145     43                                                                      ";
  xx[ii++] =
    "145     144     44                                                                      ";
  xx[ii++] =
    "145     146     43                                                                      ";
  xx[ii++] =
    "146     145     44                                                                      ";
  xx[ii++] =
    "146     147     30                                                                      ";
  xx[ii++] =
    "147     146     29                                                                      ";
  xx[ii++] =
    "148     93      29                                                                      ";
  xx[ii++] =
    "148     708     46                                                                      ";
  xx[ii++] =
    "149     450509  44                                                                      ";
  xx[ii++] =
    "149     92      44                                                                      ";
  xx[ii++] =
    "149     150     43                                                                      ";
  xx[ii++] =
    "149     151     46                                                                      ";
  xx[ii++] =
    "150     149     44                                                                      ";
  xx[ii++] =
    "150     151     46                                                                      ";
  xx[ii++] =
    "150     152     43                                                                      ";
  xx[ii++] =
    "151     149     50                                                                      ";
  xx[ii++] =
    "151     150     47                                                                      ";
  xx[ii++] =
    "152     150     44                                                                      ";
  xx[ii++] =
    "153     143     29                                                                      ";
  xx[ii++] =
    "153     154     44                                                                      ";
  xx[ii++] =
    "154     271305  43                                                                      ";
  xx[ii++] =
    "154     153     43                                                                      ";
  xx[ii++] =
    "154     355749  39                                                                      ";
  xx[ii++] =
    "154     455021  7                                                                       ";
  xx[ii++] =
    "154     455750  41      42      44      69                                              ";
  xx[ii++] =
    "154     155     41      42      44      69                                              ";
  xx[ii++] =
    "155     154     41      42      43      69                                              ";
  xx[ii++] =
    "155     156     46                                                                      ";
  xx[ii++] =
    "156     465509  44                                                                      ";
  xx[ii++] =
    "156     159     44                                                                      ";
  xx[ii++] =
    "156     155     45                                                                      ";
  xx[ii++] =
    "156     157     46                                                                      ";
  xx[ii++] =
    "157     156     45                                                                      ";
  xx[ii++] =
    "158     30      46      11                                                              ";
  xx[ii++] =
    "159     365156  43                                                                      ";
  xx[ii++] =
    "159     271307  43                                                                      ";
  xx[ii++] =
    "159     306     43                                                                      ";
  xx[ii++] =
    "159     160     29                                                                      ";
  xx[ii++] =
    "160     159     30                                                                      ";
  xx[ii++] =
    "160     161     29                                                                      ";
  xx[ii++] =
    "161     160     30                                                                      ";
  xx[ii++] =
    "163       6     44                                                                      ";
  xx[ii++] =
    "163     164     46                                                                      ";
  xx[ii++] =
    "163     165     43                                                                      ";
  xx[ii++] =
    "164     163     45                                                                      ";
  xx[ii++] =
    "164       5     44                                                                      ";
  xx[ii++] =
    "164       1     46                                                                      ";
  xx[ii++] =
    "164     166     43                                                                      ";
  xx[ii++] =
    "165     163     44                                                                      ";
  xx[ii++] =
    "165     166     46                                                                      ";
  xx[ii++] =
    "166     165     45                                                                      ";
  xx[ii++] =
    "166     164     44                                                                      ";
  xx[ii++] =
    "167     102     30      44                                                              ";
  xx[ii++] =
    "167     473805  45                                                                      ";
  xx[ii++] =
    "167     168     45                                                                      ";
  xx[ii++] =
    "168     167     46                                                                      ";

  xx[ii++] =
    "-1                                                                                      ";

  // Vocab (ktab[] and atab[]) arrays
  xx[ii++] =
    "4                                                                                       ";
  //         Locations:
  xx[ii++] =
    "2       ROAD                                                                            ";
  xx[ii++] =
    "2       HILL                                                                            ";
  xx[ii++] =
    "3       ENTER                                                                           ";
  xx[ii++] =
    "4       UPSTR                                                                           ";
  xx[ii++] =
    "5       DOWNS                                                                           ";
  xx[ii++] =
    "6       FORES                                                                           ";
  xx[ii++] =
    "7       FORWA                                                                           ";
  xx[ii++] =
    "7       CONTI                                                                           ";
  xx[ii++] =
    "7       ONWAR                                                                           ";
  xx[ii++] =
    "8       BACK                                                                            ";
  xx[ii++] =
    "8       RETUR                                                                           ";
  xx[ii++] =
    "8       RETRE                                                                           ";
  xx[ii++] =
    "9       VALLE                                                                           ";
  xx[ii++] =
    "10      STAIR                                                                           ";
  xx[ii++] =
    "11      OUT                                                                             ";
  xx[ii++] =
    "11      OUTSI                                                                           ";
  xx[ii++] =
    "11      EXIT                                                                            ";
  xx[ii++] =
    "11      LEAVE                                                                           ";
  xx[ii++] =
    "12      BUILD                                                                           ";
  xx[ii++] =
    "12      HOUSE                                                                           ";
  xx[ii++] =
    "13      GULLY                                                                           ";
  xx[ii++] =
    "14      STREA                                                                           ";
  xx[ii++] =
    "15      ROCK                                                                            ";
  xx[ii++] =
    "16      BED                                                                             ";
  xx[ii++] =
    "17      CRAWL                                                                           ";
  xx[ii++] =
    "18      COBBL                                                                           ";
  xx[ii++] =
    "19      INWAR                                                                           ";
  xx[ii++] =
    "19      INSID                                                                           ";
  xx[ii++] =
    "19      IN                                                                              ";
  xx[ii++] =
    "20      SURFA                                                                           ";
  xx[ii++] =
    "21      NULL                                                                            ";
  xx[ii++] =
    "21      NOWHE                                                                           ";
  xx[ii++] =
    "22      DARK                                                                            ";
  xx[ii++] =
    "23      PASSA                                                                           ";
  xx[ii++] =
    "23      TUNNE                                                                           ";
  xx[ii++] =
    "24      LOW                                                                             ";
  xx[ii++] =
    "25      CANYO                                                                           ";
  xx[ii++] =
    "26      AWKWA                                                                           ";
  xx[ii++] =
    "27      GIANT                                                                           ";
  xx[ii++] =
    "28      VIEW                                                                            ";
  xx[ii++] =
    "29      UPWAR                                                                           ";
  xx[ii++] =
    "29      UP                                                                              ";
  xx[ii++] =
    "29      U                                                                               ";
  xx[ii++] =
    "29      ABOVE                                                                           ";
  xx[ii++] =
    "29      ASCEN                                                                           ";
  xx[ii++] =
    "30      D                                                                               ";
  xx[ii++] =
    "30      DOWNW                                                                           ";
  xx[ii++] =
    "30      DOWN                                                                            ";
  xx[ii++] =
    "30      DESCE                                                                           ";
  xx[ii++] =
    "31      PIT                                                                             ";
  xx[ii++] =
    "32      OUTDO                                                                           ";
  xx[ii++] =
    "33      CRACK                                                                           ";
  xx[ii++] =
    "34      STEPS                                                                           ";
  xx[ii++] =
    "35      DOME                                                                            ";
  xx[ii++] =
    "36      LEFT                                                                            ";
  xx[ii++] =
    "37      RIGHT                                                                           ";
  xx[ii++] =
    "38      HALL                                                                            ";
  xx[ii++] =
    "39      JUMP                                                                            ";
  xx[ii++] =
    "40      BARRE                                                                           ";
  xx[ii++] =
    "41      OVER                                                                            ";
  xx[ii++] =
    "42      ACROS                                                                           ";
  xx[ii++] =
    "43      EAST                                                                            ";
  xx[ii++] =
    "43      E                                                                               ";
  xx[ii++] =
    "44      WEST                                                                            ";
  xx[ii++] =
    "44      W                                                                               ";
  xx[ii++] =
    "45      NORTH                                                                           ";
  xx[ii++] =
    "45      N                                                                               ";
  xx[ii++] =
    "46      SOUTH                                                                           ";
  xx[ii++] =
    "46      S                                                                               ";
  xx[ii++] =
    "47      NE                                                                              ";
  xx[ii++] =
    "48      SE                                                                              ";
  xx[ii++] =
    "49      SW                                                                              ";
  xx[ii++] =
    "50      NW                                                                              ";
  xx[ii++] =
    "51      DEBRI                                                                           ";
  xx[ii++] =
    "52      HOLE                                                                            ";
  xx[ii++] =
    "53      WALL                                                                            ";
  xx[ii++] =
    "54      BROKE                                                                           ";
  xx[ii++] =
    "55      Y2                                                                              ";
  xx[ii++] =
    "56      CLIMB                                                                           ";
  xx[ii++] =
    "57      LOOK                                                                            ";
  xx[ii++] =
    "57      EXAMI                                                                           ";
  xx[ii++] =
    "57      TOUCH                                                                           ";
  xx[ii++] =
    "57      DESCR                                                                           ";
  xx[ii++] =
    "58      FLOOR                                                                           ";
  xx[ii++] =
    "59      ROOM                                                                            ";
  xx[ii++] =
    "60      SLIT                                                                            ";
  xx[ii++] =
    "61      SLAB                                                                            ";
  xx[ii++] =
    "61      SLABR                                                                           ";
  xx[ii++] =
    "62      XYZZY                                                                           ";
  xx[ii++] =
    "63      DEPRE                                                                           ";
  xx[ii++] =
    "64      ENTRA                                                                           ";
  xx[ii++] =
    "65      PLUGH                                                                           ";
  xx[ii++] =
    "66      SECRE                                                                           ";
  xx[ii++] =
    "67      CAVE                                                                            ";
  xx[ii++] =
    "69      CROSS                                                                           ";
  xx[ii++] =
    "70      BEDQU                                                                           ";
  xx[ii++] =
    "71      PLOVE                                                                           ";
  xx[ii++] =
    "72      ORIEN                                                                           ";
  xx[ii++] =
    "73      CAVER                                                                           ";
  xx[ii++] =
    "74      SHELL                                                                           ";
  xx[ii++] =
    "75      RESER                                                                           ";
  xx[ii++] =
    "76      MAIN                                                                            ";
  xx[ii++] =
    "76      OFFIC                                                                           ";
  xx[ii++] =
    "77      FORK                                                                            ";

  //         Objects:
  xx[ii++] =
    "1001    KEYS                                                                            ";
  xx[ii++] =
    "1001    KEY                                                                             ";
  xx[ii++] =
    "1002    LAMP                                                                            ";
  xx[ii++] =
    "1002    HEADL                                                                           ";
  xx[ii++] =
    "1002    LANTE                                                                           ";
  xx[ii++] =
    "1003    GRATE                                                                           ";
  xx[ii++] =
    "1004    CAGE                                                                            ";
  xx[ii++] =
    "1005    ROD                                                                             ";
  xx[ii++] =
    '1006    ROD     (MUST BE NEXT OBJECT AFTER "REAL" ROD)                                  ';
  xx[ii++] =
    "1007    STEPS                                                                           ";
  xx[ii++] =
    "1008    BIRD                                                                            ";
  xx[ii++] =
    "1009    DOOR                                                                            ";
  xx[ii++] =
    "1010    PILLO                                                                           ";
  xx[ii++] =
    "1010    VELVE                                                                           ";
  xx[ii++] =
    "1011    SNAKE                                                                           ";
  xx[ii++] =
    "1012    FISSU                                                                           ";
  xx[ii++] =
    "1013    TABLE                                                                           ";
  xx[ii++] =
    "1014    CLAM                                                                            ";
  xx[ii++] =
    "1015    OYSTE                                                                           ";
  xx[ii++] =
    "1016    MAGAZ                                                                           ";
  xx[ii++] =
    "1016    ISSUE                                                                           ";
  xx[ii++] =
    "1016    SPELU                                                                           ";
  xx[ii++] =
    '1016    "SPEL                                                                           ';
  xx[ii++] =
    "1017    DWARF                                                                           ";
  xx[ii++] =
    "1017    DWARV                                                                           ";
  xx[ii++] =
    "1018    KNIFE                                                                           ";
  xx[ii++] =
    "1018    KNIVE                                                                           ";
  xx[ii++] =
    "1019    FOOD                                                                            ";
  xx[ii++] =
    "1019    RATIO                                                                           ";
  xx[ii++] =
    "1020    BOTTL                                                                           ";
  xx[ii++] =
    "1020    JAR                                                                             ";
  xx[ii++] =
    "1021    WATER                                                                           ";
  xx[ii++] =
    "1021    H2O                                                                             ";
  xx[ii++] =
    "1022    OIL                                                                             ";
  xx[ii++] =
    "1023    MIRRO                                                                           ";
  xx[ii++] =
    "1024    PLANT                                                                           ";
  xx[ii++] =
    "1024    BEANS                                                                           ";
  xx[ii++] =
    '1025    PLANT   (MUST BE NEXT OBJECT AFTER "REAL" PLANT)                                ';
  xx[ii++] =
    "1026    STALA                                                                           ";
  xx[ii++] =
    "1027    SHADO                                                                           ";
  xx[ii++] =
    "1027    FIGUR                                                                           ";
  xx[ii++] =
    "1028    AXE                                                                             ";
  xx[ii++] =
    "1029    DRAWI                                                                           ";
  xx[ii++] =
    "1030    PIRAT                                                                           ";
  xx[ii++] =
    "1031    DRAGO                                                                           ";
  xx[ii++] =
    "1032    CHASM                                                                           ";
  xx[ii++] =
    "1033    TROLL                                                                           ";
  xx[ii++] =
    '1034    TROLL   (MUST BE NEXT OBJECT AFTER "REAL" TROLL)                                ';
  xx[ii++] =
    "1035    BEAR                                                                            ";
  xx[ii++] =
    "1036    MESSA                                                                           ";
  xx[ii++] =
    "1036    BOARD                                                                           ";
  xx[ii++] =
    "1037    VOLCA                                                                           ";
  xx[ii++] =
    "1037    GEYSE   (SAME AS VOLCANO)                                                       ";
  xx[ii++] =
    "1038    MACHI                                                                           ";
  xx[ii++] =
    "1038    VENDI                                                                           ";
  xx[ii++] =
    "1039    BATTE                                                                           ";
  xx[ii++] =
    "1040    CARPE                                                                           ";
  xx[ii++] =
    "1040    MOSS                                                                            ";
  xx[ii++] =
    "1041    WELL                                                                            ";
  xx[ii++] =
    "1042    CORK                                                                            ";
  xx[ii++] =
    "1042    PLUG                                                                            ";
  xx[ii++] =
    "1043    CORKS                                                                           ";
  xx[ii++] =
    "1044    RESER                                                                           ";
  xx[ii++] =
    "1045    PLAQU                                                                           ";
  xx[ii++] =
    "1046    GROTT                                                                           ";
  xx[ii++] =
    "1047    WORM                                                                            ";
  xx[ii++] =
    "1047    GLOWW                                                                           ";
  xx[ii++] =
    "1048    STAND                                                                           ";
  xx[ii++] =
    "1048    RACK                                                                            ";
  xx[ii++] =
    "1049    LEAF                                                                            ";
  xx[ii++] =
    "1050    ARCHW                                                                           ";
  xx[ii++] =
    "1051    GIANT                                                                           ";
  xx[ii++] =
    "1052    RABBI                                                                           ";
  xx[ii++] =
    "1052    BUNNY                                                                           ";
  xx[ii++] =
    "1053    WEB                                                                             ";
  xx[ii++] =
    "1053    WEBS                                                                            ";
  xx[ii++] =
    "1054    POLE                                                                            ";
  xx[ii++] =
    "1055    RIFT                                                                            ";
  xx[ii++] =
    "1056    SHOVE                                                                           ";
  xx[ii++] =
    "1057    PEBBL                                                                           ";
  xx[ii++] =
    "1058    PEDES                                                                           ";
  xx[ii++] =
    "1059    CHIT1                                                                           ";
  xx[ii++] =
    "1060    CHIT2                                                                           ";
  xx[ii++] =
    "1061    BEETL                                                                           ";
  xx[ii++] =
    "1062    TRENC                                                                           ";
  xx[ii++] =
    "1063    SIGN                                                                            ";
  xx[ii++] =
    "1064    FEATH                                                                           ";
  xx[ii++] =
    "1065    PEDE2                                                                           ";
  xx[ii++] =
    "1066    PDOOR                                                                           ";
  xx[ii++] =
    "1067    HOLE                                                                            ";
  xx[ii++] =
    "1068    SARCO                                                                           ";
  xx[ii++] =
    "1068    COFFI                                                                           ";
  xx[ii++] =
    "1069    SCALE                                                                           ";
  xx[ii++] =
    "1070    HEART                                                                           ";
  xx[ii++] =
    "1071    PANEL                                                                           ";
  xx[ii++] =
    "1072    PAPER                                                                           ";
  xx[ii++] =
    "1072    SCRAP                                                                           ";
  xx[ii++] =
    "1073    ARCHE                                                                           ";
  xx[ii++] =
    "1074    CAN                                                                             ";
  xx[ii++] =
    "1074    SODA                                                                            ";

  //         Treasures:
  xx[ii++] =
    "1150    GOLD                                                                            ";
  xx[ii++] =
    "1150    NUGGE                                                                           ";
  xx[ii++] =
    "1151    DIAMO                                                                           ";
  xx[ii++] =
    "1152    SILVE                                                                           ";
  xx[ii++] =
    "1152    BARS                                                                            ";
  xx[ii++] =
    "1153    JEWEL                                                                           ";
  xx[ii++] =
    "1154    COINS                                                                           ";
  xx[ii++] =
    "1155    CHEST                                                                           ";
  xx[ii++] =
    "1155    BOX                                                                             ";
  xx[ii++] =
    "1155    TREAS                                                                           ";
  xx[ii++] =
    "1156    EGGS                                                                            ";
  xx[ii++] =
    "1156    EGG                                                                             ";
  xx[ii++] =
    "1156    NEST                                                                            ";
  xx[ii++] =
    "1157    TRIDE                                                                           ";
  xx[ii++] =
    "1158    VASE                                                                            ";
  xx[ii++] =
    "1158    MING                                                                            ";
  xx[ii++] =
    "1158    SHARD                                                                           ";
  xx[ii++] =
    "1158    POTTE                                                                           ";
  xx[ii++] =
    "1159    EMERA                                                                           ";
  xx[ii++] =
    "1160    PLATI                                                                           ";
  xx[ii++] =
    "1160    PYRAM                                                                           ";
  xx[ii++] =
    "1161    PEARL                                                                           ";
  xx[ii++] =
    "1162    RUG                                                                             ";
  xx[ii++] =
    "1162    PERSI                                                                           ";
  xx[ii++] =
    "1163    SPICE                                                                           ";
  xx[ii++] =
    "1164    CHAIN                                                                           ";
  xx[ii++] =
    "1165    DUCK                                                                            ";
  xx[ii++] =
    "1166    JADE                                                                            ";
  xx[ii++] =
    "1166    DAGGE                                                                           ";
  xx[ii++] =
    "1167    RUBY                                                                            ";
  xx[ii++] =
    "1167    STAR                                                                            ";
  xx[ii++] =
    "1167    SIRIU                                                                           ";
  xx[ii++] =
    "1168    HARP                                                                            ";
  xx[ii++] =
    "1169    NECKL                                                                           ";
  xx[ii++] =
    "1170    RING                                                                            ";
  xx[ii++] =
    "1171    SCARA                                                                           ";
  xx[ii++] =
    "1172    MASK                                                                            ";
  xx[ii++] =
    "1172    DEATH                                                                           ";
  xx[ii++] =
    "1173    TEAPO                                                                           ";
  xx[ii++] =
    "1174    BROOC                                                                           ";
  xx[ii++] =
    "1175    OPAL                                                                            ";

  //         Verbs:
  xx[ii++] =
    "2001    CARRY                                                                           ";
  xx[ii++] =
    "2001    TAKE                                                                            ";
  xx[ii++] =
    "2001    KEEP                                                                            ";
  xx[ii++] =
    "2001    CATCH                                                                           ";
  xx[ii++] =
    "2001    STEAL                                                                           ";
  xx[ii++] =
    "2001    CAPTU                                                                           ";
  xx[ii++] =
    "2001    GET                                                                             ";
  xx[ii++] =
    "2001    TOTE                                                                            ";
  xx[ii++] =
    "2002    DROP                                                                            ";
  xx[ii++] =
    "2002    RELEA                                                                           ";
  xx[ii++] =
    "2002    FREE                                                                            ";
  xx[ii++] =
    "2002    DISCA                                                                           ";
  xx[ii++] =
    "2002    DUMP                                                                            ";
  xx[ii++] =
    "2003    SAY                                                                             ";
  xx[ii++] =
    "2003    CHANT                                                                           ";
  xx[ii++] =
    "2003    SING                                                                            ";
  xx[ii++] =
    "2003    UTTER                                                                           ";
  xx[ii++] =
    "2003    MUMBL                                                                           ";
  xx[ii++] =
    "2004    UNLOC                                                                           ";
  xx[ii++] =
    "2004    OPEN                                                                            ";
  xx[ii++] =
    "2005    NOTHI                                                                           ";
  xx[ii++] =
    "2006    LOCK                                                                            ";
  xx[ii++] =
    "2006    CLOSE                                                                           ";
  xx[ii++] =
    "2007    LIGHT                                                                           ";
  xx[ii++] =
    "2007    ON                                                                              ";
  xx[ii++] =
    "2008    EXTIN                                                                           ";
  xx[ii++] =
    "2008    OFF                                                                             ";
  xx[ii++] =
    "2009    WAVE                                                                            ";
  xx[ii++] =
    "2009    SHAKE                                                                           ";
  xx[ii++] =
    "2009    SWING                                                                           ";
  xx[ii++] =
    "2010    CALM                                                                            ";
  xx[ii++] =
    "2010    PLACA                                                                           ";
  xx[ii++] =
    "2010    TAME                                                                            ";
  xx[ii++] =
    "2011    WALK                                                                            ";
  xx[ii++] =
    "2011    RUN                                                                             ";
  xx[ii++] =
    "2011    TRAVE                                                                           ";
  xx[ii++] =
    "2011    GO                                                                              ";
  xx[ii++] =
    "2011    PROCE                                                                           ";
  xx[ii++] =
    "2011    CONTI                                                                           ";
  xx[ii++] =
    "2011    EXPLO                                                                           ";
  xx[ii++] =
    "2011    GOTO                                                                            ";
  xx[ii++] =
    "2011    FOLLO                                                                           ";
  xx[ii++] =
    "2012    ATTAC                                                                           ";
  xx[ii++] =
    "2012    KILL                                                                            ";
  xx[ii++] =
    "2012    FIGHT                                                                           ";
  xx[ii++] =
    "2012    HIT                                                                             ";
  xx[ii++] =
    "2012    STRIK                                                                           ";
  xx[ii++] =
    "2013    POUR                                                                            ";
  xx[ii++] =
    "2014    EAT                                                                             ";
  xx[ii++] =
    "2014    DEVOU                                                                           ";
  xx[ii++] =
    "2015    DRINK                                                                           ";
  xx[ii++] =
    "2016    RUB                                                                             ";
  xx[ii++] =
    "2017    THROW                                                                           ";
  xx[ii++] =
    "2017    TOSS                                                                            ";
  xx[ii++] =
    "2018    QUIT                                                                            ";
  xx[ii++] =
    "2019    FIND                                                                            ";
  xx[ii++] =
    "2019    WHERE                                                                           ";
  xx[ii++] =
    "2020    INVEN                                                                           ";
  xx[ii++] =
    "2021    FEED                                                                            ";
  xx[ii++] =
    "2022    FILL                                                                            ";
  xx[ii++] =
    "2023    BLAST                                                                           ";
  xx[ii++] =
    "2023    DETON                                                                           ";
  xx[ii++] =
    "2023    IGNIT                                                                           ";
  xx[ii++] =
    "2023    BLOWU                                                                           ";
  xx[ii++] =
    "2024    SCORE                                                                           ";
  xx[ii++] =
    "2025    FEE                                                                             ";
  xx[ii++] =
    "2025    FIE                                                                             ";
  xx[ii++] =
    "2025    FOE                                                                             ";
  xx[ii++] =
    "2025    FOO                                                                             ";
  xx[ii++] =
    "2025    FUM                                                                             ";
  xx[ii++] =
    "2026    BRIEF                                                                           ";
  xx[ii++] =
    "2027    READ                                                                            ";
  xx[ii++] =
    "2027    PERUS                                                                           ";
  xx[ii++] =
    "2028    BREAK                                                                           ";
  xx[ii++] =
    "2028    SHATT                                                                           ";
  xx[ii++] =
    "2028    SMASH                                                                           ";
  xx[ii++] =
    "2029    WAKE                                                                            ";
  xx[ii++] =
    "2029    DISTU                                                                           ";
  xx[ii++] =
    "2030    SUSPE                                                                           ";
  xx[ii++] =
    "2030    PAUSE                                                                           ";
  xx[ii++] =
    "2030    SAVE                                                                            ";
  xx[ii++] =
    "2031    HOURS                                                                           ";
  xx[ii++] =
    "2032    LOG                                                                             ";
  xx[ii++] =
    "2033    DIG                                                                             ";
  xx[ii++] =
    "2033    EXCAV                                                                           ";
  xx[ii++] =
    "2034    TURN                                                                            ";
  xx[ii++] =
    "2035    INSTR                                                                           ";
  xx[ii++] =
    "2036    WHACK                                                                           ";
  xx[ii++] =
    "2037    PUSH                                                                            ";
  xx[ii++] =
    "2038    MELLO                                                                           ";

  xx[ii++] =
    "3001    FEE                                                                             ";
  xx[ii++] =
    "3002    FIE                                                                             ";
  xx[ii++] =
    "3003    FOE                                                                             ";
  xx[ii++] =
    "3004    FOO                                                                             ";
  xx[ii++] =
    "3005    FUM                                                                             ";
  xx[ii++] =
    "3050    SESAM                                                                           ";
  xx[ii++] =
    "3050    OPENS                                                                           ";
  xx[ii++] =
    "3050    ABRA                                                                            ";
  xx[ii++] =
    "3050    ABRAC                                                                           ";
  xx[ii++] =
    "3050    SHAZA                                                                           ";
  xx[ii++] =
    "3050    HOCUS                                                                           ";
  xx[ii++] =
    "3050    POCUS                                                                           ";
  xx[ii++] =
    "3051    HELP                                                                            ";
  xx[ii++] =
    "3051    ?                                                                               ";
  xx[ii++] =
    "3064    TREE                                                                            ";
  xx[ii++] =
    "3064    TREES                                                                           ";
  xx[ii++] =
    "3068    LOST                                                                            ";
  xx[ii++] =
    "3069    MIST                                                                            ";
  xx[ii++] =
    "3079    FUCK                                                                            ";
  xx[ii++] =
    "3139    STOP                                                                            ";
  xx[ii++] =
    "3142    INFO                                                                            ";
  xx[ii++] =
    "3142    INFOR                                                                           ";
  xx[ii++] =
    "3147    SWIM                                                                            ";
  xx[ii++] =
    "-1                                                                                      ";

  // ptext[] array
  xx[ii++] =
    "5                                                                                       ";
  xx[ii++] =
    "1       Set of keys                                                                     ";
  xx[ii++] =
    "0000    There are some keys on the ground here.                                         ";
  xx[ii++] =
    "2       Brass lantern                                                                   ";
  xx[ii++] =
    "0000    There is a shiny brass lamp nearby.                                             ";
  xx[ii++] =
    "0100    There is a lamp shining nearby.                                                 ";
  xx[ii++] =
    "3       *grate                                                                          ";
  xx[ii++] =
    "0000    The grate is locked.                                                            ";
  xx[ii++] =
    "0100    The grate is open.                                                              ";
  xx[ii++] =
    "4       Wicker cage                                                                     ";
  xx[ii++] =
    "0000    There is a small wicker cage discarded nearby.                                  ";
  xx[ii++] =
    "5       Black rod                                                                       ";
  xx[ii++] =
    "0000    A three foot black rod with a rusty star on an end lies nearby.                 ";
  xx[ii++] =
    "6       Black rod                                                                       ";
  xx[ii++] =
    "0000    A three foot black rod with a rusty mark on an end lies nearby.                 ";
  xx[ii++] =
    "7       *steps                                                                          ";
  xx[ii++] =
    "0000    Rough stone steps lead down the pit.                                            ";
  xx[ii++] =
    "0100    Rough stone steps lead up the dome.                                             ";
  xx[ii++] =
    "8       Little bird in cage                                                             ";
  xx[ii++] =
    "0000    A cheerful little bird is sitting here singing.                                 ";
  xx[ii++] =
    "0100    There is a little bird in the cage.                                             ";
  xx[ii++] =
    "9       *rusty door                                                                     ";
  xx[ii++] =
    "0000    The way north is barred by a massive, rusty, iron door.                         ";
  xx[ii++] =
    "0100    The way north leads through a massive, rusty, iron door.                        ";
  xx[ii++] =
    "10      Velvet pillow                                                                   ";
  xx[ii++] =
    "0000    A small velvet pillow lies on the floor.                                        ";
  xx[ii++] =
    "11      *snake                                                                          ";
  xx[ii++] =
    "0000    A huge green fierce snake bars the way!                                         ";
  xx[ii++] =
    "0100    >$<  (chased away)                                                              ";
  xx[ii++] =
    "12      *fissure                                                                        ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    A crystal bridge now spans the fissure.                                         ";
  xx[ii++] =
    "0200    The crystal bridge has vanished!                                                ";
  xx[ii++] =
    "13      *stone tablet                                                                   ";
  xx[ii++] =
    "0000    A massive stone tablet imbedded in the wall reads:                              ";
  xx[ii++] =
    '0000    "Congratulations on bringing light into the dark-room!"                         ';
  xx[ii++] =
    "14      giant clam  >grunt!<                                                            ";
  xx[ii++] =
    "0000    There is an enormous clam here with its shell tightly closed.                   ";
  xx[ii++] =
    "15      Giant oyster  >groan!<                                                          ";
  xx[ii++] =
    "0000    There is an enormous oyster here with its shell tightly closed.                 ";
  xx[ii++] =
    "0100    Interesting.  There seems to be something written on the underside of           ";
  xx[ii++] =
    "0100    the oyster.                                                                     ";
  xx[ii++] =
    '16      "Spelunker Today"                                                               ';
  xx[ii++] =
    '0000    There are a few recent issues of "Spelunker Today" magazine here.               ';
  xx[ii++] =
    "0100    >$<                                                                             ";
  xx[ii++] =
    "19      Tasty food                                                                      ";
  xx[ii++] =
    "0000    There is food here.                                                             ";
  xx[ii++] =
    "20      Small bottle                                                                    ";
  xx[ii++] =
    "0000    There is a bottle of water here.                                                ";
  xx[ii++] =
    "0100    There is an empty bottle here.                                                  ";
  xx[ii++] =
    "0200    There is a bottle of oil here.                                                  ";
  xx[ii++] =
    "21      Water in the bottle                                                             ";
  xx[ii++] =
    "22      Oil in the bottle                                                               ";
  xx[ii++] =
    "23      *mirror                                                                         ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "24      *plant                                                                          ";
  xx[ii++] =
    '0000    There is a tiny little plant in the pit, murmuring "water, water, ..."          ';
  xx[ii++] =
    "0100    The plant spurts into furious growth for a few seconds.                         ";
  xx[ii++] =
    "0200    There is a 12-foot-tall beanstalk stretching up out of the pit,                 ";
  xx[ii++] =
    '0200    bellowing "Water!! Water!!"                                                     ';
  xx[ii++] =
    "0300    The plant grows explosively, almost filling the bottom of the pit.              ";
  xx[ii++] =
    "0400    There is a gigantic beanstalk stretching all the way up to the hole.            ";
  xx[ii++] =
    "0500    You've over-watered the plant!  It's shriveling up!  It's, it's...              ";
  xx[ii++] =
    "25      *phony plant (seen in twopit room only when tall enough)                        ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    The top of a 12-foot-tall beanstalk is poking out of the west pit.              ";
  xx[ii++] =
    "0200    There is a huge beanstalk growing out of the west pit up to the hole.           ";
  xx[ii++] =
    "26      *stalactite                                                                     ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "27      *shadowy figure                                                                 ";
  xx[ii++] =
    "0000    The shadowy figure seems to be trying to attract your attention.                ";
  xx[ii++] =
    "28      Dwarf's axe                                                                     ";
  xx[ii++] =
    "0000    There is a little axe here.                                                     ";
  xx[ii++] =
    "0100    There is a little axe lying beside the bear.                                    ";
  xx[ii++] =
    "29      *cave drawings                                                                  ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "30      *pirate                                                                         ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "31      *dragon                                                                         ";
  xx[ii++] =
    "0000    A huge green fierce dragon bars the way!                                        ";
  xx[ii++] =
    "0100    Congratulations!  You have just vanquished a dragon with your bare              ";
  xx[ii++] =
    "0100    hands!  (Unbelievable, isn't it?)                                               ";
  xx[ii++] =
    "0200    The body of a huge green dead dragon is lying off to one side.                  ";
  xx[ii++] =
    "32      *chasm                                                                          ";
  xx[ii++] =
    "0000    A rickety wooden bridge extends across the chasm, vanishing into the            ";
  xx[ii++] =
    '0000    mist.  A sign posted on the bridge reads, "STOP! Pay troll!"                    ';
  xx[ii++] =
    "0100    the wreckage of a bridge (and a dead bear) can be seen at the bottom            ";
  xx[ii++] =
    "0100    of the chasm.                                                                   ";
  xx[ii++] =
    "33      *troll                                                                          ";
  xx[ii++] =
    "0000    A burly troll stands by the bridge and insists you throw him a                  ";
  xx[ii++] =
    "0000    treasure before you may cross.                                                  ";
  xx[ii++] =
    "0100    The troll steps out from beneath the bridge and blocks your way.                ";
  xx[ii++] =
    "0200    >$<  (chased away)                                                              ";
  xx[ii++] =
    "34      *phony troll                                                                    ";
  xx[ii++] =
    "0000    The troll is nowhere to be seen.                                                ";
  xx[ii++] =
    "35      >$<  (bear uses rtext 141)                                                      ";
  xx[ii++] =
    "0000    There is a ferocious cave bear eying you from the far end of the room!          ";
  xx[ii++] =
    "0100    There is a gentle cave bear sitting placidly in one corner.                     ";
  xx[ii++] =
    "0200    There is a contented-looking bear wandering about nearby.                       ";
  xx[ii++] =
    "0300    >$<  (dead)                                                                     ";
  xx[ii++] =
    "36      *message in second maze                                                         ";
  xx[ii++] =
    "0000    There is a message scrawled in the dust in a flowery script, reading:           ";
  xx[ii++] =
    '0000    "This is not the maze where the pirate leaves his treasure chest."              ';
  xx[ii++] =
    "37      *volcano and/or geyser                                                          ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "38      *vending machine                                                                ";
  xx[ii++] =
    "0000    There is a massive vending machine here.  The instructions on it read:          ";
  xx[ii++] =
    '0000    "Drop coins here to receive fresh batteries."                                   ';
  xx[ii++] =
    "39      batteries                                                                       ";
  xx[ii++] =
    "0000    There are fresh batteries here.                                                 ";
  xx[ii++] =
    "0100    Some worn-out batteries have been discarded nearby.                             ";
  xx[ii++] =
    "40     *carpet and/or moss                                                             ";
  xx[ii++] =
    "0000    >$<                                                                             ";

  xx[ii++] =
    "41      *well                                                                           ";
  xx[ii++] =
    "0000    A runged ladder runs down the inside of the empty well.                         ";
  xx[ii++] =
    "0100    Water fills the well, overflows onto the floor and exits through a pair of 1    ";
  xx[ii++] =
    "0100    foot diameter drainage pipes in the outer room.                                 ";
  xx[ii++] =
    "0200    Using the corkscrew you manage (with some effort) to extract the plug.          ";
  xx[ii++] =
    "0200    Water surges up through the hole, rapidly rising past your waist.               ";
  xx[ii++] =
    "0200    You are forced to climb out of the well as fast as you can!                     ";

  xx[ii++] =
    "42      Large cork plug                                                                 ";
  xx[ii++] =
    "0000    There is a large cork plug embedded in the stone floor.                         ";
  xx[ii++] =
    "0100    There is a large cork plug here.                                                ";

  xx[ii++] =
    "43      Corkscrew                                                                       ";
  xx[ii++] =
    "0000    Lying half-buried in the mud is a corkscrew.                                    ";
  xx[ii++] =
    "0100    There is a corkscrew here.                                                      ";

  xx[ii++] =
    "44      *reservoir                                                                      ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    The water level has lowered substantially. It should be safe to cross.          ";

  xx[ii++] =
    "46      *glowworm grotto                                                                ";
  xx[ii++] =
    "0000    The ceiling is covered in silken webs. Writhing within are many small           ";
  xx[ii++] =
    "0000    worm-like creatures.                                                            ";
  xx[ii++] =
    "0100    Without an external light source the ceiling has burst into a thousand points of";
  xx[ii++] =
    "0100    light which form an uncanny facsimile of the night sky.                         ";
  xx[ii++] =
    "0100    One exception seems to be the star Sirius which is glowing a dull red rather    ";
  xx[ii++] =
    "0100    than its customary brillliant blue-white.                                       ";
  xx[ii++] =
    "0200    The ceiling projects a remarkable starry firmament.                             ";

  xx[ii++] =
    "48      *magazine rack                                                                  ";
  xx[ii++] =
    "0000    There is an empty magazine rack standing off to one side.                       ";
  xx[ii++] =
    '0100    Off to the side is a magazine rack holding a few recent issues of "Spelunker Today" magazine.';

  xx[ii++] =
    "49      Large leaf                                                                      ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    There is large plant leaf here.                                                 ";

  xx[ii++] =
    "50      *giant's archway                                                                ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    There is a giant-sized archway set in the west wall.                            ";

  xx[ii++] =
    "52      Small white rabbit                                                              ";
  xx[ii++] =
    "0000    There is a small white rabbit sitting amidst the crystals. Hanging from the     ";
  xx[ii++] =
    "0000    rabbit's neck is a fine exquisitely wrought necklace!                           ";
  xx[ii++] =
    "0100    The rabbit sits here happily munching on the plant leaf.                        ";
  xx[ii++] =
    "0200    >$<                                                                             ";

  xx[ii++] =
    "55      *rift                                                                           ";
  xx[ii++] =
    "0000    Set in the floor is a narrow three foot channel that terminates in a       ";
  xx[ii++] =
    "0000    star-shaped impression at the edge of the rift.                                 ";
  xx[ii++] =
    "0100    There is a twenty foot pole extended over the rift.                             ";

  xx[ii++] =
    "56      Shovel                                                                          ";
  xx[ii++] =
    "0000    There is a shovel here.                                                         ";

  xx[ii++] =
    "57      *pebbles                                                                        ";
  xx[ii++] =
    "0000    The floor of the pit is covered in flat oval-shaped pebbles.                    ";
  xx[ii++] =
    "0100    The pebble-covered floor is knee-deep in water.                                 ";
  xx[ii++] =
    "0200    >$<                                                                             ";
  xx[ii++] =
    "0300    Hundreds of dead beetles float on the surface of the water.                     ";

  xx[ii++] =
    "58      *pedestal 1                                                                     ";
  xx[ii++] =
    "0000    There is a pedestal in the middle of the room. A shallow square-shaped recess   ";
  xx[ii++] =
    "0000    is cut into the pedestal top.                                                   ";
  xx[ii++] =
    "0100    There is a pedestal in the middle of the room. A shallow square-shaped recess   ";
  xx[ii++] =
    "0100    is cut into the pedestal top. A platinum pyramid is sitting in the recess!      ";

  xx[ii++] =
    "59      *chittering 1                                                                   ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    There is an ominous chittering sound coming from the east exit.                 ";

  xx[ii++] =
    "60      *chittering 2                                                                   ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    There is a disquieting chittering sound rising from the downward path.          ";

  xx[ii++] =
    "61      *beetles                                                                        ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    Hundreds of dead beetles float on the surface of the water.                     ";

  xx[ii++] =
    "62      *trench                                                                         ";
  xx[ii++] =
    "0000    An unfinished trench runs from the reservoir edge to the downward path.         ";
  xx[ii++] =
    "0100    A water-filled trench runs from the water's edge to the downward path.         ";

  xx[ii++] =
    "63      Sign                                                                            ";
  xx[ii++] =
    "0000    There is a sign lying face down on the ground.                                  ";
  xx[ii++] =
    '0100    A sign in midair here says "Cave under construction beyond this point.          ';
  xx[ii++] =
    '0100    Proceed at own risk. Witt Construction Company."                                ';

  xx[ii++] =
    "64      Feather                                                                         ";
  xx[ii++] =
    "0000    There is a small blue feather here.                                             ";
  xx[ii++] =
    "0100    >$<                                                                             ";

  xx[ii++] =
    "65      *pedestal 2                                                                     ";
  xx[ii++] =
    "0000    A pedestal very similar to the one in the outer chamber sits here.              ";
  xx[ii++] =
    "0100    A low doorway is set in the east wall.                                          ";
  xx[ii++] =
    "0100    A pedestal very similar to the one in the outer chamber sits here. Resting on the ";
  xx[ii++] =
    "0100    pedestal is a platinum pyramid!                                                 ";

  xx[ii++] =
    "66      *pyramid doorway                                                                ";
  xx[ii++] =
    "0000    Exits lead north and south.                                                     ";
  xx[ii++] =
    "0100    A low doorway is set in the west wall and exits lead north and south.           ";

  xx[ii++] =
    "67      *hole with scarab                                                               ";
  xx[ii++] =
    "0000    A patch of earth appears discolored as if recently disturbed.                   ";
  xx[ii++] =
    "0100    There is a shallow hole in the ground.                                          ";

  xx[ii++] =
    "68      *sarcophagus                                                                    ";
  xx[ii++] =
    "0000    A closed sarcophagus stands at the west end of the chamber.                     ";
  xx[ii++] =
    "0100    A sarcophagus with its lid ajar stands at the west end of the chamber.          ";
  xx[ii++] =
    "0200    A sarcophagus with its lid ajar stands at the west end of the chamber. From     ";
  xx[ii++] =
    "0200    within sparkles a golden jewel-encrusted death mask!                            ";

  xx[ii++] =
    "69      *scales                                                                         ";
  xx[ii++] =
    "0000    A large set of scales stands in the middle of the room. Resting on the lower    ";
  xx[ii++] =
    "0000    scale is what appears to be a mummified human heart. The upper scale is empty.  ";
  xx[ii++] =
    "0100    A large set of scales stands in the middle of the room. Resting on the lower    ";
  xx[ii++] =
    "0100    scale is a blue feather. The upper scale is empty.                              ";
  xx[ii++] =
    "0200    A large set of scales stands in the middle of the room. Nothing rests on either ";
  xx[ii++] =
    "0200    of the scales.                                                                  ";
  xx[ii++] =
    "0300    A large set of scales stands in the middle of the room. Resting on the upper    ";
  xx[ii++] =
    "0300    scale is what appears to be a mummified human heart. The lower scale holds a    ";
  xx[ii++] =
    "0300    blue feather.                                                                   ";

  xx[ii++] =
    "70      Mummified heart                                                                 ";
  xx[ii++] =
    "0000    There is what appears to be a mummified heart here.                             ";
  xx[ii++] =
    "0100    >$<                                                                             ";

  xx[ii++] =
    "71      *storage door panel                                                             ";
  xx[ii++] =
    "0000    To the north is a door labelled 'Storage' and a numbered security panel (you can";
  xx[ii++] =
    "0000    enter codes by typing 'PUSH 1' etc.                                             ";
  xx[ii++] =
    "0100    >$<                                                                             ";

  xx[ii++] =
    "72      Scrap of paper                                                                  ";
  xx[ii++] =
    "0000    There is a crumpled scrap of paper here.                                        ";

  xx[ii++] =
    "73      *elven wall                                                                     ";
  xx[ii++] =
    "0000    The northern wall is scored with a fine silver tracery of lines depicting a     ";
  xx[ii++] =
    "0000    further archway flanked by two slender trees.                                   ";
  xx[ii++] =
    "0100    >$<                                                                             ";

  xx[ii++] =
    "74      Soda can                                                                        ";
  xx[ii++] =
    "0000    There is a battered soda can here.                                              ";
  xx[ii++] =
    "0100    There is a battered empty soda can here.                                        ";

  xx[ii++] =
    "150     Large gold nugget                                                               ";
  xx[ii++] =
    "0000    There is a large sparkling nugget of gold here!                                 ";
  xx[ii++] =
    "151     Several diamonds                                                                ";
  xx[ii++] =
    "0000    There are diamonds here!                                                        ";
  xx[ii++] =
    "152     Bars of silver                                                                  ";
  xx[ii++] =
    "0000    There are bars of silver here!                                                  ";
  xx[ii++] =
    "153     Precious jewelry                                                                ";
  xx[ii++] =
    "0000    There is precious jewelry here!                                                 ";
  xx[ii++] =
    "154     Rare coins                                                                      ";
  xx[ii++] =
    "0000    There are many coins here!                                                      ";
  xx[ii++] =
    "155     Treasure chest                                                                  ";
  xx[ii++] =
    "0000    The pirate's treasure chest is here!                                            ";
  xx[ii++] =
    "156     Golden eggs                                                                     ";
  xx[ii++] =
    "0000    There is a large nest here, full of golden eggs!                                ";
  xx[ii++] =
    "0100    The nest of golden eggs has vanished!                                           ";
  xx[ii++] =
    "0200    Done!                                                                           ";
  xx[ii++] =
    "157     Jeweled trident                                                                 ";
  xx[ii++] =
    "0000    There is a jewel-encrusted trident here!                                        ";
  xx[ii++] =
    "158     Ming vase                                                                       ";
  xx[ii++] =
    "0000    There is a delicate, precious, ming vase here!                                  ";
  xx[ii++] =
    "0100    The vase is now resting, delicately, on a velvet pillow.                        ";
  xx[ii++] =
    "0200    The floor is littered with worthless shards of pottery.                         ";
  xx[ii++] =
    "0300    The ming vase drops with a delicate crash.                                      ";
  xx[ii++] =
    "159     Egg-sized emerald                                                               ";
  xx[ii++] =
    "0000    There is an emerald here the size of a plover's egg!                            ";
  xx[ii++] =
    "160     Platinum pyramid                                                                ";
  xx[ii++] =
    "0000    There is a platinum pyramid here, 8 inches on a side!                           ";
  xx[ii++] =
    "0100    >$<                                                                             ";
  xx[ii++] =
    "161     Glistening pearl                                                                ";
  xx[ii++] =
    "0000    Off to one side lies a glistening pearl!                                        ";
  xx[ii++] =
    "162     Persian rug                                                                     ";
  xx[ii++] =
    "0000    There is a persian rug spread out on the floor!                                 ";
  xx[ii++] =
    "0100    The dragon is sprawled out on a persian rug!!                                   ";
  xx[ii++] =
    "163     Rare spices                                                                     ";
  xx[ii++] =
    "0000    There are rare spices here!                                                     ";
  xx[ii++] =
    "164     Golden chain                                                                    ";
  xx[ii++] =
    "0000    There is a golden chain lying in a heap on the floor!                           ";
  xx[ii++] =
    "0100    The bear is locked to the wall with a golden chain!                             ";
  xx[ii++] =
    "0200    There is a golden chain locked to the wall!                                     ";

  xx[ii++] =
    "165     Rubber duck                                                                     ";
  xx[ii++] =
    "0000    In the middle of the reservoir you can make out what appears to be a small      ";
  xx[ii++] =
    "0000    yellow duck bobbing up and down on the surface.                                 ";
  xx[ii++] =
    "0100    A rubber duck with opal eyes is bobbing on the surface of the well!             ";
  xx[ii++] =
    "0200    There is a yellow rubber duck with black opal eyes here!                        ";

  xx[ii++] =
    "166     Jade dagger                                                                     ";
  xx[ii++] =
    "0000    There is an ornamental jade dagger here!                                        ";
  xx[ii++] =
    "167     star ruby                                                                       ";
  xx[ii++] =
    "0000    There is a star-shaped ruby here!                                               ";

  xx[ii++] =
    "168     Golden harp                                                                     ";
  xx[ii++] =
    "0000    There is a golden harp here!                                                    ";
  xx[ii++] =
    "0100    There is a golden harp here singing an ancient Celtic sea shanty! The words     ";
  xx[ii++] =
    "0100    reverberate around the natural amphitheater to give the impression of a full    ";
  xx[ii++] =
    "0100    singing choir.                                                                  ";
  xx[ii++] =
    "0200    >$>                                                                             ";
  xx[ii++] =
    "0300    There is a golden harp here!                                                    ";

  xx[ii++] =
    "169     Fine necklace                                                                   ";
  xx[ii++] =
    "0000    >$<                                                                             ";
  xx[ii++] =
    "0100    >$<                                                                             ";
  xx[ii++] =
    "0200    There is a finely wrought necklace here!                                        ";

  xx[ii++] =
    "170     Rose gold ring                                                                  ";
  xx[ii++] =
    "0000    There is a giant-sized rose gold ring here!                                     ";

  xx[ii++] =
    "171     Gold scarab                                                                     ";
  xx[ii++] =
    "0000    There is a golden scarab here!                                                  ";

  xx[ii++] =
    "172     Death mask                                                                      ";
  xx[ii++] =
    "0000    There is a golden bejeweled death mask here!                                    ";
  xx[ii++] =
    "0100    >$<                                                                             ";

  xx[ii++] =
    "173     Silver teapot                                                                   ";
  xx[ii++] =
    "0000    There is a silver teapot here!                                                  ";

  xx[ii++] =
    "174     Silver brooch                                                                   ";
  xx[ii++] =
    "0000    There is a brooch like a geen leaf veined in silver here!                       ";

  xx[ii++] =
    "175     Opal                                                                            ";
  xx[ii++] =
    "0000    There is a glistening opal here!                                                ";

  xx[ii++] =
    "-1                                                                                      ";

  // rtext[] array
  xx[ii++] =
    "6                                                                                       ";
  xx[ii++] =
    "1       Somewhere nearby is colossal cave, where others have found fortunes in          ";
  xx[ii++] =
    "1       treasure and gold, though it is rumored that some who enter are never           ";
  xx[ii++] =
    "1       seen again.  Magic is said to work in the cave.  I will be your eyes            ";
  xx[ii++] =
    "1       and hands.  Direct me with commands of 1 or 2 words.  I should warn             ";
  xx[ii++] =
    "1       you that I look at only the first five letters of each word, so you'll          ";
  xx[ii++] =
    '1       have to enter "northeast" as "ne" to distinguish it from "north".               ';
  xx[ii++] =
    '1       (should you get stuck, type "help" for some general hints. For infor-           ';
  xx[ii++] =
    '1       mation on how to end your adventure, etc., type "info".)                        ';
  xx[ii++] =
    "1                                     - - -                                             ";
  xx[ii++] =
    "1       This program was originally developed by Willie Crowther.  Most of the          ";
  xx[ii++] =
    "1       features of the current program were added by Don Woods (don @ su-ai).          ";
  xx[ii++] =
    "1       Contact Don if you have any questions, comments, etc.                           ";
  xx[ii++] =
    "2       A little dwarf with a big knife blocks your way.                                ";
  xx[ii++] =
    "3       A little dwarf just walked around a corner, saw you, threw a little             ";
  xx[ii++] =
    "3       axe at you which missed, cursed, and ran away.                                  ";
  xx[ii++] =
    "4       There is a threatening little dwarf in the room with you!                       ";
  xx[ii++] =
    "5       one sharp nasty knife is thrown at you!                                         ";
  xx[ii++] =
    "6       None of them hit you!                                                           ";
  xx[ii++] =
    "7       One of them gets you!                                                           ";
  xx[ii++] =
    '8       A hollow voice says "PLUGH".                                                    ';
  xx[ii++] =
    "9       There is no way to go in that direction.                                        ";
  xx[ii++] =
    "10      I am unsure how you are facing.  Use compass points or nearby objects.          ";
  xx[ii++] =
    "11      I don't know in from out here.  Use compass points or name something            ";
  xx[ii++] =
    "11      in the general direction you want to go.                                        ";
  xx[ii++] =
    "12      I don't know how to apply that word here.                                       ";
  xx[ii++] =
    "13      I don't understand that!                                                        ";
  xx[ii++] =
    "14      I'm game.  Would you care to explain how?                                       ";
  xx[ii++] =
    "15      Sorry, but I am not allowed to give more detail.  I will repeat the             ";
  xx[ii++] =
    "15      long description of your location.                                              ";
  xx[ii++] =
    "16      It is now pitch dark.  If you proceed you will likely fall into a pit.          ";
  xx[ii++] =
    "17      If you prefer, simply type w rather than west.                                  ";
  xx[ii++] =
    "18      Are you trying to catch the bird?                                               ";
  xx[ii++] =
    "19      The bird is frightened right now and you cannot catch it no matter              ";
  xx[ii++] =
    "19      what you try.  Perhaps you might try later.                                     ";
  xx[ii++] =
    "20      Are you trying to somehow deal with the snake?                                  ";
  xx[ii++] =
    "21      You can't kill the snake, or drive it away, or avoid it, or anything            ";
  xx[ii++] =
    "21      like that.  There is a way to get by, but you don't have the necessary          ";
  xx[ii++] =
    "21      resources right now.                                                            ";
  xx[ii++] =
    "22      Do you really want to quit now?                                                 ";
  xx[ii++] =
    "23      You fell into a pit and broke every bone in your body!                          ";
  xx[ii++] =
    "24      You are already carrying it!                                                    ";
  xx[ii++] =
    "25      You can't be serious!                                                           ";
  xx[ii++] =
    "26      The bird was unafraid when you entered, but as you approach it becomes          ";
  xx[ii++] =
    "26      disturbed and you cannot catch it.                                              ";
  xx[ii++] =
    "27      You can catch the bird, but you cannot carry it.                                ";
  xx[ii++] =
    "28      There is nothing here with a lock!                                              ";
  xx[ii++] =
    "29      You aren't carrying it!                                                         ";
  xx[ii++] =
    "30      The little bird attacks the green snake, and in an astounding flurry            ";
  xx[ii++] =
    "30      drives the snake away. A dislodged tail feather wafts slowly to the ground.     ";
  xx[ii++] =
    "31      You have no keys!                                                               ";
  xx[ii++] =
    "32      It has no lock.                                                                 ";
  xx[ii++] =
    "33      I don't know how to lock or unlock such a thing.                                ";
  xx[ii++] =
    "34      It was already locked.                                                          ";
  xx[ii++] =
    "35      The grate is now locked.                                                        ";
  xx[ii++] =
    "36      The grate is now unlocked.                                                      ";
  xx[ii++] =
    "37      It was already unlocked.                                                        ";
  xx[ii++] =
    "38      You have no source of light.                                                    ";
  xx[ii++] =
    "39      Your lamp is now on.                                                            ";
  xx[ii++] =
    "40      Your lamp is now off.                                                           ";
  xx[ii++] =
    "41      There is no way to get past the bear to unlock the chain, which is              ";
  xx[ii++] =
    "41      probably just as well.                                                          ";
  xx[ii++] =
    "42      Nothing happens.                                                                ";
  xx[ii++] =
    "43      Where?                                                                          ";
  xx[ii++] =
    "44      There is nothing here to attack.                                                ";
  xx[ii++] =
    "45      The little bird is now dead.  Its body disappears.                              ";
  xx[ii++] =
    "46      Attacking the snake both doesn't work and is very dangerous.                    ";
  xx[ii++] =
    "47      You killed a little dwarf.                                                      ";
  xx[ii++] =
    "48      You attack a little dwarf, but he dodges out of the way.                        ";
  xx[ii++] =
    "49      With what?  your bare hands?                                                    ";
  xx[ii++] =
    "50      Good try, but that is an old worn-out magic word.                               ";
  xx[ii++] =
    "51      I know of places, actions, and things.  Most of my vocabulary                   ";
  xx[ii++] =
    "51      describes places and is used to move you there.  To move, try words             ";
  xx[ii++] =
    "51      like forest, building, downstream, enter, east, west, north, south,             ";
  xx[ii++] =
    "51      up, or down.  I know about a few special objects, like a black rod              ";
  xx[ii++] =
    "51      hidden in the cave.  These objects can be manipulated using some of             ";
  xx[ii++] =
    "51      the action words that I know.  Usually you will need to give both the           ";
  xx[ii++] =
    "51      object and action words (in either order), but sometimes I can infer            ";
  xx[ii++] =
    "51      the object from the verb alone.  Some objects also imply verbs; in              ";
  xx[ii++] =
    '51      particular, "inventory" implies "take inventory", which causes me to            ';
  xx[ii++] =
    "51      give you a list of what you're carrying.  The objects have side                 ";
  xx[ii++] =
    "51      effects; for instance, the rod scares the bird.  Usually people having          ";
  xx[ii++] =
    "51      trouble moving just need to try a few more words.  Usually people               ";
  xx[ii++] =
    "51      trying unsuccessfully to manipulate an object are attempting something          ";
  xx[ii++] =
    "51      beyond their (or my!) capabilities and should try a completely                  ";
  xx[ii++] =
    "51      different tack.  To speed the game you can sometimes move long                  ";
  xx[ii++] =
    '51      distances with a single word.  For example, "building" usually gets             ';
  xx[ii++] =
    "51      you to the building from anywhere above ground except when lost in the          ";
  xx[ii++] =
    "51      forest.  Also, note that cave passages turn a lot, and that leaving a           ";
  xx[ii++] =
    "51      room to the north does not guarantee entering the next from the south.          ";
  xx[ii++] =
    "51      Good luck!                                                                      ";
  xx[ii++] =
    "52      It misses!                                                                      ";
  xx[ii++] =
    "53      It gets you!                                                                    ";
  xx[ii++] =
    "54      OK                                                                              ";
  xx[ii++] =
    "55      You can't unlock the keys.                                                      ";
  xx[ii++] =
    "56      You have crawled around in some little holes and wound up back in the           ";
  xx[ii++] =
    "56      main passage.                                                                   ";
  xx[ii++] =
    "57      I don't know where the cave is, but hereabouts no stream can run on             ";
  xx[ii++] =
    "57      the surface for long.  I would try the stream.                                  ";
  xx[ii++] =
    "58      I need more detailed instructions to do that.                                   ";
  xx[ii++] =
    "59      I can only tell you what you see as you move about and manipulate               ";
  xx[ii++] =
    "59      things.  I cannot tell you where remote things are.                             ";
  xx[ii++] =
    "60      I don't know that word.                                                         ";
  xx[ii++] =
    "61      What?                                                                           ";
  xx[ii++] =
    "62      Are you trying to get into the cave?                                            ";
  xx[ii++] =
    "63      The grate is very solid and has a hardened steel lock.  You cannot              ";
  xx[ii++] =
    "63      enter without a key, and there are no keys nearby.  I would recommend           ";
  xx[ii++] =
    "63      looking elsewhere for the keys.                                                 ";
  xx[ii++] =
    "64      The trees of the forest are large hardwood oak and maple, with an               ";
  xx[ii++] =
    "64      occasional grove of pine or spruce.  There is quite a bit of under-             ";
  xx[ii++] =
    "64      growth, largely birch and ash saplings plus nondescript bushes of               ";
  xx[ii++] =
    "64      various sorts.  This time of year visibility is quite restricted by             ";
  xx[ii++] =
    "64      all the leaves, but travel is quite easy if you detour around the               ";
  xx[ii++] =
    "64      spruce and berry bushes.                                                        ";
  xx[ii++] =
    "65      Welcome to Adventure 570!! 어드벤처 570에 오신 것을 환영합니다!!                                                      ";
  xx[ii++] =
    "65                                                                                      ";
  xx[ii++] =
    "65      Type 'instr' for instructions. 지침을 보려면 'instr'를 입력하세요.         ";
  xx[ii++] =
    "66      Digging without a shovel is quite impractical.  Even with a shovel              ";
  xx[ii++] =
    "66      progress is unlikely.                                                           ";
  xx[ii++] =
    "67      Blasting requires dynamite.                                                     ";
  xx[ii++] =
    "68      I'm as confused as you are.                                                     ";
  xx[ii++] =
    "69      Mist is a white vapor, usually water, seen from time to time in                 ";
  xx[ii++] =
    "69      caverns.  It can be found anywhere but is frequently a sign of a deep           ";
  xx[ii++] =
    "69      pit leading down to water.                                                      ";
  xx[ii++] =
    "70      Your feet are now wet.                                                          ";
  xx[ii++] =
    "71      I think I just lost my appetite.                                                ";
  xx[ii++] =
    "72      Thank you, it was delicious!                                                    ";
  xx[ii++] =
    "73      You have taken a drink from the stream.  The water tastes strongly of           ";
  xx[ii++] =
    "73      minerals, but is not unpleasant.  It is extremely cold.                         ";
  xx[ii++] =
    "74      The bottle of water is now empty.                                               ";
  xx[ii++] =
    "75      Rubbing the electric lamp is not particularly rewarding.  Anyway,               ";
  xx[ii++] =
    "75      nothing exciting happens.                                                       ";
  xx[ii++] =
    "76      Peculiar.  Nothing unexpected happens.                                          ";
  xx[ii++] =
    "77      Your bottle is empty and the ground is wet.                                     ";
  xx[ii++] =
    "78      You can't pour that.                                                            ";
  xx[ii++] =
    "79      Watch it!                                                                       ";
  xx[ii++] =
    "80      Which way?                                                                      ";
  xx[ii++] =
    "81      Oh dear, you seem to have gotten yourself killed.  I might be able to           ";
  xx[ii++] =
    "81      help you out, but I've never really done this before.  Do you want me           ";
  xx[ii++] =
    "81      to try to reincarnate you?                                                      ";
  xx[ii++] =
    "82      All right.  But don't blame me if something goes wr......                       ";
  xx[ii++] =
    "82                          --- POOF!! ---                                              ";
  xx[ii++] =
    "82      You are engulfed in a cloud of orange smoke.  Coughing and gasping,             ";
  xx[ii++] =
    "82      you emerge from the smoke and find....                                          ";
  xx[ii++] =
    "83      You clumsy oaf, you've done it again!  I don't know how long I can              ";
  xx[ii++] =
    "83      keep this up.  Do you want me to try reincarnating you again?                   ";
  xx[ii++] =
    "84      Okay, now where did I put my orange smoke?....  >POOF!<                         ";
  xx[ii++] =
    "84      Everything disappears in a dense cloud of orange smoke.                         ";
  xx[ii++] =
    "85      Now you've really done it!  I'm out of orange smoke!  You don't expect          ";
  xx[ii++] =
    "85      me to do a decent reincarnation without any orange smoke, do you?               ";
  xx[ii++] =
    "86      okay, if you're so smart, do it yourself!  I'm leaving!                         ";
  xx[ii++] =
    '90      >>> messages 81 thru 90 are reserved for "obituaries". <<<                      ';
  xx[ii++] =
    "91      Sorry, but I no longer seem to remember how it was you got here.                ";
  xx[ii++] =
    "92      You can't carry anything more.  You'll have to drop something first.            ";
  xx[ii++] =
    "93      You can't go through a locked steel grate!                                      ";
  xx[ii++] =
    "94      I believe what you want is right here with you.                                 ";
  xx[ii++] =
    "95      You don't fit through a two-inch slit!                                          ";
  xx[ii++] =
    "96      I respectfully suggest you go across the bridge instead of jumping.             ";
  xx[ii++] =
    "97      There is no way across the fissure.                                             ";
  xx[ii++] =
    "98      You're not carrying anything.                                                   ";
  xx[ii++] =
    "99      You are currently holding the following:                                        ";
  xx[ii++] =
    "100     It's not hungry (it's merely pinin' for the fjords).  Besides, you              ";
  xx[ii++] =
    "100     have no bird seed.                                                              ";
    xx[ii++] =
    "1       어딘가 가까이에는 거대한 동굴인 콜로설 케이브가 있습니다. 다른 사람들은 이곳에서 재물과 금을 발견했지만, 들어가고 나서 돌아오지 않는 사람들도 있다고 전해집니다. 마법은 동굴에서 작동한다고 합니다. 저는 당신의 눈과 손이 될 것입니다. 1 또는 2 단어로 명령을 내려주세요. 먼저 5글자만 보기 때문에 "북동"을 "북"과 구별하기 위해 "북동"으로 입력해야 합니다.';
  xx[ii++] =
    '1       (꼼짝 말고 막힌 상태에 빠지면 "도움말"이라고 입력하면 일반적인 힌트를 얻을 수 있습니다. 모험을 끝내는 방법 등에 대한 정보는 "정보"라고 입력하세요.)";
  xx[ii++] =
    "1                                     - - -                                             ";
  xx[ii++] =
    "1       이 프로그램은 Willie Crowther가 원래 개발했습니다. 현재 프로그램의 대부분은 Don Woods가 추가했습니다. (don @ su-ai에 문의하면 질문이나 의견 등을 할 수 있습니다.)";
  xx[ii++] =
    "2       작은 난쟁이가 큰 칼을 들고 당신의 길을 막고 있습니다.                                ";
  xx[ii++] =
    "3       작은 난쟁이가 방금 모퉁이를 돌아가다가 당신을 보고 작은 도끼를 던졌지만 놓쳤습니다.욕을 하고 도망갔습니다. ";
  xx[ii++] =
    "4       위협적인 작은 난쟁이가 당신과 함께 있는 방 안에 있습니다!                       ";
  xx[ii++] =
    "5       하나의 날카로운 나쁜 칼이 당신에게 던져집니다!                                         ";
  xx[ii++] =
    "6       아무도 당신을 맞히지 않았습니다!                                                           ";
  xx[ii++] =
    "7       그들 중 한 명이 당신에게 닿습니다!                                                           ";
  xx[ii++] =
    '8       한쪽에서 "PLUGH"라고 빈칸이 들립니다.                                                    ';
  xx[ii++] =
    "9       그 방향으로 이동할 수 있는 방법이 없습니다.                                        ";
  xx[ii++] =
    "10      어느 방향을 향하고 있는지 잘 모르겠습니다. 나침반 방향이나 근처의 물체를 사용하세요.     ";
  xx[ii++] =
    "11      어디에서 들어왔는지 모르겠습니다. 나침반 방향이나 가고자 하는 방향에 해당하는 것을 이름으로 지정하세요. ";
  xx[ii++] =
    "12      그 단어를 여기에 적용하는 방법을 모릅니다.                                       ";
  xx[ii++] =
    "13      그건 이해하지 못합니다!                                                        ";
  xx[ii++] =
    "14      좋아요. 설명해 줄 수 있을까요?                                                 ";
  xx[ii++] =
    "15      죄송하지만 더 자세한 정보를 제공할 수 없습니다. 위치의 상세한 설명을 다시 할 것입니다. ";
  xx[ii++] =
    "16      이제 어두워졌습니다. 앞으로 나아가면 큰 구덩이에 떨어질 가능성이 있습니다.                       ";
  xx[ii++] =
    "17      당신은 그냥 w 대신 서쪽을 입력할 수 있습니다.                                       ";
  xx[ii++] =
    "18      새를 잡으려고 하는 건가요?                                                       ";
  xx[ii++] =
    "19      새가 지금 겁먹고 있어서 아무리 노력해도 잡을 수 없습니다. 나중에 다시 시도해 보세요.       ";
  xx[ii++] =
    "20      뱀과 어떻게 대처하려고 하시는 건가요?                                                ";
  xx[ii++] =
    "21      뱀을 죽일 수도, 몰아낼 수도, 피할 수도 없습니다. 하지만 지금은 필요한 자원이 없습니다.    ";
  xx[ii++] =
    "22      지금 그만두고 싶으세요?                                                        ";
  xx[ii++] =
    "23      당신은 구덩이에 떨어져 모든 뼈가 부러졌습니다!                                       ";
  xx[ii++] =
    "24      이미 그것을 가지고 있습니다!                                                     ";
  xx[ii++] =
    "25      진지해요!                                                                      ";
  xx[ii++] =
    "26      새는 당신이 들어올 때는 겁을 먹지 않았지만, 가까이 다가가니 불안해지고 잡을 수 없습니다. ";
  xx[ii++] =
    "27      새를 잡을 수는 있지만, 옮길 수는 없습니다.                                       ";
  xx[ii++] =
    "28      여기에는 자물쇠가 없습니다!                                                     ";
  xx[ii++] =
    "29      그걸 가지고 있지 않습니다!                                                     ";
  xx[ii++] =
    "30      작은 새가 녹색 뱀을 공격해서 경이로운 맹렬함으로 뱀을 쫓아냈습니다. 떨어진 꼬리깃털이 천천히 땅으로 떨어집니다. ";
  xx[ii++] =
    "31      열쇠가 없습니다!                                                               ";
  xx[ii++] =
    "32      자물쇠가 없습니다.                                                             ";
  xx[ii++] =
    "33      그런 것을 잠그거나 열 수 있는 방법을 모릅니다.                                   ";
  xx[ii++] =
    "34      이미 잠겨 있었습니다.                                                           ";
  xx[ii++] =
    "35      그레이트가 잠겨 있습니다.                                                       ";
  xx[ii++] =
    "36      그레이트가 열렸습니다.                                                          ";
  xx[ii++] =
    "37      이미 열려 있었습니다.                                                           ";
  xx[ii++] =
    "38      빛을 발하는 소스가 없습니다.                                                     ";
  xx[ii++] =
    "39      램프가 켜졌습니다.                                                             ";
  xx[ii++] =
    "40      램프가 꺼졌습니다.                                                             ";
  xx[ii++] =
    "41      곰을 통과해서 사슬을 풀 방법은 없습니다.                                            ";
  xx[ii++] =
    "42      아무 일도 일어나지 않습니다.                                                      ";
  xx[ii++] =
    "43      어디에서요?                                                                    ";
  xx[ii++] =
    "44      여기에서 공격할 대상이 없습니다.                                                ";
  xx[ii++] =
    "45      작은 새가 이제 죽었습니다. 그 몸은 사라집니다.                                    ";
  xx[ii++] =
    "46      뱀을 공격하는 것은 효과가 없을 뿐만 아니라 매우 위험합니다.                             ";
  xx[ii++] =
    "47      작은 난쟁이를 죽였습니다.                                                         ";
  xx[ii++] =
    "48      작은 난쟁이를 공격했지만 그가 피하고 도망갔습니다.                                ";
  xx[ii++] =
    "49      무엇으로요? 맨 손으로요?                                                        ";
  xx[ii++] =
    "50      좋은 시도였지만, 그건 낡아서 효과가 없는 마법 물건입니다.                           ";
  xx[ii++] =
    "51      장소, 동작 및 물건에 대해 알고 있습니다. 대부분의 어휘는 장소를 나타내는데 사용되며 거기로 이동하는 데 사용됩니다. 이동하려면 숲, 건물, 하류, 들어가기, 동쪽, 서쪽, 북쪽, 남쪽, 위로 또는 아래로와 같은 단어를 사용해보세요. 동굴에 숨겨진 블랙 로드와 같은 몇 가지 특별한 물건에 대해서도 알고 있습니다. 이러한 물건은 알고 있는 동작 단어 중 일부를 사용하여 조작할 수 있습니다. 일반적으로 객체와 동작 단어를 모두 제공해야하지만 때로는 동사만으로 객체를 유추할 수 있습니다. 일부 객체는 동사를 함께 함축시킵니다. 특히 "인벤토리"는 "인벤토리를 보여줘"를 의미하며, 소지품 목록을 제공하도록합니다. 물건은 부작용이 있습니다. 예를 들어, 로드는 새를 놀라게 합니다. 이동에 문제가있는 사람들은 몇 가지 단어를 더 시도하면 됩니다. 물건을 제대로 조작하려고하지만 능력을 초과한 것입니다. 전혀 다른 접근 방식을 시도해야합니다. 게임을 빠르게 진행하기 위해 하나의 단어로 장거리 이동을 할 수도 있습니다. 예를 들어, "건물"은 숲에 빠져있지 않은 한 지상 어디에서든 건물로 이동하는 데 사용됩니다. 또한 동굴 통로는 많이 꺾이기 때문에 북쪽에서 방을 떠나더라도 다음 방에 남쪽에서 들어갈 수 있는 것을 보장하지는 않습니다. 행운을 빕니다!";
  xx[ii++] =
    "52      빗나갑니다!                                                                   ";
  xx[ii++] =
    "53      당신에게 닿았습니다!                                                             ";
  xx[ii++] =
    "54      좋아요.                                                                        ";
  xx[ii++] =
    "55      열쇠를 잠금 해제할 수 없습니다.                                                 ";
  xx[ii++] =
    "56      몇 개의 작은 구멍에 기어 다니다가 주요 통로로 다시 도착했습니다.                              ";
  xx[ii++] =
    "57      동굴이 어디에 있는지는 모르지만, 이 근처에서는 오래 강이 흐를 수 없습니다. 강을 따라 가보세요. ";
  xx[ii++] =
    "58      그것을 하려면 더 자세한 지침이 필요합니다.                                       ";
  xx[ii++] =
    "59      이동하고 물건을 조작하는 동안 볼 수있는 것만 알려 드릴 수 있습니다. 먼 곳에있는 것을 알려 드릴 수는 없습니다. ";
  xx[ii++] =
    "60      그 단어를 알지 못합니다.                                                         ";
  xx[ii++] =
    "61      뭐라고요?                                                                      ";
  xx[ii++] =
    "62      동굴에 들어가려고 하는 건가요?                                                   ";
  xx[ii++] =
    "63      그레이트는 매우 단단하고 강철 자물쇠가 있습니다. 키 없이는 들어갈 수 없으며 주변에 키가 없습니다. 다른 곳에서 키를 찾는 것을 추천합니다. ";
  xx[ii++] =
    "64      숲의 나무는 큰 오크와 메이플로 이루어져 있으며 가끔 소나무 또는 가문비나무 그루가 있습니다. 상당량의 자라가 있으며 주로 자작나무와 장박나무의 미명이있는 덤불도 있습니다. 이 계절에는 모든 잎 때문에 시야가 제한되지만, 가는 것은 꽤 쉽습니다. 참나무와 열매나무를 빼고 돌아가면 가는 것이 쉽습니다. ";
  xx[ii++] =
    "65      어드벤처 570에 오신 것을 환영합니다!                                                           ";
  xx[ii++] =
    "65                                                                                      ";
  xx[ii++] =
    "65      지침을 보려면 'instr'를 입력하세요.                                                   ";
  xx[ii++] =
    "66      삽 없이 팔다리로 파는 것은 상당히 비실용적입니다. 삽이 있어도 진전은 불가능합니다.        ";
  xx[ii++] =
    "67      폭발을 위해서는 다이너마이트가 필요합니다.                                         ";
  xx[ii++] =
    "68      저도 당신만큼 헷갈려요.                                                          ";
  xx[ii++] =
    "69      안개는 주로 물로 이루어진 하얀 증기로 동굴에서 때때로 볼 수 있습니다. 어디에서나 발견될 수 있지만 종종 물로 이어지는 깊은 구덩이의 표시입니다. ";
  xx[ii++] =
    "70      당신의 발은 지금 젖었습니다.                                                      ";
  xx[ii++] =
    "71      저는 방금 식욕을 잃은 것 같습니다.                                                ";
  xx[ii++] =
    "72      감사합니다. 맛있었습니다!                                                       ";
  xx[ii++] =
    "73      스트림에서 마십니다. 물은 미네랄 맛이 강하나 그리 불쾌하지는 않습니다. 매우 차갑습니다.     ";
  xx[ii++] =
    "74      물병이 이제 비어 있습니다.                                                       ";
  xx[ii++] =
    "75      전기 램프를 문지르는 것은 특별히 보람이 없습니다. 어쨌든 아무런 흥미로운 일도 일어나지 않습니다. ";
  xx[ii++] =
    "76      이상합니다. 예상치 못한 일은 없습니다.                                             ";
  xx[ii++] =
    "77      당신의 병은 비어 있고 땅은 젖었습니다.                                             ";
  xx[ii++] =
    "78      그걸 부을 수 없습니다.                                                           ";
  xx[ii++] =
    "79      조심하세요!                                                                     ";
  xx[ii++] =
    "80      어느 방향으로 가시겠습니까?                                                       ";
  xx[ii++] =
    "81      어머, 당신은 자신을 죽였습니다. 제가 도와줄 수 있을지도 모르지만, 사실 처음 해보는 일이에요. 부활을 시도해 볼까요? ";
  xx[ii++] =
    "82      좋아요. 하지만 뭔가 잘못되면 저를 탓하지 마세요......                               ";
  xx[ii++] =
    "82                          --- 퍼프!! ---                                              ";
  xx[ii++] =
    "82      주황색 연기 구름에 휩쓸려 당신은 기침과 숨을 헐떡이며 연기에서 나와 무언가를 발견합니다. ";
  xx[ii++] =
    "83      어설픈 뚱뚱이, 또한 이것을 몇 번 할 수 있을지 모르겠어요. 다시 부활을 시도할까요?         ";
  xx[ii++] =
    "84      알겠어요. 그런데 주황색 연기는 어디에 넣었더라?... >퍼프!<                           ";
  xx[ii++] =
    "84      모든 것이 주황색 연기의 짙은 구름 속으로 사라집니다.                               ";
  xx[ii++] =
    "85      이제 제대로 날려버렸습니다! 주황색 연기가 없습니다! 제대로 된 부활을 기대하지 않으시겠지요? ";
  xx[ii++] =
    "86      좋아요, 그렇게 똑똑하면 스스로 해보세요! 저는 떠나요!                               ";
  xx[ii++] =
    '90      >>> 메시지 81부터 90까지는 "사망 소식"을 위해 예약되어 있습니다. <<<                     ';
  xx[ii++] =
    "91      미안하지만, 어떻게 여기에 오게 된 것인지 기억하지 못하네요.                           ";
  xx[ii++] =
    "92      더 이상 아무것도 들고 다닐 수 없습니다. 먼저 무언가를 내려놓으세요.                     ";
  xx[ii++] =
    "93      잠긴 강철 그레이트를 통과 할 수 없습니다!                                       ";
  xx[ii++] =
    "94      원하는 것은 바로 당신과 함께 있는 것 같습니다.                                   ";
  xx[ii++] =
    "95      당신은 2인치의 틈을 통과 할 수 없습니다!                                         ";
  xx[ii++] =
    "96      점프하는 대신 다리 위로 건너가는 것을 존경스럽게 제안드립니다.                           ";
  xx[ii++] =
    "97      갈라진 틈을 통과할 방법이 없습니다.                                             ";
  xx[ii++] =
    "98      당신은 아무것도 가지고 있지 않습니다.                                             ";
  xx[ii++] =
    "99      현재 다음과 같은 물건을 들고 있습니다:                                            ";
  xx[ii++] =
    "100     배고프지 않습니다 (그냥 피요르드를 위해 울고 있을 뿐입니다). 게다가 당신은 새 씨앗이 없습니다.  ";

  xx[ii++] =
    "101     The snake has now devoured your bird.                                           ";
  xx[ii++] =
    "102     There's nothing here it wants to eat (except perhaps you).                      ";
  xx[ii++] =
    "103     You fool, dwarves eat only coal!  Now you've made him *really* mad!!            ";
  xx[ii++] =
    "104     You have nothing in which to carry it.                                          ";
  xx[ii++] =
    "105     Your bottle is already full.                                                    ";
  xx[ii++] =
    "106     There is nothing here with which to fill the bottle.                            ";
  xx[ii++] =
    "107     Your bottle is now full of water.                                               ";
  xx[ii++] =
    "108     Your bottle is now full of oil.                                                 ";
  xx[ii++] =
    "109     You can't fill that.                                                            ";
  xx[ii++] =
    "110     Don't be ridiculous!                                                            ";
  xx[ii++] =
    "111     The door is extremely rusty and refuses to open.                                ";
  xx[ii++] =
    '112     The plant indignantly shakes the oil off its leaves and asks, "Water?"          ';
  xx[ii++] =
    "113     The hinges are quite thoroughly rusted now and won't budge.                     ";
  xx[ii++] =
    "114     The oil has freed up the hinges so that the door will now move,                 ";
  xx[ii++] =
    "114     although it requires some effort.                                               ";
  xx[ii++] =
    "115     The plant has exceptionally deep roots and cannot be pulled free.               ";
  xx[ii++] =
    "116     The dwarves' knives vanish as they strike the walls of the cave.                ";
  xx[ii++] =
    "117     Something you're carrying won't fit through the tunnel with you.                ";
  xx[ii++] =
    "117     You'd best take inventory and drop something.                                   ";
  xx[ii++] =
    "118     You can't fit this five-foot clam through that little passage!                  ";
  xx[ii++] =
    "119     you can't fit this five-foot oyster through that little passage!                ";
  xx[ii++] =
    "120     I advise you to put down the clam before opening it.  >STRAIN!<                 ";
  xx[ii++] =
    "121     I advise you to put down the oyster before opening it.  >WRENCH!<               ";
  xx[ii++] =
    "122     You don't have anything strong enough to open the clam.                         ";
  xx[ii++] =
    "123     You don't have anything strong enough to open the oyster.                       ";
  xx[ii++] =
    "124     A glistening pearl falls out of the clam and rolls away.  Goodness,             ";
  xx[ii++] =
    "124     this must really be an oyster.  (I never was very good at identifying           ";
  xx[ii++] =
    "124     bivalves.)  Whatever it is, it has now snapped shut again.                      ";
  xx[ii++] =
    "125     The oyster creaks open, revealing nothing but oyster inside.  It                ";
  xx[ii++] =
    "125     promptly snaps shut again.                                                      ";
  xx[ii++] =
    "126     You have crawled around in some little holes and found your way                 ";
  xx[ii++] =
    "126     blocked by a recent cave-in.  You are now back in the main passage.             ";
  xx[ii++] =
    "127     There are faint rustling noises from the darkness behind you.                   ";
  xx[ii++] =
    '128     Out from the shadows behind you pounces a bearded pirate!  "Har, har,"          ';
  xx[ii++] =
    "128     he chortles, \"I'll just take all this booty and hide it away with me           ";
  xx[ii++] =
    '128     chest deep in the maze!" He snatches your treasure and vanishes into            ';
  xx[ii++] =
    "128     the gloom.                                                                      ";
  xx[ii++] =
    '129     A sepulchral voice reverberating through the cave, says, "Cave closing          ';
  xx[ii++] =
    '129     soon.  All adventurers exit immediately through main office."                   ';
  xx[ii++] =
    "130     A mysterious recorded voice groans into life and announces:                     ";
  xx[ii++] =
    '130        "This exit is closed. Please leave via main office."                         ';
  xx[ii++] =
    "131     It looks as though you're dead.  Well, seeing as how it's so close to           ";
  xx[ii++] =
    "131     closing time anyway, I think we'll just call it a day.                          ";
  xx[ii++] =
    '132     The sepulchral voice entones, "The cave is now closed." as the echoes           ';
  xx[ii++] =
    "132     fade, there is a blinding flash of light (and a small puff of orange            ";
  xx[ii++] =
    "132     smoke). . . .    as your eyes refocus, you look around and find...              ";
  xx[ii++] =
    "133     There is a loud explosion, and a twenty-foot hole appears in the far            ";
  xx[ii++] =
    "133     wall, burying the dwarves in the rubble.  You march through the hole            ";
  xx[ii++] =
    "133     and find yourself in the main office, where a cheering band of                  ";
  xx[ii++] =
    "133     friendly elves carry the conquering adventurer off into the sunset.             ";
  xx[ii++] =
    "134     There is a loud explosion, and a twenty-foot hole appears in the far            ";
  xx[ii++] =
    "134     wall, burying the snakes in the rubble.  A river of molten lava pours           ";
  xx[ii++] =
    "134     in through the hole, destroying everything in its path, including you!          ";
  xx[ii++] =
    "135     There is a loud explosion, and you are suddenly splashed across the             ";
  xx[ii++] =
    "135     walls of the room.                                                              ";
  xx[ii++] =
    "136     The resulting ruckus has awakened the dwarves.  There are now several           ";
  xx[ii++] =
    "136     threatening little dwarves in the room with you!  Most of them throw            ";
  xx[ii++] =
    "136     knives at you!  All of them get you!                                            ";
  xx[ii++] =
    "137     Oh, leave the poor unhappy bird alone.                                          ";
  xx[ii++] =
    "138     I daresay whatever you want is around here somewhere.                           ";
  xx[ii++] =
    '139     I don\'t know the word "stop". Use "quit" if you want to give up.               ';
  xx[ii++] =
    "140     You can't get there from here.                                                  ";
  xx[ii++] =
    "141     You are being followed by a very large, tame bear.                              ";
  xx[ii++] =
    '142     If you want to end your adventure early, say "quit". To suspend your            ';
  xx[ii++] =
    '142     adventure such that you can continue later, say "suspend" (or "pause"           ';
  xx[ii++] =
    '142     or "save"). To see what hours the cave is normally open, say "hours".           ';
  xx[ii++] =
    '142     To see how well you\'re doing, say "score". To get full credit for a            ';
  xx[ii++] =
    "142     treasure, you must have left it safely in the building, though you get          ";
  xx[ii++] =
    "142     partial credit just for locating it.  You lose points for getting               ";
  xx[ii++] =
    "142     killed, or for quitting, though the former costs you more.  There are           ";
  xx[ii++] =
    "142     also points based on how much (if any) of the cave you've managed to            ";
  xx[ii++] =
    "142     explore; in particular, there is a large bonus just for getting in (to          ";
  xx[ii++] =
    "142     distinguish the beginners from the rest of the pack), and there are             ";
  xx[ii++] =
    "142     other ways to determine whether you've been through some of the more            ";
  xx[ii++] =
    "142     harrowing sections.  If you think you've found all the treasures, just          ";
  xx[ii++] =
    "142     keep exploring for a while.  If nothing interesting happens, you                ";
  xx[ii++] =
    "142     haven't found them all yet.  If something interesting *does* happen,            ";
  xx[ii++] =
    "142     it means you're getting a bonus and have an opportunity to garner many          ";
  xx[ii++] =
    "142     more points in the master's section.  I may occasionally offer hints            ";
  xx[ii++] =
    "142     if you seem to be having trouble.  If I do, I'll warn you in advance            ";
  xx[ii++] =
    "142     how much it will affect your score to accept the hints.  Finally, to            ";
  xx[ii++] =
    '142     save paper, you may specify "brief", which tells me never to repeat             ';
  xx[ii++] =
    "142     the full description of a place unless you explicitly ask me to.                ";
  xx[ii++] =
    "143     Do you indeed wish to quit now?                                                 ";
  xx[ii++] =
    "144     There is nothing here with which to fill the vase.                              ";
  xx[ii++] =
    "145     The sudden change in temperature has delicately shattered the vase.             ";
  xx[ii++] =
    "146     It is beyond your power to do that.                                             ";
  xx[ii++] =
    "147     I don't know how.                                                               ";
  xx[ii++] =
    "148     It is too far up for you to reach.                                              ";
  xx[ii++] =
    "149     You killed a little dwarf.  The body vanishes in a cloud of greasy              ";
  xx[ii++] =
    "149     black smoke.                                                                    ";
  xx[ii++] =
    "150     The shell is very strong and is impervious to attack.                           ";
  xx[ii++] =
    "151     What's the matter, can't you read?  Now you'd best start over.                  ";
  xx[ii++] =
    "152     The axe bounces harmlessly off the dragon's thick scales.                       ";
  xx[ii++] =
    "153     The dragon looks rather nasty.  You'd best not try to get by.                   ";
  xx[ii++] =
    "154     The little bird attacks the green dragon, and in an astounding flurry           ";
  xx[ii++] =
    "154     gets burnt to a cinder.  The ashes blow away.                                   ";
  xx[ii++] =
    "155     On what?                                                                        ";
  xx[ii++] =
    "156     Okay, from now on I'll only describe a place in full the first time             ";
  xx[ii++] =
    '156     you come to it.  To get the full description, say "look".                       ';
  xx[ii++] =
    "157     Trolls are close relatives with the rocks and have skin as tough as             ";
  xx[ii++] =
    "157     that of a rhinoceros.  The troll fends off your blows effortlessly.             ";
  xx[ii++] =
    "158     The troll deftly catches the axe, examines it carefully, and tosses it          ";
  xx[ii++] =
    '158     back, declaring, "Good workmanship, but it\'s not valuable enough."             ';
  xx[ii++] =
    "159     The troll catches your treasure and scurries away out of sight.                 ";
  xx[ii++] =
    "160     The troll refuses to let you cross.                                             ";
  xx[ii++] =
    "161     There is no longer any way across the chasm.                                    ";
  xx[ii++] =
    "162     Just as you reach the other side, the bridge buckles beneath the                ";
  xx[ii++] =
    "162     weight of the bear, which was still following you around.  You                  ";
  xx[ii++] =
    "162     scrabble desperately for support, but as the bridge collapses you               ";
  xx[ii++] =
    "162     stumble back and fall into the chasm.                                           ";
  xx[ii++] =
    "163     The bear lumbers toward the troll, who lets out a startled shriek and           ";
  xx[ii++] =
    "163     scurries away.  The bear soon gives up the pursuit and wanders back.            ";
  xx[ii++] =
    "164     The axe misses and lands near the bear where you can't get at it.               ";
  xx[ii++] =
    "165     With what?  your bare hands?  Against *his* bear hands??                        ";
  xx[ii++] =
    "166     The bear is confused; he only wants to be your friend.                          ";
  xx[ii++] =
    "167     For crying out loud, the poor thing is already dead!                            ";
  xx[ii++] =
    "168     The bear eagerly wolfs down your food, after which he seems to calm             ";
  xx[ii++] =
    "168     down considerably and even becomes rather friendly.                             ";
  xx[ii++] =
    "169     The bear is still chained to the wall.                                          ";
  xx[ii++] =
    "170     The chain is still locked.                                                      ";
  xx[ii++] =
    "171     The chain is now unlocked.                                                      ";
  xx[ii++] =
    "172     The chain is now locked.                                                        ";
  xx[ii++] =
    "173     There is nothing here to which the chain can be locked.                         ";
  xx[ii++] =
    "174     There is nothing here to eat.                                                   ";
  xx[ii++] =
    "175     Do you want the hint?                                                           ";
  xx[ii++] =
    "176     Do you need help getting out of the maze?                                       ";
  xx[ii++] =
    "177     You can make the passages look less alike by dropping things.                   ";
  xx[ii++] =
    "178     Are you trying to explore beyond the plover room?                               ";
  xx[ii++] =
    "179     There is a way to explore that region without having to worry about             ";
  xx[ii++] =
    "179     falling into a pit.  None of the objects available is immediately               ";
  xx[ii++] =
    "179     useful in discovering the secret.                                               ";
  xx[ii++] =
    "180     Do you need help getting out of here?                                           ";
  xx[ii++] =
    "181     Don't go west.                                                                  ";
  xx[ii++] =
    "182     Gluttony is not one of the troll's vices.  Avarice, however, is.                ";
  xx[ii++] =
    "183     Your lamp is getting dim.  You'd best start wrapping this up, unless            ";
  xx[ii++] =
    "183     you can find some fresh batteries.  I seem to recall there's a vending          ";
  xx[ii++] =
    "183     machine in the maze.  Bring some coins with you.                                ";
  xx[ii++] =
    "184     Your lamp has gone out. Give it a whack; that usually works.                    ";
  xx[ii++] =
    "185     There's not much point in wandering around out here, and you can't              ";
  xx[ii++] =
    "185     explore the cave without a lamp.  So let's just call it a day.                  ";
  xx[ii++] =
    "186     There are faint rustling noises from the darkness behind you.  As you           ";
  xx[ii++] =
    "186     turn toward them, the beam of your lamp falls across a bearded pirate.          ";
  xx[ii++] =
    '186     He is carrying a large chest.  "Shiver me timbers!" he cries, "I\'ve            ';
  xx[ii++] =
    "186     been spotted!  I'd best hie meself off to the maze to hide me chest!\"          ";
  xx[ii++] =
    "186     with that, he vanishes into the gloom.                                          ";
  xx[ii++] =
    "187     Your lamp is getting dim.  You'd best go back for those batteries.              ";
  xx[ii++] =
    "188     Your lamp is getting dim.  I'm taking the liberty of replacing the              ";
  xx[ii++] =
    "188     batteries.                                                                      ";
  xx[ii++] =
    "189     Your lamp is getting dim, and you're out of spare batteries.  You'd             ";
  xx[ii++] =
    "189     best start wrapping this up.                                                    ";
  xx[ii++] =
    "190     I'm afraid the magazine is written in dwarvish.                                 ";
  xx[ii++] =
    '191     "This is not the maze where the pirate leaves his treasure chest."              ';
  xx[ii++] =
    "192     Hmmm, this looks like a clue, which means it'll cost you 10 points to           ";
  xx[ii++] =
    "192     read it.  Should I go ahead and read it anyway?                                 ";
  xx[ii++] =
    '193     It says, "there is something strange about this place, such that one            ';
  xx[ii++] =
    "193     of the words I've always known now has a new effect.\"                          ";
  xx[ii++] =
    "194     It says the same thing it did before.                                           ";
  xx[ii++] =
    "195     I'm afraid I don't understand.                                                  ";
  xx[ii++] =
    '196     "Congratulations on bringing light into the dark-room!"                         ';
  xx[ii++] =
    "197     You strike the mirror a resounding blow, whereupon it shatters into a           ";
  xx[ii++] =
    "197     myriad tiny fragments.                                                          ";
  xx[ii++] =
    "198     You have taken the vase and hurled it delicately to the ground.                 ";
  xx[ii++] =
    "199     You prod the nearest dwarf, who wakes up grumpily, takes one look at            ";
  xx[ii++] =
    "199     you, curses, and grabs for his axe.                                             ";
  xx[ii++] =
    "200     Is this acceptable?                                                             ";
  xx[ii++] =
    "101     뱀이 이제 당신의 새를 삼켰습니다.                                                    ";
  xx[ii++] =
    "102     여기에는 (아마도 당신 말고는) 먹을 게 없습니다.                                        ";
  xx[ii++] =
    "103     어리석은 자, 드워프는 석탄만 먹어요! 이제 그를 *정말* 화나게 만들었군요!!                   ";
  xx[ii++] =
    "104     담을 담을 무언가가 없습니다.                                                       ";
  xx[ii++] =
    "105     이미 병이 가득 찼습니다.                                                            ";
  xx[ii++] =
    "106     병을 채울만한 물건이 여기에는 없습니다.                                              ";
  xx[ii++] =
    "107     병이 이제 물로 가득 찼습니다.                                                       ";
  xx[ii++] =
    "108     병이 이제 기름으로 가득 찼습니다.                                                    ";
  xx[ii++] =
    "109     그걸로는 채울 수 없습니다.                                                          ";
  xx[ii++] =
    "110     어리석은 소리 하지 마세요!                                                          ";
  xx[ii++] =
    "111     문은 극도로 녹이 범벅이 되어 열리지 않습니다.                                       ";
  xx[ii++] =
    '112     식물은 기름을 잎에서 흔들어 내리며 "물?"이라고 물어봅니다.                            ';
  xx[ii++] =
    "113     문의 장치는 이제 완전히 녹아서 움직이지 않습니다.                                   ";
  xx[ii++] =
    "114     기름더미가 문의 장치를 풀어서 이제 문이 움직일 수 있게 되었습니다.                    ";
  xx[ii++] =
    "114     하지만 조금의 노력이 필요합니다.                                                    ";
  xx[ii++] =
    "115     식물은 깊이 파뿌리가 박혀 있어 끌어낼 수 없습니다.                                  ";
  xx[ii++] =
    "116     드워프들의 나이프는 동굴의 벽에 닿자마자 사라집니다.                                 ";
  xx[ii++] =
    "117     당신이 들고 다니는 것 중 어떤 것은 통과할 수 없습니다.                               ";
  xx[ii++] =
    "117     인벤토리를 확인하고 무언가를 내려놓으세요.                                          ";
  xx[ii++] =
    "118     작은 통나무를 그 작은 통과구로 통과시킬 수 없습니다!                               ";
  xx[ii++] =
    "119     작은 조개를 그 작은 통과구로 통과시킬 수 없습니다!                                 ";
  xx[ii++] =
    "120     조개를 열기 전에 내려놓는 것이 좋을겁니다. >스트레인!<                            ";
  xx[ii++] =
    "121     굴을 열기 전에 조개를 내려놓는 것이 좋을 겁니다. >렌치!<                          ";
  xx[ii++] =
    "122     조개를 열 수 있는 충분히 강한 것을 가지고 있지 않습니다.                           ";
  xx[ii++] =
    "123     굴을 열 수 있는 충분히 강한 것을 가지고 있지 않습니다.                            ";
  xx[ii++] =
    "124     반짝이는 진주가 조개에서 떨어져 굴러갑니다. 이건 정말로 조개입니다. (저는 이중연체를 잘 모릅니다.) 무엇이든지, 이제 다시 굳어집니다.  ";
  xx[ii++] =
    "125     조개가 열리자마자 안에는 조개만 들어있습니다.                                     ";
  xx[ii++] =
    "125     곧 다시 닫힙니다.                                                                ";
  xx[ii++] =
    "126     당신은 작은 구멍 사이를 기어다니다가 최근에 사태에 막혀 돌아왔습니다. 이제 다시 주요 통로에 있습니다.  ";
  xx[ii++] =
    "127     어두운 곳에서 허스키운 소리가 들립니다.                                            ";
  xx[ii++] =
    '128     뒤에서 어둠 속에서 수염 난 해적이 덤벼듭니다! "하, 하," 그가 웃습니다. "이 보물들을 다 가져가서 미궁에 몸을 숨기지!" 그는 당신의 보물을 잡고 어둠 속으로 사라집니다.  ';
  xx[ii++] =
    '129     무덤 같은 목소리가 동굴을 통해 울립니다. "동굴이 곧 닫힙니다. 모험가들은 즉시 주요 사무실로 이동하십시오." ';
  xx[ii++] =
    '130     수수께끼 같은 녹음된 목소리가 소리를 내며 알립니다: ';
  xx[ii++] =
    '130        "이 출구는 닫혔습니다. 주요 사무실을 통해 나가십시오." ';
  xx[ii++] =
    "131     당신은 이미 죽어있는 것 같습니다. 그런데 어차피 문 닫는 시간도 가까워졌으니까 이제 그냥 마무리하죠.  ";
  xx[ii++] =
    '132     무덤 같은 목소리가 울려 퍼집니다. "동굴이 이제 닫혔습니다."이렇게 말하고 반향이 사라지자, 눈이 다시 초점을 잡으면 주변을 둘러보니...  ';
  xx[ii++] =
    "133     큰 폭발 소리가 나며 벽에 이십 피트 정도의 구멍이 나타나 드워프들이 돌무더기에 파묻히게 됩니다. 그 구멍을 통해 행군하면, 당신은 일몰로 떠나는 친절한 요정들에게 데려가져 축하받게 됩니다.  ";
  xx[ii++] =
    "134     큰 폭발 소리가 나며 벽에 이십 피트 정도의 구멍이 나타나 드래곤들이 돌무더기에 파묻히게 됩니다. 그 구멍을 통해 화산 용암의 강이 흘러 들어와 당신을 포함한 모든 것을 파괴합니다!  ";
  xx[ii++] =
    "135     큰 폭발 소리가 나며 갑자기 당신은 방 안 벽면에 튀어 퍼집니다.  ";
  xx[ii++] =
    "136     결과적으로 소동이 일어났고 드워프들을 깨웠습니다. 이제 당신과 함께 방 안에는 몇몇 위협적인 작은 드워프들이 있습니다! 그들 대부분이 당신을 향해 칼을 던집니다! 그리고 모두 당신을 맞습니다!  ";
  xx[ii++] =
    "137     이불씀 하늘날아 가셔요!                                                     ";
  xx[ii++] =
    "138     아마도 당신이 찾고 있는 것이 여기 어딘가에 있을 겁니다.                             ";
  xx[ii++] =
    '139     "그만"이라는 단어는 알지 못합니다. 그만두고 싶으시면 "그만"이라고 하세요.                      ';
  xx[ii++] =
    "140     여기서는 거기로 갈 수 없습니다.                                                  ";
  xx[ii++] =
    "141     아주 큰 길들여진 곰이 당신을 따라오고 있습니다.                                   ";
  xx[ii++] =
    '142     모험을 일찍 끝내려면 "그만"이라고 말하세요. 잠시 중단해서 나중에 계속할 수 있게 하려면 "일시정지"(또는 "저장")라고 말하세요. 동굴이 보통 어느 시간에 열려 있는지 알고 싶다면 "시간"이라고 말하세요.  ';
  xx[ii++] =
    '142     자기 진행 상황을 알고 싶다면 "점수"라고 말하세요. 보물을 완전히 안전하게 건물에 둬야만 만점을 받을 수 있지만, 발견만 해도 일부 점수를 받습니다. 사망하거나 그만두면 점수가 감점됩니다. 그러나 초심자와 다른 사람들을 구별하기 위해 초입에 들어간 것에 대한 큰 보너스 점수가 있으며, 더 어려운 구간을 통과했는지 여부를 확인하는 다른 방법도 있습니다. 모든 보물을 찾았다고 생각하면 일정 시간 동안 탐험을 계속하세요. 아무런 흥미로운 일이 없다면 아직 모두 찾지 않은 것입니다. 어려움을 겪는 것 같으면 가끔 힌트를 제공할 수 있습니다. 그렇게 하면 점수에 어떤 영향을 미칠지 미리 알려드립니다. 종이를 절약하기 위해 "간단히"라고 지정할 수 있습니다. 이렇게 하면 명시적으로 요청하지 않는 한 장소의 전체 설명을 반복하지 않습니다.  ';
  xx[ii++] =
    "143     정말로 이제 그만두시겠습니까?                                                   ";
  xx[ii++] =
    "144     여기에는 병을 채울만한 물건이 없습니다.                                             ";
  xx[ii++] =
    "145     갑자기 온도가 변화하면서 섬세하게 깨져버립니다.                                   ";
  xx[ii++] =
    "146     그건 당신의 능력 밖입니다.                                                       ";
  xx[ii++] =
    "147     그건 제가 모르는 방법입니다.                                                      ";
  xx[ii++] =
    "148     당신은 너무 높이 있어서 닿을 수 없습니다.                                          ";
  xx[ii++] =
    "149     당신은 작은 드워프 한 명을 죽였습니다. 그의 시체는 기름진 검은 연기에 사라집니다.           ";
  xx[ii++] =
    "150     껍질은 매우 단단하며 공격을 받지 않습니다.                                        ";
  xx[ii++] =
    "151     무슨 일인지, 읽을 수 없습니다.                                                     ";
  xx[ii++] =
    "152     도끼가 용의 두꺼운 비늘에 튕기며 피해를 주지 못합니다.                              ";
  xx[ii++] =
    "153     용은 꽤 불쾌해 보입니다. 그쪽으로 가려고 하지 마세요.                              ";
  xx[ii++] =
    "154     작은 새가 푸른 용을 공격해서 놀랍도록 날아가며 불에 타서 재가 되었습니다. 재가 날아가버립니다.  ";
  xx[ii++] =
    "155     무엇을 기준으로요?                                                               ";
  xx[ii++] =
    "156     앞으로는 한 번만 장소를 자세히 설명하겠습니다. 자세한 설명을 원하면 '보기'라고 말하세요.     ";
  xx[ii++] =
    "157     트롤은 돌과 가족 관계이며 뿔소의 피부와 같이 단단합니다. 트롤은 손쉽게 당신의 공격을 무시합니다. ";
  xx[ii++] =
    "158     트롤은 도끼를 민감하게 잡아다가 주의 깊게 살펴보고 다시 던집니다. '제작이 잘 되어 있지만 충분히 값비싼 것은 아니네요.'라고 말합니다. ";
  xx[ii++] =
    "159     트롤은 당신의 보물을 잡아가고 그 자리에서 사라집니다.                              ";
  xx[ii++] =
    "160     트롤은 당신이 건너지 못하게 거부합니다.                                             ";
  xx[ii++] =
    "161     이제 구덩이를 건널 수 있는 방법이 없습니다.                                         ";
  xx[ii++] =
    "162     당신이 반대편에 도달하는 순간, 다리가 곰이 여전히 따라오고 있다는 사실을 깨닫고 다리가 버티지 못하고 무너져 버립니다. 당신은 지지대를 찾기 위해 필사적으로 노력하지만 다리가 무너져버리면서 넘어져 구덩이로 떨어집니다.  ";
  xx[ii++] =
    "163     곰은 트롤을 향해 걸어갑니다. 트롤은 경악한 소리를 내며 놀라 도망갑니다. 곰은 곧 그만두고 돌아갑니다.  ";
  xx[ii++] =
    "164     도끼가 범과 놓친 곳에 착지합니다. 당신이 가져갈 수 없는 곳에 떨어져 있습니다.             ";
  xx[ii++] =
    "165     빈 손으로 하시겠습니까? 그 놈의 곰 손과 맞서기 위해서는?                             ";
  xx[ii++] =
    "166     곰은 혼란스러워합니다. 그는 단지 당신의 친구가 되기를 원할 뿐입니다.                   ";
  xx[ii++] =
    "167     소리를 내지 마세요. 그냥 이미 죽은 것입니다!                                        ";
  xx[ii++] =
    "168     곰은 당신의 음식을 간절히 먹고 난 후에는 상당히 진정되고 친근해집니다.                     ";
  xx[ii++] =
    "169     곰은 여전히 벽에 사슬로 묶여 있습니다.                                              ";
  xx[ii++] =
    "170     사슬은 여전히 잠겨 있습니다.                                                      ";
  xx[ii++] =
    "171     사슬은 이제 열렸습니다.                                                           ";
  xx[ii++] =
    "172     사슬은 이제 잠겼습니다.                                                            ";
  xx[ii++] =
    "173     여기에 사슬을 고정시킬 물건이 없습니다.                                            ";
  xx[ii++] =
    "174     먹을 것이 없습니다.                                                               ";
  xx[ii++] =
    "175     힌트가 필요하십니까?                                                               ";
  xx[ii++] =
    "176     미로에서 나가는 방법을 도와드릴까요?                                                 ";
  xx[ii++] =
    "177     물건을 내려놓으면 통로가 덜 비슷해집니다.                                            ";
  xx[ii++] =
    "178     플로버 방을 넘어서 탐험하려고 하나요?                                                 ";
  xx[ii++] =
    "179     구덩이에 빠질 걱정 없이 그 지역을 탐험할 수 있는 방법이 있습니다. 사용 가능한 물건 중에서는 즉시 사용할 수 있는 것은 없습니다. ";
  xx[ii++] =
    "180     여기서 나가는 방법을 도와드릴까요?                                                 ";
  xx[ii++] =
    "181     서쪽으로 가지 마세요.                                                              ";
  xx[ii++] =
    "182     트롤의 탐욕은 아니지만 토끼뿐만이 아닙니다.                                             ";
  xx[ii++] =
    "183     등불이 점점 어두워집니다. 신선한 배터리를 구해야 할 때입니다. 미로에 자판기가 있는 것 같은데 동전을 가져가세요. ";
  xx[ii++] =
    "184     등불이 꺼졌습니다. 주먹으로 한 번 치면 대부분 고쳐집니다.                             ";
  xx[ii++] =
    "185     여기에서는 헤매는 것에 큰 의미가 없고 등불이 없으면 동굴을 탐험할 수 없습니다. 그러니 오늘은 그냥 마무리합시다.  ";
  xx[ii++] =
    "186     어두운 곳에서 허스키운 소리가 들립니다. 당신이 그 소리를 향해 돌아서자 등불의 빛이 수염 난 해적에게 떨어집니다.  ";
  xx[ii++] =
    '186     그는 큰 상자를 들고 있습니다. "흥!" 그가 외치며 말합니다. "내가 이 진실을 그 미로에 감추러 들어가야 한다는 걸 알아버렸군!" 그가 그대로 사라집니다. ';
  xx[ii++] =
    "187     등불이 점점 어두워집니다. 배터리를 가져가려고 다시 돌아가세요.                          ";
  xx[ii++] =
    "188     등불이 점점 어두워집니다. 배터리를 대신해서 제가 새로 교체하도록 하겠습니다.                  ";
  xx[ii++] =
    "189     등불이 점점 어두워집니다. 예비 배터리가 없습니다. 이제 마무리하기 시작해야 할 때입니다.   ";
  xx[ii++] =
    "190     미안하지만 그 잡지는 도워쉬어로 되어 있습니다.                                      ";
  xx[ii++] =
    '191     "해적이 보물 상자를 숨기는 미로는 아닙니다."라고 씌여 있습니다.                        ';
  xx[ii++] =
    "192     힌트를 읽기 위해서는 10점이 감점됩니다. 그래도 읽어드릴까요?                           ";
  xx[ii++] =
    '193     "이곳은 뭔가 이상한데요. 예전에 알던 단어 중 하나가 이제 새로운 효과가 있는 것 같아요."     ';
  xx[ii++] =
    "194     이전과 같은 내용입니다.                                                           ";
  xx[ii++] =
    "195     제가 이해하지 못합니다.                                                           ";
  xx[ii++] =
    '196     "어두운 방에 불을 밝혀 넣어 축하합니다!"                                             ';
  xx[ii++] =
    "197     당신이 거울을 세게 때리자 유리가 파편으로 깨집니다.                                  ";
  xx[ii++] =
    "198     당신은 꽃병을 가져다가 매끄럽게 바닥에 던져버립니다.                                 ";
  xx[ii++] =
    "199     가장 가까운 드워프를 찔러깨우자마자 그는 시무룩하게 깨어나 당신을 한 번 보고 저주하며 도끼를 던지려 합니다. ";
  xx[ii++] =
    "200     이것으로 충분한가요?                                                               ";

  xx[ii++] =
    "201     There's no point in suspending a demonstration game.                            ";
  xx[ii++] =
    "202     The well is full of water!                                                      ";
  xx[ii++] =
    "203     The plug is firmly set into the floor and cannot be removed with your hands.    ";
  xx[ii++] =
    "204     The rubber duck is well out of reach.                                           ";
  xx[ii++] =
    '205     Etched in a strong clear Dwarven script are the words "R.I.P. Stabby,           ';
  xx[ii++] =
    '205     inaccurately transported during The Great Initialization".                      ';
  xx[ii++] =
    "206     The floor and walls rumble slightly.                                            ";
  xx[ii++] =
    "207     That doesn't sound right. You'd best start over.                                ";
  xx[ii++] =
    '208     What part of "death by a thousand cuts" do you not understand?                  ';
  xx[ii++] =
    "209     Yech! No thanks.                                                                ";
  xx[ii++] =
    "210     The stand is securely bolted to the ground to foil vandals (like you).          ";
  xx[ii++] =
    "211     You inadvertently dislodge a leaf as you grip the stalk.                        ";
  xx[ii++] =
    '212     The harp struggles in your hands and cries "MASTER! MASTER!".                   ';
  xx[ii++] =
    "213     There is some kind of disturbance, wait a second....  >POOF!<                   ";
  xx[ii++] =
    "213     A huge cloud of green smoke fills the room. Gradually it clears to reveal an    ";
  xx[ii++] =
    '213     enraged giant waving his arms and bellowing "THIEF!".                        ';
  xx[ii++] =
    "214     There is a disturbance in the adjoining room. Trails of thick green smoke emerge";
  xx[ii++] =
    '214     and a disconnected voice bellows "THIEF!".                                      ';
  xx[ii++] =
    "215     The giant grabs you with both hands and effortlessly separates the top half of  ";
  xx[ii++] =
    "215     your body from the lower half. Giants are very territorial.                     ";
  xx[ii++] =
    '216     There is an enraged giant bearing down on you bellowing "FEE!".                 ';
  xx[ii++] =
    '217     There is an enraged giant bearing down on you bellowing "FIE!".                 ';
  xx[ii++] =
    '218     There is an enraged giant bearing down on you bellowing "FOE!".                 ';
  xx[ii++] =
    '219     There is an enraged giant bearing down on you bellowing "FOO... err ...FUM!".   ';
  xx[ii++] =
    '220     There is an enraged giant here bellowing "FEE!".                                ';
  xx[ii++] =
    '221     There is an enraged giant here bellowing "FIE!".                                ';
  xx[ii++] =
    '222     There is an enraged giant here bellowing "FOE!".                                ';
  xx[ii++] =
    '223     There is an enraged giant here bellowing "FOO... err ...FUM!".                  ';
  xx[ii++] =
    '224     The giant grabs the harp and heads back into the gloom muttering "Bloody tourists".';
  xx[ii++] =
    "225     The giant loses interest and disappears back into the gloom.                    ";
  xx[ii++] =
    "226     The giant blocks your path.                                                     ";
  xx[ii++] =
    "227     As the archway fills with rock the giant is sliced neatly in half. His upper torso";
  xx[ii++] =
    "227     remains briefly visible, arms outstretched as if to snatch you even in death.   ";
  xx[ii++] =
    "227     He then disappears in thick green smoke. Something remains where his left hand lay.";
  xx[ii++] =
    "228     The giant falls face first with a huge crash! Just kidding, he barely notices.  ";
  xx[ii++] =
    "229     The axe hits the giant right between the eyes! And nothing happens.             ";
  xx[ii++] =
    "230     The beanstalk has grown so hardy that it's impossible to damage.                ";
  xx[ii++] =
    "231     Your feeble blows glance harmlessly off the fibrous trunk.                      ";
  xx[ii++] =
    "231     Who gave you that axe? Your mom?                                                ";
  xx[ii++] =
    '232     What\'s next? "Shoot foot"?                                                     ';
  xx[ii++] =
    "233     Your fingers push past the worms and web and close around a smooth star-shaped rock.";
  xx[ii++] =
    "234     The rabbit is beyond reach behind a forest of sharp spikes.                     ";
  xx[ii++] =
    "235     You deftly snatch the necklace from the distracted rabbit.                      ";
  xx[ii++] =
    "235     Startled, the rabbit darts back into the spikes and disappears.                 ";
  xx[ii++] =
    "236     The rabbit hops forward, sniffs approvingly at the plant leaf and starts to     ";
  xx[ii++] =
    "236     nibble at it.                                                                   ";
  xx[ii++] =
    "237     The rabbit (and hence the necklace) is beyond reach behind a forest of sharp spikes.";
  xx[ii++] =
    "238     The rabbit hops disappointedly back into the forest of spikes.                  ";
  xx[ii++] =
    "240     You drop the magazines into an empty slot in the magazine rack.                 ";
  xx[ii++] =
    "240     The world seems a tidier place.                                                 ";
  xx[ii++] =
    "241     The world hates a litterbug.                                                    ";
  xx[ii++] =
    "242     The rabbit is much too quick. It darts back into a particularly dense cluster   ";
  xx[ii++] =
    "242     of spikes and eyes you warily.                                                  ";
  xx[ii++] =
    "243     You swiftly slaughter the poor defenseless animal. The bloodied corpse disappears";
  xx[ii++] =
    "243     in a cloud of fine white smoke. The smoke clears revealing a fine necklace!     ";
  xx[ii++] =
    "244     I'd take points off for that but I see how you like using that axe.             ";
  xx[ii++] =
    "245     There goes our PG rating. Shouldn't you be playing Space Invaders?             ";
  xx[ii++] =
    "246     Ewww! No thanks.                                                                ";
  xx[ii++] =
    "247     ... >nnGGG!< ... >NNGGG!!!< ... nope too heavy.                                 ";
  xx[ii++] =
    "248     The rod drops snugly into the floor channel. It immediately starts to expand    ";
  xx[ii++] =
    "248     until it fully extends over the rift.                                           ";
  xx[ii++] =
    "249     I respectfully suggest you go across the pole instead of jumping.               ";
  xx[ii++] =
    "250     There is no way across the rift.                                                ";
  xx[ii++] =
    "251     Dig all day, you won't find anything here.                                     ";
  xx[ii++] =
    "252     As you deepen the trench it quickly fills with water that starts to flow down   ";
  xx[ii++] =
    "252     the slope of the narrow path.                                                   ";
  xx[ii++] =
    "253     You make the trench bigger.                                                     ";
  xx[ii++] =
    "254     Pity you don't have a shovel.                                                  ";
  xx[ii++] =
    "255     You feel a sharp sting, drop the pebble and examine your bloodied hand.         ";
  xx[ii++] =
    "255     Perhaps it's better to leave the pebbles alone.                                ";
  xx[ii++] =
    "256     As soon as you enter the pit you are swarmed by hundreds of flesh-eating beetles. ";
  xx[ii++] =
    "256     Within minutes your flesh is consumed and your bones picked clean.              ";
  xx[ii++] =
    "257     I don't see any beetles here.                                                  ";
  xx[ii++] =
    "258     I don't see any pebbles here.                                                  ";
  xx[ii++] =
    "259     The pole is too heavy to lift over the rift.                                    ";
  xx[ii++] =
    "260     You manage to move the pole out of the channel and it instantly shrinks back to ";
  xx[ii++] =
    "260     its original 3-foot form.                                                       ";
  xx[ii++] =
    "261     The pyramid settles snugly into the square recess on the pedestal face.         ";
  xx[ii++] =
    "262     The pyramid appears to be screwed into the pedestal face. It can't be lifted.  ";
  xx[ii++] =
    "263     The pyramid rotates clockwise a third of a turn and settles with a sharp 'click'";
  xx[ii++] =
    "264     The pyramid rotates a final third of a turn and terminates with a slightly louder 'click'.";
  xx[ii++] =
    "264     After a moment it slowly lowers into the body of the pedestal and out of sight. ";
  xx[ii++] =
    "264     There is a low rumbling and a low doorway appears in the west wall.             ";
  xx[ii++] =
    "265     The sign magically hovers and then slowly rises to display it's message a foot ";
  xx[ii++] =
    "265     above your head.                                                                ";
  xx[ii++] =
    "265     Well done! You've saved other adventurers all those wasted moves!               ";
  xx[ii++] =
    '266     "Cave under construction beyond this point. Proceed at own risk.                ';
  xx[ii++] =
    '266      Witt Construction Company."                                                    ';
  xx[ii++] =
    "267     A sharp look from the nearest dwarf makes you think twice about messing up the  ";
  xx[ii++] =
    "267     message board.                                                                  ";
  xx[ii++] =
    "268     ... For Sale: commercial vending machine. Seen very little use. Contact mgmt.      ";
  xx[ii++] =
    "269     ... Notice: please discourage visitors from dropping their Spelunker magazines in  ";
  xx[ii++] =
    "269     ... the cave on their way out. Magazines should be returned to the magazine rack at";
  xx[ii++] =
    "269     ... the cave entrance for future visitors' use.                                    ";
  xx[ii++] =
    "270     ... Missing: large green snake. Afraid of birds. If found please contact mgmt.     ";
  xx[ii++] =
    "271     ... Lost: many treasures. Too many to list. If you have one it's mine. Contact the ";
  xx[ii++] =
    "271     ... Captain in the maze of twisty little passages, all alike.                      ";
  xx[ii++] =
    "272     ... Memorial for Big Bob is in the Giant's Causeway at 7pm. Please leave donations ";
  xx[ii++] =
    "272     ... to his widow in the well house.                                                ";
  xx[ii++] =
    "273     ... Attn: the storage room code has been changed. Please use the new code from now on. ";
  xx[ii++] =
    '278     The break room is regarded as a "sanctuary". No violence please.                ';
  xx[ii++] =
    "279     The pyramid rests on the pedestal.                                              ";
  xx[ii++] =
    "280     The pyramid spins freely on the smooth pedestal surface. Nothing interesting happens. ";
  xx[ii++] =
    "281     There is a low rumble and a low doorway appears in the east wall.               ";
  xx[ii++] =
    "282     There is a low rumble and the eastern doorway disappears leaving a solid rock wall ";
  xx[ii++] =
    "282     adorned with a small bas-relief carving of a scarab.                            ";
  xx[ii++] =
    "283     The scarab shivers in your hands as a low doorway appears in the east wall allowing ";
  xx[ii++] =
    "283     you to pass through. The door disappears as you exit the chamber.               ";
  xx[ii++] =
    "284     There doesn't seem to be anything else to dig up.                               ";
  xx[ii++] =
    "285     Your shovel immediately hits something hard and metallic ... a gold scarab!     ";
  xx[ii++] =
    "286     The sarcophagus lid slides effortlessly open to reveal a golden jewel-encrusted ";
  xx[ii++] =
    "286     death mask!                                                                     ";
  xx[ii++] =
    "287     The sarcophagus lid slides shut.                                                ";
  xx[ii++] =
    "288     The sarcophagus lid slides effortlessly open.                                   ";
  xx[ii++] =
    "289     Try as you might the heavy lid won't budge an inch.                             ";
  xx[ii++] =
    "290     The sarcophagus is already open!                                                ";
  xx[ii++] =
    "291     The sarcophagus is already closed!                                              ";
  xx[ii++] =
    "292     First dwarf: \"So then he said 'Now we can all get some sleep!'\"               ";
  xx[ii++] =
    '292     Second dwarf: "HA HA HA HA HA HA HA! I don\'t get it."                          ';
  xx[ii++] =
    '293     First dwarf: "Remember the old days when the lamp would run out?"               ';
  xx[ii++] =
    '293     Second dwarf: "Good times. Short working hours."                                ';
  xx[ii++] =
    '294     First dwarf: "Why can\'t dwarves use the magic words?"                          ';
  xx[ii++] =
    '294     Second dwarf: "Discrimination."                                                 ';
  xx[ii++] =
    '295     First dwarf: "They say it was the randomizer. A plus one boundary condition."   ';
  xx[ii++] =
    "295     Second dwarf: \"But how would that put him halfway in a wall? They'd have to    ";
  xx[ii++] =
    '295     code that specially."                                                           ';
  xx[ii++] =
    "296     First dwarf: \"I don't know why they're always changing the storage room code.\" ";
  xx[ii++] =
    '296     Second dwarf: "All they ever do is reverse it. Why bother?"                     ';
  xx[ii++] =
    '297     First dwarf: "I sometimes wonder if a higher power created everything and our   ';
  xx[ii++] =
    '297     every move is pre-scripted."                                                    ';
  xx[ii++] =
    '297     Second dwarf: "C\'mon, not possible in 48K."                                    ';
  xx[ii++] =
    "298     The lamp flickers briefly then shines with a bright steady glow.                ";
  xx[ii++] =
    "299     The door won't budge.                                                           ";
  xx[ii++] =
    "300     <Click!>                                                                        ";
  xx[ii++] =
    "301     <Clunk!>                                                                        ";
  xx[ii++] =
    "302     There is a <Ding!> and the door disappears into the wall.                       ";
  xx[ii++] =
    "303     Pushing that doesn't seem to do anything.                                       ";
  xx[ii++] =
    "304     Scrawled on one side of the paper is the number 7628.                           ";
  xx[ii++] =
    "305     The wall is impassable.                                                         ";
  xx[ii++] =
    "306     The wall trembles slightly and then part of it dissolves leaving a wide archway.";
  xx[ii++] =
    "307     The can rattles as you pick it up.                                              ";
  xx[ii++] =
    "308     The can rattles as it drops to the ground.                                      ";
  xx[ii++] =
    "309     A glistening opal exits the can and lands at your feet!                         ";
  xx[ii++] =
    "310     The soda can is empty.                                                          ";
  xx[ii++] =
    "311     The soda can leaks like a sieve and is soon empty again.                        ";
  xx[ii++] =
    "201     게임을 일시 중단하는 것에는 의미가 없습니다.                                             ";
  xx[ii++] =
    "202     우물은 물로 가득 차 있습니다!                                                        ";
  xx[ii++] =
    "203     플러그는 바닥에 단단히 고정되어 손으로 제거할 수 없습니다.                              ";
  xx[ii++] =
    "204     고무 오리는 손이 닿지 않는 곳에 있습니다.                                                 ";
  xx[ii++] =
    '205     강렬한 드워프 문자로 새겨진 글자가 있습니다. "R.I.P. Stabby,                     ';
  xx[ii++] =
    '205     Great Initialization 중에 잘못된 전달로 인해 정확하지 않게 이동되었습니다."                 ';
  xx[ii++] =
    "206     바닥과 벽이 약간 진동합니다.                                                        ";
  xx[ii++] =
    "207     그건 이상한 소리가 들립니다. 다시 시작하는 것이 좋겠군요.                                  ";
  xx[ii++] =
    '208     "천 번의 절개로 죽는다"라는 말 중 어느 부분을 이해하지 못하셨나요?                         ';
  xx[ii++] =
    "209     역겨울 거에요. 고맙지만 괜찮아요.                                                      ";
  xx[ii++] =
    "210     그 대책으로 땅에 단단히 고정되어 있습니다. 깨끗한 애들(당신 같은)이 접근할 수 없게 말이죠. ";
  xx[ii++] =
    "211     줄기를 잡으면서 실수로 한 잎을 떨어뜨립니다.                                             ";
  xx[ii++] =
    '212     하프는 당신의 손에서 힘들게 허우적거리며 "주인님! 주인님!"이라고 울부짖습니다.                   ';
  xx[ii++] =
    "213     어떤 변동이 있습니다. 잠시 기다려보세요...  >퍼프!<                                   ";
  xx[ii++] =
    "213     초록색 연기 구름이 방을 가득 채웁니다. 점차 구름이 사라지면서 한 명의 화가 난 거인이 팔을 휘둘러  ";
  xx[ii++] =
    '213     "도둑!"이라고 소리지르며 팔을 휘둘러 보냅니다.                                   ';
  xx[ii++] =
    "214     인접한 방에서 불안정한 연기가 흘러 나옵니다. 굵은 초록색 연기가 일그러져서                            ";
  xx[ii++] =
    '214     "도둑!"이라고 소리칩니다.                                                       ';
  xx[ii++] =
    "215     거인은 양손으로 당신을 붙잡고 쉽게 상체를 하체에서 분리합니다. 거인은 매우 영토에 연약합니다. ";
  xx[ii++] =
    '216     "도둑!"이라고 소리지르며 다가오는 화가 난 거인이 있습니다.                           ';
  xx[ii++] =
    '217     "도둑!"이라고 소리지르며 다가오는 화가 난 거인이 있습니다.                           ';
  xx[ii++] =
    '218     "도둑!"이라고 소리지르며 다가오는 화가 난 거인이 있습니다.                           ';
  xx[ii++] =
    '219     "도둑!"이라고 소리지르며 다가오는 화가 난 거인이 있습니다.                           ';
  xx[ii++] =
    '220     여기에 화가 난 거인이 있습니다. "도둑!"이라고 소리지르고 있습니다.                       ';
  xx[ii++] =
    '221     여기에 화가 난 거인이 있습니다. "도둑!"이라고 소리지르고 있습니다.                       ';
  xx[ii++] =
    '222     여기에 화가 난 거인이 있습니다. "도둑!"이라고 소리지르고 있습니다.                       ';
  xx[ii++] =
    '223     여기에 화가 난 거인이 있습니다. "도둑!"이라고 소리지르고 있습니다.                       ';
  xx[ii++] =
    '224     거인은 하프를 움켜잡고 어둠 속으로 돌아가며 "Bloody tourists(귀찮은 관광객들)"라고 중얼거립니다.   ';
  xx[ii++] =
    "225     거인은 흥미를 잃고 어둠 속으로 사라집니다.                                          ";
  xx[ii++] =
    "226     거인은 당신의 길을 막고 있습니다.                                                    ";
  xx[ii++] =
    "227     아치로 가득 차는 동안 거인은 정확하게 반으로 잘립니다. 상체는 잠깐 보이다가                     ";
  xx[ii++] =
    "227     죽음조차도 당신을 잡으려는 듯이 팔을 벌려 높이 유지합니다.                        ";
  xx[ii++] =
    "227     그런 다음 진한 초록색 연기 속으로 사라집니다. 그의 왼손이 있던 자리에는 무언가 남아 있습니다.   ";
  xx[ii++] =
    "228     거인은 천천히 앞으로 눕혔을 뿐입니다! 농담이에요, 거의 알아채지 못합니다.                     ";
  xx[ii++] =
    "229     도끼는 거인의 눈 사이에 맞았지만, 아무 일도 일어나지 않습니다.                             ";
  xx[ii++] =
    "230     콩나무는 너무 튼튼해서 손상시킬 수 없습니다.                                           ";
  xx[ii++] =
    "231     연한 줄기에 힘들게 쳐도 효과가 없습니다.                                                 ";
  xx[ii++] =
    "231     누가 그 도끼를 주었을까요? 당신 어머니요?                                               ";
  xx[ii++] =
    '232     다음은 "Shoot foot"인가요?                                                        ';
  xx[ii++] =
    "233     손가락이 벌레와 거미줄을 지나서 매끈한 별모양의 돌에 닿습니다.                              ";
  xx[ii++] =
    "234     톱니 모양 가시들의 숲 뒤로 토끼는 닿을 수 없는 곳에 있습니다.                               ";
  xx[ii++] =
    "235     당신은 주의를 분산시킨 토끼에서 목걸이를 손쉽게 잡아냅니다.                                ";
  xx[ii++] =
    "235     놀란 토끼가 가시들 사이로 다시 뛰어들어 사라집니다.                                      ";
  xx[ii++] =
    "236     토끼가 앞으로 뛰어가서 식물 잎을 흥미롭게 맡아보고 뜯어먹기 시작합니다.                          ";
  xx[ii++] =
    "236     토끼(따라서 목걸이도)는 가시들의 숲 뒤로 이동합니다.                                    ";
  xx[ii++] =
    "237     토끼(따라서 목걸이도)는 닿을 수 없는 가시들의 숲 뒤로 뒤로 절망적으로 뛰어들어 사라집니다.           ";
  xx[ii++] =
    "238     토끼가 실망스러워하며 가시들의 숲 속으로 다시 뛰어들어갑니다.                              ";
  xx[ii++] =
    "240     잡지를 빈 자리에 넣습니다.                                                             ";
  xx[ii++] =
    "240     세상이 조금 더 깔끔해 보입니다.                                                          ";
  xx[ii++] =
    "241     세상은 쓰레기 버리기를 싫어합니다.                                                        ";
  xx[ii++] =
    "242     토끼는 너무 빨라서 갑자기 가시들의 무리 속으로 다시 들어갑니다.                             ";
  xx[ii++] =
    "242     조심스럽게 쳐다보며 당신을 바라보고 있습니다.                                              ";
  xx[ii++] =
    "243     당신은 가차없이 무방비한 동물을 잡아 죽입니다. 피로 덮인 시체가 사라져서                     ";
  xx[ii++] =
    "243     고운 하얀 연기 구름 속에 있는 멋진 목걸이가 드러납니다.                                    ";
  xx[ii++] =
    "244     그걸로 인해 점수를 깎아야 할 것 같지만, 도끼를 사용하는 것을 좋아하는 모습을 보니까요.            ";
  xx[ii++] =
    "245     우리 PG 등급이 망가졌어요. Space Invaders를 하는 게 좋을 거예요.                        ";
  xx[ii++] =
    "246     으웩! 괜찮아요, 그만 둘게요.                                                            ";
  xx[ii++] =
    "247     ... >nnGGG!< ... >NNGGG!!!< ... 아니, 너무 무거워요.                                    ";
  xx[ii++] =
    "248     막대기가 바닥에 딱 맞게 떨어지고, 금방이라도 확장되어 분화구 위를 완전히 커버합니다.               ";
  xx[ii++] =
    "249     점프하는 대신 막대기를 따라 가는 것을 권해드립니다.                                        ";
  xx[ii++] =
    "250     분화구를 건너갈 방법은 없습니다.                                                         ";
  xx[ii++] =
    "251     하루 종일 파고들어도 여기에는 아무 것도 찾을 수 없습니다.                                ";
  xx[ii++] =
    "252     도랑을 깊게 파면 빠르게 물이 차오르고 좁은 길의 경사로를 따라 흘러갑니다.                         ";
  xx[ii++] =
    "253     도랑을 더 크게 만듭니다.                                                                ";
  xx[ii++] =
    "254     유감스럽게도 삽이 없으니까요.                                                           ";
  xx[ii++] =
    "255     예쁜 조약돌을 들고 손가락에 예리한 찔림을 느낍니다.                                       ";
  xx[ii++] =
    "255     아마 조약돌은 그냥 두는 게 좋을 것 같습니다.                                              ";
  xx[ii++] =
    "256     구더기와 거미줄을 지나 피부를 먹어치우는 수백 마리의 육식 곤충에게 스웨어밀링합니다.                   ";
  xx[ii++] =
    "256     당신의 살은 분리되고 뼈만 깔끔하게 남습니다.                                                 ";
  xx[ii++] =
    "257     여기에는 벌레가 보이지 않습니다.                                                          ";
  xx[ii++] =
    "258     여기에는 조약돌이 보이지 않습니다.                                                          ";
  xx[ii++] =
    "259     막대기가 너무 무거워서 분화구를 넘을 수 없습니다.                                           ";
  xx[ii++] =
    "260     막대기를 채널에서 빼내면 금방 원래의 3피트 형태로 줄어듭니다.                                 ";
  xx[ii++] =
    "261     피라미드가 베딸립니다.                                                                 ";
  xx[ii++] =
    "262     피라미드가 받침대에 나사로 고정되어 있습니다. 들 수 없습니다.                             ";
  xx[ii++] =
    "263     피라미드가 시계 방향으로 1/3 회전하고 날카로운 '찰칵' 소리와 함께 고정됩니다.                       ";
  xx[ii++] =
    "264     피라미드가 마지막 1/3 회전을 하고 약간 더 큰 '찰칵' 소리로 종료됩니다.                           ";
  xx[ii++] =
    "264     잠시 후, 천천히 기둥 속으로 내려가 사라집니다.                                             ";
  xx[ii++] =
    "264     낮은 울림이 들리며 서쪽 벽에 낮은 문이 생깁니다.                                             ";
  xx[ii++] =
    "265     표지판이 마법처럼 떠오르고 천천히 올라가서 머리 위 한 피트 위에 메시지를 표시합니다.                        ";
  xx[ii++] =
    "265     잘했어요! 여러 모험가들이 낭비되는 움직임을 하지 않게 되었습니다!                             ";
  xx[ii++] =
    '266     "이 지점 이후로는 개발 중인 동굴입니다. 본인 책임 하에 진행하십시오.                    ';
  xx[ii++] =
    '266      Witt 건설회사."                                                                      ';
  xx[ii++] =
    "267     가까운 난쟁이로부터 예리한 시선을 받아서 메시지판을 망치는 생각을 두 번 생각합니다.                  ";
  xx[ii++] =
    "268     ... 판매: 상업용 자동 판매기. 거의 사용하지 않았습니다. 관리부에 문의하세요.                  ";
  xx[ii++] =
    "269     ... 알림: 방문자들이 나가면서 동굴에 Spelunker 잡지를 떨어뜨리지 말아주세요. 잡지는                 ";
  xx[ii++] =
    "269     ... 다음 방문객들을 위해 동굴 입구에 있는 잡지 선반에 반환되어야 합니다.                         ";
  xx[ii++] =
    "270     ... 분실물: 큰 녹색 뱀. 새를 무서워합니다. 발견 시 관리부에 연락해주세요.                      ";
  xx[ii++] =
    "271     ... 분실물: 여러 보물들. 나열할 수 없을 정도로 많습니다. 하나라도 있다면 제 것입니다.             ";
  xx[ii++] =
    "271     ... Captain in the maze of twisty little passages, all alike.                      ";
  xx[ii++] =
    "272     ... 큰 밥의 추모제는 저녁 7시에 거인의 돌담에서 열립니다. 상황에 따라 웰 하우스에                       ";
  xx[ii++] =
    "272     ... 그의 아내에게 기부를 남겨주세요.                                                       ";
  xx[ii++] =
    "273     ... 주창고 코드가 변경되었습니다. 앞으로 새 코드를 사용하십시오.                                 ";
  xx[ii++] =
    '278     휴게실은 "안식처"로 간주됩니다. 폭력은 금지입니다.                                       ';
  xx[ii++] =
    "279     피라미드가 받침대 위에 놓여 있습니다.                                                   ";
  xx[ii++] =
    "280     피라미드가 부드러운 받침대 위에서 자유롭게 회전합니다. 흥미로운 일은 일어나지 않습니다.                  ";
  xx[ii++] =
    "281     낮은 덜컹거리는 소리와 함께 동쪽 벽에 낮은 문이 생깁니다.                                      ";
  xx[ii++] =
    "282     낮은 울림과 함께 동쪽의 문이 사라지고 작은 표면에 새빨간 흑상아리의 조각이 달린 견고한 바위 벽이 남습니다. ";
  xx[ii++] =
    "283     작은 문이 생기며 흥분한 상태의 흑상아리가 그림자 속으로 사라지도록 통과할 수 있게 됩니다.            ";
  xx[ii++] =
    "284     더 파낼 것이 없어 보입니다.                                                             ";
  xx[ii++] =
    "285     삽은 즉시 단단하고 금속적인 무언가에 닿습니다... 금빛 흑상아리입니다!                             ";
  xx[ii++] =
    "286     관이 쉽게 열리고 황금으로 장식된 사망 가면이 드러납니다!                                     ";
  xx[ii++] =
    "287     관이 쉽게 닫힙니다.                                                                   ";
  xx[ii++] =
    "288     관이 쉽게 열립니다.                                                                   ";
  xx[ii++] =
    "289     무거운 관이 움직이지 않습니다.                                                           ";
  xx[ii++] =
    "290     관은 이미 열려 있습니다!                                                               ";
  xx[ii++] =
    "291     관은 이미 닫혀 있습니다!                                                               ";
  xx[ii++] =
    "292     첫 번째 난쟁이: \"그래서 그가 '이제 우리는 잠을 잘 수 있어!'라고 말했어.\"                     ";
  xx[ii++] =
    '292     두 번째 난쟁이: "하하하하하하하하! 이해 못하겠다."                                         ';
  xx[ii++] =
    '293     첫 번째 난쟁이: "옛날에 램프가 다 타버리는 걸 기억나?"                                     ';
  xx[ii++] =
    '293     두 번째 난쟁이: "좋았어. 작업 시간이 짧았지."                                           ';
  xx[ii++] =
    '294     첫 번째 난쟁이: "왜 드워프들은 마법의 단어를 쓸 수 없을까?"                               ';
  xx[ii++] =
    '294     두 번째 난쟁이: "차별이다."                                                             ';
  xx[ii++] =
    '295     첫 번째 난쟁이: "그건 랜덤화기 때문이라고 하더라. +1 경계 조건이야."                         ';
  xx[ii++] =
    '295     두 번째 난쟁이: "하지만 그렇게 하면 벽 안에 반만 들어가게 되는 거잖아. 그걸 따로 코드로 처리해야 해."   ';
  xx[ii++] =
    "296     첫 번째 난쟁이: \"저장소 코드를 계속 바꾸는 이유를 모르겠어.\"                              ";
  xx[ii++] =
    '296     두 번째 난쟁이: "그들이 할 일은 뒤집는 것 뿐이야. 왜 귀찮게 하냐?"                           ';
  xx[ii++] =
    '297     첫 번째 난쟁이: "때로는 모든 것을 만든 더 높은 힘도 있고, 우리의 모든 움직임이 미리 스크립트된 것은   ';
  xx[ii++] =
    '297     아닐까 생각해."                                                                         ';
  xx[ii++] =
    '297     두 번째 난쟁이: "와, 그럴 수는 없어. 48K에서는 불가능하지."                                ';
  xx[ii++] =
    "298     램프가 잠시 깜빡거리고 밝은 안정적인 빛으로 비춥니다.                                      ";
  xx[ii++] =
    "299     문이 움직이지 않습니다.                                                                 ";
  xx[ii++] =
    "300     <찰칵!>                                                                                ";
  xx[ii++] =
    "301     <덜그럭!>                                                                              ";
  xx[ii++] =
    "302     <딩!> 소리와 함께 문이 벽 안으로 사라집니다.                                             ";
  xx[ii++] =
    "303     그걸 눌러도 아무 일도 일어나지 않습니다.                                                 ";
  xx[ii++] =
    "304     종이 한쪽에는 숫자 7628이 적혀 있습니다.                                                 ";
  xx[ii++] =
    "305     벽은 통과할 수 없습니다.                                                               ";
  xx[ii++] =
    "306     벽이 약간 떨리고 일부가 사라져 넓은 아치 모양의 문이 나타납니다.                             ";
  xx[ii++] =
    "307     캔을 들 때 소리가 울립니다.                                                             ";
  xx[ii++] =
    "308     캔이 땅에 떨어질 때 소리가 울립니다.                                                     ";
  xx[ii++] =
    "309     반짝이는 오팔이 캔에서 나와 발 밑에 떨어집니다!                                           ";
  xx[ii++] =
    "310     소다 캔은 비어 있습니다.                                                               ";
  xx[ii++] =
    "311     소다 캔이 많이 누수되어 곧 다시 비어집니다.                                             ";
  xx[ii++] =
    "-1                                                                                      ";

  // Initial Item Location and Immovability info (placd[] and fixd[]) arrays
  //         obj     plac[]  fixd[] (-1 for fixed or loc for 2-placed objects)
  xx[ii++] =
    "7                                                                                       ";
  xx[ii++] =
    "1       3                                                                               "; // keys
  xx[ii++] =
    "2       3                                                                               "; // lamp
  xx[ii++] =
    "3       8       9                                                                       "; // grate
  xx[ii++] =
    "4       10                                                                              "; // cage
  xx[ii++] =
    "5       11                                                                              "; // rod
  xx[ii++] =
    "6       0                                                                               "; // rod2
  xx[ii++] =
    "7       14      15                                                                      "; // steps
  xx[ii++] =
    "8       13                                                                              "; // bird
  xx[ii++] =
    "9       94      -1                                                                      "; // door
  xx[ii++] =
    "10      96                                                                              "; // pillow
  xx[ii++] =
    "11      19      -1                                                                      "; // snake
  xx[ii++] =
    "12      17      27                                                                      "; // fissure
  xx[ii++] =
    "13      101     -1                                                                      "; // table
  xx[ii++] =
    "14      103                                                                             "; // clam
  xx[ii++] =
    "15      0                                                                               "; // oyster
  xx[ii++] =
    "16      106                                                                             "; // magazine
  xx[ii++] =
    "17      0       -1                                                                      "; // dwarf
  xx[ii++] =
    "18      0                                                                               "; // knife
  xx[ii++] =
    "19      3                                                                               "; // food
  xx[ii++] =
    "20      3                                                                               "; // bottle
  xx[ii++] =
    "21      0                                                                               "; // water
  xx[ii++] =
    "22      0                                                                               "; // oil
  xx[ii++] =
    "23      109     -1                                                                      "; // mirror
  xx[ii++] =
    "24      25      -1                                                                      "; // plant
  xx[ii++] =
    "25      23      67                                                                      "; // plant too
  xx[ii++] =
    "26      111     -1                                                                      "; // stalagmite
  xx[ii++] =
    "27      35      110                                                                     "; // figure
  xx[ii++] =
    "28      0                                                                               "; // axe
  xx[ii++] =
    "29      97      -1                                                                      "; // drawing
  xx[ii++] =
    "30      0       -1                                                                      "; // pirate
  xx[ii++] =
    "31      119     121                                                                     "; // dragon
  xx[ii++] =
    "32      117     122                                                                     "; // chasm
  xx[ii++] =
    "33      117     122                                                                     "; // troll
  xx[ii++] =
    "34      0       0                                                                       "; // troll too
  xx[ii++] =
    "35      130     -1                                                                      "; // bear
  xx[ii++] =
    "36      0       -1                                                                      "; // message
  xx[ii++] =
    "37      126     -1                                                                      "; // volcano
  xx[ii++] =
    "38      140     -1                                                                      "; // vending machine
  xx[ii++] =
    "39      0                                                                               "; // batteries
  xx[ii++] =
    "40      96      -1                                                                      "; // carpet
  xx[ii++] =
    "41      141     -1                                                                      "; // well
  xx[ii++] =
    "42      142                                                                             "; // cork
  xx[ii++] =
    "43      113                                                                             "; // corkscrew
  xx[ii++] =
    "44      113     -1                                                                      "; // reservior
  xx[ii++] =
    "45      76      -1                                                                      "; // plaque
  xx[ii++] =
    "46      147     -1                                                                      "; // grotto
  xx[ii++] =
    "47      147     -1                                                                      "; // glowworms
  xx[ii++] =
    "48      8       -1                                                                      "; // magazine rack
  xx[ii++] =
    "49      0                                                                               "; // leaf
  xx[ii++] =
    "50      92      -1                                                                      "; // giant's archway
  xx[ii++] =
    "52      148                                                                             "; // rabbit
  xx[ii++] =
    "53      147     -1                                                                      "; // web
  xx[ii++] =
    "55      154     155                                                                     "; // rift
  xx[ii++] =
    "56      161                                                                             "; // shovel
  xx[ii++] =
    "57      153                                                                             "; // pebbles
  xx[ii++] =
    "58      156     -1                                                                      "; // pedestal 1
  xx[ii++] =
    "59      154     -1                                                                      "; // chittering 1
  xx[ii++] =
    "60      143     -1                                                                      "; // chittering 2
  xx[ii++] =
    "62      143     -1                                                                      "; // trench
  xx[ii++] =
    "63      108                                                                             "; // Witt sign
  xx[ii++] =
    "65      159     -1                                                                      "; // pedestal 2
  xx[ii++] =
    "66      156     -1                                                                      "; // pyramid door
  xx[ii++] =
    "67      157     -1                                                                      "; // hole with scarab
  xx[ii++] =
    "68      160     -1                                                                      "; // sarcophagus
  xx[ii++] =
    "69      160     -1                                                                      "; // scales
  xx[ii++] =
    "70      160                                                                             "; // mummified heart
  xx[ii++] =
    "71       62	   -1                                                                      "; // storage door panel
  xx[ii++] =
    "72      158	                                                                           "; // paper scrap
  xx[ii++] =
    "73      167	   -1                                                                      "; // eleven archway wall
  xx[ii++] =
    "74      165	                                                                           "; // soda can

  xx[ii++] =
    "150      18                                                                             "; // gold
  xx[ii++] =
    "151      27                                                                             "; // diamonds
  xx[ii++] =
    "152      28                                                                             "; // silver
  xx[ii++] =
    "153      29                                                                             "; // jewelery
  xx[ii++] =
    "154      30                                                                             "; // coins
  xx[ii++] =
    "155      0                                                                              "; // chest
  xx[ii++] =
    "156      92                                                                             "; // eggs
  xx[ii++] =
    "157      95                                                                             "; // trident
  xx[ii++] =
    "158      97                                                                             "; // vase
  xx[ii++] =
    "159      100                                                                            "; // emerald
  xx[ii++] =
    "160      101                                                                            "; // pyramid
  xx[ii++] =
    "161      0                                                                              "; // pearl
  xx[ii++] =
    "162      119     121                                                                    "; // rug
  xx[ii++] =
    "163      127                                                                            "; // spices
  xx[ii++] =
    "164      130     -1                                                                     "; // chain
  xx[ii++] =
    "165      113                                                                            "; // rubber duck
  xx[ii++] =
    "166      76                                                                             "; // jade dagger
  xx[ii++] =
    "167      0                                                                              "; // star ruby
  xx[ii++] =
    "168      152                                                                            "; // golden harp
  xx[ii++] =
    "169      148                                                                            "; // necklace
  xx[ii++] =
    "170      0                                                                              "; // ring
  xx[ii++] =
    "173      63                                                                             "; // silver teapot
  xx[ii++] =
    "174      168                                                                            "; // silver brooch
  xx[ii++] =
    "-1                                                                                      ";

  // Action Verb Message numbers (actspk[]) array
  xx[ii++] =
    "8                                                                                       ";
  xx[ii++] =
    "1       24                                                                              ";
  xx[ii++] =
    "2       29                                                                              ";
  xx[ii++] =
    "3       0                                                                               ";
  xx[ii++] =
    "4       33                                                                              ";
  xx[ii++] =
    "5       0                                                                               ";
  xx[ii++] =
    "6       33                                                                              ";
  xx[ii++] =
    "7       38                                                                              ";
  xx[ii++] =
    "8       38                                                                              ";
  xx[ii++] =
    "9       42                                                                              ";
  xx[ii++] =
    "10      14                                                                              ";
  xx[ii++] =
    "11      43                                                                              ";
  xx[ii++] =
    "12      110                                                                             ";
  xx[ii++] =
    "13      29                                                                              ";
  xx[ii++] =
    "14      110                                                                             ";
  xx[ii++] =
    "15      73                                                                              ";
  xx[ii++] =
    "16      75                                                                              ";
  xx[ii++] =
    "17      29                                                                              ";
  xx[ii++] =
    "18      13                                                                              ";
  xx[ii++] =
    "19      59                                                                              ";
  xx[ii++] =
    "20      59                                                                              ";
  xx[ii++] =
    "21      174                                                                             ";
  xx[ii++] =
    "22      109                                                                             ";
  xx[ii++] =
    "23      67                                                                              ";
  xx[ii++] =
    "24      13                                                                              ";
  xx[ii++] =
    "25      147                                                                             ";
  xx[ii++] =
    "26      155                                                                             ";
  xx[ii++] =
    "27      195                                                                             ";
  xx[ii++] =
    "28      146                                                                             ";
  xx[ii++] =
    "29      110                                                                             ";
  xx[ii++] =
    "30      13                                                                              ";
  xx[ii++] =
    "31      13                                                                              ";
  xx[ii++] =
    "-1                                                                                      ";

  // Liquids etc conditions (condl[]) array.
  xx[ii++] =
    "9                                                                                       ";
  //         cBit
  //         cBit 0 set if Loc not dark.
  xx[ii++] =
    "0       1       2       3       4       5       6       7       8       9               ";
  xx[ii++] =
    "0       10      100     115     116     126     141     142     147     163             ";
  xx[ii++] =
    "0       164     165     166                                                             ";
  xx[ii++] =
    "2       1       3       4       7       38      95      113     24                      ";
  xx[ii++] =
    "1       24                                                                              ";
  xx[ii++] =
    "3       46      47      48      54      56      58      82      85      86              ";
  xx[ii++] =
    "3       122     123     124     125     126     127     128     129     130             ";
  xx[ii++] =
    "4       8                                                                               ";
  xx[ii++] =
    "5       13                                                                              ";
  xx[ii++] =
    "6       19                                                                              ";
  xx[ii++] =
    "7       42      43      44      45      46      47      48      49      50              ";
  xx[ii++] =
    "7       51      52      53      54      55      56      80      81      82              ";
  xx[ii++] =
    "7       86      87                                                                      ";
  xx[ii++] =
    "8       99      100     101                                                             ";
  xx[ii++] =
    "9       108                                                                             ";
  xx[ii++] =
    "-1                                                                                      ";

  // Score classes (ctext[]) array
  xx[ii++] =
    "10                                                                                      ";
  xx[ii++] =
    "35      You are obviously a rank amateur.  Better luck next time.                       ";
  xx[ii++] =
    "100     Your score qualifies you as a novice class adventurer.                          ";
  xx[ii++] =
    '130     You have achieved the rating: "Experienced adventurer".                         ';
  xx[ii++] =
    '200     You may now consider yourself a "Seasoned adventurer".                          ';
  xx[ii++] =
    '450     You have reached "Junior master" status.                                        ';
  xx[ii++] =
    "500     Your score puts you in Master adventurer class C.                               ";
  xx[ii++] =
    "550     Your score puts you in Master adventurer class B.                               ";
  xx[ii++] =
    "569     Your score puts you in Master adventurer class A.                               ";
  xx[ii++] =
    "9999    All of adventuredom gives tribute to you, adventurer grandmaster!               ";
  xx[ii++] =
    "-1                                                                                      ";

  // Hints (hints[]) array
  xx[ii++] =
    "11                                                                                      ";
  //                 Elig    Hint  rSpeak(n) rSpeak(n)
  //         Hint    Loc >=  Cost  Question  Hint answer
  //  Index: 0       1       2       3       4
  xx[ii++] =
    "2       9999    10      0       0                                                       "; // Oyster
  xx[ii++] =
    "3       9999    5       0       0                                                       "; // Instructions?
  xx[ii++] =
    "4       4       2       62      63                                                      "; // Grate
  xx[ii++] =
    "5       5       2       18      19                                                      "; // Bird
  xx[ii++] =
    "6       8       2       20      21                                                      "; // Snake
  xx[ii++] =
    "7       75      4       176     177                                                     "; // Maze
  xx[ii++] =
    "8       25      5       178     179                                                     "; // Dark
  xx[ii++] =
    "9       20      3       180     181                                                     "; // Witt
  xx[ii++] =
    "-1                                                                                      ";
  xx[ii++] =
    "0                                                                                       ";

  LINSIZ = ii - 1;
  return xx;
}
