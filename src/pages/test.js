import { useEffect } from 'react';
const wescheme =  require('../../node_modules/wescheme-js/src/wescheme')

const Test = () => {

    const world = `
    (define (draw-world w) (put-image (star 20 "solid" "blue") w 30 (rectangle 300 60 "solid" "black")))
    (big-bang 0
      (on-tick add1)
      (to-draw draw-world))
    `;

    let runner = null;
    let inter = null;
    
    useEffect(() => {
        // page needs to mount prior to import to avoid window not defined error
        const evaluator = require('../../node_modules/wescheme-js/src/runtime/mzscheme-vm/evaluator')
        inter = document.getElementById('interactions');
        runner = new evaluator.Runner(inter)
        runByteCode();
    }, [])

    function runByteCode() {
        // checking that useEffect fired correctly (should never be false)
        if (runner && inter) {
            var reportIfNoOutput = function() {
                if(inter.children.length == 0) {
                  inter.innerHTML = "The program has finished running, but only included definitions (which do not produce any output).";
                }
            };
                try {
                runner.runCompiledCode(wescheme.compile(world).bytecode.toString());
            } catch(e) {
                inter.innerHTML = "<span class='error'>" + e.val._fields[0].toString() + "</span>"; 
            } finally {
                reportIfNoOutput();
            }
        }
    }

    return (
        <div id="interactions">
            hello sir
        </div>
    )
}

export default Test