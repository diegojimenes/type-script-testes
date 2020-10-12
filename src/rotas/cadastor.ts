import Produto from '../model/model_produto'

export default (_:any, res: any) => {
    const ramdom = Math.random() * (100 - 0) + 0
    const novoProduto = new Produto({ 
        nome: `produto-${ramdom}`, 
        preco: `R$ ${ramdom}`, 
        quantidade: (ramdom + 2) / 2 
    });
    return novoProduto.save().then(() => 
        res.send("produto cadastrado com sucesso")
    );
}