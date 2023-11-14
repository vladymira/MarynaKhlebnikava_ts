alert('ok');

import { greet } from "./greet";

greet('Hello world!');

setTimeout(() => { greet('Ок') }, 10_000)