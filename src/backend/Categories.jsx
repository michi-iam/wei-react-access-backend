// Test without backend

import Figuren from "../assets/images/rmfigurensmall.jpg";
import Post1 from "../assets/images/posts/post1.jpg";
import Post2 from "../assets/images/posts/post2.jpg";
import Post3 from "../assets/images/posts/post3.jpg";
import Post4 from "../assets/images/posts/post4.jpg";
import Texte from "./Texte";

const text1 = Texte[0];
const text2 = Texte[1];
const text3 = Texte[2];



const Categories = [
    {
    "name": "Eine Kategorie - News",
    "linkName": "News",
    "order": 1,
    "posts": [
            {
                "id": 1,
                "order": 1,
                "linkName": "Name für Link",
                "template": "template1",
                "title": "Unsere Neuigkeiten",
                "subTitle": "mit einem Text voller Keywords",
                "text": text1,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "1",
                        "title": "Titel",
                        "src": Post1,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    
                    },
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Post2,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "ein hübscher kleiner Text am Rand, der auch irgendwelche tollen Buzzwords hat",
            },
            {
                "id": 1,
                "order": 0,
                "linkName": "Name für Link",
                "template": "template4",
                "title": "Noch mehr News",
                "subTitle": "anderes Design",
                "text": text1,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "1",
                        "title": "Titel",
                        "src": Post1,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    },
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Post2,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
                "id": 1,
                "order": 2,
                "linkName": "Name für Link",
                "template": "template2",
                "title": "Eltit ist der neue Titel",
                "subTitle": "wie Titel nur rückwärts",
                "text": text2,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Post2,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    },
                    {
                        "id": "3",
                        "title": "Titel",
                        "src": Post3,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
        ]
    }, 
    {
    "name": "Super mega tolle Posts",
    "linkName": "Tolle Posts",
    "order": 2,
    "posts": [
            {
                "id": 1,
                "order": 3,
                "linkName": "Name für Link",
                "template": "template3",
                "title": "template3: Titel&Untertitel extra, (kurzer) Text auf Imageslide",
                "subTitle": "sub1",
                "text": text3,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "1",
                        "title": "Titel",
                        "src": Post4,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    },
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Figuren,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
                "id": 1,
                "order": 3,
                "linkName": "Name für Link",
                "template": "template4",
                "title": "template3: Titel&Untertitel extra, (kurzer) Text auf Imageslide",
                "subTitle": "sub1",
                "text": text3,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "1",
                        "title": "Titel",
                        "src": Post4,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    },
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Post1,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
                "id": 1,
                "order": 4,
                "linkName": "Name für Link",
                "template": "template2",
                "title": "post1",
                "subTitle": "sub1",
                "text": text1,
                "links": [
                    {
                        "name": "mehr über Enten",
                        "href": "https://de.wikipedia.org/wiki/Entenv%C3%B6gel",
                    },
                    {
                        "name": "Lorem ipsum?",
                        "href": "https://loremipsum.de/",
                    }
                ],
                "mainImage": {
                    "id": "1",
                    "title": "Titel",
                    "src": Post1,
                    "alt": "alttext",
                    "main":true,
                    "slideTitle": "Wenn du die Slides so toll findest,",
                    "slideText": "dann heirate sie doch!",  
                },
                "images": [
                    {
                        "id": "1",
                        "title": "Titel",
                        "src": Post1,
                        "alt": "alttext",
                        "main":true,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    },
                    {
                        "id": "2",
                        "title": "Titel",
                        "src": Post2,
                        "alt": "alttext",
                        "main":false,
                        "slideTitle": "Wenn du die Slides so toll findest,",
                        "slideText": "dann heirate sie doch!",                    }
                ],
                "seitenText": "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
        ]
    }, 
  

]


export default Categories;