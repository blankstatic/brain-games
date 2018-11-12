install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

lint:
	npm run eslint .

publish:
	npm publish
