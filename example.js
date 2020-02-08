const Commander = require('./mini-commander')

program = Object.create(Commander)
program.name = 'mini-commander\'s example'
program.description = 'a do-nothing tool'

program
    .command('help')
    .alias('h')
    .description('display this help message')
    .action(() => {
        program.usage()
        process.exit(0)
    })

program
    .command('install')
    .alias('i')
    .description('install things')
    .action(() => {
        console.log("installing things!")
    })

program
    .command('uninstall')
    .alias('u')
    .description('uninstall things')
    .action(() => {
        console.log("uninstalling things!")
    })

program.parse(process.argv)