"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('e-commerce')
        .setDescription('докуметация REST API POSTGRES')
        .setVersion("1.0.0")
        .addTag('Jess@sky')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    app.useGlobalGuards(jwt_auth_guard_1.JwtAuthGuard);
    await app.listen(PORT, () => console.log(`server started PORT in ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map