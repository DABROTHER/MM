import * as Yup from 'yup'

export type CustomFile = File & { preview: string }

export const belowFieldClass = 'mt-[10px] text-md font-Poppins font-medium text-lightGray'

export const currentDate = new Date().toISOString().slice(0, 16) // Get current date and time in YYYY-MM-DDTHH:MM format

export const inputLabelClass = 'text-black font-Poppins font-semibold'

export const btnTypographyClass = 'text-base font-semibold text-black font-Poppins'

export const btnClassName =
  'px-3xl py-lg text-lg leading-lg tracking-lg justify-between px-4 hover:border-lightGray cursor-not-allowed w-full flex items-center justify-center gap-4 overflow-hidden border border-lightGray text-base font-Poppins font-semibold text-black rounded-sm hover:border-black focus:outline-none custom-focus'

export const startdateDropdownData = [
  { label: '1 DAY', value: 1 },
  { label: '3 DAYS', value: 3 },
  { label: '5 DAYS', value: 5 },
  { label: '7 DAYS', value: 7 },
  { label: 'CUSTOM', value: 'custom' },
]

export const endDateDropdownData = [
  { label: 'After listing', value: 'After listing' },

  { label: 'CUSTOM', value: 'custom' },
]

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is not allowed to be empty'),
  description: Yup.string().required('Description is required'),
  price: Yup.number()
    .required('Price must be a number')
    .test('Is positive?', 'Price must be a non-negative number', value => value >= 0),
  royalities: Yup.number()
    .required('"Royalties" must be a number')
    .test('Is positive?', 'Royalties must be a non-negative number', value => value >= 0),
  minimum_bid: Yup.number()
    .required('Minimum bid is required')
    .test('Is positive?', 'Minimum bid must be a non-negative number', value => value >= 0),
  file_upload: Yup.mixed()

    .nullable()
    .required('A file is required'),

  supply: Yup.number()
    .required('Supply must be a number')
    .test('Is positive?', 'Supply must be a non-negative number', value => value >= 0),
})
