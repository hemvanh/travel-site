import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(classSelector, offset) {
        this.offset = offset;
        this.itemsToReveal = $(classSelector);
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        this.itemsToReveal.each((ind, item) => {
            new Waypoint({
                element: item,
                handler: () => {
                    $(item).addClass('reveal-item--is-visible');
                },
                offset: this.offset
            });
        })
    }
}

export default RevealOnScroll;