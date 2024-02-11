import { Readable } from "node:stream";

if (import.meta.main) stdout2webstream();

export default function stdout2webstream() {
  let stdin = Readable.toWeb(process.stdin) as unknown as ReadableStream;
  const { port, hostname } = Bun.serve({
    fetch: async () => {
      let fork;
      [stdin, fork] = stdin.tee();
      return new Response(fork, {
        headers: { "Content-Type": "text/event-stream" },
      });
    },
  });

  console.log(`serving stdin into http://${hostname}:${port}`);
}
