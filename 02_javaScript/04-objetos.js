const carro = {
    puertas: 4,
    fabricante: 'Ford',
    acelerar() {
         console.log('Acelerando...')
     }
 };

 //Formas de acceder a las propiedades
 carro.acelerar();

 //Agregar propiedades
 carro['asientos'] = 2;
 carro.puertaTracera = false;

 //Chequear si una propiedad existe en un objeto
 console.log('asientos' in carro);
 console.log(carro);

 //Borrar propiedades
 delete carro.asientos;
 delete carro['acelerar'];
 console.log('puertaTracera' in carro);
 console.log(carro);

 //Recorrer las propiedades de un objeto
 for(let propiedad in  carro){
     console.log('Propiedad: ', propiedad, '- Valor: ', carro[propiedad]);
 }
