import * as fs from "fs";
import process from "process";
import { Cell } from "ton-core";
import { compileFunc } from "@ton-community/func-js";

async function compileScript() {

    console.log("Run Script ...")
    console.log("Run started, find FunC code to compile...")

    const compileResult = await compileFunc({
        targets: ["./contracts/main.fc"],
        sources: (x) => fs.readFileSync(x).toString("utf8"),
    });
    //Вывод ошибки компиляции будет передаваться вместе с сообщением компиляции 
    if (compileResult.status === "error"){ 
        console.log("Compilation Error");
        console.log(`\n${compileResult.message}`);
        process.exit(1);
    }

    console.log("Compile success!")

    const hexArtifact = `build/main.compiled.json`;

    fs.writeFileSync(
        hexArtifact,
        JSON.stringify({
            hex: Cell.fromBoc(Buffer.from(compileResult.codeBoc, "base64")) [0] //Посмотреть что внутри ячейки, в качестве входных данных идет буфер
                .toBoc()
                .toString("hex"), //Переделываем в стринг
    }))

 
    console.log(" Compiled code saved to " + hexArtifact);
}

compileScript();
//Запускать каждый раз при компиляции