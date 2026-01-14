interface Person {
    firstName: string;
    lastName: string;
    age: number;
    // La interrogación hace que el valor sea opcional
    address?: {
        postalCode: string;
        city: string;
    }
    address2?: Address; // Hace referencia a los valores de la interface Address
}

interface Address {
    postalCode: string;
        city: string;
}

// Creación de un objeto 
const jimin: Person = {
    firstName: 'Jimin',
    lastName: 'Park',
    age: 30,
    /*address: {
        postalCode: '12345',
        city: 'Seoul'
    }*/
};

/* 
    Encima del nombre (jhope) pulsar ctrl + . y darle a Add missing properties 
    y automáticamente añadira todos los valores que tiene Person
*/
const jhope: Person = {
    firstName: "Hoseok",
    lastName: "Jung",
    age: 31
};

console.log(jimin);

/*
const jungkook = structuredClone(jimin); // Permite copiar la estructura 
jungkook.firstName = 'Jungkook';
jungkook.lastName = 'Jeong';
jungkook.address.city = 'Itaewon';
*/