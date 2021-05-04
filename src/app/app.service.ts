import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  products: Product[] = [
    new Product({
      id: 1,
      name: 'Super Mario World',
      description:
        'Super Mario World, originalmente chamado no Japão de Super Mario Bros. 4, é um jogo de plataforma desenvolvido e publicado pela Nintendo como um título que acompanhava o console Super Nintendo Entertainment System. O jogo foi lançado em 1990 no Japão e em 1991 na América do Norte.',
      price: 120.0,
      totalSales: 325,
      images: [
        'https://cdn.awsli.com.br/600x450/684/684977/produto/38292857/945cc58c26.jpg',
        'https://tecnoblog.net/wp-content/uploads/2021/02/super-mario-world-samples-e1612534886722-700x393.png',
        'https://s2.glbimg.com/m--fuUUJYog_g1wOT3b5YzUW6x0=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/c/c/q3wLCaShmHvdJWHAWgCg/super-mario-world-snes-nintendo-dicas-top-secret-area.jpg',
      ],
    }),
    new Product({
      id: 2,
      name: 'Final Fantasy VII',
      description:
        'Final Fantasy VII é um jogo eletrônico de RPG desenvolvido e publicado pela SquareSoft. É o sétimo título principal da série Final Fantasy e foi lançado originalmente para PlayStation em 1997 e depois também para Microsoft Windows no ano seguinte.',
      price: 119.99,
      totalSales: 300,
      images: [
        'https://i.ebayimg.com/images/g/BHIAAOSw6fBcppsZ/s-l640.jpg',
        'http://s2.glbimg.com/8ICx6joSnypdkPG0HSI0kZr7gMk=/695x0/s.glbimg.com/po/tt2/f/original/2015/12/09/final-fantasy-7-cheats-tutorial.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/4/4f/FF7_ps.jpg',
      ],
    }),
    new Product({
      id: 3,
      name: 'Pokemon Red',
      description:
        'Pokémon Red Version e Pokémon Blue Version são jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos da série Pokémon.',
      price: 99.99,
      totalSales: 400,
      images: [
        'https://photos.enjoei.com.br/pokemon-red-gameboy/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81MDUyMTQ2LzFkNjAxZDViMjA5ZWM4MTU0YTRmOWVjYWNjYzdmNTE5LmpwZw',
        'https://s2.glbimg.com/GkbnbfcdiVHEUv2wtOKwzBozMFE=/0x0:695x626/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/w/U/E5KUPcSfGKunvK3nd3Hw/red1.png',
        'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/01/pokemon-red-em-avatar-do-twitter.jpg',
      ],
    }),
    new Product({
      id: 4,
      name: 'Metal Gear Solid',
      description:
        'Metal Gear Solid é um jogo eletrônico de ação-aventura furtiva dirigido e escrito por Hideo Kojima. Foi desenvolvido e publicado pela Konami em 1998 para PlayStation, com versão para Windows sendo desenvolvida pela Digital Dialect e publicado pela Microsoft Game Studios.',
      price: 125.0,
      totalSales: 225,
      images: [
        'https://www.arkade.com.br/wp-content/uploads/2020/06/c480fcd631134d486d53047dfce98eed1.jpg',
        'https://i.ytimg.com/vi/hDqF1DxorTI/maxresdefault.jpg',
        'https://greenhillszone.files.wordpress.com/2016/03/gfs_58122_2_1.jpg',
      ],
    }),
    new Product({
      id: 5,
      name: 'Chrono Trigger',
      description:
        'Chrono Trigger é um jogo de RPG eletrônico desenvolvido pela Square Co. Foi lançado para o console Super Nintendo no Japão em março de 1995, e uma versão aprimorada para PlayStation foi lançada em novembro de 1999. ',
      price: 165.0,
      totalSales: 400,
      images: [
        'https://s3.amazonaws.com/brisk-listing-resized/1000x/TdVqtjibEq-1487549417.jpg',
        'https://gamehall.com.br/wp-content/uploads/2017/06/chrono-trigger-snes.jpg',
        'https://www.videogamestricks.com/images/posts/f8b5ef1cb8fea6dc89e7fc817be82c7b-0.jpg',
      ],
    }),
    new Product({
      id: 6,
      name: 'GTA San Andreas',
      description:
        'Grand Theft Auto: San Andreas é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o quinto título principal da série Grand Theft Auto e foi lançado em outubro de 2004 para PlayStation 2 e em junho de 2005 para Xbox e Microsoft Windows.',
      price: 99.0,
      totalSales: 652,
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/6107RK121XL._AC_SX342_.jpg',
        'https://wowkia.com/wp-content/uploads/2019/09/gta-san-andreas-cheats-all-platforms.jpg',
        'https://varievo.com/wp-content/uploads/aviao-gta-sa.jpg',
      ],
    }),
    new Product({
      id: 7,
      name: 'Black',
      price: 79.99,
      totalSales: 125,
      description:
        'Black é um videogame de tiro em primeira pessoa desenvolvido pela Criterion Games e publicado pela Electronic Arts para PlayStation 2 e Xbox. O jogo é notável por sua ação altamente estilizada, bem como por sua qualidade de som e foco em efeitos destrutivos durante o jogo.',
      images: [
        'https://i.pinimg.com/236x/f3/69/cb/f369cb025da8ed36fe3b21a6880424aa.jpg',
        'https://pm1.narvii.com/7059/eadf1015cdfff824d98a125d32bc16d532860946r1-640-360v2_hq.jpg',
        'https://newgameplus.com.br/wp-content/uploads/2015/03/05.jpg',
      ],
    }),
    new Product({
      id: 8,
      name: 'Fifa 10',
      price: 59.99,
      totalSales: 260,
      description:
        'FIFA 10 é um jogo eletrônico de Video game da série FIFA. Desenvolvida pela EA Canada, é distribuída mundialmente pela Electronic Arts sob o selo EA Sports. Foi lançado para os consoles PlayStation 2 e PlayStation 3 da Sony, Microsoft Windows e Xbox 360 e Nintendo Wii.',
      images: [
        'https://http2.mlstatic.com/D_NQ_NP_968559-MLB44794063335_022021-O.jpg',
        'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/59e50ea6-96d3-11e6-b13a-00163ec9f5fa/4081312507/fifa-10-screenshot.jpg',
        'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/59e50ea6-96d3-11e6-b13a-00163ec9f5fa/1944888244/fifa-10-840851359.jpg',
      ],
    }),
    new Product({
      id: 9,
      name: 'Street Fighter IV',
      price: 85.99,
      totalSales: 359,
      description:
        'Street Fighter IV é um jogo de luta feito pela Capcom e o quinto título da série Street Fighter. Foi lançado nos Arcades japoneses em Julho de 2008 e as versões para PS3 e Xbox 360 saíram no fim do ano de 2008. Uma versão para PC saiu em Julho de 2009. ',
      images: [
        'https://a-static.mlcdn.com.br/618x463/street-fighter-iv-ps3-capcom/mixabc/2173/ddce4099570a3cb9e5c0e57a687cf9d8.jpg',
        'http://www.gamecoin.com.br/wp-content/uploads/2013/10/SUPER-STREET-FIGHTER-IV-1.jpg',
        'https://cdn.mos.cms.futurecdn.net/7adf7ca71da69df3ac2f5d47db22a97b.jpg',
      ],
    }),
    new Product({
      id: 10,
      // name: 'Command & Conquer: Red Alert 3',
      name: 'Command & Conquer',
      price: 119.99,
      totalSales: 145,
      description: 'Command & Conquer: Red Alert 3 é um videogame de estratégia em tempo real desenvolvido pela EA Los Angeles e publicado pela Electronic Arts. Foi lançado em outubro de 2008 nos Estados Unidos e na Europa para Microsoft Windows. Uma versão do Xbox 360 foi lançada em 11 de novembro.',
      images: [
        'https://jogorama.com.br/arquivos/capas/2768.jpg',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/17480/0000006511.1920x1080.jpg?t=1615390553',
        'https://www.mobygames.com/images/promo/original/1534960296-764035686.jpg'
      ]
    }),
    // new Product({
    //   id: 11,
    //   name: ''
    // })
  ];

  carouselImages = [
    'https://i.zst.com.br/thumbs/12/1b/2d/36173618.jpg',
    'https://images-americanas.b2w.io/produtos/01/00/img/44285/6/44285667_1GG.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_813569-MLA32731593369_112019-O.jpg',
  ];

  getProducts(): Observable<Product[]> {
    return of([...this.products]);
  }

  getCarouselImages(): Observable<string[]> {
    return of([...this.carouselImages]);
  }
}
