import { useEffect } from 'react';
const wescheme =  require('../../node_modules/wescheme-js/src/wescheme')

const Test = (code) => {
    let runner = null;
    let inter = null;
    const world = `
    (define (draw-world w) (put-image (star 20 "solid" "blue") w 30 (rectangle 300 60 "solid" "black")))
    (big-bang 0
      (on-tick add1)
      (to-draw draw-world))
    `;
    
    useEffect(() => {
        // page needs to mount prior to import to avoid window not defined error
        const evaluator = require('../../node_modules/wescheme-js/src/runtime/mzscheme-vm/evaluator')
        inter = document.getElementById('interactions');
        console.log('my name', inter)
        runner = new evaluator.Runner(inter)
        runByteCode();
    }, [])

    useEffect(() => {
        runByteCode()
    }, [code])

    function runByteCode() {
        // checking that useEffect fired correctly (should never be false)
        if (runner && inter) {
            var reportIfNoOutput = function() {
                if(inter.children.length == 0) {
                  inter.innerHTML = "The program has finished running, but only included definitions (which do not produce any output).";
                }
            };
            try {
                if (code.code != "") {
                    console.log('here', code.code)
                    runner.runCompiledCode(wescheme.compile(code).bytecode.toString());
                } else {
                    runner.runCompiledCode(wescheme.compile(world).bytecode.toString());
                }
            } catch(e) {
                // inter.innerHTML = "<span class='error'>" + e.val._fields[0].toString() + "</span>"; 
            } finally {
                reportIfNoOutput();
            }
        }
    }

    return (
        <div>
            <div id="interactions">
                hello sir
            </div>
        </div>
    )
}

export default Test