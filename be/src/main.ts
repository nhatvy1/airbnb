import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    )
    const port = process.env.PORT || 5001
    await app.listen(port, () => {
        console.log(`Server is running on the port: ${port}`)
    })
}
bootstrap()
