# lean-signal-api
Cloudflare Worker for receiving Lean trading signals

# lean-signal-api

This is a Cloudflare Worker that receives trading signals from Lean Cloud Algorithms
and stores them in KV for polling by MT5 or other clients.

## API

POST / → store new signal
GET / → retrieve latest signal

## Deployment

