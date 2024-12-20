(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/jp/jp-all.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['jp-hs', 10], ['jp-sm', 11], ['jp-yc', 12], ['jp-km', 13],
        ['jp-eh', 14], ['jp-kg', 15], ['jp-is', 16], ['jp-hk', 17],
        ['jp-tk', 18], ['jp-3461', 19], ['jp-3457', 20], ['jp-ib', 21],
        ['jp-st', 22], ['jp-sg', 23], ['jp-yn', 24], ['jp-kn', 25],
        ['jp-fo', 26], ['jp-fs', 27], ['jp-3480', 28], ['jp-ts', 29],
        ['jp-ky', 30], ['jp-me', 31], ['jp-ai', 32], ['jp-nr', 33],
        ['jp-os', 34], ['jp-wk', 35], ['jp-ch', 36], ['jp-ak', 37],
        ['jp-mg', 38], ['jp-tt', 39], ['jp-hg', 40], ['jp-gf', 41],
        ['jp-nn', 42], ['jp-ty', 43], ['jp-ni', 44], ['jp-oy', 45],
        ['jp-ao', 46], ['jp-mz', 47], ['jp-iw', 48], ['jp-kc', 49],
        ['jp-ot', 50], ['jp-sz', 51], ['jp-fi', 52], ['jp-sh', 53],
        ['jp-tc', 54], ['jp-yt', 55], ['jp-3302', 56]
    ];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'JAPAN MAP'
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/jp/jp-all.topo.json">Japan</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();











$(document).ready(function(){
	
	
    popup();
   
    verticalText();
   
   //CREATE THE IMAGES
   $('.box-img').each(function(){
       var t = $(this);
       createImg(t);
   });	
   
   
   //RE-GENERATE IMAGES WHEN WINDOW RESIZED
   $(window).resize(function() {
       $('.box-img').each(function(){
           var t = $(this);
           createImg(t);
       });	
   });
   
   

   
   //ADD A COLOR BOX OR IMAGE BOX
   document.oncontextmenu = function() {return false;};
   
   $('.box').mousedown(function(e){ 
       
       var t = $(this);		
       var h2 = $(this).find('h2');
           
       if(h2.length){			
       }else{
           var h2t = document.createElement('h2');
           this.appendChild(h2t);
           
           var span = document.createElement('span');
           span.innerHTML = "This is a description of the box";
           this.appendChild(span);
       }
       
       //LEFT CLICK ADD IMG
       if( e.button == 0 ) { 
           $(this).addClass('box-img');
           $(this).find('h2').text("This is an image box");
           createImg(t);			
       }
       
       //RIGHT CLICK ADD COLOR
       if( e.button == 2 ) {
          $(this).find('h2').text("This is a color box");
          $(this).css('background-color', getRandomColor());
          t.removeClass('box-img');
          t.css('background-image', ''); 		  
       }
       
       verticalText();	
               
       
   }); 
   

});//DOCUMENT READY
   


function createImg(t){
   //get ths size of the box
   var w = t.width();
   var h = t.height();
   
   //make the image to be the same size of the box
   var src = "url(http://lorempixel.com/" + w + "/" + h + ")";
   
   t.css('background-image', src); 	
}



function verticalText(){
   //vertically center the text
   $('.box').each(function(){
       
       //let's vertically center the text
       var h2 = $(this).find('h2');
       
       if(h2.length){
           //found a <h2> tag
           var boxHeight = $(this).height()/2;
           var textHeight = h2.height()/2;
           var spanHeight = $(this).find('span').height()/2;
           
           var height = boxHeight - textHeight - spanHeight - 2; 
           
           h2.css('margin-top', height + 'px');
           
       }else{
           //didnt find a <h2>
       }		
       
   });
       
}



function getRandomColor() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}




function popup(){
   var overlay = $('<div class="overlay"></div>');
   overlay.appendTo($('body'));
   
   var box = $('<div class="pop"></div>').appendTo(overlay);
   
   var title = "<h1>Custom Grid Layout</h1>   <h2>A Pen by <a href='http://www.andrecortellini.com' target='_blank'><span>André Cortellini</span></a></h2>";
   
   var text = "<div><p>- Left click to add an image box</p> <p>- Right click to add a color box</p></div>";	
   var text2 = "<div><p>Create your custom gallery layout using this simple and responsive grid system</p></div>";
   
   box.html(title + text + text2);
   
   var clos = $('<div id="close">x</div>').appendTo(box);
   
   
   /******************************
    ADD ANIMATION TO THE TEXT 
   ******************************/
   var count = 0;
   var number = 10;
   
   var interval = setInterval(function(){
      count++;
      if (count === number) { 
              clearInterval(interval);
           $('.pop h1 ,.pop h2').addClass('animationActive');		
       }
   }, 50);
   
   
   clos.click(function(){
       $(this).parent().parent().remove();
   });
   
}










