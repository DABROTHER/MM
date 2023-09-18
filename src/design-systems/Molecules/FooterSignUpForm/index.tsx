import { FooterFormProps } from './interface'

const FooterForm: React.FC<FooterFormProps> = () => {
  return (
    <>
      <div className="mt-[17px] flex gap-3">
        <input
          className="w-[233px] rounded-sm border border-lightGray bg-white px-4 py-[11px] text-[#454545] outline-none placeholder:text-md placeholder:font-normal placeholder:text-lightGray focus-within:border-black hover:border-black"
          placeholder="Your email address"
          type="text"
        />
        <button className="w-[94px] rounded-sm border border-lightGray bg-white px-[14.63px] py-[11px] text-center font-Poppins text-base font-semibold leading-[19px] text-black hover:border-black">
          Sign Up
        </button>
      </div>
    </>
  )
}

export default FooterForm
7
