import React from 'react'
import { Box, BoxProps, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export interface AccordionItem {
	summary: string
	details: string
	id: string
}

interface Props extends BoxProps {
	items: AccordionItem[]
}

const AccordionList: React.FC<Props> = ({ items, ...props }) => {
	return (
		<Box {...props}>
			{items.map((item) => (
				<Accordion key={item.summary} className='accordion' id={item.id}>
					<AccordionSummary>
						<Typography className='accordion-summary-text'>{item.summary}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography className='accordion-details-text'>{item.details}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	)
}

export default AccordionList
