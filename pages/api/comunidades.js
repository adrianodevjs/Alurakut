import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
    
    if(request.method === 'POST'){
        const TOKEN = '';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: '968412',
            ...request.body,
        })

        response.json({
            dados: 'Algum dado aqui',
            registroCriado: registroCriado
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}