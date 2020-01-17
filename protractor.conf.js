// Optional, imports Serenity/JS Stage Crew Members
const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),


    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ], // loads step definitions
        format:     'pretty',               // enable console output
        compiler:   'ts:ts-node/register'   // interpret step definitions as TypeScript
    },

    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
            // crew:    [
            //     crew.consoleReporter(),
            // ]
        ],

        dialect: 'cucumber',  // or 'mocha'

        requirementsDirectory: `${process.cwd()}/features`,

        outputDirectory: `${process.cwd()}/target/site/serenity/`
    },
}