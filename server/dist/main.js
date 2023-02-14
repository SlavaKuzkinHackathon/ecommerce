"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT, () => console.log(`server started PORT in ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map