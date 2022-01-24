import styles from "./About.module.css";

import { useContext } from "react";
import LangContext from "../../store/lang-context";

const About = () => {
  const langContext = useContext(LangContext);

  const langDutch = langContext.langDutch;
  const darkMode = langContext.darkMode;

  if (darkMode) {
    const body = document.getElementById("body");
    body.classList.add("alldark");
  }

  if (!darkMode) {
    const body = document.getElementById("body");
    body.classList.remove("alldark");
  }

  return (
    <main className={styles.main}>
      {!langDutch && <h1 className={styles.mainheader}>About Idse Val</h1>}
      {langDutch && <h1 className={styles.mainheader}>Over Idse Val</h1>}
      {!langDutch && (
        <div className={styles.recommendationsGrid}>
          <p className={styles.text}>
            Hello, my name is Idse Val and I'm a self-proclaimed
            philosopher/philosopher of law. I try to be a flagbearer for human
            freedom. I think a world without free individuals is not a world
            worth living in, but more importantly I think it is not a world that
            is able to maintain itself in perpetuity. I think we as humanity
            should aim at surviving long enough to see the heat death of the
            universe.
          </p>
          <p className={styles.text}>
            Because I like freedom, I am a great proponent of the liberating
            monetary system that is Bitcoin. You will find me writing about
            Bitcoin or Bitcoin related topics quite a lot. I strongly believe
            Bitcoin is the greatest revolution of our time. In fact: I believe
            it is one of the greatest revolutions of all time. Since the
            Genesis-block in 2009 all the people in the world can freely choose
            a monetary system that provides formal justice, where the same rules
            apply to everybody. No longer would people have to use a monetary
            system that silently harvests their energy. Bitcoin empowers the
            enslaved, even those that didn't know they were enslaved.
          </p>
          <p className={styles.text}>
            Of course, I write about different things too. But it will usually
            involve freedom of body, of mind and of spirit.
          </p>
        </div>
      )}
      {langDutch && (
        <div className={styles.recommendationsGrid}>
          <p className={styles.text}>
            Hoi, mijn naam is Idse Val en ik ben een zelfbenoemd
            filsoof/rechtsfilosoof. Ik ben een voorvechter van vrijheid. Een
            wereld waar een individu niet vrij kan zijn zie ik als een wereld
            die het leven niet waard zou zijn. Belangrijker nog, is dat een
            wereld die niet vrij is zichzelf nooit op duurzame wijze in stand
            kan houden. Als mensen niet vrij zijn is er te weinig "skin in the
            game" om de wereld mooi te houden. Het lijkt me een mooie
            doelstelling om als mensheid te proberen de hittedood van het
            universum mee te maken en dat kan alleen als we zorg dragen voor
            onszelf en onze wereld. Vrijheid dus.
          </p>
          <p className={styles.text}>
            Omdat ik van vrijheid hou ben ik een groot voorstander van het
            monetaire systeem dat Bitcoin heet. Je zal me dan ook vooral zien
            schrijven over Bitcoin en Bitcoin gerelateerde dingen. Ik ben er
            sterk van overtuigd dat Bitcoin de grootste revolutie is uit onze
            tijd. Sterker nog: ik ben ervan overtuigd dat Bitcoin een van de
            meest revolutionaire ideën in de menselijke geschiedenis is. Sinds
            het Genesis-blok in 2009 kan elk individu in de wereld een monetaire
            systeem gebruiken/kiezen dat formele gelijkheid biedt en dus
            iedereen gelijk behandelt. Niet langer hoeven mensen hun energie in
            stilte te laten oogsten, zonder een manier te hebben om zich te
            verzetten. Bitcoin trekt macht terug naar de slaaf, ook al wist de
            slaaf niet eens dat hij slaaf was.
          </p>
          <p className={styles.text}>
            Natuurlijk schrijf ik ook wel eens over andere dingen. Maar het zal
            meestal gaan over vrijheid van lichaam, geest of ziel.
          </p>
        </div>
      )}
    </main>
  );
};
export default About;
