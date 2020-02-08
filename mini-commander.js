const util = require('util');

const Commander = {


    /* PRIVATE ATTRIBUTES */

    command_object: {
        alias(s) {
            this.alias = s
            return (this)
        },
        description(s) {
            this.description = s
            return (this)
        },
        action(fn) {
            this.action = fn
            return (this)
        }
    },

    /* list of command_objects */
    commands: [],


    /* PUBLIC INTERFACE */

    command(name) {
        var c = Object.create(this.command_object)
        c.name = name
        this.commands.push(c)
        return (c)
    },

    usage() {
        if (this.name) {
            console.log("NAME")
            console.log("\t" + this.name + '\n')
        }

        if (this.description) {
            console.log("DESCRIPTION")
            console.log("\t" + this.description + '\n')
        }

        if (this.command) {
            console.log("COMMANDS")
            for (let command of this.commands) {
                console.log(util.format('\t%s (%s)\t%s',
                                                        command.name,
                                                        command.alias,
                                                        command.description))
            }
        } else {
            console.log("Add some commands!")
        }
    },

    parse(av) {
        for (let command of this.commands) {
            if (command.name == av[2] || command.alias == av[2]) {
                command.action(av)
                return;
            }
        }
        this.usage()
        process.exit(1)
    }
}

module.exports = Commander