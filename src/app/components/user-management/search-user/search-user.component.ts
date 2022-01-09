import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, OnDestroy {
  userSearchForm: FormGroup;
  @Output() handleOnSearch: EventEmitter<any> = new EventEmitter();
  @ViewChild('input', { static: true })
  inputRef!: ElementRef;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService,
    public sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userSearchForm = this.formBuilder.group({
      name: ['']
    });
  }

  ngOnInit(): void {
this.userSearchForm.patchValue({
  name: this.sharedService.query
})
    // Debounce search
    fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , filter(res => res.length > 2)
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {

      const val = this.userSearchForm.value.name.trim();

      if (val) {
        this.router.navigate(
          [],
          {
            relativeTo: this.activatedRoute,
            queryParams: { q: val },
            queryParamsHandling: 'merge',
          });

        this.handleOnSearch.emit([val])
      }

    });


  }

  ngOnDestroy(): void {
  }

}

