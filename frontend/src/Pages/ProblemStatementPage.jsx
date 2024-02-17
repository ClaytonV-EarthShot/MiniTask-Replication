import styles from "../Stylesheets/ProblemStatement.module.css";
import SideNav from "../Components/SideNav";
import ProblemProfile from "../Components/ProblemProfile";

const testSample = {
  summary:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  statement:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  analysis: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  ],
  opportunityCost: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  ],
  history: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  ],
  marketStakeholder:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  gap: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  incentives:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  expertConsultations:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  bestPractice:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  callToAction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam, veniam earum impedit? Reprehenderit, voluptate omnis? Dicta vel magnam qui consectetur obcaecati illo.",
  additionalResources: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam",
    "veniam earum impedit? Reprehenderit, voluptate omnis",
  ],
  bonus: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam",
    "veniam earum impedit? Reprehenderit, voluptate omnis",
  ],
  credits: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Eligendi magni quidem nobis dicta vel voluptatibus vitae quibusdam",
    "veniam earum impedit? Reprehenderit, voluptate omnis",
  ],
};

export default function ProblemStatementPage() {
  return (
    <>
      <div className={styles.problemStatementContainer}>
        <SideNav style={{ width: "3em" }} />
        <div className={styles.contentWrapper}>
          <ProblemProfile
            summary={testSample.summary}
            statement={testSample.statement}
            analysis={testSample.analysis}
            opportunityCost={testSample.opportunityCost}
            history={testSample.history}
            marketStakeholder={testSample.marketStakeholder}
            gap={testSample.gap}
            incentives={testSample.incentives}
            expertConsultations={testSample.expertConsultations}
            bestPractice={testSample.bestPractice}
            callToAction={testSample.callToAction}
            additionalResources={testSample.additionalResources}
            bonus={testSample.bonus}
            credits={testSample.credits}
          />
        </div>
      </div>
    </>
  );
}
