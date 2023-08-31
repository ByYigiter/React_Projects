import './SepetHome.css'
import {useState, useEffect} from 'react'
import Header from '../03-sepet-uygulama/Header';
import Product from '../03-sepet-uygulama/Product';
import Basket from '../03-sepet-uygulama/Basket';
import products from './products.json'

function App() {

	const [money, setMoney] = useState(10000)
	const [basket, setBasket] = useState([])
	const [total, setTotal] = useState(0)

	const resetBasket = () => {
		setBasket([])
	}

	useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])

	return (
		<>
			<Header total={total} money={money}/>
			<div className="container products">
				{products.map(product => (
					<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
				))}
			</div>
			{total > 0 && (
				<Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
			)}
		</>
	);
}

export default App;