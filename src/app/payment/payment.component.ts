import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  foodItem: Item[];
  totalPrice: number = 0;
  showTotal: boolean = false;
  payment: FormGroup;
  address: FormGroup;
  paymentMethod: string;
  cod: boolean = false;

  constructor(private cart: CartService, private toast: ToastrService) { }

  // , public activeModal: NgbActiveModal
  ngOnInit() {
    this.totalAll();

    this.payment = new FormGroup({
      paymentOption: new FormControl('', Validators.required),
      upiId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/)]),
    })

    this.address = new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
      pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")])
    })
  }


  selectPaymentMethod(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.paymentMethod = target.value;
    if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
      this.showTotal = true;
    }
    else {
      this.cod = true;
    }
  }

  public totalAll() {
    this.cart.getCart()
      .subscribe((resp: any) => {
        this.foodItem = resp;
        this.totalPrice = this.foodItem.reduce((total, food) => total + (food.price * food.quantity), 0);
      })
  }

  processPayment() {
    this.foodItem.map((item: { id: number }) => {
      this.cart.deleteItem(item.id).subscribe(() => {
        this.totalPrice = 0;
        this.cart.itemLength();
        this.toast.success('Successfully Paid!');
      })
    })
  }




  // closeResult: string;


  // open(content: any) {  
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
  //     this.closeResult = `Closed with: ${result}`;  
  //   }, (reason: any) => {  
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
  //   });  
  // }  

  // private getDismissReason(reason: any): string {  
  //   if (reason === ModalOfDismissReasons.ESC) {  
  //     return 'by pressing ESC';  
  //   } else if (reason === ModalOfDismissReasons.BACKDROP_CLICK) {  
  //     return 'by clicking on a backdrop';  
  //   } else {  
  //     return  `with: ${reason}`;  
  //   }  
  // }  

  // public addNewData: any;
  // public category = ['breakfast', 'dinner', 'lunch'];
  public buttonAble = false;
  // private sidedishArray: Array<string>;

  // constructor(
  //   private formbuilder: FormBuilder,
  //   public activeModal: NgbActiveModal
  // ) {}

  // ngOnInit(): void {
  //   this.addNewData = this.formbuilder.group({
  //     category: ['', [Validators.required]],
  //     food: [
  //       '',
  //       [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
  //     ],
  //     quantity: ['', [Validators.required, Validators.min(1)]],
  //     foodunit: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
  //     sidedish: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern(/^[a-zA-Z ]+(?:,[a-zA-Z ]+)*$/),
  //       ],
  //     ],
  //     sidedishquantity: ['', [Validators.required, Validators.min(1)]],
  //     sidedishunit: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
  //     calorie: ['', [Validators.required, Validators.min(1)]],
  //   });
  // }

  // public dataTransfer() {
  //   if (this.addNewData.invalid) this.buttonAble = true;
  //   else {
  //     [...this.sidedishArray] = this.addNewData.value.sidedish.split(',');
  //     this.addNewData.value.sidedish = this.sidedishArray;
  //     this.activeModal.close(this.addNewData.value);
  //   }
  // }

  public buttonDisable() {
    this.buttonAble = false;
  }

}