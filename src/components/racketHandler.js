let runner = null
let inter = null
let wescheme = null
let evaluator = null

/**
 * This function will be called from a mounting useEffect hook in a TSX module
 * Inits both evaluator and wescheme as well as runner and iter
 * Should not be called more than once
 */
export function initializeConstants() {
    wescheme =  require('wescheme-js/src/wescheme')
    evaluator = require('wescheme-js/src/runtime/mzscheme-vm/evaluator')
    runner = new evaluator.Runner(inter)
    inter = document.getElementById('interactions')
}

/**
 * Defines a new runner object, compiles the code, dumps the output into inter
 * @param {string} code - the input string
 * @returns {import('../utils/types').SchemeError} - Scheme Error or null (if it runs without error)
 */
export function newRunCode(code) {
    runner = new evaluator.Runner(inter)
    return runCode(code)
}

/**
 * Used for the REPL, does not define a new runner object but produces output
 * of compiled code into inter
 * @param {string} code - the input string
 * @returns {import('../utils/types').SchemeError} - Scheme Error or null (if it runs without error)
 */
export default function runCode(code) {
    if (!inter) {
        inter = document.getElementById('interactions')
    }
    if (!runner) {
        runner = new evaluator.Runner(inter)
    }

    var reportIfNoOutput = function() {
        // if(inter.children.length == 0) {
        //   inter.innerHTML = "The program has finished running, but only included definitions (which do not produce any output).";
        // }
    };

    try {
        if (code != "") {
            console.log('code:', code)
            console.log('compiled code:', wescheme.compile(code))
            runner.runCompiledCode(wescheme.compile(code).bytecode.toString());
            console.log('after')
        } else {
            runner.runCompiledCode(wescheme.compile(code).bytecode.toString());
        }
        return null
    } catch(e) {
        console.log('in catch', e)
        return e
        // inter.innerHTML = "<span class='error'>" + e.val._fields[0].toString() + "</span>"; 
    } finally {
        reportIfNoOutput();
    }
}
