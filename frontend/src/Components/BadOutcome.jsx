export default function BadOutcome() {
  return (
    <>
      <div className='boWrapper'>
        <h3>🌳BAD OUTCOME #1</h3>
        <p className='boWrapperBolded'>900M = malnutrition</p>
        <p>Globally, 1 in 3 &#8800; safe drinking water, mostly &#8800; LDC's.</p>
        <div className='boBubblesWrapper'>
          <div className="boBubbles"><p>HIGH...</p></div>
          <div className="boBubbles"><p>HIGH...</p></div>
          <div className="boBubbles"><p>HIGH...</p></div>
        </div>
        <p className='boWrapperSummary'>SUMMARY</p>
        <p>
        😲Inaction cost: &#123;xx&#125;, &#123;yy&#125; QALY's, &#123;zz&#125; monetary.<br/>
        💰Cost to solve problem now: &#123;xx&#125; people, &#123;yy&#125;<br/>
        investment, &#123;zz&#125; opportunity cost v. others<br/>
        💰Opportunity for innovation: Reduce cost by &#123;xx%&#125; by<br/>
        fixing &#123;1,2,3&#125;, improving ROI by &#123;yy&#125; per $ + hr spent.<br/>
        🌎Gap: Technologies & operational risk. High CapEx."<br/>
        </p>
      </div>
    </>
  )
}