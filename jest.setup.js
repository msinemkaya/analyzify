global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

global.TextEncoder = require('util').TextEncoder
global.TextDecoder = require('util').TextDecoder
