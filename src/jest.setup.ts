import '@testing-library/react';

import server from '../server/server';

// Establish API mocking before all tests.

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
