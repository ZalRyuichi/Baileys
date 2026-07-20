import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡰⠒⠈⠀⠀⠀⠀⠀⠀⠀⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⠰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⡌⠄⢀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⢀⣀⣀⣤⣤⡤⣤⣶⢷⡿⢃⡤⠆⠊⠀⠢⡀⠀
⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠺⠿⣤⣅⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠈⡄
⠀⠀⠀⠇⠀⠠⠀⢀⡔⠀⠀⢀⠀⠈⠟⣛⣻⣣⣤⣬⠭⠀⠤⠤⠤⢆⠀⠀
⠀⠀⡜⡠⢂⢀⡴⠋⠀⠠⠊⠉⢀⣀⣤⣾⣿⣿⡟⠋⠀⠀⠀⠀⠀⢠⠔⠁
⠀⢠⣿⣧⣿⠟⢀⠄⡀⠀⠀⢀⣾⣿⣿⣿⣿⢛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣽⣿⣿⣿⡶⣥⠞⡰⣀⣰⣿⣿⣿⣿⣿⣿⠀⢖⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⣿⣿⣯⣼⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⡏⠀⣨⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡿⣿⣿⣿⣿⣿⣿⣿⣵⣣⣼⣿⣿⣿⣿⣿⣦⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢹⣿⣿⣿⡿⢿⣿⣿⣿⡿⢻⠟⢿⣿⠛⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠙⠋⠋⠀⢿⣿⡟⠁⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`));
console.log(chalk.hex("#00c2ff")("-".repeat(40)));
console.log(chalk.hex("#ff2ec4").bold("Яyuichi Baileys"));
console.log(chalk.hex("#ffd60a")("WhatsApp Baileys Library"));
console.log(chalk.hex("#00c2ff")("-".repeat(40) + "\n"));

console.log(chalk.hex("#39ff14")("Version : Latest"));
console.log(chalk.hex("#00e5ff")("Library : Ryuichi Baileys"));
console.log(chalk.hex("#ff5ecb")("Runtime : Node " + process.version));
console.log(chalk.hex("#c084fc")("Platform : " + process.platform + " (" + process.arch + ")"));
console.log(chalk.hex("#a3e635")("Github : github.com/ZalRyuichi"));
console.log(chalk.hex("#ff8c00")("Telegram : @ZalRyuichi"));
console.log(chalk.hex("#8a94a6")("Started : " + new Date().toLocaleString()));
console.log(chalk.hex("#8a94a6")("-".repeat(40) + "\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map