import styles from "../Stylesheets/ProblemProfile.module.css";

export default function ProblemProfile({
  summary,
  statement,
  analysis,
  opportunityCost,
  history,
  marketStakeholder,
  gap,
  incentives,
  expertConsultations,
  bestPractice,
  callToAction,
  additionalResources,
  bonus,
  credits,
}) {
  return (
    <>
      <div className={styles.summary}>
        <h1>Summary</h1>
        <div className={styles.content}>{summary}</div>
        <h2>Statement</h2>
        <div className={styles.content}>{statement}</div>
        <h2>Analysis</h2>
        <div className={styles.content}>
          {analysis[0]}
          <br />
          <br /> {analysis[1]}
        </div>
        <h2>Opportunity Cost</h2>
        <div className={styles.content}>
          {opportunityCost[0]}
          <div className={styles.contentTable}>
            <div className={styles.row}>
              <div
                className={styles.contentTableHeader}
                style={{ width: "30%" }}
              >
                Opportunity
              </div>
              <div
                className={styles.contentTableHeader}
                style={{ width: "70%" }}
              >
                Cost Break Down
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Opportunity Item
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "70%" }}
              >
                Cost
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Opportunity Item
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "70%" }}
              >
                Cost
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Opportunity Item
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "70%" }}
              >
                Cost
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Opportunity Items
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "70%" }}
              >
                Cost
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Opportunity Items
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "70%" }}
              >
                Cost
              </div>
            </div>
          </div>
          {opportunityCost[1]}
        </div>
        <h2>History</h2>
        <div className={styles.content}>{history}</div>
        <h2>Market & Stakeholder Analysis</h2>
        <div className={styles.content}>
          {marketStakeholder}
          <div className={styles.contentTable}>
            <div className={styles.row}>
              <div
                className={styles.contentTableHeader}
                style={{ width: "40%" }}
              >
                Solution Name
              </div>
              <div
                className={styles.contentTableHeader}
                style={{ width: "30%" }}
              >
                Link to Learn More
              </div>
              <div
                className={styles.contentTableHeader}
                style={{ width: "30%" }}
              >
                Category
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "40%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "40%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "40%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "40%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.contentTableContent}
                style={{ width: "40%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
              <div
                className={styles.contentTableContent}
                style={{ width: "30%" }}
              >
                Content
              </div>
            </div>
          </div>
        </div>
        <h2>Gap</h2>
        <div className={styles.content}>{gap}</div>
        <h2>Incentives</h2>
        <div className={styles.content}>{incentives}</div>
        <h2>Expert Consultations</h2>
        <div className={styles.content}>{expertConsultations}</div>
        <h2>Best Pracitices</h2>
        <div className={styles.content}>{bestPractice}</div>
        <h2>Call To Action</h2>
        <div className={styles.content}>{callToAction}</div>
        <h2>Bonus</h2>
        <div className={styles.content}>{bonus}</div>
        <div className={styles.contentFooter}>
          <div className={styles.footerColumn}>
            <h2>Additional Resources</h2>
            <div className={styles.content}>
              <p>Name of Link to Resource</p>
              <a href="">
                <i>Link to resource</i>
              </a>
            </div>
            <div className={styles.content}>
              <p>Name of Link to Resource</p>
              <a href="">
                <i>Link to resource</i>
              </a>
            </div>
            <div className={styles.content}>
              <p>Name of Link to Resource</p>
              <a href="">
                <i>Link to resource</i>
              </a>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h2>Credits</h2>
            <div className={styles.content}>{credits}</div>
          </div>
        </div>
      </div>
    </>
  );
}
