import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"
const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Ache os melhores gráficos <br className="sm:block hidden" /> em alguns segundos</h2>
          <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>Todas informações que precisa na palma da sua mão</p>
          <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
          <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />
      </div>
    </section>
  )

export default CardDeal