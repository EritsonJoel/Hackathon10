//1-1Utilizando función arrow, crear una función que reciba 
//como parámetros un nombre, apellido y
 //edad y los retorne en un string concatenado
  //“Hola mi nombre es sebastián yabiku y mi edad 33”





const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
const edad = Number(prompt("ingrese su edad"));

 const tdo = ('ni nombre es: ' + nombre + '     '  + apellido +  ' mi edad   ' + edad);


 

//2-  Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sum_Of_Cubes(n) {
    let  sumn = 0;
  
    for (let i = 1; i <= n; i++) {
      sumn += Math.pow(i, 3);
    }
    return sumn;
  }
  
  console.log(sum_Of_Cubes(3));
  console.log(sum_Of_Cubes(4));


  //4-Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

   const sm =  function  (){
       console.log( 10 + 30);
   }

   sm();
   //-----

   function sumarN (a,b){
       return a + b

   }
   const r = sumarN(12,20);
   console.log("suma de argumentos: " + r);


   // 5 -Crear una función que reciba un array de valores y filtre los valores que no son string.
   const person= [
    { id: 1, nombre: 'Diego', edad: 28 },
    { id: 2, nombre: 'Martin', edad: 23 },

  ];

  const idE1 = 1,
        idE2 = 2;

        const  E = 30;
  
     const fil =  person.filter((pers) => pers.id == idE1)
     
     const fil2 = person.filter((pe) => pe.id == idE2);
 
     const EM = person.filter((p) => p.edad >= E);
    
     
     

     //.6-Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
      //minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

      //const arr = [10, 3, 8, 1, 33];
   

       // const t = arr.filter(())


  //11-Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

   const np = [
    { nomb: "John", eda: 21, prosupuesto: 3000 },
    { nomb: "Steve",  eda: 32, prosupuesto: 4000 },
  
   ];

   let promedioProsupuesto = np.reduce((suma, persona) => suma +=  persona.prosupuesto, 0);
   console.log("promedio de prosupuesto es:" + promedioProsupuesto);

   //16- Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
  //countdown(5) ➞ [5, 4, 3, 2, 1, 0]

   
 for(let i=10; i>=0;  i--){
    console.log(i);
}



//-12 Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
const nombEstudiantes = ([
  { id: 1, nm: "Steve" },
  { id: 2 , nm: "Mike" },
  { nm: 3,  nm:"John" }
]);
 //➞ ["Becky", "John", "Steve"]


nombEstudiantes.forEach((nom) => {
    console.log(nom.nm);
})

  

//.18 -//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]


const matrizNu = [1, 2, 4, 8, ,6,10, "h", "e", 3,7];


//for (let i=[1];  i<=matrizNu.length;i--){
   // if (i % 2 == 0){
      //console.log("numero par:" + i);
    //}
//}

//const ne = matrizNu.filterList((Nen) => Nen[0] ==)

//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.



//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

const nem = ['mo', 'mk', 'nemo'];

const nn2= 'nemo';
console.log(nem[2]);


console.log("encontre a " + nem[2]);  


//
//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

const my =[1,2,3,4,5,6];

let cv =my.length;

for( i=1; i <= my.length;i++){
   console.log(i);
}

