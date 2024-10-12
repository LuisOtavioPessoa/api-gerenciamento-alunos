let alunos = []; 

class UserController {
    static cadastro(request, response) {
        const { nome, nota1, nota2 } = request.body;

        if( nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
            return response.status(400).json({ message: "Informe uma nota válida" });
        }

        const media = (nota1 + nota2) / 2;

       let situacao;
       if(media >= 7){
        situacao = "Aprovado";
       } else if(media >= 4 &&  media < 7){
        situacao = "Recuperação";
       }else{
        situacao = "Reprovado";
       }
        
        const id = alunos.length > 0 ? alunos.at(-1).id + 1 : 1; 
        const aluno = { id, nome, media, situacao };

        alunos.push(aluno); 

        response.status(201).json({ message: "Novo aluno cadastrado com sucesso", aluno });
    }

    static findAll(request, response) {
        response.status(200).json({ students: alunos }); 
    }

    static findById(request, response) {
        const { id } = request.params;
        const aluno = alunos.find((aluno) => aluno.id === parseInt(id)); 

        if (!aluno) {
            response.status(404).json({ message: "Aluno não encontrado" });
            return;
        }

        response.status(200).json({ aluno }); 
    }

    static save(request, response) {
        const { nome, nota1, nota2 } = request.body;

        if( nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
            return response.status(400).json({ message: "Informe uma nota válida" });
        }

        const id = alunos.length > 0 ? alunos.at(-1).id + 1 : 1; 
        const media = (nota1 + nota2) / 2;

        let situacao;
        if(media >= 7){
            situacao = "Aprovado";
           } else if(media >= 4 &&  media < 7){
            situacao = "Recuperação";
           }else{
            situacao = "Reprovado";
           }

        let aluno = { id, nome, media, situacao };

        alunos.push(aluno);

        response.status(201).json({ message: "Aluno salvo com sucesso", aluno });
    }

    static update(request, response) {
        const { id } = request.params;
        const { nota1, nota2 } = request.body;

        const idAlunoEncontrado = alunos.findIndex((aluno) => aluno.id === parseInt(id)); 

        if (idAlunoEncontrado === -1) {
            response.status(404).json({ message: "Aluno não encontrado." });
            return;
        }

        const media = (nota1 + nota2) / 2;

        let situacao;
        if(media >= 7){
            situacao = "Aprovado";
           } else if(media >= 4 &&  media < 7){
            situacao = "Recuperação";
           }else{
            situacao = "Reprovado";
           }

        const alunoAtualizado = { 
            id: parseInt(id), 
            nome: alunos[idAlunoEncontrado].nome,  
            media, 
            situacao 
        };

        alunos[idAlunoEncontrado] = alunoAtualizado;

        response.status(200).json({ aluno: alunoAtualizado }); 
    }

    static delete(request, response) {
        const { id } = request.params;

        const idAlunoDeletado = alunos.findIndex((aluno) => aluno.id === parseInt(id)); 

        if (idAlunoDeletado === -1) {
            response.status(404).json({ message: "Aluno não encontrado" });
            return;
        }

        alunos.splice(idAlunoDeletado, 1); 

        response.status(200).json({ message: "Aluno deletado com sucesso." });
    }
}

export default UserController;
