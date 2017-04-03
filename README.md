To convert jsx to js run

npm run build

OR

./node_modules/.bin/babel --presets es2015,react --watch  components/ --out-dir js/
./node_modules/.bin/babel --no-babelrc components/ --out-dir js/ --presets=es2015,react
./node_modules/.bin/babel app.js --out-file js/app.js

Build using webpack (This is another way of compiling files using npm react)

./node_modules/.bin/webpack -d

