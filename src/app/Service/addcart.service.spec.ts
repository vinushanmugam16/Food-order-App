import { TestBed } from "@angular/core/testing";
import { AddcartService } from "./addcart.service";
import { BehaviorSubject } from "rxjs";

describe('AddcartService', () => {
    let service: AddcartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AddcartService]
        });
        service = TestBed.inject(AddcartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be get items as observable', () => {
        const itemList = service.getItemListadd()
        expect(itemList).toBeInstanceOf(BehaviorSubject);
    });
})