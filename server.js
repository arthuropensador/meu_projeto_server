const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Configura o cabeçalho para responder com texto e acentuação correta
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    
    // Mensagem de resposta ao acessar localhost:3000
    res.end('Olá! O servidor do Catálogo de Filmes está funcionando corretamente no backend!');
});

server.listen(PORT, () => {
    // Mensagem exibida no terminal ao iniciar o servidor
    console.log('=========================================');
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`Escutando na porta: ${PORT}`);
    console.log(`Acesse no navegador: http://localhost:${PORT}`);
    console.log('=========================================');
});