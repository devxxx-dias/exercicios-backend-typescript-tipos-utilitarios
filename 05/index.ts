// import { Baleia } from "./Baleia";
import { Baleia } from "./Baleia";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

const cachorro = new Cachorro("Bob", 17, 36, 0.57);
const gato = new Gato("Simion", 12, 17, 0.38);
const baleia = new Baleia("Cinderela", 8900, 237, 25);

console.log(cachorro.latir());
console.log(gato.miar());
console.log(baleia.nadar());
