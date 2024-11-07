# usage

for CommonJS

```bash
npm start
```

for ECMAScript Modules (ESJ)

```bash
npm run start-esm
```

## problems ascii-art

1. I had problems installing ascii-art on Macbook with M1 chip. Resolved them with this code

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
npm install --build-from-source canvas
```

took up to 1h to search for solution and resolve the issue

2. I have a problem with using <b><u>fonts</u></b> function in this library and I quit searching for solution
