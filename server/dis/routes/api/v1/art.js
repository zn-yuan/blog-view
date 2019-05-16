"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const art_1 = __importDefault(require("../../../controller/art"));
const router = new koa_router_1.default();
router.get("/list", art_1.default.list);
exports.default = router.routes();
//# sourceMappingURL=art.js.map