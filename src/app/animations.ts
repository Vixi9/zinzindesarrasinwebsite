import { animate, animateChild, query, style, transition, trigger, group } from "@angular/animations";

export const fadeInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            group([
                query(':leave', [
                    style({
                        opacity: 100
                    }),
                    animate('500ms ease-in', style({
                        opacity: 0
                    }))
                ]),
                query(':enter', [
                    style({
                        opacity: 0
                    }),
                    animate('500ms ease-in', style({
                        opacity: 100
                    }))
                ]), 
            ]),
        ])
    ]);