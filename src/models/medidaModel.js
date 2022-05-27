var database = require("../database/config");

function buscarUltimasMedidas(IdSignos, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_signos = ${IdSignos}
                    order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(IdSignos) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_signos 
                        from medida where fk_signos = ${IdSignos} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}