import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

let mMenu = new MobileMenu();
//let revealOnScroll = new RevealOnScroll();
let revealFeatures = new RevealOnScroll('.feature-item', '85%');
let revealTesimonials = new RevealOnScroll('.testimonial', '60%');
let stickyHeader = new StickyHeader();
let modal = new Modal();