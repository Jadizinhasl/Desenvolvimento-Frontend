class Pessoa {
    private _nome: string
    private _idade: number

    constructor(nome:string, idade:number) {
        this._nome = nome
        this._idade = idade
    }

    public get idade() {
        return this.idade
    }

    public set idade(idade: number) {
        this._idade = idade
    }

    public get nome() {
        return this.nome
    }

    public set nome(idade: string) {
        this._nome = this.nome
    }
}

let pessoa = new Pessoa('fulano', 10)
pessoa.idade = 32
console.log(pessoa.idade)