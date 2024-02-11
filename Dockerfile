FROM oven/bun
WORKDIR /app
COPY ./index.ts .
ENV PORT=80
CMD bun run ./index.ts