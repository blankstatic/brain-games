install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

start-even:
	npx babel-node -- src/bin/brain-even.js

start-calc:
	npx babel-node -- src/bin/brain-calc.js

start-gcd:
	npx babel-node -- src/bin/brain-gcd.js

start-progression:
	npx babel-node -- src/bin/brain-progression.js

start-prime:
	npx babel-node -- src/bin/brain-prime.js

lint:
	npx eslint .

publish:
	rm -rf dist
	npm publish

dry-publish:
	rm -rf dist
	npm publish --dry-run
