const fs = require("fs");
const path = require("path");

const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));
const message = String(config.message || "").trim();
const url = "https://mestredodesconto.com.br/canal";
if (!message || !message.includes(url)) {
  throw new Error("Mensagem ausente ou link do canal incorreto.");
}
const stateFile = path.join(__dirname, "replied-users.json");
const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, "utf8")) : {};
if (!state || Array.isArray(state) || typeof state !== "object") {
  throw new Error("Estado de respostas invalido.");
}
console.log("Mestre do Desconto - verificacao segura");
console.log("Mensagem configurada: OK");
console.log("Registros de respostas:", Object.keys(state).length);
console.log("Modo: SIMULACAO. Nenhum login, leitura de DMs ou envio foi realizado.");
console.log("Pendente: integrar fonte autorizada de novas mensagens TikTok.");
