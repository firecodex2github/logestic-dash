import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  orders: any[] = [];

  constructor(private dataService:Service , private route : ActivatedRoute){}


  ngOnInit(): void {
    console.log(this.route.snapshot.data)
    this.orders = this.route.snapshot.data['orderslist']
  }

  
  deleteOrder(id:number){
    this.dataService.deleteOrder(id).subscribe(()=>{
    this.orders = this.orders.filter(order => order.id !== id);
    })
  }
}
