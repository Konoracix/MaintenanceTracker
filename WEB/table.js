const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const select = document.getElementById("machines");
const k11 = document.getElementById("11");
const k12 = document.getElementById("12");
const k21 = document.getElementById("21");
const k22 = document.getElementById("22");
const k31 = document.getElementById("31");
const k32 = document.getElementById("32");
const k41 = document.getElementById("41");
const k42 = document.getElementById("42");
const k51 = document.getElementById("51");
const k52 = document.getElementById("52");


function submit(){

    switch(select.value) {
        case "machine1repairs":
          title1.innerHTML = "Data Naprawy";
          title2.innerHTML = "Opis Naprawy";
          k11.innerHTML = "2023-06-06";
          k12.innerHTML = "Wymiana paska rozrządu";
          k21.innerHTML = "2022-03-12";
          k22.innerHTML = "wymiana sworznia tłoka siłownika hydrualicznego";
          k31.innerHTML = "2022-01-02";
          k32.innerHTML = "montaż nowej chłodnicy oleju";
          k41.innerHTML = "2023-05-18";
          k42.innerHTML = "regulacja naciągu taśmy taśmociągu";
          k51.innerHTML = "2021-10-21";
          k52.innerHTML = "wymiana żarówki";
          break;
        case "machine1reviews":
          title1.innerHTML = "Data Przeglądu";
          title2.innerHTML = "Wynik Przeglądu";
          k11.innerHTML = "2023-06-03";
          k12.innerHTML = "Brak usterek";
          k21.innerHTML = "2021-10-21";
          k22.innerHTML = "Brak usterek";
          k31.innerHTML = "2023-05-18";
          k32.innerHTML = "Wyciek z pod uszczelki pokrywy zaworów";
          k41.innerHTML = "2022-12-18";
          k42.innerHTML = "Brak usterek";
          k51.innerHTML = "2022-03-12";
          k52.innerHTML = "Brak usterek";
          break;
        case "machine1accidents":
          title1.innerHTML = "Data Awarii";
          title2.innerHTML = "Opis Awarii";
          k11.innerHTML = "2023-06-03";
          k12.innerHTML = "Uszkodzenie paska rozrządu";
          k21.innerHTML = "2021-10-21";
          k22.innerHTML = "Brak informacji";
          k31.innerHTML = "2023-05-18";
          k32.innerHTML = "Brak informacji";
          k41.innerHTML = "2022-12-18";
          k42.innerHTML = "Brak informacji";
          k51.innerHTML = "2022-03-12";
          k52.innerHTML = "Awaria elektryczna";
          break;
        case "machine2repairs":
          title1.innerHTML = "Data Naprawy";
          title2.innerHTML = "Opis Naprawy";
          k11.innerHTML = "2023-06-06";
          k12.innerHTML = "wymiana łańcucha";
          k21.innerHTML = "2021-12-23";
          k22.innerHTML = "naprawa układu dolotowego silnika pompy";
          k31.innerHTML = "2023-04-18";
          k32.innerHTML = "wymiana membrany pompy membranowej";
          k41.innerHTML = "2021-11-18";
          k42.innerHTML = "naprawa okablowania pulpitu operatora";
          k51.innerHTML = "2023-06-01";
          k52.innerHTML = "wymiana spowalniacza przyśpieszacza";
          break;
        case "machine2reviews":
          title1.innerHTML = "Data Przeglądu";
          title2.innerHTML = "Wynik Przeglądu";
          k11.innerHTML = "2023-03-19";
          k12.innerHTML = "Brak usterek";
          k21.innerHTML = "2021-06-25";
          k22.innerHTML = "Brak usterek";
          k31.innerHTML = "2022-09-10";
          k32.innerHTML = "Brak usterek";
          k41.innerHTML = "2023-02-01";
          k42.innerHTML = "Brak usterek";
          k51.innerHTML = "2021-11-17";
          k52.innerHTML = "Brak usterek";
          break;
        case "machine2accidents":
          title1.innerHTML = "Data Awarii";
          title2.innerHTML = "Opis Awarii";
          k11.innerHTML = "2022-04-08";
          k12.innerHTML = "złamanie wolantu sterowania wysięgnikiem";
          k21.innerHTML = "2023-05-30";
          k22.innerHTML = "Brak informacji";
          k31.innerHTML = "2022-01-14";
          k32.innerHTML = "Brak informacji";
          k41.innerHTML = "2021-10-05";
          k42.innerHTML = "Nadmiar spalin w układzie EGR";
          k51.innerHTML = "2023-01-07";
          k52.innerHTML = "Pęknięcie węża hydraulicznego pługu";
          break;
        case "machine3repairs":
          title1.innerHTML = "Data Naprawy";
          title2.innerHTML = "Opis Naprawy";
          k11.innerHTML = "2021-12-23";
          k12.innerHTML = "wyamina zespołu napędowego";
          k21.innerHTML = "2022-06-12";
          k22.innerHTML = "Przeczyszczenie filtra paliwa ";
          k31.innerHTML = "2023-03-05";
          k32.innerHTML = "przetkanie kanałów dolotowych";
          k41.innerHTML = "2021-08-28";
          k42.innerHTML = "modernizacja oświetlenia pojazdu";
          k51.innerHTML = "2021.04.20";
          k52.innerHTML = "wymiana przekładni planetarnej";
          break;
        case "machine3reviews":
          title1.innerHTML = "Data Przeglądu";
          title2.innerHTML = "Wynik Przeglądu";
          k11.innerHTML = "2022-07-19";
          k12.innerHTML = "Brak usterek";
          k21.innerHTML = "2021-06-05";
          k22.innerHTML = "Brak usterek";
          k31.innerHTML = "2023-02-12";
          k32.innerHTML = "Brak usterek";
          k41.innerHTML = "2022-10-30";
          k42.innerHTML = "Brak usterek";
          k51.innerHTML = "2023-01-28";
          k52.innerHTML = "Brak usterek";
          break;
        case "machine3accidents":
          title1.innerHTML = "Data Awarii";
          title2.innerHTML = "Opis Awarii";
          k11.innerHTML = "2022-03-14";
          k12.innerHTML = "zkruszenie przekładni napędu";
          k21.innerHTML = "2021-11-09";
          k22.innerHTML = "Brak informacji";
          k31.innerHTML = "2023-04-30";
          k32.innerHTML = "pożar w komorze silnika";
          k41.innerHTML = "2022-02-01";
          k42.innerHTML = "Brak informacji";
          k51.innerHTML = "2021-03-20";
          k52.innerHTML = "Wyciek paliwa";
          break;
      }




    
    return false;
}





