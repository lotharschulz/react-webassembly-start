# React app with Web Assembly

## web assembly set up

```bash
# enter web assembly folder
cd wasm-lib
# if not installed, install it
cargo install wasm-pack
# test and code formatting
cargo test && cargo fmt --all -- --check
# go back to napm app folder
cd ..
# build the web assembly
npm run build:wasm
# check the web assembly files
ls -lisa wasm-lib/pkg
# (npm) install the web assembly
npm install ./wasm-lib/pkg
# local dev start npm app
npm start
# create production build
npm run build
```