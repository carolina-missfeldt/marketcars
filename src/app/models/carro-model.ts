import { MontadorasModel } from './montadoras-model';
export interface CarroModel {
        id: number;
        unicoDono: boolean;
        preco: string;
        anoFabricacao: string;
        dataCadastro: any;
        condicao: string;
        imagem: string;
        nome: string;
        montadora: MontadorasModel;


}