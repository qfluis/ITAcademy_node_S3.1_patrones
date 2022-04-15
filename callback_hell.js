const { promises:{readFile, readdir, writeFile}, readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");

// Implementación con versiones sincronas de los métodos de fs
const darLaVuelta = () => {
  try{
    const files = readdirSync(inbox);
    for (let file of files) {
      const fileContent = readFileSync(join(inbox,file), "utf8");
      writeFileSync(join(outbox, file), reverseText(fileContent),"utf8");
      console.log(`${file} was successfully saved in the outbox!`);
    }
  } catch ( err ){
    console.log( "Error!\nDescription: ", err.message );
  }  
}

//darLaVuelta();

// OPCIÓN MEJOR en caso de necesitar asincronia:
// Implementación con async / await y versiones de las funciones de fs que utilizan promesas
const darLaVueltaAsync = async () => {
  try {
    const files = await readdir( inbox );
    for (let file of files) {
      const fileContent = await readFile( join(inbox,file), "utf8" );
      await writeFile(join(outbox, file), reverseText(fileContent),"utf8");
      console.log(`${file} was successfully saved in the outbox!`);
    }
  } catch ( err ) {
    console.log( "Error!\nDescription: ", err.message );
  }
}

darLaVueltaAsync();



// Read and reverse contents of text files in a directory
/* Callback hell old implementation ##########################################
readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
});
############################################################################## */