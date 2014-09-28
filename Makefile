.PHONY: all build run test

all: build

build: node_modules/
	./node_modules/.bin/browserify src/main.js -o dist/build.js

run: build
	./node_modules/.bin/http-server

test:
	./node_modules/.bin/mocha -CR nyan

test-debug:
	node debug ./node_modules/.bin/mocha -CR nyan

lint:
	./node_modules/.bin/jshint src

node_modules/: package.json
	npm install
	touch $@
