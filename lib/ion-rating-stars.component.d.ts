import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IonRatingStarsComponent implements OnInit {
    stars: number[];
    rating: number;
    size: number;
    color: string;
    filledColor: string;
    margin: number;
    disabled: boolean;
    ratingChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    rateChange(i: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonRatingStarsComponent, never>;
   // static ɵcmp: i0.ɵɵComponentDeclaration<IonRatingStarsComponent, "ion-rating-stars", never, { "rating": "rating"; "size": "size"; "color": "color"; "filledColor": "filledColor"; "margin": "margin"; "disabled": "disabled"; }, { "ratingChange": "ratingChange"; }, never, never, false, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonRatingStarsComponent, "ion-rating-stars", never, {"rating": "rating"; "size": "size"; "color": "color"; "filledColor": "filledColor"; "margin": "margin"; "disabled": "disabled"; }, { "ratingChanged": "ratingChanged"; }, never, never, false>;

}
