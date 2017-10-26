import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerElem = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }
    refreshWaypoints() {
        this.lazyImages.on('load', () => {
            Waypoint.refreshAll();
        })
    }
    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElem[0],
            handler: (direction) => {
                if (direction == "down") this.siteHeader.addClass('site-header--dark');
                else this.siteHeader.removeClass('site-header--dark');
            }
        })
    }
    createPageSectionWaypoints() {
        this.pageSections.each((ind, elem) => {
            new Waypoint({
                element: elem,
                handler: (direction) => {
                    if (direction == 'down') {
                        let matchingHeaderLink = elem.getAttribute('data-matching-link');
                        this.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '18%'
            })
            new Waypoint({
                element: elem,
                handler: (direction) => {
                    if (direction == 'up') {
                        let matchingHeaderLink = elem.getAttribute('data-matching-link');
                        this.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '40%'
            })
        });
    }
}
export default StickyHeader;