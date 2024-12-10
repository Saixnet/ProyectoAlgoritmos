export const colores = [
  'Blanco',
  'Negro',
  'Rojo',
  'Marrón',
  'Beige',
  'Rosado',
  'Amarillo',
  'Verde',
  'Lila',
];
export const filtros = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'blanco', label: 'Blanco' },
      { value: 'negro', label: 'Negro' },
      { value: 'rojo', label: 'Rojo' },
      { value: 'marron', label: 'Marrón' },
      { value: 'beige', label: 'Beige' },
      { value: 'rosado', label: 'Rosado' },
      { value: 'amarillo', label: 'Amarillo' },
      { value: 'verde', label: 'Verde' },
      { value: 'lila', label: 'Lila' },
    ],
  },
  {
    id: 'tamano',
    name: 'Tamaño',
    options: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
  },
];
export const filtroUnico = [
  {
    id: 'precio',
    name: 'Precio',
    
    options: [
      { value: '0-50', label: 'S/50 a S/100' },
      { value: '51-100', label: 'S/101 a S/150' },
      { value: '101-150', label: 'S/151 a S/200' },
      { value: '151-200', label: 'S/201 a S/250' },
      { value: '201-250', label: 'S/251 a S/300' },
      { value: '251-300', label: 'S/301 a S/350' },
      { value: '+350', label: 'S/351 a más' },
    ],
  },
  {
    id: 'descuento',
    name: 'Rango de Descuento',
    options: [
      { value: '10', label: 'mas de 10%' },
      { value: '20', label: 'mas de 20%' },
      { value: '30', label: 'mas de 30%' },
      { value: '40', label: 'mas de 40%' },
      { value: '50', label: 'mas de 50%' },
      { value: '60', label: 'mas de 60%' },
      { value: '70', label: 'mas de 70%' },
      { value: '80', label: 'mas de 80%' },
    ],
  },
  {
    id: 'stock',
    name: 'Disponibilidad',
    options: [
      { value: 'en_stock', label: 'En Stock' },
      { value: 'sin_stock', label: 'Sin Stock' },
    ],
  },
];

export const ordenOpciones = [
  { name: 'Precio: Bajo a Alto', query: 'precio_bajo', current: false },
  { name: 'Precio: Alto a Bajo', query: 'precio_alto', current: false },
];
