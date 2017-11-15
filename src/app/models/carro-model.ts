export class CarroModel {
        public id: number;
        public unicoDono: boolean;
        public preco: string;
        public anoFabricacao: string;
        public dataCadastro:any;
        public condicao: string;
        public imagem: string;
        public nome: string;
        public montadora: Object;

        // constructor(carro?:any){
        //         this.nome = carro.nome;
        //         this.unicoDono = carro.unicoDono;
        //         this.preco = carro.preco;
        //         this.anoFabricacao = carro.anoFabricacao;
        //         this.dataCadastro = new Date();
        //         this.condicao = carro.condicao;
        //         this.imagem = carro.imagem;
        //         this.nome = carro.nome;
        //         this.montadora = undefined;
        // }
}