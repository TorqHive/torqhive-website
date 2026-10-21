import { products, categories } from "./src/data/products.js";
import { sourcing1688 } from "./src/data/sourcing.js";
console.log("total", products.length, "sourcing records", Object.keys(sourcing1688).length);
const last = products.slice(-10);
console.log(last.map(p=>p.id+":"+p.category).join(" | "));
console.log("missing sourcing:", last.filter(p=>!sourcing1688[p.id]).length);
