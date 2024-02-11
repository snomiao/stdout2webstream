npm version patch
docker compose build
npm publish
# docker rm -f stdout2webstream
# docker run -it -v ${PWD}/index.ts:/app/index.ts --rm --name stdout2webstream --network snocode_default ghcr.io/snomiao/stdout2webstream bun --hot index.ts
docker compose push