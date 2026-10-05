import { EVENT } from "@/content/event";
import {
  HARDWARE_BONUS,
  HARDWARE_BONUS_HEADING,
  JUDGING_RUBRIC_PATH,
  RUBRIC_CRITERIA,
  RUBRIC_FORMULA,
  RUBRIC_LEAD,
  SCORE_LEVELS,
  SCORING_NOTES,
} from "@/content/rubric";
import { withBase } from "@/lib/base-path";

export function JudgingRubric() {
  return (
    <section className="prose card" id="statewide-judging-rubric" aria-label="Official statewide judging rubric">
      <h2>Official statewide judging rubric</h2>
      <p>
        This is the official statewide judging rubric for the {EVENT.name}. {RUBRIC_LEAD}
      </p>
      <p>{RUBRIC_FORMULA}</p>
      <p>
        <a href={withBase(JUDGING_RUBRIC_PATH)} target="_blank" rel="noopener">
          Download the judging rubric workbook
        </a>
      </p>
      <div className="table-wrap" tabIndex={0}>
        <table>
          <caption>Criteria and weights</caption>
          <thead>
            <tr>
              <th scope="col">Criterion</th>
              <th scope="col">Weight</th>
              <th scope="col">What it measures</th>
            </tr>
          </thead>
          <tbody>
            {RUBRIC_CRITERIA.map((criterion) => (
              <tr key={criterion.name}>
                <th scope="row">{criterion.name}</th>
                <td>{criterion.weight}</td>
                <td>{criterion.measures}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">Total weight (must equal 100%)</th>
              <td>100%</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      {RUBRIC_CRITERIA.map((criterion) => (
        <div key={criterion.name}>
          <h3>
            {criterion.name} ({criterion.weight})
          </h3>
          <p>{criterion.measures}</p>
          <div className="table-wrap" tabIndex={0}>
            <table>
              <caption>
                {criterion.name} ({criterion.weight})
              </caption>
              <thead>
                <tr>
                  {SCORE_LEVELS.map((level) => (
                    <th key={level} scope="col">
                      {level}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {criterion.levels.map((level) => (
                    <td key={level}>{level}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Questions judges can ask.</strong> {criterion.question}
          </p>
        </div>
      ))}
      <h3>{HARDWARE_BONUS_HEADING}</h3>
      <div className="table-wrap" tabIndex={0}>
        <table>
          <caption>{HARDWARE_BONUS_HEADING}</caption>
          <thead>
            <tr>
              <th scope="col">Hardware tier</th>
              <th scope="col">Bonus pts</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {HARDWARE_BONUS.map((tier) => (
              <tr key={tier.tier}>
                <th scope="row">{tier.tier}</th>
                <td>{tier.points}</td>
                <td>{tier.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Scoring notes</h3>
      <ul>
        {SCORING_NOTES.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
