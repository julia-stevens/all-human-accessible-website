# All Human Accessible Website

## Opdracht

De afgelopen 2 weken heb ik gewerkt aan de opdracht _Mediahuis_ van Triple. Deze opdracht luidt als volgt: creëer een radioguide (een webapp) die informatie geeft over programma's, DJ's, en een persoonlijke ervaring biedt voor elke luisteraar. 

**Accessibility**

Gedurende deze sprint heb ik me concreet gericht op de accessibility van de website. Ik heb de radioguide toegankelijker gemaakt volgens de WCAG richtlijnen. 

De instructie van deze leertaak staat in [INSTRUCTIONS](https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/INSTRUCTIONS.md)

**Over Triple & Mediahuis**

Mediahuis, met wortels in België, is uitgegroeid tot een invloedrijke speler in de Europese mediamarkt. Het bedrijf, actief in de Benelux, Duitsland en Ierland, heeft een divers portfolio van nieuwsmerken, online platforms en radiostations. Sinds 2023 heeft Mediahuis haar bereik verder uitgebreid door de overname van verschillende populaire radiostations, waaronder Radio Veronica, SLAM!, Sublime, Sunlite en 100% NL. 

Triple is verantwoordelijk voor het ontwikkelen en onderhouden van de web apps en mobiele apps voor al deze radiozenders. Dit omvat zowel de front-end ontwikkeling, die zorgt voor de gebruikersinterface en -ervaring, als de back-end ontwikkeling, die de technische infrastructuur en functionaliteiten van de apps ondersteunt. Door deze uitgebreide samenwerking draagt Triple bij aan het succes van de digitale kanalen van Mediahuis en zorgt het ervoor dat luisteraars een optimale ervaring hebben.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Wanneer luisteraars van Radio Veronica, SLAM!, 100% NL of Sublime naar de website van hun radiostation navigeren, dan krijgen ze (op desktop) een programmering overzicht te zien van alle radiozenders van het Mediahuis. 

In één keer kan de gebruiker tussen radiozenders switchen en informatie lezen over de programma's, de DJ's en de programmering van de hele week. 

De website is repsonsive en mobile first ontworpen. Op mobiel is er een gedetailleerd overzicht te zien van één zender, met een extra menu om tussen de stations te switchen. 

Bekijk hier de website: https://julia-stevens.github.io/all-human-accessible-website/

<img width="600" alt="image" src="https://github.com/user-attachments/assets/271a2112-5e1d-4c44-9ed2-83b1ff675d23"> <img width="220" alt="image" src="https://github.com/user-attachments/assets/b1f1965c-d7ab-4ee8-9041-be59cead1793">

_Layout Desktop_

## Gebruik
Op mobiel wordt het overzicht weergegeven van het station waarop de gebruiker de website in eerste instantie openede. Hier wordt informatie gegeven over de programmering, over de programma's én DJ's. Ook kan er doorgeklikt worden om nog meer informatie te krijgen over deze onderwerpen. 
Op desktop wordt de gehele programmering van alle bijbehorende radiozenders weergegeven en kan een gebruiker gemakkelijk switchen tussen de verschillende zenders. 
Om meer ruimte op het scherm te creëeren, scrollen op mobiel de bovenste menu's met de gebruiker mee. 

https://github.com/user-attachments/assets/81aa3fff-54f6-4fc4-a3e0-0791b17fec19

https://github.com/user-attachments/assets/9d110913-f565-4060-971b-5b8a4d48a404

https://github.com/user-attachments/assets/0fd0c9c0-17bc-4b71-a3ae-4b406ed2ea00

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

De website is gebouwd met [HTML](https://github.com/julia-stevens/all-human-accessible-website/blob/main/index.html), [CSS](https://github.com/julia-stevens/all-human-accessible-website/blob/main/styles/styles.css) en [JavaScript](https://github.com/julia-stevens/all-human-accessible-website/blob/main/scripts/script.js)

### **HTML**
Hieronder staat de structuur van de [HEAD](#head) en [BODY](#body)

#### **HEAD**
In de `head` wordt de styleguide ingeladen met styling voor de hele pagina. 

```html
<link rel="stylesheet" href="./styles/styles.css">
```

#### **BODY**
De structuur van de `body` is [HEADER](#header), [MAIN](#main), [FOOTER](#footer)

##### **HEADER**
In de `header` staat een `nav` met twee `ul`s. Dit zijn lijsten met de menu-items. 

```html
<nav>
  <ul class="nav-pagina"><ul>
  <ul class="nav-week"></ul>
</nav>
```
De navigatie met de dagen van de week bevat twee `span` elementen, waarvan één verborgen voor screen readers

``` html
<li>
    <a href="#">
        <span aria-hidden="true">Ma <strong>23</strong></span> 
        <span class="sr-only">Maandag 23 september</span> 
    </a>
</li>
```

##### **MAIN**
In de `main` staat een `aside` met verschillende `time`s om de tijdlijn te maken

``` html
<time datetime="00:00">00:00</time>
```
Daarnaast heeft iedere radiozender een aparte `ul` met daarin de showblokken in `article`s
``` html
<ul class="programmering-veronica">
     <li>
         <article>Hier de content van elk show blok</article>
     </li>
 </ul>
```

##### **FOOTER**
De `footer` bevat een `button` om het menu van de zenders te openen

```html
<button><img src="./assets/circle-up.svg" alt="Bekijk de programmering van andere radiozenders"></button>
```
Daarnaast staat hier een `section` met de muziek player

```html
<section class="player">
    <h2>Goud Van Oud</h2>
    <p>Back To Black - Amy Winehouse</p>
</section>
```

### **CSS**
In CSS staat de indeling van de layout. Voor mobiel is dit een flexbox en vanaf 1100px wordt dit een grid. 

```css
main {
    display: flex; 
    gap: 1rem;
    justify-content: start;
    margin-left: 10px;
}
```
```css
@media screen and (min-width: 1100px) {
    main {
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(5, auto);
    }
}
```

### **JS**
Met JavaScript wordt het menu op mobiel geopend door een `toonMenu` class toe te voegen en een andere positie op het scherm triggert

```js
const footerButton = document.querySelector("footer button");

footerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const footerMenu = document.querySelector("footer ul");

    footerMenu.classList.toggle("toonMenu");
    footerButton.classList.toggle("toonMenu");
}
```

Ook wordt hier de positie van de tijdindicator bepaald 
```js
const now = new Date(), currentHour = now.getHours(), currentMinutes = now.getMinutes();  // Get current time
const totalTimeSpan = lastTimePosition - firstTimePosition, sizePerHour = totalTimeSpan / 24;  // Calculate space per hour
const indicatorPosition = (currentHour * sizePerHour) + firstTimePosition + (currentMinutes / 60) * sizePerHour + 3;  // Compute position
currentTimeIndicator.style[isDesktop ? 'left' : 'top'] = `${indicatorPosition}px`;  // Update indicator position based on screen type
```

## Bronnen
* Scroll functionaliteit https://jsfiddle.net/mariusc23/s6mLJ/31/
* Skip link https://www.geeksforgeeks.org/how-to-add-skip-navigation-links-for-better-web-accessibility-in-html/

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
