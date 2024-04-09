import { feedback } from "../constants"
import styles from "../style"
import FeedBackCard from "./FeedBackCard"

const Testemonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 feedback-container relative z-1">
        <h1 className={styles.heading2}>
          O que as pessoas <br className="sm:block hidden"/> dizem sobre nós
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px]`}>Tudo o que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative">
          {feedback.map((card) => (
            <FeedBackCard key={card.id} {...card} />
          ))}
        </div>
    </section>
  )

export default Testemonials