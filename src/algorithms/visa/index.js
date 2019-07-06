<div class='ps-content-wrapper-v0'>
	<p>
		In a Rock Paper Scissor tournament, the contestants stand in a straight line. Each pair of consecutive players
		compete in a round. If there is an odd number of players, the last one in the line qualifies for the next round
		without playing. For each game, each player indicates either a rock, paper or scissors denoted 'R', 'P' or 'S'
		respectively. Outcomes are as follows:
	</p>
	<ul>
		<li>
			<em>paper beats rock, P &gt; R</em>
		</li>
		<li>
			<em>scissors beat paper, S &gt; P</em>
		</li>
		<li>
			<em>rock beats scissors, R &gt; S</em>
		</li>
	</ul>
	<p>
		After each round, the winners remain and the losers are out of the competition. In case of a tie, both players
		lose. A player would like to win the competition and has one advantage: the knowledge that each other player
		uses only one type of hand formation in all the rounds of the tournament. Determine how many times the player
		will have to change the hand formation in order to win the competition.
	</p>
	<p>
		For example, the number of players, <em>n = 3</em>, and the player of interest, <em>POI</em>, is standing at
		position given by <em>a = 2</em> (0-based index). The hand formations used by other players are given by{' '}
		<em>formations = "PS"</em> with length <em>n - 1 = 2. </em>In the first round, scissors (S) beats paper (P).{' '}
		<em>POI</em> must then beat the winner of round one who always chooses scissors (S). <em>POI </em>will choose
		rock (R) and win the tournament after having chosen only one hand formation, hence the answer is <em>0</em>.
	</p>
	&nbsp;
	<p class='section-title'>Function Description</p>
	<p>
		Complete the function <em>handFormationChange</em> in the editor below. The function must return an integer, the
		number of times the <em>POI</em> needs to change hand formation.
	</p>
	handFormationChange has the following parameter(s): n: an integer, the number of players in the tournament a: an
	integer, the POI's position in the line, 0-indexed formations: a string, the hand formations of players other than
	POI
	<p>&nbsp;</p>
	<p class='section-title'>Constraints</p>
	<ul>
		<li>
			<em>
				2 ≤ n ≤ 10<sup>5</sup>
			</em>
		</li>
		<li>
			<em>0 ≤ a &lt; n</em>
		</li>
		<li>
			<em>formations[i]&nbsp;∈ {('R', 'P', 'S')} (0 ≤ i &lt; n-1)</em>
		</li>
	</ul>
	<details>
		<summary class='section-title'>Input Format For Custom Testing</summary>

		<div class='collapsable-details'>
			<p>
				The first line contains an integer, <em>n</em>, that denotes the number of participants in the
				tournament.
			</p>

			<p>
				The second line contains an integer, <em>a</em>, that denotes the position of the player of interest in
				the line of participants.
			</p>

			<p>
				The third line contains a string, <em>formations</em>, with length <em>n-1</em>, that denotes the hand
				formations used by the other participants.
			</p>
		</div>
	</details>
	Sample Case 0 Sample Input For Custom Testing 3 2 RP Sample Output 0 Explanation The POI is at position 2 to start.
	Of the first two players, paper beats rock. Next, POI 2 chooses scissors to beat paper and win the tournament. Only
	one formation is required, so no change in hand formation is required Sample Case 1 Sample Input For Custom Testing
	4 1 PRS Sample Output 1 Explanation In the first round, POI is at position 1 and must beat paper at position 0by
	choosing S, scissors. For the second pair, rock beats scissors. Now the POI must choose paper to beat rock in round
	two. It takes one change of formation to win the tournament.
</div>;
