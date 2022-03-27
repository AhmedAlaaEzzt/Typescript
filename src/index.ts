/// <reference types="@types/google.maps" />

import {User} from './User';
import {Company} from './Company';
console.log("hello there!");

const user1 = new User();
const company1 = new Company();


console.log(user1);
console.log(company1);


new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 3,
    center: { lat: 0, lng: 0 },
  });
  