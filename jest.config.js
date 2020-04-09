module.exports = {
  moduleNameMapper: {
    // Permite ver el nombre de la clase al usar module
    '\\.module\\.css$': 'identity-obj-proxy',
    // Evita el import de archivos .css y carga un mock
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
};
