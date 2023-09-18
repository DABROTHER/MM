export type CustomFile = File & { preview: string }

export const belowFieldClass = 'text-md font-Poppins font-medium text-lightGray'

export const currentDate = new Date().toISOString().slice(0, 16) // Get current date and time in YYYY-MM-DDTHH:MM format

export const inputLabelClass = 'text-black font-Poppins font-semibold'

export const btnTypographyClass = 'text-base font-semibold text-black font-Poppins'

export const btnClassName =
  'px-3xl py-lg text-lg leading-lg tracking-lg justify-between px-4 hover:border-lightGray cursor-not-allowed w-full flex items-center justify-center gap-4 overflow-hidden border border-lightGray text-base font-Poppins font-semibold text-black rounded-sm hover:border-black focus:outline-none custom-focus'
