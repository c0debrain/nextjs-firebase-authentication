jest.mock('firebase/app', () => ({
  __esModule: true,
  default: {
    initializeApp: jest.fn(),
    apps: [],
    database: jest.fn(),
    auth: jest.fn(),
    storage: jest.fn(),
  },
}));

jest.mock('firebase/database');
jest.mock('firebase/auth');
jest.mock('firebase/storage');

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
