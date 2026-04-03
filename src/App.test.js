import React from 'react';

// Mock @vercel/analytics to avoid ESM module resolution issues in Jest
jest.mock('@vercel/analytics');

test('basic test to ensure setup works', () => {
  expect(true).toBe(true);
});
