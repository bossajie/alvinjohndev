import React from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import Card from '../../components/projects/cryptotracker/Card'
import data from '../../data.json';
import './index.scss'

const CryptoTracker = () => {
	return(
		  <Container style={{ width: '100%' }}>
			<Grid centered style={{ padding: 20 }}>
				<Header as='h1'>Top 20 Cryptocurrencies by Market Capitalization</Header>
				<Grid.Row>
					{data.map((item, index) => {
						return(
							<Grid.Column mobile={16} tablet={8} computer={4} key={index} className="card">
								<Card 
									name={item.name}
									image={item.image}
									price={item.current_price}
									marketCap={item.market_cap}
									priceChange={item.price_change_percentage_24h}
								/>
							</Grid.Column>
						)
					})}
				</Grid.Row>
			</Grid>
		  </Container>
	)
}
export default CryptoTracker;