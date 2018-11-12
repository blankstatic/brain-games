install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

start-even:
	npx babel-node -- src/bin/brain-even.js

lint:
	npm run eslint .

publish:
	npm publish
