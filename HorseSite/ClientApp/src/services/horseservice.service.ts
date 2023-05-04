import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Horseshort, ItemsRequest } from 'src/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class HorseService{
  public constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ){
  }
  
  private url = "horse"
  
  public getHorsesShort(request: ItemsRequest<Horseshort>): Observable<ItemsRequest<Horseshort>>{
    return this.http.post<ItemsRequest<Horseshort>>(`${this.baseUrl}${this.url}/filter`,request);
  }

  public getHorse(id:number):Observable<Horseshort>{
    return this.http.get<Horseshort>(`${this.baseUrl}${this.url}/getHorse`,{params:{id: id}});
  }
}