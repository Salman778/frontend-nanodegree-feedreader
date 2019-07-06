$(function() {
    //Test RSS Feeds
    describe('RSS Feeds', function() {
        //Test the defined and not empty of allFeeds
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Test the defined and not empty of url in allFedds
        it('url are defined and not empty', () => {
            allFeeds.forEach( ({url}) => {
                    expect(url).toBeDefined();
                    expect(url.length).not.toBe(0);
            });
        });
        //Test the defined and not empty of name in allFedds
        it('name are defined and not empty', () => {
            allFeeds.forEach( ({name}) => {
                    expect(name).toBeDefined();
                    expect(name.length).not.toBe(0);
            });
            
        });
    });
    //Test menu
    describe('The menu', () => {
        //Test of hideen by default
        it('hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Test of toggle or not whene clicked
        it('changes visibility when clicked', () => {
            $('.menu-icon-link').click();
            expect($('body').attr('class')).toBe('');
            $('.menu-icon-link').click();
            expect($('body').attr('class')).toBe('menu-hidden');
        });

    });
    //Test the Initial Entries
    describe('Initial Entries', () => {
        //Make sure the function is run before doing any test
        beforeEach( done => {
            loadFeed(1, done)
          });
          //Test the if loadFeed load the feed or not
          it('complete', () => {
              expect($('div.feed').children().length).toBeGreaterThan(1);
          });
    });
    //Test the New Feed Selection
    describe('New Feed Selection', () => {
        //Two variables to hold previous and next feed
        let firstLoadFeed, secondLoadFeed;
        //Make sure the function is run before doing any test
        beforeEach( done => {
            loadFeed(2, () => {
                //Hold first feed
                firstLoadFeed = $('div.feed').html();
                loadFeed(1, () => {
                    //Hold second feed
                    secondLoadFeed = $('div.feed').html();
                    done();
                });
            });
        });
        //Compare the first feed and the second feed
        it('load new feed', () => {
            expect(firstLoadFeed).not.toBe(secondLoadFeed);
        });
    });
}());
