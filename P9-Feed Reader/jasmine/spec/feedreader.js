$(function() {
    describe('RSS Feeds', function() {
    	//feeds of rss feeds
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //checking is the array is defined or not
            
            expect(allFeeds.length).not.toBe(0); //checking length of zero
        });



  it('url defined or not null', function() {
           for(var a=0 ; a < allFeeds.length ; a++){
            expect(allFeeds[a].url).toBeDefined();//checking is the url is defined
            expect(allFeeds[a].length).not.toBe(0);//checking length of allFeeds
            expect(allFeeds[a].url.length > 0).toBe(true);
             expect(allFeeds[a].url).not.toBe(null);
        }
        });
 it(' name should be  defined and name must be  not null', function() {
          for(var l = 0; l < allFeeds.length; l++){
            expect(allFeeds[l].name).toBeDefined();//name should be defined
            expect(allFeeds[l].name.length > 0).toBe(true);
            expect(allFeeds[l].name.length).not.toBe(0);
            expect(allFeeds[l].name.length).toBeGreaterThan(0);//checking length of allFeeds
          }
        });
    });




describe('The menu', function() {
//the menu
        var bodyreference = $('body');
        it('the menu element is hidden', function() {          
           expect($('body').hasClass('menu-hidden')).not.toBe(false);////// check menu item is hidden 
        });
//check for menu display/hide on clicks
       it('the menu changes  visibility when the menu icon is clicked', function() {
        	 $('.menu-icon-link').click();  //clicking
            expect($('body').hasClass('menu-hidden')).toBe(false);//to check after clicking
			     $('.menu-icon-link').click();  //click 
          expect($('body').hasClass('menu-hidden')).not.toBe(false);//check again
       });
    });







 describe('Initial Entries', function() {
var bodyreference = $('body');
        
       beforeEach(function(done) {

          loadFeed(0, done);
       });

       it('should contain Single Entry every time it runs', function(done) {
          expect($('.feed .entry').length > 0).not.toBe(false);//check length
          done();
       });
    });

  

 describe('New Feed Selection', function() {

       var ltfeed;
       var nwfeed;

       beforeEach(function(done) {
          
          loadFeed(0, function() {
            ltfeed = $('.header-title').html();
            loadFeed(1, function(){ // meet async func demand
                 nwfeed = $('.header-title').html();
                 // fetching feeds
                 done();
            });
         });
       });

       //check for feed change  Reload
       it('Feeds will be updated', function() {
          expect(ltfeed).not.toEqual(nwfeed);  // updation of feed
       });
    });

}());


