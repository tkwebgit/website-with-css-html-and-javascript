document.getElementById('submitKnapp').addEventListener('click', function(){
  var alertDiv = document.getElementsByClassName('column-alert')[0];
  var myDiv = document.createElement('div');
  var p = document.createElement('p');
  var text = document.createTextNode('Formuläret är skickat');
  alertDiv.style.position = 'absolute';
  alertDiv.style.left = '70px';
  myDiv.className = 'div-modal';
  myDiv.style.border = '2px solid white';
  myDiv.style.position = '';
  myDiv.style.backgroundColor = '#2B4D6F';
  myDiv.style.display = 'flex';
  myDiv.style.width = '220px';
  myDiv.style.height = '110px';
  myDiv.style.position = 'relative';
  myDiv.style.zIndex = '999';
  p.className = 'p-alert';
  p.style.textAling = 'center';
  p.style.color = 'white';
  p.style.left = '40px';
  p.style.position = 'relative';
  p.style.textAling = 'black';
  alertDiv.appendChild(myDiv);
  myDiv.appendChild(p);
  p.appendChild(text);
  setTimeout(function(){
    myDiv.style.display = 'none';
  }, 2000);
});

//gör att javascripten körs när documentet har laddat färdigt
$(document).ready(function(){
  $(".knappner").click(function(){
    $(".cities, .cities").toggle();
  });
  $(".knappner").click(function(){
    $(".knappupp, .knappner").toggle();
  });
  $(".knappupp").click(function(){
    $(".cities, .cities").toggle();
  });
  $(".knappupp").click(function(){
    $(".knappupp, .knappner").toggle();
  });
});

var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.getElementById('mdc-toolbar'));
toolbar.fixedAdjustElement = document.getElementById('toolbar-fixed');

var drawer = new mdc.drawer.MDCTemporaryDrawer(document.getElementById('drawer'));
document.getElementById('menu').addEventListener('click', () => drawer.open = true);

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    var Navlink = document.querySelectorAll('.navlink')
    for (var i = 0; i < Navlink.length; i++) {
      Navlink[i].style.color = "whitesmoke";
    }
  } else {
    var Navlink = document.querySelectorAll('.navlink')
    for (var i = 0; i < Navlink.length; i++) {
      Navlink[i].style.color = "black";
  }
}
});

document.getElementById("submit").addEventListener("click", function(){
        var valueName = document.getElementById("operator_1").value;
        switch (valueName) {
          case 'restaurant':
            var a = document.querySelectorAll('.display_all')
            var b = document.querySelectorAll('.restaurant')
            for (var i = 0; i < a.length; i++) {
              a[i].style.display = "none";
            }
              for (var i = 0; i < b.length; i++) {
                b[i].style.display = "block";
            }
            break;
          case 'shows':
            var c = document.querySelectorAll('.display_all')
            var d = document.querySelectorAll('.shows')
            for (var i = 0; i < c.length; i++) {
              c[i].style.display = "none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.display = "block";
            }
            break;
          case 'music':
            var e = document.querySelectorAll('.display_all')
            var f = document.querySelectorAll('.music')
            for (var i = 0; i < e.length; i++) {
              e[i].style.display = "none";
            }
            for (var i = 0; i < f.length; i++) {
                f[i].style.display = "block";
            }
            break;
          case 'culture':
            var g = document.querySelectorAll('.display_all')
            var h = document.querySelectorAll('.culture')
            for (var i = 0; i < g.length; i++) {
              g[i].style.display = "none";
            }
            for (var i = 0; i < h.length; i++) {
                h[i].style.display = "block";
            }
            break;
          case 'guide':
            var j = document.querySelectorAll('.display_all')
            var k = document.querySelectorAll('.guide')
            for (var i = 0; i < j.length; i++) {
              j[i].style.display = "none";
            }
            for (var i = 0; i < k.length; i++) {
                k[i].style.display = "block";
            }
            break;
          case 'display_all':
            var l = document.querySelectorAll('.display_all')
            for (var i = 0; i < l.length; i++) {
              l[i].style.display = "block";
            }
            break;
        }
      });

// ------------------INFORMATION BUTTON -------------------------------------
var knappar = document.querySelectorAll('.buttons');
var info = document.querySelector('.info');

//for, knappar[i], knappar.length

for (var i = 0; i < knappar.length; i++) {
  knappar[i].addEventListener('click',function() {
    info.style.display = "block";
  } );
}
document.getElementById('exit').addEventListener('click', function(){
  var info = document.querySelectorAll('.info')
  for (var i = 0; i < info.length; i++) {
    info[i].style.display = "none";
  }
});
// -------------------LIKE BUTTON-------------------------------------
document.getElementById('upvote').onmousedown = like;
document.getElementById('downvote').onmousedown = dislike;
var l = 0;
var dl = 0;
function like()
{
  l = l + 1;
  document.getElementById('likeoutput').innerHTML = l;
}
function dislike()
{
  dl = dl + 1;
  document.getElementById('dislikeoutput').innerHTML = dl;
}
// ---------------------------COMMENT SECTION----------------------------------
function onClick() {
     vat(document.getElementById('comment').value);

 var element = document.createElement('li');
 var text = document.createTextNode(vat(document.getElementById('comment').value));
 element.appendChild(text);

 document.getElementById('result').appendChild(element);
}

function vat (comment) {
    return comment;
}
document.getElementById('send').addEventListener('click', onClick);





