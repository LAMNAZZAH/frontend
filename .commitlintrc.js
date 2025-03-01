module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // You can customize rules here
    'body-max-line-length': [2, 'always', 100],
    'subject-case': [0], // Disable case restrictions
  },
};
