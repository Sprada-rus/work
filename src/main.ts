import MobileNavigation from './Navigation';
import './bootstrap-init.scss';
import {Carousel} from "bootstrap";

//add navigation logic
let mobileNavigationInit = false;
const navigationEl = document.querySelector('header nav');
const navigation = new MobileNavigation(navigationEl);

const closeNavigationEl = navigationEl?.querySelector('.btn-close-navigation');
closeNavigationEl?.addEventListener('click', navigation.closeNavigationHandler);

const openNavigationEl = document.querySelector('header .btn-open-navigation');
openNavigationEl?.addEventListener('click', navigation.openNavigationHandler);

const resizeHandler = () => {
    const width = window.innerWidth;

    if (width < 1024 && !mobileNavigationInit) {
        navigationEl?.classList.add('hidden', 'close');
        navigation.addAnimation();
        mobileNavigationInit = true;
    } else if (width >= 1024) {
        navigation.removeAnimation();
        navigationEl?.classList.remove('hidden', 'close');
        mobileNavigationInit = false;
    }
}

new Carousel('#example-carousel');


window.addEventListener('resize', resizeHandler)
resizeHandler();