import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { server } from './src/__tests__/mocks/server';
import { beforeAll, afterAll, afterEach } from 'vitest';

expect.extend(matchers);

window.HTMLMediaElement.prototype.play = async () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.load = () => {};

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());