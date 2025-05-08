export default class MobileNavigation {
    private htmlElement: HTMLElement;
    private navItems: HTMLElement[];
    private root = document.querySelector('html');

    constructor(element: Element|null) {
        this.htmlElement = element as HTMLElement;
        this.navItems = Array.from(this.htmlElement.querySelectorAll('.nav-items a'));
    }

    private endTransitionHandler = () => {
        if (this.htmlElement.classList.contains('close')) {
            this.htmlElement.classList.add('hidden');
        }
    };

    private goToPart = (event: Event) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const targetPart = document.querySelector(target.dataset.target || '');

        setTimeout(() => {
            targetPart?.scrollIntoView({block: "start", behavior: "smooth"});
            this.closeNavigationHandler();
        }, 200);
    }

    public openNavigationHandler = () => {
        this.htmlElement.classList.remove('hidden');

        if (this.root) {
            this.root.style.overflowY = 'hidden';
        }

        setTimeout(() => {
            this.htmlElement.classList.remove('close');
        }, 100);

        this.navItems.forEach((item: HTMLElement) => {
            item.addEventListener('click', this.goToPart);
        })
    }

    public closeNavigationHandler = () => {
        this.htmlElement.classList.add('close');

        if (this.root) {
            this.root.style.overflowY = ''
        }

        this.navItems.forEach((item: HTMLElement) => {
            item.removeEventListener('click', this.goToPart);
        })
    }

    public addAnimation = () => {
        this.htmlElement.addEventListener('transitionend', this.endTransitionHandler);;
    }

    public removeAnimation = () => {
        this.htmlElement.removeEventListener('transitionend', this.endTransitionHandler);
    }
}