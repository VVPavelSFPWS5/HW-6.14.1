const numDivs = 36;
const maxHits = 10;
let hits = 0;
let firstHitTime = 0;
let tempTime = 0;
let totalPlayedMillis = 0;

function round() {
  $('div.col').removeClass("target");// FIXME: надо бы убрать "target" прежде чем искать новый
  let divSelector = randomDivId();
  $(divSelector).removeClass("miss");
  $(divSelector).addClass("target");
  hits = hits + 1;
  $(divSelector).append(hits);// TODO: помечать target текущим номером 
    
  if (maxHits === hits -1) {
    endGame();
    }
}
function handleClick(event) {
$(event.target).html("");// FIXME: убирать текст со старых таргетов. Кажется есть .text?
  if ($(event.target).hasClass("target")){  
    round();
  }
  else {($(event.target).addClass("miss")) 
    hits = hits - 1;
  }
}

$(".game-field").click(handleClick);

$("#button-start").one('click', function(event){
    round();
    firstHitTime = getTimestamp(); // FIXME: тут надо определять при первом клике firstHitTime
    });

$("#button-reload").click(function() {
     location.reload();
    });

function endGame() {
  tempTime = getTimestamp()         
  totalPlayedMillis = tempTime - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#win-message").removeClass("d-none");
  $("div.col").hide();
}


