import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";


const Lista = () => {
    return (
        <ListaStyled>
           <ItemLista>
               <Foto src="https://github.com/rafa-smaciel.png">
                </Foto> 
                <Informacoes>
                    <Nome>Rafael</Nome>
                    <Valor>1000,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Rafael </Button>
                </Informacoes>
            </ItemLista>     
           <ItemLista>
               <Foto src="https://github.com/rafa-smaciel.png">
                </Foto> 
                <Informacoes>
                    <Nome>Rafael</Nome>
                    <Valor>1000,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Rafael </Button>
                </Informacoes>
            </ItemLista>     
           <ItemLista>
               <Foto src="https://github.com/rafa-smaciel.png">
                </Foto> 
                <Informacoes>
                    <Nome>Rafael</Nome>
                    <Valor>1000,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Rafael </Button>
                </Informacoes>
            </ItemLista>     
           <ItemLista>
               <Foto src="https://github.com/rafa-smaciel.png">
                </Foto> 
                <Informacoes>
                    <Nome>Rafael</Nome>
                    <Valor>1000,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar Aula com Rafael </Button>
                </Informacoes>
            </ItemLista>     
        </ListaStyled>
    )
}

export default Lista;