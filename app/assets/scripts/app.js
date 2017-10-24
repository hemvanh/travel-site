import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let mMenu = new MobileMenu();
//let revealOnScroll = new RevealOnScroll();
let revealFeatures = new RevealOnScroll('.feature-item', '85%');
let revealTesimonials = new RevealOnScroll('.testimonial', '60%');
let stickyHeader = new StickyHeader();