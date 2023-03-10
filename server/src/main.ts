import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"


async function start () {
    const PORT = process.env.PORT || 4000 
    const app = await NestFactory.create(AppModule)
    
    const config = new DocumentBuilder()
    .setTitle('e-commerce')
    .setDescription('докуметация REST API POSTGRES')
    .setVersion("1.0.0")
    .addTag('Jess@sky')
    .build()

    const document = SwaggerModule.createDocument(app, config)
    
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`server started PORT in ${PORT}`))
}


start()
