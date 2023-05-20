import React from 'react';
import managedContestCards from './managedContests';
import styles from './managedContestsList.module.sass';

function ManagedContestsList () {
  return (
    <>
      <div className={styles.managedContestsListContainer}>
        <h3 className={styles.managedContestsTitle}>Managed Contests</h3>
        <p className={styles.managedContestsAbout}>
          Better than a naming agency: Our hybrid-solution partners you with a
          trained Squadhelp branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
        <ul className={styles.managedContestsList}>
          {managedContestCards.map((card, i) => (
            <li key={i}>
              <div className={styles.managedContestArticle}>
                <img src={card.iconSrc} alt={card.title} />
                <h3>{card.title} </h3>
                <p>{card.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className={styles.button}>
          <a href='#'>Learn more</a>
        </button>
      </div>
    </>
  );
}

export default ManagedContestsList;
