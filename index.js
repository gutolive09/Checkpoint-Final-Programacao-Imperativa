const escola = {
    alunos:[],
    adicionarAluno(nome, qtdFaltas, notas){
        const novoAluno ={
            nome,
            qtdFaltas,
            notas
        }

        this.alunos.push(novoAluno)
    },
    calcularMedia(nome){
        let aluno = this.alunos.find(alunos => alunos.nome == nome)
        let soma = aluno.notas.reduce((a, b)=> a + b )
        return soma/5
    },
    adicionarFaltas(nome){
        let aluno = this.alunos.find(alunos => alunos.nome == nome)
        aluno.qtdFaltas++
        console.log(aluno)
    }
};

escola.adicionarAluno("Gustavo", 0, [5, 4, 6, 7, 9]);
escola.adicionarAluno("Gabriel", 0, [6, 6, 6, 6, 6]);
escola.adicionarAluno("Lucas", 0, [8, 8, 7, 9, 4])
console.table(escola.alunos);
console.log(escola.calcularMedia("Gabriel"));
escola.adicionarFaltas("Gustavo");
escola.adicionarFaltas("Gustavo");
escola.adicionarFaltas("Gustavo");
escola.adicionarFaltas("Lucas");
escola.adicionarFaltas("Lucas");
escola.adicionarFaltas("Lucas");
escola.adicionarFaltas("Lucas");


const curso = {
    nome:"CTD",
    notaAprov:6,
    faltaMax:3,
    listaEstudantes:[],
    matricularAluno(nome){
        let aluno = escola.alunos.find(alunos => alunos.nome == nome)

        this.listaEstudantes.push(aluno)
    },  
    verificaAprov(nome){
        let aluno = escola.alunos.find(alunos => alunos.nome == nome)
        let mediaAluno = escola.calcularMedia(nome)
        if(mediaAluno >= this.notaAprov && aluno.qtdFaltas < this.faltaMax) return true
        else if(aluno.qtdFaltas == this.faltaMax && mediaAluno > this.notaAprov*1.1) return true
        else return false
    },
    listaAprov(){
        return this.listaEstudantes.map(aluno => this.verificaAprov(aluno.nome))
    }
}
curso.matricularAluno("Gustavo");
curso.matricularAluno("Gabriel");
curso.matricularAluno("Lucas");
console.table(curso.listaEstudantes);
console.log(curso.verificaAprov("Gabriel"));
console.log(curso.verificaAprov("Gustavo"));
console.log(curso.verificaAprov("Lucas"));
console.table(curso.listaAprov());
