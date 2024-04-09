import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => (
    <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className={layout.sectionImgReverse }>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}> Fácil gerenciamento  <br className="sm:block hidden"/> de sua conta bancaria e seus investimentos</h2>
          <p className="mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
           Aceitamos todos methodos de pagamento. Ainda na sua conta.
           
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <img src={apple} alt="aple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
              <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
          </div>
      </div>
    </section>
  )


export default Billing