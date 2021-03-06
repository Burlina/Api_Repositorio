var database = require("../database/config");

function votar(IdFadas){
    instrucaoSql = `INSERT INTO 
                        votacao (FkFada) 
                            VALUES (${IdFadas})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(IdFadas) {

    instrucaoSql = `select nome, 
    ROUND((count(fkfada) / t.total * 100),1) as porcentagem,
   count(fkfada) as id 
        from fadas
            join votacao
                on fkfada = idfadas,
                    ( SELECT COUNT(fkfada) as total from votacao) t
 group by fkFada`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(IdFadas) {
    instrucaoSql = `select nome, count(fkfada) as id from fadas
    join votacao
    on fkfada = idfadas
    group by fkFada
    order by fkfada`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}