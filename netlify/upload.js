exports.handler = async function (event, context) {
  // Lógica para lidar com o upload aqui
  // Você pode usar bibliotecas como `multer` para lidar com o upload de arquivos

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Upload realizado com sucesso!' }),
  };
};
