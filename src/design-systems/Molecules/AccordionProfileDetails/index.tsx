import React, { useState } from 'react'

import { AccordionProfileDetailsProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Accordion from 'design-systems/Atoms/Accordion'

const AccordionProfileDetails: React.FC<AccordionProfileDetailsProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Accordion className="mt-4 rounded-xs pb-[11px]" isOpen={isOpen} label={label} setIsOpen={setIsOpen}>
        {isOpen && (
          <div className="leading-[140%]">
            <div className="inline-block cursor-pointer">
              <Typography className="text-left font-Poppins text-md font-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada in pulvinar enim a, enim, pharetra,
                etiam dignissim rhoncus. In viverra tristique nec dictum at. Tempus at nunc, pretium nunc mattis risus
                adipiscing nisi. Et tincidunt a cras justo morbi sem. Massa, lacus volutpat egestas velit. Viverra velit
                condimentum amet sed id. Pellentesque nec phasellus in sit habitant imperdiet. Convallis sed vitae nulla
                potenti. Sem in nibh sit nisl risus commodo ipsum id turpis.
              </Typography>
            </div>
          </div>
        )}
      </Accordion>
    </>
  )
}

export default AccordionProfileDetails
