import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private data: ApiserviceService) {}

  ngOnInit(): void {
    this.data.getProducts().subscribe((responseData: any) => {
      this.products = responseData.products;
      console.log(this.products);
    });
  }
}
