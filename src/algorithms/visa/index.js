<div class="ps-content-wrapper-v0">
    <p>In a Rock Paper Scissor tournament, the contestants stand in a straight line. Each pair of consecutive players compete in a round. If there is an odd number of players, the last one in the line qualifies for the next round without playing. For each game, each player indicates either a rock, paper or scissors denoted 'R', 'P' or 'S' respectively. Outcomes are as follows:</p>

    <p>&nbsp;</p>

    <ul>
        <li><em>paper beats rock, P &gt; R</em></li>
        <li><em>scissors beat paper, S &gt; P</em></li>
        <li><em>rock beats scissors, R &gt; S</em></li>
    </ul>

    <p>&nbsp;</p>

    <p>After each round, the winners remain and the losers are out of the competition. In case of a tie, both players lose. A player would like to win the competition and has one advantage: the knowledge that each other player uses only one type of hand formation in all the rounds of the tournament. Determine how many times the player will have to change the hand formation in order to win the competition.</p>

    <p>&nbsp;</p>

    <p>For example, the number of players, <em>n = 3</em>, and the player of interest, <em>POI</em>, is standing at position given by <em>a = 2</em> (0-based index). The hand formations used by other players are given by <em>formations = "PS"</em> with length <em>n - 1 = 2. </em>In the first round, scissors (S) beats paper (P). <em>POI</em> must then beat the winner of round one who always chooses scissors (S). <em>POI </em>will choose rock (R) and win the tournament after having chosen only one hand formation, hence the answer is <em>0</em>.</p>
    &nbsp;
    
<p class="section-title">Function Description</p>

    <p>Complete the function <em>handFormationChange</em> in the editor below. The function must return an integer, the number of times the <em>POI</em> needs to change hand formation.</p>

    <p>&nbsp;</p>

    <p>handFormationChange has the following parameter(s):</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>n:</em>&nbsp; an integer, the number of players in the tournament</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>a:</em>&nbsp; an integer, the <em>POI</em>'s position in the line, <em>0-indexed</em></p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>formations:</em>&nbsp; a string, the hand formations of players other than <em>POI</em></p>

    <p>&nbsp;</p>

    <p class="section-title">Constraints</p>

    <ul>
        <li><em>2 ≤ n ≤ 10<sup>5</sup></em></li>
        <li><em>0 ≤ a &lt; n</em></li>
        <li><em>formations[i]&nbsp;∈ {'R', 'P', 'S'} (0 ≤ i &lt; n-1)</em></li>
    </ul>

    <p>&nbsp;</p>
    <!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->
    
<details><summary class="section-title">Input Format For Custom Testing</summary>

            <div class="collapsable-details">
                <p>The first line contains an integer, <em>n</em>, that denotes the number of participants in the tournament.</p>

                <p>The second line contains an integer, <em>a</em>, that denotes the position of the player of interest in the line of participants.</p>

                <p>The third line contains a string, <em>formations</em>, with length <em>n-1</em>, that denotes the hand formations used by the other participants.</p>
            </div>
        </details>
        <!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->
    
<details open="open"><summary class="section-title">Sample Case 0</summary>

        <div class="collapsable-details">
            <p class="section-title">Sample Input For Custom Testing</p>

            <pre>3
            2
RP</pre>

            <p class="section-title">Sample Output</p>

            <pre>0</pre>

            <p class="section-title">Explanation</p>

            <p>The <em>POI</em> is at position <em>2</em>&nbsp;to start. Of the first two players, paper beats rock. Next, <em>POI</em> chooses scissors to beat paper and win the tournament. Only one formation is required, so no change in hand formation is required</p>
        </div>
    </details>

    <details><summary class="section-title">Sample Case 1</summary>

        <div class="collapsable-details">
            <p class="section-title">Sample Input For Custom Testing</p>

            <pre>4
            1
PRS</pre>

            <p class="section-title">Sample Output</p>

            <pre>1</pre>

            <p class="section-title">Explanation</p>

            <p>In the first round, <em>POI</em> is at position <em>1</em>&nbsp;and must beat paper at position <em>0</em><em> </em>by choosing <em>S</em>, scissors. For the second pair, rock beats scissors. Now the <em>POI</em> must choose paper to beat rock in round two. It takes one change of formation to win the tournament.</p>
        </div>
    </details>
</div>
















<div class="ps-content-wrapper-v0">
    <p>This semester you are taking a course taught by a faculty member who has a weird way of grading tests. In a test, <em>n</em> questions will be asked, and the correctness of the answers is already determined. For the <em>i<sup>th</sup></em> question, the verdict will be <em>v[i]</em>&nbsp;<em>(where&nbsp;0 ≤ i &lt; n)</em>. <span style="font-size: 16px;">If </span><em style="font-size: 16px;">v[i] = 1</em><span style="font-size: 16px;">, the answer is correct but if </span><em style="font-size: 16px;">v[i] = 0</em><span style="font-size: 16px;">, the answer is wrong.&nbsp;</span></p>

    <p>&nbsp;</p>

    <p>When a test is given, you have to answer the first&nbsp;<em>k</em> questions <em>(indices 0 to k-1)</em> where&nbsp;<em>0 ≤ k &lt; n</em>, and your friend has to answer the remaining questions <em>(indices k to n-1)</em> on the test. At the end, results are calculated as follows:</p>

    <p>&nbsp;</p>

    <div>
        <pre style="float:left;padding-right:50px;">Your results:
        
        int Your_result = 0;
        for(int i=0;i&lt;k;i++)
{
    if(v[i]==1)
                Your_result++;
            else Your_result--;
}</pre>
        <!--
<p>&nbsp;</p>

        <p>And your friend result will be calculated this way.</p>

        <p>&nbsp;</p>
        -->
        
<pre>Your friend's results:
        
        int YourFriend_result = 0;
        for(int i=k;i&lt;n;i++)
{
    if(v[i]==1)
                YourFriend_result++;
            else YourFriend_result--;
}</pre>
    </div>

    <p>&nbsp;</p>

    <p>Choose the minimum <em>k</em> such that <em>Your_result &gt; YourFriend_result</em>.</p>

    <p>&nbsp;</p>

    <p><strong>Function Description </strong></p>

    <p>Complete the function <em>exam</em> in the editor below. The function must return an integer that denotes the minimum number of questions you must answer to have <em>Your_result &gt; YourFriend_result</em>.</p>

    <p>&nbsp;</p>

    <p>exam has the following parameter(s):</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>v[v[0],...v[n-1]]:</em>&nbsp; an array of integers</p>

    <p>&nbsp;</p>

    <p><strong>Constraints</strong></p>

    <ul>
        <li>
            <em>1</em>&nbsp;<em>≤ n&nbsp;≤ 10<sup>5</sup></em>
        </li>
        <li>
            <em>v[i] ∈ {0,1}</em> (where&nbsp;<em>0 ≤ i &lt; n</em>)</li>
    </ul>

    <p>&nbsp;</p>
    <!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->
    
<details><summary class="section-title">Input Format For Custom Testing</summary>

            <div class="collapsable-details">
                <p>Input from stdin will be processed as follows and passed to the function.</p>

                <p>&nbsp;</p>

                <p>The first line contains an integer,&nbsp;<em>n</em>, the number of elements in&nbsp;<em>v</em>.</p>

                <p>Each line&nbsp;<em>i</em>&nbsp;of the&nbsp;<em>n</em>&nbsp;subsequent lines (where&nbsp;<em>0 ≤ i &lt; n</em>) contains an integer that describes <em>v[i]</em>.</p>

                <p>&nbsp;</p>
            </div>
        </details>
        <!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->
    
<details open="open"><summary class="section-title">Sample Case 0</summary>

        <div class="collapsable-details">
            <p><strong>Sample Input 0</strong></p>

            <pre>5
            1
            0
            0
            1
0</pre>

            <p>&nbsp;</p>

            <p><strong>Sample Output 0</strong></p>

            <pre>0</pre>

            <p>&nbsp;</p>

            <p><strong>Explanation 0</strong></p>

            <p><em>n = 5</em></p>

            <p><em>v = {1, 0, 0, 1, 0}</em></p>

            <p>&nbsp;</p>

            <p>If you answer <em>0</em> questions <em>(k=0)</em> then <em>Your_result = 0</em> and <em>YourFriend_result = -1</em> (<em>2</em> correct answers &amp; <em>3</em> wrong answers).</p>

            <p>&nbsp;</p>
        </div>
    </details>

    <details><summary class="section-title">Sample Case 1</summary>

        <div class="collapsable-details">
            <p><strong>Sample Input 1</strong></p>

            <pre>5
            1
            1
            1
            0
1</pre>

            <p>&nbsp;</p>

            <p><strong>Sample Output 1</strong></p>

            <pre>2</pre>

            <p>&nbsp;</p>

            <p><strong>Explanation 1</strong></p>

            <p><em>n = 5</em></p>

            <p><em>v = {1, 1, 1, 0, 1}</em></p>

            <p>&nbsp;</p>

            <ul>
                <li>
                    <em>k = 0</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>0</em> and&nbsp;<em>YourFriend_result&nbsp;= 3</em> (<em>4</em> correct answers &amp; <em>1</em> wrong answer). &nbsp; &nbsp;</li>
                <li>
                    <em>k = 1</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>1</em> and&nbsp;<em>YourFriend_result&nbsp;= 2</em> (<em>3</em> correct answers &amp; <em>1</em> wrong answer).</li>
                <li>
                    <em>k = 2</em>.&nbsp;<em>Your_result</em> <strong>= </strong><em>2</em> and&nbsp;<em>YourFriend_result&nbsp;= 1</em> (<em>2</em> correct answers &amp; <em>1</em> wrong answer).</li>
            </ul>
        </div>
    </details>
</div>











