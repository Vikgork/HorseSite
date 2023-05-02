import { Component, OnInit } from '@angular/core';
import { Horseshort } from 'src/Models';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.css'],
})
export class AddHorseComponent implements OnInit {
  searchedHorses:Horseshort[]= [];
  breeds: string[] = [];
  trySearch:boolean = true;
  breedInput: string = '';
  nameInput: string = '';
  breedsWithSpace: string =
    'Абиссинская Абстанг Абтенайская Авелинская Австралийская пастушья Австралийская полукровная Австралийская тяжелоупряжная Австрийская полукровная Адаевская Азорская Азербайджанская Албанская Алтайская Альтер-реал Американская верховая Австрийская полукровная Американский квотерхорс Американская кремовая Американский кучерявый башкир Американский пейнтхорс Американская стандартбредная Андалузская Англо-арабская Аппалуза Ара-Аппалуза Арабская Арденская Аргентинская Арьежуаз Ауксуа Ацтекская Баварская полукровная Балеарская Белорусская упряжная Бельгийская полукровная Берберийская Башкирская Битюг Боснийская Брабансон Бразильская спортивная Брамби Бранденбургская Бретонская Будённовская Булонская Великопольская Венгерская полукровная Вестфальская Владимирский тяжеловоз Восточноболгарская Вюртембергская Вятская Ганноверская Гафлинская Гидран Голландская Голштинская Гонтер Гронингенская Дагестанская Датская полукровная Делибоз Дестриэ Джэбе Донская Жемайтская Забайкальская Иберийская Ирландская спортивная Ирландская тяжелоупряжная Исландская Почтовая марка Кабардинская Казахская Калмыцкая Камаргская Камполина Канадская Катхиавари Карабаирская Карабахская Карачаевская Каспийская Кигер-мустанг Кински Кишбер Киргизская Кладрубская Клейдесдаль Клеппер Кливлендская гнедая Крестьянская Кнабструпская Комтойс Коник польский Колорадо-рейнджер Креольская Кубинский иноходец Кустанайская Кушумская Латвийская Липпицианская Литовский тяжеловоз Локайская Лошадь Скалистых гор Лузитанская Малопольская Мангаларга Мареммано Марвари Мезенская Мекленбургская Миссурийский фокстроттер Монгольская Морган Мустанг Новоалександровская тяжелоупряжная Новоалтайская Новокиргизская Нониус Ольденбургская Орловский рысак Пасо-фино Перуанский пасо Першерон Печорская Пинцгауская Польский коник Польский тяжеловоз Португальская спортивная Приобская Русская верховая Русский рысак Русский тяжеловоз Североамериканская башкирская курчавая лошадь Советская тяжелоупряжная Соррайя Старая фламандская Суффолькская Тавдинская Татарская Теннессийская прогулочная Терская Тракененская Трэйт дю Норд Украинская верховая Уэльский коб Финская Флоридский крэкер Французский англо-араб Французский рысак Французский сель Фредериксборгская Фризская Фризская спортивная Фьордская Хакнэ Цыганская Чилийская Чистокровная верховая Шагия Шайрская Шварцвальдская лошадь Шведка Шленская Ютландская Эфиопская Якутская';
  constructor() {
    this.breeds = this.breedsWithSpace.split(' ').sort();
  }
  ngOnInit() {}

  showBreed() {}
  onSearchChange(search: string) {
    // delete repeated -> filter by search -> sort by start with search
    this.breeds = this.breedsWithSpace
      .split(' ')
      .filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      })
      .filter((x) => x.toLowerCase().includes(search.toLocaleLowerCase()))
      .sort((x, y) =>
        this.compareString(
          x.toLocaleLowerCase(),
          y.toLocaleLowerCase(),
          search.toLocaleLowerCase()
        )
      );
      this.isValidBreed(search)
  }

  compareString(x: string, y: string, search: string): number {
    if (x.startsWith(search) && y.startsWith(search)) {
      return x > y ? 1 : -1;
    } else if (x.startsWith(search) && !y.startsWith(search)) {
      return -1;
    } else if (!x.startsWith(search) && y.startsWith(search)) {
      return 1;
    } else if (!x.startsWith(search) && !y.startsWith(search)) {
      return x > y ? 1 : -1;
    } else {
      return 0;
    }
  }

  searchHorse() {
    let horseName, breed, fName, mName: string;
    let sex: boolean;
    let dateBitrh: Date | null;
    horseName = (document.getElementById('nameInput') as HTMLInputElement)
      .value;
    breed = (document.getElementById('breedInput') as HTMLInputElement).value;
    fName = (document.getElementById('fName') as HTMLInputElement).value;
    mName = (document.getElementById('mName') as HTMLInputElement).value;
    sex = (document.getElementById('gridRadios1') as HTMLInputElement).checked;
    dateBitrh = (document.getElementById('datebirth') as HTMLInputElement)
      .valueAsDate;
    if(this.isSearchValid(horseName,breed))
      this.trySearch=false;
      this.getSearchedHorse();
  }

  getSearchedHorse(){
    
  }

  isSearchValid(name:string,breed:string){
    return name.length>=3 && this.breeds.includes(breed);
  }

  onNameChange(name: string) {
    let input = document.getElementById('nameInput') as HTMLInputElement;
    if (name.length >= 3) {
      if (input.classList.contains('is-invalid'))
        document.getElementById('nameInput')?.classList.remove('is-invalid');
      if (!input.classList.contains('is-valid'))
        document.getElementById('nameInput')?.classList.toggle('is-valid');
    } else {
      if (!input.classList.contains('is-invalid'))
        document.getElementById('nameInput')?.classList.toggle('is-invalid');
      if (input.classList.contains('in-valid'))
        document.getElementById('nameInput')?.classList.remove('is-valid');
    }
  }
  isValidBreed(breed: string){
    let input = document.getElementById('breedInput') as HTMLInputElement;
    if (this.breeds.includes(breed) ) {
      if (input.classList.contains('is-invalid'))
        document.getElementById('breedInput')?.classList.remove('is-invalid');
      if (!input.classList.contains('is-valid'))
        document.getElementById('breedInput')?.classList.toggle('is-valid');
    } else {
      if (!input.classList.contains('is-invalid'))
        document.getElementById('breedInput')?.classList.toggle('is-invalid');
      if (input.classList.contains('in-valid'))
        document.getElementById('breedInput')?.classList.remove('is-valid');
    }
  }
  itemChoose(breed: string) {
    (document.getElementById('breedInput') as HTMLInputElement).value = breed;
    this.isValidBreed(breed);
  }
}
