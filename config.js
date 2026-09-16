"use strict";
// Configuração independente deste funil. O player externo é carregado somente após o clique.
const SITE_CONFIG = {
  "slug": "j20",
  "expert": "Lucas Mallmann",
  "product": "Jejum 2.0",
  "sourceUrl": "https://meufluxo.com/pv/lucas-mallmann-jejum-2-0-vsl3-h1/",
  "checkoutUrl": "https://checkout.payt.com.br/e77716f701452b971d0fc9c4bddcc23d",
  "player": {
    "elementId": "ab-6a1af3926d918afe2b3fbbc0",
    "script": "https://scripts.converteai.net/1be97c3f-f8ce-4815-bb89-6a73aac005ce/ab-test/6a1af3926d918afe2b3fbbc0/player.js",
    "aspectRatio": 1.3333333333333333
  },
  "pitches": {
    "6a19c5145f4238b9b9c918ef": {
      "seconds": 2140,
      "variant": "j20-vsl3-lead1"
    },
    "6a485a32c5b2cd3655814fa0": {
      "seconds": 2250,
      "variant": "j20-vsl3-microlead6"
    }
  }
};
if (typeof module !== "undefined" && module.exports) module.exports = SITE_CONFIG;
