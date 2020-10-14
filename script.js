   var i = 0;
    var j = 0;
    var k=0;
    var l=0;
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
          if (width >=87) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
     
      if (j == 0) {
        j = 1;
        var elem2 = document.getElementById("myBar2");
        console.log(elem2);
        var width2 = 1;
        var id2 = setInterval(frame, 25);
        function frame() {
          if (width2 >= 81) {
            clearInterval(id2);
            j = 0;
          } else {
            width2++;
            elem2.style.width = width2 + "%";
            elem2.innerHTML = width2 + "%";
          }
        }
      }
      
      if (k == 0) {
        k = 1;
        var elem3 = document.getElementById("myBar3");
        console.log(elem3);
        var width3 = 1;
        var id3= setInterval(frame, 33);
        function frame() {
          if (width3 >= 83) {
            clearInterval(id3);
            j = 0;
          } else {
            width3++;
            elem3.style.width = width3 + "%";
            elem3.innerHTML = width3 + "%";
          }
        }
      }
      
      if (l == 0) {
        j = 1;
        var elem4 = document.getElementById("myBar4");
        console.log(elem4);
        var width4 = 1;
        var id4 = setInterval(frame, 34);
        function frame() {
          if (width4 >= 90) {
            clearInterval(id4);
            j = 0;
          } else {
            width4++;
            elem4.style.width = width4 + "%";
            elem4.innerHTML = width4 + "%";
          }
        }
      }
    }
