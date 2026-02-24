"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINIO_TOKEN = void 0;
exports.InjectMinio = InjectMinio;
const common_1 = require("@nestjs/common");
exports.MINIO_TOKEN = 'MINIO_INJECT_TOKEN';
function InjectMinio() {
    return (0, common_1.Inject)(exports.MINIO_TOKEN);
}
//# sourceMappingURL=minio.decorator.js.map