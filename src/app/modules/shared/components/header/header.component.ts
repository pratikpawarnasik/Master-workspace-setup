import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
  implements OnInit{

  selectedLanguage!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'EN';
  }
  onLanguageButtonClick(language: string): void {
    this.selectedLanguage = language;
    this.sharedService.languageChange.emit(language);
  
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
  }
}
