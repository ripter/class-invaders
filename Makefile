.PHONEY: build run test

all: build

build: package.json
	./node_modules/.bin/browserify src/main.js -o dist/build.js

run: build
	./node_modules/.bin/http-server

test:
	./node_modules/.bin/mocha -CR nyan

test-debug:
	node debug ./node_modules/.bin/mocha -CR nyan

package.json: node_modules/

node_modules/:
	npm install
