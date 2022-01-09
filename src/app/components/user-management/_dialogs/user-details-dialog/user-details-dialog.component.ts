import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.scss']
})
export class UserDetailsDialogComponent implements OnInit {

  public unsubscriber$ = new Subject<void>();
  submitted: boolean = false;
  loading: boolean = true;
  isSearching: boolean = false;
  sameSkillUsers: User[] = [];

  constructor(
    public _bottomSheetRef: MatBottomSheetRef<UserDetailsDialogComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: { user: User, skill: string },  private apiService: ApiService) { }

    close(): void{
      this._bottomSheetRef.dismiss();
    }

  ngOnInit(): void {
    this.loading = true;
    const data = this.data.skill;
    this.apiService.searchSkill(data).pipe(takeUntil(this.unsubscriber$)).subscribe(
      res => {
        this.submitted = false;
        this.loading = false;
        this.sameSkillUsers = res.results;
      },
      err => {
        this.submitted = false;
        this.loading = false;
      }
    );
    
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.unsubscribe();
  }

}
