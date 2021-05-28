#!/bin/bash
set -x

rm -r node_modules
rm -r target

# backup directories with static content
mv ../script/licenses licenses
mv ../script/zenterio zenterio

npm install

rm -r ../script

mkdir -p ../script/@formatjs/intl-pluralrules && cp node_modules/@formatjs/intl-pluralrules/polyfill.umd.* ../script/@formatjs/intl-pluralrules/
mkdir -p ../script/@formatjs/intl-pluralrules/locale-data && cp node_modules/@formatjs/intl-pluralrules/locale-data/de.js ../script/@formatjs/intl-pluralrules/locale-data
mkdir -p ../script/@formatjs/intl-pluralrules/locale-data && cp node_modules/@formatjs/intl-pluralrules/locale-data/en.js ../script/@formatjs/intl-pluralrules/locale-data
mkdir -p ../script/@formatjs/intl-relativetimeformat && cp node_modules/@formatjs/intl-relativetimeformat/polyfill.umd.* ../script/@formatjs/intl-relativetimeformat
mkdir -p ../script/@formatjs/intl-relativetimeformat/locale-data && cp node_modules/@formatjs/intl-relativetimeformat/locale-data/de.js ../script/@formatjs/intl-relativetimeformat/locale-data
mkdir -p ../script/@formatjs/intl-relativetimeformat/locale-data && cp node_modules/@formatjs/intl-relativetimeformat/locale-data/en.js ../script/@formatjs/intl-relativetimeformat/locale-data
mkdir -p ../script/bluebird && cp node_modules/bluebird/js/browser/bluebird.js ../script/bluebird
mkdir -p ../script/bluebird && cp node_modules/bluebird/js/browser/bluebird.min.js ../script/bluebird
mkdir -p ../script/chai && cp node_modules/chai/chai.* ../script/chai/
mkdir -p ../script/jssha && cp node_modules/jssha/src/sha.js ../script/jssha
mkdir -p ../script/lokijs && cp node_modules/lokijs/build/lokijs.min.js ../script/lokijs
mkdir -p ../script/mocha && cp node_modules/mocha/mocha.* ../script/mocha
mkdir -p ../script/moment && cp node_modules/moment/moment.js ../script/moment
mkdir -p ../script/moment && cp node_modules/moment/min/moment.min.js ../script/moment
mkdir -p ../script/mqtt && cp node_modules/mqtt/dist/mqtt.js ../script/mqtt
mkdir -p ../script/mqtt && cp node_modules/mqtt/dist/mqtt.min.js ../script/mqtt
mkdir -p ../script/react/umd && cp node_modules/react/umd/* ../script/react/umd
mkdir -p ../script/react-dom/umd && cp node_modules/react-dom/umd/* ../script/react-dom/umd
mkdir -p ../script/react-intl && cp node_modules/react-intl/react-intl.umd.* ../script/react-intl
mkdir -p ../script/react-redux/dist && cp node_modules/react-redux/dist/* ../script/react-redux/dist
mkdir -p ../script/react-transition-group/dist && cp node_modules/react-transition-group/dist/* ../script/react-transition-group/dist
mkdir -p ../script/redux/dist && cp node_modules/redux/dist/* ../script/redux/dist
mkdir -p ../script/redux-observable/dist && cp node_modules/redux-observable/dist/* ../script/redux-observable/dist
mkdir -p ../script/requirejs && cp node_modules/requirejs/require.js ../script/requirejs
mkdir -p ../script/rxjs/bundles && cp node_modules/rxjs/bundles/rxjs.umd.js ../script/rxjs/bundles
mkdir -p ../script/rxjs/bundles && cp node_modules/rxjs/bundles/rxjs.umd.min.js ../script/rxjs/bundles
mkdir -p ../script/underscore && cp node_modules/underscore/underscore.js ../script/underscore
mkdir -p ../script/underscore && cp node_modules/underscore/underscore-min.js ../script/underscore
mkdir -p ../script/urijs && cp node_modules/urijs/src/*.js ../script/urijs

# recover backup directories
mv licenses ../script
mv zenterio ../script

rm -r node_modules/@types/node
rm -r node_modules/@types/escape-html
rm -r node_modules/dom-helpers

mkdir -p target

# copy all typing files
find node_modules/ -name "*.d.ts" | xargs cp --parents -t target
# copy all package.json with typings
grep -rlw "\"typings\"" node_modules/**/package.json | xargs cp --parents -t target
grep -rlw "\"types\"" node_modules/**/package.json | xargs cp --parents -t target
grep -rlw "\"types\"" node_modules/@formatjs/**/package.json | xargs cp --parents -t target

# remove node_modules
rimraf node_modules
# move target
mv target/node_modules node_modules

# cleanup
rimraf target
rm package-lock.json
rm app.js*

