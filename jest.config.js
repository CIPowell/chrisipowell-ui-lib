module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        "\\.(s?css|less)$": "identity-obj-proxy"
    },
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
