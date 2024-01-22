import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/widgets'
import './App.scss'
import {
	Home,
	Transactions,
	Products,
	Categories,
	Brands,
	Storage,
	Auth,
	Users,
	Companies,
	WebApp,
} from '@/pages'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/transactions' element={<Transactions />} />
				<Route path='/products' element={<Products />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/companies' element={<Companies />} />
				<Route path='/brands' element={<Brands />} />
				<Route path='/storage' element={<Storage />} />
				<Route path='/users' element={<Users />} />
			</Route>
			<Route path='/auth' element={<Auth />} />
			<Route path='/webapp' element={<WebApp />} />
		</Routes>
	)
}

export { App }
