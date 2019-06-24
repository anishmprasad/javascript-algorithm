{
	/* <div style="height: 100%; overflow: auto;" id="standard_task_description" class="protected"><div class="task-description-content task-description__TaskContentWrapper-sc-380ibo-1 fDHMwF">

    <meta http-equiv="content-type" content="text/html; charset=utf-8">


        <div id="brinza-task-description">
            <p>There is a company that has a very creative way of managing its accounts. Every time they want to write down a number, they shuffle its digits in the following way: they alternatively write one digit from the front of the number and one digit from the back, then the second digit from the front and the second from the back, and so on until the length of the shuffled number is the same as that of the original.</p>
            <p>Write a function</p>
            <blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(A);</tt></p></blockquote>
            <p>that, given a positive integer A, returns its shuffled representation.</p>
            <p>For example, given A = 123456 the function should return 162534.</p>
            <p>Given A = 130 the function should return 103.</p>
            <p>Assume that:</p>
            <blockquote><ul style="margin: 10px;padding: 0px;"><li>A is an integer within the range [<span class="number">0</span>..<span class="number">100,000,000</span>].</li>
            </ul>
            </blockquote><p>In your solution, focus on <b><b>correctness</b></b>. The performance of your solution will not be the focus of the assessment.</p>
        </div>

</div></div>



    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');

    function solution(A) {
        // write your code in JavaScript (Node.js 8.9.4)
    } */
}

function solution(num) {
	var str = num.toString();
	var result = '';
	if (!isNaN(num) && num >= 0 && num <= 100000000) {
		for (var i = 0; i < str.length; i++) {
			if (i % 2 == 0) {
				result += str[Math.floor(i / 2)];
			} else {
				result += str[str.length - Math.floor(i / 2 + 1)];
			}
		}
	}
	return result;
}

module.exports = solution;
