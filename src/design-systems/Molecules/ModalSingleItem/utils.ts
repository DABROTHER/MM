import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  names: Yup.array().of(Yup.string().required('Name is required')),

  property_name: Yup.array().of(Yup.string().required('Name is required')),
})

export function getMappedLabel(label: string | undefined) {
  switch (label) {
    case 'Properties':
      return 'Add properties'
    case 'Statistics':
      return 'Add statistics'
    case 'Levels':
      return 'Add levels'
    default:
      return label
  }
}
