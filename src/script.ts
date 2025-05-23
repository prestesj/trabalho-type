
interface Comentario {
    nome: string;
    texto: string;
}

class GerenciadorComentarios {
    private comentarios: Comentario[] = [];

    constructor() {
        this.inicializar();
    }

    private inicializar(): void {
        this.configurarFormulario();
        this.carregarComentarios();
        this.mostrarComentarios();
    }

    private configurarFormulario(): void {
        const formulario = document.getElementById('comment-form') as HTMLFormElement;
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            this.adicionarComentario();
        });
    }

    private adicionarComentario(): void {
        const campoNome = document.getElementById('name') as HTMLInputElement;
        const campoTexto = document.getElementById('comment') as HTMLTextAreaElement;

        const nome = campoNome.value.trim();
        const texto = campoTexto.value.trim();

        if (nome && texto) {
            this.comentarios.push({ nome, texto });
            this.mostrarComentarios();
            
            
            campoNome.value = '';
            campoTexto.value = '';
        }
    }

    private mostrarComentarios(): void {
        const listaComentarios = document.getElementById('comments-list');
        
        if (!listaComentarios) return;

        listaComentarios.innerHTML = this.comentarios.length === 0 
            ? '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>'
            : this.comentarios.map(comentario => `
                <div class="comentario">
                    <strong>${comentario.nome}:</strong>
                    <p>${comentario.texto}</p>
                </div>
            `).join('');
    }

    private carregarComentarios(): void {
    }

    private salvarComentarios(): void {
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorComentarios();
});