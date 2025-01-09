import './style.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import hideLoader from './hideLoader'
import heroBg from './heroBg'
import showBuko from './showBuko.js'
import showHeroP from './showHeroP.js'
import showHeroHeader from './showHeroHeader.js'
import showHeroContent from './showHeroContent.js'
import showHeader from './showHeader.js'
import bukoAnim from './bukoAnim.js'
import roadmap from './roadmap.js'
import tokenomics from './tokenomics.js'
import numbers from './numbers.js'
import htb from './htb.js'
import rombs from './rombs.js'
import boat from './boat.js'



const bukoAnimated = new Image();
bukoAnimated.src = '/img/heroContent.gif';
window.onload = function () {
    setTimeout(() => {
        heroBg()
        hideLoader()
        // Тут анимки на главной страничке (на главном экране)
        setTimeout(async () => {
            await showHeroHeader(gsap, 1)
            await showHeroContent(gsap, 1)
            showHeroP(gsap)
            showHeader(gsap)
            await showBuko(gsap, 1)
            bukoAnim(bukoAnimated, 1)
        }, 500);
        rombs()
        roadmap(gsap)
        tokenomics(gsap)
        numbers(gsap)
        htb(gsap)
    }, 500);
};


