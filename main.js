var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 45) + 10;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size)+"px;height:"+(r_size)+"px;left:"+r_left+"%;background:rgba(252,3,232"+(r_bg-25)+","+r_bg+");-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(147,112,219"+(r_bg-25)+","+(r_bg+25)+");-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  var txt1 = "Hi Swathi .....!  <<               Now I say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days flew< We Both getting closer And in deep....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love you SWATHI 💜💜 |                  <<<< Just Trust Me Rest Of Our Life Will Be Awsm...!";
  var speed = 1;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
          $(".bg_heart").css("background-image","url('https://wallpapercave.com/wp/wp9080813.jpg')");
  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
