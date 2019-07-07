// <div class="ps-content-wrapper-v0">
//     <p>This semester you are taking a course taught by a faculty member who has a weird way of grading tests. In a test, <em>n</em> questions will be asked, and the correctness of the answers is already determined. For the <em>i<sup>th</sup></em> question, the verdict will be <em>v[i]</em>&nbsp;<em>(where&nbsp;0 ≤ i &lt; n)</em>. <span style="font-size: 16px;">If </span><em style="font-size: 16px;">v[i] = 1</em><span style="font-size: 16px;">, the answer is correct but if </span><em style="font-size: 16px;">v[i] = 0</em><span style="font-size: 16px;">, the answer is wrong.&nbsp;</span></p>

//     <p>&nbsp;</p>

//     <p>When a test is given, you have to answer the first&nbsp;<em>k</em> questions <em>(indices 0 to k-1)</em> where&nbsp;<em>0 ≤ k &lt; n</em>, and your friend has to answer the remaining questions <em>(indices k to n-1)</em> on the test. At the end, results are calculated as follows:</p>

//     <p>&nbsp;</p>

//     <div>
//         <pre style="float:left;padding-right:50px;">Your results:

//         int Your_result = 0;
//         for(int i=0;i&lt;k;i++)
// {
//     if(v[i]==1)
//                 Your_result++;
//             else Your_result--;
// }</pre>
//         <!--
// <p>&nbsp;</p>

//         <p>And your friend result will be calculated this way.</p>

//         <p>&nbsp;</p>
//         -->

// <pre>Your friend's results:

//         int YourFriend_result = 0;
//         for(int i=k;i&lt;n;i++)
// {
//     if(v[i]==1)
//                 YourFriend_result++;
//             else YourFriend_result--;
// }</pre>
//     </div>

//     <p>&nbsp;</p>

//     <p>Choose the minimum <em>k</em> such that <em>Your_result &gt; YourFriend_result</em>.</p>

//     <p>&nbsp;</p>

//     <p><strong>Function Description </strong></p>

//     <p>Complete the function <em>exam</em> in the editor below. The function must return an integer that denotes the minimum number of questions you must answer to have <em>Your_result &gt; YourFriend_result</em>.</p>

//     <p>&nbsp;</p>

//     <p>exam has the following parameter(s):</p>

//     <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>v[v[0],...v[n-1]]:</em>&nbsp; an array of integers</p>

//     <p>&nbsp;</p>

//     <p><strong>Constraints</strong></p>

//     <ul>
//         <li>
//             <em>1</em>&nbsp;<em>≤ n&nbsp;≤ 10<sup>5</sup></em>
//         </li>
//         <li>
//             <em>v[i] ∈ {0,1}</em> (where&nbsp;<em>0 ≤ i &lt; n</em>)</li>
//     </ul>

//     <p>&nbsp;</p>
//     <!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->

// <details><summary class="section-title">Input Format For Custom Testing</summary>

//             <div class="collapsable-details">
//                 <p>Input from stdin will be processed as follows and passed to the function.</p>

//                 <p>&nbsp;</p>

//                 <p>The first line contains an integer,&nbsp;<em>n</em>, the number of elements in&nbsp;<em>v</em>.</p>

//                 <p>Each line&nbsp;<em>i</em>&nbsp;of the&nbsp;<em>n</em>&nbsp;subsequent lines (where&nbsp;<em>0 ≤ i &lt; n</em>) contains an integer that describes <em>v[i]</em>.</p>

//                 <p>&nbsp;</p>
//             </div>
//         </details>
//         <!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->

// <details open="open"><summary class="section-title">Sample Case 0</summary>

//         <div class="collapsable-details">
//             <p><strong>Sample Input 0</strong></p>

//             <pre>5
//             1
//             0
//             0
//             1
// 0</pre>

//             <p>&nbsp;</p>

//             <p><strong>Sample Output 0</strong></p>

//             <pre>0</pre>

//             <p>&nbsp;</p>

//             <p><strong>Explanation 0</strong></p>

//             <p><em>n = 5</em></p>

//             <p><em>v = {1, 0, 0, 1, 0}</em></p>

//             <p>&nbsp;</p>

//             <p>If you answer <em>0</em> questions <em>(k=0)</em> then <em>Your_result = 0</em> and <em>YourFriend_result = -1</em> (<em>2</em> correct answers &amp; <em>3</em> wrong answers).</p>

//             <p>&nbsp;</p>
//         </div>
//     </details>

//     <details><summary class="section-title">Sample Case 1</summary>

//         <div class="collapsable-details">
//             <p><strong>Sample Input 1</strong></p>

//             <pre>5
//             1
//             1
//             1
//             0
// 1</pre>

//             <p>&nbsp;</p>

//             <p><strong>Sample Output 1</strong></p>

//             <pre>2</pre>

//             <p>&nbsp;</p>

//             <p><strong>Explanation 1</strong></p>

//             <p><em>n = 5</em></p>

//             <p><em>v = {1, 1, 1, 0, 1}</em></p>

//             <p>&nbsp;</p>

//             <ul>
//                 <li>
//                     <em>k = 0</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>0</em> and&nbsp;<em>YourFriend_result&nbsp;= 3</em> (<em>4</em> correct answers &amp; <em>1</em> wrong answer). &nbsp; &nbsp;</li>
//                 <li>
//                     <em>k = 1</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>1</em> and&nbsp;<em>YourFriend_result&nbsp;= 2</em> (<em>3</em> correct answers &amp; <em>1</em> wrong answer).</li>
//                 <li>
//                     <em>k = 2</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>2</em> and&nbsp;<em>YourFriend_result&nbsp;= 1</em> (<em>2</em> correct answers &amp; <em>1</em> wrong answer).</li>
//             </ul>
//         </div>
//     </details>
// </div>

function weirdfaculity() {
	return null;
}
module.exports = weirdfaculity;
