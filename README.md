# stdout2webstream

## Use cases


## 1. Stream your log file into web

```bash
# some command append into logs
watch "date >> logs/main.log"

# follow the logs into web
tail -f logs/main.log | docker run -p 8080:80 -it ghcr.io/snomiao/stdout2webstream

# see the logs in web, open this link in your browser
open http://localhost:8080/
```

## 2. Speak to web in realtime

```bash
# launch your voice recognize service
git clone https://github.com/davabase/whisper_real_time
pip install -r requirements.txt
py transcribe_demo.py --non_english --model small | tee out.log

# follow the logs into web
tail -f out.log | docker run -p 9123:80 -i ghcr.io/snomiao/stdout2webstream

# see the logs in web, open this link in your browser
open http://localhost:8080/
```


<!-- check this in browser -->
<!-- (await fetch('https://stdout2webstream.snomiao.dev/')).body.pipe(new WritableStream({write: console.log})) -->

<!--
# docker rm -f stdout2webstream
# docker run -it -v ${PWD}/index.ts:/app/index.ts --rm --name stdout2webstream --network snocode_default ghcr.io/snomiao/stdout2webstream bun --hot index.ts -->

## Reference

- bun serve https://bun.sh/docs/api/http