import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Horseshort } from 'src/models';
import { HorseService } from 'src/services';

@Component({
  selector: 'app-horse-details',
  templateUrl: './horse-details.component.html',
  styleUrls: ['./horse-details.component.css'],
  providers: [HorseService]
})
export class HorseDetailsComponent implements OnInit {
  id:number=0;
  horse:Horseshort = new Horseshort();
  constructor(
    private route: ActivatedRoute,
    @Inject(HorseService) private horseService: HorseService
    ){}
    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
        .subscribe(data=> this.id = +data);
        this.getHorse();
      }

    getHorse(){
      this.horseService.getHorse(this.id).subscribe((horse: Horseshort)=> {
        this.horse = horse;
        console.log(horse);
      });
    }

}
