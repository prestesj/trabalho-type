"use strict";
class GerenciadorComentarios {
    constructor() {
        this.comentarios = [];
        this.inicializar();
    }
    inicializar() {
        this.configurarFormulario();
        this.carregarComentarios();
        this.mostrarComentarios();
    }
    configurarFormulario() {
        const formulario = document.getElementById('comment-form');
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            this.adicionarComentario();
        });
    }
    adicionarComentario() {
        const campoNome = document.getElementById('name');
        const campoTexto = document.getElementById('comment');
        const nome = campoNome.value.trim();
        const texto = campoTexto.value.trim();
        if (nome && texto) {
            this.comentarios.push({ nome, texto });
            this.mostrarComentarios();
            campoNome.value = '';
            campoTexto.value = '';
        }
    }
    mostrarComentarios() {
        const listaComentarios = document.getElementById('comments-list');
        if (!listaComentarios)
            return;
        listaComentarios.innerHTML = this.comentarios.length === 0
            ? '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>'
            : this.comentarios.map(comentario => `
                <div class="comentario">
                    <strong>${comentario.nome}:</strong>
                    <p>${comentario.texto}</p>
                </div>
            `).join('');
    }
    carregarComentarios() {
    }
    salvarComentarios() {
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorComentarios();
});
