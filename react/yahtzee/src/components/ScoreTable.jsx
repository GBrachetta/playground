import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

class ScoreTable extends Component {
  getTotalScore() {
    const { scores } = this.props;
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }
    return totalScore;
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                description="1 point per each 1"
                name="Ones"
                score={scores.ones}
                doScore={() => doScore('ones', ones.evalRoll)}
              />
              <RuleRow
                description="2 points per each 2"
                name="Twos"
                score={scores.twos}
                doScore={() => doScore('twos', twos.evalRoll)}
              />
              <RuleRow
                description="3 points per each 3"
                name="Threes"
                score={scores.threes}
                doScore={() => doScore('threes', threes.evalRoll)}
              />
              <RuleRow
                description="4 points per each 4"
                name="Fours"
                score={scores.fours}
                doScore={() => doScore('fours', fours.evalRoll)}
              />
              <RuleRow
                description="5 points per each 5"
                name="Fives"
                score={scores.fives}
                doScore={() => doScore('fives', fives.evalRoll)}
              />
              <RuleRow
                description="6 points per each 6"
                name="Sixes"
                score={scores.sixes}
                doScore={() => doScore('sixes', sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                description="Sum all dice if 3 are equal"
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={() => doScore('threeOfKind', threeOfKind.evalRoll)}
              />
              <RuleRow
                description="Sum all dice if 4 are equal"
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={() => doScore('fourOfKind', fourOfKind.evalRoll)}
              />
              <RuleRow
                description="25 points for a full house"
                name="Full House"
                score={scores.fullHouse}
                doScore={() => doScore('fullHouse', fullHouse.evalRoll)}
              />
              <RuleRow
                description="30 points for a small straight"
                name="Small Straight"
                score={scores.smallStraight}
                doScore={() => doScore('smallStraight', smallStraight.evalRoll)}
              />
              <RuleRow
                description="40 points for a large straight"
                name="Large Straight"
                score={scores.largeStraight}
                doScore={() => doScore('largeStraight', largeStraight.evalRoll)}
              />
              <RuleRow
                description="50 points for a yahtzee"
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={() => doScore('yahtzee', yahtzee.evalRoll)}
              />
              <RuleRow
                description="Sum all dice"
                name="Chance"
                score={scores.chance}
                doScore={() => doScore('chance', chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <h2>TOTAL SCORE: {this.getTotalScore()}</h2>
      </div>
    );
  }
}

export default ScoreTable;
