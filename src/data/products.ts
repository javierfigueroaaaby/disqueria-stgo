import nevermindImg1 from '../assets/img/cd-nevermind.jpg'
import nevermindImg2 from '../assets/img/cdb-nevermind.jpg'
import whiteponyImg1 from '../assets/img/cd-white_pony.jpg'
import whiteponyImg2 from '../assets/img/cdb-white_pony.jpg'
import dummyImg1 from '../assets/img/cd-dummy.jpg'
import dummyImg2 from '../assets/img/cdb-dummy.jpg'
import thequeenisdeadImg1 from '../assets/img/cd-the_queen_is_dead.jpg' 
import thequeenisdeadImg2 from '../assets/img/cdb-the_queen_is_dead.jpg' 
import gorillazImg1 from '../assets/img/cd-gorillaz.jpg' 
import gorillazImg2 from '../assets/img/cdb-gorillaz.jpg' 
import disintegrationImg1 from '../assets/img/cd-disintegration.jpg' 
import disintegrationImg2 from '../assets/img/cdb-disintegration.jpg' 
import lavidaeramascortaImg1 from '../assets/img/cd-la_vida_era_mas_corta.jpg' 
import lavidaeramascortaImg2 from '../assets/img/cdb-la_vida_era_mas_corta.jpg' 
import thebestofsadeImg1 from '../assets/img/cd-the_best_of_sade.jpg' 
import thebestofsadeImg2 from '../assets/img/cdb-the_best_of_sade.jpg' 

export interface Product {
    id: number
    name: string
    artist: string
    category: string
    price: number
    images: string[]
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Nevermind',
        artist: 'Nirvana',
        category: 'Grunge',
        price: 18000,
        images: [nevermindImg1, nevermindImg2]
    },
    {
        id: 2,
        name: 'White Pony',
        artist: 'Deftones',
        category: 'Metal Alternativo',
        price: 12000,
        images: [whiteponyImg1, whiteponyImg2]
    },
    {
        id: 3,
        name: 'Dummy',
        artist: 'Portishead',
        category: 'Triphop',
        price: 16000,
        images: [dummyImg1, dummyImg2]
    },
        {
        id: 4,
        name: 'The Queen Is Dead',
        artist: 'The Smiths',
        category: 'Post Punk',
        price: 10000,
        images: [thequeenisdeadImg1, thequeenisdeadImg2]
    },
    {
        id: 5,
        name: 'La Vida Era Más Corta',
        artist: 'Milo J',
        category: 'Folklore Argentino',
        price: 20000,
        images: [lavidaeramascortaImg1, lavidaeramascortaImg2]
    },
    {
        id: 6,
        name: 'Gorillaz',
        artist: 'Gorillaz',
        category: 'Rock Alternativo',
        price: 11000,
        images: [gorillazImg1, gorillazImg2]
    },
    {
        id: 7,
        name: 'Disintegration',
        artist: 'The Cure',
        category: 'Post Punk',
        price: 13000,
        images: [disintegrationImg1, disintegrationImg2]
    },
    {
        id: 8,
        name: 'The Best Of',
        artist: 'Sade',
        category: 'R&B',
        price: 18000,
        images: [thebestofsadeImg1, thebestofsadeImg2]
    }
]