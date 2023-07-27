const productos = [
  {
    id: '01',
    name: 'HyperX Cloud Fligth',
    category: 'Auriculares',
    description:
      'Auriculares Inalambricos con audio 7.1 ideales para todo tipo de gaming, competitivo y casual',
    price: 62300,
    img: 'https://i.postimg.cc/YSQ8DW2q/auriculares-hyperx-cloud-fligth.jpg',
    stock: 50,
  },
  {
    id: '02',
    name: 'HyperX Alloy Elite 2',
    category: 'Teclado',
    description:
      'Teclado 100% con switches red, con panel numerico, software de rgb y macros, teclas de volumen y reproduccion de musica, chasis de aluminio',
    price: 92000,
    img: 'https://i.postimg.cc/8kYWWCDy/teclado-hyper-X-alloy-elite-2.jpg',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 5,
  },
  {
    id: '03',
    name: 'Corsair Virtuosos',
    category: 'Auriculares',
    description:
      'Auriculares inalambricos ideal para produccion audio 7.1 de la mejor calidad, ',
    price: 103000,
    img: 'https://i.postimg.cc/fLBc17GZ/auriculares-corsair-virtuoso.png',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 2,
  },
  {
    id: '04',
    name: 'HyperX Pulsefire Surge',
    category: 'Mouse',
    description:
      'Mouse hergonomico para diestros, ideal para gaming con 15000DPI luces rgb y software de configuracion',
    price: 16000,
    img: 'https://i.postimg.cc/T3JJrXtp/mouse-hyper-X-pulsefire-surge.jpg',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 10,
  },
  {
    id: '05',
    name: 'HyperX Alloy Origins',
    category: 'Teclado',
    description:
      'Teclado Ideal para Gaming usado en todo tipo de juegos a nivel profecional, 60% hecho para jugar sobre las demas cosas, chasis de aluminio, rgb con su respectivo software',
    price: 52000,
    img: 'https://i.postimg.cc/50RHwPcH/teclado-Hyper-X-alloy-origins.jpg',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 6,
  },
  {
    id: '06',
    name: 'HyperX Pulsefire Core',
    category: 'Mouse',
    description:
      'Mouse ideal para iniciarse en el Gaming, por su modico precio ya ofrece 8000DPI, RGB, Software de configuracion para RGB y macros',
    price: 8300,
    img: 'https://i.postimg.cc/3wLjcF5h/mouse-hyper-X-pulsefire-core.jpg',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 13,
  },
  {
    id: '08',
    name: 'Redragon Scylla black',
    category: 'Auriculares',
    description:
      'Auriculares con 7.1 con cable mallado y RGB',
    price: 32000,
    img: 'https://i.postimg.cc/5NHBkCnd/auriculares-redragon-scylla-black.png',
    hashtags: ['#compraya', '#ultimoprod', '#random'],
    stock: 20,
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(productos);
      } else {
        reject('Hubo un error intente mas tarde');
      }
    }, 2000);
  });
};