"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slash_1 = __importDefault(require("slash"));
const execa_1 = __importDefault(require("execa"));
function default_1() {
    try {
        const { stdout } = execa_1.default.sync('git', [
            'rev-parse',
            '--show-toplevel',
            '--git-dir'
        ]);
        const [topLevel, gitDir] = stdout
            .trim()
            .split('\n')
            // Normalize for Windows
            .map(slash_1.default);
        return { topLevel, gitDir };
    }
    catch (error) {
        throw new Error(error.stderr);
    }
}
exports.default = default_1;
