.PHONEY: build run test

all: build

build: package.json
	./node_modules/.bin/browserify src/main.js -o dist/build.js

run: build
	./node_modules/.bin/http-server

test: build
	./node_modules/.bin/mocha -CR nyan

package.json: 
	npm install
