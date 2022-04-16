import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../shared/services/response.service';

@Component({
  selector: 'app-article-detaiil',
  templateUrl: './article-detaiil.component.html',
  styleUrls: ['./article-detaiil.component.css']
})
export class ArticleDetaiilComponent implements OnInit {

  responses : any;

  constructor(private responseService: ResponseService) { }

  ngOnInit(): void {
    this.responseService.getAllResponse().subscribe(data => {
      this.responses = data;
    });
  }

}
