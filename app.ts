let username: string = 'Filip';

for (let i = 0; i < username.length; i++) {
  console.log(username[i]);
}

//* unionID types
let userId: string | number = 123;
userId = 'a';

//* define object type
let user: {
  age: number;
  type: string;
  isAdmin: boolean;
  id: string | number;
};

//* define array type
let hobbies: string[];

const pepe = (
  a: string,
  b: { value: number },
  c: boolean,
  callback: (y: number, x: number) => number
): object => {
  return {
    first: a,
    second: b,
    third: c,
  };
};

type Callback = (a: number, b: number) => number;
interface Credentials {
  password: string;
  username: string;
  email: string;
}

let info: Credentials;
info = {
  password: '1231254',
  username: 'filip',
  email: '@@@@',
};
