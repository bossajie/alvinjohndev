import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardComponent = ({ name, image, price, marketCap, priceChange }) => {

	function formatNumber(n) {
		var parts=n.toString().split(".");
		return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
	}

	return (
		<Card fluid color={priceChange > 0 ? 'red' : 'green'} className="card">
			<Card.Content>
				<Image
					floated='right'
					size='tiny'
					src={image}
				/>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>{<strong>{`$${formatNumber(price)}`}</strong>}</Card.Meta>
				<Card.Description>
					Market Cap: <strong>{`$${formatNumber(marketCap)}`}</strong>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className='ui two buttons'>
					<Button basic color='red'>
						Decline
					</Button>
				</div>
			</Card.Content>
		</Card>
	)
}

export default CardComponent;