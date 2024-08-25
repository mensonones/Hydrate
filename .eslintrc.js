module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: '@react-native',
  rules: {
    'react/jsx-uses-react': 'off', // Não requer mais importação do React no JSX (React 17+)
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn', // Aviso para variáveis não utilizadas
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn', // Evita estilos inline
    'react-native/no-color-literals': 'off', // Opção para desativar caso use cores literais no código
    'react-native/split-platform-components': 2, // Força separação de arquivos específicos para Android/iOS
  },
};
