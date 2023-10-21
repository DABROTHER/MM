import { SingleItemModalPayload } from "../ModalSingleItem/interface"

export interface SingleItemAccordionProps {
  label?: string
  onSubmitHandler: (payload: SingleItemModalPayload) => void
}
