import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports : [PickupCallCardComponent]
})
export class SharedModule { }
