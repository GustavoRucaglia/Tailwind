
const Button = ({styles}: {styles: string }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} w-[50%] rounded-[10px]`}>
      <p>Vamos começar</p>
    </button>
  )
}

export default Button