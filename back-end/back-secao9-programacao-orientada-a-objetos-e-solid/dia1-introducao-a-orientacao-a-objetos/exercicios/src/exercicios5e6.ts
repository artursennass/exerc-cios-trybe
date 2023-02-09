export default class Data {
    dia: number;
    mes: number;
    ano: number;

    constructor (dia: number, mes: number, ano: number) {
        if (
            dia > 0 && dia < 32 && dia.toString().length === 2 &&
            mes > 0 && mes < 13 && mes.toString().length === 2 &&
            ano > 0 && ano.toString().length === 4
        ) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        } else {
            this.dia = 0o1;
            this.mes = 0o1;
            this.ano = 1900;
        }
        
    }

    getMonthName () {
        return this.mes;
    }

    isLeapYear (): boolean {
        if (this.ano % 4 === 0) {
            return true;
        }
        return false;
    }

    compare (data: Data) {
        if (
            this.dia === data.dia &&
            this.mes === data.mes &&
            this.ano === data.ano
        ) {
            return 0
        } else if (this.ano > data.ano) {
            return 1
        } else if (this.ano === data.ano && this.mes > data.mes) {
            return 1
        } else if (
            this.dia > data.dia &&
            this.mes === data.mes &&
            this.ano === data.ano
        ) {
            return 1
        } else if (this.ano < data.ano) {
            return -1
        } else if (this.ano === data.ano && this.mes < data.mes) {
            return -1
        } else if (
            this.dia < data.dia &&
            this.mes === data.mes &&
            this.ano === data.ano
        ) {
            return -1
        }
    }

    format (formato: string) {
        const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro'];
        const ano4 =  formato.replace('aaaa', this.ano.toString())
        const ano2 = ano4.replace('aa', this.ano.toString().slice(2))
        const mes2 = ano2.replace('mm', this.mes.toString())
        const mesString = mes2.replace('M', mesesDoAno[this.mes - 1])
        const dia = mesString.replace('dd', this.dia.toString())

        return dia;
    }


}